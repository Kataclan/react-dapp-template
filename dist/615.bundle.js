"use strict";(self.webpackChunkdapp_template_polygon=self.webpackChunkdapp_template_polygon||[]).push([[615],{4809:function(n,e,t){t.d(e,{U:function(){return i}});const i={TestDB:t(4913).M}},4064:function(n,e,t){t.d(e,{C:function(){return p},U:function(){return f}});var i=t(387),o=t(3226),r=t(4809),a={TestDB:{80001:"0xbdbca96560d1f855c06ccfd54b660ac88d628628"}},s=t(5534),u=t.n(s),c=t(3203);if("production"!==c.Wi&&!c.e7&&!c.RT)throw Error("At least 1 RPC URL has to be defined");const l=[c.e7];var d=t(1559);const p=n=>a[n][(0,d.Bb)()],f=n=>((n,e,t)=>{const r=null!=t?t:new o.r("production"===c.Wi?c.RT:u()(l));return new i.CH(e,n,r)})(r.U.TestDB,p("TestDB"),n)},4615:function(n,e,t){t.r(e);var i=t(5893),o=t(4809),r=t(7079),a=t(7541),s=t(387),u=t(5154),c=t(7081),l=t(7294),d=t(4064);e.default=()=>{const{chainId:n}=(0,r.ZR)(),{props:e,staticProvider:t,provider:p}=(0,a.yL)(),{block:f}=(0,c.rL)(),[v,y]=(0,l.useState)(),b=(0,l.useCallback)((n=>{return e=void 0,i=void 0,a=function*(){if(n){const e=new s.CH((0,d.C)("TestDB"),o.U.TestDB,n||t),i=yield e.retrieve();y(u.O$.from(i.number).toNumber())}},new((r=void 0)||(r=Promise))((function(n,t){function o(n){try{u(a.next(n))}catch(n){t(n)}}function s(n){try{u(a.throw(n))}catch(n){t(n)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(n){n(t)}))).then(o,s)}u((a=a.apply(e,i||[])).next())}));var e,i,r,a}),[]);return(0,l.useEffect)((()=>{b(p||t)})),(0,i.jsxs)("div",Object.assign({className:"w-full h-full flex flex-col items-center justify-center"},{children:[(0,i.jsxs)("span",{children:["Config chainId: ",n]},void 0),(0,i.jsxs)("span",{children:["Web3 Provider: ",(null==e?void 0:e.name)||"Not available"]},void 0),(0,i.jsxs)("span",{children:["Web3 Provider Block: ",f]},void 0),(0,i.jsxs)("span",{children:["Web3 Provider network: ",(null==e?void 0:e.network)||"Not available"]},void 0),(0,i.jsxs)("span",{children:["Web3 Provider account: ",null==e?void 0:e.account," "]},void 0),(0,i.jsxs)("span",{children:["Contract value: ",void 0!==typeof v?v:"loading"]},void 0)]}),void 0)}},4913:function(n){n.exports=JSON.parse('{"M":[{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"address","name":"addr","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"storeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"storeNumber","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')}}]);