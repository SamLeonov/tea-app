(this["webpackJsonptea-app"]=this["webpackJsonptea-app"]||[]).push([[0],{21:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),r=i(14),a=i.n(r),c=i(6),j=(i(21),i.p,i(0)),b=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{id:"intro",children:[Object(j.jsx)("div",{children:"Welcome to Gongfu Guide!"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:"This is a web app created to help you with gongfu tea brewing"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:"Please pick the tea you would like to brew below: "}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("div",{children:Object(j.jsxs)(c.b,{to:"/white",children:["White tea",Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:"./images/white.jpg",alt:"white tea",width:"320",height:"256"})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(c.b,{to:"/green",children:["Green tea",Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:"./images/green.jpg",alt:"green tea",width:"320",height:"256"})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(c.b,{to:"/oolong",children:["Oolong tea",Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:"./images/oolong.jpg",alt:"oolong tea",width:"320",height:"256"})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(c.b,{to:"/red",children:["Red tea",Object(j.jsx)("br",{})," ",Object(j.jsx)("img",{src:"./images/red.jpg",alt:"red tea",width:"320",height:"256"})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(c.b,{to:"/shou",children:["Shou pu erh",Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:"./images/shou.jpg",alt:"shou pu erh tea",width:"320",height:"256"})]})}),Object(j.jsxs)("div",{children:[" ",Object(j.jsxs)(c.b,{to:"/shen",children:["Sheng pu erh",Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:"./images/shen.jpg",alt:"shen pu erh tea",width:"320",height:"256"})]})]})]})]})},o=i(2),h=(i(8),i(31),i(7)),d=(i(32),function(e){var t=e.startTime,i=e.incTime,n=e.infusions,r=Object(s.useState)(t),a=Object(h.a)(r,2),c=a[0],b=a[1],o=Object(s.useState)(n),d=Object(h.a)(o,2),l=d[0],O=d[1],x=Object(s.useState)(""),u=Object(h.a)(x,2),g=u[0],m=u[1],p=Object(s.useState)(""),f=Object(h.a)(p,2),v=f[0],w=f[1],y=Object(s.useState)("visible"),T=Object(h.a)(y,2),k=T[0],q=T[1],C=Object(s.useState)("hidden"),S=Object(h.a)(C,2),A=S[0],z=S[1],I=function(e){w(e)};return Object(j.jsxs)("div",{style:{textAlign:"center"},children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{class:"desc",children:[Object(j.jsxs)("div",{children:["Number of infusions: ",n]}),Object(j.jsxs)("div",{children:["First infusion time: ",t/1e3," seconds"]}),Object(j.jsxs)("div",{children:["Time increase with each infusion: ",i/1e3," seconds"]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{style:{visibility:k},onClick:function(){z("visible"),m("Done!"),I("Put the tea in the gaiwan and pour in some hot water,then press the button when you are done."),q("hidden")},children:"Brew!"}),Object(j.jsx)("div",{class:"desc",children:v}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{style:{visibility:A},onClick:function(){m("Waiting..."),l>0&&(I("Feel the zen while the tea steeps :)"),setTimeout((function(){I("Pour tea into the Cha Hai and pour some hot water back into the gaiwan, then press the button when you are done."),m("Done!"),O(l-1)}),c),b(c+i))},children:g}),Object(j.jsxs)("div",{class:"desc",children:["Infusions left: ",l]})]})}),l=function(){return Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)("img",{style:{textAlign:"center"},src:"./images/white.jpg",alt:"white tea",width:"960",height:"520"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"main",children:["Oxidation: very low",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Taste: bitter, flowery, delicate",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Cha qi: 9/10",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"White tea is a very slightly oxidized tea, made from the very first leaves and buds to appear on the tea bush. It has a very delicate taste, yet a strong cha qi. "]}),Object(j.jsx)(d,{startTime:2e4,incTime:1e4,infusions:5})]})},O=i(3),x=function(){var e;return Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)("img",(e={style:{textAlign:"center"},src:"./images/green.jpg"},Object(O.a)(e,"style",{borderRadius:"50%"}),Object(O.a)(e,"alt","green tea"),Object(O.a)(e,"width","700"),Object(O.a)(e,"height","520"),e)),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"main",children:["Oxidation: minimal",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Taste: fresh, bitter, grass-like",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Cha qi: 5/10",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"A minimally oxidized tea,green tea is steamed and dried immediately after it is harvested. It is very easy to brew both gong-fu and western style and is high in caffeine."]}),Object(j.jsx)(d,{startTime:15e3,incTime:3e3,infusions:5})]})},u=function(){return Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)("img",{style:{textAlign:"center"},src:"./images/oolong.jpg",alt:"oolong tea",width:"960",height:"520"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"main",children:["Oxidation: low to high, but never fully oxidized or unoxidized",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Taste: very different, depends on preparation",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Cha qi: 8/10",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Oolong is an umbrella term for different teas, with the level of oxidation varying from 8% (green oolongs) to 85% (dark roasted oolongs). This is the most popular kind of chinese tea, with leaves manually cut and rolled in a very specific way to maintain the required level of oxdiation. These teas often have the most unique and special tastes and a very strong and pleasant Cha Qi."]}),Object(j.jsx)(d,{startTime:2e4,incTime:5e3,infusions:9})]})},g=function(){var e;return Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)("img",(e={style:{textAlign:"center"}},Object(O.a)(e,"style",{borderRadius:"50%"}),Object(O.a)(e,"src","./images/red.jpg"),Object(O.a)(e,"alt","red tea"),Object(O.a)(e,"width","960"),Object(O.a)(e,"height","520"),e)),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"main",children:["Oxidation: full",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Taste: thick, sweet, citrus",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Cha qi:6/10",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"The fully oxidized red(known as black in the west) tea, is made by harvesting tea leaves, intentionally damaging them by rolling and/or cutting them, making them oxidize(just like a cut apple) and then left to wither, removing the bitterness from the tea and bringing out a sweet, fruity and bold taste."]}),Object(j.jsx)(d,{startTime:15e3,incTime:5e3,infusions:8})]})},m=function(){var e;return Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)("img",(e={style:{textAlign:"center"}},Object(O.a)(e,"style",{borderRadius:"50%"}),Object(O.a)(e,"src","./images/shou.jpg"),Object(O.a)(e,"alt","shou pu erh tea"),Object(O.a)(e,"width","960"),Object(O.a)(e,"height","520"),e)),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"main",children:["Fermentation: artificial (wo dui)",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Taste: earth, wood, berries",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Cha qi: 7/10",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),'Shou pu erh was invented in the 1980s by the famous Menghai Da Yi tea factory, it is a pu erh, artificially fermented during the process of "wo dui"(wet pile). It was invented to become a quicker and cheaper alternative to aged sheng pu erh, which could take decades to fully ferment, and shou pu erh definitely lived up to the expectations, quickly becoming one of the most popular and sought after teas. This tea has great health benefits, improving digestion, blood pressure, reducing stress and anxiety, helps with hangovers, gives a great energy boost and of course tastes really good.']}),Object(j.jsx)(d,{startTime:1e4,incTime:5e3,infusions:20})]})},p=function(){return Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)("img",{style:{textAlign:"center"},src:"./images/shen.jpg",alt:"shen pu erh tea",width:"740",height:"520"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"main",children:["Fermentation: natural",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Taste: bitter in young shengs, fruity, apples and flowers",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Cha qi: 10/10",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Sheng puerh is the naturally fermented type of puerh, a very complex tea, both in making and in brewing. This tea is withered, fried, rolled, pressed together and left to ferment in a wet climate, as the microbes slowly change it into a very mellow tea with a unique taste and a  very strong Qi. Aged sheng is the most expensive, rare, sought-after tea with the best taste and Cha Qi."]}),Object(j.jsx)(d,{startTime:1e4,incTime:3e3,infusions:15})]})},f=function(){return Object(j.jsx)(c.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:b}),Object(j.jsx)(o.a,{exact:!0,path:"/white",component:l}),Object(j.jsx)(o.a,{exact:!0,path:"/green",component:x}),Object(j.jsx)(o.a,{exact:!0,path:"/oolong",component:u}),Object(j.jsx)(o.a,{exact:!0,path:"/red",component:g}),Object(j.jsx)(o.a,{exact:!0,path:"/shou",component:m}),Object(j.jsx)(o.a,{exact:!0,path:"/shen",component:p})]})})};i(33);a.a.render(Object(j.jsx)(c.a,{children:Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(f,{})})}),document.getElementById("root"))},8:function(e,t,i){}},[[34,1,2]]]);
//# sourceMappingURL=main.2a998268.chunk.js.map