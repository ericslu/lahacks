import { ContainerFrame } from "./SpectaclesInteractionKit.lspkg/Components/UI/ContainerFrame/ContainerFrame";

@component
export class NewScript extends BaseScriptComponent {

    @input
    collider: ColliderComponent;

    @input
    container: ContainerFrame;


    // this.container

    onAwake() {
        this.createEvent("OnStartEvent").bind(this.onStartEvent.bind(this))
    }

    // First frame
    private onStartEvent() {
        // Initialize Collider Event (using event args)
        this.collider.onCollisionEnter.add((e) => {
            e.collision.collider // Other obj
            // this.sceneObject.enable
        });
    }
}
