import { renderer, Camera, director, find, GeometryRenderer } from "cc";
import { EDITOR_NOT_IN_PREVIEW } from "cc/env";

export function getGeometryRender (): GeometryRenderer | null | undefined {
    let camera: renderer.scene.Camera | undefined = undefined;
    if (EDITOR_NOT_IN_PREVIEW) {
        camera = globalThis.cce?.Camera.camera.camera as renderer.scene.Camera;
    } else {
        camera = find('Main Camera')?.getComponent(Camera)?.camera;
    }
    if (!camera) {
        return;
    }

    if (camera) {
        camera.initGeometryRenderer();
    }
    
    const geometryRenderer = camera && camera.geometryRenderer || director.root?.pipeline.geometryRenderer;
    return geometryRenderer;
}