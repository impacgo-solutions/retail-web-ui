((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,L,M,F,N,G,H,O,P,A={AO:function AO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cqZ(d){return new A.z3(d,null)},
cxG(d,e,f){var w=null,v=B.a([new G.bl(!1,"Date",H.fU,new A.bMz(),A.cf0(),w,w,w,x.U)],x.O),u=x.T,t=x.p
B.bt(d,B.I(B.a([D.ea(!1,B.a([new D.L("Shift",new A.bMA(),!1,w,w,0,w,u),new D.L("Cashier",new A.bMB(),!1,w,w,0,w,u),new D.L("Date",new A.bME(),!1,w,w,0,w,u),new D.L("Start",new A.bMF(),!1,w,w,0,w,u),new D.L("End",new A.bMG(),!1,w,w,0,w,u),new D.L("Total Hours",new A.bMH(),!1,w,w,0,w,u),new D.L("Bills",new A.bMI(),!0,w,w,0,w,u),new D.L("Total Sales",new A.bMJ(),!0,w,w,0,w,u),new D.L("Status",new A.bMK(),!1,w,w,0,w,u)],x.R),w,y.a,"all-shifts-dialog",v,!1,w,w,w,new A.bML(d,f),w,w,8,w,e,new A.bMC(),C.bf,!1,!1,!0,!0,w,x.b)],t),C.A,w,C.o,C.L),B.a([B.N(w,!1,w,w,w,w,w,"Close",new A.bMD(d),C.C,C.aa)],t),"All Cashier Shifts & History",C.bF,x.z)},
bKS(d,e,f){var w,v,u,t,s,r=B.k4(d.f)
if(r==null)return!0
if(e==="Select date range"&&f!=null){w=f.a
v=B.ct(B.b6(w),B.b4(w),B.cC(w),0,0,0,0)
w=f.b
u=B.ct(B.b6(w),B.b4(w),B.cC(w),23,59,59,0)
return r.o9(v.eq(-1e6))&&r.me(u)}t=B.l4(B.fi())
s=C.t.bl(t.dI(r).a,864e8)
A:{if("This week"===e){w=s>=0&&s<=7
break A}if("This month"===e){w=B.b4(r)===B.b4(t)&&B.b6(r)===B.b6(t)
break A}w=!0
break A}return w},
c28(d){var w,v,u,t,s,r=d.r
if(r.length===0||r==="\u2014")return"\u2014"
w=new A.bJj()
v=w.$1(r)
if(v==null)return"\u2014"
r=d.w
if(r==="\u2014"||r.length===0)u=B.ct(2026,1,1,18,0,0,0)
else{t=w.$1(r)
if(t==null)return"\u2014"
u=t}s=C.t.bl(u.dI(v).a,6e7)
return C.q.a4((s<0?s+1440:s)/60,1)+"h"},
ccY(d,e,f){var w,v,u,t=null,s=x.p,r=B.a([new B.dZ(B.a([new B.Y("Cashier",e.b,!1),new B.Y("Register",e.e+" \xb7 "+e.d,!1),new B.Y("Date",E.d0(e.f),!1),new B.Y("Window",e.r+" \u2192 "+e.w,!1),new B.Y("Total Hours",A.c28(e),!1),new B.Y("Bills",""+e.ax,!1)],x.H),2,t),new B.a4(R.jm,B.e("Tender-wise takings",t,t,t,t,t,B.k(t,t,t,t,16,C.H),t,t),t),new A.AO(C.aO,"Cash",B.E(e.z),t),new A.AO(C.a7,"Card",B.E(e.Q),t),new A.AO(C.fN,"UPI",B.E(e.as),t),new A.AO(C.ei,"Wallet",B.E(e.at),t),A.cdx("Total sales",B.E(e.y),t,!0)],s),q=e.ay
if(q==="Closed"){w=e.ch
v=w===0
if(v)w="Tallied \u2713"
else w=B.E(w==null?0:w)
r.push(A.cdx("Closing variance",w,v?C.aO:C.aH,!1))}u=B.I(r,C.A,t,C.o,C.L)
s=B.a([],s)
if(q==="Open")s.push(B.N(t,!1,t,t,t,P.rS,t,"Close this shift",new A.bO6(d,f),C.C,C.bZ))
else s.push(B.N(t,!1,t,t,t,B.bz("printer",$.d?C.v:C.r,14),t,"Print Z-report",new A.bO7(d),C.C,C.aa))
N.lt(d,u,s,"Cashier shift \xb7 "+e.c,e.a,x.z)},
cdx(d,e,f,g){var w,v,u,t,s=null,r=g?8:3
if(g)w=new B.a_(s,s,new B.bK(new B.aK($.d?C.U:C.X,1,C.K,-1),C.N,C.N,C.N),s,s,s,C.F)
else w=s
v=g?8:0
if(g)u=B.k($.d?C.v:C.r,s,s,s,17,C.bC)
else u=B.k($.d?C.Y:C.T,F.c9,s,s,13,C.n)
u=B.e(d,s,s,s,s,s,u,s,s)
if(g)t=B.k($.d?C.v:C.r,s,s,s,17,C.bC)
else t=B.k($.d?C.Y:C.T,F.c9,s,s,13,C.n)
return new B.a4(new B.ad(0,r,0,3),B.S(s,B.V(B.a([u,B.e(e,s,s,s,s,s,t.mQ(f,f!=null?C.a4:s),s,s)],x.p),C.B,C.bX,C.u),C.y,s,s,w,s,s,s,s,new B.ad(0,v,0,0),s,s,s),s)},
bP7:function bP7(){},
z3:function z3(d,e){this.d=d
this.a=e},
alU:function alU(){this.d=$
this.c=this.a=null},
bAD:function bAD(d){this.a=d},
bAh:function bAh(){},
bAi:function bAi(d){this.a=d},
bAj:function bAj(){},
bAk:function bAk(d){this.a=d},
bAv:function bAv(d){this.a=d},
bAw:function bAw(d){this.a=d},
bAx:function bAx(d){this.a=d},
bAy:function bAy(d,e,f){this.a=d
this.b=e
this.c=f},
bAu:function bAu(){},
bAz:function bAz(){},
bAA:function bAA(){},
bAB:function bAB(){},
bAt:function bAt(d,e){this.a=d
this.b=e},
bAC:function bAC(){},
bAl:function bAl(){},
bAm:function bAm(){},
bAn:function bAn(){},
bAo:function bAo(){},
bAp:function bAp(){},
bAq:function bAq(){},
bAr:function bAr(){},
bAs:function bAs(){},
bMC:function bMC(){},
bMz:function bMz(){},
bML:function bML(d,e){this.a=d
this.b=e},
bMA:function bMA(){},
bMB:function bMB(){},
bME:function bME(){},
bMF:function bMF(){},
bMG:function bMG(){},
bMH:function bMH(){},
bMI:function bMI(){},
bMJ:function bMJ(){},
bMK:function bMK(){},
bMD:function bMD(d){this.a=d},
bJj:function bJj(){},
bO6:function bO6(d,e){this.a=d
this.b=e},
bO7:function bO7(d){this.a=d}},Q,R,D,I,S,K
J=c[1]
B=c[0]
C=c[2]
E=c[124]
L=c[85]
M=c[91]
F=c[174]
N=c[116]
G=c[118]
H=c[197]
O=c[86]
P=c[246]
A=a.updateHolder(c[22],A)
Q=c[136]
R=c[195]
D=c[121]
I=c[120]
S=c[128]
K=c[68]
A.AO.prototype={
H(d){var w=null
return new B.a4(C.eL,B.V(B.a([B.S(w,w,C.y,w,w,new B.a_(this.c,w,w,B.as(3),w,w,C.F),w,9,w,Q.AD,w,w,w,9),B.aC(B.e(this.d,w,w,w,w,w,B.k(w,w,w,w,12.5,C.n),w,w),1),B.e(this.e,w,w,w,w,w,B.k(w,w,w,w,12.5,C.n).aT9(F.c9,C.a4),w,w)],x.p),C.B,C.o,C.u),w)},
ge4(d){return this.d}}
A.z3.prototype={
V(){return new A.alU()}}
A.alU.prototype={
ak(){this.aw()
$.aB.rx$.push(new A.bAD(this))},
u_(){var w=0,v=B.t(x.n),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$u_=B.o(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:j=r.gO()
i=j.m(0,$.af(),x.S)
h=i
g=h==null?null:h.Q
f=g==null?"":g
if(J.T(f)===0){w=1
break}t=4
h=$.cv()
w=7
return B.h(j.m(0,h.gK(),x.V).bf(f),$async$u_)
case 7:if(r.c==null){w=1
break}q=j.m(0,h,x.B)
h=x.N
m=j.m(0,$.e9(),h)
l=i.r
p=M.a0B(J.ba(q,new A.bAh(),h).aF(0),m,l)
l=$.k2()
w=8
return B.h(j.m(0,l.gK(),x.Z).em(f,p),$async$u_)
case 8:if(r.c==null){w=1
break}o=j.m(0,l,x.D)
w=9
return B.h(j.m(0,$.iP().gK(),x.h).hr(f,p,o),$async$u_)
case 9:t=2
w=6
break
case 4:t=3
e=s.pop()
j=B.Q(e)
if(j instanceof B.ax){n=j
j=r.c
if(j==null){w=1
break}B.K(j,n.a,null)}else throw e
w=6
break
case 3:w=2
break
case 6:case 1:return B.q(u,v)
case 2:return B.p(s.at(-1),v)}})
return B.r($async$u_,v)},
H(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i={},h=k.gO()
h.eL($.e9(),new A.bAi(k))
w=h.T($.af(),x.S)
v=w==null
u=v?j:w.b
t=(v?j:w.b)===C.bE
s=u===C.ct||t
r=h.T($.iP(),x.P)
v=x.N
q=J.ba(h.T($.cv(),x.B),new A.bAj(),v).aF(0)
p=h.T($.c4d(),v)
if(s)o=r
else{h=J.b8(r,new A.bAk(w))
o=B.U(h,h.$ti.i("F.E"))}i.a=o
if(s&&p!=="All Stores"){h=J.b8(o,new A.bAv(p))
o=B.U(h,h.$ti.i("F.E"))
i.a=o}h=x.p
u=B.a([],h)
if(s){n=B.a(["All Stores"],x.s)
C.e.u(n,q)
u.push(B.i5(!0,!0,!1,!1,n,j,new A.bAw(k),j,new A.bAx(k),C.bq,j,j,p,v))}u.push(B.N(j,!1,j,C.a7,j,B.bz("bars",$.d?C.v:C.r,13),j,"View all",new A.bAy(i,k,d),C.C,C.aa))
n=J.r7(i.a,6).aF(0)
m=x.U
l=B.a([new G.bl(!1,"Date",H.fU,new A.bAz(),A.cf0(),j,j,j,m)],x.O)
if(s){i=J.ba(i.a,new A.bAA(),v).eC(0)
i=B.U(i,B.w(i).c)
C.e.fD(i)
l.push(new G.bl(!1,"Employee",i,new A.bAB(),j,j,j,j,m))}i=x.T
return B.I(B.a([new S.dE("Cashier Shifts","Login-to-logout sessions per register with tender-wise takings",u,j),D.ea(!1,B.a([new D.L("Shift",new A.bAC(),!1,j,j,0,j,i),new D.L("Cashier",new A.bAl(),!1,j,j,0,j,i),new D.L("Date",new A.bAm(),!1,j,j,0,j,i),new D.L("Start",new A.bAn(),!1,j,j,0,j,i),new D.L("End",new A.bAo(),!1,j,j,0,j,i),new D.L("Total Hours",new A.bAp(),!1,j,j,0,j,i),new D.L("Bills",new A.bAq(),!0,j,j,0,j,i),new D.L("Total Sales",new A.bAr(),!0,j,j,0,j,i),new D.L("Status",new A.bAs(),!1,j,j,0,j,i)],x.R),j,y.a,"shifts",l,!1,j,j,j,new A.bAt(k,d),j,j,8,j,n,new A.bAu(),C.bf,!1,!1,!1,!0,j,x.b)],h),C.A,j,C.o,C.u)}}
var z=a.updateTypes(["wY(dH)","bB(dH)","x(dH,c[h_<bn>?])"])
A.bP7.prototype={
$1(d){return"All Stores"},
$S:344}
A.bAD.prototype={
$1(d){return this.a.u_()},
$S:6}
A.bAh.prototype={
$1(d){return d.gad(d)},
$S:15}
A.bAi.prototype={
$2(d,e){return this.a.u_()},
$S:29}
A.bAj.prototype={
$1(d){return d.gad(d)},
$S:15}
A.bAk.prototype={
$1(d){return L.a0u(d,this.a)},
$S:33}
A.bAv.prototype={
$1(d){return d.c===this.a},
$S:33}
A.bAw.prototype={
$1(d){return d==="All Stores"?"Store: All":"Store: "+O.tQ(d,this.a.gO().T($.cv(),x.B))},
$S:5}
A.bAx.prototype={
$1(d){this.a.gO().m(0,$.c4d().gK(),x.u).ja(0,d)
return d},
$S:1}
A.bAy.prototype={
$0(){return A.cxG(this.c,this.a.a,this.b.a.d)},
$S:0}
A.bAu.prototype={
$1(d){return B.a([d.a,d.b,d.d,d.e,d.ay,d.f],x.s)},
$S:371}
A.bAz.prototype={
$2(d,e){return A.bKS(d,e,null)},
$S:188}
A.bAA.prototype={
$1(d){return d.b},
$S:924}
A.bAB.prototype={
$2(d,e){return C.h.q(d.b.toLowerCase(),e.toLowerCase())},
$S:188}
A.bAt.prototype={
$1(d){return A.ccY(this.b,d,this.a.a.d)},
$S:372}
A.bAC.prototype={
$1(d){var w=null
return B.e(d.a,w,w,w,w,w,B.k(w,w,w,w,11.8,C.H),w,w)},
$S:46}
A.bAl.prototype={
$1(d){return K.a2i(d.b,d.d+" \xb7 "+d.e)},
$S:z+0}
A.bAm.prototype={
$1(d){var w=null,v=E.d0(d.f)
return B.e(v,w,w,w,w,w,B.k($.d?C.v:C.r,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bAn.prototype={
$1(d){var w=null
return B.e(d.r,w,w,w,w,w,B.k($.d?C.v:C.r,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bAo.prototype={
$1(d){var w=null
return B.e(d.w,w,w,w,w,w,B.k($.d?C.v:C.r,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bAp.prototype={
$1(d){var w=null,v=A.c28(d)
return B.e(v,w,w,w,w,w,B.k($.d?C.v:C.r,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bAq.prototype={
$1(d){var w=null
return B.e(""+d.ax,w,w,w,w,w,B.k($.d?C.v:C.r,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bAr.prototype={
$1(d){var w=null
return B.e(B.E(d.y),w,w,w,w,w,B.k(w,w,w,w,11.8,C.H),w,w)},
$S:46}
A.bAs.prototype={
$1(d){return I.dk(d.ay)},
$S:z+1}
A.bMC.prototype={
$1(d){return B.a([d.a,d.b,d.d,d.e,d.ay,d.f],x.s)},
$S:371}
A.bMz.prototype={
$2(d,e){return A.bKS(d,e,null)},
$S:188}
A.bML.prototype={
$1(d){var w=this.a
B.ao(w,!0).S()
A.ccY(w,d,this.b)},
$S:372}
A.bMA.prototype={
$1(d){var w=null
return B.e(d.a,w,w,w,w,w,B.k(w,w,w,w,11.8,C.H),w,w)},
$S:46}
A.bMB.prototype={
$1(d){return K.a2i(d.b,d.d+" \xb7 "+d.e)},
$S:z+0}
A.bME.prototype={
$1(d){var w=null,v=E.d0(d.f)
return B.e(v,w,w,w,w,w,B.k($.d?C.v:C.r,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bMF.prototype={
$1(d){var w=null
return B.e(d.r,w,w,w,w,w,B.k($.d?C.v:C.r,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bMG.prototype={
$1(d){var w=null
return B.e(d.w,w,w,w,w,w,B.k($.d?C.v:C.r,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bMH.prototype={
$1(d){var w=null,v=A.c28(d)
return B.e(v,w,w,w,w,w,B.k($.d?C.v:C.r,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bMI.prototype={
$1(d){var w=null
return B.e(""+d.ax,w,w,w,w,w,B.k($.d?C.v:C.r,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bMJ.prototype={
$1(d){var w=null
return B.e(B.E(d.y),w,w,w,w,w,B.k(w,w,w,w,11.8,C.H),w,w)},
$S:46}
A.bMK.prototype={
$1(d){return I.dk(d.ay)},
$S:z+1}
A.bMD.prototype={
$0(){return B.ao(this.a,!0).S()},
$S:0}
A.bJj.prototype={
$1(d){var w,v,u,t,s,r,q,p=null
try{r=x.s
w=B.a(C.h.F(d).split(" "),r)
if(J.T(w)<2)return p
v=B.a(J.ae(w,0).split(":"),r)
u=B.cZ(J.ae(v,0),p)
t=B.cZ(J.ae(v,1),p)
s=J.ae(w,1).toUpperCase()==="PM"
if(s&&u<12)u+=12
if(!s&&J.m(u,12))u=0
r=B.ct(2026,1,1,u,t,0,0)
return r}catch(q){return p}},
$S:927}
A.bO6.prototype={
$0(){B.ao(this.a,!0).S()
this.b.$1("shiftclose")},
$S:0}
A.bO7.prototype={
$0(){return B.K(this.a,"Shift report printed",null)},
$S:0};(function installTearOffs(){var w=a.installStaticTearOff
w(A,"cf0",2,function(){return[null]},["$3","$2"],["bKS",function(d,e){return A.bKS(d,e,null)}],2,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(A.AO,B.at)
v(B.bN,[A.bP7,A.bAD,A.bAh,A.bAj,A.bAk,A.bAv,A.bAw,A.bAx,A.bAu,A.bAA,A.bAt,A.bAC,A.bAl,A.bAm,A.bAn,A.bAo,A.bAp,A.bAq,A.bAr,A.bAs,A.bMC,A.bML,A.bMA,A.bMB,A.bME,A.bMF,A.bMG,A.bMH,A.bMI,A.bMJ,A.bMK,A.bJj])
w(A.z3,B.dG)
w(A.alU,B.dD)
v(B.cU,[A.bAi,A.bAz,A.bAB,A.bMz])
v(B.cA,[A.bAy,A.bMD,A.bO6,A.bO7])})()
B.bJ(b.typeUniverse,JSON.parse('{"AO":{"at":[],"f":[]},"z3":{"R":[],"f":[]},"alU":{"ah":["z3"]}}'))
var y={a:"Nothing matches these filters. Clear the search or add a new record."}
var x=(function rtii(){var w=B.H
return{T:w("L<dH>"),U:w("bl<dH>"),Z:w("kB"),R:w("l<L<dH>>"),O:w("l<bl<dH>>"),H:w("l<Y>"),s:w("l<c>"),p:w("l<f>"),D:w("i<du>"),P:w("i<dH>"),B:w("i<bI>"),b:w("dH"),h:w("n0"),u:w("kl<c>"),V:w("fz"),N:w("c"),z:w("@"),S:w("bW?"),n:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cJq","c4d",()=>B.ID(new A.bP7(),x.N))})()};
(a=>{a["UIEOP5C/MCh/6jr4o7KcOYBMFB0="]=a.current})($__dart_deferred_initializers__);