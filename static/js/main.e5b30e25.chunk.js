(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={feedback:"Feedback_feedback__2W6NZ",statList:"Feedback_statList__3rBxc",statItem:"Feedback_statItem__13yUH",button:"Feedback_button__1yDJM",messages:"Feedback_messages__ksz5r"}},14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(4),r=a.n(n),i=(a(14),a(15),a(5)),l=a(6),o=a(7),b=a(9),j=a(8),d=a(1),u=a.n(d),h=a(0),m=function(e){var t=e.onLeaveFeedback,a=e.options;return Object(h.jsx)(h.Fragment,{children:Object.keys(a).map((function(e){return Object(h.jsx)("button",{className:u.a.button,name:e,type:"button",onClick:t,children:e},e)}))})},O=function(e){var t=e.good,a=e.neutral,c=e.bad,s=e.total,n=e.positivePercentage;return Object(h.jsxs)("ul",{className:u.a.statList,children:[Object(h.jsxs)("li",{className:u.a.statItem,children:[Object(h.jsx)("span",{className:u.a.label,children:"Good: "}),Object(h.jsx)("span",{className:"count",children:t})]}),Object(h.jsxs)("li",{className:u.a.statItem,children:[Object(h.jsx)("span",{className:u.a.label,children:"Neutral: "}),Object(h.jsx)("span",{className:u.a.count,children:a})]}),Object(h.jsxs)("li",{className:u.a.statItem,children:[Object(h.jsx)("span",{className:u.a.label,children:"Bad: "}),Object(h.jsx)("span",{className:u.a.count,children:c})]}),Object(h.jsxs)("li",{className:u.a.statItem,children:[Object(h.jsx)("span",{className:u.a.label,children:"Total: "}),Object(h.jsx)("span",{className:u.a.count,children:s})]}),Object(h.jsxs)("li",{className:u.a.statItem,children:[Object(h.jsx)("span",{className:u.a.label,children:"Positive feedback: "}),Object(h.jsx)("span",{className:u.a.count,children:n})]})]})},x=function(e){var t=e.title,a=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{className:u.a.title,children:t}),a]})},f=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{className:u.a.messages,children:"No feedback given"})})},k=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(i.a)({},t.target.name,e[t.target.name]+1)}))},e.countTotalFeedback=function(){var t=0;return Object.values(e.state).forEach((function(e){return t+=e})),t},e.positivePercentage=function(){var t=e.countTotalFeedback();return 0===t?0:Math.round(100*e.state.good/t)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.positivePercentage(),a=this.state,c=a.good,s=a.neutral,n=a.bad;return Object(h.jsxs)("div",{className:u.a.feedback,children:[Object(h.jsx)(x,{title:"Please leave feedback",children:Object(h.jsx)(m,{options:this.state,onLeaveFeedback:this.onLeaveFeedback})}),0===e?Object(h.jsx)(f,{}):Object(h.jsx)(x,{title:"Statistics",children:Object(h.jsx)(O,{good:c,neutral:s,bad:n,total:e,positivePercentage:t})})]})}}]),a}(s.a.Component),p=k;var v=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(p,{title:"Please leave feedback"})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.e5b30e25.chunk.js.map