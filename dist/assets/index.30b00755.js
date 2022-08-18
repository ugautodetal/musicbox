const le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};le();function m(){}function J(e){return e()}function I(){return Object.create(null)}function T(e){e.forEach(J)}function ce(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let L;function fe(e,t){return L||(L=document.createElement("a")),L.href=t,e===L.href}function ue(e){return Object.keys(e).length===0}function ae(e,...t){if(e==null)return m;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function de(e,t,n){e.$$.on_destroy.push(ae(t,n))}function U(e,t,n){return e.set(n),t}const Q=typeof window<"u";let G=Q?()=>window.performance.now():()=>Date.now(),V=Q?e=>requestAnimationFrame(e):m;const $=new Set;function W(e){$.forEach(t=>{t.c(e)||($.delete(t),t.f())}),$.size!==0&&V(W)}function pe(e){let t;return $.size===0&&V(W),{promise:new Promise(n=>{$.add(t={c:e,f:n})}),abort(){$.delete(t)}}}function me(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function _e(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function S(e){return document.createElement(e)}function Y(e){return document.createTextNode(e)}function H(){return Y(" ")}function he(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ge(e){return Array.from(e.childNodes)}function ye(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let B;function A(e){B=e}const k=[],K=[],j=[],R=[],be=Promise.resolve();let N=!1;function we(){N||(N=!0,be.then(Z))}function C(e){j.push(e)}const M=new Set;let O=0;function Z(){const e=B;do{for(;O<k.length;){const t=k[O];O++,A(t),$e(t.$$)}for(A(null),k.length=0,O=0;K.length;)K.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];M.has(n)||(M.add(n),n())}j.length=0}while(k.length);for(;R.length;)R.pop()();N=!1,M.clear(),A(e)}function $e(e){if(e.fragment!==null){e.update(),T(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const P=new Set;let ve;function F(e,t){e&&e.i&&(P.delete(e),e.i(t))}function ee(e,t,n,s){if(e&&e.o){if(P.has(e))return;P.add(e),ve.c.push(()=>{P.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function ke(e){e&&e.c()}function te(e,t,n,s){const{fragment:r,on_mount:i,on_destroy:l,after_update:c}=e.$$;r&&r.m(t,n),s||C(()=>{const a=i.map(J).filter(ce);l?l.push(...a):T(a),e.$$.on_mount=[]}),c.forEach(C)}function ne(e,t){const n=e.$$;n.fragment!==null&&(T(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(k.push(e),we(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function se(e,t,n,s,r,i,l,c=[-1]){const a=B;A(e);const o=e.$$={fragment:null,ctx:null,props:i,update:m,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:I(),dirty:c,skip_bound:!1,root:t.target||a.$$.root};l&&l(o.root);let f=!1;if(o.ctx=n?n(e,t.props||{},(u,d,...p)=>{const v=p.length?p[0]:d;return o.ctx&&r(o.ctx[u],o.ctx[u]=v)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](v),f&&Ae(e,u)),d}):[],o.update(),f=!0,T(o.before_update),o.fragment=s?s(o.ctx):!1,t.target){if(t.hydrate){const u=ge(t.target);o.fragment&&o.fragment.l(u),u.forEach(h)}else o.fragment&&o.fragment.c();t.intro&&F(e.$$.fragment),te(e,t.target,t.anchor,t.customElement),Z()}A(a)}class re{$destroy(){ne(this,1),this.$destroy=m}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!ue(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const b=[];function Ee(e,t=m){let n;const s=new Set;function r(c){if(D(e,c)&&(e=c,n)){const a=!b.length;for(const o of s)o[1](),b.push(o,e);if(a){for(let o=0;o<b.length;o+=2)b[o][0](b[o+1]);b.length=0}}}function i(c){r(c(e))}function l(c,a=m){const o=[c,a];return s.add(o),s.size===1&&(n=t(r)||m),c(e),()=>{s.delete(o),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:l}}function X(e){return Object.prototype.toString.call(e)==="[object Date]"}function z(e,t,n,s){if(typeof n=="number"||X(n)){const r=s-n,i=(n-t)/(e.dt||1/60),l=e.opts.stiffness*r,c=e.opts.damping*i,a=(l-c)*e.inv_mass,o=(i+a)*e.dt;return Math.abs(o)<e.opts.precision&&Math.abs(r)<e.opts.precision?s:(e.settled=!1,X(n)?new Date(n.getTime()+o):n+o)}else{if(Array.isArray(n))return n.map((r,i)=>z(e,t[i],n[i],s[i]));if(typeof n=="object"){const r={};for(const i in n)r[i]=z(e,t[i],n[i],s[i]);return r}else throw new Error(`Cannot spring ${typeof n} values`)}}function xe(e,t={}){const n=Ee(e),{stiffness:s=.15,damping:r=.8,precision:i=.01}=t;let l,c,a,o=e,f=e,u=1,d=0,p=!1;function v(x,g={}){f=x;const oe=a={};if(e==null||g.hard||E.stiffness>=1&&E.damping>=1)return p=!0,l=G(),o=x,n.set(e=f),Promise.resolve();if(g.soft){const y=g.soft===!0?.5:+g.soft;d=1/(y*60),u=0}return c||(l=G(),p=!1,c=pe(y=>{if(p)return p=!1,c=null,!1;u=Math.min(u+d,1);const q={inv_mass:u,opts:E,settled:!0,dt:(y-l)*60/1e3},ie=z(q,o,e,f);return l=y,o=e,n.set(e=ie),q.settled&&(c=null),!q.settled})),new Promise(y=>{c.promise.then(()=>{oe===a&&y()})})}const E={set:v,update:(x,g)=>v(x(f,e),g),subscribe:n.subscribe,stiffness:s,damping:r,precision:i};return E}function Le(e){let t,n,s,r,i;return{c(){t=S("span"),n=Y(e[0]),_(t,"class","cell svelte-1kfl4r1"),_(t,"style",s=`top: ${e[2]}px; color: ${e[1]<2?e[4][0]:e[4][1]}`)},m(l,c){w(l,t,c),me(t,n),r||(i=he(t,"click",e[5]),r=!0)},p(l,[c]){c&1&&ye(n,l[0]),c&6&&s!==(s=`top: ${l[2]}px; color: ${l[1]<2?l[4][0]:l[4][1]}`)&&_(t,"style",s)},i:m,o:m,d(l){l&&h(t),r=!1,i()}}}function Oe(e,t,n){let s,r=xe(0,{stiffness:.15,damping:.2});de(e,r,d=>n(2,s=d));let i=["hsla(332, 100%, 45%, 1)","hsla(217, 100%, 31%, 1)"],{letter:l="X"}=t,{index:c=0}=t;function a(d){let p=new Audio;return p.src=d,p.playbackRate=.6+.2*c,p.preservesPitch=!1,p}let o=0,f=Array(5).fill().map(()=>a("./samples/kalimba.wav"));function u(){o=(o+1)%4,f[o].play(),U(r,s=-50,s),setTimeout(()=>{U(r,s=0,s)},100)}return e.$$set=d=>{"letter"in d&&n(0,l=d.letter),"index"in d&&n(1,c=d.index)},[l,c,s,r,i,u]}class Se extends re{constructor(t){super(),se(this,t,Oe,Le,D,{letter:0,index:1})}}function je(e,t,n){const s=e.slice();return s[0]=t[n],s[2]=n,s}function Pe(e){let t,n;return t=new Se({props:{letter:e[0],index:e[2]}}),{c(){ke(t.$$.fragment)},m(s,r){te(t,s,r),n=!0},p:m,i(s){n||(F(t.$$.fragment,s),n=!0)},o(s){ee(t.$$.fragment,s),n=!1},d(s){ne(t,s)}}}function Te(e){let t,n,s,r,i,l,c,a="UGAUTODETAL",o=[];for(let f=0;f<a.length;f+=1)o[f]=Pe(je(e,a,f));return{c(){t=S("img"),s=H(),r=S("div");for(let f=0;f<o.length;f+=1)o[f].c();i=H(),l=S("div"),l.innerHTML=`<p class="about svelte-1smow91">\u0412 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043D\u0430\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u043F\u044F\u0442\u0438 \u0442\u044B\u0441\u044F\u0447 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0439 \u0430\u0432\u0442\u043E\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u043A\u0430\u043A \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0445, \u0442\u0430\u043A \u0438 \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0445 \u0437\u0430\u0432\u043E\u0434\u043E\u0432. \u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0432 \u0432 \u043E\u0431\u0449\u0435\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0441\u043E\u0442\u0435\u043D \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439.  \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043F\u043B\u043E\u0442\u0438\u0442\u044C \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0441\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0435 \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043B\u044E\u0431\u043E\u0439 \u043A\u043B\u0438\u0435\u043D\u0442 \u0441\u043C\u043E\u0433 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0443\u0434\u043E\u0431\u043D\u043E\u043C\u0443 \u0441\u0435\u0440\u0432\u0438\u0441\u0443. \u041A\u0430\u0436\u0434\u043E\u043C\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0435\u0441\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0440\u0430\u0431\u043E\u0442\u044B \u043E\u0442 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0434\u043E \u0435\u0433\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F.</p> 
  
  
<div class="city-list svelte-1smow91"><span class="city svelte-1smow91">\u041A\u0440\u0430\u0441\u043D\u043E\u0434\u0430\u0440\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439</span>   
<span class="city svelte-1smow91">\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0410\u0434\u044B\u0433\u0435\u044F</span>   
<span class="city svelte-1smow91">\u0420\u043E\u0441\u0442\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C</span>   
<span class="city svelte-1smow91">\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C</span> 
<span class="city svelte-1smow91">\u0421\u0442\u0430\u0432\u0440\u043E\u043F\u043E\u043B\u044C\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439</span> 
<span class="city svelte-1smow91">\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0440\u044B\u043C</span>   
<span class="city svelte-1smow91">\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043E-\u0427\u0435\u0440\u043A\u0435\u0441\u0441\u0438\u044F</span> 
<span class="city svelte-1smow91">\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043D, \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0430\u043B\u043C\u044B\u043A\u0438\u044F</span>   
<span class="city svelte-1smow91">\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u041E\u0441\u0435\u0442\u0438\u044F</span>   
<span class="city svelte-1smow91">\u0427\u0435\u0447\u0435\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430</span></div>`,_(t,"class","map svelte-1smow91"),fe(t.src,n="./world_map.svg")||_(t,"src",n),_(t,"alt","background map"),_(r,"class","logo-container svelte-1smow91"),_(l,"class","info-container svelte-1smow91")},m(f,u){w(f,t,u),w(f,s,u),w(f,r,u);for(let d=0;d<o.length;d+=1)o[d].m(r,null);w(f,i,u),w(f,l,u),c=!0},p:m,i(f){if(!c){for(let u=0;u<a.length;u+=1)F(o[u]);c=!0}},o(f){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)ee(o[u]);c=!1},d(f){f&&h(t),f&&h(s),f&&h(r),_e(o,f),f&&h(i),f&&h(l)}}}class qe extends re{constructor(t){super(),se(this,t,null,Te,D,{})}}new qe({target:document.getElementById("app")});
