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
};
