(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var c=o(4),n=o.n(c),s=o(3),r=o(5),d=o(6),a=o(9),i=o(8),l=o(7),u=o.n(l),j=o(1),b=o.n(j),h=(o(14),o(0)),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(a.a)(o,e);var t=Object(i.a)(o);function o(){var e;Object(r.a)(this,o);for(var c=arguments.length,n=new Array(c),d=0;d<c;d++)n[d]=arguments[d];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:[]},e.addGood=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(s.a)(e.selectedGoods),[t])}}))},e.removeGood=function(t){var o=e.state.selectedGoods;if(o.includes(t)){var c=o.lastIndexOf(t);o.splice(c,1),e.setState((function(e){return{selectedGoods:Object(s.a)(e.selectedGoods)}}))}},e.removeAllSameGood=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.resetGoods=function(){e.setState({selectedGoods:[]})},e.listForRender=function(){var t=e.state.selectedGoods,o=t.join("");if(t.length>1){var c=t.slice(0,-1).join(", "),n=t[t.length-1];o="".concat(c," and ").concat(n)}return o},e}return Object(d.a)(o,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods,o=this.listForRender();return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:t.length>0?"Selected good: ".concat(o):"No goods selected"}),Object(h.jsx)("button",{type:"button",className:"cards__button",onClick:this.resetGoods,children:"Reset"}),Object(h.jsx)("section",{className:"cards",children:f.map((function(o){return Object(h.jsxs)("div",{className:u()("card",{card__active:t.includes(o)}),children:[Object(h.jsx)("h2",{className:"card__title",children:o}),Object(h.jsx)("button",{type:"button",onClick:function(){e.addGood(o)},children:"Add"}),Object(h.jsx)("button",{type:"button",onClick:function(){e.removeGood(o)},children:"Remove"}),Object(h.jsx)("button",{type:"button",onClick:function(){e.removeAllSameGood(o)},children:"Remove all"})]})}))})]})})}}]),o}(b.a.Component);n.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1a48f562.chunk.js.map