(this.webpackJsonpphotos=this.webpackJsonpphotos||[]).push([[0],{35:function(t,e,n){},4:function(t,e,n){t.exports={app:"App_app__H_p2J",photos:"App_photos__2yeRd",item:"App_item__1r3zJ",modalWindow:"App_modalWindow__fnC-I",comments:"App_comments__3y6Yi",comment:"App_comment__1w50L",input:"App_input__3Weoc",quit:"App_quit__wE3Vv",blur:"App_blur__29V7X"}},61:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(0),i=n.n(c),a=n(6),s=n.n(a),u=(n(35),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),i(t),a(t)}))}),r=n(7),m=n(5),l=n(3),d=n(8),p=n.n(d),j=n(24),h=n.n(j),g="GET_IMAGES",b="SET_MODAL_WINDOW",f="CHANGE_TEXT_VALUE_COMMENT",O={images:[],modalWindow:{},textValueComment:""},_=function(t){return{type:b,image:t}},x=function(t){return{type:f,value:t}},v=function(){return function(t){p.a.get("https://boiling-refuge-66454.herokuapp.com/images").then((function(e){var n;t((n=e.data,{type:g,images:n}))}))}},w=n(25),C=Object(m.c)({images:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return Object(l.a)(Object(l.a)({},t),{},{images:e.images});case b:return Object(l.a)(Object(l.a)({},t),{},{modalWindow:e.image});case f:return Object(l.a)(Object(l.a)({},t),{},{textValueComment:e.value});default:return t}}}),T=Object(m.d)(C,Object(m.a)(w.a)),k=n(26),W=n(27),A=n(29),y=n(28),N=n(4),V=n.n(N),M=function(t){return Object(o.jsxs)("div",{className:V.a.comment,children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{alt:"ava",src:"https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"})}),Object(o.jsx)("span",{children:t.text})]})},E=function(t){return Object(o.jsxs)("div",{className:V.a.modalWindow,children:[Object(o.jsx)("div",{className:V.a.quit,onClick:function(){t.setModalWindow({}),t.changeTextValueComment("")}}),Object(o.jsx)("img",{src:t.modalWindow.url,alt:"?"}),Object(o.jsx)("div",{className:V.a.comments,children:t.modalWindow.comments.map((function(t){return Object(o.jsx)(M,{text:t.text},t.id)}))}),Object(o.jsxs)("div",{className:V.a.input,children:[Object(o.jsx)("input",{type:"text",placeholder:"\u041e\u0441\u0442\u0430\u0432\u0442\u044c\u0435 \u0441\u0432\u043e\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439...",onChange:function(e){return t.changeTextValueComment(e.target.value)},value:t.textValueComment}),Object(o.jsx)("button",{onClick:function(){alert("\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, POST \u0437\u0430\u043f\u0440\u043e\u0441 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e. \n        \u041f\u0440\u043e\u0431\u043e\u0432\u0430\u043b \u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e http://seriyps.ru/postget/ \u0438 \u0447\u0435\u0440\u0435\u0437 Axios\n         - \u0432\u0441\u0451 \u0431\u0435\u0437 \u0442\u043e\u043b\u043a\u0443. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e POST \u0432\u043e\u043e\u0431\u0449\u0435 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u0438 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0435\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 (\u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u0439 \u0444\u043e\u0442\u043a\u0435 \u0441 \u043f\u0451\u0441\u0438\u043a\u043e\u043c). Thunk`\u0430 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441 \u0433\u043e\u0442\u043e\u0432\u0430")},children:Object(o.jsx)("img",{alt:"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",src:"https://cdn.icon-icons.com/icons2/510/PNG/512/android-send_icon-icons.com_50500.png"})})]})]})},I=function(t){return 0===t.images.length?"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":Object(o.jsxs)("div",{className:V.a.app,children:[t.modalWindow.id?Object(o.jsx)(E,Object(l.a)({},t)):null,Object(o.jsx)("h1",{children:"photos.free"}),Object(o.jsx)("div",{className:"".concat(V.a.photos," ").concat(t.modalWindow.id?V.a.blur:""),children:t.images.map((function(e){return Object(o.jsx)("img",{className:V.a.item,src:e.url,onClick:function(){return t.setModalWindowThunk(e.id)},alt:"?"},e.id)}))})]})},L=function(t){Object(A.a)(n,t);var e=Object(y.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(W.a)(n,[{key:"componentDidMount",value:function(){this.props.getImagesThunk()}},{key:"render",value:function(){return Object(o.jsx)(I,Object(l.a)({},this.props))}}]),n}(i.a.Component),S=Object(r.b)((function(t){return{images:t.images.images,modalWindow:t.images.modalWindow,textValueComment:t.images.textValueComment}}),(function(t){return{getImagesThunk:function(){return t(v())},setModalWindowThunk:function(e){return t(function(t){return function(e){p.a.get("https://boiling-refuge-66454.herokuapp.com/images/".concat(t)).then((function(t){e(_(t.data))}))}}(e))},setModalWindow:function(e){return t(_(e))},changeTextValueComment:function(e){return t(x(e))},addCommentThunk:function(e,n){return t(function(t,e){return function(n){p.a.post("https://boiling-refuge-66454.herokuapp.com/images/".concat(t,"/comments"),h.a.stringify({name:"\u0410\u043d\u043e\u043d\u0438\u043c",comment:e}),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",mode:"no-cors"}}).then((function(t){n(x(""))}))}}(e,n))}}}))(L);s.a.render(Object(o.jsx)(r.a,{store:T,children:Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(S,{})})}),document.getElementById("root")),u()}},[[61,1,2]]]);
//# sourceMappingURL=main.549ae396.chunk.js.map