import{_ as v}from"../../chunks/add-mdsvex-2f636f4e.js";import{_ as b}from"../../chunks/deploying-to-gh-pages-03291152.js";import{_ as k}from"../../chunks/starting-with-sveltekit-30bece9b.js";import{S as x,i as y,s as j,e as c,t as B,c as h,a as _,g as E,d as i,b as $,f as m,F as u,J as f,K as w}from"../../chunks/vendor-ef498746.js";function g(n,l,s){const e=n.slice();return e[2]=l[s].path,e[3]=l[s].metadata.title,e}function p(n){let l,s,e=n[3]+"",t,o;return{c(){l=c("li"),s=c("a"),t=B(e),this.h()},l(a){l=h(a,"LI",{});var r=_(l);s=h(r,"A",{href:!0});var d=_(s);t=E(d,e),d.forEach(i),r.forEach(i),this.h()},h(){$(s,"href",o=`/blog/${n[2]}`)},m(a,r){m(a,l,r),u(l,s),u(s,t)},p:f,d(a){a&&i(l)}}}function L(n){let l,s=n[0],e=[];for(let t=0;t<s.length;t+=1)e[t]=p(g(n,s,t));return{c(){l=c("ul");for(let t=0;t<e.length;t+=1)e[t].c()},l(t){l=h(t,"UL",{});var o=_(l);for(let a=0;a<e.length;a+=1)e[a].l(o);o.forEach(i)},m(t,o){m(t,l,o);for(let a=0;a<e.length;a+=1)e[a].m(l,null)},p(t,[o]){if(o&1){s=t[0];let a;for(a=0;a<s.length;a+=1){const r=g(t,s,a);e[a]?e[a].p(r,o):(e[a]=p(r),e[a].c(),e[a].m(l,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=s.length}},i:f,o:f,d(t){t&&i(l),w(e,t)}}}function P(n){return[Object.entries({"./add-mdsvex.md":v,"./deploying-to-gh-pages.md":b,"./starting-with-sveltekit.md":k}).map(([e,t])=>(e=e.replace(".md",""),t=t.metadata,{path:e,metadata:t}))]}class F extends x{constructor(l){super();y(this,l,P,L,j,{})}}export{F as default};
