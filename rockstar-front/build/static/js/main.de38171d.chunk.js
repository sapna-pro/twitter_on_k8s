(this.webpackJsonprxshell=this.webpackJsonprxshell||[]).push([[0],{110:function(e,t,a){e.exports=a(227)},115:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),c=(a(115),a(88)),l=a(89),s=a(103),p=a(102),u=a(265),m=a(22),d=a(19),f=a(90),g=a(3),h=a(7),E=a(44),b=a(13),v=a(266),x=a(267),w=a(57),y=a(274),j=a(270),O=a(271),S=a(272),k=a(273),C=a(264),B=a(269),M=a(268),I=a(98),L=a.n(I),H=a(33),N=a.n(H),P=a(101),A=a.n(P),D=a(67),F=a.n(D),W=a(100),G=a.n(W),T=a(5),J=a(261),R=a(40),_=a.n(R),z=_.a.create({baseURL:"http://192.168.99.100:5001/Song"});var U=Object(T.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginTop:"100px",flexDirection:"column",margin:"20px"},flexButton:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"},textBox:{textAlign:"center",background:"#e8eaf6"},text:{padding:"10px 10px",color:"black",fontSize:"20px"}}}))((function(e){var t,a,i,o=e.classes,c=Object(n.useState)(""),l=Object(m.a)(c,2),s=l[0],p=l[1],u=Object(n.useState)(!1),f=Object(m.a)(u,2),g=f[0],h=f[1];return Object(n.useEffect)((function(){h(!1)}),[]),r.a.createElement("div",{className:o.root},r.a.createElement("h1",null,"Select Song from Left Naviation"),r.a.createElement("div",null,r.a.createElement(J.a,(t={variant:"contained",color:"primary"},Object(d.a)(t,"variant","contained"),Object(d.a)(t,"onClick",(function(){z.get("http://sa-logic:5000/testHealth").then((function(e){p(e.data),h(!0)}))})),t),"Python API"),r.a.createElement(J.a,(a={style:{marginLeft:"20px"},variant:"contained",color:"primary"},Object(d.a)(a,"variant","contained"),Object(d.a)(a,"onClick",(function(){z.get("http://sa-webapp:8080/testHealth").then((function(e){p(e.data),h(!0)}))})),a),"Java API"),r.a.createElement(J.a,(i={style:{marginLeft:"20px"},variant:"contained",color:"primary"},Object(d.a)(i,"variant","contained"),Object(d.a)(i,"onClick",(function(){z.get("http://192.168.99.100:5001/testHealth").then((function(e){p(e.data),h(!0)}))})),i),"Dotnet API")),r.a.createElement("div",null,g?r.a.createElement("div",{className:o.text,dangerouslySetInnerHTML:{__html:s}}):null))})),X=a(43),$=a.n(X),q=a(65),K=a(229),Q=(a(138),a(220),a(95)),V=a.n(Q),Y=a(96),Z=a.n(Y),ee=a(97),te=a.n(ee),ae=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(""),c=Object(m.a)(o,2),l=c[0],s=c[1],p=Object(n.useState)(0),u=Object(m.a)(p,2),d=u[0],f=u[1];return Object(n.useEffect)((function(){var e=window.location.href.split("/"),t=e[e.length-1];s(t)}),[]),r.a.createElement("div",null,r.a.createElement(K.a,null,r.a.createElement("div",{style:{backgroundColor:"white",padding:12,display:"flex",marginTop:"60px",alignItems:"center"}},"SongBM"==l?r.a.createElement(w.a,{variant:"h6"}," Just the way you are "):"Miracle"==l?r.a.createElement(w.a,{variant:"h6"}," Miracle "):r.a.createElement(w.a,{variant:"h6"}," Don't Give Up On Me "),r.a.createElement(J.a,{style:{marginLeft:"20px"},variant:"contained",color:"primary",onClick:function(){return function(){function e(){return(e=Object(q.a)($.a.mark((function e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://192.168.99.100:5001/Song/".concat(l)).then((function(e){var t=e.data;i(t)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}()}},"Get Lyrics"),r.a.createElement(J.a,{style:{marginLeft:"20px"},disabled:!a,variant:"contained",color:"primary",onClick:function(){return function(){function e(){return(e=Object(q.a)($.a.mark((function e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("http://sa-webapp:8080/sentiment",{sentence:a}).then((function(e){var t=e.data.polarity;f(t),console.log("sentiment == ",t)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}()}},"Get Sentiment"),0!=d&&r.a.createElement("div",{style:{marginLeft:"20px"}},r.a.createElement(w.a,{variant:"h6"},d)))),a?r.a.createElement("div",{style:{padding:"20px"}},"SongBM"==l?r.a.createElement("img",{src:V.a,alt:""}):"Miracle"==l?r.a.createElement("img",{src:Z.a,alt:"",style:{width:"600px"}}):r.a.createElement("img",{src:te.a,alt:""}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a},style:{paddingTop:"20px"}})):null)},ne=Object(b.a)(),re=Object(C.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(f.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(d.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),drawerPaperCollapsed:Object(d.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(0)},e.breakpoints.up("sm"),{width:e.spacing(0)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},footer:{position:"fixed",left:0,bottom:0,width:"100%",backgroundColor:"grey",color:"white",textAlign:"center",fontStyle:"italic"}}}));function ie(){var e=re(),t=r.a.useState(!0),a=Object(m.a)(t,2),n=a[0],i=a[1],o=r.a.useState(!1),c=Object(m.a)(o,2),l=c[0],s=c[1],p=r.a.useState("Rockstar App"),d=Object(m.a)(p,2),f=d[0],b=d[1],C=function(){s(!0),i(!1)},I=function(e){return function(){b(e)}};return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,null),r.a.createElement(v.a,{position:"absolute",className:Object(g.a)(e.appBar,n&&e.appBarShift,l&&e.appBar)},r.a.createElement(x.a,{title:f,className:e.toolbar},r.a.createElement(M.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0),s(!1)},className:Object(g.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(L.a,null)),r.a.createElement(w.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},f))),r.a.createElement(h.b,{history:ne,title:f},r.a.createElement(y.a,{variant:"permanent",classes:{paper:Object(g.a)(e.drawerPaper,!n&&e.drawerPaperClose,l&&e.drawerPaperCollapsed)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(M.a,{onClick:function(){i(!1),s(!1)}},r.a.createElement(N.a,null))),r.a.createElement(B.a,null),r.a.createElement(j.a,null,r.a.createElement(O.a,{button:!0,component:E.a,to:"/"},r.a.createElement(S.a,null,r.a.createElement(F.a,null)),r.a.createElement(k.a,{primary:"Home"}),"Home"===f&&r.a.createElement(S.a,null,r.a.createElement(M.a,{onClick:C},r.a.createElement(N.a,null)))),r.a.createElement(O.a,{button:!0,component:E.a,to:"/charts/Miracle",onClick:I("Song")},r.a.createElement(S.a,null,r.a.createElement(F.a,null)),r.a.createElement(k.a,{primary:"Miracle"}),"Miracle"===f&&r.a.createElement(S.a,null,r.a.createElement(M.a,{onClick:C},r.a.createElement(N.a,null)))),r.a.createElement(O.a,{button:!0,component:E.a,to:"/deposits/SongBM",onClick:I("Song")},r.a.createElement(S.a,null,r.a.createElement(G.a,null)),r.a.createElement(k.a,{primary:"Way you are"}),"Way you are"===f&&r.a.createElement(S.a,null,r.a.createElement(M.a,{onClick:C},r.a.createElement(N.a,null)))),r.a.createElement(O.a,{button:!0,component:E.a,to:"/orders/FFA",onClick:I("Song")},r.a.createElement(S.a,null,r.a.createElement(A.a,null)),r.a.createElement(k.a,{primary:"Don't give up"}),"Dont give up"===f&&r.a.createElement(S.a,null,r.a.createElement(M.a,{onClick:C,visible:f},r.a.createElement(N.a,null)))))),r.a.createElement("main",{className:e.content},r.a.createElement(h.a,{exact:!0,path:"/",component:U}),r.a.createElement(h.a,{path:"/charts/Miracle",component:ae}),r.a.createElement(h.a,{path:"/deposits/SongBM",component:ae}),r.a.createElement(h.a,{path:"/orders/FFA",component:ae}))))}a(226);var oe=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(ie,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e,t,a){e.exports=a.p+"static/media/songBM.d86dd52a.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/MiracleBG.d9da5fed.jpg"},97:function(e,t,a){e.exports=a.p+"static/media/FFA.a2365f96.jpg"}},[[110,1,2]]]);
//# sourceMappingURL=main.de38171d.chunk.js.map