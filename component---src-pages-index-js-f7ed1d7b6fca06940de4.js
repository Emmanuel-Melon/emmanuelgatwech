(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),o=a(158),l=a(156);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement("p",null,"Hi 🖐🏾, I'm"),r.a.createElement("h1",null,"Emmanuel Daniel"),r.a.createElement("p",null,"I'm a Full-Stack Software Developer with experience in React/Node."),r.a.createElement("p",null,"Ever since I wrote my first \"Hello World\" 5 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time."),r.a.createElement("button",null,r.a.createElement(i.a,{to:"/projects/"},"See My Work")))))}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(32),c=a.n(l);a.d(t,"a",function(){return c.a});a(153);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Eman"}}}}},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(159),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Eman",description:"Full-Stack Software Developer with experience in React/Node. Based in Kampala, Uganda.",author:"Emmanuel-Melon"}}}}},158:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(152),s=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"white",marginBottom:"1.45rem",borderBottom:"solid 0.1em #333",boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1024,padding:"1.1rem",display:"flex",justifyContent:"space-between"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"#333",textDecoration:"underline"}},t)),i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement(c.a,{to:"/projects/"},"👨🏾‍💻 Projects"),i.a.createElement(c.a,{to:"/contact/"},"📞 Contact"),i.a.createElement(c.a,{to:"/about/"},"🤓 About"),i.a.createElement(c.a,{to:"/projects/"},"Resume"))))};s.propTypes={siteTitle:l.a.string},s.defaultProps={siteTitle:""};var u=s,d=(a(142),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,paddingTop:0}},i.a.createElement("main",null,t)))},data:n})});d.propTypes={children:l.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-f7ed1d7b6fca06940de4.js.map