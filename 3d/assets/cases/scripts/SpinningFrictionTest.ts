import {
    _decorator, Component, Node,
    Quat, v3,
    PhysicMaterial, instantiate, Collider,
    Prefab, CCInteger, Vec3, RigidBody,
    Color, Mat4, mat4, quat,
} from 'cc';
import { getGeometryRender } from './GeometryRenderer';
const { ccclass, property } = _decorator;

@ccclass('SpinningTest')
export class SpinningTest extends Component {
    private bodies: RigidBody[] = [];

    @property({ min: 1, type: CCInteger })
    rollings = 5;

    @property({ min: 1, type: CCInteger })
    spinnings = 5;

    @property({ type: Prefab })
    ballPrefab: Prefab = null;

    @property({ min: 1 })
    cellSize = 1.0;

    @property({ min: 0 })
    maxTorqueMagnitude = 10;

    torqueMagnitudeFactor = 1.0;

    @property({ min: 1, unit: 's' })
    torqueTimeLength = 1;

    setTorqueMagnitudeFactor(slider: { progress: number }) {
        this.torqueMagnitudeFactor = slider.progress;
    }

    private _origin = v3();

    start() {
        const xBase = -this.cellSize * (this.rollings - 1) / 2;
        const zBase = -this.cellSize * (this.spinnings - 1) / 2;
        for (let iRolling = 0; iRolling < this.rollings; ++iRolling) {
            for (let iSpinning = 0; iSpinning < this.spinnings; ++iSpinning) {
                const material = new PhysicMaterial();
                material.friction = 0.0;
                material.restitution = 0.0;
                material.rollingFriction = 1.0 / (this.rollings - 1) * iRolling;
                material.spinningFriction = 1.0 / (this.spinnings - 1) * iSpinning;
                const ball = instantiate(this.ballPrefab);
                const [body, collider] = [
                    ball.getComponent(RigidBody)!,
                    ball.getComponent(Collider)!,
                ];
                collider.material = material;
                ball.position = v3(
                    xBase + this.cellSize * iSpinning,
                    0.0,
                    zBase + this.cellSize * iRolling,
                );
                ball.parent = this.node;
                this.bodies.push(body);
            }
        }
        this._origin.set(
            xBase,
            0.0,
            zBase,
        );
    }

    protected update(dt: number): void {
        this.drawAxis();
    }

    torque() {
        for (const body of this.bodies) {
            body.clearState();
            body.node.worldRotation = Quat.IDENTITY;
        }
        const torqueMag = this.torqueMagnitudeFactor * this.maxTorqueMagnitude;
        this.schedule(() => {
            for (const body of this.bodies) {
                const dir = Vec3.UNIT_Y;
                body.applyLocalTorque(Vec3.multiplyScalar(v3(), dir, torqueMag));
            }
        }, undefined, 60 * this.torqueTimeLength);
    }

    drawAxis() {
        const geometryRenderer = getGeometryRender();
        if (!geometryRenderer) {
            return;
        }

        const addAxis = (dir: Vec3, length: number, color: Color) => {
            const end = Vec3.scaleAndAdd(v3(), this._origin, dir, length);

            geometryRenderer.addLine(
                this._origin,
                end,
                color,
            );
    
            geometryRenderer.addCone(
                Vec3.ZERO,
                length * 0.02,
                length * 0.02,
                color,
                64,
                false,
                true,
                true,
                true,
                Mat4.fromSRT(
                    mat4(),
                    Quat.rotationTo(quat(), Vec3.UNIT_Y, dir),
                    end,
                    Vec3.ONE,
                ),
            );
        };

        addAxis(Vec3.UNIT_X, (this.spinnings - 0.6) * this.cellSize, Color.RED);
        addAxis(Vec3.UNIT_Z, (this.rollings - 0.6) * this.cellSize, Color.BLUE);
    }
}


