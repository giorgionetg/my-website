(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,a){e.exports=a(79)},60:function(e,t,a){},61:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},63:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),i=(a(60),a(14)),s=a(15),c=a(18),m=a(16),u=a(19),p=(a(61),a(62),a(63),a(92)),g=a(89),h=a(93),d=(n.Component,a(82)),f=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement("h1",null,"InfoPage")))}}]),t}(n.Component),E=a(37),v=a(83),b=a(94),y=a(50),w=a(84),O=a(85),k=a(86),S=a(87),j=a(88),x=a(95),C=a(34),G=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to Memo Game"),r.a.createElement("p",null,"The main reason I made this game it is my difficulty learn and memorize the language's words."),r.a.createElement("p",null,"A lot of years ago I made the same kind of game to a person I really care about her."),r.a.createElement("p",null,"So I start to create this little memory game to improve recognize of words in a simple way, fully customizable."),r.a.createElement("h3",null,"How it works:"),r.a.createElement("ul",null,r.a.createElement("li",null,"At first, you can create one or more games via ",r.a.createElement("b",null,"Manager Tab"),"."),r.a.createElement("li",null,"For each Game you can set preferences as you prefer."),r.a.createElement("li",null,"To play the Game you have also to fill up your game with a Words' List (you may update when ever you want at anytime).")),r.a.createElement("h3",null,"About the Author"),r.a.createElement("p",null,r.a.createElement("b",null,"Giorgio Tedesco")," | I work on ",r.a.createElement("b",null,"web development/3D graphic")," and I love to mix them."),r.a.createElement("h3",null,"Licence"),r.a.createElement("p",null,"FREE TO USE, TIPPABLE with XRP (COIL AND TIPBOT)"))}}]),t}(r.a.Component),T=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(c.a)(this,Object(m.a)(t).call(this,e));for(var n=[],r=0;r<10;r++){var l=a.props.settings.wordlist,o=l[Math.floor(Math.random()*l.length)];l.length;n.push({theQuestion:o,theOptions:[]})}return a.state={questions:n,current:0,score:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"setScore",value:function(e){var t=e;this.state.current>=9?this.setState(function(e){return{score:e.score+t,current:0}}):t<0?this.setState(function(e){return{score:e.score+t}}):this.setState(function(e){return{score:e.score+t,current:e.current+1}})}},{key:"render",value:function(){var e=this,t=this.state.current/10;return r.a.createElement("div",null,r.a.createElement(v.a,{value:t}),r.a.createElement("p",null,"Score: ",this.state.score),r.a.createElement("hr",null),this.state.questions.map(function(t,a){var n;n=a==e.state.current?{display:"block"}:{display:"none"};var l="";e.props.settings.isSwitched?(l=e.state.questions[a].theQuestion.from,e.state.questions[a].theQuestion.to):(l=e.state.questions[a].theQuestion.to,e.state.questions[a].theQuestion.from);var o=e.props.settings.wordlist;!function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(o);var i={padding:"3px"};return r.a.createElement("div",{key:a,style:n},r.a.createElement("br",null),r.a.createElement("h3",{style:{textAlign:"center"}},l),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",maxWidth:"700px",flexWrap:"wrap",justifyContent:"center"}},o.map(function(t,a){var n="",o="",s="";return e.props.settings.isSwitched?(o=t.to,s=t.from):(o=t.from,s=t.to),n=l==s?1:-1,r.a.createElement("div",{style:i},r.a.createElement(b.b,{onClick:function(t){return e.setScore(n)},value:n}," ",o))})),r.a.createElement("br",null),r.a.createElement("br",null))}))}}]),t}(r.a.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"FAQ"),r.a.createElement("p",null,"Work in Progress!"))}}]),t}(r.a.Component),A=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(c.a)(this,Object(m.a)(t).call(this,e));JSON.parse(window.localStorage.getItem("test"));var n=window.localStorage,r=[];for(var l in n)"clear"!=l&&"removeItem"!=l&&"setItem"!=l&&"getItem"!=l&&"key"!=l&&"length"!=l&&"google_experiment_mod"!=l&&"google_experiment_mod3"!=l&&r.push(JSON.parse(n.getItem(l)));for(var o in r)r[o].isSwitched||(r[o].isSwitched=!1);return r.length>=1?a.state={games:r}:a.state={games:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"createGame",value:function(e){this.setState(function(e){return{games:[].concat(Object(E.a)(e.games),[{name:"",description:"",isOpen:!1,isSwitched:!1,wordlist:[{from:"Domenica",to:"Domingo"},{from:"Janeiro",to:"Gennaio"},{from:"Ol\xe0, tudo bem?",to:"Sim, tudo bom, e voc\xe9?"},{from:"Tudo. Entao, de onde voc\xe9 \xe9?",to:"Eu moro na Italia"}]}])}})}},{key:"saveGame",value:function(e){var t=this.state.games[e];this.state.games[e].isOpen||(this.setState(function(t){return t.games[e].isOpen=!1,{games:t.games}}),t.isOpen=!1);var a=JSON.stringify(t);window.localStorage.setItem("game:"+this.state.games[e].name,a)}},{key:"playGame",value:function(e){this.setState(function(t){return t.games[e].isOpen=!0,{games:t.games}})}},{key:"stopGame",value:function(e){this.setState(function(t){return t.games[e].isOpen=!1,{games:t.games}})}},{key:"importJson",value:function(e,t){var a=new FileReader,n=this;a.onload=function(e){var r=JSON.parse(a.result);n.setState(function(e){return e.games[t]=r,{games:e.games}})},a.readAsText(e.target.files[0],"UTF8")}},{key:"exportJson",value:function(e,t){var a=this.state.games[t],n=(encodeURIComponent(JSON.stringify(a)),document.createElement("a")),r=new Blob([JSON.stringify(a)],{type:"text/json"});n.href=URL.createObjectURL(r),n.download=this.state.games[t].name+".json",document.body.appendChild(n),n.click()}},{key:"deleteGame",value:function(e){var t=this;window.localStorage.removeItem("game:"+this.state.games[e].name),this.setState(function(a){return{games:t.state.games.filter(function(t,a){return a!==e})}})}},{key:"updateGameName",value:function(e,t){var a=e.target.value;this.setState(function(e){return e.games[t].name=a,{games:e.games}})}},{key:"updateGameDescription",value:function(e,t){var a=e.target.value;this.setState(function(e){return e.games[t].description=a,{games:e.games}})}},{key:"createAWord",value:function(e,t){e.target.value;this.setState(function(e){return e.games[t].wordlist=[].concat(Object(E.a)(e.games[t].wordlist),[{from:"",to:""}]),{games:e.games}})}},{key:"clearData",value:function(e,t){this.setState(function(e){return e.games[t].wordlist=[{from:"",to:""}],{games:e.games}})}},{key:"updateWordFrom",value:function(e,t,a){var n=e.target.value;this.setState(function(e){return e.games[t].wordlist[a].from=n,{games:e.games}})}},{key:"updateWordTo",value:function(e,t,a){var n=e.target.value;this.setState(function(e){return e.games[t].wordlist[a].to=n,{games:e.games}})}},{key:"deletePair",value:function(e,t,a){this.setState(function(e){var n=e.games[t].wordlist.filter(function(e,t){return t!==a});return e.games[t].wordlist=n,{games:e.games}})}},{key:"getQuestion",value:function(e,t){return window.alert("generazione automatica di domande in base as setting"),this.state.games[t].wordlist.length}},{key:"flipTheSwitch",value:function(e,t){this.setState(function(e){return e.games[t].isSwitched=!e.games[t].isSwitched,{games:e.games}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Manage your Games"),r.a.createElement(b.b,{icon:"small-plus",onClick:function(t){return e.createGame(t)}},"Create a Game!"),r.a.createElement("div",{style:{overflowY:"auto",height:"50vh",marginTop:"10px",paddingRight:"10px",paddingLeft:"10px",paddingBottom:"10px"}},this.state.games.map(function(t,a){var n={display:"flex",marginBottom:"5px"},l={flexGrow:"1",paddingRight:"5px"},o={flexGrow:"1",paddingLeft:"5px"},i={flexGrow:"1"};return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(d.a,{key:a},r.a.createElement("h3",null,"Game Settings ",r.a.createElement("small",null,e.state.games[a].name)),r.a.createElement(y.a,{isOpen:e.state.games[a].isOpen},r.a.createElement(d.a,{style:{top:"0",left:"calc(50% - 350px)",margin:"10vh 0",width:"700px"}},r.a.createElement("h3",null,"Start the Game: ",e.state.games[a].name),r.a.createElement("p",null,r.a.createElement("i",null,e.state.games[a].description)),r.a.createElement(T,{settings:e.state.games[a]}),r.a.createElement(w.a,null,r.a.createElement(b.b,{icon:"play",text:"Start"}),r.a.createElement(b.b,{icon:"stop",onClick:function(t){return e.stopGame(a)},text:"Stop"})))),r.a.createElement("div",null,r.a.createElement(w.a,{style:{float:"right"}},r.a.createElement(b.b,{onClick:function(t){return e.playGame(a)},icon:"play"}),r.a.createElement(b.b,{onClick:function(t){return e.saveGame(a)},icon:"floppy-disk"}),r.a.createElement(b.a,{onClick:function(t){return e.exportJson(t,a)},icon:"export"}),r.a.createElement(O.a,{icon:"import",onInputChange:function(t){return e.importJson(t,a)}}),r.a.createElement(b.b,{onClick:function(t){return e.deleteGame(a)},icon:"small-cross"}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(k.a,{placeholder:"Game Name",onChange:function(t){return e.updateGameName(t,a)},value:e.state.games[a].name}),r.a.createElement("br",null),r.a.createElement(S.a,{fill:"true",onChange:function(t){return e.updateGameDescription(t,a)},value:e.state.games[a].description}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j.a,{checked:e.state.games[a].isSwitched,label:"Is question inverted?",onChange:function(t){return e.flipTheSwitch(t,a)}}),r.a.createElement("br",null),r.a.createElement("h4",null,"Words' List:"),r.a.createElement("p",null,r.a.createElement("i",null,"Here you can set just a words pairs or a sentences pairs or like touch and go reply.")),r.a.createElement(b.b,{onClick:function(t){return e.createAWord(t,a)}},"Create a Word Pair!")," ",r.a.createElement(b.b,{onClick:function(t){return e.clearData(t,a)}},"Clear the words dataset!"),r.a.createElement("br",null),r.a.createElement("br",null),e.state.games[a].wordlist.map(function(t,s){return r.a.createElement("div",{key:s,style:n},r.a.createElement("div",{style:l},r.a.createElement(k.a,{placeholder:"Your Language",onChange:function(t){return e.updateWordFrom(t,a,s)},value:t.from})),r.a.createElement("div",{style:i},r.a.createElement(k.a,{placeholder:"Language to learn",onChange:function(t){return e.updateWordTo(t,a,s)},value:t.to})),r.a.createElement("div",{style:o},r.a.createElement(b.b,{icon:"cross",onClick:function(t){return e.deletePair(t,a,s)}})))})))})))}}]),t}(r.a.Component),W=function(e){function t(e){var a;Object(i.a)(this,t);var n=(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).props.location.pathname.split("/");n[n.length-1];return a.state={selectedTab:"home",games:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleTabChange",value:function(e){this.setState({selectedTab:e})}},{key:"render",value:function(){var e=this,t=this.props.location.pathname.split("/");t[t.length-1];if(this.state.games.length<=0);else;return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement("h1",null,"Memo Game"),r.a.createElement("hr",null),r.a.createElement(x.a,{animate:"true",onChange:function(t){return e.handleTabChange(t)},selectedTabId:this.state.selectedTab},r.a.createElement(C.a,{id:"home",title:"Home",panel:r.a.createElement(G,{name:"Homepage Game"})}),r.a.createElement(C.a,{id:"manager",title:"Manager",panel:r.a.createElement(A,{games:this.state.games})}),r.a.createElement(C.a,{id:"faq",title:"FAQ",panel:r.a.createElement(I,null)})),r.a.createElement("br",null)))}}]),t}(n.Component),J=a(91),L=a(36),N=a(51),M=a(49),P=a(90),q=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={textAlign:"center"};return r.a.createElement(p.a,{basename:"/memo-learning-app"},r.a.createElement("div",null,r.a.createElement(J.a,null,r.a.createElement(J.a.Group,{align:"left"},r.a.createElement(J.a.Heading,null,r.a.createElement(g.a,{to:"/"},"Easy Learn App"))),r.a.createElement(J.a.Group,{align:"right"},r.a.createElement(L.a,{icon:"menu"},r.a.createElement(b.b,{icon:"menu"}),r.a.createElement(N.a,null,r.a.createElement(g.a,{to:"/memo-game/home"},r.a.createElement(M.a,{text:"Memo Game"})))))),r.a.createElement("div",{className:"page-container"},r.a.createElement("div",{className:"main-content"},r.a.createElement(P.a,{style:e},r.a.createElement("a",{style:e,amount:"5",size:"380",to:"giorgionetg",network:"twitter",label:"Tip to use my Easy Learn App",labelpt:"Tipped. Thanks to support my work.",href:"https://www.xrptipbot.com",target:"_blank"}))," ",r.a.createElement("br",null),r.a.createElement(h.a,{path:"/",exact:!0,component:W}),r.a.createElement(h.a,{path:"/info",component:f}),r.a.createElement(h.a,{path:"/memo-game/:tab",component:W})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[55,1,2]]]);
//# sourceMappingURL=main.4137fca3.chunk.js.map