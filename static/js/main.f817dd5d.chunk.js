(this.webpackJsonpvitrina=this.webpackJsonpvitrina||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(7),s=c.n(i),r=(c(14),c(0));function o(){return Object(r.jsx)("nav",{className:"blue darken-2",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"#!",className:"brand-logo",children:"React Shop"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#!",children:"Repo"})})})]})})}function l(){return Object(r.jsx)("footer",{className:"page-footer blue lighten-3",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getUTCFullYear()," Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"More Links"})]})})})}var j=c(9),d=c(1),u=c(3);function b(e){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})}function m(e){var t=e.mainId,c=e.displayName,n=e.displayDescription,a=e.addToBasket,i=void 0===a?Function.prototype:a,s=e.price;return console.log(e),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("img",{src:e.granted[0].images.full_background,alt:c})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title",children:c}),Object(r.jsx)("p",{children:n})]}),Object(r.jsxs)("div",{className:"card-action",children:[Object(r.jsx)("button",{className:"btn",onClick:function(){return i({mainId:t,displayName:c,price:s})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(r.jsxs)("span",{className:"rigth price",children:[s," \u0440\u0443\u0431."]})]})]})}function h(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToBasket,a=void 0===n?Function.prototype:n;return c.length?Object(r.jsx)("div",{className:"goods",children:c.map((function(e){return Object(r.jsx)(m,Object(d.a)(Object(d.a)({},e),{},{price:e.price.finalPrice,addToBasket:a}),e.mainId)}))}):Object(r.jsx)("h3",{children:"Nothing here"})}function O(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleBasketShow,a=void 0===n?Function.prototype:n;return Object(r.jsxs)("div",{className:"cart green darken-2 white-text",onClick:a,children:[Object(r.jsx)("i",{className:"material-icons",children:"add_shopping_cart"}),c?Object(r.jsx)("span",{className:"cart-quantity",children:c}):null]})}function x(e){var t=e.mainId,c=e.displayName,n=e.price,a=e.quantity,i=e.removeFromBasket,s=e.incQuantity,o=e.decQuantity;return Object(r.jsxs)("li",{class:"collection-item",children:[c," ",Object(r.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){o(t)},children:"remove"})," ","x ",a,Object(r.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){s(t)},children:"add"})," ","= ",n*a,Object(r.jsx)("span",{className:"secondary-content",children:Object(r.jsx)("i",{className:"material-icons basket-delete",onClick:function(){return i(t)},children:"close"})})]})}function p(e){var t=e.order,c=void 0===t?[]:t,n=e.handleBasketShow,a=void 0===n?Function.prototype:n,i=e.removeFromBasket,s=void 0===i?Function.prototype:i,o=e.incQuantity,l=e.decQuantity,j=c.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(r.jsxs)("ul",{className:"collection basket-list",children:[Object(r.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),c.length?c.map((function(e){return Object(r.jsx)(x,Object(d.a)(Object(d.a)({},e),{},{removeFromBasket:s,incQuantity:o,decQuantity:l}),e.mainId)})):Object(r.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(r.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",j," \u0440\u0443\u0431."]}),Object(r.jsx)("li",{className:"collection-item ",children:Object(r.jsx)("button",{className:"btn btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),Object(r.jsx)("i",{className:"material-icons basket-close",onClick:a,children:"close"})]})}var f=c(8);function v(e){var t=e.name,c=e.closeAlert,n=void 0===c?Function.prototype:c;return Object(f.useEffect)((function(){var e=setTimeout(n,3e3);return function(){clearTimeout(e)}}),[t]),Object(r.jsx)("div",{id:"toast-container",children:Object(r.jsxs)("div",{className:"toast",children:[t," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}function N(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!0),s=Object(u.a)(i,2),o=s[0],l=s[1],m=Object(n.useState)([]),x=Object(u.a)(m,2),f=x[0],N=x[1],y=Object(n.useState)(!1),g=Object(u.a)(y,2),k=g[0],q=g[1],B=Object(n.useState)(""),I=Object(u.a)(B,2),F=I[0],S=I[1],w=function(){q(!k)};return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"b1036bbb-be62e965-f85a8fe6-9d3c4535"}}).then((function(e){return e.json()})).then((function(e){e.shop&&a(e.shop),l(!1),console.log(e.shop)}))}),[]),Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(O,{quantity:f.length,handleBasketShow:w}),o?Object(r.jsx)(b,{}):Object(r.jsx)(h,{goods:c,addToBasket:function(e){var t=f.findIndex((function(t){return t.mainId===e.mainId}));if(t<0){var c=Object(d.a)(Object(d.a)({},e),{},{quantity:1});N([].concat(Object(j.a)(f),[c]))}else{var n=f.map((function(e,c){return c===t?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e}));N(n)}S(e.displayName)}}),k&&Object(r.jsx)(p,{order:f,handleBasketShow:w,removeFromBasket:function(e){var t=f.filter((function(t){return t.mainId!==e}));N(t)},incQuantity:function(e){var t=f.map((function(t){if(t.mainId===e){var c=t.quantity+1;return Object(d.a)(Object(d.a)({},t),{},{quantity:c})}return t}));N(t)},decQuantity:function(e){var t=f.map((function(t){if(t.mainId===e){var c=t.quantity-1;return Object(d.a)(Object(d.a)({},t),{},{quantity:c>=0?c:0})}return t}));N(t)}}),F&&Object(r.jsx)(v,{name:F,closeAlert:function(){S("")}})]})}var y=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsx)(N,{}),Object(r.jsx)(l,{})]})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f817dd5d.chunk.js.map