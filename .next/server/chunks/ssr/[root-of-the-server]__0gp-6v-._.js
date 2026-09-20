module.exports=[24361,(a,b,c)=>{b.exports=a.x("util",()=>require("util"))},40,a=>{"use strict";var b=a.i(87924);a.s(["default",0,function({label:a="Loading",accentColor:c="#33d6ff",inline:d=!1}){return(0,b.jsxs)("div",{style:{position:d?"relative":"fixed",inset:d?void 0:0,zIndex:d?void 0:200,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1.5rem",minHeight:d?"40vh":void 0,width:"100%",background:d?"transparent":"rgba(3,3,4,0.55)",backdropFilter:d?void 0:"blur(10px)",WebkitBackdropFilter:d?void 0:"blur(10px)",animation:"loadingFadeIn 0.25s ease-out"},children:[(0,b.jsxs)("div",{style:{position:"relative",width:"72px",height:"72px"},children:[(0,b.jsx)("div",{style:{position:"absolute",inset:0,borderRadius:"50%",border:`2px solid ${c}33`,boxShadow:`0 0 28px ${c}40`}}),[...Array(12)].map((a,d)=>(0,b.jsx)("div",{style:{position:"absolute",inset:0,transform:`rotate(${30*d}deg)`},children:(0,b.jsx)("div",{style:{position:"absolute",top:"4px",left:"50%",width:"2px",height:d%3==0?"8px":"4px",marginLeft:"-1px",background:`${c}55`,borderRadius:"2px"}})},d)),(0,b.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",width:"2.5px",height:"26px",marginLeft:"-1.25px",marginTop:"-26px",background:c,borderRadius:"2px",transformOrigin:"bottom center",animation:"clockHourHand 3s linear infinite",boxShadow:`0 0 10px ${c}`}}),(0,b.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",width:"2px",height:"20px",marginLeft:"-1px",marginTop:"-20px",background:c,borderRadius:"2px",transformOrigin:"bottom center",animation:"clockMinuteHand 1s linear infinite",boxShadow:`0 0 10px ${c}`}}),(0,b.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",width:"8px",height:"8px",marginLeft:"-4px",marginTop:"-4px",borderRadius:"50%",background:c,boxShadow:`0 0 12px ${c}`}})]}),(0,b.jsxs)("p",{style:{fontFamily:"var(--font-display), sans-serif",fontSize:"0.85rem",fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:c,textShadow:`0 0 20px ${c}80`},children:[a,(0,b.jsx)("span",{className:"loading-dots"})]}),(0,b.jsx)("style",{children:`
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
      `})]})}])},43095,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(40);a.s(["default",0,function({loading:a,label:e="Loading",accentColor:f="#33d6ff"}){let[g,h]=(0,c.useState)(a);return((0,c.useEffect)(()=>{if(a)return;let b=setTimeout(()=>h(!1),400);return()=>clearTimeout(b)},[a]),g)?(0,b.jsxs)("div",{style:{position:"fixed",inset:0,zIndex:200,opacity:+!!a,transition:"opacity 0.4s ease-out",pointerEvents:a?"auto":"none",overflow:"hidden",background:"#030304"},children:[(0,b.jsxs)("video",{className:"fetch-intro-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",children:[(0,b.jsx)("source",{src:"/intro.webm",type:"video/webm"}),(0,b.jsx)("source",{src:"/intro.mp4",type:"video/mp4"})]}),(0,b.jsx)("div",{style:{position:"absolute",inset:0,background:"rgba(3,3,4,0.45)"}}),(0,b.jsx)(d.default,{label:e,accentColor:f}),(0,b.jsx)("style",{children:`
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
      `})]}):null}])},74215,a=>{"use strict";let b=(0,a.i(64831).default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);a.s(["X",0,b],74215)},22734,(a,b,c)=>{b.exports=a.x("fs",()=>require("fs"))},88947,(a,b,c)=>{b.exports=a.x("stream",()=>require("stream"))},6461,(a,b,c)=>{b.exports=a.x("zlib",()=>require("zlib"))},49719,(a,b,c)=>{b.exports=a.x("assert",()=>require("assert"))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0gp-6v-._.js.map