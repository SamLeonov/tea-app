(this["webpackJsonptea-app"]=this["webpackJsonptea-app"]||[]).push([[0],{20:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),r=i(13),a=i.n(r),c=i(5),j=(i(20),i.p,i(0)),b=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{id:"intro",children:[Object(j.jsx)("div",{children:"Welcome to Gongfu Guide!"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:"This is a web app created to help you with gongfu tea brewing"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:"Please pick the tea you would like to brew below: "}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("div",{children:Object(j.jsxs)(c.b,{to:"/white",children:["White tea",Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:"./images/white.jpg",alt:"white tea",width:"320",height:"256"})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(c.b,{to:"/green",children:["Green tea",Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:"./images/green.jpg",alt:"green tea",width:"320",height:"256"})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(c.b,{to:"/oolong",children:["Oolong tea",Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:"./images/oolong.jpg",alt:"oolong tea",width:"320",height:"256"})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(c.b,{to:"/red",children:["Red tea",Object(j.jsx)("br",{})," ",Object(j.jsx)("img",{src:"./images/red.jpg",alt:"red tea",width:"320",height:"256"})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(c.b,{to:"/shou",children:["Shou pu erh",Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:"./images/shou.jpg",alt:"shou pu erh tea",width:"320",height:"256"})]})}),Object(j.jsxs)("div",{children:[" ",Object(j.jsxs)(c.b,{to:"/shen",children:["Sheng pu erh",Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:"./images/shen.jpg",alt:"shen pu erh tea",width:"320",height:"256"})]})]})]})]})},o=i(2),h=(i(7),i(30),i(6)),d=(i(31),function(e){var t=e.startTime,i=e.incTime,n=e.infusions,r=Object(s.useState)(t),a=Object(h.a)(r,2),c=a[0],b=a[1],o=Object(s.useState)(n),d=Object(h.a)(o,2),l=d[0],x=d[1],O=Object(s.useState)(""),u=Object(h.a)(O,2),g=u[0],m=u[1],p=Object(s.useState)(""),f=Object(h.a)(p,2),w=f[0],v=f[1],y=Object(s.useState)("visible"),T=Object(h.a)(y,2),k=T[0],q=T[1],C=Object(s.useState)("hidden"),S=Object(h.a)(C,2),z=S[0],I=S[1],F=function(e){v(e)};return Object(j.jsxs)("div",{style:{textAlign:"center"},children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{class:"desc",children:[Object(j.jsxs)("div",{children:["Number of infusions: ",n]}),Object(j.jsxs)("div",{children:["First infusion time: ",t/1e3," seconds"]}),Object(j.jsxs)("div",{children:["Time increase with each infusion: ",i/1e3," seconds"]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{style:{visibility:k},onClick:function(){I("visible"),m("Done!"),F("Put the tea in the gaiwan and pour in some hot water,then press the button when you are done."),q("hidden")},children:"Brew!"}),Object(j.jsx)("div",{class:"desc",children:w}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{style:{visibility:z},onClick:function(){m("Waiting..."),l>0&&(F("Feel the zen while the tea steeps :)"),setTimeout((function(){F("Pour tea into the Cha Hai and pour some hot water back into the gaiwan, then press the button when you are done."),m("Done!"),x(l-1)}),c),b(c+i))},children:g}),Object(j.jsxs)("div",{class:"desc",children:["Infusions left: ",l]})]})}),l=function(){return Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)("img",{src:"./images/white.jpg",alt:"white tea",width:"960",height:"520"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"main",children:["Oxidation: very low",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Taste: bitter, flowery, delicate",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Cha qi: 9/10",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"White tea is a very slightly oxidized tea, made from the very first leaves and buds to appear on the tea bush. It has a very delicate taste, yet a strong cha qi. "]}),Object(j.jsx)(d,{startTime:2e4,incTime:1e4,infusions:5})]})},x=function(){return Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)("img",{src:"./images/green.jpg",style:{borderRadius:"50%"},alt:"green tea",width:"700",height:"520"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"main",children:["Oxidation: minimal",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Taste: fresh, bitter, grass-like",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Cha qi: 5/10",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"A minimally oxidized tea,green tea is steamed and dried immediately after it is harvested. It is very easy to brew both gong-fu and western style and is high in caffeine."]}),Object(j.jsx)(d,{startTime:15e3,incTime:3e3,infusions:5})]})},O=function(){return Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)("img",{src:"./images/oolong.jpg",alt:"oolong tea",width:"960",height:"520"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"main",children:["Oxidation: low to high, but never fully oxidized or unoxidized",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Taste: very different, depends on preparation",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Cha qi: 8/10",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Oolong is an umbrella term for different teas, with the level of oxidation varying from 8% (green oolongs) to 85% (dark roasted oolongs). This is the most popular kind of chinese tea, with leaves manually cut and rolled in a very specific way to maintain the required level of oxdiation. These teas often have the most unique and special tastes and a very strong and pleasant Cha Qi."]}),Object(j.jsx)(d,{startTime:2e4,incTime:5e3,infusions:9})]})},u=function(){return Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)("img",{style:{borderRadius:"50%"},src:"./images/red.jpg",alt:"red tea",width:"960",height:"520"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"main",children:["Oxidation: full",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Taste: thick, sweet, citrus",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Cha qi:6/10",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"The fully oxidized red(known as black in the west) tea, is made by harvesting tea leaves, intentionally damaging them by rolling and/or cutting them, making them oxidize(just like a cut apple) and then left to wither, removing the bitterness from the tea and bringing out a sweet, fruity and bold taste."]}),Object(j.jsx)(d,{startTime:15e3,incTime:5e3,infusions:8})]})},g=function(){return Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)("img",{style:{borderRadius:"50%"},src:"./images/shou.jpg",alt:"shou pu erh tea",width:"960",height:"520"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"main",children:["Fermentation: artificial (wo dui)",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Taste: earth, wood, berries",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Cha qi: 7/10",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),'Shou pu erh was invented in the 1980s by the famous Menghai Da Yi tea factory, it is a pu erh, artificially fermented during the process of "wo dui"(wet pile). It was invented to become a quicker and cheaper alternative to aged sheng pu erh, which could take decades to fully ferment, and shou pu erh definitely lived up to the expectations, quickly becoming one of the most popular and sought after teas. This tea has great health benefits, improving digestion, blood pressure, reducing stress and anxiety, helps with hangovers, gives a great energy boost and of course tastes really good.']}),Object(j.jsx)(d,{startTime:1e4,incTime:5e3,infusions:20})]})},m=function(){return Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)("img",{src:"./images/shen.jpg",alt:"shen pu erh tea",width:"740",height:"520"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"main",children:["Fermentation: natural",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Taste: bitter in young shengs, fruity, apples and flowers",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Cha qi: 10/10",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Sheng puerh is the naturally fermented type of puerh, a very complex tea, both in making and in brewing. This tea is withered, fried, rolled, pressed together and left to ferment in a wet climate, as the microbes slowly change it into a very mellow tea with a unique taste and a  very strong Qi. Aged sheng is the most expensive, rare, sought-after tea with the best taste and Cha Qi."]}),Object(j.jsx)(d,{startTime:1e4,incTime:3e3,infusions:15})]})},p=function(){return Object(j.jsx)(c.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:b}),Object(j.jsx)(o.a,{exact:!0,path:"/white",component:l}),Object(j.jsx)(o.a,{exact:!0,path:"/green",component:x}),Object(j.jsx)(o.a,{exact:!0,path:"/oolong",component:O}),Object(j.jsx)(o.a,{exact:!0,path:"/red",component:u}),Object(j.jsx)(o.a,{exact:!0,path:"/shou",component:g}),Object(j.jsx)(o.a,{exact:!0,path:"/shen",component:m})]})})};i(32);a.a.render(Object(j.jsx)(c.a,{children:Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})})}),document.getElementById("root"))},7:function(e,t,i){}},[[33,1,2]]]);
//# sourceMappingURL=main.f9553336.chunk.js.map