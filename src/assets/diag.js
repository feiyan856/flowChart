var diagGraph = { //diag图数据操作
  state: [],
  edg: [],
  statePoint: '',
  g: '',
  graphWidth: 0,
  graphHeight: 0,
  lastScale: 0,
  init: function (statePoint ,state, edg) {
    this.statePoint = statePoint
    this.state = state
    this.edg = edg
    this.createG();
    this.renderG(false);
    clearInterval();
    setInterval(function() {
      if(window.location.toString().indexOf('tsakmanager') > -1){
        for (let id in diagGraph.edg) {
          if(id != 'del'){
            /*if(diagGraph.edg[id].option.messagesInPerSec == '0.00msg/s'){
              continue;
            }*/
            let randNum = (3-Math.random() * 5);
            let msg = 0;
            if(diagGraph.edg[id].option.messagesInPerSec){
              msg = (parseFloat(diagGraph.edg[id].option.messagesInPerSec.split(",msg/s")[0]) + randNum);
              if(msg < 0){
                msg = Math.abs(msg);
              }
              msg = parseFloat(msg.toFixed(2));
              diagGraph.edg[id].option.messagesInPerSec = msg +'msg/s';
            }

          }
        }
        diagGraph.renderG(true);
      }else{
        clearInterval();
      }

    }, 5000);

  },
  createG: function () {
    this.g = new dagreD3.graphlib.Graph()
      .setGraph({})
      .setDefaultEdgeLabel(function () { return {}; })
    .setGraph({
      nodesep: 70,
      ranksep: 50,
      rankdir: "LR",
      marginx: 20,
      marginy: 20
    });
  },
  drawNode: function () {

    for (let i in this.state) { //画点
      if ( i !== 'del') {
      let el = this.state[i];
      let style = '';
      if (el.id === this.statePoint) {
        if (el.class === 'type-suss') {
          style = "stroke: #35b34a; stroke-width: 1px;"
        } else if (el.class === 'type-fail') {
          style = "stroke:#f15533; stroke-width: 1px;"
        } else if (el.class === 'type-normal') {
          style = "stroke:#a5e0ee; stroke-width: 1px;"
        } else if (el.class === 'type-init') {
          style = "stroke:#a5e0ee; stroke-width: 1px;"
        } else if (el.class === 'type-ready') {
          style = "stroke:#a5e0ee; stroke-width: 1px;"
        } else if (el.class === 'type-queue') {
          style = "stroke:#a5e0ee; stroke-width: 1px;"
        } else if (el.class === 'type-run') {
          style = "stroke:#a5e0ee; stroke-width: 1px;"
        } else if (el.class === 'type-freeze') {
          style = "stroke:grey; stroke-width: 1px;"
        }
      }

      var nodeHtml = el.label.split('##');
      var dbTypeTemp;
      var dbType = el.dbType ?el.dbType.toLowerCase(): '';
        switch (dbType) {
          case 'mongodb':
            dbTypeTemp = 'mongodbIcon.png';
            break;
          case 'mysql':
            dbTypeTemp = 'mysqlIcon.png';
            break;
          case 'elasticsearch':
            dbTypeTemp = 'elasticsearchIcon.png';
            break;
          case 'oracle':
            dbTypeTemp = 'oracleIcon.png';
            break;
          case 'kafka':
          case 'kafka_system':
            dbTypeTemp = 'KafkaIcon.png';
            w = 16;
            h = 16;
            break;
          case 'postgresql':
            dbTypeTemp = 'postgresqlIcon.png';
            break;
          case 'phoenix':
            dbTypeTemp = 'phoenixIcon.png';
            break;
          case 'file':
            dbTypeTemp = 'fileIcon.png';
            break;
          case 'golaxy_websocket':
            dbTypeTemp = 'socketIcon.png';
            break;
          default:
            dbTypeTemp = 'databaseIcon.png';
            break;
        }

        var html = "<img  class=dbIcon  src='assets/images/" + dbTypeTemp + "'>";
        html += "<span>"+nodeHtml[0]+"</span></br>";
        html += "<img  class=dbIcon  src='assets/images/tableIcon.png'>";
        html += "<span >"+nodeHtml[1]+"</span>";
        html += "</div>";

      this.g.setNode(el.id, {
      labelType: 'html',
        label: html ,
       /* label: el.label,*/
        rx: 5,
        ry: 5,
        padding: 10,
        class: el.class,
        style: style
      });
      }
    }
  },
  drawEdg: function () {
    for (let i in this.edg) { // 画连线
      if ( i !== 'del') {
      let el = this.edg[i];
        const task = '<div class=lineLabel><span class=taskLabel>' + el.option.name + '</span></br>';
        let fun = '', messages = '', bytes = '', interface = '', doc = '';
        if(el.option.function_name ) {
          fun = '<a class=funLabel task-value=' + el.option.name + '  fun-value=' + el.option.function_name +
            '   pg-value=' + el.option.pg_connection_name + ' title=' + el.option.function_name + '>过程</a>';
        }
        /* 接口*/
        if (el.option.interface) {
          var interfaceObj = JSON.parse(el.option.interface);
          var interfaceTitle = '';
          for (var fi = 0; fi < interfaceObj.length; fi++) {
            if (fi === interfaceObj.length - 1) {
              interfaceTitle += interfaceObj[fi]
            } else {
              interfaceTitle = interfaceTitle + interfaceObj[fi] + '&#10;'
            }
          }
          interface = '<span class=interface title=' + interfaceTitle + '> 接口 </span>';
               }
        /* 文档*/
        if (el.option.doc) {
          if(el.option.interface){
            var docObj = JSON.parse(el.option.interface);
            var docTitle = '';
            for (var fi = 0; fi < docObj.length; fi++) {
              if (fi === docObj.length - 1) {
                docTitle += docObj[fi]
              } else {
                docTitle = docTitle + docObj[fi] + '&#10;'
              }
            }
            doc = '<span class=interface title=' + docTitle + '>文档</span>';

          }
          }
        /* kafka的jmx的监控*/
        let widthLine = 1, lineColor = '#0fb2cc';
        if (el.option.messagesInPerSec) {

          var byteTitle = '';
          if (el.option.BytesInPerSec) {
            messages = '<span class=messages>' + el.option.messagesInPerSec + '</span>';
            byteTitle = el.option.messagesInPerSec + '&#10;' + el.option.BytesInPerSec;
          }


          if (el.option.messagesInPerSec.split('msg/s')[0] === '0.0') {
            bytes = '<span class=bytesZerro  title=' + byteTitle + '>' + el.option.messagesInPerSec + '</span></div>';
          } else {
            bytes = '<span class=bytes title=' + byteTitle + '>' + el.option.messagesInPerSec + '</span></div>';
          }

          /*0< <1      1< <10      10< <50   50< <100      <100*/
          const data = Number(el.option.messagesInPerSec.split('msg/s')[0]);
          const num = Math.floor(data);
          if (num >= 0 && num < 1) { /*0< msg<1 */
            widthLine = 1;
            lineColor = '#0fb2cc';
          } else if (num >= 1 && num < 10) { /*1< msg<10  */
            widthLine = (data % 10) / 10 * 2 < 1 ? 1 : (data % 10) / 10 * 2;
            lineColor = '#5ffb0b';
          } else if (num >= 10 && num < 100) { /*10< msg<10 0*/
            widthLine = (data % 100) / 100 * 3 < 2 ? 2 : (data % 100) / 100 * 3;
            lineColor = '#5e8cef';
          } else if (num >= 100 && num < 1000) { /*100< msg<10 00*/
            widthLine = (data % 1000) / 1000 * 4 < 3 ? 3 : (data % 1000) / 1000 * 4;
            lineColor = '#d88e25';
          } else if (num >= 10000 && num < 100000) { /*1000< msg<10 000*/
            widthLine = (data % 10000) / 10000 * 5 < 4 ? 4 : (data % 10000) / 10000 * 5;
            lineColor = '#bfbfbf';
          } else {
            widthLine = 6;
            lineColor = '#bf9c17';
          }
        }
        this.g.setEdge(el.start, el.end, {
          style: "stroke-dasharray:10;stroke:  " + lineColor + "; fill: none;stroke-width:  " + widthLine + "px",
          arrowheadStyle: "fill: " + lineColor + ";stroke: " + lineColor + ";",
          arrowhead: 'vee',
          labelType: 'html',
          lineInterpolate: 'basis',
          label: task + fun + interface + doc + bytes,
        });
    }
    }
  },
  renderG: function (isUpdate) {
    var render = new dagreD3.render();
    var svg = d3.select("#svgCanvas");
    svg.select("g").remove(); //删除以前的节点
    var svgGroup = svg.append("g");
    var inner = svg.select("g");
    var zoom = d3.zoom().on("zoom", function () { //放大
      inner.attr("transform", d3.event.transform);
      diagGraph.lastScale = d3.event.transform;
    });
    svg.call(zoom);
    // Simple function to style the tooltip for the given node.
/*    var styleTooltip = function(name, description) {
      return "<p class='name'>" + name + "</p><p class='description'>" + description + "</p>";
    };*/

    this.drawNode();
    this.drawEdg();

    render(d3.select("svg g"), this.g); //渲染节点
    this.addUIAnimate();
    this.graphHeight = this.g.graph().height;
    this.graphWidth = this.g.graph().width;
    var graphWidth = this.g.graph().width ;
    var graphHeight = this.g.graph().height;
    var width = parseInt(svg.style("width").replace(/px/, ""));
    var height = parseInt(svg.style("height").replace(/px/, ""));
    /*var zoomScale = isUpdate ? Math.min(width / graphWidth, height / graphHeight) : 1;
    var translateX = isUpdate ? (width / 2) - ((graphWidth * zoomScale) / 2):0;
    var translateY = isUpdate ? (height / 2) - ((graphHeight * zoomScale) / 2) : 0;*/
    /** 需记录上一次图像位置急缩小比例*/
    var zoomScale = isUpdate ? diagGraph.lastScale.k : 1;
    var translateX = isUpdate ? diagGraph.lastScale.x : 0;
    var translateY = isUpdate ? diagGraph.lastScale.y : 0;
    var svgZoom = isUpdate ? svg.transition().duration(500) : svg;

   svgZoom.call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(zoomScale));
    //svg.call(zoom.transform, d3.zoomIdentity.translate(0, 0).scale(1));
  },
  addUIAnimate:function(){
    let svg = d3.select("#svgCanvas");;
    svg.selectAll("circle").remove();
    let edgeLabels = this.g._edgeLabels;

    let that = this;
    let container = svg.select("g").select(".output")
      .append("g").attr("class", "circles");
    let index = 0 ;
    for (let key in edgeLabels) {
      let points = edgeLabels[key].points;
      let path = "";
      for (let i in points) {
        if (i != 'del') {
          if (i == 0) {
            path += "M";
          } else {
            path += " L"
          }
          path += (points[i]["x"] - points[0]["x"]) + "," + (points[i]["y"] - points[0]["y"]);
        }
      }
      /**
       * 根据接口返回的msg/s定义圆点运动速度
       * @type {number}
       */
      let msg = 0;
      if(that.edg[index].option.messagesInPerSec){
       msg = Number(that.edg[index].option.messagesInPerSec.split('msg/s')[0]);
      }
      index++;
      const num = Math.floor(msg);
      let circleRate = "10s";
      if (num >= 0 && num < 1) { /*0< msg<1 */
        circleRate = "20s";
      } else if (num >= 1 && num < 10) { /*1< msg<10  */
        circleRate = "10s";
      } else if (num >= 10 && num < 100) { /*10< msg<10 0*/
        circleRate = "8s";
      } else if (num >= 100 && num < 1000) { /*100< msg<10 00*/
        circleRate = "5s";
      } else if (num >= 10000 && num < 100000) { /*1000< msg<10 000*/
        circleRate = "2s";
      } else {
        circleRate = "1s";
      }

      let circleCon = container.append("g");
      circleCon.append("circle")
        .attr("cx", points[0].x)
        .attr("cy", points[0].y)
        .attr("r", 8)
        .attr("fill", "#0fb2cc")
        .attr("fill-opacity", "0.5")
        .append("animateMotion")
        .attr("path", path)
        .attr("dur", circleRate).attr("repeatCount", "indefinite")
      ;
      circleCon
        .append("circle")
        .attr("cx", points[0].x)
        .attr("cy", points[0].y)
        .attr("r", 4)
        .attr("fill", "#FFEB3B").attr("fill-opacity","0.9")
        .append("animateMotion")
        .attr("path", path)
        .attr("dur", circleRate).attr("repeatCount", "indefinite")
      ;
    }
  },
  changePoint: function (point) {
    alert(1);
  }
}

