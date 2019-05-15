import { Component } from '@angular/core';
import {flowData} from './mock.data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '流程图';
  showAll = false;
  constructor() { }

  ngOnInit() {
    this.showFloatChart();
  }
  showFloatChart() {
    const result = flowData;
    let state = [];
    let edg = [];
    if (result) {
      result.state.forEach( stateTemp => {
        state.push(
          {
            id: stateTemp.id,
            label:  stateTemp.label,
            class: 'type-common',
            dbType: stateTemp.dbType
          }
        );
      });
      result.edg.forEach( edgTemp => {
        /*const optionDemp = JSON.parse(edgTemp.option);*/
        edg.push(
          {
            start: edgTemp.start,
            end: edgTemp.end,
            option: edgTemp.option
          },
        );
      });
      /* // 当前选中的点*/
      const statePoint = 1;
      /*//创建关系图*/
      diagGraph.init(statePoint, state, edg);
      /*$('#svgCanvas').attr('width', diagGraph.graphWidth);
      $('#svgCanvas').attr('height', diagGraph.graphHeight);*/
    }
  }
  showFullCanvas() {
    /*显示全屏*/
    this.showAll = true;
    /** 获取要展示全屏的元素 */
    let fullscreenDiv = document.getElementById('showCanvas');
    let fullscreenFunc = fullscreenDiv.requestFullscreen;
    /** 设定docuement 的参数 */
    if (!fullscreenFunc) {
      ['mozRequestFullScreen', 'msRequestFullscreen', 'webkitRequestFullScreen'].forEach(function (req) {
        fullscreenFunc = fullscreenFunc || fullscreenDiv[req];
      });
    }
    /** 把全屏展示的内容 通过call 改变this指向  */
    fullscreenFunc.call(fullscreenDiv);
  }
}
