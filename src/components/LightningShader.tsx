import { useEffect, useRef } from 'react';

type Props = {
  hue?: number;
  xOffset?: number;
  speed?: number;
  intensity?: number;
  size?: number;
  className?: string;
};

/**
 * Lightning bolt animado vía shader WebGL.
 * Adaptado de design4 (hero-odyssey). 100% generado por GPU.
 */
export default function LightningShader({
  hue = 265,
  xOffset = 0,
  speed = 1.4,
  intensity = 0.6,
  size = 2,
  className = '',
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };
    resize();
    window.addEventListener('resize', resize);

    const gl = canvas.getContext('webgl', { premultipliedAlpha: false, antialias: false });
    if (!gl) {
      console.warn('[Lightning] WebGL no disponible — el fondo se mostrará negro.');
      return () => window.removeEventListener('resize', resize);
    }

    const vertexShaderSrc = `
      attribute vec2 aPosition;
      void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }
    `;

    const fragmentShaderSrc = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize;

      #define OCTAVE_COUNT 10

      vec3 hsv2rgb(vec3 c) {
        vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
        return c.z * mix(vec3(1.0), rgb, c.y);
      }

      float hash11(float p) {
        p = fract(p * .1031);
        p *= p + 33.33;
        p *= p + p;
        return fract(p);
      }

      float hash12(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * .1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }

      mat2 rotate2d(float theta) {
        float c = cos(theta); float s = sin(theta);
        return mat2(c, -s, s, c);
      }

      float noise(vec2 p) {
        vec2 ip = floor(p);
        vec2 fp = fract(p);
        float a = hash12(ip);
        float b = hash12(ip + vec2(1.0, 0.0));
        float c = hash12(ip + vec2(0.0, 1.0));
        float d = hash12(ip + vec2(1.0, 1.0));
        vec2 t = smoothstep(0.0, 1.0, fp);
        return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
      }

      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < OCTAVE_COUNT; ++i) {
          value += amplitude * noise(p);
          p *= rotate2d(0.45);
          p *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 uv = fragCoord / iResolution.xy;
        uv = 2.0 * uv - 1.0;
        uv.x *= iResolution.x / iResolution.y;
        uv.x += uXOffset;
        uv += 2.0 * fbm(uv * uSize + 0.8 * iTime * uSpeed) - 1.0;

        float dist = abs(uv.x);
        vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.85));
        vec3 col = baseColor * pow(mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist, 1.0) * uIntensity;
        fragColor = vec4(col, 1.0);
      }

      void main() { mainImage(gl_FragColor, gl_FragCoord.xy); }
    `;

    const compile = (src: string, type: number): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('[Lightning] shader error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compile(vertexShaderSrc, gl.VERTEX_SHADER);
    const fs = compile(fragmentShaderSrc, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('[Lightning] link error:', gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const verts = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, 'iResolution');
    const uTime = gl.getUniformLocation(program, 'iTime');
    const uHue = gl.getUniformLocation(program, 'uHue');
    const uXOff = gl.getUniformLocation(program, 'uXOffset');
    const uSpeed = gl.getUniformLocation(program, 'uSpeed');
    const uInt = gl.getUniformLocation(program, 'uIntensity');
    const uSize = gl.getUniformLocation(program, 'uSize');

    const start = performance.now();
    const render = () => {
      resize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.uniform1f(uHue, hue);
      gl.uniform1f(uXOff, xOffset);
      gl.uniform1f(uSpeed, speed);
      gl.uniform1f(uInt, intensity);
      gl.uniform1f(uSize, size);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hue, xOffset, speed, intensity, size]);

  return <canvas ref={canvasRef} className={`block h-full w-full ${className}`} />;
}
