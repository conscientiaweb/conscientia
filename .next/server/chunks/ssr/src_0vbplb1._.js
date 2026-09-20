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
      `})]}):null}])},34456,a=>{"use strict";function b(a,c=[]){if(!a||"object"!=typeof a)return"";let d=a=>"string"==typeof a&&(a.startsWith("https://")||a.startsWith("http://"))&&a.length>10;for(let b of[a.url_to_redirect,a.urlToRedirect,a.redirect_url,a.payment_url,a.checkout_url,a.pay_url,a.payment?.url_to_redirect,a.payment?.payment_url,a.payment?.url,a.booking?.payment?.url_to_redirect,a.booking?.payment_url])if(d(b))return b;if(Array.isArray(a.bookings))for(let b of a.bookings){let a=b?.payment?.url_to_redirect||b?.payment_url||b?.url_to_redirect;if(d(a))return a}let e=/url|link|redirect/i,f=/callback/i,g=new Set,h=[a];for(;h.length;){let a=h.pop();if(!(!a||"object"!=typeof a||g.has(a)))for(let[b,i]of(g.add(a),Object.entries(a))){if("string"==typeof i&&e.test(b)&&!f.test(b)&&!c.includes(i)&&d(i))return i;i&&"object"==typeof i&&h.push(i)}}return""}async function c(a,c){let d=`${window.location.origin}/payment-success`,e=a.map(a=>{let b;return{first_name:c.name,email:c.email,phone_number:c.phone,ticket:a.ticketId,quantity:a.qty||1,meta_data:(b={internal_id:a.id,workshop_ids:a.id,catalog_kind:a.kind,qty:a.qty||1,item_dates:a.details?.dates?JSON.stringify(a.details.dates):""},{name:c.name,email:c.email,phone:c.phone,college:c.college||"",city:c.city||"",gender:c.gender||"",user_id:c.userId||"",is_new_registration:"true",...b})}}),f=e.length>1?{bookings:e,callback_url:d}:{...e[0],callback_url:d},g=await fetch("/api/tiqr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}),h=await g.json().catch(()=>({}));if(!g.ok)throw Error(h?.message||h?.detail||"We could not start payment. Please try again.");let i=b(h,[d]),j=h.booking?.uid||h.uid||"",k="confirmed"===String(h.booking?.status||h.status||"").toLowerCase();if(!i&&!k)throw console.error("[TiQR] no checkout link found in response",h),Error("Payment started but no checkout link was returned. Please try again.");window.localStorage.setItem("registration_email",c.email),window.localStorage.setItem("selected_workshops",JSON.stringify(a.map(a=>a.id))),window.localStorage.setItem("selected_workshops_meta",JSON.stringify(a.map(a=>({id:a.id,kind:a.kind,title:a.title||"",qty:a.qty||1,unitPrice:a.unitPrice??null,dates:a.details?.dates||[]})))),window.localStorage.setItem("registration_details",JSON.stringify(c)),window.localStorage.setItem("tiqr_booking_uid",j||""),window.location.href=i||`${window.location.origin}/payment-success?uid=${encodeURIComponent(j)}`}a.s(["CHECKOUT_STORAGE_KEYS",0,["registration_email","selected_workshops","selected_workshops_meta","registration_details","tiqr_booking_uid"],"pickTiqrPaymentUrl",0,b,"startTiqrCheckout",0,c])},48112,a=>{"use strict";var b=a.i(34456);async function c(a,c){let d=a.reduce((a,b)=>a+(b.unitPrice||0)*(b.qty||1),0),e={email:c.email,name:c.name,phone:c.phone,user_id:c.userId||null,items:a.map(a=>({stall_id:a.stallId,item_id:a.id,name:a.name,qty:a.qty||1,price:a.unitPrice})),amount:d};if(0===d){let a=`free-${crypto.randomUUID()}`,b=await fetch("/api/save-foodfest-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tiqr_booking_uid:a,order:e,free:!0})}),c=await b.json().catch(()=>({}));if(!b.ok||!c.success)throw Error(c?.message||"Could not place your free order. Please try again.");return{free:!0}}let f=`${window.location.origin}/foodfest/payment-success`,g=a.map(a=>({first_name:c.name,email:c.email,phone_number:c.phone,ticket:a.ticketId,quantity:a.qty||1,meta_data:{name:c.name,email:c.email,phone:c.phone,user_id:c.userId||null,stall_id:a.stallId,item_id:a.id,item_name:a.name}})),h=g.length>1?{bookings:g,callback_url:f}:{...g[0],callback_url:f},i=await fetch("/api/tiqr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}),j=await i.json().catch(()=>({}));if(!i.ok)throw Error(j?.message||j?.detail||"We could not start payment. Please try again.");let k=(0,b.pickTiqrPaymentUrl)(j,[f]),l=g.length>1?j.uid:j.booking?.uid||j.uid||"",m=g.length>1?Array.isArray(j.bookings)&&j.bookings.length>0&&j.bookings.every(a=>"confirmed"===String(a?.status||"").toLowerCase()):"confirmed"===String(j.booking?.status||j.status||"").toLowerCase();if(!k&&!m)throw console.error("[Foodfest TiQR] no checkout link found in response",j),Error("Payment started but no checkout link was returned. Please try again.");window.localStorage.setItem("foodfest_pending_order",JSON.stringify(e)),window.localStorage.setItem("foodfest_tiqr_booking_uid",l||""),window.location.href=k||`${window.location.origin}/foodfest/payment-success?uid=${encodeURIComponent(l)}`}a.s(["FOODFEST_STORAGE_KEYS",0,["foodfest_pending_order","foodfest_tiqr_booking_uid"],"startFoodfestCheckout",0,c])}];

//# sourceMappingURL=src_0vbplb1._.js.map