(this["webpackJsonptea-app"]=this["webpackJsonptea-app"]||[]).push([[0],{21:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),n=i(14),r=i.n(n),c=i(6),o=(i(21),i.p,i(0)),j=function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{id:"intro",children:[Object(o.jsx)("div",{children:"Welcome to Gongfu Guide!"}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:"This is a web app made for helping you with gongfu tea brewing"}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:"Please pick the tea you would like to brew below: "}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("div",{children:Object(o.jsxs)(c.b,{to:"/white",children:["White tea",Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:"./images/white.jpg",alt:"white tea",width:"320",height:"256"})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)(c.b,{to:"/green",children:["Green tea",Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:"./images/green.jpg",alt:"green tea",width:"320",height:"256"})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)(c.b,{to:"/oolong",children:["Oolong tea",Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:"./images/oolong.jpg",alt:"oolong tea",width:"320",height:"256"})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)(c.b,{to:"/red",children:["Red tea",Object(o.jsx)("br",{})," ",Object(o.jsx)("img",{src:"./images/red.jpg",alt:"red tea",width:"320",height:"256"})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)(c.b,{to:"/shou",children:["Shou pu erh",Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:"./images/shou.jpg",alt:"shou pu erh tea",width:"320",height:"256"})]})}),Object(o.jsxs)("div",{children:[" ",Object(o.jsxs)(c.b,{to:"/shen",children:["Sheng pu erh",Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:"./images/shen.jpg",alt:"shen pu erh tea",width:"320",height:"256"})]})]})]})]})},b=i(2),h=(i(8),i(31),i(7)),d=(i(32),function(e){var t=e.startTime,i=e.incTime,a=e.infusions,n=Object(s.useState)(t),r=Object(h.a)(n,2),c=r[0],j=r[1],b=Object(s.useState)(a),d=Object(h.a)(b,2),l=d[0],g=d[1],x=Object(s.useState)(""),O=Object(h.a)(x,2),u=O[0],m=O[1],f=Object(s.useState)(""),p=Object(h.a)(f,2),w=p[0],y=p[1],v=Object(s.useState)("visible"),T=Object(h.a)(v,2),k=T[0],q=T[1],S=Object(s.useState)("hidden"),C=Object(h.a)(S,2),A=C[0],R=C[1],z=function(e){y(e)};return Object(o.jsxs)("div",{style:{textAlign:"center"},children:[Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{class:"desc",children:[Object(o.jsxs)("div",{children:["Number of infusions: ",a]}),Object(o.jsxs)("div",{children:["First infusion time: ",t/1e3," seconds"]}),Object(o.jsxs)("div",{children:["Time increase with each infusion: ",i/1e3," seconds"]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{style:{visibility:k},onClick:function(){R("visible"),m("Done!"),z("Put the tea in the gaiwan and pour in hot water"),q("hidden")},children:"Brew!"}),Object(o.jsx)("div",{class:"desc",children:w}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{style:{visibility:A},onClick:function(){m("Waiting..."),l>0&&(z("Relax while the tea steeps"),setTimeout((function(){z("Pour tea into the chahai and pour hot water into the gaiwan"),m("Done!"),g(l-1)}),c),j(c+i))},children:u}),Object(o.jsxs)("div",{class:"desc",children:["Infusions left: ",l]})]})}),l=function(){return Object(o.jsxs)("div",{id:"wrapper",children:[Object(o.jsx)("img",{style:{textAlign:"center"},src:"./images/white.jpg",alt:"white tea",width:"960",height:"520"}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{id:"main",children:["Oxidation: very low",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Taste: bitter, flowery, delicate",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Cha qi: 9/10",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"White tea is the most delicate of all teas, is harvested from the very first tea buds of the year, covered in white hairs(hence the name), then withered and dried in a dark place, resulting in very low oxidation, second only to green tea. White tea is like a princess - rare, expensive and very delicate, but don't let it fool you the way it fooled me - the cha qi is very strong and comes after the first sip or two, so be careful :)"]}),Object(o.jsx)(d,{startTime:2e4,incTime:1e4,infusions:5})]})},g=i(3),x=function(){var e;return Object(o.jsxs)("div",{id:"wrapper",children:[Object(o.jsx)("img",(e={style:{textAlign:"center"},src:"./images/green.jpg"},Object(g.a)(e,"style",{borderRadius:"50%"}),Object(g.a)(e,"alt","green tea"),Object(g.a)(e,"width","700"),Object(g.a)(e,"height","520"),e)),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{id:"main",children:["Oxidation: minimal",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Taste: bitter, grass-like",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Cha qi: 5/10",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"The least processed tea of them all, the green tea is made by steaming fresh leaves to prevent any oxidation and then dried, resulting in a very resfreshing and energizing tea that is high in antioxidants. Green tea is very easy to brew, packs a lot of caffeine (although still twice less then coffee) and gets even better after cooling down (in my humble opinion, of course), making it great for us westerners who brew tea in a cup, forget about it for a couple hours and then drink it when we need a boost :). That doesn't mean you should brew it the gong-fu way, it is absolutely amazing regardless of how it is brewed, making it great for people just getting into chinese tea."]}),Object(o.jsx)(d,{startTime:15e3,incTime:3e3,infusions:5})]})},O=function(){return Object(o.jsxs)("div",{id:"wrapper",children:[Object(o.jsx)("img",{style:{textAlign:"center"},src:"./images/oolong.jpg",alt:"oolong tea",width:"960",height:"520"}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{id:"main",children:["Oxidation: low to high, but never fully oxidized or unoxidized",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Taste: very different, depends on preparation",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Cha qi: 8/10",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),'Oolong teas are a big family of different teas, with the level of oxidation varying from 8% (green oolongs) to 85% (dark roasted oolongs). This is the most iconic chinese tea, with leaves manually cut and rolled in a very specific way to maintain the level of oxdiation, often made from very rare endemic teas such as Fujian milk oolong or the famous Big Red Robe. These teas often have the most unique and special tastes, very strong and pleasant Qi and are often what people think about when hearing the words "chinese tea".']}),Object(o.jsx)(d,{startTime:2e4,incTime:5e3,infusions:9})]})},u=function(){var e;return Object(o.jsxs)("div",{id:"wrapper",children:[Object(o.jsx)("img",(e={style:{textAlign:"center"}},Object(g.a)(e,"style",{borderRadius:"50%"}),Object(g.a)(e,"src","./images/red.jpg"),Object(g.a)(e,"alt","red tea"),Object(g.a)(e,"width","960"),Object(g.a)(e,"height","520"),e)),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{id:"main",children:["Oxidation: full",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Taste: thick, sweet, citrus",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Cha qi:6/10",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"The fully oxidized red(or black in the west) tea, is made by harvesting tea leaves, intentionally damaging them by rolling and/or cutting them, making them oxidize(just like a cut apple) and then left to wither, removing the bitterness from the tea and bringing out a sweet, fruity and bold taste. It is said to be the best tea for beginners, since it is very easy to brew, always tastes great (even if really oversteeped), has a broad taste and price range and is very good for brewing in a cup. Red tea often helps to focus and reduce anxiety, making it my favourite to drink before a coding session or an important meeting."]}),Object(o.jsx)(d,{startTime:15e3,incTime:5e3,infusions:8})]})},m=function(){var e;return Object(o.jsxs)("div",{id:"wrapper",children:[Object(o.jsx)("img",(e={style:{textAlign:"center"}},Object(g.a)(e,"style",{borderRadius:"50%"}),Object(g.a)(e,"src","./images/shou.jpg"),Object(g.a)(e,"alt","shou pu erh tea"),Object(g.a)(e,"width","960"),Object(g.a)(e,"height","520"),e)),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{id:"main",children:["Fermentation: artificial (wo dui)",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Taste: earth, wood, berries",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Cha qi: 7/10",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),'Shou pu erh is a new member of the tea family, invented in the 1980s by the famous Menghai Da Yi tea factory, it is a pu erh, artificially fermented during the process of "wo dui"(wet pile). It was invented to become a quicker and cheaper alternative to aged sheng pu erh, which could take decades to fully ferment, and shou pu erh definitely lived up to the expectations, quickly becoming one of the most popular and sought after teas. This tea has a rather unique taste, which may not suit everyone, but it has great health benefits, improving digestion, blood pressure, reducing stress and anxiety, helps with hangovers, gives a great energy boost and plenty  more, so you definitely should try this great tea out!']}),Object(o.jsx)(d,{startTime:1e4,incTime:5e3,infusions:20})]})},f=function(){return Object(o.jsxs)("div",{id:"wrapper",children:[Object(o.jsx)("img",{style:{textAlign:"center"},src:"./images/shen.jpg",alt:"shen pu erh tea",width:"740",height:"520"}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{id:"main",children:["Fermentation: natural",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Taste: bitter in young shengs, fruity, apples and flowers",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Cha qi: 10/10",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Sheng puerh is the naturally fermented type of puerh, a very complex tea, both in the making and in drinking. This tea is withered, fried, rolled, pressed together and left to ferment in a wet climate, as the microbes slowly change it into a very mellow tea with a deep taste and a  ery strong Qi. Aged sheng are the most expensive, rare, sought-after teas with the best taste and Cha Qi, but the younger shengs are also very good, affordable and energizing teas, that you can also age by yourself either to sell later or to enjoy a great aged sheng a few years down the road :)"]}),Object(o.jsx)(d,{startTime:1e4,incTime:3e3,infusions:15})]})},p=function(){return Object(o.jsx)(c.a,{children:Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{exact:!0,path:"/",component:j}),Object(o.jsx)(b.a,{exact:!0,path:"/white",component:l}),Object(o.jsx)(b.a,{exact:!0,path:"/green",component:x}),Object(o.jsx)(b.a,{exact:!0,path:"/oolong",component:O}),Object(o.jsx)(b.a,{exact:!0,path:"/red",component:u}),Object(o.jsx)(b.a,{exact:!0,path:"/shou",component:m}),Object(o.jsx)(b.a,{exact:!0,path:"/shen",component:f})]})})};i(33);r.a.render(Object(o.jsx)(c.a,{children:Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(p,{})})}),document.getElementById("root"))},8:function(e,t,i){}},[[34,1,2]]]);
//# sourceMappingURL=main.ac7305f6.chunk.js.map