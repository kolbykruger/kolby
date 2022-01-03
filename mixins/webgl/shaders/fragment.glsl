uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
    vec4 myimage = texture(uTexture, vUv);
    gl_FragColor = myimage;
    // gl_FragColor = vec4(vUv, 0., 1.);
}
