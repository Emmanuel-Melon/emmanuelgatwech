(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),o=a(150);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Projects",keywords:["gatsby","application","react"]}),r.a.createElement("p",null,"Hi 🖐🏾, I'm"),r.a.createElement("h1",null,"Emmanuel Daniel"),r.a.createElement("p",null,"I'm a Full-Stack Software Developer with experience in React/Node. ",r.a.createElement("br",null)," ","I enjoy building fast and highly scalable web applications."))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(32),c=a.n(l);a.d(t,"a",function(){return c.a});a(147);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Eman"}}}}},149:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(154),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Eman",description:"Full-Stack Software Developer with experience in React/Node. Based in Kampala, Uganda.",author:"Emmanuel-Melon"}}}}},152:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(146),s=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"white",marginBottom:"1.45rem",borderBottom:"solid 0.1em #333"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"#333",textDecoration:"underline"}},t))))};s.propTypes={siteTitle:l.a.string},s.defaultProps={siteTitle:""};var u=s,d=(a(153),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))},data:n})});d.propTypes={children:l.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-projects-js-c12a9672fff868d276c3.js.map