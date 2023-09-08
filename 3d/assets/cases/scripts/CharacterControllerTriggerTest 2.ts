import { _decorator, ColliderComponent, Color, Component, LabelComponent, Material, ModelComponent, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CharacterControllerTriggerTest')
export class CharacterControllerTriggerTest extends Component {

    // @property({ type: Material})
    // public enteringMat: Material = null as any;
    // @property({ type: Material})
    // public exitingMat: Material = null as any;
    ResultLabel: any;

    onLoad() {        
        const collider = this.getComponent(ColliderComponent);
        if (collider) {
            collider.on('onControllerTriggerEnter', this.onControllerTriggerEnter, this);
            collider.on('onControllerTriggerStay', this.onControllerTriggerStay, this);
            collider.on('onControllerTriggerExit', this.onControllerTriggerExit, this);
        }
        this.ResultLabel = this.node.scene.getChildByName('Canvas')!.getChildByName('Result')!.getComponent(LabelComponent)!;
    }

    onControllerTriggerEnter(event: any) {
        //console.log('onControllerTriggerEnter', event);
        this.ResultLabel.string = 'onControllerTriggerEnter';
        const modelCom = event.collider.node.getComponent(ModelComponent);
        modelCom.material.setProperty('mainColor', new Color(255, 0, 0, 255));
    }

    onControllerTriggerStay(event: any) {
        this.ResultLabel.string = 'onControllerTriggerStay';
        //console.log('onControllerTriggerStay', event);
    }

    onControllerTriggerExit(event: any) {
        this.ResultLabel.string = 'onControllerTriggerExit';
        //console.log('onControllerTriggerExit', event);
        const modelCom = event.collider.node.getComponent(ModelComponent);
        modelCom.material.setProperty('mainColor', new Color(255, 255, 0, 255));
    }

    update(deltaTime: number) {
        
    }
}


