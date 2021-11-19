import{S as Os,i as Ms,s as Ss,e as p,t,k as w,c,a as l,g as e,d as n,n as h,b as cs,f as r,F as a,J as ls}from"./vendor-c400893e.js";function Ds(ys){let k,z,I,E,F,L,y,i,J,b,B,G,j,K,Q,C,U,V,A,m,gs=`<code class="language-js"><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.svelte.md'</span><span class="token punctuation">,</span> <span class="token string">'.md'</span><span class="token punctuation">,</span> <span class="token string">'.svx'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  smartypants<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    dashes<span class="token operator">:</span> <span class="token string">'oldschool'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

  remarkPlugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  rehypePlugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span></code>`,T,d,W,O,X,Y,R,v,bs=`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> mdsvex <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'mdsvex'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> mdsvexConfig <span class="token keyword">from</span> <span class="token string">'./mdsvex.config.js'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> preprocess <span class="token keyword">from</span> <span class="token string">'svelte-preprocess'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> adapter <span class="token keyword">from</span> <span class="token string">'@sveltejs/adapter-static'</span><span class="token punctuation">;</span>

<span class="token comment">/** @type &#123;import('@sveltejs/kit').Config&#125; */</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.svelte'</span><span class="token punctuation">,</span> <span class="token operator">...</span>mdsvexConfig<span class="token punctuation">.</span>extensions<span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// Consult https://github.com/sveltejs/svelte-preprocess</span>
  <span class="token comment">// for more information about preprocessors</span>
  preprocess<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mdsvex</span><span class="token punctuation">(</span>mdsvexConfig<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  kit<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// hydrate the &lt;div id="svelte"> element in src/app.html</span>
    target<span class="token operator">:</span> <span class="token string">'#svelte'</span><span class="token punctuation">,</span>
    adapter<span class="token operator">:</span> <span class="token function">adapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span></code>`,H,_,g,Z,M,$,N,u,ss,S,ns,as,D,ts,es,P,os;return{c(){k=p("h1"),z=t(Es),I=w(),E=p("p"),F=t("Mdsvex is a Markdown preprocessor for Svelte. It takes documents written in a mix of Markdown and Svelte and outputs Svelte components."),L=w(),y=p("ol"),i=p("li"),J=t("Add "),b=p("code"),B=t("mdsvex"),G=t(" to the project with "),j=p("code"),K=t("npx svelte-add@latest mdsvex"),Q=t(". It creates a "),C=p("code"),U=t("mdsvex.config.js"),V=t(" file with this content:"),A=w(),m=p("pre"),T=w(),d=p("p"),W=t("The command also adds the preprocessor to "),O=p("code"),X=t("svelte.config.js"),Y=t(":"),R=w(),v=p("pre"),H=w(),_=p("ol"),g=p("li"),Z=t("Run "),M=p("code"),$=t("npm install"),N=w(),u=p("p"),ss=t("Now, if you have a blog post in "),S=p("code"),ns=t("src/routes/blog/a-post.md"),as=t(" (or "),D=p("code"),ts=t(".svx"),es=t("), you will be able to access the generated version in "),P=p("code"),os=t("https://[your-site]/blog/a-post"),this.h()},l(s){k=c(s,"H1",{});var o=l(k);z=e(o,Es),o.forEach(n),I=h(s),E=c(s,"P",{});var rs=l(E);F=e(rs,"Mdsvex is a Markdown preprocessor for Svelte. It takes documents written in a mix of Markdown and Svelte and outputs Svelte components."),rs.forEach(n),L=h(s),y=c(s,"OL",{});var is=l(y);i=c(is,"LI",{});var f=l(i);J=e(f,"Add "),b=c(f,"CODE",{});var us=l(b);B=e(us,"mdsvex"),us.forEach(n),G=e(f," to the project with "),j=c(f,"CODE",{});var ks=l(j);K=e(ks,"npx svelte-add@latest mdsvex"),ks.forEach(n),Q=e(f,". It creates a "),C=c(f,"CODE",{});var ds=l(C);U=e(ds,"mdsvex.config.js"),ds.forEach(n),V=e(f," file with this content:"),f.forEach(n),is.forEach(n),A=h(s),m=c(s,"PRE",{class:!0});var js=l(m);js.forEach(n),T=h(s),d=c(s,"P",{});var q=l(d);W=e(q,"The command also adds the preprocessor to "),O=c(q,"CODE",{});var fs=l(O);X=e(fs,"svelte.config.js"),fs.forEach(n),Y=e(q,":"),q.forEach(n),R=h(s),v=c(s,"PRE",{class:!0});var Cs=l(v);Cs.forEach(n),H=h(s),_=c(s,"OL",{start:!0});var ms=l(_);g=c(ms,"LI",{});var ps=l(g);Z=e(ps,"Run "),M=c(ps,"CODE",{});var vs=l(M);$=e(vs,"npm install"),vs.forEach(n),ps.forEach(n),ms.forEach(n),N=h(s),u=c(s,"P",{});var x=l(u);ss=e(x,"Now, if you have a blog post in "),S=c(x,"CODE",{});var _s=l(S);ns=e(_s,"src/routes/blog/a-post.md"),_s.forEach(n),as=e(x," (or "),D=c(x,"CODE",{});var xs=l(D);ts=e(xs,".svx"),xs.forEach(n),es=e(x,"), you will be able to access the generated version in "),P=c(x,"CODE",{});var ws=l(P);os=e(ws,"https://[your-site]/blog/a-post"),ws.forEach(n),x.forEach(n),this.h()},h(){cs(m,"class","language-js"),cs(v,"class","language-js"),cs(_,"start","2")},m(s,o){r(s,k,o),a(k,z),r(s,I,o),r(s,E,o),a(E,F),r(s,L,o),r(s,y,o),a(y,i),a(i,J),a(i,b),a(b,B),a(i,G),a(i,j),a(j,K),a(i,Q),a(i,C),a(C,U),a(i,V),r(s,A,o),r(s,m,o),m.innerHTML=gs,r(s,T,o),r(s,d,o),a(d,W),a(d,O),a(O,X),a(d,Y),r(s,R,o),r(s,v,o),v.innerHTML=bs,r(s,H,o),r(s,_,o),a(_,g),a(g,Z),a(g,M),a(M,$),r(s,N,o),r(s,u,o),a(u,ss),a(u,S),a(S,ns),a(u,as),a(u,D),a(D,ts),a(u,es),a(u,P),a(P,os)},p:ls,i:ls,o:ls,d(s){s&&n(k),s&&n(I),s&&n(E),s&&n(L),s&&n(y),s&&n(A),s&&n(m),s&&n(T),s&&n(d),s&&n(R),s&&n(v),s&&n(H),s&&n(_),s&&n(N),s&&n(u)}}}const hs={title:"Add Mdsvex"},{title:Es}=hs;class Ps extends Os{constructor(k){super();Ms(this,k,null,Ds,Ss,{})}}var Ls=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ps,metadata:hs});export{Ps as A,Ls as _,hs as m};