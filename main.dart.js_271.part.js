((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,L,M,E,F,N,G,H,O,P,A={Ad:function Ad(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
clY(d){return new A.yv(d,null)},
csE(d,e,f){var w=null,v=B.a([new G.bj(!1,"Date",H.fQ,new A.bHZ(),A.ca4(),w,w,w,x.U)],x.O),u=x.T,t=x.p
B.bv(d,B.I(B.a([D.ef(!1,B.a([new D.M("Shift",new A.bI_(),!1,w,w,0,w,u),new D.M("Cashier",new A.bI0(),!1,w,w,0,w,u),new D.M("Date",new A.bI3(),!1,w,w,0,w,u),new D.M("Start",new A.bI4(),!1,w,w,0,w,u),new D.M("End",new A.bI5(),!1,w,w,0,w,u),new D.M("Total Hours",new A.bI6(),!1,w,w,0,w,u),new D.M("Bills",new A.bI7(),!0,w,w,0,w,u),new D.M("Total Sales",new A.bI8(),!0,w,w,0,w,u),new D.M("Status",new A.bI9(),!1,w,w,0,w,u)],x.R),w,y.a,"all-shifts-dialog",v,!1,w,w,w,new A.bIa(d,f),w,w,8,w,e,new A.bI1(),C.bf,!1,!1,!0,!0,w,x.b)],t),C.A,w,C.o,C.L),B.a([B.O(w,!1,w,w,w,w,w,"Close",new A.bI2(d),C.C,C.ae)],t),"All Cashier Shifts & History",C.bD,x.z)},
bGh(d,e,f){var w,v,u,t,s,r=B.kq(d.f)
if(r==null)return!0
if(e==="Select date range"&&f!=null){w=f.a
v=B.cK(B.bl(w),B.bh(w),B.cT(w),0,0,0,0)
w=f.b
u=B.cK(B.bl(w),B.bh(w),B.cT(w),23,59,59,0)
return r.o5(v.fV(-1e6))&&r.ma(u)}t=B.lt(B.f7())
s=C.r.bl(t.dR(r).a,864e8)
A:{if("This week"===e){w=s>=0&&s<=7
break A}if("This month"===e){w=B.bh(r)===B.bh(t)&&B.bl(r)===B.bl(t)
break A}w=!0
break A}return w},
bYe(d){var w,v,u,t,s,r=d.r
if(r.length===0||r==="\u2014")return"\u2014"
w=new A.bEK()
v=w.$1(r)
if(v==null)return"\u2014"
r=d.w
if(r==="\u2014"||r.length===0)u=B.cK(2026,1,1,18,0,0,0)
else{t=w.$1(r)
if(t==null)return"\u2014"
u=t}s=C.r.bl(u.dR(v).a,6e7)
return C.q.a4((s<0?s+1440:s)/60,1)+"h"},
c81(d,e,f){var w,v,u,t=null,s=x.p,r=B.a([new B.dW(B.a([new B.W("Cashier",e.b,!1),new B.W("Register",e.e+" \xb7 "+e.d,!1),new B.W("Date",E.dE(e.f),!1),new B.W("Window",e.r+" \u2192 "+e.w,!1),new B.W("Total Hours",A.bYe(e),!1),new B.W("Bills",""+e.ax,!1)],x.H),2,t),new B.a5(R.j8,B.e("Tender-wise takings",t,t,t,t,t,B.k(t,t,t,t,16,C.H),t,t),t),new A.Ad(C.aN,"Cash",B.K(e.z),t),new A.Ad(C.a7,"Card",B.K(e.Q),t),new A.Ad(C.fJ,"UPI",B.K(e.as),t),new A.Ad(C.ec,"Wallet",B.K(e.at),t),A.c8B("Total sales",B.K(e.y),t,!0)],s),q=e.ay
if(q==="Closed"){w=e.ch
v=w===0
if(v)w="Tallied \u2713"
else w=B.K(w==null?0:w)
r.push(A.c8B("Closing variance",w,v?C.aN:C.aI,!1))}u=B.I(r,C.A,t,C.o,C.L)
s=B.a([],s)
if(q==="Open")s.push(B.O(t,!1,t,t,t,P.rB,t,"Close this shift",new A.bJw(d,f),C.C,C.c1))
else s.push(B.O(t,!1,t,t,t,B.bC("printer",$.d?C.v:C.t,14),t,"Print Z-report",new A.bJx(d),C.C,C.ae))
N.lf(d,u,s,"Cashier shift \xb7 "+e.c,e.a,x.z)},
c8B(d,e,f,g){var w,v,u,t,s=null,r=g?8:3
if(g)w=new B.Z(s,s,new B.bL(new B.aJ($.d?C.W:C.Y,1,C.K,-1),C.P,C.P,C.P),s,s,s,C.E)
else w=s
v=g?8:0
if(g)u=B.k($.d?C.v:C.t,s,s,s,17,C.bB)
else u=B.k($.d?C.X:C.T,F.c9,s,s,13,C.n)
u=B.e(d,s,s,s,s,s,u,s,s)
if(g)t=B.k($.d?C.v:C.t,s,s,s,17,C.bB)
else t=B.k($.d?C.X:C.T,F.c9,s,s,13,C.n)
return new B.a5(new B.ad(0,r,0,3),B.S(s,B.V(B.a([u,B.e(e,s,s,s,s,s,t.mM(f,f!=null?C.a6:s),s,s)],x.p),C.B,C.bV,C.u),C.z,s,s,w,s,s,s,s,new B.ad(0,v,0,0),s,s,s),s)},
bKw:function bKw(){},
yv:function yv(d,e){this.d=d
this.a=e},
akR:function akR(){this.d=$
this.c=this.a=null},
bwd:function bwd(d){this.a=d},
bvS:function bvS(){},
bvT:function bvT(d){this.a=d},
bvU:function bvU(){},
bvV:function bvV(d){this.a=d},
bw5:function bw5(d){this.a=d},
bw6:function bw6(d){this.a=d},
bw7:function bw7(d){this.a=d},
bw8:function bw8(d,e,f){this.a=d
this.b=e
this.c=f},
bw4:function bw4(){},
bw9:function bw9(){},
bwa:function bwa(){},
bwb:function bwb(){},
bw3:function bw3(d,e){this.a=d
this.b=e},
bwc:function bwc(){},
bvW:function bvW(){},
bvX:function bvX(){},
bvY:function bvY(){},
bvZ:function bvZ(){},
bw_:function bw_(){},
bw0:function bw0(){},
bw1:function bw1(){},
bw2:function bw2(){},
bI1:function bI1(){},
bHZ:function bHZ(){},
bIa:function bIa(d,e){this.a=d
this.b=e},
bI_:function bI_(){},
bI0:function bI0(){},
bI3:function bI3(){},
bI4:function bI4(){},
bI5:function bI5(){},
bI6:function bI6(){},
bI7:function bI7(){},
bI8:function bI8(){},
bI9:function bI9(){},
bI2:function bI2(d){this.a=d},
bEK:function bEK(){},
bJw:function bJw(d,e){this.a=d
this.b=e},
bJx:function bJx(d){this.a=d}},Q,R,D,I,S,K
J=c[1]
B=c[0]
C=c[2]
L=c[79]
M=c[85]
E=c[111]
F=c[163]
N=c[105]
G=c[107]
H=c[190]
O=c[80]
P=c[225]
A=a.updateHolder(c[22],A)
Q=c[124]
R=c[183]
D=c[110]
I=c[109]
S=c[116]
K=c[65]
A.Ad.prototype={
H(d){var w=null
return new B.a5(C.eG,B.V(B.a([B.S(w,w,C.z,w,w,new B.Z(this.c,w,w,B.as(3),w,w,C.E),w,9,w,Q.An,w,w,w,9),B.aC(B.e(this.d,w,w,w,w,w,B.k(w,w,w,w,12.5,C.n),w,w),1),B.e(this.e,w,w,w,w,w,B.k(w,w,w,w,12.5,C.n).aRR(F.c9,C.a6),w,w)],x.p),C.B,C.o,C.u),w)},
geG(d){return this.d}}
A.yv.prototype={
V(){return new A.akR()}}
A.akR.prototype={
ak(){this.av()
$.az.rx$.push(new A.bwd(this))},
tO(){var w=0,v=B.u(x.n),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$tO=B.p(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:j=r.gO()
i=j.m(0,$.ah(),x.S)
h=i
g=h==null?null:h.Q
f=g==null?"":g
if(J.Y(f)===0){w=1
break}t=4
h=$.cF()
w=7
return B.h(j.m(0,h.gK(),x.V).bf(f),$async$tO)
case 7:if(r.c==null){w=1
break}q=j.m(0,h,x.B)
h=x.N
m=j.m(0,$.e5(),h)
l=i.r
p=M.a_K(J.ba(q,new A.bvS(),h).aF(0),m,l)
l=$.jU()
w=8
return B.h(j.m(0,l.gK(),x.Z).eg(f,p),$async$tO)
case 8:if(r.c==null){w=1
break}o=j.m(0,l,x.D)
w=9
return B.h(j.m(0,$.iH().gK(),x.h).hn(f,p,o),$async$tO)
case 9:t=2
w=6
break
case 4:t=3
e=s.pop()
j=B.R(e)
if(j instanceof B.aB){n=j
j=r.c
if(j==null){w=1
break}B.J(j,n.a,null)}else throw e
w=6
break
case 3:w=2
break
case 6:case 1:return B.r(u,v)
case 2:return B.q(s.at(-1),v)}})
return B.t($async$tO,v)},
H(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i={},h=k.gO()
h.eS($.e5(),new A.bvT(k))
w=h.U($.ah(),x.S)
v=w==null
u=v?j:w.b
t=(v?j:w.b)===C.bK
s=u===C.cr||t
r=h.U($.iH(),x.P)
v=x.N
q=J.ba(h.U($.cF(),x.B),new A.bvU(),v).aF(0)
p=h.U($.c_h(),v)
if(s)o=r
else{h=J.b9(r,new A.bvV(w))
o=B.T(h,h.$ti.i("E.E"))}i.a=o
if(s&&p!=="All Stores"){h=J.b9(o,new A.bw5(p))
o=B.T(h,h.$ti.i("E.E"))
i.a=o}h=x.p
u=B.a([],h)
if(s){n=B.a(["All Stores"],x.s)
C.e.A(n,q)
u.push(B.j1(!0,!0,!1,!1,n,j,new A.bw6(k),j,new A.bw7(k),C.bx,j,j,p,v))}u.push(B.O(j,!1,j,C.a7,j,B.bC("bars",$.d?C.v:C.t,13),j,"View all",new A.bw8(i,k,d),C.C,C.ae))
n=J.qR(i.a,6).aF(0)
m=x.U
l=B.a([new G.bj(!1,"Date",H.fQ,new A.bw9(),A.ca4(),j,j,j,m)],x.O)
if(s){i=J.ba(i.a,new A.bwa(),v).eW(0)
i=B.T(i,B.w(i).c)
C.e.fw(i)
l.push(new G.bj(!1,"Employee",i,new A.bwb(),j,j,j,j,m))}i=x.T
return B.I(B.a([new S.dF("Cashier Shifts","Login-to-logout sessions per register with tender-wise takings",u,j),D.ef(!1,B.a([new D.M("Shift",new A.bwc(),!1,j,j,0,j,i),new D.M("Cashier",new A.bvW(),!1,j,j,0,j,i),new D.M("Date",new A.bvX(),!1,j,j,0,j,i),new D.M("Start",new A.bvY(),!1,j,j,0,j,i),new D.M("End",new A.bvZ(),!1,j,j,0,j,i),new D.M("Total Hours",new A.bw_(),!1,j,j,0,j,i),new D.M("Bills",new A.bw0(),!0,j,j,0,j,i),new D.M("Total Sales",new A.bw1(),!0,j,j,0,j,i),new D.M("Status",new A.bw2(),!1,j,j,0,j,i)],x.R),j,y.a,"shifts",l,!1,j,j,j,new A.bw3(k,d),j,j,8,j,n,new A.bw4(),C.bf,!1,!1,!1,!0,j,x.b)],h),C.A,j,C.o,C.u)}}
var z=a.updateTypes(["wv(dC)","bA(dC)","x(dC,c[fR<bp>?])"])
A.bKw.prototype={
$1(d){return"All Stores"},
$S:264}
A.bwd.prototype={
$1(d){return this.a.tO()},
$S:5}
A.bvS.prototype={
$1(d){return d.gaj(d)},
$S:16}
A.bvT.prototype={
$2(d,e){return this.a.tO()},
$S:29}
A.bvU.prototype={
$1(d){return d.gaj(d)},
$S:16}
A.bvV.prototype={
$1(d){return L.a_D(d,this.a)},
$S:34}
A.bw5.prototype={
$1(d){return d.c===this.a},
$S:34}
A.bw6.prototype={
$1(d){return d==="All Stores"?"Store: All":"Store: "+O.ts(d,this.a.gO().U($.cF(),x.B))},
$S:6}
A.bw7.prototype={
$1(d){this.a.gO().m(0,$.c_h().gK(),x.u).hw(0,d)
return d},
$S:1}
A.bw8.prototype={
$0(){return A.csE(this.c,this.a.a,this.b.a.d)},
$S:0}
A.bw4.prototype={
$1(d){return B.a([d.a,d.b,d.d,d.e,d.ay,d.f],x.s)},
$S:320}
A.bw9.prototype={
$2(d,e){return A.bGh(d,e,null)},
$S:220}
A.bwa.prototype={
$1(d){return d.b},
$S:916}
A.bwb.prototype={
$2(d,e){return C.h.q(d.b.toLowerCase(),e.toLowerCase())},
$S:220}
A.bw3.prototype={
$1(d){return A.c81(this.b,d,this.a.a.d)},
$S:322}
A.bwc.prototype={
$1(d){var w=null
return B.e(d.a,w,w,w,w,w,B.k(w,w,w,w,11.8,C.H),w,w)},
$S:46}
A.bvW.prototype={
$1(d){return K.a1s(d.b,d.d+" \xb7 "+d.e)},
$S:z+0}
A.bvX.prototype={
$1(d){var w=null,v=E.dE(d.f)
return B.e(v,w,w,w,w,w,B.k($.d?C.v:C.t,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bvY.prototype={
$1(d){var w=null
return B.e(d.r,w,w,w,w,w,B.k($.d?C.v:C.t,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bvZ.prototype={
$1(d){var w=null
return B.e(d.w,w,w,w,w,w,B.k($.d?C.v:C.t,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bw_.prototype={
$1(d){var w=null,v=A.bYe(d)
return B.e(v,w,w,w,w,w,B.k($.d?C.v:C.t,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bw0.prototype={
$1(d){var w=null
return B.e(""+d.ax,w,w,w,w,w,B.k($.d?C.v:C.t,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bw1.prototype={
$1(d){var w=null
return B.e(B.K(d.y),w,w,w,w,w,B.k(w,w,w,w,11.8,C.H),w,w)},
$S:46}
A.bw2.prototype={
$1(d){return I.dn(d.ay)},
$S:z+1}
A.bI1.prototype={
$1(d){return B.a([d.a,d.b,d.d,d.e,d.ay,d.f],x.s)},
$S:320}
A.bHZ.prototype={
$2(d,e){return A.bGh(d,e,null)},
$S:220}
A.bIa.prototype={
$1(d){var w=this.a
B.ao(w,!0).S()
A.c81(w,d,this.b)},
$S:322}
A.bI_.prototype={
$1(d){var w=null
return B.e(d.a,w,w,w,w,w,B.k(w,w,w,w,11.8,C.H),w,w)},
$S:46}
A.bI0.prototype={
$1(d){return K.a1s(d.b,d.d+" \xb7 "+d.e)},
$S:z+0}
A.bI3.prototype={
$1(d){var w=null,v=E.dE(d.f)
return B.e(v,w,w,w,w,w,B.k($.d?C.v:C.t,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bI4.prototype={
$1(d){var w=null
return B.e(d.r,w,w,w,w,w,B.k($.d?C.v:C.t,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bI5.prototype={
$1(d){var w=null
return B.e(d.w,w,w,w,w,w,B.k($.d?C.v:C.t,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bI6.prototype={
$1(d){var w=null,v=A.bYe(d)
return B.e(v,w,w,w,w,w,B.k($.d?C.v:C.t,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bI7.prototype={
$1(d){var w=null
return B.e(""+d.ax,w,w,w,w,w,B.k($.d?C.v:C.t,w,w,w,13.5,C.n),w,w)},
$S:46}
A.bI8.prototype={
$1(d){var w=null
return B.e(B.K(d.y),w,w,w,w,w,B.k(w,w,w,w,11.8,C.H),w,w)},
$S:46}
A.bI9.prototype={
$1(d){return I.dn(d.ay)},
$S:z+1}
A.bI2.prototype={
$0(){return B.ao(this.a,!0).S()},
$S:0}
A.bEK.prototype={
$1(d){var w,v,u,t,s,r,q,p=null
try{r=x.s
w=B.a(C.h.G(d).split(" "),r)
if(J.Y(w)<2)return p
v=B.a(J.ae(w,0).split(":"),r)
u=B.cX(J.ae(v,0),p)
t=B.cX(J.ae(v,1),p)
s=J.ae(w,1).toUpperCase()==="PM"
if(s&&u<12)u+=12
if(!s&&J.m(u,12))u=0
r=B.cK(2026,1,1,u,t,0,0)
return r}catch(q){return p}},
$S:919}
A.bJw.prototype={
$0(){B.ao(this.a,!0).S()
this.b.$1("shiftclose")},
$S:0}
A.bJx.prototype={
$0(){return B.J(this.a,"Shift report printed",null)},
$S:0};(function installTearOffs(){var w=a.installStaticTearOff
w(A,"ca4",2,function(){return[null]},["$3","$2"],["bGh",function(d,e){return A.bGh(d,e,null)}],2,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(A.Ad,B.au)
v(B.bQ,[A.bKw,A.bwd,A.bvS,A.bvU,A.bvV,A.bw5,A.bw6,A.bw7,A.bw4,A.bwa,A.bw3,A.bwc,A.bvW,A.bvX,A.bvY,A.bvZ,A.bw_,A.bw0,A.bw1,A.bw2,A.bI1,A.bIa,A.bI_,A.bI0,A.bI3,A.bI4,A.bI5,A.bI6,A.bI7,A.bI8,A.bI9,A.bEK])
w(A.yv,B.dH)
w(A.akR,B.dB)
v(B.cY,[A.bvT,A.bw9,A.bwb,A.bHZ])
v(B.cD,[A.bw8,A.bI2,A.bJw,A.bJx])})()
B.bP(b.typeUniverse,JSON.parse('{"Ad":{"au":[],"f":[]},"yv":{"Q":[],"f":[]},"akR":{"ag":["yv"]}}'))
var y={a:"Nothing matches these filters. Clear the search or add a new record."}
var x=(function rtii(){var w=B.G
return{T:w("M<dC>"),U:w("bj<dC>"),Z:w("kp"),R:w("l<M<dC>>"),O:w("l<bj<dC>>"),H:w("l<W>"),s:w("l<c>"),p:w("l<f>"),D:w("i<dq>"),P:w("i<dC>"),B:w("i<bH>"),b:w("dC"),h:w("mH"),u:w("jI<c>"),V:w("fC"),N:w("c"),z:w("@"),S:w("c_?"),n:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cEc","c_h",()=>B.yB(new A.bKw(),x.N))})()};
(a=>{a["tbT/e9j8h8omDoy185EQNXrPngM="]=a.current})($__dart_deferred_initializers__);