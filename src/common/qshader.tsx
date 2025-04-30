import { animate, getComputedStylePropRGBA } from "quad-shader";

export default function QShader(id: string, fragment: string) {
  // The the canvas element we'll be drawing on
  let canvas = document.querySelector(id);
  if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("No canvas found");
  const qs = animate(canvas, fragment);
  qs.uniform4f("uColor", () => getComputedStylePropRGBA(qs.canvas, "color"));
  qs.uniform4f("uBackgroundColor", () => getComputedStylePropRGBA(qs.canvas, "background-color"));
  qs.uniform2f("uResolution", () => [qs.canvas.width, qs.canvas.height]);

}

