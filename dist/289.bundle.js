"use strict";(self.webpackChunkdapp_template_polygon=self.webpackChunkdapp_template_polygon||[]).push([[289],{4809:function(e,n,t){t.d(n,{U:function(){return s}});const s={TestDB:t(4913).M}},4064:function(e,n,t){t.d(n,{C:function(){return u},U:function(){return N}});var s=t(387),_=t(3226),o=t(4809),i={TestDB:{80001:"0xbdbca96560d1f855c06ccfd54b660ac88d628628"}},T=t(5534),a=t.n(T),c=t(3203);if("production"!==c.Wi&&!c.e7&&!c.RT)throw Error("At least 1 RPC URL has to be defined");const r=[c.e7];var E=t(1559);const u=e=>i[e][(0,E.Bb)()],N=e=>((e,n,t)=>{const o=null!=t?t:new _.r("production"===c.Wi?c.RT:a()(r));return new s.CH(n,e,o)})(o.U.TestDB,u("TestDB"),e)},5706:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var s,_=t(5893),o=t(7294),i=t(5154),T=t(387),a=t(4809),c=t(7541),r=t(6486),E=t(1870),u=t(7462);!function(e){e[e.DEFAULT_ERROR_MESSAGE=0]="DEFAULT_ERROR_MESSAGE",e[e.UNLOCK_WALLET_MSG=1]="UNLOCK_WALLET_MSG",e[e.CONNECT_WALLET_ERROR_MSG=2]="CONNECT_WALLET_ERROR_MSG",e[e.SIGN_TX_MSG=3]="SIGN_TX_MSG",e[e.TX_REJECTED_MSG=4]="TX_REJECTED_MSG",e[e.TX_EXECUTED_MSG=5]="TX_EXECUTED_MSG",e[e.TX_CANCELLATION_EXECUTED_MSG=6]="TX_CANCELLATION_EXECUTED_MSG",e[e.TX_FAILED_MSG=7]="TX_FAILED_MSG",e[e.TX_PENDING_MSG=8]="TX_PENDING_MSG",e[e.TX_STILL_PENDING_MSG=9]="TX_STILL_PENDING_MSG",e[e.TX_WAITING_CONFIRMATION_MSG=10]="TX_WAITING_CONFIRMATION_MSG",e[e.TX_CONFIRMATION_EXECUTED_MSG=11]="TX_CONFIRMATION_EXECUTED_MSG",e[e.TX_CONFIRMATION_FAILED_MSG=12]="TX_CONFIRMATION_FAILED_MSG"}(s||(s={}));const N={[s.DEFAULT_ERROR_MESSAGE]:"Something went wrong",[s.UNLOCK_WALLET_MSG]:"Unlock your wallet to connect",[s.CONNECT_WALLET_ERROR_MSG]:"Error connecting to your wallet",[s.SIGN_TX_MSG]:"Please sign the transaction",[s.TX_REJECTED_MSG]:"Transaction rejected",[s.TX_EXECUTED_MSG]:"Transaction successfully executed",[s.TX_CANCELLATION_EXECUTED_MSG]:"Rejection successfully submitted",[s.TX_FAILED_MSG]:"Transaction failed",[s.TX_PENDING_MSG]:"Transaction pending",[s.TX_STILL_PENDING_MSG]:"Transaction still pending. Consider resubmitting with a higher gas price.",[s.TX_WAITING_CONFIRMATION_MSG]:"A transaction requires your confirmation",[s.TX_CONFIRMATION_EXECUTED_MSG]:"Confirmation transaction was successful",[s.TX_CONFIRMATION_FAILED_MSG]:"Confirmation transaction failed"},M={key:s.TX_WAITING_CONFIRMATION_MSG,message:N[s.TX_WAITING_CONFIRMATION_MSG],type:"loading"},I={key:s.TX_CONFIRMATION_EXECUTED_MSG,message:N[s.TX_CONFIRMATION_EXECUTED_MSG],type:"success"},G={key:s.TX_CONFIRMATION_FAILED_MSG,message:N[s.TX_CONFIRMATION_FAILED_MSG],type:"error"},S={key:s.TX_PENDING_MSG,message:N[s.TX_PENDING_MSG],type:"loading"},C=(s.TX_STILL_PENDING_MSG,s.TX_STILL_PENDING_MSG,{key:s.TX_FAILED_MSG,message:N[s.TX_FAILED_MSG],type:"error"});s.TX_EXECUTED_MSG,s.TX_EXECUTED_MSG;s.TX_WAITING_CONFIRMATION_MSG,s.TX_CONFIRMATION_EXECUTED_MSG,s.TX_CONFIRMATION_FAILED_MSG,s.TX_PENDING_MSG,s.TX_STILL_PENDING_MSG,s.TX_EXECUTED_MSG,s.TX_FAILED_MSG;const X={status:"idle"};var O=({contractMethod:e,onConfirmWaiting:n=r.noop,onConfirmRejected:t=r.noop,onConfirmed:_=r.noop,onExecuted:o=r.noop,onExecutionFailed:i=r.noop,waitingConfirmationMessage:T=N[s.TX_WAITING_CONFIRMATION_MSG],confirmedMessage:a=N[s.TX_CONFIRMATION_EXECUTED_MSG],pendingMessage:c=N[s.TX_PENDING_MSG],stillPendingMessage:O=N[s.TX_STILL_PENDING_MSG],executedSuccessMessage:l=N[s.TX_EXECUTED_MSG],errorExecutingMessage:A=N[s.TX_FAILED_MSG],errorConfirmingMessage:d=N[s.TX_CONFIRMATION_FAILED_MSG]})=>{const[f,g]=(0,u.Z)(X),{enqueueToast:D,enqueueAndRemove:p,removeToast:L}=(0,E.zn)();return{status:f.status,execute:()=>{D(Object.assign(Object.assign({},M),{message:T})),n(),e().then((e=>{return n=void 0,t=void 0,r=function*(){p(Object.assign(Object.assign({},I),{message:a}),s.TX_WAITING_CONFIRMATION_MSG),_(),D(Object.assign(Object.assign({},S),{message:c}));const n=yield e.wait();console.log("TX RECEIPT:",n),n.status?(p(Object.assign(Object.assign({},I),{message:l}),s.TX_PENDING_MSG),o()):(p(Object.assign(Object.assign({},C),{message:A}),s.TX_PENDING_MSG),i())},new((T=void 0)||(T=Promise))((function(e,s){function _(e){try{i(r.next(e))}catch(e){s(e)}}function o(e){try{i(r.throw(e))}catch(e){s(e)}}function i(n){var t;n.done?e(n.value):(t=n.value,t instanceof T?t:new T((function(e){e(t)}))).then(_,o)}i((r=r.apply(n,t||[])).next())}));var n,t,T,r})).catch((()=>{p(Object.assign(Object.assign({},G),{message:d}),s.TX_WAITING_CONFIRMATION_MSG),t()}))}}},l=t(4064),A=t(7830),d=()=>{const{provider:e,props:n,staticProvider:t}=(0,c.yL)(),[s,r]=(0,o.useState)(),E=(()=>{const e=(0,c.xo)();return(0,o.useMemo)((()=>(0,l.U)(null==e?void 0:e.getSigner())),[e])})(),[u,N]=(0,o.useState)(!1),M=()=>N(!1),{execute:I}=O({contractMethod:()=>(console.log(E),E.storeNumber(2)),waitingConfirmationMessage:"Please confirm the tx",onConfirmWaiting:()=>N(!0),onConfirmRejected:()=>{console.log("Confirm rejected"),M()},onExecutionFailed:M,onExecuted:M}),G=(0,o.useCallback)((e=>{return n=void 0,s=void 0,o=function*(){if(e){const n=new T.CH((0,l.C)("TestDB"),a.U.TestDB,e||t),s=yield n.retrieve();r(i.O$.from(s.number).toNumber())}},new((_=void 0)||(_=Promise))((function(e,t){function i(e){try{a(o.next(e))}catch(e){t(e)}}function T(e){try{a(o.throw(e))}catch(e){t(e)}}function a(n){var t;n.done?e(n.value):(t=n.value,t instanceof _?t:new _((function(e){e(t)}))).then(i,T)}a((o=o.apply(n,s||[])).next())}));var n,s,_,o}),[]);return(0,o.useEffect)((()=>{G(e||t)})),(0,_.jsxs)("div",Object.assign({className:"w-full h-full flex flex-col items-center justify-center"},{children:[(0,_.jsx)(A.Z,Object.assign({disabled:!n.account||u,onClick:I},{children:u?"WAITING":"UPDATE"}),void 0),(0,_.jsxs)("span",Object.assign({className:"text-lg"},{children:["VALUE: ",s]}),void 0)]}),void 0)}},4913:function(e){e.exports=JSON.parse('{"M":[{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"address","name":"addr","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"storeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"storeNumber","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')}}]);