(self.webpackChunk=self.webpackChunk||[]).push([[858],{44571:function(la,Z,h){"use strict";h.r(Z),h.d(Z,{default:function(){return V}});var T=h(42122),b=h.n(T),O=h(27424),v=h.n(O),k=h(75084),g=h(62435),P=h(17941),n=h(86074),w=function(a){var e=a.value,r=a.type,o=a.handlePrefixChange;return(0,n.jsx)("div",{className:"mr-6 w-1/5",children:(0,n.jsx)(P.Z,{onChange:function(i){return o(r,i.target.value)},value:e,className:"w-full",id:"standard-basic",label:"",variant:"standard"})})},y=w,A=function(a){var e=a.value,r=a.type,o=a.handleDataChange,u=a.placeholder;return(0,n.jsx)("div",{className:"w-1/3 mr-6",children:(0,n.jsx)(P.Z,{value:e,onChange:function(d){return o(r,d.target.value)},className:"w-full",id:"standard-basic",label:"",variant:"standard",placeholder:u})})},j=A,I=function(a){var e=a.value;return(0,n.jsx)("div",{className:"text-2xl mb-3",children:e})},x=I,B=function(a){var e=a.prefix,r=a.handlePrefixChange,o=a.data,u=a.handleDataChange;return(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsx)(x,{value:"Title"}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(y,{handlePrefixChange:r,value:e==null?void 0:e.title,type:"title"}),(0,n.jsx)(j,{handleDataChange:u,value:o==null?void 0:o.title,type:"title"})]})]})},E=B,c=h(79510),M={title:c.ZP.get("title"),currentWork:c.ZP.get("currentWork"),collaborateOn:c.ZP.get("collaborateOn"),helpWith:c.ZP.get("helpWith"),currentLearn:c.ZP.get("currentLearn"),ama:c.ZP.get("ama"),contact:c.ZP.get("contact"),resume:c.ZP.get("resume"),funFact:c.ZP.get("funFact"),portfolio:c.ZP.get("portfolio"),blog:c.ZP.get("blog")},G={title:"",subtitle:c.ZP.get("subtitle"),currentWork:"",collaborateOn:"",helpWith:"",currentLearn:"",ama:"",contact:"",funFact:""},U={currentWork:"",collaborateOn:"",helpWith:"",portfolio:"",blog:"",resume:""},z=function(a){var e=a.data,r=a.handleDataChange;return(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsx)(x,{value:"SubTitle"}),(0,n.jsx)(j,{handleDataChange:r,value:e==null?void 0:e.subtitle,type:"subtitle"})]})},R=z,H=function(a){var e=a.value,r=a.type,o=a.handleLinkChange,u=a.placeholder;return(0,n.jsx)("div",{className:"w-1/3",children:(0,n.jsx)(P.Z,{value:e,onChange:function(d){return o(r,d.target.value)},className:"w-full",id:"standard-basic",label:"",variant:"standard",placeholder:u})})},K=H,X=function(a){var e=a.prefix,r=a.data,o=a.link,u=a.handleDataChange,i=a.handlePrefixChange,d=a.handleLinkChange,L=[{name:"currentWork",placeholderData:c.ZP.get("projectName"),placeholderLink:c.ZP.get("projectLink")},{name:"collaborateOn",placeholderData:c.ZP.get("projectName"),placeholderLink:c.ZP.get("projectLink")},{name:"helpWith",placeholderData:c.ZP.get("projectName"),placeholderLink:c.ZP.get("projectLink")},{name:"currentLearn",placeholderData:c.ZP.get("phLearn")},{name:"ama",placeholderData:c.ZP.get("phAma")},{name:"contact",placeholderData:"example@gmail.com"},{name:"portfolio",placeholderLink:c.ZP.get("phPortfolio")},{name:"blog",placeholderLink:c.ZP.get("phBlog")},{name:"resume",placeholderLink:c.ZP.get("phResume")},{name:"funFact",placeholderData:c.ZP.get("phFunFact")}];return(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsx)(x,{value:"Work"}),L.map(function(t,p){return(0,n.jsxs)("div",{className:"flex mb-3",children:[(0,n.jsx)(y,{handlePrefixChange:i,value:e[t==null?void 0:t.name],type:t==null?void 0:t.name}),(t==null?void 0:t.placeholderData)&&(0,n.jsx)(j,{handleDataChange:u,value:r[t==null?void 0:t.name],type:t==null?void 0:t.name,placeholder:t==null?void 0:t.placeholderData}),(t==null?void 0:t.placeholderLink)&&(0,n.jsx)(K,{handleLinkChange:d,value:o[t==null?void 0:t.name],type:t==null?void 0:t.name,placeholder:t==null?void 0:t.placeholderLink})]},p)})]})},J=X;function Q(l,a,e){return` 
`.concat(l.title&&a.title&&'<h1 align="center">'.concat(l.title).concat(a.title,"</h1>"),`
`).concat(a.subtitle&&'<h3 align="center">'.concat(a.subtitle,"</h3>"),`
<!--<p align="left"> <img src="https://komarev.com/ghpvc/?username=imyuanli&label=Profile%20views&color=0e75b6&style=flat" alt="imyuanli" /> </p>-->
<!--<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=imyuanli" alt="imyuanli" /></a> </p>-->

`).concat(l.currentWork&&a.currentWork&&e.currentWork&&"- ".concat(l.currentWork," **[").concat(a.currentWork,"](").concat(e.currentWork,")**"),`
`).concat(l.collaborateOn&&a.collaborateOn&&e.collaborateOn&&"- ".concat(l.collaborateOn," **[").concat(a.collaborateOn,"](").concat(e.collaborateOn,")**"),`
`).concat(l.helpWith&&a.helpWith&&e.helpWith&&"- ".concat(l.helpWith," **[").concat(a.helpWith,"](").concat(e.helpWith,")**"),`
`).concat(l.currentLearn&&a.currentLearn&&"- ".concat(l.currentLearn," **").concat(a.currentLearn,"**"),`
`).concat(l.ama&&a.ama&&"- ".concat(l.ama," **").concat(a.ama,"**"),`
`).concat(l.contact&&a.contact&&"- ".concat(l.contact," **").concat(a.contact,"**"),`
`).concat(l.portfolio&&e.portfolio&&"- ".concat(l.portfolio," **[").concat(e.portfolio,"](").concat(e.portfolio,")**"),`
`).concat(l.blog&&e.blog&&"- ".concat(l.blog," **[").concat(e.blog,"](").concat(e.blog,")**"),`
`).concat(l.resume&&e.resume&&"- ".concat(l.resume," **[").concat(e.resume,"](").concat(e.resume,")**"),`
`).concat(l.funFact&&a.funFact&&"- ".concat(l.funFact," **").concat(a.funFact,"**"),`
`)}function V(){var l=(0,g.useState)(M),a=v()(l,2),e=a[0],r=a[1],o=(0,g.useState)(G),u=v()(o,2),i=u[0],d=u[1],L=(0,g.useState)(U),t=v()(L,2),p=t[0],Y=t[1],$=(0,g.useState)(!1),W=v()($,2),q=W[0],S=W[1],_=(0,g.useState)(!1),N=v()(_,2),aa=N[0],ea=N[1],F=function(m,f){var s=b()({},e);s[m]=f,r(s)},D=function(m,f){var s=b()({},i);s[m]=f,d(s)},na=function(m,f){var s=b()({},p);s[m]=f,Y(s)},ta=function(){S(!0),ea(Q(e,i,p))};return(0,n.jsx)("div",{className:"p-6",children:q?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"whitespace-pre-wrap w-full flex justify-center items-center border-2 bg-blue-50 p-6",children:aa}),(0,n.jsx)("div",{className:"w-full flex justify-center items-center mt-3",children:(0,n.jsx)(k.Z,{size:"large",onClick:function(){S(!1)},variant:"contained",children:c.ZP.get("btnBack")})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E,{prefix:e,data:i,handleDataChange:D,handlePrefixChange:F}),(0,n.jsx)(R,{data:i,handleDataChange:D}),(0,n.jsx)(J,{prefix:e,data:i,link:p,handleDataChange:D,handlePrefixChange:F,handleLinkChange:na}),(0,n.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,n.jsx)(k.Z,{onClick:ta,size:"large",variant:"contained",children:c.ZP.get("btnGen")})})]})})}},12482:function(){}}]);