@cc._decorator.ccclass()

class SceneLoadObj extends cc.Component {
    @cc._decorator.property(Number)
    objectCount = 3;

    start() {
        const scene = this.node.parent;

        const sphereAsset = scene.getChildByName('Sphere').getComponent(cc.ModelComponent).mesh;
        const boxAsset = scene.getChildByName('Box').getComponent(cc.ModelComponent).mesh;
        const ground = scene.getChildByName('Ground');
        const groundCollider = ground.getComponent('cc.ColliderComponentBase');
        const groundRigid = ground.getComponent('cc.RigidBodyComponent');
        groundRigid.material = new cc.PhysicsMaterial();
    }
}
