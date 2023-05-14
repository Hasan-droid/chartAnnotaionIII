import { Component, createElement } from "react";
import Plotlyd3 from '@plotly/d3';
import Plotly from 'plotly.js';


export class HelloWorldSample extends Component {
    constructor(props) {
        super(props);
    }
  createPlotly(){
    setTimeout(()=>{
        console.info("Plotly is loading..." , Plotly);
    var myPlot = document.getElementById('myDiv'),
    d3 = Plotlyd3,
    N = 100,
    x = d3.range(N),
    y1 = d3.range(N).map( d3.random.normal() ),
    y2 = d3.range(N).map( d3.random.normal(-2) ),
    y3 = d3.range(N).map( d3.random.normal(2) ),
    trace1 = { x:x, y:y1, type:'bar', mode:'lines', name:'Jeff' },
    trace2 = { x:x, y:y2, type:'bar', mode:'lines', name:'Terren' },
    trace3 = { x:x, y:y3, type:'bar', mode:'lines', name:'Arthur' },
    data = [ trace1, trace2, trace3 ],
    layout = {
        hovermode:'closest',
        title:'Click on Points to add an Annotation on it'
     };
     console.info('d3', d3);
Plotly.newPlot('myDiv', data, layout ,{showSendToCloud: true});

myPlot.on('plotly_click', function(data){
    var pts = '';
    for(var i=0; i < data.points.length; i++){
        let annotate_text = 'Car = '+data.points[i].x +
                      ' Ticket = '+data.points[i].y.toPrecision(4);

      let  annotation = {
          text: annotate_text,
          x: data.points[i].x,
          y: parseFloat(data.points[i].y.toPrecision(4)),
        font: {
    family: "Open Sans",
    size: 18,
    color: "#440022",
    
  },
  bordercolor: "#1D0925",
    borderwidth: 1
        }

      let  annotations = myPlot.layout.annotations || [];
    //    let annotationsy = annotations[1];
      console.info('annotations', annotations);
        annotations.push(annotation);
        Plotly.relayout('myDiv',{annotations: annotations})
    }
});
}, 300);
  }
    render() {
        this.createPlotly();
        return <div id="myDiv"></div>;
    }
}
