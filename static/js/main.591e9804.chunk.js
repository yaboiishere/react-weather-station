/*!

=========================================================
* Black Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*! For license information please see main.591e9804.chunk.js.LICENSE.txt */
(this["webpackJsonpblack-dashboard-react"]=this["webpackJsonpblack-dashboard-react"]||[]).push([[0],{126:function(e,t,a){e.exports=a.p+"static/media/kiro.2efe5d41.ico"},145:function(e,t,a){e.exports=a(270)},267:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(12),l=a.n(o),s=a(19),i=a(47),c=a(42),d=a(329),m=a(51),p=a(38),u=a(301),h=a(302),g=a(303),b=a(304);class f extends n.a.Component{render(){return n.a.createElement("footer",{className:"footer"},n.a.createElement(u.a,{fluid:!0},n.a.createElement(h.a,null,n.a.createElement(g.a,{style:{display:"flex"}},"Collaborators:"),n.a.createElement(g.a,{style:{display:"flex"}},"\u041c\u0438\u0445\u0430\u0438\u043b \u0414\u043e\u0431\u0440\u0435\u0432:",n.a.createElement(b.a,{href:"https://github.com/yaboiishere"},"Github"),n.a.createElement(b.a,{href:"https://github.com/yaboiishere"},"Linked In")),n.a.createElement(g.a,{style:{display:"flex"}},"\u041a\u0438\u0440\u0438\u043b \u041a\u0438\u0440\u043e\u0432:",n.a.createElement(b.a,{href:"https://github.com/kirilkirov01"},"Github"),n.a.createElement(b.a,{href:"https://github.com/yaboiishere"},"Linked In")),n.a.createElement(g.a,{style:{display:"flex"}},"\u041a\u0440\u0438\u0441\u0442\u0438\u044f\u043d \u041c\u0438\u0445\u0430\u043b\u0435\u0432:",n.a.createElement(b.a,{href:"https://github.com/kristiyanmv"},"Github"),n.a.createElement(b.a,{href:"https://github.com/yaboiishere"},"Linked In"))),n.a.createElement("div",{className:"copyright"},n.a.createElement(b.a,{href:"https://www.creative-tim.com/?ref=bdr-user-archive-footer"},"Template from Creative Tim"),n.a.createElement("br",null),n.a.createElement(g.a,null,"\xa9 ",(new Date).getFullYear()," made with"," ",n.a.createElement("i",{className:"tim-icons icon-heart-2"})," by"," ",n.a.createElement("a",{href:"https://www.creative-tim.com/?ref=bdr-user-archive-footer"},"Creative Tim")," ","for a better web."))))}}var E=f,v=a(330),C=a(18),k=a(14),w=a(305),y=a(314),x=a(333),S=a(313),O=a(312),D=a(311),N=a(15),I=a.n(N),P=a(27),L=a(24),j=a.n(L),B=a(86),W=a.n(B);const T="https://weather-station-server.herokuapp.com/cable",A={};A.cable=W.a.createConsumer(T);W.a.createConsumer(T);const R=new p.a;j.a.interceptors.request.use(function(){var e=Object(P.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:return a=e.sent,console.log("interceptor",a),null!=a&&(t.headers.Authorization="Bearer ".concat(a)),t.url="".concat("https://weather-station-server.herokuapp.com").concat(t.url),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j.a.interceptors.response.use(e=>e,e=>{const t=e.response.status;return 401===t&&(R.remove("token",{path:"/"}),R.remove("loggedIn",{path:"/"}),window.location.href="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-weather-station",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).URL||"https://yaboiishere.github.io/react-weather-station/#/")),Promise.reject({status:t})}),j.a.interceptors.response.use(e=>e,e=>{var t,a;const r=(null===(t=e.response)||void 0===t?void 0:t.status)?null===(a=e.response)||void 0===a?void 0:a.status:401;return Promise.reject({status:r})});const H=function(){var e=Object(P.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get("token");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0="";case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function _(e,t){return M.apply(this,arguments)}function M(){return(M=Object(P.a)(I.a.mark((function e(t,a){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"POST",url:"/getAll?weatherStation=".concat(t,"&timeSpan=").concat(a),mode:"no-cors",headers:{"Content-Type":"application/json"},json:!0},e.abrupt("return",j()(r).then(e=>e).catch(e=>e));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(P.a)(I.a.mark((function e(t,a){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"POST",url:"/authenticate",mode:"no-cors",headers:{"Content-Type":"application/json"},data:{email:t,password:a},json:!0},e.abrupt("return",j()(r).then(e=>e).catch(e=>e));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(P.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"/people",mode:"no-cors",headers:{"Content-Type":"application/json"},json:!0},e.abrupt("return",j()(t).then(e=>e).catch(e=>e));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(P.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"/current_user",mode:"no-cors",headers:{"Content-Type":"application/json"},json:!0},e.abrupt("return",j()(t).then(e=>e).catch(e=>e));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(P.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"/get_last_lock_user",mode:"no-cors",headers:{"Content-Type":"application/json"},json:!0},e.abrupt("return",j()(t).then(e=>e).catch(e=>e));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(P.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",url:"/update_last_lock_user/",mode:"no-cors",headers:{"Content-Type":"application/json"},data:t,json:!0},e.abrupt("return",j()(a).then(e=>e).catch(e=>e));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=a(308);const K=Object(w.a)(e=>({paper:{backgroundColor:"#27293D",border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}));function Y(e){const t=Object(r.useState)({email:"",password:""}),a=Object(k.a)(t,2),o=a[0],l=a[1],s=Object(q.a)(["token","loggedIn"]),i=Object(k.a)(s,2),c=(i[0],i[1]),d=K(),m=()=>{e.setOpen(!1)},p=e=>{const t=e.target,a=t.id,r=t.value;l(Object(C.a)(Object(C.a)({},o),{},{[a]:r})),console.log(o)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(x.a,{open:e.open,onClose:m,"aria-labelledby":"form-dialog-title",classes:d},n.a.createElement(D.a,{id:"form-dialog-title"},"Login"),n.a.createElement("form",{method:"POST"},n.a.createElement(O.a,null,n.a.createElement(v.a,{InputLabelProps:{style:{color:"#D0D0D4"}},InputProps:{style:{color:"#D0D0D4"}},autoFocus:!0,margin:"dense",id:"email",label:"Email Address",type:"email",fullWidth:!0,onChange:p,required:!0}),n.a.createElement(v.a,{InputLabelProps:{style:{color:"#D0D0D4"}},InputProps:{style:{color:"#D0D0D4"}},margin:"dense",id:"password",label:"Password",type:"password",fullWidth:!0,onChange:p,required:!0})),n.a.createElement(S.a,null,n.a.createElement(y.a,{onClick:m,color:"primary"},"Cancel"),n.a.createElement(y.a,{onClick:()=>{(function(e,t){return U.apply(this,arguments)})(o.email,o.password).then(t=>{var a;console.log(t),401===t.status?alert("Wrong username/password"):200===t.status&&(c("token",t.data.auth_token,{path:"/"}),c("loggedIn",!0,{path:"/"}),a=!0,e.setLoggedIn(a),m())})},color:"primary"},"Login")))))}var J=a(315),X=a(316),Z=a(332);const Q=Object(w.a)(e=>({paper:{backgroundColor:"#27293D",border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}));function $(e){const t=Object(r.useState)([]),a=Object(k.a)(t,2),o=a[0],l=a[1],s=Object(r.useState)([]),i=Object(k.a)(s,2),c=i[0],d=i[1],m=Object(r.useState)([]),p=Object(k.a)(m,2),u=p[0],h=p[1],g=Object(r.useState)(null),b=Object(k.a)(g,2),f=b[0],E=b[1],w=Object(r.useState)(null),N=Object(k.a)(w,2),I=N[0],P=N[1],L=Object(r.useState)(!0),j=Object(k.a)(L,2),B=j[0],W=j[1],T=Q(),R=()=>{(function(e){return V.apply(this,arguments)})({user:e.currentUser}).then(e=>{200===e.status?console.log("cleaned up"):400===e.status&&console.log("error")}),e.setOpen(!1)},H=e=>{E(!0);const t=e.target,a=t.id,r=t.value,n=a.split("_")[1];let o=c;o[u[n].user.id]=r,d(o),console.log(o,"newUsers")},_=e=>{E(!1);const t=e.target,a=t.id,r=t.checked,n=a.split("_"),s=n[0],i=n[1];let c=o;c[parseInt(i)]=Object(C.a)(Object(C.a)({},u[parseInt(i)]),{},{[s]:r}),l(c),console.log(c,"newPeople")},M=e=>{E(!1);const t=e.target,a=t.id,r=t.value,n=a.split("_"),s=n[0],i=n[1];let c=o;c[parseInt(i)]=Object(C.a)(Object(C.a)({},u[parseInt(i)]),{},{[s]:r}),l(c),console.log(c,"newPeople")};return n.a.createElement(n.a.Fragment,null,n.a.createElement(x.a,{open:e.open,onClose:R,"aria-labelledby":"form-dialog-title",classes:T,onEnter:()=>{(function(){return G.apply(this,arguments)})().then(t=>{P(t.data.user),t.data.user!==e.currentUser&&"false"!==t.data.user||W(!1)}),function(){return z.apply(this,arguments)}().then(e=>{if(200===e.status){const t=e.data.sort((e,t)=>e.weather_station-t.weather_station);h(t)}}),A.room=A.cable.subscriptions.create({channel:"ManagementChannel",username:e.currentUser},{received:e=>{console.log(e)}})}},n.a.createElement(D.a,{id:"form-dialog-title"},"Manage Weather Stations"),n.a.createElement(O.a,null,B?n.a.createElement("div",{style:{color:"#D0D0D4"}},"The data is being edited by"," ","false"===I?e.currentUser:I):"",u.map((e,t)=>n.a.createElement(J.a,{container:!0,key:t,spacing:1,className:T.root},n.a.createElement(J.a,{item:!0,xs:2},n.a.createElement(v.a,{InputLabelProps:{style:{color:"#D0D0D4"}},InputProps:{style:{color:"#D0D0D4"}},id:"ws_id_".concat(t),label:"ID:",defaultValue:e.weather_station,margin:"normal",type:"number",onChange:M,name:t.toString(),disabled:!!B||null!==f&&!0===f})),n.a.createElement(J.a,{item:!0,xs:6},n.a.createElement(v.a,{InputLabelProps:{style:{color:"#D0D0D4"}},InputProps:{style:{color:"#D0D0D4"}},id:"username_".concat(t),label:"Name: ",defaultValue:e.user.username,margin:"normal",type:"text",onChange:H,name:t.toString(),disabled:!!B||null!==f&&!1===f})),n.a.createElement(J.a,{item:!0,xs:2},n.a.createElement(X.a,{label:"Approved:",labelPlacement:"start",margin:"normal",style:{color:"#D0D0D4",marginTop:"15%",marginLeft:"0px"},control:n.a.createElement(Z.a,{id:"approved_".concat(t),label:"Approved:",margin:"normal",type:"checkbox",defaultChecked:e.approved,onChange:_,name:t.toString(),disabled:!!B||null!==f&&!0===f})}))))),n.a.createElement(S.a,null,n.a.createElement(y.a,{onClick:R,color:"primary"},"Close"),n.a.createElement(y.a,{onClick:()=>{E(null)},color:"primary",disabled:null===f},"Save"))))}var ee;class te extends n.a.Component{constructor(e){super(e),this.timeSpanSelect=[{value:"30.minutes.ago",label:"30 min"},{value:"1.hour.ago",label:"1 hour"},{value:"3.hours.ago",label:"3 hours"},{value:"6.hours.ago",label:"6 Hours"},{value:"12.hours.ago",label:"12 hours"},{value:"24.hours.ago",label:"24 hours"}],this.linkOnClick=()=>{document.documentElement.classList.remove("nav-open")},this.setOpenLogin=e=>{this.setState({openLogin:e})},this.setOpenManagement=e=>{this.setState({openManagement:e})},this.activeRoute.bind(this),this.state={openLogin:!1,openManagement:!1}}activeRoute(e){return console.log(this.props.location.pathname),"/dashboard"===e?this.props.location.pathname.indexOf(e)>-1||"/"===this.props.location.pathname?"active":"":this.props.location.pathname.indexOf(e)>-1?"active":""}componentDidMount(){navigator.platform.indexOf("Win")>-1&&(ee=new m.a(this.refs.sidebar,{suppressScrollX:!0,suppressScrollY:!1}))}componentWillUnmount(){navigator.platform.indexOf("Win")>-1&&ee.destroy()}render(){const e=this.props,t=e.bgColor,a=e.routes,r=e.rtlActive,o=e.logo;let l=null,s=null;void 0!==o&&(void 0!==o.outterLink?(l=n.a.createElement("a",{href:o.outterLink,className:"simple-text logo-mini",target:"_blank",onClick:this.props.toggleSidebar},n.a.createElement("div",{className:"logo-img"},n.a.createElement("img",{src:o.imgSrc,alt:"react-logo"}))),s=n.a.createElement("a",{href:o.outterLink,className:"simple-text logo-normal",target:"_blank",onClick:this.props.toggleSidebar},o.text)):(l=n.a.createElement(i.b,{to:o.innerLink,className:"simple-text logo-mini",onClick:this.props.toggleSidebar},n.a.createElement("div",{className:"logo-img"},n.a.createElement("img",{src:o.imgSrc,alt:"react-logo"}))),s=n.a.createElement(i.b,{to:o.innerLink,className:"simple-text logo-normal",onClick:this.props.toggleSidebar},o.text)));return n.a.createElement("div",{className:"sidebar",data:t,ref:this.sidebar},n.a.createElement("div",{className:"sidebar-wrapper",ref:"sidebar",style:{height:"100%"}},null!==l||null!==s?n.a.createElement("div",{className:"logo"},l,s):null,n.a.createElement(h.a,null,a.map((e,t)=>e.redirect?null:n.a.createElement("li",{className:this.activeRoute(e.path)+(e.pro?"":" active-pro"),key:t},n.a.createElement(i.c,{to:e.layout+e.path,className:"nav-link",activeClassName:"active",onClick:this.props.toggleSidebar},n.a.createElement("i",{className:e.icon}),n.a.createElement("p",null,r?e.rtlName:e.name)))),this.props.loggedIn?n.a.createElement("li",{onClick:()=>{this.setOpenManagement(!0)}},n.a.createElement("a",{className:"nav-link"},n.a.createElement("i",{className:"tim-icons icon-button-power","aria-hidden":"true"}),n.a.createElement("p",null,"Manage stations"))):n.a.createElement("li",null),this.props.loggedIn?n.a.createElement("li",{onClick:()=>{this.props.setLoggedIn(!1)}},n.a.createElement("a",{className:"nav-link"},n.a.createElement("i",{className:"tim-icons icon-button-power","aria-hidden":"true"}),n.a.createElement("p",null,"Logout"))):n.a.createElement("li",{onClick:()=>this.setOpenLogin(!0)},n.a.createElement("a",{className:"nav-link"},n.a.createElement("i",{className:"tim-icons icon-upload"}),n.a.createElement("p",null,"Login"))),n.a.createElement(Y,{open:this.state.openLogin,setOpen:this.setOpenLogin,loggedIn:this.props.loggedIn,setLoggedIn:this.props.setLoggedIn}),this.state.openManagement?n.a.createElement($,{open:this.state.openManagement,setOpen:this.setOpenManagement,loggedIn:this.props.loggedIn,currentUser:this.props.currentUser}):n.a.createElement(n.a.Fragment,null)),n.a.createElement(v.a,{id:"outlined-basic",select:!0,label:"Time Span",name:"time_span",variant:"outlined",value:this.props.timeSpan,SelectProps:{native:!0},onChange:this.props.handleTimeSpanChange,className:"footer",style:{position:"absolute",height:"40px",left:0,width:"100%",top:861},fullWidth:!0},this.timeSpanSelect.map(e=>n.a.createElement("option",{key:e.value,value:e.value},e.label)))))}}te.defaultProps={rtlActive:!1,bgColor:"primary",routes:[{}]};var ae=te,re=a(317);class ne extends r.Component{constructor(e){super(e),this.handleClick=()=>{"dropdown show-dropdown"===this.state.classes?this.setState({classes:"dropdown show-dropdown show"}):this.setState({classes:"dropdown show-dropdown"})},this.activateMode=e=>{switch(e){case"light":document.body.classList.add("white-content");break;default:document.body.classList.remove("white-content")}},this.state={classes:"dropdown show-dropdown"}}render(){return n.a.createElement("div",{className:"fixed-plugin"},n.a.createElement("div",{className:this.state.classes},n.a.createElement("div",{onClick:this.handleClick},n.a.createElement("i",{className:"fa fa-cog fa-2x"})),n.a.createElement("ul",{className:"dropdown-menu show"},n.a.createElement("li",{className:"header-title"},"SIDEBAR BACKGROUND"),n.a.createElement("li",{className:"adjustments-line"},n.a.createElement("div",{className:"badge-colors text-center"},n.a.createElement("span",{className:"primary"===this.props.bgColor?"badge filter badge-primary active":"badge filter badge-primary","data-color":"primary",onClick:()=>{this.props.handleBgClick("primary")}})," ",n.a.createElement("span",{className:"blue"===this.props.bgColor?"badge filter badge-info active":"badge filter badge-info","data-color":"blue",onClick:()=>{this.props.handleBgClick("blue")}})," ",n.a.createElement("span",{className:"green"===this.props.bgColor?"badge filter badge-success active":"badge filter badge-success","data-color":"green",onClick:()=>{this.props.handleBgClick("green")}})," ")),n.a.createElement("li",{className:"adjustments-line text-center color-change"},n.a.createElement("span",{className:"color-label"},"LIGHT MODE")," ",n.a.createElement("span",{className:"badge light-badge mr-2",onClick:()=>this.activateMode("light")})," ",n.a.createElement("span",{className:"badge dark-badge ml-2",onClick:()=>this.activateMode("dark")})," ",n.a.createElement("span",{className:"color-label"},"DARK MODE")," "),n.a.createElement("li",{className:"button-container"},n.a.createElement(re.a,{href:"https://www.creative-tim.com/product/black-dashboard-react",color:"primary",block:!0,className:"btn-round"},"Download Now"),n.a.createElement(re.a,{color:"default",block:!0,className:"btn-round",outline:!0,href:"https://demos.creative-tim.com/black-dashboard-react/#/documentation/tutorial"},"Documentation")),n.a.createElement("li",{className:"header-title"},"Want more components?"),n.a.createElement("li",{className:"button-container"},n.a.createElement(re.a,{href:"https://www.creative-tim.com/product/black-dashboard-pro-react",className:"btn-round",disabled:!0,block:!0,color:"danger"},"Get pro version")))))}}var oe=ne;var le=e=>(Object(r.useEffect)(()=>(console.log(e),e.CableApp.room=e.CableApp.cable.subscriptions.create({channel:"ClientChannel",room:e.wsId},{received:t=>{for(var a=0,r=Object.entries(t.data);a<r.length;a++){const t=Object(k.a)(r[a],2),n=t[0],o=t[1];"id"===n||"weatherStation"===n||"labels"===n||(e.wsData[n]?e.wsData[n].push(o):e.wsData[n]=[o])}e.wsData.labels=e.formatDateArr(e.wsData.created_at),e.updateWsData(e.wsData),console.log("web socket updated")}}),()=>{e.CableApp.room.unsubscribe()})),n.a.createElement(n.a.Fragment,null)),se=a(320),ie=a(321),ce=a(318),de=a(319),me=a(322),pe=a(323),ue=a(324),he=a(29);const ge=e=>{const t=e.temperatures,a=e.labels,r=e.heatIndex;let o={maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:t?Math.min(...t):-10,suggestedMax:t?Math.max(...t):100,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}};return n.a.createElement("div",{className:"chart-area"},n.a.createElement(he.b,{data:e=>{let n=e.getContext("2d").createLinearGradient(0,230,0,50);n.addColorStop(1,"rgba(29,140,248,0.2)"),n.addColorStop(.4,"rgba(29,140,248,0.0)"),n.addColorStop(0,"rgba(29,140,248,0)");var o=e.getContext("2d").createLinearGradient(0,230,0,50);return o.addColorStop(1,"rgba(72,72,176,0.1)"),o.addColorStop(.4,"rgba(72,72,176,0.0)"),{labels:a,datasets:[{label:"Temperature",fill:!1,backgroundColor:n,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:3,pointHoverBorderWidth:15,pointRadius:1,data:t},{label:"Heat Index",fill:!0,backgroundColor:o,borderColor:"#fcba0e",borderWidth:3,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#fcba0e",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#fcba0e",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:1,data:r}]}},options:o}))},be=e=>{const t=e.humidity,a=e.labels;let r={maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:t?Math.min(...t):-10,suggestedMax:t?Math.max(...t):100,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}};return n.a.createElement("div",{className:"chart-area"},n.a.createElement(he.b,{data:e=>{var r=e.getContext("2d").createLinearGradient(0,230,0,50);return r.addColorStop(1,"rgba(72,72,176,0.1)"),r.addColorStop(.4,"rgba(72,72,176,0.0)"),{labels:a,datasets:[{label:"Humidity",fill:!0,backgroundColor:r,borderColor:"#0066ff",borderWidth:3,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#0066ff",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#0066ff",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:1,data:t}]}},options:r}))};var fe=a(10),Ee=a.n(fe);const ve=e=>n.a.createElement(re.a,{tag:"label",className:Ee()("btn-simple",{active:e.active===e.wsId}),color:e.color||"info",id:"".concat(e.wsId-1),size:e.size||"sm",onClick:()=>{return t=e.wsId,void e.handleOnClick(t);var t}},n.a.createElement("input",{defaultChecked:!0,className:"d-none",name:"options",type:"radio"}),n.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},e.text||"Placeholder"),n.a.createElement("span",{className:"d-block d-sm-none"},n.a.createElement("i",{className:"tim-icons icon-single-02"}))),Ce=e=>{const t=e.labels,a=e.temperatures,r=e.heatIndex,o=e.humidity,l=t=>{e.wsId!==t&&e.onWsIdChange(t)};let s=a?a[a.length-1]:"Data missing",i=r?r[r.length-1]:"Data missing",c=o?o[o.length-1]:"Data missing";return n.a.createElement(ce.a,{className:"card-chart"},n.a.createElement(de.a,null,n.a.createElement(se.a,null,n.a.createElement(ie.a,{className:"text-left",sm:"6"},n.a.createElement("h5",{className:"card-category"},"Temperature (Celcius) + HeatIndex (Celcius)"),n.a.createElement(me.a,{tag:"h2"},n.a.createElement("span",{style:{marginRight:"40px"}},n.a.createElement("i",{className:"fas fa-thermometer-half text-info"}),"Temperature: ",s," \xb0C"),n.a.createElement("span",null,n.a.createElement("i",{className:"fas fa-sun text-warning"}),"Heat Index:"," ",i," \xb0C"))),n.a.createElement(ie.a,{sm:"6"},n.a.createElement(pe.a,{className:"btn-group-toggle float-right","data-toggle":"buttons"},n.a.createElement(ve,{wsId:1,handleOnClick:l,text:"\u041a\u0438\u0440\u043e",active:e.wsId}),n.a.createElement(ve,{wsId:2,handleOnClick:l,text:"\u041c\u0438\u0448\u043e",active:e.wsId}),n.a.createElement(ve,{wsId:3,handleOnClick:l,text:"\u041a\u0440\u0438\u0441",active:e.wsId}),n.a.createElement(ve,{wsId:4,handleOnClick:l,text:"\u0417\u043b\u0430\u0442\u043e",active:e.wsId}),n.a.createElement(ve,{wsId:5,handleOnClick:l,text:"\u041b\u0443\u0434\u0438\u044f",active:e.wsId}))))),n.a.createElement(ue.a,null,n.a.createElement(ge,{temperatures:a,labels:t,heatIndex:r})),n.a.createElement(de.a,null,n.a.createElement(se.a,null,n.a.createElement(ie.a,{className:"text-left",sm:"6"},n.a.createElement("h5",{className:"card-category"},"Humidity (%)"),n.a.createElement(me.a,{tag:"h2"},n.a.createElement("i",{className:"fas fa-tint text-info"}),"Humidity: ",c," ","%")))),n.a.createElement(ue.a,null,n.a.createElement(be,{humidity:o,labels:t})))};var ke=e=>{const t=e.relative,a=e.absolute,r=e.labels;let o=t?t[t.length-1]:"Data missing",l=a?a[a.length-1]:"Data missing";return n.a.createElement(ce.a,{className:"card-chart"},n.a.createElement(de.a,null,n.a.createElement("h5",{className:"card-category"},"Absolute + Relative Pressure (HPa)"),n.a.createElement(me.a,{tag:"h3"},n.a.createElement("div",null,n.a.createElement("i",{className:"fas fa-tachometer-alt text-info"})," Relative:"," ",o," HPa"),n.a.createElement("div",null,n.a.createElement("i",{className:"fas fa-tachometer-alt text-info",style:{visibility:"hidden"}}),"Absolute: ",l," HPa"))),n.a.createElement(ue.a,null,n.a.createElement("div",{className:"chart-area"},n.a.createElement(he.b,{data:e=>{var n=e.getContext("2d").createLinearGradient(0,230,0,50);return n.addColorStop(1,"rgba(72,72,176,0.2)"),n.addColorStop(.2,"rgba(72,72,176,0.0)"),{labels:r,datasets:[{label:"Absolute Pressure",fill:!0,backgroundColor:n,borderColor:"#d048b6",borderWidth:3,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#d048b6",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#d048b6",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:1,data:a},{label:"Relative Pressure",fill:!0,backgroundColor:n,borderColor:"#ffff66",borderWidth:3,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#ffff66",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#ffff66",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:1,data:t}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}}))))};var we=e=>{const t=e.voltage,a=e.labels;let r=t?t[t.length-1]:"Data missing";return n.a.createElement(ce.a,{className:"card-chart"},n.a.createElement(de.a,null,n.a.createElement("h5",{className:"card-category"},"Battery Voltage (V)"),n.a.createElement(me.a,{tag:"h3"},n.a.createElement("div",null,n.a.createElement("i",{className:"fas fa-bolt text-primary"})," Voltage: ",r," V"),n.a.createElement("div",{style:{visibility:"hidden"}},n.a.createElement("i",{className:"fas fa-bolt text-primary"})," Voltage: V"))),n.a.createElement(ue.a,null,n.a.createElement("div",{className:"chart-area"},n.a.createElement(he.a,{data:e=>{var r=e.getContext("2d").createLinearGradient(0,230,0,50);return r.addColorStop(1,"rgba(29,140,248,0.2)"),r.addColorStop(.4,"rgba(29,140,248,0.0)"),{type:"bar",responsive:!0,legend:{display:!1},labels:a,datasets:[{label:"Volts",fill:!0,backgroundColor:r,hoverBackgroundColor:r,borderColor:"#1f8ef1",borderWidth:3,borderDash:[],borderDashOffset:0,data:t}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:3.3,suggestedMax:4.2,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}}))))};var ye=e=>{const t=e.dewPoint,a=e.dewPointSpread,r=e.labels;let o=t?t[t.length-1]:"Data missing",l=a?a[a.length-1]:"Data missing";return n.a.createElement(ce.a,{className:"card-chart"},n.a.createElement(de.a,null,n.a.createElement("h5",{className:"card-category"},"Dew Point + Dew Point Spread"),n.a.createElement(me.a,{tag:"h3"},n.a.createElement("div",null,n.a.createElement("i",{className:"fas fa-tint text-success"})," Dew Point: ",o," ","\xb0C"),n.a.createElement("div",null,n.a.createElement("i",{className:"fas fa-tint text-success",style:{visibility:"hidden"}})," ","Dew Point Spread: ",l," \xb0C"))),n.a.createElement(ue.a,null,n.a.createElement("div",{className:"chart-area"},n.a.createElement(he.b,{data:e=>{var n=e.getContext("2d").createLinearGradient(0,230,0,50);return n.addColorStop(1,"rgba(66,134,121,0.15)"),{labels:r,datasets:[{label:"Dew Point",fill:!0,backgroundColor:n,borderColor:"#00ffff",borderWidth:3,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#00ffff",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#00ffff",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:1,data:t},{label:"Dew Point Spread",fill:!0,backgroundColor:n,borderColor:"#00d6b4",borderWidth:3,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#00d6b4",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#00d6b4",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:1,data:a}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}}))))},xe=a(325);var Se=e=>{const t=e.zambrettisWords,a=e.accuracyInPercents,r=e.tendInWords;let o=t?t[t.length-1]:"Data missing",l=a?a[a.length-1]:"Data missing",s=r?r[r.length-1]:"Data missing";return n.a.createElement(ce.a,null,n.a.createElement(ue.a,null,n.a.createElement(xe.a,{className:"tablesorter",responsive:!0},n.a.createElement("thead",{className:"text-primary"},n.a.createElement("tr",null,n.a.createElement("th",null,"ZAMBRETTIS WORDS"),n.a.createElement("th",null,"ACCURACY IN PERCENT (%)"),n.a.createElement("th",null,"TREND IN WORDS"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,o),n.a.createElement("td",null,l),n.a.createElement("td",null,s))))))};var Oe=e=>{let t=e.wsId,a=e.wsData;return n.a.createElement("div",{className:"content"},n.a.createElement(se.a,null,n.a.createElement(ie.a,{xs:"12"},n.a.createElement(Ce,{wsId:t,onWsIdChange:e.onWsIdChange,temperatures:null===a||void 0===a?void 0:a.temperatures,heatIndex:null===a||void 0===a?void 0:a.heatIndex,labels:null===a||void 0===a?void 0:a.labels,humidity:null===a||void 0===a?void 0:a.humidity}))),n.a.createElement(se.a,null,n.a.createElement(ie.a,{lg:"4"},n.a.createElement(ke,{labels:null===a||void 0===a?void 0:a.labels,relative:null===a||void 0===a?void 0:a.relativePressure,absolute:null===a||void 0===a?void 0:a.absolutePressure})),n.a.createElement(ie.a,{lg:"4"},n.a.createElement(we,{labels:null===a||void 0===a?void 0:a.labels,voltage:null===a||void 0===a?void 0:a.voltageBattery})),n.a.createElement(ie.a,{lg:"4"},n.a.createElement(ye,{labels:null===a||void 0===a?void 0:a.labels,dewPoint:null===a||void 0===a?void 0:a.dewPoint,dewPointSpread:null===a||void 0===a?void 0:a.dewPointSpread}))),n.a.createElement(se.a,null,n.a.createElement(ie.a,{lg:"12",md:"12"},n.a.createElement(Se,{labels:null===a||void 0===a?void 0:a.labels,accuracyInPercents:null===a||void 0===a?void 0:a.accuracyInPercents,tendInWords:null===a||void 0===a?void 0:a.tendInWords,zambrettisWords:null===a||void 0===a?void 0:a.zambrettisWords}))))};const De=e=>{const t=e.timeSpan,a=Object(q.a)(["wsId","timeSpan"]),o=Object(k.a)(a,2),l=o[0],s=o[1],i=l.wsId?parseInt(l.wsId):1,c=Object(r.useState)(i),d=Object(k.a)(c,2),m=d[0],p=d[1],u=Object(r.useState)({temperatures:[],heatIndex:[],labels:[],humidity:[],relativePressure:[],absolutePressure:[],voltageBattery:[],accuracyInPercents:[],tendInWords:[],zambrettisWords:[]}),h=Object(k.a)(u,2),g=h[0],b=h[1],f=Object(r.useState)(!1),E=Object(k.a)(f,2),v=E[0],C=E[1],w=e=>e.map(e=>{let t=new Date(e);return("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+" "+("0"+t.getDate()).slice(-2)+"/"+("0"+(t.getMonth()+1)).slice(-2)}),y=e=>{if(!e)return[];let t=e.reduce((e,t)=>{for(var a=0,r=Object.entries(t);a<r.length;a++){const t=Object(k.a)(r[a],2),n=t[0],o=t[1];"id"!==n&&"weatherStation"!==n&&(void 0===e[n]?e[n]=[o]:e[n]=[...e[n],o])}return e.labels=w(e.created_at),e},{});return b(t),t};return Object(r.useEffect)(()=>{_(m,t).then(e=>{let t=y(e.data);b(t),console.log(g,"Use Effect")})},[t]),n.a.createElement(n.a.Fragment,null,n.a.createElement(le,{wsId:m,wsData:g,formatDateArr:w,updateWsData:e=>{b(e),console.log(g,"updateWsData"),C(!v)},CableApp:A}),n.a.createElement(Oe,{wsId:m,wsData:g,onWsIdChange:e=>{_(e,t).then(t=>{let a=y(t.data);p(e),b(a),s("wsId",e,{path:"/"})})}}))};var Ne=a(326),Ie=a(334),Pe=a(327),Le=a(328),je=(a(263),a(25)),Be=a.n(je);var We,Te=()=>{Be.a.Icon.Default.imagePath="../node_modules/leaflet",delete Be.a.Icon.Default.prototype._getIconUrl,Be.a.Icon.Default.mergeOptions({iconRetinaUrl:a(264),iconUrl:a(265),shadowUrl:a(266)});return n.a.createElement("div",{className:"content"},n.a.createElement(se.a,null,n.a.createElement(ie.a,{md:"12"},n.a.createElement(ce.a,{className:"card-plain"},n.a.createElement(de.a,null,"Locations of all weather stations"),n.a.createElement(ue.a,null,n.a.createElement(Ne.a,{style:{position:"relative",overflow:"hidden",height:"800px"},className:"map",id:"map",center:[43.2238,27.9071],zoom:14,scrollWheelZoom:!1},n.a.createElement(Ie.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.a.createElement(Pe.a,{position:[43.2286,27.88983]},n.a.createElement(Le.a,null,n.a.createElement("b",null,"WS 1"),n.a.createElement("br",null),"\u0423\u043b. \u0412\u044f\u0440\u0430",n.a.createElement("br",null),"\u0412\u0430\u0440\u043d\u0430")),n.a.createElement(Pe.a,{position:[43.22193,27.92269]},n.a.createElement(Le.a,null,n.a.createElement("b",null,"WS 2"),n.a.createElement("br",null),"\u0423\u043b. \u041d\u0438\u043a\u043e\u043b\u0430 \u041a\u043e\u0437\u043b\u0435\u0432",n.a.createElement("br",null),"\u0412\u0430\u0440\u043d\u0430")),n.a.createElement(Pe.a,{position:[43.22804,27.8856]},n.a.createElement(Le.a,null,n.a.createElement("b",null,"WS 3"),n.a.createElement("br",null),"\u0423\u043b. \u041c\u043b\u0430\u0434\u0435\u0436\u043a\u0430",n.a.createElement("br",null),"\u0412\u0430\u0440\u043d\u0430")),n.a.createElement(Pe.a,{position:[43.237995,27.884]},n.a.createElement(Le.a,null,n.a.createElement("b",null,"WS 4"),n.a.createElement("br",null),"\u0443\u043b. \u0426\u0430\u0440 \u0421\u0432\u0435\u0442\u043e\u0441\u043b\u0430\u0432 \u0422\u0435\u0440\u0442\u0435\u0440",n.a.createElement("br",null),"\u0412\u0430\u0440\u043d\u0430")),n.a.createElement(Pe.a,{position:[43.22333,27.9253]},n.a.createElement(Le.a,null,n.a.createElement("b",null,"WS 5"),n.a.createElement("br",null),"\u0443\u043b. \u0414\u0443\u0431\u0440\u043e\u0432\u043d\u0438\u043a",n.a.createElement("br",null),' \u0412\u0430\u0440\u043d\u0430"'))))))))},Ae=[{path:"/dashboard",name:"Dashboard",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons icon-chart-pie-36",component:De,layout:""},{path:"/map",name:"Map",rtlName:"\u062e\u0631\u0627\u0626\u0637",icon:"tim-icons icon-pin",component:Te,layout:""},{redirect:"/dashboard",path:"/",name:"Dashboard",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons icon-chart-pie-36",component:De,layout:""}],Re=a(126),He=a.n(Re);class _e extends n.a.Component{constructor(e){super(e),this.cookies=new p.a,this.toggleSidebar=()=>{document.documentElement.classList.toggle("nav-open"),this.setState({sidebarOpened:!this.state.sidebarOpened})},this.handleBgClick=e=>{this.setState({backgroundColor:e})},this.getBrandText=e=>{for(let t=0;t<Ae.length;t++)if(-1!==this.props.location.pathname.indexOf(Ae[t].layout+Ae[t].path))return Ae[t].name;return"Brand"},this.handleTimeSpanChange=e=>{this.cookies.set("timeSpan",e.target.value,{path:"/"}),this.setState({timeSpan:e.target.value})},this.setLoggedIn=e=>{!1===e&&(this.cookies.remove("token",{path:"/"}),this.cookies.remove("loggedIn",{path:"/"})),this.setState({loggedIn:e})},this.state={backgroundColor:"blue",sidebarOpened:-1!==document.documentElement.className.indexOf("nav-open"),timeSpan:this.cookies.get("timeSpan")?this.cookies.get("timeSpan"):"6.hours.ago",loggedIn:!!this.cookies.get("loggedIn")&&this.cookies.get("loggedIn"),currentUser:!1}}componentDidMount(){if(navigator.platform.indexOf("Win")>-1){document.documentElement.className+=" perfect-scrollbar-on",document.documentElement.classList.remove("perfect-scrollbar-off"),We=new m.a(this.refs.mainPanel,{suppressScrollX:!0});let e=document.querySelectorAll(".table-responsive");for(let t=0;t<e.length;t++)We=new m.a(e[t])}this.state.loggedIn&&function(){return F.apply(this,arguments)}().then(e=>{console.log(e.data.user,"current user"),200===e.status&&this.setState({currentUser:e.data.user.username})})}componentWillUnmount(){navigator.platform.indexOf("Win")>-1&&(We.destroy(),document.documentElement.className+=" perfect-scrollbar-off",document.documentElement.classList.remove("perfect-scrollbar-on"))}componentDidUpdate(e){if("PUSH"===e.history.action){if(navigator.platform.indexOf("Win")>-1){let e=document.querySelectorAll(".table-responsive");for(let t=0;t<e.length;t++)We=new m.a(e[t])}document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.refs.mainPanel.scrollTop=0}}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"wrapper"},n.a.createElement(ae,Object.assign({},this.props,{timeSpan:this.state.timeSpan,handleTimeSpanChange:this.handleTimeSpanChange,routes:Ae,bgColor:this.state.backgroundColor,logo:{innerLink:"/",text:"Weather Stations",imgSrc:He.a},toggleSidebar:this.toggleSidebar,open:this.state.open,setOpen:this.setOpen,loggedIn:this.state.loggedIn,setLoggedIn:this.setLoggedIn,currentUser:this.state.currentUser})),n.a.createElement("div",{className:"main-panel",ref:"mainPanel",data:this.state.backgroundColor},n.a.createElement(c.d,null,n.a.createElement(c.b,{path:"/dashboard",render:e=>n.a.createElement(De,Object.assign({},e,{timeSpan:this.state.timeSpan})),key:0}),n.a.createElement(c.b,{path:"/map",render:e=>n.a.createElement(Te,e),key:1}),n.a.createElement(c.b,{path:"/",render:e=>n.a.createElement(De,Object.assign({},e,{timeSpan:this.state.timeSpan})),key:2}),n.a.createElement(c.a,{from:"*",to:"/"})),-1!==this.props.location.pathname.indexOf("maps")?null:n.a.createElement(E,{fluid:!0}))),n.a.createElement(oe,{bgColor:this.state.backgroundColor,handleBgClick:this.handleBgClick}))}}var Me=_e;a(267),a(268),a(269);const Ue=Object(s.a)();l.a.render(n.a.createElement(d.a,null,n.a.createElement(i.a,{history:Ue},n.a.createElement(c.d,null,n.a.createElement(c.b,{path:"/",render:e=>n.a.createElement(Me,e)})))),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.591e9804.chunk.js.map