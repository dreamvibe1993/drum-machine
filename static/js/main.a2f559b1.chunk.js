(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t(1),d=t.n(i),o=t(3),a=t.n(o),c=(t(13),t(4)),s=t(5),p=t(7),l=t(6),u=(t(14),{width:"700px",height:"700px",backgroundImage:'url("drum-machine-697x641.png")',backgroundRepeat:"no-repeat"}),m=function(e){return Object(r.jsx)("div",{style:u,children:e.children})},h={boxSizing:"border-box",width:"45px",height:"43px",margin:"7.4px",background:"none",border:"none"},y=function(e){return Object(r.jsx)("div",{onKeyDown:e.keydown,onClick:e.click,style:h,children:e.children})},x={boxSizing:"border-box",width:"275px",height:"274px",paddingTop:"16px",paddingRight:"15px",paddingLeft:"13px",paddingBottom:"17px",display:"flex",justifyContent:"center",flexWrap:"wrap",border:"none",marginBottom:"106px",marginLeft:"105px",marginTop:"94px"},b=function(e){return Object(r.jsx)("div",{style:x,children:e.children})},g={width:"181px",height:"66px",backgroundColor:"#1989b9",marginTop:"103px",marginLeft:"151px",boxShadow:"0 0 10px rgba(25,137,185,.9)",borderRadius:"2px",padding:"5px",boxSizing:"border-box"},k=function(e){return Object(r.jsx)("div",{style:g,children:e.children})},f={display:"flex",justifyContent:"center",backgroundColor:"#000000"},j=function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,i=new Array(r),d=0;d<r;d++)i[d]=arguments[d];return(e=n.call.apply(n,[this].concat(i))).state={pads:[{id:"Ride-1",keycode:"5",url:"samples/Ride-1.mp3"},{id:"Ride-2",keycode:"6",url:"samples/Ride-2.mp3"},{id:"Crash-1",keycode:"7",url:"samples/Crash-1.mp3"},{id:"Crash-2",keycode:"8",url:"samples/Crash-2.mp3"},{id:"Tom-1",keycode:"r",url:"samples/Tom-1.mp3"},{id:"Tom-2",keycode:"t",url:"samples/Tom-2.mp3"},{id:"Tom-3",keycode:"y",url:"samples/Tom-3.mp3"},{id:"Tom-4",keycode:"u",url:"samples/Tom-4.mp3"},{id:"Hihat-Foot",keycode:"f",url:"samples/Hat-1.mp3"},{id:"Hihat-Closed",keycode:"g",url:"samples/Hat-2.mp3"},{id:"Hihat-Loose",keycode:"h",url:"samples/Hat-3.mp3"},{id:"Hihat-Open",keycode:"j",url:"samples/Hat-4.mp3"},{id:"Kick-1",keycode:"c",url:"samples/Kick-1.mp3"},{id:"Kick-2",keycode:"v",url:"samples/Kick-2.mp3"},{id:"Snare-1",keycode:"b",url:"samples/Snare-1.mp3"},{id:"Snare-2",keycode:"n",url:"samples/Snare-2.mp3"}],screen:""},e.lightTrigger=function(e){e.style.opacity=.2,e.style.background="black",setTimeout((function(){e.style.opacity=1,e.style.background="none"}),100)},e.playThesound=function(n){var t=document.querySelector("#"+e.state.pads[n].id),r=t.parentNode;e.setState({screen:e.state.pads[n].id}),e.lightTrigger(r),t.currentTime=0,t.play()},e.pressHandler=function(n){if("keydown"==n.type){var t=e.state.pads.findIndex((function(e){return n.key==e.keycode}));if(!(t>=0))return;e.playThesound(t)}if("click"==n.type){var r=e.state.pads.findIndex((function(e){return n.target.firstChild.id==e.id}));if(!r)return;e.playThesound(r)}},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.pressHandler)}},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{style:f,children:Object(r.jsxs)(m,{children:[Object(r.jsx)(k,{children:Object(r.jsxs)("p",{className:"Screen",children:["current sample: ",this.state.screen]})}),Object(r.jsx)(b,{children:this.state.pads.map((function(n,t){return Object(r.jsx)(y,{keydown:e.pressHandler,click:e.pressHandler,children:Object(r.jsx)("audio",{id:n.id,src:n.url})},t)}))})]})})}}]),t}(i.Component),T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,d=n.getLCP,o=n.getTTFB;t(e),r(e),i(e),d(e),o(e)}))};a.a.render(Object(r.jsx)(d.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),T()}},[[15,1,2]]]);
//# sourceMappingURL=main.a2f559b1.chunk.js.map