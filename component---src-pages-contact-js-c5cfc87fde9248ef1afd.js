(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(147),l=a.n(i),c=a(158),o=a(156);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,{title:"Projects",keywords:["gatsby","application","react"]}),r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"I'm a very laid back fella, I respond quickly but don't bother contacting me on weekends."),r.a.createElement("div",{className:l.a.content},r.a.createElement("div",{className:l.a.leftPane},r.a.createElement("h3",null,"Leave a Message"),r.a.createElement("form",null,r.a.createElement("div",{className:l.a.user},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Name"})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Organization"}))),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Subject"})),r.a.createElement("div",null,r.a.createElement("textarea",{placeholder:"Your Message"})),r.a.createElement("button",{type:"submit"},"Send"))),r.a.createElement("div",{className:l.a.rightPane},r.a.createElement("h3",null,"Social Links"))))}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(32),o=a.n(c);a.d(t,"a",function(){return o.a});a(153);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},153:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Eman"}}}}},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(54),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(159),s=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title,o=n.data.site,u=t||o.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Eman",description:"Full-Stack Software Developer with experience in React/Node. Based in Kampala, Uganda.",author:"Emmanuel-Melon"}}}}},158:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(152),s=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"white",marginBottom:"1.45rem",borderBottom:"solid 0.1em #333",boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1024,padding:"1.1rem",display:"flex",justifyContent:"space-between"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.a,{to:"/",style:{color:"#333",textDecoration:"underline"}},t)),i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement(o.a,{to:"/projects/"},"👨🏾‍💻 Projects"),i.a.createElement(o.a,{to:"/contact/"},"📞 Contact"),i.a.createElement(o.a,{to:"/about/"},"🤓 About"),i.a.createElement(o.a,{to:"/projects/"},"Resume"))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var u=s,d=(a(142),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,paddingTop:0}},i.a.createElement("main",null,t)))},data:n})});d.propTypes={children:c.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-contact-js-c5cfc87fde9248ef1afd.js.map