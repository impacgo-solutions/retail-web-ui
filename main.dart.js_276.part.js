((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,Q,R,S,T,U,A={
clo(d){return new A.CI(d,null)},
zr:function zr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CI:function CI(d,e){this.e=d
this.a=e},
aN0:function aN0(d){this.a=d},
aN1:function aN1(d){this.a=d},
aN2:function aN2(){},
aNd:function aNd(){},
aNh:function aNh(){},
aNi:function aNi(){},
aNj:function aNj(){},
aNk:function aNk(d,e){this.a=d
this.b=e},
aNl:function aNl(d){this.a=d},
aNm:function aNm(d,e){this.a=d
this.b=e},
aN9:function aN9(){},
aN8:function aN8(d,e,f){this.a=d
this.b=e
this.c=f},
aNn:function aNn(){},
aN3:function aN3(){},
aN4:function aN4(){},
aN5:function aN5(){},
aN6:function aN6(){},
aN7:function aN7(){},
aNg:function aNg(){},
aNa:function aNa(){},
aNb:function aNb(){},
aNc:function aNc(){},
aNe:function aNe(){},
aNf:function aNf(){}},H,D,L,M,I,V,E,F,N,G,O,K,P
J=c[1]
C=c[0]
B=c[2]
Q=c[153]
R=c[155]
S=c[72]
T=c[82]
U=c[111]
A=a.updateHolder(c[24],A)
H=c[231]
D=c[110]
L=c[156]
M=c[109]
I=c[126]
V=c[95]
E=c[125]
F=c[50]
N=c[66]
G=c[151]
O=c[97]
K=c[102]
P=c[152]
A.zr.prototype={}
A.CI.prototype={
jM(b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="Nothing matches these filters. Clear the search or add a new record.",a5={},a6=b3.U($.cF(),y.B),a7=b3.U($.eL(),y.j),a8=b3.U($.mc(),y.J),a9=b3.U($.mb(),y.c),b0=b3.U($.en(),y.l),b1=b3.U($.pi(),y.N)
a5.a=null
if(b1!=="All Stores")for(x=J.a3(a6);x.p();){w=x.gB(x)
if(w.gb5(w)+" \u2014 "+w.gem(w)===b1||w.gb5(w)===b1||w.gaj(w)===b1){a5.a=w
break}}if(a5.a==null)v=a8
else{x=J.b9(a8,new A.aN0(a5))
v=C.T(x,x.$ti.i("E.E"))}if(a5.a==null)u=a9
else{x=J.b9(a9,new A.aN1(a5))
u=C.T(x,x.$ti.i("E.E"))}x=J.cf(u)
t=x.cz(u,new A.aN2()).bj(0,0,new A.aNd())
s=x.cz(u,new A.aNh()).gu(0)
r=s>0?B.q.am(t/s):0
J.b9(v,new A.aNi()).gu(0)
q=J.b9(a7,new A.aNj()).gu(0)
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
h=V.ig(J.Y(b0))
g=$.d
f=g?B.dp:B.dF
e=q>0?"Action needed":a3
d=[new C.vU([x,B.a7,"store",p,null,!0,w]),new C.vU([o,B.aN,"cart",m,null,!0,n]),new C.vU([k,B.a7,"file","Bills settled today",null,!0,""+s]),new C.vU([l,B.ec,"bars","Average basket value",null,!0,j]),new C.vU([i,B.fJ,"users","Total loyalty members",null,!0,h]),new C.vU([f,B.aI,"alert","Low-stock alerts",e,!1,""+q])]
x=g?B.b5:B.b9
w=g?I.bN:I.bT
p=g?B.cd:B.ch
o=g?E.hg:E.hQ
n=g?P.j0:P.kK
m=g?E.en:E.eD
a0=[new A.zr("store",x,B.a7,"Stores & Network","sa_stores",G.HM),new A.zr("box",w,B.aN,"On Hand Inventory","sa_stock_items",G.HK),new A.zr("truck",p,B.bZ,"Transfers & Requests","sa_transfers",G.GN),new A.zr("cart",o,B.fJ,"Point of Sale","pos",H.avk),new A.zr("tag",n,Q.kI,"Promotions & Loyalty","coupons",H.aWa),new A.zr("file",m,B.ec,"Reports & Analytics","sa_reports",G.GV)]
x=a5.a
if(x==null)x="Network-wide workspace across all stores and central inventory \xb7 "+F.bZ6()
else{x=x.gb5(x)
w=a5.a
w="Filtered workspace for "+x+" ("+w.gem(w)+") \xb7 "+F.bZ6()
x=w}w=y.p
p=C.a([F.c3T(N.c8N(),N.c8O()),C.O(a3,!1,a3,a3,a3,G.yf,a3,"Create manager",new A.aNk(b2,b3),B.C,B.a8),C.O(a3,!1,a3,a3,a3,R.rz,a3,"Open POS billing",new A.aNl(this),B.C,B.a8)],w)
o=C.a([],w)
for(a1=0;a1<6;++a1){n=d[a1].a
o.push(new T.EP(new C.cM(n[2],18,n[1],a3),n[0],n[6],n[3],n[4],n[5],!1,a3))}o=O.n5(6,o,!1)
n=C.a([],w)
for(a1=0;a1<6;++a1){a2=a0[a1]
n.push(new F.EN(new C.cM(a2.a,18,a2.c,a3),a2.b,a2.d,a2.f,new A.aNm(this,a2),a3))}m=y.b
l=y.V
return C.I(C.a([new F.LQ("Super Admin Dashboard",x,p,a3),o,B.dO,O.n5(3,n,!1),B.d9,C.e("Latest network bills",a3,a3,a3,a3,a3,C.k(a3,a3,a3,a3,16,B.H),a3,a3),B.aF,D.ef(!1,C.a([new D.M("BILL NO.",new A.aNn(),!1,a3,a3,0,a3,m),new D.M("STORE",new A.aN3(),!1,a3,a3,0,a3,m),new D.M("DATE",new A.aN4(),!1,a3,a3,0,a3,m),new D.M("NET AMOUNT",new A.aN5(),!0,a3,a3,0,a3,m),new D.M("PAID BY",new A.aN6(),!1,a3,a3,0,a3,m),new D.M("STATUS",new A.aN7(),!1,a3,a3,0,a3,m)],y.T),a3,a4,"latest-network-bills",L.f0,!1,a3,a3,a3,new A.aN8(this,b2,b3),a3,a3,5,a3,u,new A.aN9(),B.bf,!1,!1,!0,!0,a3,y.u),B.d9,C.e("Recent stock requests",a3,a3,a3,a3,a3,C.k(a3,a3,a3,a3,16,B.H),a3,a3),B.aF,D.ef(!1,C.a([new D.M("STORE",new A.aNa(),!1,a3,a3,0,a3,l),new D.M("ITEM",new A.aNb(),!1,a3,a3,0,a3,l),new D.M("QTY",new A.aNc(),!0,a3,a3,0,a3,l),new D.M("RAISED BY",new A.aNe(),!1,a3,a3,0,a3,l),new D.M("STATUS",new A.aNf(),!1,a3,a3,0,a3,l)],y.h),a3,a4,"recent-requests",L.f0,!1,a3,a3,a3,a3,a3,a3,5,a3,v,new A.aNg(),B.bf,!1,!1,!0,!0,a3,y.Z)],w),B.A,a3,B.o,B.u)}}
var z=a.updateTypes(["eD(bG)","bA(bG)","eD(dw)","bA(dw)"])
A.aN0.prototype={
$1(d){var x=d.c,w=this.a,v=w.a,u=!0
if(!B.h.q(x,v.gb5(v))){v=w.a
if(!B.h.q(x,v.gem(v))){w=w.a
w=x===w.gaj(w)
x=w}else x=u}else x=u
return x},
$S:103}
A.aN1.prototype={
$1(d){var x=d.gj3(d),w=this.a,v=w.a
if(x!==v.gaj(v)){x=d.gj3(d)
w=w.a
w=x===w.gb5(w)
x=w}else x=!0
return x},
$S:39}
A.aN2.prototype={
$1(d){return B.h.b8(d.gdY(d),C.f7())||B.h.q(d.gdY(d),"now")},
$S:39}
A.aNd.prototype={
$2(d,e){return d+e.gho()},
$S:56}
A.aNh.prototype={
$1(d){return B.h.b8(d.gdY(d),C.f7())||B.h.q(d.gdY(d),"now")},
$S:39}
A.aNi.prototype={
$1(d){return d.y==="Pending Approval"},
$S:103}
A.aNj.prototype={
$1(d){return d.gaK(0)!=="In Stock"},
$S:74}
A.aNk.prototype={
$0(){return F.bZv(this.a,this.b,null,B.cr)},
$S:0}
A.aNl.prototype={
$0(){return this.a.e.$1("pos")},
$S:0}
A.aNm.prototype={
$0(){return this.a.e.$1(this.b.e)},
$S:0}
A.aN9.prototype={
$1(d){return C.a([d.ghu(),d.gjN(),d.gfN(d),d.gj3(d)],y.s)},
$S:158}
A.aN8.prototype={
$1(d){return S.apF(this.b,this.c,d,this.a.e)},
$S:183}
A.aNn.prototype={
$1(d){var x=null
return C.e(d.ghu(),x,x,x,x,x,C.k(x,x,x,x,11.8,B.H),x,x)},
$S:35}
A.aN3.prototype={
$1(d){return K.il(d.gj3(d))},
$S:z+0}
A.aN4.prototype={
$1(d){var x=null,w=U.dE(d.gdY(d))
return C.e(w,x,x,x,x,x,C.k($.d?B.v:B.t,x,x,x,13.5,B.n),x,x)},
$S:35}
A.aN5.prototype={
$1(d){var x=null
return C.e(C.K(d.gho()),x,x,x,x,x,C.k(x,x,x,x,11.8,B.H),x,x)},
$S:35}
A.aN6.prototype={
$1(d){return K.il(d.gfN(d))},
$S:z+0}
A.aN7.prototype={
$1(d){return M.dn(d.gaK(d))},
$S:z+1}
A.aNg.prototype={
$1(d){return C.a([d.a,d.c,d.e,d.x],y.s)},
$S:227}
A.aNa.prototype={
$1(d){return K.il(d.c)},
$S:z+2}
A.aNb.prototype={
$1(d){var x=null
return C.e(d.e,x,x,x,x,x,C.k($.d?B.v:B.t,x,x,x,13.5,B.n),x,x)},
$S:60}
A.aNc.prototype={
$1(d){var x=null
return C.e(""+d.f,x,x,x,x,x,C.k($.d?B.v:B.t,x,x,x,13.5,B.n),x,x)},
$S:60}
A.aNe.prototype={
$1(d){var x=null
return C.e(d.x,x,x,x,x,x,C.k($.d?B.v:B.t,x,x,x,13.5,B.n),x,x)},
$S:60}
A.aNf.prototype={
$1(d){return M.dn(d.y)},
$S:z+3};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.zr,C.P)
x(A.CI,C.r3)
w(C.bQ,[A.aN0,A.aN1,A.aN2,A.aNh,A.aNi,A.aNj,A.aN9,A.aN8,A.aNn,A.aN3,A.aN4,A.aN5,A.aN6,A.aN7,A.aNg,A.aNa,A.aNb,A.aNc,A.aNe,A.aNf])
x(A.aNd,C.cY)
w(C.cD,[A.aNk,A.aNl,A.aNm])})()
C.bP(b.typeUniverse,JSON.parse('{"CI":{"Q":[],"f":[]}}'))
var y=(function rtii(){var x=C.G
return{b:x("M<bG>"),V:x("M<dw>"),T:x("l<M<bG>>"),h:x("l<M<dw>>"),s:x("l<c>"),p:x("l<f>"),l:x("i<d1>"),c:x("i<bG>"),J:x("i<dw>"),B:x("i<bH>"),j:x("i<cp>"),u:x("bG"),Z:x("dw"),N:x("c")}})();(function constants(){var x=a.makeConstList
H.avk=x(["POS billing terminal","Held bills & returns","Counter registers"],y.s)
H.aWa=x(["Coupons & discounts","Loyalty members","Combo & BOGO offers"],y.s)})()};
(a=>{a["v5u2xEBWfRBht3/Qm+EQaj+D+bs="]=a.current})($__dart_deferred_initializers__);