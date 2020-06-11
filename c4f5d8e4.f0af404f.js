(window.webpackJsonp=window.webpackJsonp||[]).push([[39,17],{170:function(e,t,a){"use strict";a.r(t),function(e){var n=a(0),r=a.n(n),i=a(189),l=a.n(i),s=a(193),o=a(190),c=a(184),u=a(185),m=a(309),d=a(126),g=a.n(d),h=(e.env.PUBLISH,[{title:r.a.createElement(r.a.Fragment,null,"What is QA-Board?"),imageUrl:"img/undraw/undraw_forming_ideas_0pav.svg",description:r.a.createElement(r.a.Fragment,null,"QA-Board helps Algorithms and QA engineers build great products. It offers powerful quality evaluation and collaboration tools.")},{title:r.a.createElement(r.a.Fragment,null,"What does it do?"),imageUrl:"img/undraw/undraw_ideation_2a64.svg",description:r.a.createElement(r.a.Fragment,null,"Compare results between commits. Create advanced visualizations from your existing output files. Track metrics across time. Start tuning experiments.")},{title:r.a.createElement(r.a.Fragment,null,"How do I use it?"),imageUrl:"img/undraw/undraw_factory_dy0a.svg",description:r.a.createElement(r.a.Fragment,null,"Run your code with a small CLI wrapper. You will see results from the web application.")}]);t.default=function(){var e=Object(c.a)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(s.a,{title:t.title,description:t.tagline},r.a.createElement("header",{className:l()("hero hero--primary",g.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:g.a.buttons},r.a.createElement(o.a,{className:l()("button button--secondary button--lg",g.a.getStarted),to:Object(u.a)("docs/introduction")},"Get Started"),r.a.createElement("span",{className:g.a.indexCtasGitHubButtonWrapper},r.a.createElement("iframe",{className:g.a.indexCtasGitHubButton,src:"https://ghbtns.com/github-btn.html?user=Samsung&repo=qaboard&type=star&count=true&size=large",width:160,height:30,title:"GitHub Stars"}))))),r.a.createElement("main",null,h&&h.length&&r.a.createElement("section",{className:g.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},h.map((function(e,t){var a=e.imageUrl,n=e.title,i=e.description;return r.a.createElement("div",{key:t,className:l()("col col--4",g.a.feature)},a&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:g.a.featureImage,src:Object(u.a)(a),alt:n})),r.a.createElement("h3",null,n),r.a.createElement("p",null,i))}))))),r.a.createElement("div",{className:"container"},r.a.createElement(m.a,{img:r.a.createElement("img",{src:Object(u.a)("img/slides/commit-list.jpg"),alt:"Annotations",loading:"lazy"}),title:"Organize & Share",text:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Triggered runs from the ",r.a.createElement("strong",null,"CI or locally"),", and see them ",r.a.createElement("strong",null,"all in one place"),"."),r.a.createElement("p",null,"QA-Board is aware of version control; you can filter by commit, branch, author, message..."))}),r.a.createElement(m.a,{img:r.a.createElement("img",{src:Object(u.a)("img/slides/always-compare.jpg"),alt:"Always Compare",loading:"lazy"}),title:"Always Compare",reversed:!0,text:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Whether you look at metrics or visualizations, QA-Board always compares each output to a reference version. You can ",r.a.createElement("a",{href:"https://samsung.github.io/qaboard/docs/references-and-milestones"},"save Milestones")," to benchmark new results."),r.a.createElement("p",null,"You can compare configurations and filter results however you like."))}),r.a.createElement(m.a,{img:r.a.createElement("img",{src:Object(u.a)("img/slides/aggregate.jpg"),alt:"Aggregation and rich KPIs",loading:"lazy"}),title:"Rich Metrics",text:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Real-world project need to look at heterogenuous KPIs: performance, quality, training time..."),r.a.createElement("p",null,"QA-Board lets you ",r.a.createElement("a",{href:"https://samsung.github.io/qaboard/docs/computing-quantitative-metrics"},"define as many metrics as needed"),", add metada (targets, label, units..), and can give you aggregated summaries as well as granular tables."))}),r.a.createElement(m.a,{img:r.a.createElement("img",{src:Object(u.a)("img/slides/show-files.jpg"),alt:"File-based Visualizations",loading:"lazy"}),title:"Output Visualizations",reversed:!0,text:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"With QA-Board, each run dumps files in an output folder. When comparing results, you see a diff of all the files. Files are displayed with a ",r.a.createElement("a",{href:"https://samsung.github.io/qaboard/docs/visualizations#available-file-viewers"},"wide range of viewers"),": ",r.a.createElement("strong",null,"first-party support for ",r.a.createElement("a",{href:"https://plotly.com/python/"},"plotly")),", text, images, synced videos, 3d pointclouds, raw HTML..."),r.a.createElement("p",null,"You can ",r.a.createElement("a",{href:"https://samsung.github.io/qaboard/docs/visualizations"},"declaratively create visualizations")," to show e.g. multiple images, debug data, sliders...."))}),r.a.createElement(m.a,{img:r.a.createElement("img",{src:Object(u.a)("img/slides/image-viewer.jpg"),alt:"Advanced Image Viewer",loading:"lazy"}),title:"Advanced Image Viewer",text:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"QA-Board notably supports a performance image viewer based on ",r.a.createElement("a",{href:"https://openseadragon.github.io/"},"OpenSeaDragon"),". At Samsung it lets use work smoothly with >100MP images."),r.a.createElement("p",null,'Advanced features include showing perceptual differences, automatically finding interesting (or defining ahead of time) "Regions of Interest", use histograms, color tooltips and image filters.'))}),r.a.createElement(m.a,{img:r.a.createElement("img",{src:Object(u.a)("img/slides/tuning.jpg"),alt:"Tuning & Optimization",loading:"lazy"}),title:"Tuning & Optimization",reversed:!0,text:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://samsung.github.io/qaboard/docs/batches-running-on-multiple-inputs"},"Define batches of inputs")," to run on files/databases that matter to you. Start tuning experiments to compare parameters or feature flags"),r.a.createElement("p",null,"Use Grid-Search or ",r.a.createElement("strong",null,"Black-box optimization")," (via ",r.a.createElement("a",{href:"https://scikit-optimize.github.io/"},"scikit-optimize"),"), and analyse trade-offs. Use ",r.a.createElement("a",{href:"https://github.com/Samsung/qaboard/wiki/Adding-new-runners"},"common tools")," for distributed runs."))}),r.a.createElement(m.a,{img:r.a.createElement("img",{src:Object(u.a)("img/slides/triggers.jpg"),alt:"Integrations",loading:"lazy"}),title:"Integrations",text:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"From QA-Board itsef you can link to your docs, or artifacts. You can also add buttons to ",r.a.createElement("a",{href:"https://samsung.github.io/qaboard/docs/triggering-third-party-tools"},"trigger 3rd party tools")," like Jenkins, GitlabCi, or webhooks. ",r.a.createElement("strong",null,"When runing during CI runs"),", QA-Board will update your CI tool with the run's status."))}),r.a.createElement(m.a,{img:r.a.createElement("img",{src:Object(u.a)("img/slides/regressions.jpg"),alt:"Regression Explorer",loading:"lazy"}),title:"Regression Explorer",reversed:!0,text:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"If a regression occured, you can simply quickly investigate when it happened, and diff the change."),r.a.createElement("p",null,"More generally, QA-Board can be used for dashboard that show progress over time."))}),r.a.createElement(m.a,{title:"More features...",text:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Mono-repo support, Bit-accuracy checks, Input metadata...."))}))))}}.call(this,a(195))},194:function(e,t,a){"use strict";a(24),a(19),a(71),a(50),a(18);var n=a(0),r=a.n(n),i=a(189),l=a.n(i),s=a(191),o=a(184),c=!1;t.a=function(e){var t=Object(n.useRef)(!1),i=Object(n.useRef)(null),u=Object(s.b)(),m=Object(o.a)().siteConfig,d=(void 0===m?{}:m).baseUrl,g=function(){t.current||(new window.DocSearch({searchData:window.searchData,inputSelector:"#search_input_react",handleSelected:function(e,t,a){var n=d+a.url;document.createElement("a").href=n,u.push(n)}}),t.current=!0)},h=function(){c?g():Promise.all([fetch(d+"search-data.json").then((function(e){return e.json()})),Promise.all([a.e(51),a.e(53)]).then(a.bind(null,198)),a.e(37).then(a.t.bind(null,197,7))]).then((function(e){var t=e[0],a=e[1].default;c=!0,window.searchData=t,window.DocSearch=a,g()}))},p=Object(n.useCallback)((function(t){i.current.contains(t.target)||i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:h,onMouseOver:h,onFocus:p,onBlur:p,ref:i}))}},195:function(e,t){var a,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function s(e){if(a===setTimeout)return setTimeout(e,0);if((a===i||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:i}catch(e){a=i}try{n="function"==typeof clearTimeout?clearTimeout:l}catch(e){n=l}}();var o,c=[],u=!1,m=-1;function d(){u&&o&&(u=!1,o.length?c=o.concat(c):m=-1,c.length&&g())}function g(){if(!u){var e=s(d);u=!0;for(var t=c.length;t;){for(o=c,c=[];++m<t;)o&&o[m].run();m=-1,t=c.length}o=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===l||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];c.push(new h(e,t)),1!==c.length||u||s(g)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},309:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),i=a(189),l=a.n(i),s=a(171),o=a.n(s);function c(e){var t,a=e.reversed,n=e.title,i=e.img,s=e.text,c=r.a.createElement("div",{className:o.a.featureImage},i),u=r.a.createElement("div",{className:o.a.featureText},r.a.createElement("h3",{className:o.a.featureTitle},n),s);return r.a.createElement("div",{className:o.a.featureContainer},r.a.createElement("div",{className:l()("col col--12",o.a.featureContent,(t={},t[o.a.reversed]=!0===a,t))},a?r.a.createElement(r.a.Fragment,null,u,c):r.a.createElement(r.a.Fragment,null,c,u)))}}}]);