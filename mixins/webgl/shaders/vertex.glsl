uniform vec2 uResolution;
uniform vec2 uQuadSize;
uniform vec2 uMouse;
uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
