  precision lowp float;
  varying vec2 vPosition;
  uniform vec4 uColor;
  uniform float uTime;
  
  void main() {
      float theta = atan(vPosition.y, vPosition.x);
      float rho = length(vPosition.xy-vec2(0., 4.));
      float v = mod(rho - uTime/10., .2);
      float alpha = smoothstep(.1, .5, v);
      alpha *= (1. - smoothstep(0., 6., rho));
      gl_FragColor = alpha * uColor;
  }

