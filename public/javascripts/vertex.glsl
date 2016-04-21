attribute vec2 position;
attribute vec3 color;

varying vec3 vColor;

void main() {
  gl_Position = vec4(position, 0.0, 1.0)
  vColor = color
}
