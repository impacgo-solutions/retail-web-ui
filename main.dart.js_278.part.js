((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,Q,R,S,T,U,A={
clm(d){return new A.CK(d,null)},
zt:function zt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CK:function CK(d,e){this.e=d
this.a=e},
aN2:function aN2(d){this.a=d},
aN3:function aN3(d){this.a=d},
aN4:function aN4(){},
aNf:function aNf(){},
aNj:function aNj(){},
aNk:function aNk(){},
aNl:function aNl(){},
aNm:function aNm(d,e){this.a=d
this.b=e},
aNn:function aNn(d){this.a=d},
aNo:function aNo(d,e){this.a=d
this.b=e},
aNb:function aNb(){},
aNa:function aNa(d,e,f){this.a=d
this.b=e
this.c=f},
aNp:function aNp(){},
aN5:function aN5(){},
aN6:function aN6(){},
aN7:function aN7(){},
aN8:function aN8(){},
aN9:function aN9(){},
aNi:function aNi(){},
aNc:function aNc(){},
aNd:function aNd(){},
aNe:function aNe(){},
aNg:function aNg(){},
aNh:function aNh(){}},H,D,L,M,I,V,E,F,N,G,O,K,P
J=c[1]
C=c[0]
B=c[2]
Q=c[154]
R=c[156]
S=c[73]
T=c[83]
U=c[112]
A=a.updateHolder(c[24],A)
H=c[232]
D=c[111]
L=c[157]
M=c[110]
I=c[127]
V=c[96]
E=c[126]
F=c[50]
N=c[67]
G=c[152]
O=c[98]
K=c[103]
P=c[153]
A.zt.prototype={}
A.CK.prototype={
jM(b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="Nothing matches these filters. Clear the search or add a new record.",a5={},a6=b3.U($.cF(),y.B),a7=b3.U($.eK(),y.j),a8=b3.U($.mc(),y.J),a9=b3.U($.mb(),y.c),b0=b3.U($.en(),y.l),b1=b3.U($.pi(),y.N)
a5.a=null
if(b1!=="All Stores")for(x=J.a4(a6);x.p();){w=x.gB(x)
if(w.gb5(w)+" \u2014 "+w.gem(w)===b1||w.gb5(w)===b1||w.gaj(w)===b1){a5.a=w
break}}if(a5.a==null)v=a8
else{x=J.ba(a8,new A.aN2(a5))
v=C.T(x,x.$ti.i("D.E"))}if(a5.a==null)u=a9
else{x=J.ba(a9,new A.aN3(a5))
u=C.T(x,x.$ti.i("D.E"))}x=J.cf(u)
t=x.cz(u,new A.aN4()).bi(0,0,new A.aNf())
s=x.cz(u,new A.aNj()).gu(0)
r=s>0?B.q.am(t/s):0
J.ba(v,new A.aNk()).gu(0)
q=J.ba(a7,new A.aNl()).gu(0)
x=$.d?B.b5:B.b9
w=a5.a==null?""+J.Y(a6):"1"
p=a5.a
p=p==null?"Active stores in network":"Selected store ("+p.gb5(p)+")"
o=$.d?I.bN:I.bT
n=C.K(t)
m=a5.a
m=m==null?"Network sales today":m.gb5(m)+" sales today"
l=$.d
k=l?B.b5:B.b9
l=l?E.en:E.eD
j=C.K(r)
i=$.d?E.hg:E.hQ
h=V.ih(J.Y(b0))
g=$.d
f=g?B.dp:B.dF
e=q>0?"Action needed":a3
d=[new C.vV([x,B.a7,"store",p,null,!0,w]),new C.vV([o,B.aN,"cart",m,null,!0,n]),new C.vV([k,B.a7,"file","Bills settled today",null,!0,""+s]),new C.vV([l,B.ec,"bars","Average basket value",null,!0,j]),new C.vV([i,B.fJ,"users","Total loyalty members",null,!0,h]),new C.vV([f,B.aI,"alert","Low-stock alerts",e,!1,""+q])]
x=g?B.b5:B.b9
w=g?I.bN:I.bT
p=g?B.cd:B.ch
o=g?E.hg:E.hQ
n=g?P.j0:P.kL
m=g?E.en:E.eD
a0=[new A.zt("store",x,B.a7,"Stores & Network","sa_stores",G.HN),new A.zt("box",w,B.aN,"On Hand Inventory","sa_stock_items",G.HK),new A.zt("truck",p,B.bZ,"Transfers & Requests","sa_transfers",G.GN),new A.zt("cart",o,B.fJ,"Point of Sale","pos",H.avl),new A.zt("tag",n,Q.kJ,"Promotions & Loyalty","coupons",H.aWa),new A.zt("file",m,B.ec,"Reports & Analytics","sa_reports",G.GV)]
x=a5.a
if(x==null)x="Network-wide workspace across all stores and central inventory \xb7 "+F.bZ3()
else{x=x.gb5(x)
w=a5.a
w="Filtered workspace for "+x+" ("+w.gem(w)+") \xb7 "+F.bZ3()
x=w}w=y.p
p=C.a([F.c3Q(N.c8L(),N.c8M()),C.O(a3,!1,a3,a3,a3,G.yf,a3,"Create manager",new A.aNm(b2,b3),B.C,B.a8),C.O(a3,!1,a3,a3,a3,R.ry,a3,"Open POS billing",new A.aNn(this),B.C,B.a8)],w)
o=C.a([],w)
for(a1=0;a1<6;++a1){n=d[a1].a
o.push(new T.ER(new C.cM(n[2],18,n[1],a3),n[0],n[6],n[3],n[4],n[5],!1,a3))}o=O.n5(6,o,!1)
n=C.a([],w)
for(a1=0;a1<6;++a1){a2=a0[a1]
n.push(new F.EP(new C.cM(a2.a,18,a2.c,a3),a2.b,a2.d,a2.f,new A.aNo(this,a2),a3))}m=y.b
l=y.V
return C.I(C.a([new F.LT("Super Admin Dashboard",x,p,a3),o,B.dO,O.n5(3,n,!1),B.da,C.e("Latest network bills",a3,a3,a3,a3,a3,C.k(a3,a3,a3,a3,16,B.H),a3,a3),B.aF,D.ef(!1,C.a([new D.M("BILL NO.",new A.aNp(),!1,a3,a3,0,a3,m),new D.M("STORE",new A.aN5(),!1,a3,a3,0,a3,m),new D.M("DATE",new A.aN6(),!1,a3,a3,0,a3,m),new D.M("NET AMOUNT",new A.aN7(),!0,a3,a3,0,a3,m),new D.M("PAID BY",new A.aN8(),!1,a3,a3,0,a3,m),new D.M("STATUS",new A.aN9(),!1,a3,a3,0,a3,m)],y.T),a3,a4,"latest-network-bills",L.f0,!1,a3,a3,a3,new A.aNa(this,b2,b3),a3,a3,5,a3,u,new A.aNb(),B.bf,!1,!1,!0,!0,a3,y.u),B.da,C.e("Recent stock requests",a3,a3,a3,a3,a3,C.k(a3,a3,a3,a3,16,B.H),a3,a3),B.aF,D.ef(!1,C.a([new D.M("STORE",new A.aNc(),!1,a3,a3,0,a3,l),new D.M("ITEM",new A.aNd(),!1,a3,a3,0,a3,l),new D.M("QTY",new A.aNe(),!0,a3,a3,0,a3,l),new D.M("RAISED BY",new A.aNg(),!1,a3,a3,0,a3,l),new D.M("STATUS",new A.aNh(),!1,a3,a3,0,a3,l)],y.h),a3,a4,"recent-requests",L.f0,!1,a3,a3,a3,a3,a3,a3,5,a3,v,new A.aNi(),B.bf,!1,!1,!0,!0,a3,y.Z)],w),B.A,a3,B.o,B.u)}}
var z=a.updateTypes(["eD(bG)","bA(bG)","eD(dv)","bA(dv)"])
A.aN2.prototype={
$1(d){var x=d.c,w=this.a,v=w.a,u=!0
if(!B.h.q(x,v.gb5(v))){v=w.a
if(!B.h.q(x,v.gem(v))){w=w.a
w=x===w.gaj(w)
x=w}else x=u}else x=u
return x},
$S:99}
A.aN3.prototype={
$1(d){var x=d.gj3(d),w=this.a,v=w.a
if(x!==v.gaj(v)){x=d.gj3(d)
w=w.a
w=x===w.gb5(w)
x=w}else x=!0
return x},
$S:38}
A.aN4.prototype={
$1(d){return B.h.b8(d.gdY(d),C.f7())||B.h.q(d.gdY(d),"now")},
$S:38}
A.aNf.prototype={
$2(d,e){return d+e.gho()},
$S:55}
A.aNj.prototype={
$1(d){return B.h.b8(d.gdY(d),C.f7())||B.h.q(d.gdY(d),"now")},
$S:38}
A.aNk.prototype={
$1(d){return d.y==="Pending Approval"},
$S:99}
A.aNl.prototype={
$1(d){return d.gaK(0)!=="In Stock"},
$S:74}
A.aNm.prototype={
$0(){return F.bZs(this.a,this.b,null,B.cr)},
$S:0}
A.aNn.prototype={
$0(){return this.a.e.$1("pos")},
$S:0}
A.aNo.prototype={
$0(){return this.a.e.$1(this.b.e)},
$S:0}
A.aNb.prototype={
$1(d){return C.a([d.ghu(),d.gjN(),d.gfN(d),d.gj3(d)],y.s)},
$S:151}
A.aNa.prototype={
$1(d){return S.apH(this.b,this.c,d,this.a.e)},
$S:149}
A.aNp.prototype={
$1(d){var x=null
return C.e(d.ghu(),x,x,x,x,x,C.k(x,x,x,x,11.8,B.H),x,x)},
$S:37}
A.aN5.prototype={
$1(d){return K.im(d.gj3(d))},
$S:z+0}
A.aN6.prototype={
$1(d){var x=null,w=U.dE(d.gdY(d))
return C.e(w,x,x,x,x,x,C.k($.d?B.v:B.t,x,x,x,13.5,B.n),x,x)},
$S:37}
A.aN7.prototype={
$1(d){var x=null
return C.e(C.K(d.gho()),x,x,x,x,x,C.k(x,x,x,x,11.8,B.H),x,x)},
$S:37}
A.aN8.prototype={
$1(d){return K.im(d.gfN(d))},
$S:z+0}
A.aN9.prototype={
$1(d){return M.dn(d.gaK(d))},
$S:z+1}
A.aNi.prototype={
$1(d){return C.a([d.a,d.c,d.e,d.x],y.s)},
$S:208}
A.aNc.prototype={
$1(d){return K.im(d.c)},
$S:z+2}
A.aNd.prototype={
$1(d){var x=null
return C.e(d.e,x,x,x,x,x,C.k($.d?B.v:B.t,x,x,x,13.5,B.n),x,x)},
$S:62}
A.aNe.prototype={
$1(d){var x=null
return C.e(""+d.f,x,x,x,x,x,C.k($.d?B.v:B.t,x,x,x,13.5,B.n),x,x)},
$S:62}
A.aNg.prototype={
$1(d){var x=null
return C.e(d.x,x,x,x,x,x,C.k($.d?B.v:B.t,x,x,x,13.5,B.n),x,x)},
$S:62}
A.aNh.prototype={
$1(d){return M.dn(d.y)},
$S:z+3};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.zt,C.P)
x(A.CK,C.r3)
w(C.bQ,[A.aN2,A.aN3,A.aN4,A.aNj,A.aNk,A.aNl,A.aNb,A.aNa,A.aNp,A.aN5,A.aN6,A.aN7,A.aN8,A.aN9,A.aNi,A.aNc,A.aNd,A.aNe,A.aNg,A.aNh])
x(A.aNf,C.cT)
w(C.cD,[A.aNm,A.aNn,A.aNo])})()
C.bP(b.typeUniverse,JSON.parse('{"CK":{"Q":[],"f":[]}}'))
var y=(function rtii(){var x=C.G
return{b:x("M<bG>"),V:x("M<dv>"),T:x("l<M<bG>>"),h:x("l<M<dv>>"),s:x("l<c>"),p:x("l<f>"),l:x("i<d1>"),c:x("i<bG>"),J:x("i<dv>"),B:x("i<bH>"),j:x("i<cp>"),u:x("bG"),Z:x("dv"),N:x("c")}})();(function constants(){var x=a.makeConstList
H.avl=x(["POS billing terminal","Held bills & returns","Counter registers"],y.s)
H.aWa=x(["Coupons & discounts","Loyalty members","Combo & BOGO offers"],y.s)})()};
(a=>{a["wr/g3obC0t4apMmn5ea8d9B9g2o="]=a.current})($__dart_deferred_initializers__);