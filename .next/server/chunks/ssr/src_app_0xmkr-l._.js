module.exports=[40,a=>{"use strict";var b=a.i(87924);a.s(["default",0,function({label:a="Loading",accentColor:c="#33d6ff",inline:d=!1}){return(0,b.jsxs)("div",{style:{position:d?"relative":"fixed",inset:d?void 0:0,zIndex:d?void 0:200,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1.5rem",minHeight:d?"40vh":void 0,width:"100%",background:d?"transparent":"rgba(3,3,4,0.55)",backdropFilter:d?void 0:"blur(10px)",WebkitBackdropFilter:d?void 0:"blur(10px)",animation:"loadingFadeIn 0.25s ease-out"},children:[(0,b.jsxs)("div",{style:{position:"relative",width:"72px",height:"72px"},children:[(0,b.jsx)("div",{style:{position:"absolute",inset:0,borderRadius:"50%",border:`2px solid ${c}33`,boxShadow:`0 0 28px ${c}40`}}),[...Array(12)].map((a,d)=>(0,b.jsx)("div",{style:{position:"absolute",inset:0,transform:`rotate(${30*d}deg)`},children:(0,b.jsx)("div",{style:{position:"absolute",top:"4px",left:"50%",width:"2px",height:d%3==0?"8px":"4px",marginLeft:"-1px",background:`${c}55`,borderRadius:"2px"}})},d)),(0,b.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",width:"2.5px",height:"26px",marginLeft:"-1.25px",marginTop:"-26px",background:c,borderRadius:"2px",transformOrigin:"bottom center",animation:"clockHourHand 3s linear infinite",boxShadow:`0 0 10px ${c}`}}),(0,b.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",width:"2px",height:"20px",marginLeft:"-1px",marginTop:"-20px",background:c,borderRadius:"2px",transformOrigin:"bottom center",animation:"clockMinuteHand 1s linear infinite",boxShadow:`0 0 10px ${c}`}}),(0,b.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",width:"8px",height:"8px",marginLeft:"-4px",marginTop:"-4px",borderRadius:"50%",background:c,boxShadow:`0 0 12px ${c}`}})]}),(0,b.jsxs)("p",{style:{fontFamily:"var(--font-display), sans-serif",fontSize:"0.85rem",fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:c,textShadow:`0 0 20px ${c}80`},children:[a,(0,b.jsx)("span",{className:"loading-dots"})]}),(0,b.jsx)("style",{children:`
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
      `})]}):null}])},60932,a=>{"use strict";var b=a.i(72131);let c=null,d=new Map,e=new Map;function f(){return c||(c=new AudioContext),"suspended"===c.state&&c.resume().catch(()=>{}),c}if("u">typeof document){let a=()=>f();["pointerdown","keydown","touchstart","mousedown"].forEach(b=>document.addEventListener(b,a,{once:!0,passive:!0}))}a.s(["default",0,function(a,c=.3,g,h=!1){return(0,b.useCallback)(()=>{try{let b=f();"suspended"===b.state&&b.resume();let i=d=>{if(h){let b=e.get(a);if(b){try{b.stop()}catch{}e.delete(a)}}let f=b.createBufferSource(),i=b.createGain();f.buffer=d,i.gain.value=Math.max(0,Math.min(1,c)),f.connect(i).connect(b.destination),f.start(0,0,g),h&&(e.set(a,f),f.onended=()=>{e.get(a)===f&&e.delete(a)})},j=d.get(a);j?i(j):fetch(a).then(a=>a.arrayBuffer()).then(a=>b.decodeAudioData(a)).then(b=>{d.set(a,b),i(b)}).catch(()=>{})}catch{}},[a,c,g,h])}])},58012,a=>{"use strict";var b=a.i(72131);a.s(["default",0,function(){let[a]=(0,b.useState)(()=>!1);return a}])},1148,a=>{"use strict";var b=a.i(72131);let c=null;a.s(["default",0,function(){let[a,d]=(0,b.useState)({});return(0,b.useEffect)(()=>{let a=!1;return(!c&&(c=fetch("/api/capacity").then(a=>a.json()).then(a=>a?.counts||{}).catch(()=>({}))),c).then(b=>{a||d(b)}),()=>{a=!0}},[]),{counts:a,remaining:b=>{if(!b||"number"!=typeof b.Seats)return 1/0;let c=a[b.id]||0;return b.Seats-c}}}])},88305,a=>{"use strict";var b=a.i(87924),c=a.i(72131);function d(){return 7776e5-Date.now()%7776e5}function e(a){return String(a).padStart(2,"0")}a.s(["default",0,function({className:a,label:f="Offer ends in"}){let[g,h]=(0,c.useState)(null);if((0,c.useEffect)(()=>{h(d());let a=setInterval(()=>h(d()),1e3);return()=>clearInterval(a)},[]),null===g)return null;let i=Math.floor(g/864e5),j=Math.floor(g%864e5/36e5),k=Math.floor(g%36e5/6e4),l=Math.floor(g%6e4/1e3);return(0,b.jsxs)("div",{className:a,children:[f&&(0,b.jsx)("span",{className:"mr-1.5 text-white/40 uppercase tracking-[0.15em]",children:f}),(0,b.jsxs)("span",{className:"font-mono tabular-nums",children:[i,"d ",e(j),":",e(k),":",e(l)]})]})}])},97192,a=>{"use strict";var b=a.i(87924),c=a.i(38246),d=a.i(62036),e=a.i(46271),f=a.i(71549);a.s(["default",0,function({open:a,onClose:g}){return(0,f.default)(a),(0,b.jsx)(d.AnimatePresence,{children:a&&(0,b.jsx)(e.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/75 p-4 pt-24 backdrop-blur-sm sm:p-6 sm:pt-24 lg:pt-28",onClick:g,children:(0,b.jsxs)(e.motion.div,{initial:{opacity:0,y:24,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:12,scale:.97},transition:{duration:.35,ease:[.23,1,.32,1]},onClick:a=>a.stopPropagation(),className:"w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0c10] p-5 sm:p-7",children:[(0,b.jsx)("p",{className:"font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-400/90 mb-2",children:"Almost There"}),(0,b.jsx)("h2",{className:"mb-3 text-xl font-bold text-white sm:text-2xl",children:"Add Your Teammates"}),(0,b.jsx)("p",{className:"mb-6 text-sm text-white/60",children:"This event/workshop needs your teammates' CNS-ids before your team is complete. Head over to your profile page to add them."}),(0,b.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row",children:[(0,b.jsx)("button",{type:"button",onClick:g,className:"flex-1 rounded-full border border-white/15 px-6 py-2.5 text-center text-[10px] font-black uppercase tracking-[0.2em] text-white/70 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors",children:"Not Now"}),(0,b.jsx)(c.default,{href:"/profile",onClick:g,className:"flex-1 rounded-full bg-cyan-400 px-6 py-2.5 text-center text-[10px] font-black uppercase tracking-[0.2em] text-black hover:bg-white transition-colors",children:"Go to Profile"})]})]})})})}])}];

//# sourceMappingURL=src_app_0xmkr-l._.js.map