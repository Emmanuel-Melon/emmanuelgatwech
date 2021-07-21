(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"16l3":function(e,a,t){"use strict";t.r(a),t.d(a,"ProjectSummary",(function(){return f})),t.d(a,"ProjectList",(function(){return g}));var n,r,o,l,s=t("MUpH"),i=t("q1tI"),m=t.n(i),c=t("Bl7J"),u=t("vrFN"),d=t("vOnD"),p=t("Tgqd"),b=t("UDOl"),h=d.a.div(n||(n=Object(s.a)(["\n  margin-bottom: 1rem;\n  border-radius: 0.2rem;\n  -webkit-animation: fade-in-tl 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: fade-in-tl 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  display: flex;\n  padding: 1rem;\n  width: 100%;\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  background: rgba(14, 4, 5, 0.2);\n"]))),f=(d.a.h4(r||(r=Object(s.a)(["\nwidth: fit-content;\n"]))),d.a.div(o||(o=Object(s.a)(["\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n"]))),d.a.div(l||(l=Object(s.a)(["\n  padding: 1rem;\n"]))),function(e){var a=e.project;return m.a.createElement(h,null,m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement("h4",{className:"other-heading"},a.name," ",m.a.createElement(p.a,null)),m.a.createElement("p",null,a.summary)),m.a.createElement("div",null,m.a.createElement("div",null,a.demoAvailable?m.a.createElement("button",{href:a.demo,target:"_blank"},"View Project"):null,a.sourceAvailable?m.a.createElement("button",{href:a.code,target:"_blank"},"Source Code"):null))))}),g=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"main"},m.a.createElement("div",null,m.a.createElement("h1",{className:"heading"},"Projects"))),m.a.createElement("div",{className:"filtered"},m.a.createElement("div",{className:"filter"},m.a.createElement("ul",{className:"social"},m.a.createElement("li",null,m.a.createElement("a",{href:"https://github.com/Emmanuel-Melon",target:"_blank"},m.a.createElement(p.c,{className:"icon"})," Professional ",m.a.createElement(p.a,null))),m.a.createElement("li",null,m.a.createElement("a",{href:"https://twitter.com/junubiman",target:"_blank"}," ",m.a.createElement(p.h,{className:"icon"})," Open Source ",m.a.createElement(p.a,null))),m.a.createElement("li",null,m.a.createElement("a",{href:"https://github.com/Emmanuel-Melon",target:"_blank"},m.a.createElement(p.e,{className:"icon"})," Educational ",m.a.createElement(p.a,null))))),m.a.createElement("div",null,b.projects.map((function(e){return m.a.createElement(f,{project:e,key:e.id})})))))};a.default=function(){return m.a.createElement(c.a,null,m.a.createElement(u.a,{title:"Projects",keywords:["Emmanuel Daniel","Emmanuel Gatwech","react","Node.js","Eman","Junubiman","South Sudan","Juba","Software Engineer"]}))}},Lnxd:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(r),l=function(){return(l=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)},s=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&(t[n[r]]=e[n[r]])}return t};function i(e){return function(a){return n.createElement(m,l({attr:l({},e.attr)},a),function e(a){return a&&a.map((function(a,t){return n.createElement(a.tag,l({key:t},a.attr),e(a.child))}))}(e.child))}}function m(e){var a=function(a){var t,r=e.size||a.size||"1em";a.className&&(t=a.className),e.className&&(t=(t?t+" ":"")+e.className);var o=e.attr,i=e.title,m=s(e,["attr","title"]);return n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,o,m,{className:t,style:l({color:e.color||a.color},a.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return a(e)})):a(r)}},UDOl:function(e){e.exports=JSON.parse('{"projects":[{"category":"professional","demoAvailable":true,"sourceAvailable":false,"id":1,"name":"LabXpert","summary":"A medical laboratory information system for managing and disseminating COVID-19 and Tuberculosis tests in Uganda. The system is supported by a network of GeneXpert machines distributed across different facilities in the country.","skills":["Redis","TypeScript","MongoDB","TCP","Node.js","React.js"],"link":"","completed":true,"started":"November","code":"https://github.com/Emmanuel-Melon/la-revue","demo":"http://acham.life","image":true},{"category":"professional","demoAvailable":true,"sourceAvailable":false,"id":2,"name":"Test & Fly","summary":"Test & Fly was founded in 2020 as a state of the art laboratory specialized in PCR-SARS-Cov-2 diagnostic development. We perform advanced (PCR) diagnostic testing on behalf of other government and private clinical laboratories.","skills":["Redis","TypeScript","MongoDB","TCP","Node.js","React.js"],"link":"","completed":true,"started":"November","code":"https://github.com/Emmanuel-Melon/la-revue","demo":"http://acham.life","image":true},{"category":"professional","demoAvailable":true,"sourceAvailable":false,"id":3,"name":"Claudia Acham","summary":"A website for a Nairobi based South Sudanese Makeup Artist where she lists services, manage bookings and appointments and sells makeup kits.","skills":["Gatsby.js","Adobe XD","MongoDB","Styled-Components"],"link":"","completed":true,"started":"November","code":"https://github.com/Emmanuel-Melon/la-revue","demo":"http://acham.life","image":true},{"category":"professional","demoAvailable":true,"sourceAvailable":false,"id":4,"name":"Amare The Palace","summary":"A website for a Nairobi based South Sudanese Makeup Artist where she lists services, manage bookings and appointments and sells makeup kits.","skills":["Gatsby.js","Adobe XD","MongoDB","Styled-Components"],"link":"","completed":true,"started":"November","code":"https://github.com/Emmanuel-Melon/la-revue","demo":"http://acham.life","image":true},{"category":"personal","id":5,"name":"La Revue","summary":"A restaurant review website that allows you find and review restaurants in any city. The app allows you to search, filter, add reviews and look for meals.","skills":["Node.js","MongoDB","React.js","Google Maps API","Styled-Components"],"code":"https://github.com/Emmanuel-Melon/la-revue","demo":"https://morning-beach-13124.herokuapp.com/","completed":true,"demoAvailable":false,"sourceAvailable":true,"image":true},{"category":"personal","id":6,"name":"Shadows of Mordor","summary":"A JavaScript turn-based boardgame where players collect items from the board and then face each other when they land at adjacent cells.","skills":["jQuery","HTML","CSS"],"code":"https://github.com/Emmanuel-Melon/shadows_of_mordor","demo":"https://morning-beach-13124.herokuapp.com/","completed":true,"demoAvailable":false,"sourceAvailable":true,"image":true},{"category":"personal","id":7,"name":"Quotation Generator","summary":"Random quote generator which constructs quotes by assembling different pieces of a sentence.","skills":["JavaScript","Sass","HTML/CSS"],"code":"https://github.com/Emmanuel-Melon/Quote-Generator","demo":"https://emmanuel-melon.github.io/Quote-Generator/","completed":true,"demoAvailable":false,"sourceAvailable":true,"image":true},{"category":"personal","demoAvailable":true,"sourceAvailable":false,"id":8,"name":"Brooklyn Film Festival","summary":"A website for a Nairobi based South Sudanese Makeup Artist where she lists services, manage bookings and appointments and sells makeup kits.","skills":["Gatsby.js","Adobe XD","MongoDB","Styled-Components"],"link":"","completed":false,"started":"November","code":"https://github.com/Emmanuel-Melon/la-revue","demo":"http://acham.life","image":true},{"category":"personal","demoAvailable":true,"sourceAvailable":false,"id":9,"name":"DevC Kampala","summary":"A website for a Nairobi based South Sudanese Makeup Artist where she lists services, manage bookings and appointments and sells makeup kits.","skills":["Gatsby.js","Adobe XD","MongoDB","Styled-Components"],"link":"","completed":false,"started":"November","code":"https://github.com/Emmanuel-Melon/la-revue","demo":"http://acham.life","image":true}],"work":[{"id":1,"name":"Yonja","url":"https://yonja.io","start":"February 2019","finish":"October 2019","title":"Software Engineer","location":"Kampala, Uganda"},{"id":2,"name":"Freelance","url":"https://yonja.io","start":"October 2019","finish":"April 2020","title":"Software Engineer","location":"Kampala, Uganda"},{"id":3,"name":"FreelyFormd","url":"https://freelyformd.com","start":"June 2020","finish":"APril 2021","title":"Software Engineer","location":"Remote"}]}')}}]);
//# sourceMappingURL=component---src-pages-projects-js-f0eb2d143da603993475.js.map