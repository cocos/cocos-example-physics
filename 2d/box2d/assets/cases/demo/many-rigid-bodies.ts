import { _decorator, Component, instantiate, LabelComponent, Node, RigidBody, RigidBody2D, Toggle, tween, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('many_rigid_bodies')
export class many_rigid_bodies extends Component {

    @property
    rotateSpeed = 0

    @property
    maxRigidBodyNumb = 300

    @property
    rigidBodySpawnRate = 10 //per second

    @property
    // linearSpeed = 100

    @property
    enableContactListener = true

    //rotate-bar
    //@property({type: Node})
    _rotateBar: Node = null!;
    _rigidBodies: Node = null!;
    _rigidBodyBox: Node = null!;
    _rigidBodyCircle: Node = null!;
    _rigidBodyPolygon: Node = null!;
    
    _rigidBodyNumber: Node = null!;
    _maxRigidBodyNumber: Node = null!;
    _spawnRate: Node = null!;
    _rotateSpeed: Node = null!;
    _enableContactListener: Node = null!;

    newRigidBodyNumb = 0;

    start() {
        this._rigidBodies = this.node.getChildByName("rigidBodies")!;
        this._rigidBodyNumber = this.node.getChildByName("Info")!.getChildByName("rigidBodyNumb")?.getChildByName("value")!;
        this._maxRigidBodyNumber = this.node.getChildByName("Control")!.getChildByName("MaxRigidBodyNumber")?.getChildByName("Value")!;
        this._spawnRate = this.node.getChildByName("Control")!.getChildByName("SpawnRate")?.getChildByName("Value")!;
        this._rotateSpeed = this.node.getChildByName("Control")!.getChildByName("RotateSpeed")?.getChildByName("Value")!;
        this._enableContactListener = this.node.getChildByName("Control")!.getChildByName("EnableContactListener")?.getChildByName("Toggle")!;
        //find rotate-bar
        this._rotateBar = this.node.getChildByName("rotateBar")!;
        this._rigidBodyBox = this.node.getChildByName("prefab")!.getChildByName("rigidBodyBox")!;
        this._rigidBodyCircle = this.node.getChildByName("prefab")!.getChildByName("rigidBodyCircle")!;
        this._rigidBodyPolygon = this.node.getChildByName("prefab")!.getChildByName("rigidBodyPolygon")!;
    }

    update(deltaTime: number) {
        let euler = this._rotateBar.eulerAngles;
        this._rotateBar.eulerAngles = new Vec3(euler.x, euler.y, euler.z + this.rotateSpeed * deltaTime);

        if(this._rigidBodies.children.length < this.maxRigidBodyNumb) {
            this.newRigidBodyNumb += (this.rigidBodySpawnRate * deltaTime);
            if(this.newRigidBodyNumb >= 1) {
                let a = this.maxRigidBodyNumb - this._rigidBodies.children.length;
                if (this.newRigidBodyNumb > a) {
                    this.newRigidBodyNumb = a;
                }

                for(let i = 0; i < this.newRigidBodyNumb; i++) {
                    let newRB: Node = null!;
                    let shapeType = Math.floor(Math.random()*9) % 5;
                    if(shapeType === 0 || shapeType === 1){
                        newRB = instantiate(this._rigidBodyBox) as Node;
                    } else if(shapeType === 2 || shapeType === 3) {
                        newRB = instantiate(this._rigidBodyCircle) as Node;
                    } else if(shapeType === 4) {
                        newRB = instantiate(this._rigidBodyPolygon) as Node;
                    }

                    newRB.active = true; 
                    // newRB.position = new Vec3((Math.random()*2-1) * 400, 250 + (Math.random()*2-1) * 1, 0);
                    newRB.position = new Vec3((Math.random()*2-1) * 100, 250 + (Math.random()*2-1) * 1, 0);
                    (newRB.getComponent(RigidBody2D)! as RigidBody2D).linearVelocity = new Vec2(Math.random() * 1, Math.random() * 1);
                    newRB.getComponent(RigidBody2D)!.enabledContactListener = this.enableContactListener;
                    this._rigidBodies.addChild(newRB);
                }

                this.newRigidBodyNumb = 0;
            }
        }

        (this._rigidBodyNumber.getComponent("cc.Label")! as LabelComponent).string = this._rigidBodies.children.length.toString();
    }

    onMaxRigidBodyNumbChanged(customEventData: any) {
        this.maxRigidBodyNumb = Math.floor(customEventData._progress * 1000);
        (this._maxRigidBodyNumber.getComponent("cc.Label")! as LabelComponent).string = this.maxRigidBodyNumb.toString();
        this._rigidBodies.destroyAllChildren();
    }

    onRigidBodySpawnRateChanged(customEventData: any) {
        this.rigidBodySpawnRate = Math.floor(customEventData._progress * 100);
        (this._spawnRate.getComponent("cc.Label")! as LabelComponent).string = this.rigidBodySpawnRate.toString();
    }

    onRotateSpeedChanged(customEventData: any) {
        this.rotateSpeed = Math.floor(customEventData._progress * 180);
        (this._rotateSpeed.getComponent("cc.Label")! as LabelComponent).string = this.rotateSpeed.toString();
    }

    onEnableContactListenerChanged(toggle: Toggle) {
        this.enableContactListener = toggle.isChecked;
        this._rigidBodies.destroyAllChildren();
    }
}
