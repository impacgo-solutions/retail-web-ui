((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,M,N,E,H,F,O,P,G,Q,A={zh:function zh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7R(d){return new A.xI(d,null)},
ced(d,e,f){var w=null,v=B.a([new E.bg(!1,"Date",H.fy,new A.by_(),A.bWT(),w,w,w,x.U)],x.O),u=x.T,t=x.p
B.c2(d,B.R(B.a([D.eo(!1,B.a([new D.K("Shift",new A.by0(),!1,w,0,w,u),new D.K("Cashier",new A.by1(),!1,w,0,w,u),new D.K("Date",new A.by4(),!1,w,0,w,u),new D.K("Start",new A.by5(),!1,w,0,w,u),new D.K("End",new A.by6(),!1,w,0,w,u),new D.K("Total Hours",new A.by7(),!1,w,0,w,u),new D.K("Bills",new A.by8(),!0,w,0,w,u),new D.K("Total Sales",new A.by9(),!0,w,0,w,u),new D.K("Status",new A.bya(),!1,w,0,w,u)],x.R),w,y.a,"all-shifts-dialog",v,!1,w,w,w,new A.byb(d,f),w,w,8,w,e,new A.by2(),C.bb,!1,!0,!0,w,x.b)],t),C.F,w,C.r,C.M),B.a([B.a0(w,!1,w,w,w,w,w,"Close",new A.by3(d),C.N,C.at)],t),"All Cashier Shifts & History",C.dc,x.z)},
bwj(d,e,f){var w,v,u,t,s,r=B.p9(d.f)
if(r==null)return!0
if(e==="Select date range"&&f!=null){w=f.a
v=B.cJ(B.bu(w),B.bq(w),B.dh(w),0,0,0,0)
w=f.b
u=B.cJ(B.bu(w),B.bq(w),B.dh(w),23,59,59,0)
return r.nR(v.iR(-1e6))&&r.lU(u)}t=B.kU(B.eK())
s=C.t.bq(t.e1(r).a,864e8)
switch(e){case"This week":w=s>=0&&s<=7
break
case"This month":w=B.bq(r)===B.bq(t)&&B.bu(r)===B.bu(t)
break
default:w=!0
break}return w},
bKm(d){var w,v,u,t,s,r=d.r
if(r.length===0||r==="\u2014")return"\u2014"
w=new A.buP()
v=w.$1(r)
if(v==null)return"\u2014"
r=d.w
if(r==="\u2014"||r.length===0)u=B.cJ(2026,1,1,18,0,0,0)
else{t=w.$1(r)
if(t==null)return"\u2014"
u=t}s=C.t.bq(u.e1(v).a,6e7)
return C.q.ak((s<0?s+1440:s)/60,1)+"h"},
bUY(d,e,f){var w,v,u,t=null,s=x.p,r=B.a([new B.ep(B.a([new B.al("Cashier",e.b,!1),new B.al("Register",e.e+" \xb7 "+e.d,!1),new B.al("Date",F.dT(e.f),!1),new B.al("Window",e.r+" \u2192 "+e.w,!1),new B.al("Total Hours",A.bKm(e),!1),new B.al("Bills",""+e.ax,!1)],x.H),2,t),new B.ai(R.mT,B.h("Tender-wise takings",t,t,t,t,B.p(t,t,t,t,16,C.P),t,t),t),new A.zh(C.aK,"Cash",B.J(e.z),t),new A.zh(C.a6,"Card",B.J(e.Q),t),new A.zh(C.fr,"UPI",B.J(e.as),t),new A.zh(C.eI,"Wallet",B.J(e.at),t),A.bVs("Total sales",B.J(e.y),t,!0)],s),q=e.ay
if(q==="Closed"){w=e.ch
v=w===0
if(v)w="Tallied \u2713"
else w=B.J(w==null?0:w)
r.push(A.bVs("Closing variance",w,v?C.aK:C.aJ,!1))}u=B.R(r,C.F,t,C.r,C.M)
s=B.a([],s)
if(q==="Open")s.push(B.a0(t,!1,t,t,t,P.qS,t,"Close this shift",new A.bzx(d,f),C.N,C.cE))
else s.push(B.a0(t,!1,t,t,t,B.bW("printer",$.d?C.y:C.v,14),t,"Print Z-report",new A.bzy(d),C.N,C.at))
Q.mq(d,u,s,"Cashier shift \xb7 "+e.c,e.a,x.z)},
bVs(d,e,f,g){var w,v,u,t,s=null,r=g?8:3
if(g)w=new B.a7(s,s,new B.cf(new B.aL($.d?C.Y:C.Z,1,C.O,-1),C.U,C.U,C.U),s,s,s,C.J)
else w=s
v=g?8:0
if(g)u=B.p($.d?C.y:C.v,s,s,s,17,C.bz)
else u=B.p($.d?C.a_:C.a0,G.cq,s,s,13,C.p)
u=B.h(d,s,s,s,s,u,s,s)
if(g)t=B.p($.d?C.y:C.v,s,s,s,17,C.bz)
else t=B.p($.d?C.a_:C.a0,G.cq,s,s,13,C.p)
return new B.ai(new B.a6(0,r,0,3),B.a5(s,B.ae(B.a([u,B.h(e,s,s,s,s,t.mz(f,f!=null?C.ac:s),s,s)],x.p),C.E,C.bM,C.z,0),C.A,s,s,w,s,s,s,s,new B.a6(0,v,0,0),s,s,s),s)},
bAv:function bAv(){},
xI:function xI(d,e){this.d=d
this.a=e},
aiL:function aiL(){this.d=$
this.c=this.a=null},
boN:function boN(d){this.a=d},
bor:function bor(){},
bos:function bos(d){this.a=d},
bot:function bot(){},
bou:function bou(d){this.a=d},
boF:function boF(d){this.a=d},
boG:function boG(d){this.a=d},
boH:function boH(d){this.a=d},
boI:function boI(d,e,f){this.a=d
this.b=e
this.c=f},
boE:function boE(){},
boJ:function boJ(){},
boK:function boK(){},
boL:function boL(){},
boD:function boD(d,e){this.a=d
this.b=e},
boM:function boM(){},
bov:function bov(){},
bow:function bow(){},
box:function box(){},
boy:function boy(){},
boz:function boz(){},
boA:function boA(){},
boB:function boB(){},
boC:function boC(){},
by2:function by2(){},
by_:function by_(){},
byb:function byb(d,e){this.a=d
this.b=e},
by0:function by0(){},
by1:function by1(){},
by4:function by4(){},
by5:function by5(){},
by6:function by6(){},
by7:function by7(){},
by8:function by8(){},
by9:function by9(){},
bya:function bya(){},
by3:function by3(d){this.a=d},
buP:function buP(){},
bzx:function bzx(d,e){this.a=d
this.b=e},
bzy:function bzy(d){this.a=d}},I,R,D,K,S,L
J=c[1]
B=c[0]
C=c[2]
M=c[61]
N=c[67]
E=c[85]
H=c[125]
F=c[90]
O=c[62]
P=c[163]
G=c[137]
Q=c[83]
A=a.updateHolder(c[22],A)
I=c[162]
R=c[159]
D=c[88]
K=c[87]
S=c[93]
L=c[49]
A.zh.prototype={
I(d){var w=null
return new B.ai(C.f6,B.ae(B.a([B.a5(w,w,C.A,w,w,new B.a7(this.c,w,w,B.at(3),w,w,C.J),w,9,w,I.a2I,w,w,w,9),B.aS(B.h(this.d,w,w,w,w,B.p(w,w,w,w,12.5,C.p),w,w),1),B.h(this.e,w,w,w,w,B.p(w,w,w,w,12.5,C.p).aNH(G.cq,C.ac),w,w)],x.p),C.E,C.r,C.z,0),w)},
gf5(d){return this.d}}
A.xI.prototype={
W(){return new A.aiL()}}
A.aiL.prototype={
ap(){this.aA()
$.ap.rx$.push(new A.boN(this))},
tr(){var w=0,v=B.v(x.n),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$tr=B.q(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:j=r.gO()
i=j.m(0,$.ag(),x.S)
h=i
g=h==null?null:h.y
f=g==null?"":g
if(J.U(f)===0){w=1
break}t=4
h=$.cB()
w=7
return B.l(j.m(0,h.gJ(),x.V).bc(f),$async$tr)
case 7:if(r.c==null){w=1
break}q=j.m(0,h,x.B)
h=x.N
m=j.m(0,$.dU(),h)
l=i.r
p=N.YW(J.bc(q,new A.bor(),h).aG(0),m,l)
l=$.jt()
w=8
return B.l(j.m(0,l.gJ(),x.Z).ej(f,p),$async$tr)
case 8:if(r.c==null){w=1
break}o=j.m(0,l,x.D)
w=9
return B.l(j.m(0,$.is().gJ(),x.h).h6(f,p,o),$async$tr)
case 9:t=2
w=6
break
case 4:t=3
e=s.pop()
j=B.T(e)
if(j instanceof B.aD){n=j
j=r.c
if(j==null){w=1
break}B.M(j,n.a,null)}else throw e
w=6
break
case 3:w=2
break
case 6:case 1:return B.t(u,v)
case 2:return B.r(s.at(-1),v)}})
return B.u($async$tr,v)},
I(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i={},h=k.gO()
h.eO($.dU(),new A.bos(k))
w=h.T($.ag(),x.S)
v=w==null
u=v?j:w.b
t=(v?j:w.b)===C.bJ
s=u===C.c6||t
r=h.T($.is(),x.P)
v=x.N
q=J.bc(h.T($.cB(),x.B),new A.bot(),v).aG(0)
p=h.T($.bMp(),v)
if(s)o=r
else{h=J.bj(r,new A.bou(w))
o=B.N(h,h.$ti.i("A.E"))}i.a=o
if(s&&p!=="All Stores"){h=J.bj(o,new A.boF(p))
o=B.N(h,h.$ti.i("A.E"))
i.a=o}h=x.p
u=B.a([],h)
if(s){n=B.a(["All Stores"],x.s)
C.e.A(n,q)
u.push(B.vL(!0,!0,!1,!1,n,new A.boG(k),j,new A.boH(k),C.cz,j,j,p,v))}u.push(B.a0(j,!1,j,C.a6,j,B.bW("bars",$.d?C.y:C.v,13),j,"View all",new A.boI(i,k,d),C.N,C.at))
n=J.vF(i.a,6).aG(0)
m=x.U
l=B.a([new E.bg(!1,"Date",H.fy,new A.boJ(),A.bWT(),j,j,j,m)],x.O)
if(s){i=J.bc(i.a,new A.boK(),v).eT(0)
i=B.N(i,B.w(i).c)
C.e.fK(i)
l.push(new E.bg(!1,"Employee",i,new A.boL(),j,j,j,j,m))}i=x.T
return B.R(B.a([new S.eb("Cashier Shifts","Login-to-logout sessions per register with tender-wise takings",u,j),D.eo(!1,B.a([new D.K("Shift",new A.boM(),!1,j,0,j,i),new D.K("Cashier",new A.bov(),!1,j,0,j,i),new D.K("Date",new A.bow(),!1,j,0,j,i),new D.K("Start",new A.box(),!1,j,0,j,i),new D.K("End",new A.boy(),!1,j,0,j,i),new D.K("Total Hours",new A.boz(),!1,j,0,j,i),new D.K("Bills",new A.boA(),!0,j,0,j,i),new D.K("Total Sales",new A.boB(),!0,j,0,j,i),new D.K("Status",new A.boC(),!1,j,0,j,i)],x.R),j,y.a,"shifts",l,!1,j,j,j,new A.boD(k,d),j,j,8,j,n,new A.boE(),C.bb,!1,!1,!0,j,x.b)],h),C.F,j,C.r,C.z)}}
var z=a.updateTypes(["vV(di)","bR(di)","D(di,c[fF<bE>?])"])
A.bAv.prototype={
$1(d){return"All Stores"},
$S:174}
A.boN.prototype={
$1(d){return this.a.tr()},
$S:4}
A.bor.prototype={
$1(d){return d.gaf(d)},
$S:15}
A.bos.prototype={
$2(d,e){return this.a.tr()},
$S:28}
A.bot.prototype={
$1(d){return d.gaf(d)},
$S:15}
A.bou.prototype={
$1(d){return M.YO(d,this.a)},
$S:33}
A.boF.prototype={
$1(d){return d.c===this.a},
$S:33}
A.boG.prototype={
$1(d){return d==="All Stores"?"Store: All":"Store: "+O.rQ(d,this.a.gO().T($.cB(),x.B))},
$S:7}
A.boH.prototype={
$1(d){this.a.gO().m(0,$.bMp().gJ(),x.u).fY(0,d)
return d},
$S:1}
A.boI.prototype={
$0(){return A.ced(this.c,this.a.a,this.b.a.d)},
$S:0}
A.boE.prototype={
$1(d){return B.a([d.a,d.b,d.d,d.e,d.ay,d.f],x.s)},
$S:360}
A.boJ.prototype={
$2(d,e){return A.bwj(d,e,null)},
$S:181}
A.boK.prototype={
$1(d){return d.b},
$S:918}
A.boL.prototype={
$2(d,e){return C.m.q(d.b.toLowerCase(),e.toLowerCase())},
$S:181}
A.boD.prototype={
$1(d){return A.bUY(this.b,d,this.a.a.d)},
$S:231}
A.boM.prototype={
$1(d){var w=null
return B.h(d.a,w,w,w,w,B.p(w,w,w,w,11.8,C.P),w,w)},
$S:42}
A.bov.prototype={
$1(d){return L.a_I(d.b,d.d+" \xb7 "+d.e)},
$S:z+0}
A.bow.prototype={
$1(d){var w=null,v=F.dT(d.f)
return B.h(v,w,w,w,w,B.p($.d?C.y:C.v,w,w,w,13.5,C.p),w,w)},
$S:42}
A.box.prototype={
$1(d){var w=null
return B.h(d.r,w,w,w,w,B.p($.d?C.y:C.v,w,w,w,13.5,C.p),w,w)},
$S:42}
A.boy.prototype={
$1(d){var w=null
return B.h(d.w,w,w,w,w,B.p($.d?C.y:C.v,w,w,w,13.5,C.p),w,w)},
$S:42}
A.boz.prototype={
$1(d){var w=null,v=A.bKm(d)
return B.h(v,w,w,w,w,B.p($.d?C.y:C.v,w,w,w,13.5,C.p),w,w)},
$S:42}
A.boA.prototype={
$1(d){var w=null
return B.h(""+d.ax,w,w,w,w,B.p($.d?C.y:C.v,w,w,w,13.5,C.p),w,w)},
$S:42}
A.boB.prototype={
$1(d){var w=null
return B.h(B.J(d.y),w,w,w,w,B.p(w,w,w,w,11.8,C.P),w,w)},
$S:42}
A.boC.prototype={
$1(d){return K.ea(d.ay)},
$S:z+1}
A.by2.prototype={
$1(d){return B.a([d.a,d.b,d.d,d.e,d.ay,d.f],x.s)},
$S:360}
A.by_.prototype={
$2(d,e){return A.bwj(d,e,null)},
$S:181}
A.byb.prototype={
$1(d){var w=this.a
B.aq(w,!0).Y()
A.bUY(w,d,this.b)},
$S:231}
A.by0.prototype={
$1(d){var w=null
return B.h(d.a,w,w,w,w,B.p(w,w,w,w,11.8,C.P),w,w)},
$S:42}
A.by1.prototype={
$1(d){return L.a_I(d.b,d.d+" \xb7 "+d.e)},
$S:z+0}
A.by4.prototype={
$1(d){var w=null,v=F.dT(d.f)
return B.h(v,w,w,w,w,B.p($.d?C.y:C.v,w,w,w,13.5,C.p),w,w)},
$S:42}
A.by5.prototype={
$1(d){var w=null
return B.h(d.r,w,w,w,w,B.p($.d?C.y:C.v,w,w,w,13.5,C.p),w,w)},
$S:42}
A.by6.prototype={
$1(d){var w=null
return B.h(d.w,w,w,w,w,B.p($.d?C.y:C.v,w,w,w,13.5,C.p),w,w)},
$S:42}
A.by7.prototype={
$1(d){var w=null,v=A.bKm(d)
return B.h(v,w,w,w,w,B.p($.d?C.y:C.v,w,w,w,13.5,C.p),w,w)},
$S:42}
A.by8.prototype={
$1(d){var w=null
return B.h(""+d.ax,w,w,w,w,B.p($.d?C.y:C.v,w,w,w,13.5,C.p),w,w)},
$S:42}
A.by9.prototype={
$1(d){var w=null
return B.h(B.J(d.y),w,w,w,w,B.p(w,w,w,w,11.8,C.P),w,w)},
$S:42}
A.bya.prototype={
$1(d){return K.ea(d.ay)},
$S:z+1}
A.by3.prototype={
$0(){return B.aq(this.a,!0).Y()},
$S:0}
A.buP.prototype={
$1(d){var w,v,u,t,s,r,q,p=null
try{r=x.s
w=B.a(C.m.S(d).split(" "),r)
if(J.U(w)<2)return p
v=B.a(J.aA(w,0).split(":"),r)
u=B.cS(J.aA(v,0),p)
t=B.cS(J.aA(v,1),p)
s=J.aA(w,1).toUpperCase()==="PM"
if(s&&u<12)u+=12
if(!s&&J.i(u,12))u=0
r=B.cJ(2026,1,1,u,t,0,0)
return r}catch(q){return p}},
$S:921}
A.bzx.prototype={
$0(){B.aq(this.a,!0).Y()
this.b.$1("shiftclose")},
$S:0}
A.bzy.prototype={
$0(){return B.M(this.a,"Shift report printed",null)},
$S:0};(function installTearOffs(){var w=a.installStaticTearOff
w(A,"bWT",2,function(){return[null]},["$3","$2"],["bwj",function(d,e){return A.bwj(d,e,null)}],2,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(A.zh,B.ax)
v(B.cl,[A.bAv,A.boN,A.bor,A.bot,A.bou,A.boF,A.boG,A.boH,A.boE,A.boK,A.boD,A.boM,A.bov,A.bow,A.box,A.boy,A.boz,A.boA,A.boB,A.boC,A.by2,A.byb,A.by0,A.by1,A.by4,A.by5,A.by6,A.by7,A.by8,A.by9,A.bya,A.buP])
w(A.xI,B.ee)
w(A.aiL,B.e0)
v(B.dy,[A.bos,A.boJ,A.boL,A.by_])
v(B.d_,[A.boI,A.by3,A.bzx,A.bzy])})()
B.cy(b.typeUniverse,JSON.parse('{"zh":{"ax":[],"e":[]},"xI":{"P":[],"e":[]},"aiL":{"ad":["xI"]}}'))
var y={a:"Nothing matches these filters. Clear the search or add a new record."}
var x=(function rtii(){var w=B.G
return{T:w("K<di>"),U:w("bg<di>"),Z:w("jW"),R:w("m<K<di>>"),O:w("m<bg<di>>"),H:w("m<al>"),s:w("m<c>"),p:w("m<e>"),D:w("j<d6>"),P:w("j<di>"),B:w("j<bs>"),b:w("di"),h:w("m7"),u:w("iX<c>"),V:w("fr"),N:w("c"),z:w("@"),S:w("cj?"),n:w("~")}})();(function constants(){I.a2I=new B.a6(0,0,8,0)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cpt","bMp",()=>B.uC(new A.bAv(),x.N))})()};
(a=>{a["qwajQaupif0DbewyCm8Ov9ODW18="]=a.current})($__dart_deferred_initializers__);