((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,Q,R,S,A={
c6V(d){return new A.BJ(d,null)},
yz:function yz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
BJ:function BJ(d,e){this.e=d
this.a=e},
aK3:function aK3(d){this.a=d},
aK4:function aK4(d){this.a=d},
aK5:function aK5(){},
aKg:function aKg(){},
aKk:function aKk(){},
aKl:function aKl(){},
aKm:function aKm(){},
aKn:function aKn(d,e){this.a=d
this.b=e},
aKo:function aKo(d){this.a=d},
aKp:function aKp(d,e){this.a=d
this.b=e},
aKc:function aKc(){},
aKb:function aKb(d,e,f){this.a=d
this.b=e
this.c=f},
aKq:function aKq(){},
aK6:function aK6(){},
aK7:function aK7(){},
aK8:function aK8(){},
aK9:function aK9(){},
aKa:function aKa(){},
aKj:function aKj(){},
aKd:function aKd(){},
aKe:function aKe(){},
aKf:function aKf(){},
aKh:function aKh(){},
aKi:function aKi(){}},H,D,L,M,I,E,T,N,O,F,K,P,G,U,V
J=c[1]
C=c[0]
B=c[2]
Q=c[49]
R=c[55]
S=c[89]
A=a.updateHolder(c[24],A)
H=c[167]
D=c[87]
L=c[108]
M=c[86]
I=c[99]
E=c[94]
T=c[71]
N=c[51]
O=c[72]
F=c[38]
K=c[81]
P=c[104]
G=c[103]
U=c[105]
V=c[107]
A.yz.prototype={}
A.BJ.prototype={
kg(b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="Nothing matches these filters. Clear the search or add a new record.",a5={},a6=b3.T($.cB(),y.B),a7=b3.T($.ez(),y.j),a8=b3.T($.lD(),y.J),a9=b3.T($.lC(),y.c),b0=b3.T($.e6(),y.l),b1=b3.T($.oS(),y.N)
a5.a=null
if(b1!=="All Stores")for(x=J.ab(a6);x.p();){w=x.gE(x)
if(w.gb4(w)+" \u2014 "+w.geA(w)===b1||w.gb4(w)===b1||w.gaf(w)===b1){a5.a=w
break}}if(a5.a==null)v=a8
else{x=J.bj(a8,new A.aK3(a5))
v=C.N(x,x.$ti.i("A.E"))}if(a5.a==null)u=a9
else{x=J.bj(a9,new A.aK4(a5))
u=C.N(x,x.$ti.i("A.E"))}x=J.bW(u)
t=x.cA(u,new A.aK5()).bu(0,0,new A.aKg())
s=x.cA(u,new A.aKk()).gt(0)
r=s>0?B.q.aq(t/s):0
J.bj(v,new A.aKl()).gt(0)
q=J.bj(a7,new A.aKm()).gt(0)
x=$.d?B.bj:B.bp
w=a5.a==null?""+J.W(a6):"1"
p=a5.a
p=p==null?"Active stores in network":"Selected store ("+p.gb4(p)+")"
o=$.d?I.c_:I.c2
n=C.J(t)
m=a5.a
m=m==null?"Network sales today":m.gb4(m)+" sales today"
l=$.d
k=l?B.bj:B.bp
l=l?E.f1:E.fr
j=C.J(r)
i=$.d?E.fY:E.hx
h=T.mo(J.W(b0))
g=$.d
f=g?B.dZ:B.ee
e=q>0?"Action needed":a3
d=[new C.vh([x,B.a6,"store",p,null,!0,w]),new C.vh([o,B.aK,"cart",m,null,!0,n]),new C.vh([k,B.a6,"file","Bills settled today",null,!0,""+s]),new C.vh([l,B.eI,"bars","Average basket value",null,!0,j]),new C.vh([i,B.fq,"users","Total loyalty members",null,!0,h]),new C.vh([f,B.aJ,"alert","Low-stock alerts",e,!1,""+q])]
x=g?B.bj:B.bp
w=g?I.c_:I.c2
p=g?B.cT:B.d3
o=g?E.fY:E.hx
n=g?P.iF:P.k9
m=g?E.f1:E.fr
a0=[new A.yz("store",x,B.a6,"Stores & Network","sa_stores",G.H1),new A.yz("box",w,B.aK,"On Hand Inventory","sa_stock_items",G.GZ),new A.yz("truck",p,B.cp,"Transfers & Requests","sa_transfers",G.G2),new A.yz("cart",o,B.fq,"Point of Sale","pos",H.atY),new A.yz("tag",n,U.k7,"Promotions & Loyalty","coupons",H.aTs),new A.yz("file",m,B.eI,"Reports & Analytics","sa_reports",G.Ga)]
x=a5.a
if(x==null)x="Network-wide workspace across all stores and central inventory \xb7 "+F.bKU()
else{x=x.gb4(x)
w=a5.a
w="Filtered workspace for "+x+" ("+w.geA(w)+") \xb7 "+F.bKU()
x=w}w=y.p
p=C.a([F.bQB(N.bVh(),N.bVi()),C.a0(a3,!1,a3,a3,a3,G.xC,a3,"Create manager",new A.aKn(b2,b3),B.N,B.ah),C.a0(a3,!1,a3,a3,a3,V.qR,a3,"Open POS billing",new A.aKo(this),B.N,B.ah)],w)
o=C.a([],w)
for(a1=0;a1<6;++a1){n=d[a1].a
o.push(new Q.DL(new C.cC(n[2],18,n[1],a3),n[0],n[6],n[3],n[4],n[5],!1,a3))}o=O.t0(6,o,!1)
n=C.a([],w)
for(m=a0.length,a1=0;a1<m;++a1){a2=a0[a1]
n.push(new F.DJ(new C.cC(a2.a,18,a2.c,a3),a2.b,a2.d,a2.f,new A.aKp(this,a2),a3))}m=y.b
l=y.V
return C.S(C.a([new F.Kt("Super Admin Dashboard",x,p,a3),o,B.e6,O.t0(3,n,!1),B.dQ,C.h("Latest network bills",a3,a3,a3,a3,C.p(a3,a3,a3,a3,16,B.R),a3,a3),B.aW,D.es(!1,C.a([new D.L("BILL NO.",new A.aKq(),!1,a3,0,a3,m),new D.L("STORE",new A.aK6(),!1,a3,0,a3,m),new D.L("DATE",new A.aK7(),!1,a3,0,a3,m),new D.L("NET AMOUNT",new A.aK8(),!0,a3,0,a3,m),new D.L("PAID BY",new A.aK9(),!1,a3,0,a3,m),new D.L("STATUS",new A.aKa(),!1,a3,0,a3,m)],y.T),a3,a4,"latest-network-bills",L.fy,!1,a3,a3,a3,new A.aKb(this,b2,b3),a3,a3,5,a3,u,new A.aKc(),B.ba,!1,!0,!0,a3,y.u),B.dQ,C.h("Recent stock requests",a3,a3,a3,a3,C.p(a3,a3,a3,a3,16,B.R),a3,a3),B.aW,D.es(!1,C.a([new D.L("STORE",new A.aKd(),!1,a3,0,a3,l),new D.L("ITEM",new A.aKe(),!1,a3,0,a3,l),new D.L("QTY",new A.aKf(),!0,a3,0,a3,l),new D.L("RAISED BY",new A.aKh(),!1,a3,0,a3,l),new D.L("STATUS",new A.aKi(),!1,a3,0,a3,l)],y.h),a3,a4,"recent-requests",L.fy,!1,a3,a3,a3,a3,a3,a3,5,a3,v,new A.aKj(),B.ba,!1,!0,!0,a3,y.Z)],w),B.H,a3,B.r,B.z)}}
var z=a.updateTypes(["eF(bu)","bX(bu)","eF(d9)","bX(d9)"])
A.aK3.prototype={
$1(d){var x=d.c,w=this.a,v=w.a,u=!0
if(!B.m.q(x,v.gb4(v))){v=w.a
if(!B.m.q(x,v.geA(v))){w=w.a
w=x===w.gaf(w)
x=w}else x=u}else x=u
return x},
$S:98}
A.aK4.prototype={
$1(d){var x=d.giP(d),w=this.a,v=w.a
if(x!==v.gaf(v)){x=d.giP(d)
w=w.a
w=x===w.gb4(w)
x=w}else x=!0
return x},
$S:35}
A.aK5.prototype={
$1(d){return B.m.bb(d.gdW(d),C.eK())||B.m.q(d.gdW(d),"now")},
$S:35}
A.aKg.prototype={
$2(d,e){return d+e.gh8()},
$S:49}
A.aKk.prototype={
$1(d){return B.m.bb(d.gdW(d),C.eK())||B.m.q(d.gdW(d),"now")},
$S:35}
A.aKl.prototype={
$1(d){return d.y==="Pending Approval"},
$S:98}
A.aKm.prototype={
$1(d){return d.gaI(0)!=="In Stock"},
$S:75}
A.aKn.prototype={
$0(){return F.bLl(this.a,this.b,null,B.c6)},
$S:0}
A.aKo.prototype={
$0(){return this.a.e.$1("pos")},
$S:0}
A.aKp.prototype={
$0(){return this.a.e.$1(this.b.e)},
$S:0}
A.aKc.prototype={
$1(d){return C.a([d.ghc(),d.gjB(),d.gfB(d),d.giP(d)],y.s)},
$S:170}
A.aKb.prototype={
$1(d){return R.any(this.b,this.c,d,this.a.e)},
$S:149}
A.aKq.prototype={
$1(d){var x=null
return C.h(d.ghc(),x,x,x,x,C.p(x,x,x,x,11.8,B.R),x,x)},
$S:33}
A.aK6.prototype={
$1(d){return K.i2(d.giP(d))},
$S:z+0}
A.aK7.prototype={
$1(d){var x=null,w=S.ee(d.gdW(d))
return C.h(w,x,x,x,x,C.p($.d?B.y:B.w,x,x,x,13.5,B.p),x,x)},
$S:33}
A.aK8.prototype={
$1(d){var x=null
return C.h(C.J(d.gh8()),x,x,x,x,C.p(x,x,x,x,11.8,B.R),x,x)},
$S:33}
A.aK9.prototype={
$1(d){return K.i2(d.gfB(d))},
$S:z+0}
A.aKa.prototype={
$1(d){return M.ef(d.gaI(d))},
$S:z+1}
A.aKj.prototype={
$1(d){return C.a([d.a,d.c,d.e,d.x],y.s)},
$S:227}
A.aKd.prototype={
$1(d){return K.i2(d.c)},
$S:z+2}
A.aKe.prototype={
$1(d){var x=null
return C.h(d.e,x,x,x,x,C.p($.d?B.y:B.w,x,x,x,13.5,B.p),x,x)},
$S:56}
A.aKf.prototype={
$1(d){var x=null
return C.h(""+d.f,x,x,x,x,C.p($.d?B.y:B.w,x,x,x,13.5,B.p),x,x)},
$S:56}
A.aKh.prototype={
$1(d){var x=null
return C.h(d.x,x,x,x,x,C.p($.d?B.y:B.w,x,x,x,13.5,B.p),x,x)},
$S:56}
A.aKi.prototype={
$1(d){return M.ef(d.y)},
$S:z+3};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.yz,C.K)
x(A.BJ,C.tg)
w(C.cm,[A.aK3,A.aK4,A.aK5,A.aKk,A.aKl,A.aKm,A.aKc,A.aKb,A.aKq,A.aK6,A.aK7,A.aK8,A.aK9,A.aKa,A.aKj,A.aKd,A.aKe,A.aKf,A.aKh,A.aKi])
x(A.aKg,C.dB)
w(C.d2,[A.aKn,A.aKo,A.aKp])})()
C.cy(b.typeUniverse,JSON.parse('{"BJ":{"P":[],"e":[]}}'))
var y=(function rtii(){var x=C.G
return{b:x("L<bu>"),V:x("L<d9>"),T:x("m<L<bu>>"),h:x("m<L<d9>>"),s:x("m<c>"),p:x("m<e>"),l:x("j<cM>"),c:x("j<bu>"),J:x("j<d9>"),B:x("j<br>"),j:x("j<cb>"),u:x("bu"),Z:x("d9"),N:x("c")}})();(function constants(){var x=a.makeConstList
H.atY=x(["POS billing terminal","Held bills & returns","Counter registers"],y.s)
H.aTs=x(["Coupons & discounts","Loyalty members","Combo & BOGO offers"],y.s)})()};
(a=>{a["JRdriuHvReK5+aqwO1LSUX/Z+hw="]=a.current})($__dart_deferred_initializers__);