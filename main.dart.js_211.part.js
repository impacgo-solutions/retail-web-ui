((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,Q,R,S,T,A={
c8E(d){return new A.BP(d,null)},
yE:function yE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
BP:function BP(d,e){this.e=d
this.a=e},
aKr:function aKr(d){this.a=d},
aKs:function aKs(d){this.a=d},
aKt:function aKt(){},
aKE:function aKE(){},
aKI:function aKI(){},
aKJ:function aKJ(){},
aKK:function aKK(){},
aKL:function aKL(d,e){this.a=d
this.b=e},
aKM:function aKM(d){this.a=d},
aKN:function aKN(d,e){this.a=d
this.b=e},
aKA:function aKA(){},
aKz:function aKz(d,e,f){this.a=d
this.b=e
this.c=f},
aKO:function aKO(){},
aKu:function aKu(){},
aKv:function aKv(){},
aKw:function aKw(){},
aKx:function aKx(){},
aKy:function aKy(){},
aKH:function aKH(){},
aKB:function aKB(){},
aKC:function aKC(){},
aKD:function aKD(){},
aKF:function aKF(){},
aKG:function aKG(){}},H,D,L,M,I,E,U,N,O,F,K,G,P,V
J=c[1]
C=c[0]
B=c[2]
Q=c[117]
R=c[52]
S=c[58]
T=c[92]
A=a.updateHolder(c[24],A)
H=c[175]
D=c[90]
L=c[105]
M=c[89]
I=c[102]
E=c[100]
U=c[74]
N=c[54]
O=c[75]
F=c[41]
K=c[83]
G=c[113]
P=c[114]
V=c[115]
A.yE.prototype={}
A.BP.prototype={
ki(b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="Nothing matches these filters. Clear the search or add a new record.",a5={},a6=b3.T($.cC(),y.B),a7=b3.T($.ez(),y.j),a8=b3.T($.lH(),y.J),a9=b3.T($.lG(),y.c),b0=b3.T($.ed(),y.l),b1=b3.T($.oT(),y.N)
a5.a=null
if(b1!=="All Stores")for(x=J.aa(a6);x.p();){w=x.gE(x)
if(w.gb4(w)+" \u2014 "+w.geB(w)===b1||w.gb4(w)===b1||w.gaf(w)===b1){a5.a=w
break}}if(a5.a==null)v=a8
else{x=J.bk(a8,new A.aKr(a5))
v=C.N(x,x.$ti.i("C.E"))}if(a5.a==null)u=a9
else{x=J.bk(a9,new A.aKs(a5))
u=C.N(x,x.$ti.i("C.E"))}x=J.bZ(u)
t=x.cB(u,new A.aKt()).bu(0,0,new A.aKE())
s=x.cB(u,new A.aKI()).gt(0)
r=s>0?B.q.ar(t/s):0
J.bk(v,new A.aKJ()).gt(0)
q=J.bk(a7,new A.aKK()).gt(0)
x=$.d?B.bi:B.bn
w=a5.a==null?""+J.U(a6):"1"
p=a5.a
p=p==null?"Active stores in network":"Selected store ("+p.gb4(p)+")"
o=$.d?I.bX:I.c0
n=C.J(t)
m=a5.a
m=m==null?"Network sales today":m.gb4(m)+" sales today"
l=$.d
k=l?B.bi:B.bn
l=l?E.f1:E.fs
j=C.J(r)
i=$.d?E.fY:E.hx
h=U.mq(J.U(b0))
g=$.d
f=g?B.dZ:B.ee
e=q>0?"Action needed":a3
d=[new C.vl([x,B.a6,"store",p,null,!0,w]),new C.vl([o,B.aK,"cart",m,null,!0,n]),new C.vl([k,B.a6,"file","Bills settled today",null,!0,""+s]),new C.vl([l,B.eI,"bars","Average basket value",null,!0,j]),new C.vl([i,B.fr,"users","Total loyalty members",null,!0,h]),new C.vl([f,B.aI,"alert","Low-stock alerts",e,!1,""+q])]
x=g?B.bi:B.bn
w=g?I.bX:I.c0
p=g?B.cO:B.cX
o=g?E.fY:E.hx
n=g?P.iG:P.kb
m=g?E.f1:E.fs
a0=[new A.yE("store",x,B.a6,"Stores & Network","sa_stores",G.H8),new A.yE("box",w,B.aK,"On Hand Inventory","sa_stock_items",G.H5),new A.yE("truck",p,B.ci,"Transfers & Requests","sa_transfers",G.G9),new A.yE("cart",o,B.fr,"Point of Sale","pos",H.au7),new A.yE("tag",n,V.k9,"Promotions & Loyalty","coupons",H.aTD),new A.yE("file",m,B.eI,"Reports & Analytics","sa_reports",G.Gh)]
x=a5.a
if(x==null)x="Network-wide workspace across all stores and central inventory \xb7 "+F.bMv()
else{x=x.gb4(x)
w=a5.a
w="Filtered workspace for "+x+" ("+w.geB(w)+") \xb7 "+F.bMv()
x=w}w=y.p
p=C.a([F.bSb(N.bWT(),N.bWU()),C.Y(a3,!1,a3,a3,a3,G.xH,a3,"Create manager",new A.aKL(b2,b3),B.M,B.ah),C.Y(a3,!1,a3,a3,a3,Q.qU,a3,"Open POS billing",new A.aKM(this),B.M,B.ah)],w)
o=C.a([],w)
for(a1=0;a1<6;++a1){n=d[a1].a
o.push(new R.DR(new C.cE(n[2],18,n[1],a3),n[0],n[6],n[3],n[4],n[5],!1,a3))}o=O.t4(6,o,!1)
n=C.a([],w)
for(m=a0.length,a1=0;a1<m;++a1){a2=a0[a1]
n.push(new F.DP(new C.cE(a2.a,18,a2.c,a3),a2.b,a2.d,a2.f,new A.aKN(this,a2),a3))}m=y.b
l=y.V
return C.Q(C.a([new F.KD("Super Admin Dashboard",x,p,a3),o,B.e6,O.t4(3,n,!1),B.dQ,C.f("Latest network bills",a3,a3,a3,a3,a3,C.o(a3,a3,a3,a3,16,B.R),a3,a3),B.aW,D.eo(!1,C.a([new D.K("BILL NO.",new A.aKO(),!1,a3,0,a3,m),new D.K("STORE",new A.aKu(),!1,a3,0,a3,m),new D.K("DATE",new A.aKv(),!1,a3,0,a3,m),new D.K("NET AMOUNT",new A.aKw(),!0,a3,0,a3,m),new D.K("PAID BY",new A.aKx(),!1,a3,0,a3,m),new D.K("STATUS",new A.aKy(),!1,a3,0,a3,m)],y.T),a3,a4,"latest-network-bills",L.fc,!1,a3,a3,a3,new A.aKz(this,b2,b3),a3,a3,5,a3,u,new A.aKA(),B.bb,!1,!0,!0,a3,y.u),B.dQ,C.f("Recent stock requests",a3,a3,a3,a3,a3,C.o(a3,a3,a3,a3,16,B.R),a3,a3),B.aW,D.eo(!1,C.a([new D.K("STORE",new A.aKB(),!1,a3,0,a3,l),new D.K("ITEM",new A.aKC(),!1,a3,0,a3,l),new D.K("QTY",new A.aKD(),!0,a3,0,a3,l),new D.K("RAISED BY",new A.aKF(),!1,a3,0,a3,l),new D.K("STATUS",new A.aKG(),!1,a3,0,a3,l)],y.h),a3,a4,"recent-requests",L.fc,!1,a3,a3,a3,a3,a3,a3,5,a3,v,new A.aKH(),B.bb,!1,!0,!0,a3,y.Z)],w),B.E,a3,B.r,B.z)}}
var z=a.updateTypes(["eG(bw)","bL(bw)","eG(dc)","bL(dc)"])
A.aKr.prototype={
$1(d){var x=d.c,w=this.a,v=w.a,u=!0
if(!B.m.q(x,v.gb4(v))){v=w.a
if(!B.m.q(x,v.geB(v))){w=w.a
w=x===w.gaf(w)
x=w}else x=u}else x=u
return x},
$S:98}
A.aKs.prototype={
$1(d){var x=d.giQ(d),w=this.a,v=w.a
if(x!==v.gaf(v)){x=d.giQ(d)
w=w.a
w=x===w.gb4(w)
x=w}else x=!0
return x},
$S:38}
A.aKt.prototype={
$1(d){return B.m.b9(d.gdX(d),C.eL())||B.m.q(d.gdX(d),"now")},
$S:38}
A.aKE.prototype={
$2(d,e){return d+e.gh8()},
$S:53}
A.aKI.prototype={
$1(d){return B.m.b9(d.gdX(d),C.eL())||B.m.q(d.gdX(d),"now")},
$S:38}
A.aKJ.prototype={
$1(d){return d.y==="Pending Approval"},
$S:98}
A.aKK.prototype={
$1(d){return d.gaI(0)!=="In Stock"},
$S:80}
A.aKL.prototype={
$0(){return F.bMX(this.a,this.b,null,B.cn)},
$S:0}
A.aKM.prototype={
$0(){return this.a.e.$1("pos")},
$S:0}
A.aKN.prototype={
$0(){return this.a.e.$1(this.b.e)},
$S:0}
A.aKA.prototype={
$1(d){return C.a([d.ghc(),d.gjB(),d.gfB(d),d.giQ(d)],y.s)},
$S:161}
A.aKz.prototype={
$1(d){return S.anM(this.b,this.c,d,this.a.e)},
$S:162}
A.aKO.prototype={
$1(d){var x=null
return C.f(d.ghc(),x,x,x,x,x,C.o(x,x,x,x,11.8,B.R),x,x)},
$S:34}
A.aKu.prototype={
$1(d){return K.i3(d.giQ(d))},
$S:z+0}
A.aKv.prototype={
$1(d){var x=null,w=T.dU(d.gdX(d))
return C.f(w,x,x,x,x,x,C.o($.d?B.x:B.v,x,x,x,13.5,B.p),x,x)},
$S:34}
A.aKw.prototype={
$1(d){var x=null
return C.f(C.J(d.gh8()),x,x,x,x,x,C.o(x,x,x,x,11.8,B.R),x,x)},
$S:34}
A.aKx.prototype={
$1(d){return K.i3(d.gfB(d))},
$S:z+0}
A.aKy.prototype={
$1(d){return M.ee(d.gaI(d))},
$S:z+1}
A.aKH.prototype={
$1(d){return C.a([d.a,d.c,d.e,d.x],y.s)},
$S:201}
A.aKB.prototype={
$1(d){return K.i3(d.c)},
$S:z+2}
A.aKC.prototype={
$1(d){var x=null
return C.f(d.e,x,x,x,x,x,C.o($.d?B.x:B.v,x,x,x,13.5,B.p),x,x)},
$S:56}
A.aKD.prototype={
$1(d){var x=null
return C.f(""+d.f,x,x,x,x,x,C.o($.d?B.x:B.v,x,x,x,13.5,B.p),x,x)},
$S:56}
A.aKF.prototype={
$1(d){var x=null
return C.f(d.x,x,x,x,x,x,C.o($.d?B.x:B.v,x,x,x,13.5,B.p),x,x)},
$S:56}
A.aKG.prototype={
$1(d){return M.ee(d.y)},
$S:z+3};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.yE,C.L)
x(A.BP,C.tk)
w(C.ck,[A.aKr,A.aKs,A.aKt,A.aKI,A.aKJ,A.aKK,A.aKA,A.aKz,A.aKO,A.aKu,A.aKv,A.aKw,A.aKx,A.aKy,A.aKH,A.aKB,A.aKC,A.aKD,A.aKF,A.aKG])
x(A.aKE,C.dt)
w(C.cX,[A.aKL,A.aKM,A.aKN])})()
C.cs(b.typeUniverse,JSON.parse('{"BP":{"P":[],"e":[]}}'))
var y=(function rtii(){var x=C.G
return{b:x("K<bw>"),V:x("K<dc>"),T:x("m<K<bw>>"),h:x("m<K<dc>>"),s:x("m<c>"),p:x("m<e>"),l:x("j<cO>"),c:x("j<bw>"),J:x("j<dc>"),B:x("j<bt>"),j:x("j<ce>"),u:x("bw"),Z:x("dc"),N:x("c")}})();(function constants(){var x=a.makeConstList
H.au7=x(["POS billing terminal","Held bills & returns","Counter registers"],y.s)
H.aTD=x(["Coupons & discounts","Loyalty members","Combo & BOGO offers"],y.s)})()};
(a=>{a["9FQCPJECIBhq5EPdjx8+5Eq8idA="]=a.current})($__dart_deferred_initializers__);