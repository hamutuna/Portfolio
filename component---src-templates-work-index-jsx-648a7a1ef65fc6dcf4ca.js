(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(140),r=n(145),c=n.n(r),l=n(144),s=n(142),p=a.c.div.withConfig({displayName:"work__FirstView",componentId:"vub12w-0"})(["height:calc(100vh - "," - ",");width:100vw;background-color:lightgray;"],s.b,s.d),d=Object(a.c)(c.a).attrs({style:{width:"100vw",height:"calc(100vh - "+s.b+" - "+s.d+")"}}).withConfig({displayName:"work__FirstViewImage",componentId:"vub12w-1"})([""]),m=a.c.section.withConfig({displayName:"work__Article",componentId:"vub12w-2"})(["",";align-items:flex-start;padding:0 28px;"],l.a),u=a.c.h1.withConfig({displayName:"work__Title",componentId:"vub12w-3"})(["font-size:28px;margin-top:28px;"]),h=a.c.h2.withConfig({displayName:"work__Position",componentId:"vub12w-4"})(["font-size:16px;margin-top:24px;font-weight:bold;"]),g=a.c.h2.withConfig({displayName:"work__PositionAndDate",componentId:"vub12w-5"})(["font-size:14px;margin-top:8px;font-weight:normal;"]),f=(Object(a.c)(c.a).attrs({style:{width:"100vw",height:"800px"}}).withConfig({displayName:"work__DocImage",componentId:"vub12w-6"})([""]),n(149)),w=n(141),y=a.c.p.withConfig({displayName:"Description__Text",componentId:"sc-13ye3ma-0"})(["font-size:14px;margin-top:16px;"]),x=function(e){var t=e.text;return i.a.createElement(y,{dangerouslySetInnerHTML:{__html:t}})},b=a.c.div.withConfig({displayName:"GoodPoints__AnchorPoint",componentId:"sc-1uf6p9w-0"})(["margin-top:60px;"]),v=a.c.section.withConfig({displayName:"GoodPoints__Section",componentId:"sc-1uf6p9w-1"})(["margin-top:8px;"]),I=a.c.h2.withConfig({displayName:"GoodPoints__GoodPointsTitle",componentId:"sc-1uf6p9w-2"})(["font-size:16px;font-weight:bold;"]),_=a.c.h3.withConfig({displayName:"GoodPoints__Title",componentId:"sc-1uf6p9w-3"})(["font-size:14px;font-weight:bold;"]),E=a.c.p.withConfig({displayName:"GoodPoints__Description",componentId:"sc-1uf6p9w-4"})(["font-size:14px;margin-top:8px;"]),C=function(e){var t=e.goodPoints;return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{id:w.a.goodPoints}),i.a.createElement(I,null,"工夫点"),t.map(function(e,t){return i.a.createElement(v,{key:e.id,index:t},i.a.createElement(_,null,"♦︎",e.title),i.a.createElement(E,null,e.description))}))},k=a.c.div.withConfig({displayName:"Images__AnchorPoint",componentId:"sc-1kdater-0"})(["margin-top:60px;"]),N=Object(a.c)(c.a).attrs({style:{width:"100%",height:"180px"}}).withConfig({displayName:"Images__Image",componentId:"sc-1kdater-1"})(["margin-top:",";border-radius:8px;"],function(e){return 0===e.index?0:"16px"}),S=function(e){var t=e.images;return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{id:w.a.documents}),t.map(function(e,t){return i.a.createElement(N,{resolutions:e.resolutions,alt:"image"+t,key:e.resolutions.src,index:t})}))},z=a.c.section.withConfig({displayName:"Members__Section",componentId:"ypidva-0"})(["margin-top:60px;width:100%;"]),P=a.c.div.withConfig({displayName:"Members__HorizontalLine",componentId:"ypidva-1"})(["",""],l.b),j=a.c.h2.withConfig({displayName:"Members__Title",componentId:"ypidva-2"})(["font-size:12px;font-weight:normal;margin-top:24px;"]),T=a.c.p.withConfig({displayName:"Members__Description",componentId:"ypidva-3"})(["font-size:12px;margin-top:8px;"]),H=function(e){var t=e.text;return i.a.createElement(z,null,i.a.createElement(P,null),i.a.createElement(j,{id:w.a.members},"Project member"),i.a.createElement(T,{dangerouslySetInnerHTML:{__html:t}}))};n.d(t,"query",function(){return L});t.default=function(e){var t=e.pageContext,n=e.data,i=t.work,a=i.title,r=i.position,c=i.positionAndDate,l=i.description,s=i.goodPoints,y=i.members,b=n.pageTopImage,v=n.hamburgerImage,I=n.closeImage,_=n.logoImage,E=n.firstViewImage,k=n.projectImages;return o.createElement(f.a,{pageTopImage:b,hamburgerImage:v,closeImage:I,logoImage:_},o.createElement(p,{id:w.a.firstView},o.createElement(d,{resolutions:E.resolutions})),o.createElement(m,null,o.createElement(u,{id:w.a.title},a),o.createElement(h,null,r),o.createElement(g,null,c),o.createElement(x,{text:l}),o.createElement(C,{goodPoints:s}),o.createElement(S,{images:k.edges.map(function(e){return e.node})}),o.createElement(H,{text:y})))};var L="512380938"},141:function(e,t,n){"use strict";var o=n(0),i=n(140),a=(n(145),n(144),n(142),i.c.button.withConfig({displayName:"NaviItem__Item",componentId:"sc-1sbr0j1-0"})(["font-size:16px;cursor:pointer;padding:12px;min-width:112px;text-align:left;font-weight:normal;"]));n.d(t,"a",function(){return r});var r={firstView:"firstView",profile:"profile",skills:"skills",workflows:"workflows",works:"works",position:"position",detail:"detail",documents:"documents",members:"members",goodPoints:"goodPoints",title:"title"};t.b=function(e){var t=e.children,n=e.targetId,i=e.className;return o.createElement("li",{className:i},o.createElement(a,{href:"#",onClick:function(){var e=document.querySelector("#"+n);e&&e.scrollIntoView({behavior:"smooth"})}},t))}},142:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return r});n(33);var o="64px",i="64px",a={black:"#212121",firstViewBg:"rgba(37, 34, 190, 0.2)"},r=function(e,t){var n=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,o){return t+t+n+n+o+o});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(e);return"rgba("+n.r+", "+n.g+", "+n.b+", "+t+")"}},144:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return c});var o=n(140),i=n(142),a=Object(o.b)(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]),r=Object(o.b)(["display:flex;flex-direction:row;justify-content:center;align-items:center;"]),c=function(){return Object(o.b)(["background-image:linear-gradient( to left,"," ","%,transparent ","%,transparent 100% );background-size:","px ","px;height:1px;width:100%;"],i.a.black,4/12*100,4/12*100,12,12)}},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return u});var o=n(0),i=n.n(o),a=n(4),r=n.n(a),c=n(143),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(147),p=n.n(s);n.d(t,"PageRenderer",function(){return p.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=i.a.createContext({}),u=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},147:function(e,t,n){var o;e.exports=(o=n(148))&&o.default||o},148:function(e,t,n){"use strict";n.r(t);n(32);var o=n(0),i=n.n(o),a=n(4),r=n.n(a),c=n(54),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=s},149:function(e,t,n){"use strict";var o=n(7),i=n.n(o),a=n(0),r=n.n(a),c=n(152),l=n.n(c),s=n(146),p=n(140),d=n(145),m=n.n(d),u=n(144),h=n(142),g=n(141),f=p.c.header.withConfig({displayName:"Header",componentId:"h9h6y3-0"})(["",";top:0;justify-content:space-between;width:100%;height:",";position:fixed;z-index:1;pointer-events:",";background-color:",";transition:background-color 0.25s ease-out;"],u.c,function(e){return e.isShow,"100vh"},function(e){return e.isShow?"all":"none"},function(e){return e.isShow?Object(h.c)(h.a.black,.1):"transparent"}),w=p.c.nav.withConfig({displayName:"Header__Navi",componentId:"h9h6y3-1"})([""," position:relative;height:100%;width:100%;max-width:100vw;justify-content:flex-end;overflow:hidden;pointer-events:none;"],u.c),y=p.c.ol.withConfig({displayName:"Header__NaviItemList",componentId:"h9h6y3-2"})([""," align-items:flex-start;justify-content:flex-start;padding-top:48px;padding-left:32px;box-sizing:border-box;transform:",";background-color:#fff;width:256px;height:100vh;position:absolute;top:0;right:0;transition:transform 0.25s ease-out;pointer-events:all;"],u.a,function(e){return e.isShow?"translateX(0)":"translateX(256px)"}),x=Object(p.c)(g.b).withConfig({displayName:"Header__NaviItem",componentId:"h9h6y3-3"})(["font-size:16px;margin-top:40px;"]),b=p.c.li.withConfig({displayName:"Header__NaviItemFooter",componentId:"h9h6y3-4"})(["margin-top:auto;width:100%;"]),v=p.c.div.withConfig({displayName:"Header__HorizontalLine",componentId:"h9h6y3-5"})([""," width:calc(100% - 26px);"],u.b),I=Object(p.c)(s.Link).withConfig({displayName:"Header__FooterLink",componentId:"h9h6y3-6"})(["margin:28px 0;display:block;"]),_=p.c.button.withConfig({displayName:"Header__FooterButton",componentId:"h9h6y3-7"})(["color:",";padding:12px;font-size:16px;width:112px;text-align:left;"],h.a.black),E=p.c.button.withConfig({displayName:"Header__HamburgerWrapper",componentId:"h9h6y3-8"})(["width:",";height:",";padding:0;align-self:flex-start;top:28px;right:28px;position:absolute;z-index:1;pointer-events:all;cursor:pointer;"],"32px","32px"),C=Object(p.c)(m.a).attrs({style:{width:"32px",height:"32px"}}).withConfig({displayName:"Header__HamburgerImage",componentId:"h9h6y3-9"})(["opacity:",";transition:opacity 0.25s ease-out;"],function(e){return e.isShow?0:1}),k=Object(p.c)(m.a).attrs({style:{width:"32px",height:"32px"}}).withConfig({displayName:"Header__CloseImage",componentId:"h9h6y3-10"})(["opacity:",";transition:opacity 0.25s ease-out;"],function(e){return e.isShow?1:0}),N=p.c.button.withConfig({displayName:"Header__LogoWrapper",componentId:"h9h6y3-11"})(["width:",";height:",";top:28px;left:28px;position:absolute;z-index:1;pointer-events:",";cursor:pointer;"],"60px","60px",function(e){return e.isShow?"all":"none"}),S=Object(p.c)(m.a).attrs({style:{width:"60px",height:"60px"}}).withConfig({displayName:"Header__LogoImage",componentId:"h9h6y3-12"})(["opacity:",";transition:opacity 0.25s ease-out;"],function(e){return e.isShow?1:0}),z=(n(32),n(73),n(74),[{id:g.a.title,text:"Title"},{id:g.a.goodPoints,text:"Ideas"},{id:g.a.documents,text:"Images"},{id:g.a.members,text:"Members"}]),P=[{id:g.a.workflows,text:"Workflow"},{id:g.a.works,text:"Works"},{id:g.a.profile,text:"About"}],j=function(e){return function(t){function n(){var e;return(e=t.call(this)||this).state={location:""},e}i()(n,t);var o=n.prototype;return o.componentDidMount=function(){this.setState({location:window.location.href})},o.render=function(){var t=this.state.location.includes("/works/")?z:P;return a.createElement(e,Object.assign({},this.props,{items:t}))},n}(a.Component)},T=j(function(e){function t(){var t;return(t=e.call(this)||this).state={isShow:!1},t}i()(t,e);var n=t.prototype;return n.toggleIsShowState=function(){var e=!this.state.isShow;e?document.body.classList.add("hamburger-opened"):document.body.classList.remove("hamburger-opened"),this.setState({isShow:e})},n.render=function(){var e=this,t=this.props,n=t.items,o=t.hamburgerImage,i=t.closeImage,a=t.logoImage,c=this.state.isShow;return r.a.createElement(f,{isShow:c,onClick:function(){c&&e.toggleIsShowState.bind(e)()}},r.a.createElement(w,{onClick:function(e){e.stopPropagation()}},r.a.createElement(E,{isShow:c,href:"#",onClick:this.toggleIsShowState.bind(this)},r.a.createElement(C,{resolutions:o.resolutions,isShow:c})),r.a.createElement(E,{isShow:c,href:"#",onClick:this.toggleIsShowState.bind(this)},r.a.createElement(k,{resolutions:i.resolutions,isShow:c})),r.a.createElement(y,{isShow:c},n.map(function(e){return r.a.createElement(x,{targetId:e.id,key:e.id},e.text)}),r.a.createElement(b,null,r.a.createElement(v,null),r.a.createElement(I,{to:"/"},r.a.createElement(_,null,"Top")))),r.a.createElement(N,{isShow:c},r.a.createElement(s.Link,{to:"/",onClick:function(){c&&e.toggleIsShowState.bind(e)()}},r.a.createElement(S,{resolutions:a.resolutions,isShow:c})))))},t}(r.a.Component)),H=(n(153),p.c.footer.withConfig({displayName:"Footer",componentId:"sc-1y74zml-0"})([""," width:100%;margin-top:32px;"],u.a)),L=p.c.button.withConfig({displayName:"Footer__PageTop",componentId:"sc-1y74zml-1"})([""," cursor:pointer;"],u.a),O=Object(p.c)(m.a).attrs({style:{width:"66px",height:"27px"}}).withConfig({displayName:"Footer__PageTopImage",componentId:"sc-1y74zml-2"})([""]),F=p.c.p.withConfig({displayName:"Footer__PageTopText",componentId:"sc-1y74zml-3"})(["color:#c4c4c4;font-size:12px;margin-top:4px;"]),q=p.c.small.withConfig({displayName:"Footer__Copy",componentId:"sc-1y74zml-4"})(["margin-top:32px;font-size:12px;align-self:flex-end;margin-right:28px;margin-bottom:28px;"]),V=j(function(e){var t=e.pageTopImage;return r.a.createElement(H,null,r.a.createElement("nav",null,r.a.createElement(L,{href:"#",onClick:function(){var e=document.querySelector("#"+g.a.firstView);e&&e.scrollIntoView({behavior:"smooth"})}},r.a.createElement(O,{resolutions:t.resolutions}),r.a.createElement(F,null,"PAGE TOP"))),r.a.createElement(q,null,"©tuna All rights reserved."))}),G=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"68",height:"108",viewBox:"0 0 68 108",style:{display:"none"}},r.a.createElement("svg",{width:"48",height:"54",id:"jumpToTop",y:"0"},r.a.createElement("use",{xlinkHref:"#jumpToTop-path0_fill"}),r.a.createElement("defs",null,r.a.createElement("path",{id:"jumpToTop-path0_fill",fillRule:"evenodd",fill:"currentColor",d:"M0 6V0h48v6H0zm21 18h-9l12-12 12 12h-9v30h-6V24z"}))),r.a.createElement("svg",{width:"68",height:"54",id:"mail",y:"0"},r.a.createElement("use",{xlinkHref:"#mail-path0_fill",transform:"translate(.67 .33)"}),r.a.createElement("defs",null,r.a.createElement("path",{id:"mail-path0_fill",fillRule:"evenodd",fill:"currentColor",d:"M6.667 0H60c3.667 0 6.667 3 6.667 6.667v40c0 3.666-3 6.666-6.667 6.666H6.667C3 53.333 0 50.333 0 46.667l.033-40C.033 3 3 0 6.667 0zm26.666 30L60 13.334V6.667L33.334 23.333 6.666 6.668v6.667L33.333 30z"}))))},M=n(154),A=n.n(M);function D(){var e=A()(["\n  body {\n    font-family: 'Noto Sans JP', sans-serif;\n    margin: 0;\n    color: ",";\n  }\n\n  body.hamburger-opened {\n    height: 100vh;\n    max-height: 100vh;\n    overflow: hidden;\n  }\n\n  ul, ol {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style: none;\n  }\n\n  button {\n    appearance: none;\n    background: none;\n    border: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  p, h1, h2, h3 {\n    margin: 0;\n    padding: 0;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"]);return D=function(){return e},e}var R=Object(p.a)(D(),h.a.black);n.d(t,"a",function(){return W});var W=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){l.a.polyfill()},n.render=function(){var e=this.props,t=e.children,n=e.pageTopImage,o=e.hamburgerImage,i=e.closeImage,r=e.logoImage;return a.createElement(a.Fragment,null,a.createElement(R,null),a.createElement(G,null),a.createElement(T,{hamburgerImage:o,closeImage:i,logoImage:r}),a.createElement("main",null,t),a.createElement(V,{pageTopImage:n}))},t}(a.Component)}}]);
//# sourceMappingURL=component---src-templates-work-index-jsx-648a7a1ef65fc6dcf4ca.js.map