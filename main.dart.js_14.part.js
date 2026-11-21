((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
anC(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null
for(x=J.ab(e.m(0,$.e9(),y.l)),w=n;x.p();){v=x.gE(x)
if(v.a===f.gfd())w=v}x=A.z(y.w,y.f)
for(u=J.ab(e.m(0,$.f9(),y.q));u.p();){t=u.gE(u)
x.l(0,t.a,t)}s=new C.bDQ(x)
x=B.m.q(f.gfB(f).toLowerCase(),"online")||B.m.bb(f.gaf(f),"ORD-")?"Online Order":"Store Bill"
u=f.giP(f)
t=f.gqM()
r=f.gjB()
q=w==null?n:w.b
if(q==null)q="Walk-in"
p=y.u
q=A.a([new A.ep(A.a([new A.al("Order Type",x,!1),new A.al("Store / counter",u+" \xb7 "+t,!1),new A.al("Cashier",r,!1),new A.al("Customer",q,!1),new A.al("Paid by",f.gfB(f),!1),new A.al("Billed",E.dT(f.gdW(f)),!1),new A.al("Status",I.ea(f.gaI(f)),!1)],y.n),2,n),K.cQ,A.h("Items ("+f.giz(f)+")",n,n,n,n,A.p(n,n,n,n,16,B.P).aW(15),n,n),B.cR],p)
for(x=J.ab(f.ghE(f));x.p();)q.push(s.$1(x.gE(x)))
q.push(B.bn)
q.push(C.bKW("Discounts","\u2212"+A.J(f.gIc()),B.aK,!1))
q.push(C.bKW("GST included",A.J(f.gKT()),n,!1))
q.push(C.bKW("Net paid",A.J(f.gh8()),n,!0))
o=A.R(q,B.F,n,B.r,B.M)
x=f.ghc()
u=E.dT(f.gdW(f))
t=$.d
r=A.a0(n,!1,n,n,n,A.bW("printer",t?B.y:B.v,14),n,"Print",new C.bDN(d,f),B.N,B.at)
H.mq(d,o,A.a([r,A.a0(n,!1,n,n,n,A.bW("refund",t?B.y:B.v,14),n,"Return items",new C.bDO(d,e,f),B.N,B.at),A.a0(n,!1,n,n,n,D.Uz,n,"Exchange",new C.bDP(d,e,f),B.N,B.ah)],p),"Tax invoice \xb7 "+u,x,y.b)},
bKW(d,e,f,g){var x,w,v,u,t=null,s=g?8:3
if(g)x=new A.a7(t,t,new A.cf(new A.aL($.d?B.Y:B.Z,1,B.O,-1),B.U,B.U,B.U),t,t,t,B.J)
else x=t
w=g?8:0
if(g)v=A.p($.d?B.y:B.v,t,t,t,17,B.bz)
else v=A.p($.d?B.a_:B.a0,F.cq,t,t,13,B.p)
v=A.h(d,t,B.ab,t,t,v,t,t)
if(g)u=A.p($.d?B.y:B.v,t,t,t,17,B.bz)
else u=A.p($.d?B.a_:B.a0,F.cq,t,t,13,B.p)
return new A.ai(new A.a6(0,s,0,3),A.a5(t,A.ae(A.a([new A.fl(1,B.c8,v,t),A.h(e,t,t,t,t,u.aD(f),t,t)],y.u),B.E,B.bM,B.z,0),B.A,t,t,x,t,t,t,t,new A.a6(0,w,0,0),t,t,t),t)},
bDQ:function bDQ(d){this.a=d},
bDN:function bDN(d,e){this.a=d
this.b=e},
bDO:function bDO(d,e,f){this.a=d
this.b=e
this.c=f},
bDP:function bDP(d,e,f){this.a=d
this.b=e
this.c=f}},D,E,F,H,G,I,K
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[56],C)
D=c[183]
E=c[90]
F=c[137]
H=c[83]
G=c[63]
I=c[87]
K=c[95]
var z=a.updateTypes([])
C.bDQ.prototype={
$1(d){var x,w,v,u,t=null,s=this.a.h(0,d.gd1()),r=s==null,q=r?t:s.c
if(q==null)q=d.gd1()
x=r?t:s.f
if(x==null)x=0
r=A.h(q,t,t,t,t,A.p(t,t,t,t,11.8,B.P),t,t)
w=d.ge5()
v=A.J(x)
u=y.u
return new A.ai(B.mU,A.ae(A.a([A.aS(A.R(A.a([r,A.h(""+w+" \xd7 "+v,t,t,t,t,A.p($.d?B.R:B.Q,t,t,t,13,B.p),t,t)],u),B.F,t,B.r,B.z),1),A.h(A.J(d.ge5()*x),t,t,t,t,A.p(t,t,t,t,11.8,B.P),t,t)],u),B.E,B.r,B.z,0),t)},
$S:1016}
C.bDN.prototype={
$0(){return A.M(this.a,"Printing "+this.b.ghc()+"\u2026",null)},
$S:0}
C.bDO.prototype={
$0(){var x,w=this.a
A.aq(w,!0).Y()
x=this.c
G.YY(w,this.b,x.gaf(x),!1)},
$S:0}
C.bDP.prototype={
$0(){var x,w=this.a
A.aq(w,!0).Y()
x=this.c
G.YY(w,this.b,x.gaf(x),!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.bDQ,A.cl)
w(A.d_,[C.bDN,C.bDO,C.bDP])})()
var y={n:A.G("m<al>"),u:A.G("m<e>"),l:A.G("j<cN>"),q:A.G("j<cL>"),f:A.G("cL"),w:A.G("c"),b:A.G("@")};(function constants(){D.Uz=new A.cC("swap",14,B.D,null)})()};
(a=>{a["XYXzm71zWSTuvQsogGzuz5bOios="]=a.current})($__dart_deferred_initializers__);