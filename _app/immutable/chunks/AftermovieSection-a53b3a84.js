import{S as G,i as W,s as N,k as I,e as A,a as C,C as Z,l as w,h as _,c as T,m as D,n as a,L as P,E as k,b as E,F as R,A as q,H as J,Y as x,D as V,Z as $,V as X,W as ee,v as K,w as Q,x as F,X as te,f as M,t as O,y as Y}from"./index-02d869aa.js";import{S as ie}from"./SectionHeader-6e6d2083.js";function z(l){let e,i,c,n,s,f,u;return{c(){e=I("link"),i=C(),c=I("link"),n=C(),s=I("link"),f=C(),u=I("link"),this.h()},l(t){e=w(t,"LINK",{rel:!0,href:!0}),i=T(t),c=w(t,"LINK",{rel:!0,href:!0}),n=T(t),s=w(t,"LINK",{rel:!0,href:!0}),f=T(t),u=w(t,"LINK",{rel:!0,href:!0}),this.h()},h(){a(e,"rel","preconnect"),a(e,"href",l[6]),a(c,"rel","preconnect"),a(c,"href","https://www.google.com"),a(s,"rel","preconnect"),a(s,"href","https://static.doubleclick.net"),a(u,"rel","preconnect"),a(u,"href","https://googleads.g.doubleclick.net")},m(t,h){E(t,e,h),E(t,i,h),E(t,c,h),E(t,n,h),E(t,s,h),E(t,f,h),E(t,u,h)},p(t,h){h&64&&a(e,"href",t[6])},d(t){t&&_(e),t&&_(i),t&&_(c),t&&_(n),t&&_(s),t&&_(f),t&&_(u)}}}function H(l){let e,i,c,n,s,f,u,t,h,y;return{c(){e=I("picture"),i=I("source"),n=C(),s=I("source"),u=C(),t=I("img"),this.h()},l(d){e=w(d,"PICTURE",{});var r=D(e);i=w(r,"SOURCE",{srcset:!0,type:!0}),n=T(r),s=w(r,"SOURCE",{src:!0,type:!0}),u=T(r),t=w(r,"IMG",{class:!0,src:!0,alt:!0,referrerpolicy:!0,loading:!0}),r.forEach(_),this.h()},h(){a(i,"srcset",c="https://i.ytimg.com/vi_webp/"+l[0]+"/"+l[3]+".webp"),a(i,"type","image/webp"),V(s.src,f="https://i.ytimg.com/vi/"+l[0]+"/"+l[3]+".jpg")||a(s,"src",f),a(s,"type","image/jpeg"),a(t,"class","lite-youtube-poster"),V(t.src,h="https://i.ytimg.com/vi/"+l[0]+"/"+l[3]+".jpg")||a(t,"src",h),a(t,"alt",y=l[1]+": "+l[2]),a(t,"referrerpolicy","origin"),a(t,"loading",l[4])},m(d,r){E(d,e,r),k(e,i),k(e,n),k(e,s),k(e,u),k(e,t)},p(d,r){r&9&&c!==(c="https://i.ytimg.com/vi_webp/"+d[0]+"/"+d[3]+".webp")&&a(i,"srcset",c),r&9&&!V(s.src,f="https://i.ytimg.com/vi/"+d[0]+"/"+d[3]+".jpg")&&a(s,"src",f),r&9&&!V(t.src,h="https://i.ytimg.com/vi/"+d[0]+"/"+d[3]+".jpg")&&a(t,"src",h),r&6&&y!==(y=d[1]+": "+d[2])&&a(t,"alt",y),r&16&&a(t,"loading",d[4])},d(d){d&&_(e)}}}function B(l){let e,i,c,n;return{c(){e=I("iframe"),this.h()},l(s){e=w(s,"IFRAME",{width:!0,height:!0,title:!0,allow:!0,src:!0}),D(e).forEach(_),this.h()},h(){a(e,"width","560"),a(e,"height","315"),a(e,"title",l[2]),a(e,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),e.allowFullscreen=!0,V(e.src,i=l[9])||a(e,"src",i)},m(s,f){E(s,e,f),l[13](e),c||(n=$(re.call(null,e)),c=!0)},p(s,f){f&4&&a(e,"title",s[2]),f&512&&!V(e.src,i=s[9])&&a(e,"src",i)},d(s){s&&_(e),l[13](null),c=!1,n()}}}function le(l){let e,i,c,n,s=l[0],f,u,t,h,y,d,r=l[8]&&z(l),b=H(l),v=l[7]&&B(l);return{c(){e=I("link"),r&&r.c(),i=A(),c=C(),n=I("div"),b.c(),f=C(),u=I("button"),h=C(),v&&v.c(),this.h()},l(m){const o=Z('[data-svelte="svelte-qh1hy1"]',document.head);e=w(o,"LINK",{rel:!0,href:!0}),r&&r.l(o),i=A(),o.forEach(_),c=T(m),n=w(m,"DIV",{class:!0});var g=D(n);b.l(g),f=T(g),u=w(g,"BUTTON",{type:!0,class:!0,"aria-label":!0}),D(u).forEach(_),h=T(g),v&&v.l(g),g.forEach(_),this.h()},h(){a(e,"rel","preconnect"),a(e,"href","https://i.ytimg.com"),a(u,"type","button"),a(u,"class","lite-youtube-playbtn"),a(u,"aria-label",t=l[1]+": "+l[2]),a(n,"class","lite-youtube"),P(n,"lite-youtube-activated",l[7])},m(m,o){k(document.head,e),r&&r.m(document.head,null),k(document.head,i),E(m,c,o),E(m,n,o),b.m(n,null),k(n,f),k(n,u),k(n,h),v&&v.m(n,null),y||(d=[R(n,"pointerover",l[14],{once:!0}),R(n,"click",l[15])],y=!0)},p(m,[o]){m[8]?r?r.p(m,o):(r=z(m),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null),o&1&&N(s,s=m[0])?(b.d(1),b=H(m),b.c(),b.m(n,f)):b.p(m,o),o&6&&t!==(t=m[1]+": "+m[2])&&a(u,"aria-label",t),m[7]?v?v.p(m,o):(v=B(m),v.c(),v.m(n,null)):v&&(v.d(1),v=null),o&128&&P(n,"lite-youtube-activated",m[7])},i:q,o:q,d(m){_(e),r&&r.d(m),_(i),m&&_(c),m&&_(n),b.d(m),v&&v.d(),y=!1,J(d)}}}function re(l){l.focus()}function se(l,e,i){let c,n,{videoId:s}=e,{videoPlay:f="Play"}=e,{videoTitle:u="Video"}=e,{params:t=""}=e,{posterQuality:h="hqdefault"}=e,{posterLoading:y="lazy"}=e,{noCookie:d=!0}=e,{playlistId:r=""}=e,b=!1,v=!1,m=x(),o;function g(p){X[p?"unshift":"push"](()=>{o=p,i(5,o)})}const L=()=>i(8,v=!0),S=()=>i(7,b=!0);return l.$$set=p=>{"videoId"in p&&i(0,s=p.videoId),"videoPlay"in p&&i(1,f=p.videoPlay),"videoTitle"in p&&i(2,u=p.videoTitle),"params"in p&&i(10,t=p.params),"posterQuality"in p&&i(3,h=p.posterQuality),"posterLoading"in p&&i(4,y=p.posterLoading),"noCookie"in p&&i(11,d=p.noCookie),"playlistId"in p&&i(12,r=p.playlistId)},l.$$.update=()=>{l.$$.dirty&4097&&i(7,b=!1),l.$$.dirty&2048&&i(6,c=d?"https://www.youtube-nocookie.com":"https://www.youtube.com"),l.$$.dirty&5185&&i(9,n=r?`${c}/embed/videoseries?autoplay=1&list=${encodeURIComponent(r)}&${t}`:`${c}/embed/${encodeURIComponent(s)}?autoplay=1&state=1&${t}`),l.$$.dirty&32&&o&&m("iframeLoaded",{iframe:o})},[s,f,u,h,y,o,c,b,v,n,t,d,r,g,L,S]}class ae extends G{constructor(e){super(),W(this,e,se,le,N,{videoId:0,videoPlay:1,videoTitle:2,params:10,posterQuality:3,posterLoading:4,noCookie:11,playlistId:12})}}function ne(l){let e,i,c,n,s,f,u,t,h,y,d,r,b;function v(o){l[2](o)}let m={};return l[0]!==void 0&&(m.name=l[0]),i=new ie({props:m}),X.push(()=>ee(i,"name",v)),r=new ae({props:{videoId:l[1],videoTitle:"Meraz 2022 Aftermovie",params:"enablejsapi=1",posterQuality:"sddefault",posterLoading:"eager"}}),r.$on("iframeLoaded",l[3]),{c(){e=I("div"),K(i.$$.fragment),n=C(),s=I("div"),f=I("div"),u=C(),t=I("div"),h=C(),y=I("div"),d=I("div"),K(r.$$.fragment),this.h()},l(o){e=w(o,"DIV",{class:!0});var g=D(e);Q(i.$$.fragment,g),n=T(g),s=w(g,"DIV",{class:!0});var L=D(s);f=w(L,"DIV",{class:!0});var S=D(f);S.forEach(_),u=T(L),t=w(L,"DIV",{class:!0});var p=D(t);p.forEach(_),h=T(L),y=w(L,"DIV",{class:!0});var U=D(y);d=w(U,"DIV",{class:!0});var j=D(d);Q(r.$$.fragment,j),j.forEach(_),U.forEach(_),L.forEach(_),g.forEach(_),this.h()},h(){a(f,"class","container-1 svelte-n3x6x3"),a(t,"class","container-2 svelte-n3x6x3"),a(d,"class","aftermv-content svelte-n3x6x3"),a(y,"class","container-3 svelte-n3x6x3"),a(s,"class","aftermv-content-holder svelte-n3x6x3"),a(e,"class","aftermv-main-container svelte-n3x6x3")},m(o,g){E(o,e,g),F(i,e,null),k(e,n),k(e,s),k(s,f),k(s,u),k(s,t),k(s,h),k(s,y),k(y,d),F(r,d,null),b=!0},p(o,[g]){const L={};!c&&g&1&&(c=!0,L.name=o[0],te(()=>c=!1)),i.$set(L);const S={};g&2&&(S.videoId=o[1]),r.$set(S)},i(o){b||(M(i.$$.fragment,o),M(r.$$.fragment,o),b=!0)},o(o){O(i.$$.fragment,o),O(r.$$.fragment,o),b=!1},d(o){o&&_(e),Y(i),Y(r)}}}function oe(l,e,i){let{vid:c=""}=e,{vhead:n=""}=e;function s(u){n=u,i(0,n)}const f=u=>console.log(u.detail.iframe);return l.$$set=u=>{"vid"in u&&i(1,c=u.vid),"vhead"in u&&i(0,n=u.vhead)},[n,c,s,f]}class fe extends G{constructor(e){super(),W(this,e,oe,ne,N,{vid:1,vhead:0})}}export{fe as A};
