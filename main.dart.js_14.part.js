((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
aqw(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null
for(x=J.a1(e.m(0,$.eo(),y.l)),w=n;x.n();){v=x.gB(x)
if(v.a===f.gf8())w=v}x=A.z(y.w,y.f)
for(u=J.a1(e.m(0,$.fo(),y.q));u.n();){t=u.gB(u)
x.k(0,t.a,t)}s=new C.bPV(x)
x=B.h.q(f.gfS(f).toLowerCase(),"online")||B.h.b6(f.gaf(f),"ORD-")?"Online Order":"Store Bill"
u=f.giz(f)
t=f.grn()
r=f.gjU()
q=w==null?n:w.b
if(q==null)q="Walk-in"
p=y.u
q=A.a([new A.e_(A.a([new A.Y("Order Type",x,!1),new A.Y("Store / counter",u+" \xb7 "+t,!1),new A.Y("Cashier",r,!1),new A.Y("Customer",q,!1),new A.Y("Paid by",f.gfS(f),!1),new A.Y("Billed",E.dF(f.ge3(f)),!1),new A.Y("Status",I.dj(f.gaL(f)),!1)],y.n),2,n),K.cp,A.e("Items ("+f.giT(f)+")",n,n,n,n,n,A.k(n,n,n,n,16,B.I).aA(15),n,n),B.bN],p)
for(x=J.a1(f.ghD(f));x.n();)q.push(s.$1(x.gB(x)))
q.push(B.b2)
q.push(C.c0b("Discounts","\u2212"+A.J(f.gKe()),B.aO,!1))
q.push(C.c0b("GST included",A.J(f.gNd()),n,!1))
q.push(C.c0b("Net paid",A.J(f.gfU()),n,!0))
o=A.I(q,B.B,n,B.p,B.M)
x=f.gfB()
u=E.dF(f.ge3(f))
t=$.d
r=A.N(n,!1,n,n,n,A.bC("printer",t?B.w:B.u,14),n,"Print",new C.bPS(d,f),B.D,B.af)
H.ln(d,o,A.a([r,A.N(n,!1,n,n,n,A.bC("refund",t?B.w:B.u,14),n,"Return items",new C.bPT(d,e,f),B.D,B.af),A.N(n,!1,n,n,n,D.VU,n,"Exchange",new C.bPU(d,e,f),B.D,B.a9)],p),"Tax invoice \xb7 "+u,x,y.b)},
c0b(d,e,f,g){var x,w,v,u,t=null,s=g?8:3
if(g)x=new A.a_(t,t,new A.bM(new A.aK($.d?B.Y:B.Z,1,B.L,-1),B.Q,B.Q,B.Q),t,t,t,B.F)
else x=t
w=g?8:0
if(g)v=A.k($.d?B.w:B.u,t,t,t,17,B.bC)
else v=A.k($.d?B.X:B.U,F.cd,t,t,13,B.n)
v=A.e(d,t,t,B.a3,t,t,v,t,t)
if(g)u=A.k($.d?B.w:B.u,t,t,t,17,B.bC)
else u=A.k($.d?B.X:B.U,F.cd,t,t,13,B.n)
return new A.a6(new A.ae(0,s,0,3),A.T(t,A.W(A.a([new A.he(1,B.cR,v,t),A.e(e,t,t,t,t,t,u.aj(f),t,t)],y.u),B.C,B.bX,B.v),B.A,t,t,x,t,t,t,t,new A.ae(0,w,0,0),t,t,t),t)},
bPV:function bPV(d){this.a=d},
bPS:function bPS(d,e){this.a=d
this.b=e},
bPT:function bPT(d,e,f){this.a=d
this.b=e
this.c=f},
bPU:function bPU(d,e,f){this.a=d
this.b=e
this.c=f}},D,E,F,H,G,I,K
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[73],C)
D=c[251]
E=c[114]
F=c[165]
H=c[108]
G=c[83]
I=c[112]
K=c[164]
var z=a.updateTypes([])
C.bPV.prototype={
$1(d){var x,w,v,u,t=null,s=this.a.h(0,d.gcZ()),r=s==null,q=r?t:s.c
if(q==null)q=d.gcZ()
x=r?t:s.f
if(x==null)x=0
r=A.e(q,t,t,t,t,t,A.k(t,t,t,t,11.8,B.I),t,t)
w=d.gdU()
v=A.J(x)
u=y.u
return new A.a6(B.l7,A.W(A.a([A.aC(A.I(A.a([r,A.e(""+w+" \xd7 "+v,t,t,t,t,t,A.k($.d?B.H:B.G,t,t,t,13,B.n),t,t)],u),B.B,t,B.p,B.v),1),A.e(A.J(d.gdU()*x),t,t,t,t,t,A.k(t,t,t,t,11.8,B.I),t,t)],u),B.C,B.p,B.v),t)},
$S:1083}
C.bPS.prototype={
$0(){return A.K(this.a,"Printing "+this.b.gfB()+"\u2026",null)},
$S:0}
C.bPT.prototype={
$0(){var x,w=this.a
A.ao(w,!0).S()
x=this.c
G.a0j(w,this.b,x.gaf(x),!1)},
$S:0}
C.bPU.prototype={
$0(){var x,w=this.a
A.ao(w,!0).S()
x=this.c
G.a0j(w,this.b,x.gaf(x),!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.bPV,A.bO)
w(A.cK,[C.bPS,C.bPT,C.bPU])})()
var y={n:A.G("l<Y>"),u:A.G("l<f>"),l:A.G("i<d0>"),q:A.G("i<d1>"),f:A.G("d1"),w:A.G("c"),b:A.G("@")};(function constants(){D.VU=new A.cO("swap",14,B.K,null)})()};
(a=>{a["iKs+tCul23T6xu7KcVyejzQBcF0="]=a.current})($__dart_deferred_initializers__);