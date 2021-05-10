(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{112:function(e,t,n){e.exports=n(614)},162:function(e,t,n){},52:function(e,t){},609:function(e,t,n){},610:function(e,t,n){},614:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(53),r=n.n(l),c=n(24),i=n(7),s=n(5);function u(){return o.a.createElement("div",null,o.a.createElement(s.Navbar,{className:"navbar",alignLinks:"right",id:"mobile-nav",menuIcon:o.a.createElement(s.Icon,null,"menu"),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0},sidenav:o.a.createElement("div",{className:"left-align"},o.a.createElement("ul",{class:"side-nav",id:"mobile-menu"},o.a.createElement("li",null,o.a.createElement(c.b,{to:"/search"},"Search for Books")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"/saved"},"Saved Books"))))},o.a.createElement(s.NavItem,null,o.a.createElement(c.b,{to:"/search"},"Search for Books")),o.a.createElement(s.NavItem,null,o.a.createElement(c.b,{to:"/saved"},"Saved Books"))))}var m=n(56),E=n(33);function f(e){return o.a.createElement("section",{class:"section white"},e.children)}function h(e){return o.a.createElement("ul",{className:"collection"},e.children)}n(162);function d(e){return o.a.createElement("li",{class:"collection-item bookItem"},o.a.createElement("a",{href:e.book.volumeInfo.infoLink,target:"_blank"},o.a.createElement(s.Button,{className:"right",id:"viewButton"},"View")),o.a.createElement(s.Button,{className:"right",id:"saveButton",onClick:function(t){t.target.classList.add("disabled"),e.saveBook(e.book.volumeInfo)}},"Save"),o.a.createElement("h5",null,e.book.volumeInfo.title),o.a.createElement("p",{className:"writtenBy"},"Written by: "),o.a.createElement("p",null,(t=e.book.volumeInfo.authors)?1===t.length?t:o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",null,e)}))):"None"),o.a.createElement("img",{src:e.book.volumeInfo.imageLinks.thumbnail,className:"left bookThumbnail"}),o.a.createElement("br",null),o.a.createElement("p",null,e.book.volumeInfo.description));var t}var b=n(26),v=n.n(b),g=function(){return v.a.get("/api/books")},k=function(e){return v.a.delete("/api/books/"+e)},p=function(e){return v.a.post("/api/books",e)},w=n(20),N=n.n(w),B=new(n(208).S3)({apiKeyHeroku:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"AIzaSyA3YInjAHayQeCJsguOiGtyPJB-MLm-K0k"}).apiKey}).apiKeyHeroku||"AIzaSyA3YInjAHayQeCJsguOiGtyPJB-MLm-K0k",S=N()();var y=function(){Object(a.useEffect)((function(){}),[]);var e=Object(a.useState)([]),t=Object(E.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)([]),c=Object(E.a)(r,2),i=c[0],u=c[1];function b(e,t){var n={authors:e.authors,description:e.description,image:e.imageLinks.thumbnail,link:e.infoLink,title:e.title};S.emit("bookSavedNotification",n.title),p(n)}return o.a.createElement(f,null,o.a.createElement(s.Row,{className:"container"},o.a.createElement(s.Col,{s:12},o.a.createElement("h2",{className:"center-align"},"Search for Books"),o.a.createElement("br",null),o.a.createElement(s.TextInput,{icon:"search",placeholder:"Search for Book",onChange:function(e){var t=e.target.value;u(Object(m.a)(Object(m.a)({},i),{},{search:t}))},s:12})),o.a.createElement(s.Col,{s:12},o.a.createElement(s.Button,{onClick:function(e){var t;e.preventDefault(),t=i.search,v.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(t,"&key=").concat(B)).then((function(e){console.log(e),0===e.data.items.length?alert("No results!"):l(e.data.items)})).catch((function(e){return console.log(e)}))}},"Search"))),o.a.createElement(s.Row,{className:"container"},o.a.createElement(s.Col,{s:12},o.a.createElement(h,null,n.map((function(e){return o.a.createElement(d,{book:e,saveBook:b})}))))))};n(609);function O(e){return o.a.createElement("li",{class:"collection-item bookItem"},o.a.createElement("a",{href:e.bookData.link,target:"_blank"},o.a.createElement(s.Button,{className:"right",id:"viewButton"},"View")),o.a.createElement(s.Button,{className:"right",id:"deleteButton",onClick:function(){return e.deleteBook(e.bookData)}},"Delete"),o.a.createElement("h5",null,e.bookData.title),o.a.createElement("p",{className:"writtenBy"},"Written by: "),o.a.createElement("p",null,0===(t=e.bookData.authors).length?"None":1===t.length?t:o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",null,e)})))),o.a.createElement("img",{src:e.bookData.image,className:"left bookThumbnail"}),o.a.createElement("br",null),o.a.createElement("p",null,e.bookData.description),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null));var t}var C=N()();var I=function(){var e=Object(a.useState)([]),t=Object(E.a)(e,2),n=t[0],l=t[1];function r(){g().then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}function c(e){C.emit("bookDeletedNotification",e.title),k(e._id).then((function(e){return r()})).catch((function(e){return console.log(e)}))}return Object(a.useEffect)((function(){r(),C.on("bookSavedNotification",(function(e){r()}))}),[]),o.a.createElement(f,null,o.a.createElement(s.Row,{className:"container"},o.a.createElement(s.Col,{s:12},o.a.createElement("h2",{className:"center-align"},"Your Saved Books"),o.a.createElement("br",null),o.a.createElement(h,null,n.map((function(e){return o.a.createElement(O,{bookData:e,deleteBook:c})}))))))};N()();var _=function(){return o.a.createElement("div",null,o.a.createElement(s.Parallax,{image:o.a.createElement("img",{alt:"",src:"https://media.wired.com/photos/59268083cefba457b079a332/master/w_2560%2Cc_limit/BookTA-200552869-001.jpg"}),options:{responsiveThreshold:0}}),o.a.createElement(f,null,o.a.createElement(s.Row,{className:"container"},o.a.createElement(s.Col,{s:12},o.a.createElement("h2",{className:"center-align"},"Google Books Search"),o.a.createElement("br",null))),o.a.createElement(s.Row,{className:"container center-align"},o.a.createElement(s.Col,{s:12},o.a.createElement("a",{href:"/search"},o.a.createElement(s.Button,null,"Start!")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("a",{href:"/saved"},o.a.createElement(s.Button,null,"Saved Books")),o.a.createElement("br",null),o.a.createElement("br",null)))),o.a.createElement(s.Parallax,{image:o.a.createElement("img",{alt:"",src:"https://cdn.cfr.org/sites/default/files/styles/full_width_xl/public/image/2015/10/Books_edited.jpg"}),options:{responsiveThreshold:0}}))},j=(n(610),n(611),n(110),N()());var D=function(){return Object(a.useEffect)((function(){j.on("bookSavedNotification",(function(e){window.M.toast({html:"A new book titled '".concat(e,"' was saved!")})})),j.on("bookDeletedNotification",(function(e){window.M.toast({html:"A new book titled '".concat(e,"' was Deleted!")})}))}),[]),o.a.createElement(c.a,null,o.a.createElement("div",{className:"appParent"},o.a.createElement(u,null),o.a.createElement(i.a,{exact:!0,path:"/",component:_}),o.a.createElement(i.a,{exact:!0,path:"/search",component:y}),o.a.createElement(i.a,{exact:!0,path:"/saved",component:I}),o.a.createElement(s.Footer,{className:"footer",copyrights:"\xa9 2021 Copyright Paul Vatterott"},o.a.createElement("h5",{className:"white-text"},"Powered By Google Books"),o.a.createElement("a",{className:"grey-text text-lighten-4",href:"https://github.com/pfvatterott"},"My Github"),o.a.createElement("br",null),o.a.createElement("a",{className:"grey-text text-lighten-4",href:"https://paul-vatterott.com"},"My Portfolio"))))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(612),n(613);r.a.render(o.a.createElement(D,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");x?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):A(e)}))}}()}},[[112,1,2]]]);
//# sourceMappingURL=main.909b02d0.chunk.js.map