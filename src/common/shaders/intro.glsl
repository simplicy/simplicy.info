
#define TAU 6.28318530718

precision mediump float;

varying vec2 vPosition;
uniform float uTime;

uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform float iTimeDelta;
uniform float iFrame;
uniform float iChannelTime[4];
uniform vec3 iChannelResolution[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;

  
uniform float foo[2];

vec3 rgb(int r, int g, int b) {
  return vec3(float(r), float(g), float(b))/256.; 
}
  
void main() {
        // Period
        const float T = 20.;
        const float w = TAU / T;
  
        float nSymmetries = 1. + 2.*sin(w * uTime);
        vec2 uv = vPosition.xy;
        vec3 color = vec3(0.);
  
        const int nColors = 3;
        vec3 colors[nColors];

        /* colors defined by 
        https://meodai.github.io/rampensau/
        generateColorRamp({
  total: 4,
  hStart: 202.000,
  hStartCenter: 1.000,
  hEasing: 
    x => x,
  hCycles: 1.577,

  sRange: [0.863, 0.992],
  lRange: [0.379, 0.826],
  
  sEasing:
    x => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
  lEasing: 
    x => -(Math.cos(Math.PI * x) - 1) / 2,
});

        */
  
        colors[0] = rgb(1,1,1);
        colors[1] = rgb(150,150,150);
        colors[2] = rgb(100,100,100);
  
        float a = TAU/nSymmetries;

        float theta = atan(uv.y, uv.x); // between -TAU/2 and TAU/2
        float rho = length(uv);

        theta += uTime/10. + 20. +  2.*sin(w * uTime + floor(rho*2.)) + uTime/2. *floor(rho*1.);      
      
        theta = mod(theta + TAU, TAU);      
  
        float theta_ix = floor(theta/a);
        theta = mod(theta, a);
  
        for(int i = 0; i < nColors; i ++){
          color = i == int(theta_ix) ? colors[i] : color;
        }
        gl_FragColor = theta/a * vec4(color, 1.);
}
