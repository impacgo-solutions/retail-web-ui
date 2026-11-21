((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,Q,R,S,A={
c7j(d){return new A.BM(d,null)},
yz:function yz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
BM:function BM(d,e){this.e=d
this.a=e},
aKa:function aKa(d){this.a=d},
aKb:function aKb(d){this.a=d},
aKc:function aKc(){},
aKn:function aKn(){},
aKr:function aKr(){},
aKs:function aKs(){},
aKt:function aKt(){},
aKu:function aKu(d,e){this.a=d
this.b=e},
aKv:function aKv(d){this.a=d},
aKw:function aKw(d,e){this.a=d
this.b=e},
aKj:function aKj(){},
aKi:function aKi(d,e,f){this.a=d
this.b=e
this.c=f},
aKx:function aKx(){},
aKd:function aKd(){},
aKe:function aKe(){},
aKf:function aKf(){},
aKg:function aKg(){},
aKh:function aKh(){},
aKq:function aKq(){},
aKk:function aKk(){},
aKl:function aKl(){},
aKm:function aKm(){},
aKo:function aKo(){},
aKp:function aKp(){}},H,D,L,M,I,E,T,N,O,F,K,P,G,U,V
J=c[1]
C=c[0]
B=c[2]
Q=c[50]
R=c[56]
S=c[90]
A=a.updateHolder(c[24],A)
H=c[169]
D=c[88]
L=c[96]
M=c[87]
I=c[103]
E=c[98]
T=c[72]
N=c[52]
O=c[73]
F=c[39]
K=c[82]
P=c[108]
G=c[107]
U=c[109]
V=c[111]
A.yz.prototype={}
A.BM.prototype={
kg(b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="Nothing matches these filters. Clear the search or add a new record.",a5={},a6=b3.T($.cB(),y.B),a7=b3.T($.ez(),y.j),a8=b3.T($.lD(),y.J),a9=b3.T($.lC(),y.c),b0=b3.T($.e9(),y.l),b1=b3.T($.oS(),y.N)
a5.a=null
if(b1!=="All Stores")for(x=J.ab(a6);x.p();){w=x.gE(x)
if(w.gb4(w)+" \u2014 "+w.geA(w)===b1||w.gb4(w)===b1||w.gaf(w)===b1){a5.a=w
break}}if(a5.a==null)v=a8
else{x=J.bj(a8,new A.aKa(a5))
v=C.N(x,x.$ti.i("A.E"))}if(a5.a==null)u=a9
else{x=J.bj(a9,new A.aKb(a5))
u=C.N(x,x.$ti.i("A.E"))}x=J.bY(u)
t=x.cA(u,new A.aKc()).bu(0,0,new A.aKn())
s=x.cA(u,new A.aKr()).gt(0)
r=s>0?B.q.aq(t/s):0
J.bj(v,new A.aKs()).gt(0)
q=J.bj(a7,new A.aKt()).gt(0)
x=$.d?B.bj:B.bq
w=a5.a==null?""+J.U(a6):"1"
p=a5.a
p=p==null?"Active stores in network":"Selected store ("+p.gb4(p)+")"
o=$.d?I.c_:I.c2
n=C.J(t)
m=a5.a
m=m==null?"Network sales today":m.gb4(m)+" sales today"
l=$.d
k=l?B.bj:B.bq
l=l?E.f1:E.fs
j=C.J(r)
i=$.d?E.fY:E.hx
h=T.mo(J.U(b0))
g=$.d
f=g?B.dZ:B.ee
e=q>0?"Action needed":a3
d=[new C.vh([x,B.a6,"store",p,null,!0,w]),new C.vh([o,B.aK,"cart",m,null,!0,n]),new C.vh([k,B.a6,"file","Bills settled today",null,!0,""+s]),new C.vh([l,B.eI,"bars","Average basket value",null,!0,j]),new C.vh([i,B.fr,"users","Total loyalty members",null,!0,h]),new C.vh([f,B.aJ,"alert","Low-stock alerts",e,!1,""+q])]
x=g?B.bj:B.bq
w=g?I.c_:I.c2
p=g?B.cU:B.d3
o=g?E.fY:E.hx
n=g?P.iF:P.k9
m=g?E.f1:E.fs
a0=[new A.yz("store",x,B.a6,"Stores & Network","sa_stores",G.H1),new A.yz("box",w,B.aK,"On Hand Inventory","sa_stock_items",G.GZ),new A.yz("truck",p,B.cp,"Transfers & Requests","sa_transfers",G.G2),new A.yz("cart",o,B.fr,"Point of Sale","pos",H.au_),new A.yz("tag",n,U.k7,"Promotions & Loyalty","coupons",H.aTv),new A.yz("file",m,B.eI,"Reports & Analytics","sa_reports",G.Ga)]
x=a5.a
if(x==null)x="Network-wide workspace across all stores and central inventory \xb7 "+F.bLf()
else{x=x.gb4(x)
w=a5.a
w="Filtered workspace for "+x+" ("+w.geA(w)+") \xb7 "+F.bLf()
x=w}w=y.p
p=C.a([F.bQX(N.bVD(),N.bVE()),C.a0(a3,!1,a3,a3,a3,G.xC,a3,"Create manager",new A.aKu(b2,b3),B.N,B.ah),C.a0(a3,!1,a3,a3,a3,V.qR,a3,"Open POS billing",new A.aKv(this),B.N,B.ah)],w)
o=C.a([],w)
for(a1=0;a1<6;++a1){n=d[a1].a
o.push(new Q.DO(new C.cC(n[2],18,n[1],a3),n[0],n[6],n[3],n[4],n[5],!1,a3))}o=O.t1(6,o,!1)
n=C.a([],w)
for(m=a0.length,a1=0;a1<m;++a1){a2=a0[a1]
n.push(new F.DM(new C.cC(a2.a,18,a2.c,a3),a2.b,a2.d,a2.f,new A.aKw(this,a2),a3))}m=y.b
l=y.V
return C.R(C.a([new F.Ky("Super Admin Dashboard",x,p,a3),o,B.e6,O.t1(3,n,!1),B.dQ,C.h("Latest network bills",a3,a3,a3,a3,C.p(a3,a3,a3,a3,16,B.P),a3,a3),B.aW,D.eo(!1,C.a([new D.K("BILL NO.",new A.aKx(),!1,a3,0,a3,m),new D.K("STORE",new A.aKd(),!1,a3,0,a3,m),new D.K("DATE",new A.aKe(),!1,a3,0,a3,m),new D.K("NET AMOUNT",new A.aKf(),!0,a3,0,a3,m),new D.K("PAID BY",new A.aKg(),!1,a3,0,a3,m),new D.K("STATUS",new A.aKh(),!1,a3,0,a3,m)],y.T),a3,a4,"latest-network-bills",L.fc,!1,a3,a3,a3,new A.aKi(this,b2,b3),a3,a3,5,a3,u,new A.aKj(),B.bb,!1,!0,!0,a3,y.u),B.dQ,C.h("Recent stock requests",a3,a3,a3,a3,C.p(a3,a3,a3,a3,16,B.P),a3,a3),B.aW,D.eo(!1,C.a([new D.K("STORE",new A.aKk(),!1,a3,0,a3,l),new D.K("ITEM",new A.aKl(),!1,a3,0,a3,l),new D.K("QTY",new A.aKm(),!0,a3,0,a3,l),new D.K("RAISED BY",new A.aKo(),!1,a3,0,a3,l),new D.K("STATUS",new A.aKp(),!1,a3,0,a3,l)],y.h),a3,a4,"recent-requests",L.fc,!1,a3,a3,a3,a3,a3,a3,5,a3,v,new A.aKq(),B.bb,!1,!0,!0,a3,y.Z)],w),B.F,a3,B.r,B.z)}}
var z=a.updateTypes(["eF(bv)","bR(bv)","eF(d9)","bR(d9)"])
A.aKa.prototype={
$1(d){var x=d.c,w=this.a,v=w.a,u=!0
if(!B.m.q(x,v.gb4(v))){v=w.a
if(!B.m.q(x,v.geA(v))){w=w.a
w=x===w.gaf(w)
x=w}else x=u}else x=u
return x},
$S:102}
A.aKb.prototype={
$1(d){var x=d.giP(d),w=this.a,v=w.a
if(x!==v.gaf(v)){x=d.giP(d)
w=w.a
w=x===w.gb4(w)
x=w}else x=!0
return x},
$S:36}
A.aKc.prototype={
$1(d){return B.m.bb(d.gdW(d),C.eK())||B.m.q(d.gdW(d),"now")},
$S:36}
A.aKn.prototype={
$2(d,e){return d+e.gh8()},
$S:49}
A.aKr.prototype={
$1(d){return B.m.bb(d.gdW(d),C.eK())||B.m.q(d.gdW(d),"now")},
$S:36}
A.aKs.prototype={
$1(d){return d.y==="Pending Approval"},
$S:102}
A.aKt.prototype={
$1(d){return d.gaI(0)!=="In Stock"},
$S:80}
A.aKu.prototype={
$0(){return F.bLH(this.a,this.b,null,B.c6)},
$S:0}
A.aKv.prototype={
$0(){return this.a.e.$1("pos")},
$S:0}
A.aKw.prototype={
$0(){return this.a.e.$1(this.b.e)},
$S:0}
A.aKj.prototype={
$1(d){return C.a([d.ghc(),d.gjB(),d.gfB(d),d.giP(d)],y.s)},
$S:160}
A.aKi.prototype={
$1(d){return R.anC(this.b,this.c,d,this.a.e)},
$S:161}
A.aKx.prototype={
$1(d){var x=null
return C.h(d.ghc(),x,x,x,x,C.p(x,x,x,x,11.8,B.P),x,x)},
$S:34}
A.aKd.prototype={
$1(d){return K.i2(d.giP(d))},
$S:z+0}
A.aKe.prototype={
$1(d){var x=null,w=S.dT(d.gdW(d))
return C.h(w,x,x,x,x,C.p($.d?B.y:B.v,x,x,x,13.5,B.p),x,x)},
$S:34}
A.aKf.prototype={
$1(d){var x=null
return C.h(C.J(d.gh8()),x,x,x,x,C.p(x,x,x,x,11.8,B.P),x,x)},
$S:34}
A.aKg.prototype={
$1(d){return K.i2(d.gfB(d))},
$S:z+0}
A.aKh.prototype={
$1(d){return M.ea(d.gaI(d))},
$S:z+1}
A.aKq.prototype={
$1(d){return C.a([d.a,d.c,d.e,d.x],y.s)},
$S:201}
A.aKk.prototype={
$1(d){return K.i2(d.c)},
$S:z+2}
A.aKl.prototype={
$1(d){var x=null
return C.h(d.e,x,x,x,x,C.p($.d?B.y:B.v,x,x,x,13.5,B.p),x,x)},
$S:60}
A.aKm.prototype={
$1(d){var x=null
return C.h(""+d.f,x,x,x,x,C.p($.d?B.y:B.v,x,x,x,13.5,B.p),x,x)},
$S:60}
A.aKo.prototype={
$1(d){var x=null
return C.h(d.x,x,x,x,x,C.p($.d?B.y:B.v,x,x,x,13.5,B.p),x,x)},
$S:60}
A.aKp.prototype={
$1(d){return M.ea(d.y)},
$S:z+3};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.yz,C.L)
x(A.BM,C.th)
w(C.cl,[A.aKa,A.aKb,A.aKc,A.aKr,A.aKs,A.aKt,A.aKj,A.aKi,A.aKx,A.aKd,A.aKe,A.aKf,A.aKg,A.aKh,A.aKq,A.aKk,A.aKl,A.aKm,A.aKo,A.aKp])
x(A.aKn,C.dy)
w(C.d_,[A.aKu,A.aKv,A.aKw])})()
C.cy(b.typeUniverse,JSON.parse('{"BM":{"P":[],"e":[]}}'))
var y=(function rtii(){var x=C.G
return{b:x("K<bv>"),V:x("K<d9>"),T:x("m<K<bv>>"),h:x("m<K<d9>>"),s:x("m<c>"),p:x("m<e>"),l:x("j<cN>"),c:x("j<bv>"),J:x("j<d9>"),B:x("j<bs>"),j:x("j<cc>"),u:x("bv"),Z:x("d9"),N:x("c")}})();(function constants(){var x=a.makeConstList
H.au_=x(["POS billing terminal","Held bills & returns","Counter registers"],y.s)
H.aTv=x(["Coupons & discounts","Loyalty members","Combo & BOGO offers"],y.s)})()};
(a=>{a["eh2doswfxqlD4KwsdOLl33ckrdg="]=a.current})($__dart_deferred_initializers__);