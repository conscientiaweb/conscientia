(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,38439,t=>{"use strict";var e=t.i(43476);t.s(["default",0,function({label:t="Loading",accentColor:i="#33d6ff",inline:o=!1}){return(0,e.jsxs)("div",{style:{position:o?"relative":"fixed",inset:o?void 0:0,zIndex:o?void 0:200,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1.5rem",minHeight:o?"40vh":void 0,width:"100%",background:o?"transparent":"rgba(3,3,4,0.55)",backdropFilter:o?void 0:"blur(10px)",WebkitBackdropFilter:o?void 0:"blur(10px)",animation:"loadingFadeIn 0.25s ease-out"},children:[(0,e.jsxs)("div",{style:{position:"relative",width:"72px",height:"72px"},children:[(0,e.jsx)("div",{style:{position:"absolute",inset:0,borderRadius:"50%",border:`2px solid ${i}33`,boxShadow:`0 0 28px ${i}40`}}),[...Array(12)].map((t,o)=>(0,e.jsx)("div",{style:{position:"absolute",inset:0,transform:`rotate(${30*o}deg)`},children:(0,e.jsx)("div",{style:{position:"absolute",top:"4px",left:"50%",width:"2px",height:o%3==0?"8px":"4px",marginLeft:"-1px",background:`${i}55`,borderRadius:"2px"}})},o)),(0,e.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",width:"2.5px",height:"26px",marginLeft:"-1.25px",marginTop:"-26px",background:i,borderRadius:"2px",transformOrigin:"bottom center",animation:"clockHourHand 3s linear infinite",boxShadow:`0 0 10px ${i}`}}),(0,e.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",width:"2px",height:"20px",marginLeft:"-1px",marginTop:"-20px",background:i,borderRadius:"2px",transformOrigin:"bottom center",animation:"clockMinuteHand 1s linear infinite",boxShadow:`0 0 10px ${i}`}}),(0,e.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",width:"8px",height:"8px",marginLeft:"-4px",marginTop:"-4px",borderRadius:"50%",background:i,boxShadow:`0 0 12px ${i}`}})]}),(0,e.jsxs)("p",{style:{fontFamily:"var(--font-display), sans-serif",fontSize:"0.85rem",fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:i,textShadow:`0 0 20px ${i}80`},children:[t,(0,e.jsx)("span",{className:"loading-dots"})]}),(0,e.jsx)("style",{children:`
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
      `})]})}])},84375,t=>{"use strict";var e=t.i(43476),i=t.i(71645),o=t.i(38439);t.s(["default",0,function({loading:t,label:n="Loading",accentColor:r="#33d6ff"}){let[s,a]=(0,i.useState)(t);return((0,i.useEffect)(()=>{if(t)return;let e=setTimeout(()=>a(!1),400);return()=>clearTimeout(e)},[t]),s)?(0,e.jsxs)("div",{style:{position:"fixed",inset:0,zIndex:200,opacity:+!!t,transition:"opacity 0.4s ease-out",pointerEvents:t?"auto":"none",overflow:"hidden",background:"#030304"},children:[(0,e.jsxs)("video",{className:"fetch-intro-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:[(0,e.jsx)("source",{src:"/intro.webm",type:"video/webm"}),(0,e.jsx)("source",{src:"/intro.mp4",type:"video/mp4"})]}),(0,e.jsx)("div",{style:{position:"absolute",inset:0,background:"rgba(3,3,4,0.45)"}}),(0,e.jsx)(o.default,{label:n,accentColor:r}),(0,e.jsx)("style",{children:`
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
      `})]}):null}])},63676,t=>{"use strict";let e=(0,t.i(56420).default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);t.s(["X",0,e],63676)}]);