(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,38439,e=>{"use strict";var t=e.i(43476);e.s(["default",0,function({label:e="Loading",accentColor:o="#33d6ff",inline:i=!1}){return(0,t.jsxs)("div",{style:{position:i?"relative":"fixed",inset:i?void 0:0,zIndex:i?void 0:200,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1.5rem",minHeight:i?"40vh":void 0,width:"100%",background:i?"transparent":"rgba(3,3,4,0.55)",backdropFilter:i?void 0:"blur(10px)",WebkitBackdropFilter:i?void 0:"blur(10px)",animation:"loadingFadeIn 0.25s ease-out"},children:[(0,t.jsxs)("div",{style:{position:"relative",width:"72px",height:"72px"},children:[(0,t.jsx)("div",{style:{position:"absolute",inset:0,borderRadius:"50%",border:`2px solid ${o}33`,boxShadow:`0 0 28px ${o}40`}}),[...Array(12)].map((e,i)=>(0,t.jsx)("div",{style:{position:"absolute",inset:0,transform:`rotate(${30*i}deg)`},children:(0,t.jsx)("div",{style:{position:"absolute",top:"4px",left:"50%",width:"2px",height:i%3==0?"8px":"4px",marginLeft:"-1px",background:`${o}55`,borderRadius:"2px"}})},i)),(0,t.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",width:"2.5px",height:"26px",marginLeft:"-1.25px",marginTop:"-26px",background:o,borderRadius:"2px",transformOrigin:"bottom center",animation:"clockHourHand 3s linear infinite",boxShadow:`0 0 10px ${o}`}}),(0,t.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",width:"2px",height:"20px",marginLeft:"-1px",marginTop:"-20px",background:o,borderRadius:"2px",transformOrigin:"bottom center",animation:"clockMinuteHand 1s linear infinite",boxShadow:`0 0 10px ${o}`}}),(0,t.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",width:"8px",height:"8px",marginLeft:"-4px",marginTop:"-4px",borderRadius:"50%",background:o,boxShadow:`0 0 12px ${o}`}})]}),(0,t.jsxs)("p",{style:{fontFamily:"var(--font-display), sans-serif",fontSize:"0.85rem",fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:o,textShadow:`0 0 20px ${o}80`},children:[e,(0,t.jsx)("span",{className:"loading-dots"})]}),(0,t.jsx)("style",{children:`
        @keyframes loadingFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes clockHourHand {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes clockMinuteHand {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .loading-dots::after {
          display: inline-block;
          width: 1.4em;
          text-align: left;
          content: "";
          animation: loadingDotsText 1.2s steps(4, end) infinite;
        }
        @keyframes loadingDotsText {
          0% { content: ""; }
          25% { content: "."; }
          50% { content: ".."; }
          75% { content: "..."; }
          100% { content: ""; }
        }
      `})]})}])},84375,e=>{"use strict";var t=e.i(43476),o=e.i(71645),i=e.i(38439);e.s(["default",0,function({loading:e,label:a="Loading",accentColor:r="#33d6ff"}){let[s,n]=(0,o.useState)(e);return((0,o.useEffect)(()=>{if(e)return;let t=setTimeout(()=>n(!1),400);return()=>clearTimeout(t)},[e]),s)?(0,t.jsxs)("div",{style:{position:"fixed",inset:0,zIndex:200,opacity:+!!e,transition:"opacity 0.4s ease-out",pointerEvents:e?"auto":"none",overflow:"hidden",background:"#030304"},children:[(0,t.jsxs)("video",{className:"fetch-intro-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:[(0,t.jsx)("source",{src:"/intro.webm",type:"video/webm"}),(0,t.jsx)("source",{src:"/intro.mp4",type:"video/mp4"})]}),(0,t.jsx)("div",{style:{position:"absolute",inset:0,background:"rgba(3,3,4,0.45)"}}),(0,t.jsx)(i.default,{label:a,accentColor:r}),(0,t.jsx)("style",{children:`
        .fetch-intro-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(8px) brightness(0.55);
          transform: scale(1.05);
        }
        @media (max-width: 640px) {
          .fetch-intro-video {
            object-fit: contain;
            transform: none;
          }
        }
      `})]}):null}])},63676,e=>{"use strict";let t=(0,e.i(56420).default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",0,t],63676)},34302,e=>{"use strict";let t=["#33d6ff","#a855f7","#f59e0b","#10b981","#ec4899","#6366f1"];e.s(["groupBySection",0,function(e){let o=[],i=new Map;return e.forEach(e=>{let t=e.section||"Other";i.has(t)||(i.set(t,[]),o.push(t)),i.get(t).push(e)}),o.map((e,o)=>({section:e,color:i.get(e)[0]?.sectionColor||t[o%t.length],cards:i.get(e)}))}])},94371,97142,67927,e=>{"use strict";var t=e.i(56420);let o=(0,t.default)("rocket",[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]]);e.s(["Rocket",0,o],94371);let i=(0,t.default)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);e.s(["Cpu",0,i],97142);let a=(0,t.default)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);e.s(["ChevronRight",0,a],67927)},28623,e=>{"use strict";let t=(0,e.i(56420).default)("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);e.s(["Sparkles",0,t],28623)},50423,e=>{"use strict";var t=e.i(65464);let o={limited_drop:{badge_label:"Limited drop",heading:"Get official Space Merch",description:"Hoodie-style kit for Conscientia 2026 — limited run, ships to your door.",price:"₹599",link:"/online-workshops",image_front:"/assets/wsfront.png",image_back:"/assets/wsback.png",accent_color:"#33d6ff",secondary_color:"#a855f7"},exclusive:{badge_label:"Exclusive",heading:"Space Merch",description:"Official Conscientia 2026 kit — add at checkout",price:"₹599",link:"/online-workshops",image_front:"/assets/wsfront.png",image_back:"/assets/wsback.png",accent_color:"#33d6ff",secondary_color:"#a855f7"}},i=o.limited_drop;async function a(e="limited_drop"){let i=o[e]||o.limited_drop,{data:r,error:s}=await t.supabase.from("promo_settings").select("*").eq("id",e).maybeSingle();return s?(console.error("[promoStore] getPromo",s),i):r?{...i,...r}:i}async function r(){let{data:e,error:i}=await t.supabase.from("promo_settings").select("*").in("id",["limited_drop","exclusive"]);if(i)return console.error("[promoStore] getPromos",i),o;let a=Object.fromEntries((e||[]).map(e=>[e.id,e]));return{limited_drop:{...o.limited_drop,...a.limited_drop||{}},exclusive:{...o.exclusive,...a.exclusive||{}}}}e.s(["DEFAULT_PROMO",0,i,"DEFAULT_PROMOS",0,o,"getPromo",0,a,"getPromos",0,r])}]);