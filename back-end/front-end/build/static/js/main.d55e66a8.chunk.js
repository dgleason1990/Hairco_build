(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},104:function(e,t,a){},278:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),o=a.n(s),i=(a(100),a(9)),l=a.n(i),c=a(15),u=a(4),m=a(5),h=a(7),d=a(6),p=a(8),f=(a(104),a(284)),b=a(280),y=a(281),g=a(279),v=a(16),E=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).addressFunction=function(){e.props.clientLocation(e.addressRef.current.value),console.log(e.addressRef.current.value)},e.addressRef=r.a.createRef(),e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:Object(v.a)({},O,{display:this.props.isOpen?"flex":"none"})},r.a.createElement("div",{className:"modal-layer",style:C}),r.a.createElement("div",{className:"form-container",style:w},r.a.createElement("button",{style:S,onClick:this.props.handleClose},"X Close"),r.a.createElement("h1",{style:j},"Enter your Address to find the nearest stylists"),r.a.createElement("form",{style:k},r.a.createElement("label",null,"Your Address:",r.a.createElement("textarea",{ref:this.addressRef,name:"address"}))),r.a.createElement("div",{onClick:this.addressFunction,className:"modelSubmit"},"  Find your stylists ")))}}]),t}(n.Component),O={position:"fixed",top:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",zIndex:1,overflow:"hidden",backgroundColor:"rgba(57,57,57,0.6)",fontSize:"2rem"},j={padding:"15px"},C={position:"fixed",width:"100vw",height:"100vh",zIndex:1,backgroundColor:"transparent"},w={position:"absolute",color:"rgb(238, 211, 142)",backgroundColor:"rgb(21, 21, 21)",width:"600px",maxWidth:"100%",height:"600px",maxHeight:"100%",zIndex:2,borderRadius:"3px",overflow:"auto",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"},k={marginTop:"4vw",marginBottom:"2vw"},S={border:"none",color:"#eed38e",fontSize:"1.3rem",background:"none",display:"flex",flexDirection:"column",width:"300px",cursor:"pointer"},N=a(283),x=Object(N.a)(function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1,className:"container"},a.handleOpen=function(e){e.stopPropagation(),a.setState({isOpen:!0})},a.handleClose=function(){a.setState({isOpen:!1})},a.myFunction=function(){"container"==a.state.className?a.setState({isOpen:!1,className:"change"}):a.setState({isOpen:!1,className:"container"})},a.handleClientLocation=function(e,t){a.props.clientLocation(e,t),a.props.history.push("/clients"),a.setState({isOpen:!1,className:"container"})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement(g.a,{to:"/home",style:R}," HairCo "),r.a.createElement(E,{handleClose:this.handleClose,isOpen:this.state.isOpen,clientLocation:this.handleClientLocation}),r.a.createElement("div",{className:this.state.className,onClick:this.myFunction},r.a.createElement("div",{onClick:this.myFunction,className:"bar1"}),r.a.createElement("div",{className:"bar2",onClick:this.myFunction}),r.a.createElement("div",{className:"bar3",onClick:this.myFunction}),r.a.createElement("div",{className:"bar4"},r.a.createElement(g.a,{to:"/home",onClick:this.myFunction}," Home "),r.a.createElement("button",{onClick:this.handleOpen},"Find your Stylist"),r.a.createElement(g.a,{to:"/registration",onClick:this.myFunction}," Become a Hairco Stylist "),r.a.createElement(g.a,{to:"/login",onClick:this.myFunction}," Login "))))}}]),t}(n.Component)),R={color:"rgb(238, 211, 142)",textDecoration:"none"},D=Object(N.a)(function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.handleOpen=function(){a.setState({isOpen:!0})},a.handleClose=function(){a.setState({isOpen:!1})},a.handleClientLocation=function(e){a.props.clientLocation(e),a.props.history.push("/clients")},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"summary"},r.a.createElement("img",{src:"./Assets/badge.jpg"}),r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Welcome to HairCo")),r.a.createElement("h2",null," Bringing clients and hair stylists together in an easy to use application "),r.a.createElement("button",{onClick:this.handleOpen}," ",r.a.createElement("img",{src:"./Assets/button.jpg",alt:"Button Image"}),"BOOK NOW"),r.a.createElement(E,{isOpen:this.state.isOpen,handleClose:this.handleClose,clientLocation:this.handleClientLocation})))}}]),t}(n.Component)),I=(n.Component,a(34)),P=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={activeMarker:{},selectedPlace:{data:{name:"",img:"",rating:"",_id:""}},showingInfoWindow:!1},a.onMarkerClick=function(){var e=Object(c.a)(l.a.mark(function e(t,n){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({activeMarker:n,selectedPlace:t,showingInfoWindow:!0});case 2:console.log(a.state.selectedPlace.data._id);case 3:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.onInfoWindowClose=function(){return a.setState({activeMarker:null,showingInfoWindow:!1})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onInfoWindowOpen",value:function(e,t){var a=this,n=r.a.createElement("button",{onClick:function(e){a.props.history.push("/yourStylists/".concat(a.state.selectedPlace.data._id))}},"Select your Stylist");o.a.render(r.a.Children.only(n),document.getElementById("iwc"))}},{key:"render",value:function(){var e=this,t={lat:this.props.stylists[0].location.coordinates[1].$numberDecimal,lng:this.props.stylists[0].location.coordinates[0].$numberDecimal};return r.a.createElement(I.Map,{google:this.props.google,containerStyle:{height:"80%",width:"80%"},zoom:13,center:t},this.props.stylists.map(function(t){return function(t){return r.a.createElement(I.Marker,{onClick:e.onMarkerClick,data:t,position:{lat:t.location.coordinates[1].$numberDecimal,lng:t.location.coordinates[0].$numberDecimal}})}(t)}),r.a.createElement(I.InfoWindow,{marker:this.state.activeMarker,onClose:this.onInfoWindowClose,visible:this.state.showingInfoWindow,onOpen:function(t){e.onInfoWindowOpen(e.props,t)}},r.a.createElement("div",{className:"stylistCard"},r.a.createElement("h1",null," ",this.state.selectedPlace.data.name," "),r.a.createElement("img",{src:this.state.selectedPlace.data.img,style:{width:"20vw"}}),r.a.createElement("h2",null," Rating: ",this.state.selectedPlace.data.rating," "),r.a.createElement("div",{id:"iwc"}))))}}]),t}(n.Component),A=Object(I.GoogleApiWrapper)({apiKey:"AIzaSyAG9AY0UMZa2LB2BdQ1S0-f0LzHvPlG_tM"})(P),W=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"clientPage"},r.a.createElement(A,{clients:this.props.clients,stylists:this.props.stylists,history:this.props.history}))}}]),t}(n.Component),F=a(93),L=a.n(F),M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={submission:{stylistId:"",name:"",date:"",comment:"",client:"",phoneNumber:""}},a.onSubmission=function(){var e=Object(c.a)(l.a.mark(function e(t){var n,r,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://hairco.herokuapp.com",t.preventDefault(),e.next=4,a.setState({submission:Object(v.a)({},a.state.submission,{stylistId:a.props.stylistData.id,name:a.props.stylistData.name})});case 4:r=a.state.submission,s={method:"POST",body:JSON.stringify(r),headers:{"content-type":"application/json"}},fetch(n+"/appointment",s).then(alert("Appointment Sent! Expect a text or call")).catch(function(e){return console.log(e)});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onChange=function(e){a.setState({submission:Object(v.a)({},a.state.submission,{date:e})})},a.handleChange=function(e){a.setState({submission:Object(v.a)({},a.state.submission,{comment:e.target.value})})},a.handleClient=function(e){a.setState({submission:Object(v.a)({},a.state.submission,{client:e.target.value})})},a.handlePhone=function(e){a.setState({submission:Object(v.a)({},a.state.submission,{phoneNumber:e.target.value})})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:Object(v.a)({},B,{display:this.props.isOpen?"flex":"none"})},r.a.createElement("div",{className:"modal-layer",onClick:this.props.handleClose,style:z}),r.a.createElement("div",{className:"form-container",style:G},r.a.createElement("button",{style:J,onClick:this.props.handleClose},"X Close"),r.a.createElement("h1",null," ",this.state.submission.name," "),r.a.createElement("form",{className:"submissionForm"},r.a.createElement("label",null,"Date",r.a.createElement(L.a,{onChange:this.onChange,value:this.props.stylistData.date})),"Submit your request:",r.a.createElement("textarea",{value:this.state.submission.comment,onChange:this.handleChange}),"Name:",r.a.createElement("input",{value:this.state.submission.client,onChange:this.handleClient}),"Phone Number:",r.a.createElement("input",{className:"phoneNumber",value:this.state.submission.phoneNumber,onChange:this.handlePhone}),r.a.createElement("button",{onClick:this.onSubmission,style:H}," Submit "))))}}]),t}(n.Component),B={position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",zIndex:1,overflow:"hidden",backgroundColor:"rgba(57,57,57,0.6)"},z={position:"fixed",width:"100vw",height:"100vh",zIndex:1,backgroundColor:"transparent"},G={position:"absolute",color:"rgb(57,57,57)",backgroundColor:"#FFFFFF",width:"600px",maxWidth:"100%",height:"600px",maxHeight:"100%",zIndex:2,borderRadius:"3px",overflow:"auto",display:"flex",flexDirection:"column"},H={fontSize:"1rem",border:"none",color:"rgb(238, 211, 142)",backgroundColor:"rgb(21, 21, 21)",cursor:"pointer"},J={border:"none",fontSize:"1.3rem",background:"none",width:"300px",cursor:"pointer"},$=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={currentStylist:{},isOpen:!1,stylistData:{id:"",name:""}},a.handleOpen=function(){a.setState({isOpen:!0})},a.handleClose=function(){a.setState({isOpen:!1})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(l.a.mark(function e(){var t,a=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.stylists.findIndex(function(e){return e._id==a.props.match.params.id}),e.next=3,this.setState({currentStylist:this.props.stylists[t],stylistData:{id:this.props.stylists[t]._id,name:this.props.stylists[t].name}});case 3:console.log(this.state);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.setState({currentStylist:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"yourStylist"},r.a.createElement("div",{className:"name"},this.state.currentStylist.name),r.a.createElement("img",{src:this.state.currentStylist.img}),r.a.createElement("button",{className:"button",onClick:this.handleOpen}," ",r.a.createElement("img",{className:"img",src:"./Assets/button.jpg",alt:"Button Image"})," Book an appointment"),r.a.createElement(M,{handleClose:this.handleClose,isOpen:this.state.isOpen,stylistData:this.state.stylistData}))}}]),t}(n.Component),T=Object(N.a)($),_=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={email:"testy",username:"",password:"",name:"",address:"",phoneNumber:"",profile:""},e.onSubmit=function(){var t=Object(c.a)(l.a.mark(function t(a){var n,r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n="https://hairco.herokuapp.com",t.next=4,e.setState({email:e.emailRef.current.value,username:e.usernameRef.current.value,password:e.passwordRef.current.value,name:e.nameRef.current.value,address:e.addressRef.current.value,phoneNumber:e.phoneNumberRef.current.value,profile:e.profileRef.current.value});case 4:r={method:"POST",body:JSON.stringify(e.state),headers:{"content-type":"application/json"}},fetch(n+"/registration",r).then(function(e){return e.json()}).then(e.props.history.push("/login")).catch(function(e){return console.log(e)});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.emailRef=r.a.createRef(),e.usernameRef=r.a.createRef(),e.passwordRef=r.a.createRef(),e.nameRef=r.a.createRef(),e.addressRef=r.a.createRef(),e.phoneNumberRef=r.a.createRef(),e.profileRef=r.a.createRef(),e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"registration"},r.a.createElement("form",null,r.a.createElement("label",null,"Email:",r.a.createElement("input",{ref:this.emailRef,type:"email"})),r.a.createElement("label",null,"Username:",r.a.createElement("input",{ref:this.usernameRef})),r.a.createElement("label",null,"Password:",r.a.createElement("input",{ref:this.passwordRef,type:"password"})),r.a.createElement("label",null,"Name:",r.a.createElement("input",{ref:this.nameRef})),r.a.createElement("label",null,"Address:",r.a.createElement("input",{ref:this.addressRef})),r.a.createElement("label",null,"Phone Number:",r.a.createElement("input",{ref:this.phoneNumberRef})),r.a.createElement("label",null,"Profile Picture (URL format)",r.a.createElement("input",{ref:this.profileRef})),r.a.createElement("button",{type:"submit",onClick:this.onSubmit},r.a.createElement("img",{src:"./Assets/button.jpg",alt:"Button Image"}),"Submit")),r.a.createElement("video",{className:"video",autoPlay:!0,loop:!0,muted:!0,src:"./Assets/video.mp4",width:"1100",height:"800"}))}}]),t}(n.Component),U=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={username:"",password:""},e.handleSubmit=function(){var t=Object(c.a)(l.a.mark(function t(a){var n,r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://localhost:8080",a.preventDefault(),t.next=4,e.setState({username:e.usernameRef.current.value,password:e.passwordRef.current.value});case 4:r={method:"POST",body:JSON.stringify(e.state),headers:{"content-type":"application/json"}},fetch(n+"/login",r).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({id:t.id}),localStorage.setItem("token",t.token),e.props.history.push("/dashboard/".concat(e.state.username))});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.usernameRef=r.a.createRef(),e.passwordRef=r.a.createRef(),e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login"},r.a.createElement("form",null,r.a.createElement("label",null,"Username:",r.a.createElement("input",{ref:this.usernameRef})),r.a.createElement("label",null,"Password:",r.a.createElement("input",{ref:this.passwordRef,type:"password"})),r.a.createElement("button",{onClick:this.handleSubmit}," ",r.a.createElement("img",{src:"./Assets/button.jpg",alt:"Button Image"}),"Login")))}}]),t}(n.Component),Y=a(35),K=a(62),X=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(K.a,{data:this.props.chartData,options:{}}))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,auth:!1,data:"",goals:{monthlyGoal:100,sales:10},chartData:{labels:["Remaining Monthly Goal","Amount Sold"],datasets:[{data:[90,10],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)"],borderWidth:1}]}},a.monthlyChange=function(e){a.setState({goals:{monthlyGoal:Number(e.target.value),sales:a.state.goals.sales}}),console.log(a.state)},a.submitMonthly=function(e){e.preventDefault();JSON.stringify(a.state.monthlyGoal);a.setState({chartData:{labels:Object(v.a)({},a.state.chartData.labels),datasets:[{data:[a.state.goals.monthlyGoal,a.state.goals.sales],backgroundColor:Object(Y.a)(a.state.chartData.datasets[0].backgroundColor),borderColor:Object(Y.a)(a.state.chartData.datasets[0].borderColor),borderWidth:1}]}})},a.saleChange=function(e){a.setState({goals:{monthlyGoal:a.state.goals.monthlyGoal,sales:Number(e.target.value)}})},a.submitSale=function(e){e.preventDefault(),console.log(a.state);JSON.stringify(a.state.sales);a.setState({chartData:{labels:Object(v.a)({},a.state.chartData.labels),datasets:[{data:[a.state.goals.monthlyGoal,a.state.goals.sales],backgroundColor:Object(Y.a)(a.state.chartData.datasets[0].backgroundColor),borderColor:Object(Y.a)(a.state.chartData.datasets[0].borderColor),borderWidth:1}]}}),console.log(a.state)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state);var t="https://hairco.herokuapp.com";void 0!==localStorage.token&&null!==localStorage.token?fetch(t+"/dashboard",{headers:{authorization:localStorage.token}}).then(function(t){200===t.status&&e.setState({loading:!1,auth:!0}),t.json().then(function(t){e.setState({data:t})})}).catch(function(e){window.location.href=t+"/login"}):window.location.href=t+"/login"}},{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement("h1",null," Welcome to your dashboard ",this.state.data.name," "),r.a.createElement("img",{src:this.state.data.img,alt:"Profile Picture"}),r.a.createElement("h2",null," Your current rating is: ",this.state.data.rating," "),r.a.createElement("div",null,r.a.createElement("h2",null," Set your monthly goals. "),r.a.createElement("h3",null," How much do you aim to make? "),r.a.createElement("form",null,"Monthly goal: ",r.a.createElement("input",{type:"number",onChange:this.monthlyChange}),r.a.createElement("button",{onClick:this.submitMonthly}," Submit "))),r.a.createElement("div",null,r.a.createElement("h2",null," Track your sales."),r.a.createElement("h2",null," Enter sales "),r.a.createElement("form",null,"Sale: ",r.a.createElement("input",{type:"number",onChange:this.saleChange}),r.a.createElement("button",{onClick:this.submitSale}," Submit "))),r.a.createElement("div",null,r.a.createElement("h2",null," Goal ")),r.a.createElement("div",null,r.a.createElement(X,{chartData:this.state.chartData})))}}]),t}(n.Component),Q=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={stylists:[{name:"No Stylists found in your area",rating:"Not Applicable",location:{coordinates:[{$numberDecimal:40.7128},{$numberDecimal:74.006}]}}],clients:{location:""},loading:!0},a.clientLocation=function(){var e=Object(c.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({clients:{location:t}});case 2:return n={method:"POST",body:JSON.stringify(a.state.clients),headers:{"content-type":"application/json"}},e.next=5,fetch("https://hairco.herokuapp.com/client",n).then(function(e){return e.json()}).then(function(){var e=Object(c.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({stylists:t});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"brushBackground"})),r.a.createElement("div",{className:"main"},r.a.createElement(x,{clientLocation:this.clientLocation}),r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(b.a,{path:"/home",render:function(){return r.a.createElement(D,{clientLocation:e.clientLocation})}}),r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y.a,{to:"/home"})}}),r.a.createElement(b.a,{path:"/clients",exact:!0,render:function(t){return r.a.createElement(W,Object.assign({stylists:e.state.stylists,clients:e.state.clients},t))}}),r.a.createElement(b.a,{path:"/yourStylists/:id",render:function(){return r.a.createElement(T,{stylists:e.state.stylists})}}),r.a.createElement(b.a,{path:"/registration",component:_}),r.a.createElement(b.a,{path:"/login",component:U}),r.a.createElement(b.a,{path:"/dashboard/:id",component:q}),r.a.createElement(b.a,{path:"/clients",exact:!0,render:function(t){return r.a.createElement(A,Object.assign({},t,{stylists:e.state.stylists,clients:e.state.clients}))}}),"/>"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=a(282);o.a.render(r.a.createElement(Z.a,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e,t,a){e.exports=a(278)}},[[95,2,1]]]);
//# sourceMappingURL=main.d55e66a8.chunk.js.map