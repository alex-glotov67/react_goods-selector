(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var o=c(4),s=c.n(o),n=c(3),a=c(5),d=c(6),r=c(9),i=c(8),l=c(7),u=c.n(l),j=c(1),b=c.n(j),h=(c(14),c(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],O=function(e){Object(r.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(a.a)(this,c);for(var o=arguments.length,s=new Array(o),d=0;d<o;d++)s[d]=arguments[d];return(e=t.call.apply(t,[this].concat(s))).state={selectedGoods:[]},e.addGood=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(n.a)(e.selectedGoods),[t])}}))},e.removeGood=function(t){var c=e.state.selectedGoods;if(c.includes(t)){var o=c.lastIndexOf(t);c.splice(o,1),e.setState((function(e){return{selectedGoods:Object(n.a)(e.selectedGoods)}}))}},e.resetGoods=function(){e.setState({selectedGoods:[]})},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:t.length>0?"Selected good: ".concat(t.join(", ")):"No goods selected"}),Object(h.jsx)("button",{type:"button",className:"cards__button",onClick:this.resetGoods,children:"Reset"}),Object(h.jsx)("section",{className:"cards",children:p.map((function(c){return Object(h.jsxs)("div",{className:u()("card",{card__active:t.includes(c)}),children:[Object(h.jsx)("h2",{className:"card__title",children:c}),Object(h.jsx)("button",{type:"button",onClick:function(){e.addGood(c)},children:"Add"}),Object(h.jsx)("button",{type:"button",onClick:function(){e.removeGood(c)},children:"Remove"})]})}))})]})})}}]),c}(b.a.Component);s.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0fa80040.chunk.js.map