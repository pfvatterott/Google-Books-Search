(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{116:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(23),l=n.n(c),r=(n(51),n(13)),i=n(4),u=n(3);function s(){return o.a.createElement("div",null,o.a.createElement(u.Navbar,{className:"navbar",alignLinks:"right",id:"mobile-nav",menuIcon:o.a.createElement(u.Icon,null,"menu"),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0},sidenav:o.a.createElement("div",{className:"left-align"},o.a.createElement("ul",{class:"side-nav",id:"mobile-menu"},o.a.createElement("li",null,o.a.createElement(r.b,{to:"/"},"Search for Books")),o.a.createElement("li",null,o.a.createElement(r.b,{to:"/saved"},"Saved Books"))))},o.a.createElement(u.NavItem,null,o.a.createElement(r.b,{to:"/"},"Search for Books")),o.a.createElement(u.NavItem,null,o.a.createElement(r.b,{to:"/saved"},"Saved Books"))))}var A=n(26),m=n(16);function v(e){return o.a.createElement("section",{class:"section white"},e.children)}function w(e){return o.a.createElement("ul",{className:"collection"},e.children)}n(35),n(97);function f(e){return o.a.createElement("li",{class:"collection-item bookItem"},o.a.createElement("a",{href:e.book.volumeInfo.infoLink,target:"_blank"},o.a.createElement(u.Button,{className:"right",id:"viewButton"},"View")),o.a.createElement(u.Button,{className:"right",id:"saveButton",onClick:function(t){t.target.classList.add("disabled"),e.saveBook(e.book.volumeInfo)}},"Save"),o.a.createElement("h5",null,e.book.volumeInfo.title),o.a.createElement("p",{className:"writtenBy"},"Written by: "),o.a.createElement("p",null,(t=e.book.volumeInfo.authors,console.log(t),t?1===t.length?t:o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",null,e)}))):"None")),o.a.createElement("img",{src:e.book.volumeInfo.imageLinks.thumbnail,className:"left bookThumbnail"}),o.a.createElement("br",null),o.a.createElement("p",null,e.book.volumeInfo.description));var t}var E=n(15),g=n.n(E),k=function(){return g.a.get("/api/books")},I=function(e){return g.a.delete("/api/books/"+e)},b=function(e){return g.a.post("/api/books",e)};var h=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),r=Object(m.a)(l,2),i=(r[0],r[1],Object(a.useState)([])),s=Object(m.a)(i,2),E=s[0],k=s[1];function I(e,t){var n={authors:e.authors,description:e.description,image:e.imageLinks.thumbnail,link:e.infoLink,title:e.title};b(n).then(window.M.toast({html:"A new book titled '".concat(n.title,"' was saved!")}))}return o.a.createElement(v,null,o.a.createElement(u.Row,{className:"container"},o.a.createElement(u.Col,{s:12},o.a.createElement("h2",{className:"center-align"},"Search for Books"),o.a.createElement("br",null),o.a.createElement(u.TextInput,{icon:"search",placeholder:"Search for Book",onChange:function(e){var t=e.target,n=(t.name,t.value);k(Object(A.a)(Object(A.a)({},E),{},{search:n}))},s:12})),o.a.createElement(u.Col,{s:12},o.a.createElement(u.Button,{onClick:function(e){var t;e.preventDefault(),t=E.search,g.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(t,"&key=").concat("AIzaSyA3YInjAHayQeCJsguOiGtyPJB-MLm-K0k")).then((function(e){console.log(e),0===e.data.items.length?alert("No results!"):c(e.data.items)})).catch((function(e){return console.log(e)}))}},"Search"))),o.a.createElement(u.Row,{className:"container"},o.a.createElement(u.Col,{s:12},o.a.createElement(w,null,n.map((function(e){return o.a.createElement(f,{book:e,saveBook:I})}))))))};n(116);function d(e){return o.a.createElement("li",{class:"collection-item bookItem"},o.a.createElement("a",{href:e.bookData.link,target:"_blank"},o.a.createElement(u.Button,{className:"right",id:"viewButton"},"View")),o.a.createElement(u.Button,{className:"right",id:"deleteButton",onClick:function(){return e.deleteBook(e.bookData._id)}},"Delete"),o.a.createElement("h5",null,e.bookData.title),o.a.createElement("p",{className:"writtenBy"},"Written by: "),o.a.createElement("p",null,(t=e.bookData.authors,console.log(t),0===t.length?"None":1===t.length?t:o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",null,e)}))))),o.a.createElement("img",{src:e.bookData.image,className:"left bookThumbnail"}),o.a.createElement("br",null),o.a.createElement("p",null,e.bookData.description),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null));var t}var U=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1];function l(){k().then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}function r(e){I(e).then((function(e){return l()})).catch((function(e){return console.log(e)}))}return Object(a.useEffect)((function(){l()}),[]),o.a.createElement(v,null,o.a.createElement(u.Row,{className:"container"},o.a.createElement(u.Col,{s:12},o.a.createElement("h2",{className:"center-align"},"Your Saved Books"),o.a.createElement("br",null),o.a.createElement(w,null,n.map((function(e){return o.a.createElement(d,{bookData:e,deleteBook:r})}))))))};n(117),n(44);var p=function(){return o.a.createElement(r.a,null,o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement(i.a,{exact:!0,path:"/",component:h}),o.a.createElement(i.a,{exact:!0,path:"/saved",component:U})))},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(118),n(119);window.ioSocket.on("message",(function(e){window.M.toast({html:e})})),l.a.render(o.a.createElement(p,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");q?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):x(e)}))}}()},35:function(e,t){e.exports="data:image/png;base64,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"},46:function(e,t,n){e.exports=n(120)},51:function(e,t,n){},97:function(e,t,n){}},[[46,1,2]]]);
//# sourceMappingURL=main.8c868fe7.chunk.js.map