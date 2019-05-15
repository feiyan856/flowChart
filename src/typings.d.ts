/**
 * 3D词云
 */
declare let wordCloud: {
  mcList: any,
  active: any,
  oDiv: any,
  mouseX: any,
  mouseY: any,
 init: () => void;
  update: () => void;
  depthSort: () => void;
  positionAll: () => void;
  doPosition: () => void;
  sineCosine: (a: any, b: any, c: any ) => void;
/*  mouseOverEvent: () => void;
  mouseOutEvent: () => void;
  mouseMoveEvent: (e: any) => void;*/
};
/**
 * 流程图
 */
declare var d3;
declare var dagreD3;
declare let diagGraph: {
  state: null;
  edg: null;
  statePoint: '';
  g: '';
  graphWidth: 0,
  graphHeight: 0,
  init: (statePoint: any, state: any, edg: any) => void;
  createG: () => void;
  drawNode: () => void;
  drawEdg: () => void;
  renderG: (any) => void;
  changePoint: () => void;
};
declare  let dagredGraph: {
  state: null;
  edg: null;
  data: null;
  edgCount: number;
  drawEdgCount: number;
  statePoint: '';
  g: '';
  graphWidth: 0,
  graphHeight: 0,
  lastScale: 0,
  inner: '',
  t: 0,
  svg: '',
  dagreD3render: '',
  init: (svgDom: any, interFrameTime: any, data: any, edg: any) => void;
  createG: () => void;
  renderG: () => void;
  animateFrame: (RenderAfter: any, Frame: any) => void;
  animateStory: (RenderAfter: any) => void;
  drawNode: (el: any) => void;
  drawEdg: (el: any) => void;
  addUIAnimate: () => void;
};
