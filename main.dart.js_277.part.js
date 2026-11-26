((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,L,M,F,N,G,H,O,P,A={Ay:function Ay(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
coP(d){return new A.yR(d,null)},
cvx(d,e,f){var w=null,v=B.a([new G.bj(!1,"Date",H.fT,new A.bJX(),A.ccs(),w,w,w,x.U)],x.O),u=x.T,t=x.p
B.bs(d,B.I(B.a([D.e8(!1,B.a([new D.L("Shift",new A.bJY(),!1,w,w,0,w,u),new D.L("Cashier",new A.bJZ(),!1,w,w,0,w,u),new D.L("Date",new A.bK1(),!1,w,w,0,w,u),new D.L("Start",new A.bK2(),!1,w,w,0,w,u),new D.L("End",new A.bK3(),!1,w,w,0,w,u),new D.L("Total Hours",new A.bK4(),!1,w,w,0,w,u),new D.L("Bills",new A.bK5(),!0,w,w,0,w,u),new D.L("Total Sales",new A.bK6(),!0,w,w,0,w,u),new D.L("Status",new A.bK7(),!1,w,w,0,w,u)],x.R),w,y.a,"all-shifts-dialog",v,!1,w,w,w,new A.bK8(d,f),w,w,8,w,e,new A.bK_(),C.b9,!1,!1,!0,!0,w,x.b)],t),C.B,w,C.p,C.M),B.a([B.N(w,!1,w,w,w,w,w,"Close",new A.bK0(d),C.D,C.af)],t),"All Cashier Shifts & History",C.bH,x.z)},
bIf(d,e,f){var w,v,u,t,s,r=B.jX(d.f)
if(r==null)return!0
if(e==="Select date range"&&f!=null){w=f.a
v=B.cF(B.bi(w),B.bb(w),B.cQ(w),0,0,0,0)
w=f.b
u=B.cF(B.bi(w),B.bb(w),B.cQ(w),23,59,59,0)
return r.od(v.fn(-1e6))&&r.md(u)}t=B.kZ(B.eU())
s=C.t.bj(t.dK(r).a,864e8)
switch(e){case"This week":w=s>=0&&s<=7
break
case"This month":w=B.bb(r)===B.bb(t)&&B.bi(r)===B.bi(t)
break
default:w=!0
break}return w},
c_B(d){var w,v,u,t,s,r=d.r
if(r.length===0||r==="\u2014")return"\u2014"
w=new A.bGD()
v=w.$1(r)
if(v==null)return"\u2014"
r=d.w
if(r==="\u2014"||r.length===0)u=B.cF(2026,1,1,18,0,0,0)
else{t=w.$1(r)
if(t==null)return"\u2014"
u=t}s=C.t.bj(u.dK(v).a,6e7)
return C.r.a3((s<0?s+1440:s)/60,1)+"h"},
cas(d,e,f){var w,v,u,t=null,s=x.p,r=B.a([new B.e_(B.a([new B.Y("Cashier",e.b,!1),new B.Y("Register",e.e+" \xb7 "+e.d,!1),new B.Y("Date",E.dF(e.f),!1),new B.Y("Window",e.r+" \u2192 "+e.w,!1),new B.Y("Total Hours",A.c_B(e),!1),new B.Y("Bills",""+e.ax,!1)],x.H),2,t),new B.a6(R.jl,B.e("Tender-wise takings",t,t,t,t,t,B.k(t,t,t,t,16,C.I),t,t),t),new A.Ay(C.aO,"Cash",B.J(e.z),t),new A.Ay(C.a8,"Card",B.J(e.Q),t),new A.Ay(C.fL,"UPI",B.J(e.as),t),new A.Ay(C.ef,"Wallet",B.J(e.at),t),A.cb_("Total sales",B.J(e.y),t,!0)],s),q=e.ay
if(q==="Closed"){w=e.ch
v=w===0
if(v)w="Tallied \u2713"
else w=B.J(w==null?0:w)
r.push(A.cb_("Closing variance",w,v?C.aO:C.aI,!1))}u=B.I(r,C.B,t,C.p,C.M)
s=B.a([],s)
if(q==="Open")s.push(B.N(t,!1,t,t,t,P.rH,t,"Close this shift",new A.bLu(d,f),C.D,C.c_))
else s.push(B.N(t,!1,t,t,t,B.bC("printer",$.d?C.w:C.u,14),t,"Print Z-report",new A.bLv(d),C.D,C.af))
N.ln(d,u,s,"Cashier shift \xb7 "+e.c,e.a,x.z)},
cb_(d,e,f,g){var w,v,u,t,s=null,r=g?8:3
if(g)w=new B.a_(s,s,new B.bM(new B.aK($.d?C.Y:C.Z,1,C.L,-1),C.Q,C.Q,C.Q),s,s,s,C.F)
else w=s
v=g?8:0
if(g)u=B.k($.d?C.w:C.u,s,s,s,17,C.bC)
else u=B.k($.d?C.X:C.U,F.cd,s,s,13,C.n)
u=B.e(d,s,s,s,s,s,u,s,s)
if(g)t=B.k($.d?C.w:C.u,s,s,s,17,C.bC)
else t=B.k($.d?C.X:C.U,F.cd,s,s,13,C.n)
return new B.a6(new B.ae(0,r,0,3),B.T(s,B.W(B.a([u,B.e(e,s,s,s,s,s,t.mS(f,f!=null?C.a7:s),s,s)],x.p),C.C,C.bX,C.v),C.A,s,s,w,s,s,s,s,new B.ae(0,v,0,0),s,s,s),s)},
bMt:function bMt(){},
yR:function yR(d,e){this.d=d
this.a=e},
alH:function alH(){this.d=$
this.c=this.a=null},
by5:function by5(d){this.a=d},
bxK:function bxK(){},
bxL:function bxL(d){this.a=d},
bxM:function bxM(){},
bxN:function bxN(d){this.a=d},
bxY:function bxY(d){this.a=d},
bxZ:function bxZ(d){this.a=d},
by_:function by_(d){this.a=d},
by0:function by0(d,e,f){this.a=d
this.b=e
this.c=f},
bxX:function bxX(){},
by1:function by1(){},
by2:function by2(){},
by3:function by3(){},
bxW:function bxW(d,e){this.a=d
this.b=e},
by4:function by4(){},
bxO:function bxO(){},
bxP:function bxP(){},
bxQ:function bxQ(){},
bxR:function bxR(){},
bxS:function bxS(){},
bxT:function bxT(){},
bxU:function bxU(){},
bxV:function bxV(){},
bK_:function bK_(){},
bJX:function bJX(){},
bK8:function bK8(d,e){this.a=d
this.b=e},
bJY:function bJY(){},
bJZ:function bJZ(){},
bK1:function bK1(){},
bK2:function bK2(){},
bK3:function bK3(){},
bK4:function bK4(){},
bK5:function bK5(){},
bK6:function bK6(){},
bK7:function bK7(){},
bK0:function bK0(d){this.a=d},
bGD:function bGD(){},
bLu:function bLu(d,e){this.a=d
this.b=e},
bLv:function bLv(d){this.a=d}},Q,R,D,I,S,K
J=c[1]
B=c[0]
C=c[2]
E=c[114]
L=c[81]
M=c[87]
F=c[165]
N=c[108]
G=c[110]
H=c[192]
O=c[82]
P=c[230]
A=a.updateHolder(c[22],A)
Q=c[127]
R=c[185]
D=c[113]
I=c[112]
S=c[119]
K=c[65]
A.Ay.prototype={
I(d){var w=null
return new B.a6(C.eN,B.W(B.a([B.T(w,w,C.A,w,w,new B.a_(this.c,w,w,B.at(3),w,w,C.F),w,9,w,Q.AJ,w,w,w,9),B.aC(B.e(this.d,w,w,w,w,w,B.k(w,w,w,w,12.5,C.n),w,w),1),B.e(this.e,w,w,w,w,w,B.k(w,w,w,w,12.5,C.n).aTB(F.cd,C.a7),w,w)],x.p),C.C,C.p,C.v),w)},
geP(d){return this.d}}
A.yR.prototype={
V(){return new A.alH()}}
A.alH.prototype={
ak(){this.av()
$.az.rx$.push(new A.by5(this))},
u9(){var w=0,v=B.t(x.n),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$u9=B.o(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:j=r.gO()
i=j.m(0,$.af(),x.S)
h=i
g=h==null?null:h.Q
f=g==null?"":g
if(J.S(f)===0){w=1
break}t=4
h=$.cx()
w=7
return B.h(j.m(0,h.gK(),x.V).bg(f),$async$u9)
case 7:if(r.c==null){w=1
break}q=j.m(0,h,x.B)
h=x.N
m=j.m(0,$.e7(),h)
l=i.r
p=M.a0g(J.b7(q,new A.bxK(),h).aF(0),m,l)
l=$.jV()
w=8
return B.h(j.m(0,l.gK(),x.Z).eo(f,p),$async$u9)
case 8:if(r.c==null){w=1
break}o=j.m(0,l,x.D)
w=9
return B.h(j.m(0,$.iP().gK(),x.h).ho(f,p,o),$async$u9)
case 9:t=2
w=6
break
case 4:t=3
e=s.pop()
j=B.Q(e)
if(j instanceof B.ay){n=j
j=r.c
if(j==null){w=1
break}B.K(j,n.a,null)}else throw e
w=6
break
case 3:w=2
break
case 6:case 1:return B.q(u,v)
case 2:return B.p(s.at(-1),v)}})
return B.r($async$u9,v)},
I(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i={},h=k.gO()
h.eQ($.e7(),new A.bxL(k))
w=h.T($.af(),x.S)
v=w==null
u=v?j:w.b
t=(v?j:w.b)===C.bG
s=u===C.cv||t
r=h.T($.iP(),x.P)
v=x.N
q=J.b7(h.T($.cx(),x.B),new A.bxM(),v).aF(0)
p=h.T($.c1I(),v)
if(s)o=r
else{h=J.b8(r,new A.bxN(w))
o=B.U(h,h.$ti.i("D.E"))}i.a=o
if(s&&p!=="All Stores"){h=J.b8(o,new A.bxY(p))
o=B.U(h,h.$ti.i("D.E"))
i.a=o}h=x.p
u=B.a([],h)
if(s){n=B.a(["All Stores"],x.s)
C.e.u(n,q)
u.push(B.j7(!0,!0,!1,!1,n,j,new A.bxZ(k),j,new A.by_(k),C.bA,j,j,p,v))}u.push(B.N(j,!1,j,C.a8,j,B.bC("bars",$.d?C.w:C.u,13),j,"View all",new A.by0(i,k,d),C.D,C.af))
n=J.r1(i.a,6).aF(0)
m=x.U
l=B.a([new G.bj(!1,"Date",H.fT,new A.by1(),A.ccs(),j,j,j,m)],x.O)
if(s){i=J.b7(i.a,new A.by2(),v).eB(0)
i=B.U(i,B.w(i).c)
C.e.h1(i)
l.push(new G.bj(!1,"Employee",i,new A.by3(),j,j,j,j,m))}i=x.T
return B.I(B.a([new S.dG("Cashier Shifts","Login-to-logout sessions per register with tender-wise takings",u,j),D.e8(!1,B.a([new D.L("Shift",new A.by4(),!1,j,j,0,j,i),new D.L("Cashier",new A.bxO(),!1,j,j,0,j,i),new D.L("Date",new A.bxP(),!1,j,j,0,j,i),new D.L("Start",new A.bxQ(),!1,j,j,0,j,i),new D.L("End",new A.bxR(),!1,j,j,0,j,i),new D.L("Total Hours",new A.bxS(),!1,j,j,0,j,i),new D.L("Bills",new A.bxT(),!0,j,j,0,j,i),new D.L("Total Sales",new A.bxU(),!0,j,j,0,j,i),new D.L("Status",new A.bxV(),!1,j,j,0,j,i)],x.R),j,y.a,"shifts",l,!1,j,j,j,new A.bxW(k,d),j,j,8,j,n,new A.bxX(),C.b9,!1,!1,!1,!0,j,x.b)],h),C.B,j,C.p,C.v)}}
var z=a.updateTypes(["wV(dA)","by(dA)","x(dA,c[fY<bq>?])"])
A.bMt.prototype={
$1(d){return"All Stores"},
$S:270}
A.by5.prototype={
$1(d){return this.a.u9()},
$S:5}
A.bxK.prototype={
$1(d){return d.gaf(d)},
$S:16}
A.bxL.prototype={
$2(d,e){return this.a.u9()},
$S:28}
A.bxM.prototype={
$1(d){return d.gaf(d)},
$S:16}
A.bxN.prototype={
$1(d){return L.a08(d,this.a)},
$S:33}
A.bxY.prototype={
$1(d){return d.c===this.a},
$S:33}
A.bxZ.prototype={
$1(d){return d==="All Stores"?"Store: All":"Store: "+O.tK(d,this.a.gO().T($.cx(),x.B))},
$S:6}
A.by_.prototype={
$1(d){this.a.gO().m(0,$.c1I().gK(),x.u).j9(0,d)
return d},
$S:1}
A.by0.prototype={
$0(){return A.cvx(this.c,this.a.a,this.b.a.d)},
$S:0}
A.bxX.prototype={
$1(d){return B.a([d.a,d.b,d.d,d.e,d.ay,d.f],x.s)},
$S:326}
A.by1.prototype={
$2(d,e){return A.bIf(d,e,null)},
$S:217}
A.by2.prototype={
$1(d){return d.b},
$S:938}
A.by3.prototype={
$2(d,e){return C.h.q(d.b.toLowerCase(),e.toLowerCase())},
$S:217}
A.bxW.prototype={
$1(d){return A.cas(this.b,d,this.a.a.d)},
$S:328}
A.by4.prototype={
$1(d){var w=null
return B.e(d.a,w,w,w,w,w,B.k(w,w,w,w,11.8,C.I),w,w)},
$S:43}
A.bxO.prototype={
$1(d){return K.a22(d.b,d.d+" \xb7 "+d.e)},
$S:z+0}
A.bxP.prototype={
$1(d){var w=null,v=E.dF(d.f)
return B.e(v,w,w,w,w,w,B.k($.d?C.w:C.u,w,w,w,13.5,C.n),w,w)},
$S:43}
A.bxQ.prototype={
$1(d){var w=null
return B.e(d.r,w,w,w,w,w,B.k($.d?C.w:C.u,w,w,w,13.5,C.n),w,w)},
$S:43}
A.bxR.prototype={
$1(d){var w=null
return B.e(d.w,w,w,w,w,w,B.k($.d?C.w:C.u,w,w,w,13.5,C.n),w,w)},
$S:43}
A.bxS.prototype={
$1(d){var w=null,v=A.c_B(d)
return B.e(v,w,w,w,w,w,B.k($.d?C.w:C.u,w,w,w,13.5,C.n),w,w)},
$S:43}
A.bxT.prototype={
$1(d){var w=null
return B.e(""+d.ax,w,w,w,w,w,B.k($.d?C.w:C.u,w,w,w,13.5,C.n),w,w)},
$S:43}
A.bxU.prototype={
$1(d){var w=null
return B.e(B.J(d.y),w,w,w,w,w,B.k(w,w,w,w,11.8,C.I),w,w)},
$S:43}
A.bxV.prototype={
$1(d){return I.dj(d.ay)},
$S:z+1}
A.bK_.prototype={
$1(d){return B.a([d.a,d.b,d.d,d.e,d.ay,d.f],x.s)},
$S:326}
A.bJX.prototype={
$2(d,e){return A.bIf(d,e,null)},
$S:217}
A.bK8.prototype={
$1(d){var w=this.a
B.ao(w,!0).S()
A.cas(w,d,this.b)},
$S:328}
A.bJY.prototype={
$1(d){var w=null
return B.e(d.a,w,w,w,w,w,B.k(w,w,w,w,11.8,C.I),w,w)},
$S:43}
A.bJZ.prototype={
$1(d){return K.a22(d.b,d.d+" \xb7 "+d.e)},
$S:z+0}
A.bK1.prototype={
$1(d){var w=null,v=E.dF(d.f)
return B.e(v,w,w,w,w,w,B.k($.d?C.w:C.u,w,w,w,13.5,C.n),w,w)},
$S:43}
A.bK2.prototype={
$1(d){var w=null
return B.e(d.r,w,w,w,w,w,B.k($.d?C.w:C.u,w,w,w,13.5,C.n),w,w)},
$S:43}
A.bK3.prototype={
$1(d){var w=null
return B.e(d.w,w,w,w,w,w,B.k($.d?C.w:C.u,w,w,w,13.5,C.n),w,w)},
$S:43}
A.bK4.prototype={
$1(d){var w=null,v=A.c_B(d)
return B.e(v,w,w,w,w,w,B.k($.d?C.w:C.u,w,w,w,13.5,C.n),w,w)},
$S:43}
A.bK5.prototype={
$1(d){var w=null
return B.e(""+d.ax,w,w,w,w,w,B.k($.d?C.w:C.u,w,w,w,13.5,C.n),w,w)},
$S:43}
A.bK6.prototype={
$1(d){var w=null
return B.e(B.J(d.y),w,w,w,w,w,B.k(w,w,w,w,11.8,C.I),w,w)},
$S:43}
A.bK7.prototype={
$1(d){return I.dj(d.ay)},
$S:z+1}
A.bK0.prototype={
$0(){return B.ao(this.a,!0).S()},
$S:0}
A.bGD.prototype={
$1(d){var w,v,u,t,s,r,q,p=null
try{r=x.s
w=B.a(C.h.G(d).split(" "),r)
if(J.S(w)<2)return p
v=B.a(J.ac(w,0).split(":"),r)
u=B.cX(J.ac(v,0),p)
t=B.cX(J.ac(v,1),p)
s=J.ac(w,1).toUpperCase()==="PM"
if(s&&u<12)u+=12
if(!s&&J.m(u,12))u=0
r=B.cF(2026,1,1,u,t,0,0)
return r}catch(q){return p}},
$S:941}
A.bLu.prototype={
$0(){B.ao(this.a,!0).S()
this.b.$1("shiftclose")},
$S:0}
A.bLv.prototype={
$0(){return B.K(this.a,"Shift report printed",null)},
$S:0};(function installTearOffs(){var w=a.installStaticTearOff
w(A,"ccs",2,function(){return[null]},["$3","$2"],["bIf",function(d,e){return A.bIf(d,e,null)}],2,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(A.Ay,B.av)
v(B.bO,[A.bMt,A.by5,A.bxK,A.bxM,A.bxN,A.bxY,A.bxZ,A.by_,A.bxX,A.by2,A.bxW,A.by4,A.bxO,A.bxP,A.bxQ,A.bxR,A.bxS,A.bxT,A.bxU,A.bxV,A.bK_,A.bK8,A.bJY,A.bJZ,A.bK1,A.bK2,A.bK3,A.bK4,A.bK5,A.bK6,A.bK7,A.bGD])
w(A.yR,B.dH)
w(A.alH,B.dz)
v(B.d_,[A.bxL,A.by1,A.by3,A.bJX])
v(B.cK,[A.by0,A.bK0,A.bLu,A.bLv])})()
B.bQ(b.typeUniverse,JSON.parse('{"Ay":{"av":[],"f":[]},"yR":{"R":[],"f":[]},"alH":{"ah":["yR"]}}'))
var y={a:"Nothing matches these filters. Clear the search or add a new record."}
var x=(function rtii(){var w=B.G
return{T:w("L<dA>"),U:w("bj<dA>"),Z:w("kw"),R:w("l<L<dA>>"),O:w("l<bj<dA>>"),H:w("l<Y>"),s:w("l<c>"),p:w("l<f>"),D:w("i<dq>"),P:w("i<dA>"),B:w("i<bG>"),b:w("dA"),h:w("mN"),u:w("kd<c>"),V:w("fJ"),N:w("c"),z:w("@"),S:w("bV?"),n:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cHu","c1I",()=>B.Iv(new A.bMt(),x.N))})()};
(a=>{a["lslsA85MgwtURgl18Z+I/llY5Vs="]=a.current})($__dart_deferred_initializers__);