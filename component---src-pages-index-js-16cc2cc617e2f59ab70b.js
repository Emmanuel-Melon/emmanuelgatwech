(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=n.createContext&&n.createContext(l),o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&(a[n[l]]=e[n[l]])}return a};function c(e){return function(t){return n.createElement(m,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return n.createElement(t.tag,o({key:a},t.attr),e(t.child))}))}(e.child))}}function m(e){var t=function(t){var a,l=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var r=e.attr,c=e.title,m=i(e,["attr","title"]);return n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,m,{className:a,style:o({color:e.color||t.color},t.style,e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==r?n.createElement(r.Consumer,null,(function(e){return t(e)})):t(l)}},RXBc:function(e,t,a){"use strict";a.r(t);var n,l,r,o,i=a("q1tI"),c=a.n(i),m=a("Bl7J"),s=a("vrFN"),u=a("Tgqd"),d=a("UDOl"),p=function(e){var t=e.summary,a=e.name;return c.a.createElement("div",{className:"demo"},c.a.createElement("h4",null,a," ",c.a.createElement(u.a,null)),c.a.createElement("p",null,t))},f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Portfolio"),c.a.createElement("div",null,d.projects.slice(0,2).map((function(e){return c.a.createElement(p,e)}))),c.a.createElement("div",{className:"more"},c.a.createElement("a",null,"View More ",c.a.createElement(u.a,null)," ")))},h=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Articles"),c.a.createElement("div",null,d.articles.slice(0,2).map((function(e){return c.a.createElement(p,e)}))),c.a.createElement("div",{className:"more"},c.a.createElement("a",null,"View More ",c.a.createElement(u.a,null)," ")))},E=a("MUpH"),g=a("vOnD"),b=g.a.ul(n||(n=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  margin: 1rem auto;\n  & li {\n    padding: 0.5rem;\n    color: #fff !important;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"]))),v=function(){return c.a.createElement(b,null,c.a.createElement("li",null,c.a.createElement("a",{href:"https://twitter.com/junubiman",target:"_blank"}," ",c.a.createElement(u.l,null)," Twitter ",c.a.createElement(u.a,null))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/Emmanuel-Melon",target:"_blank"},c.a.createElement(u.g,null)," Github ",c.a.createElement(u.a,null))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/Emmanuel-Melon",target:"_blank"},c.a.createElement(u.j,null)," LinkedIn ",c.a.createElement(u.a,null))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/Emmanuel-Melon",target:"_blank"},c.a.createElement(u.e,null)," Resume ",c.a.createElement(u.a,null))))},y=a("ckOl"),w=function(){return c.a.createElement(x,null,d.work.map((function(e){return c.a.createElement(k,Object.assign({},e,{key:e.id}))})))},A=function(){return c.a.createElement(x,null,d.education.map((function(e){return c.a.createElement(j,Object.assign({},e,{key:e.id}))})))},k=function(e){var t=e.name,a=e.url,n=e.start,l=e.finish,r=e.title;e.location,e.id;return c.a.createElement(F,null,c.a.createElement("li",{className:"org-head"},c.a.createElement("div",null,c.a.createElement(y.a,null,c.a.createElement(u.c,null))," ",c.a.createElement("a",{href:a},r," - ",t," ",c.a.createElement(u.a,null))),c.a.createElement("p",{className:"duration"},n," - ",l)))},j=function(e){var t=e.name,a=e.url,n=e.start,l=e.finish,r=e.title;e.location,e.id;return c.a.createElement(F,null,c.a.createElement("li",{className:"org-head"},c.a.createElement("div",null,c.a.createElement(y.a,null,c.a.createElement(u.b,null))," ",c.a.createElement("a",{href:a},r," - ",t," ",c.a.createElement(u.a,null))),c.a.createElement("p",{className:"duration"},n," - ",l)))},F=g.a.div(l||(l=Object(E.a)(["\n  margin-top: 1rem;\n  & li {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: solid 0.15rem #FAFAFA;\n    border-top: solid 0.15rem #FAFAFA;\n  }\n  & p {    \n    border-radius: var(--border-radius);\n    color: var(--accent-color);\n  }\n"]))),x=g.a.ul(r||(r=Object(E.a)(["\n  justify-content: sapce-between;\n  display: flex;\n  flex-direction: column-reverse;\n"]))),S=g.a.ul(o||(o=Object(E.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  & li {\n    border-bottom: solid 0.15rem #FAFAFA;\n    border-top: solid 0.15rem #FAFAFA;\n  }\n"]))),O=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(S,null,c.a.createElement("li",null,c.a.createElement("a",{href:"https://gitstart.com",target:"_blank"},c.a.createElement(y.a,null,c.a.createElement(u.c,null)),"Full-Stack Engineer - GitStart ",c.a.createElement(u.a,null))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://mentors.codingcoach.io/?name=Emmanuel+Gatwech",target:"_blank"},c.a.createElement(y.a,null,c.a.createElement(u.b,null)),"Mentor - Coding Coach ",c.a.createElement(u.a,null))),c.a.createElement("li",null,c.a.createElement(y.a,null,c.a.createElement(u.i,null))," Founder - Biti ",c.a.createElement(u.a,null)),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/Emmanue-Melon",target:"_blank"},c.a.createElement(y.a,null,c.a.createElement(u.f,null))," Open Source Contributor ",c.a.createElement(u.a,null))),c.a.createElement("li",null,c.a.createElement(y.a,null,c.a.createElement(u.k,null)),"Technical Content Writer"),c.a.createElement("li",null,c.a.createElement(y.a,null,c.a.createElement(u.d,null)),"Amatuer Chef - Home!"),c.a.createElement("li",null,c.a.createElement(y.a,null,c.a.createElement(u.h,null)),"HipHop Lover")))},M=a("ZXdF");a("c1P/"),t.default=function(){return c.a.createElement(m.a,null,c.a.createElement(s.a,{title:"Home",keywords:["Emmanuel Daniel","Emmanuel Gatwech","react","Node.js","Eman","Junubiman","South Sudan","Juba","Software Engineer"]}),c.a.createElement("section",null,c.a.createElement("h1",null,"E-man"),c.a.createElement("h2",{style:{textAlign:"center"}},"And the E is for Energy"),c.a.createElement("p",{style:{textAlign:"center",width:"60%",margin:"0 auto"}}," I am a Full-Stack Software Developer with nearly 3 years of relevant experience and a proven track record of success in achieving extraordinary results."),c.a.createElement(O,null),c.a.createElement("div",{className:"mentor"},c.a.createElement("p",null,"I am available for mentoring on Coding Coach ",c.a.createElement(u.a,null)," "),c.a.createElement(M.a,null,"Message Me")),c.a.createElement(v,null)),c.a.createElement("section",null,c.a.createElement("h1",null,"Background"),c.a.createElement("p",{style:{textAlign:"center"}},"I wrote my first line of code on the 12th of September 2015, in the C language!"),c.a.createElement("div",{style:{display:"flex",width:"fit-content",margin:"0 auto"}},c.a.createElement("div",{style:{flex:"2",marginLeft:"1rem"}},c.a.createElement("h3",{style:{textAlign:"center"}},"Work Experience"),c.a.createElement(w,null),c.a.createElement("div",{style:{display:"flex",alignItems:"center"}}))),c.a.createElement("div",{style:{display:"flex",width:"fit-content",margin:"0 auto"}},c.a.createElement("div",{style:{flex:"2",marginLeft:"1rem"}},c.a.createElement("h3",{style:{textAlign:"center"}},"Education"),c.a.createElement(A,null),c.a.createElement("div",{style:{display:"flex",alignItems:"center"}})))),c.a.createElement("section",null,c.a.createElement(f,null)),c.a.createElement("section",null,c.a.createElement(h,null)))}},UDOl:function(e){e.exports=JSON.parse('{"articles":[{"category":"professional","demoAvailable":true,"sourceAvailable":false,"id":1,"name":"Understanding Git","summary":"This article will help you gain a practical understanding of Git\'s most commonly used features. Having a solid grasp of these concepts will help you avoid common mistakes and also use Git more efficiently."},{"category":"professional","demoAvailable":true,"sourceAvailable":false,"id":2,"name":"MongoDB Aggregation Framework","summary":"Aggregations operations process data records and return computed results. Aggregation operations group values from multiple documents together and can perform a variety of operations on the grouped data to return a single result. In SQL count(*) and with the group by is an equivalent of MongoDB aggregation."}],"education":[{"id":1,"name":"OpenClassrooms","url":"https://yonja.io","start":"December 2019","finish":"February 2020","title":"Web Development","location":"Paris, France - Remote"},{"id":2,"name":"Harare Institute of Technology","url":"https://yonja.io","start":"August 2015","finish":"August 2017","title":"Computer Science","location":"Harare, Zimbabwe"}],"projects":[{"category":"professional","demoAvailable":true,"sourceAvailable":false,"id":1,"name":"LabXpert","summary":"A medical laboratory information system for managing and disseminating COVID-19 and Tuberculosis tests in Uganda. The system is supported by a network of GeneXpert machines distributed across different facilities in the country.","skills":["Redis","TypeScript","MongoDB","TCP","Node.js","React.js"],"link":"","completed":true,"started":"November","code":"https://github.com/Emmanuel-Melon/la-revue","demo":"http://acham.life","image":true},{"category":"professional","demoAvailable":true,"sourceAvailable":false,"id":2,"name":"Test & Fly","summary":"Test & Fly was founded in 2020 as a state of the art laboratory specialized in PCR-SARS-Cov-2 diagnostic development. We perform advanced (PCR) diagnostic testing on behalf of other government and private clinical laboratories.","skills":["Redis","TypeScript","MongoDB","TCP","Node.js","React.js"],"link":"","completed":true,"started":"November","code":"https://github.com/Emmanuel-Melon/la-revue","demo":"http://acham.life","image":true},{"category":"professional","demoAvailable":true,"sourceAvailable":false,"id":3,"name":"Claudia Acham","summary":"A website for a Nairobi based South Sudanese Makeup Artist where she lists services, manage bookings and appointments and sells makeup kits.","skills":["Gatsby.js","Adobe XD","MongoDB","Styled-Components"],"link":"","completed":true,"started":"November","code":"https://github.com/Emmanuel-Melon/la-revue","demo":"http://acham.life","image":true},{"category":"personal","id":5,"name":"La Revue","summary":"A restaurant review website that allows you find and review restaurants in any city. The app allows you to search, filter, add reviews and look for meals.","skills":["Node.js","MongoDB","React.js","Google Maps API","Styled-Components"],"code":"https://github.com/Emmanuel-Melon/la-revue","demo":"https://morning-beach-13124.herokuapp.com/","completed":true,"demoAvailable":false,"sourceAvailable":true,"image":true},{"category":"personal","id":6,"name":"Shadows of Mordor","summary":"A JavaScript turn-based boardgame where players collect items from the board and then face each other when they land at adjacent cells.","skills":["jQuery","HTML","CSS"],"code":"https://github.com/Emmanuel-Melon/shadows_of_mordor","demo":"https://morning-beach-13124.herokuapp.com/","completed":true,"demoAvailable":false,"sourceAvailable":true,"image":true},{"category":"personal","id":7,"name":"Quotation Generator","summary":"Random quote generator which constructs quotes by assembling different pieces of a sentence.","skills":["JavaScript","Sass","HTML/CSS"],"code":"https://github.com/Emmanuel-Melon/Quote-Generator","demo":"https://emmanuel-melon.github.io/Quote-Generator/","completed":true,"demoAvailable":false,"sourceAvailable":true,"image":true}],"work":[{"id":1,"name":"Yonja","url":"https://yonja.io","start":"February 2019","finish":"October 2019","title":"Software Engineer","location":"Kampala, Uganda"},{"id":2,"name":"Freelance","url":"https://yonja.io","start":"October 2019","finish":"April 2020","title":"Software Engineer","location":"Kampala, Uganda"},{"id":3,"name":"FreelyFormd","url":"https://freelyformd.com","start":"June 2020","finish":"APril 2021","title":"Software Engineer","location":"Remote"}]}')},ZXdF:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n,l=a("MUpH"),r=a("q1tI"),o=a.n(r),i=a("vOnD").a.button(n||(n=Object(l.a)(["\n  border-left: none;\n  border-right: none;\n  color: var(--accent-color);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  border: solid 0.15rem var(--accent-color);\n  width: 120px;\n  background: var(--white);\n  padding: 0.4rem;\n  &:hover {\n    cursor: pointer;\n  }\n"]))),c=function(e){var t=e.children;return o.a.createElement(i,null,o.a.createElement(o.a.Fragment,null,t))}},"c1P/":function(e,t,a){e.exports=a.p+"static/mentor-060a773180d57ba4cd6053d3f4cdfbbb.png"},ckOl:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n,l=a("MUpH"),r=a("q1tI"),o=a.n(r),i=a("vOnD").a.span(n||(n=Object(l.a)(["\n  margin-right: 0.5rem;\n  padding: 0.5rem;\n  border-radius: 50%;\n  color: var(--accent-color);\n  box-shadow: var(--box-shadow);\n  border: solid 0.1rem #FAFAFA;\n"]))),c=function(e){var t=e.children;return o.a.createElement(i,null,t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-16cc2cc617e2f59ab70b.js.map