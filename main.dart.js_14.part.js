((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
aqH(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null
for(x=J.a0(e.m(0,$.eq(),y.l)),w=n;x.n();){v=x.gB(x)
if(v.a===f.gf6())w=v}x=A.A(y.w,y.f)
for(u=J.a0(e.m(0,$.fr(),y.q));u.n();){t=u.gB(u)
x.l(0,t.a,t)}s=new C.bSB(x)
x=B.h.q(f.gfR(f).toLowerCase(),"online")||B.h.b5(f.gad(f),"ORD-")?"Online Order":"Store Bill"
u=f.giy(f)
t=f.gr9()
r=f.gjW()
q=w==null?n:w.b
if(q==null)q="Walk-in"
p=y.u
q=A.a([new A.dZ(A.a([new A.Y("Order Type",x,!1),new A.Y("Store / counter",u+" \xb7 "+t,!1),new A.Y("Cashier",r,!1),new A.Y("Customer",q,!1),new A.Y("Paid by",f.gfR(f),!1),new A.Y("Billed",E.d0(f.gdZ(f)),!1),new A.Y("Status",I.dk(f.gaL(f)),!1)],y.n),2,n),K.cm,A.e("Items ("+f.giW(f)+")",n,n,n,n,n,A.k(n,n,n,n,16,B.H).aA(15),n,n),B.bI],p)
for(x=J.a0(f.ghH(f));x.n();)q.push(s.$1(x.gB(x)))
q.push(B.b0)
q.push(C.c2I("Discounts","\u2212"+A.E(f.gKv()),B.aO,!1))
q.push(C.c2I("GST included",A.E(f.gNs()),n,!1))
q.push(C.c2I("Net paid",A.E(f.gfT()),n,!0))
o=A.I(q,B.A,n,B.o,B.L)
x=f.gfA()
u=E.d0(f.gdZ(f))
t=$.d
r=A.N(n,!1,n,n,n,A.bz("printer",t?B.v:B.r,14),n,"Print",new C.bSy(d,f),B.C,B.aa)
H.lt(d,o,A.a([r,A.N(n,!1,n,n,n,A.bz("refund",t?B.v:B.r,14),n,"Return items",new C.bSz(d,e,f),B.C,B.aa),A.N(n,!1,n,n,n,D.VE,n,"Exchange",new C.bSA(d,e,f),B.C,B.a8)],p),"Tax invoice \xb7 "+u,x,y.b)},
c2I(d,e,f,g){var x,w,v,u,t=null,s=g?8:3
if(g)x=new A.a_(t,t,new A.bK(new A.aK($.d?B.U:B.X,1,B.K,-1),B.N,B.N,B.N),t,t,t,B.F)
else x=t
w=g?8:0
if(g)v=A.k($.d?B.v:B.r,t,t,t,17,B.bC)
else v=A.k($.d?B.Y:B.T,F.c9,t,t,13,B.n)
v=A.e(d,t,t,B.a2,t,t,v,t,t)
if(g)u=A.k($.d?B.v:B.r,t,t,t,17,B.bC)
else u=A.k($.d?B.Y:B.T,F.c9,t,t,13,B.n)
return new A.a4(new A.ad(0,s,0,3),A.S(t,A.V(A.a([new A.hf(1,B.cQ,v,t),A.e(e,t,t,t,t,t,u.ai(f),t,t)],y.u),B.B,B.bX,B.u),B.y,t,t,x,t,t,t,t,new A.ad(0,w,0,0),t,t,t),t)},
bSB:function bSB(d){this.a=d},
bSy:function bSy(d,e){this.a=d
this.b=e},
bSz:function bSz(d,e,f){this.a=d
this.b=e
this.c=f},
bSA:function bSA(d,e,f){this.a=d
this.b=e
this.c=f}},D,E,F,H,G,I,K
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[77],C)
D=c[267]
E=c[124]
F=c[174]
H=c[116]
G=c[87]
I=c[120]
K=c[173]
var z=a.updateTypes([])
C.bSB.prototype={
$1(d){var x,w,v,u,t=null,s=this.a.h(0,d.gcX()),r=s==null,q=r?t:s.c
if(q==null)q=d.gcX()
x=r?t:s.f
if(x==null)x=0
r=A.e(q,t,t,t,t,t,A.k(t,t,t,t,11.8,B.H),t,t)
w=d.gdQ()
v=A.E(x)
u=y.u
return new A.a4(B.lg,A.V(A.a([A.aC(A.I(A.a([r,A.e(""+w+" \xd7 "+v,t,t,t,t,t,A.k($.d?B.E:B.D,t,t,t,13,B.n),t,t)],u),B.A,t,B.o,B.u),1),A.e(A.E(d.gdQ()*x),t,t,t,t,t,A.k(t,t,t,t,11.8,B.H),t,t)],u),B.B,B.o,B.u),t)},
$S:1071}
C.bSy.prototype={
$0(){return A.K(this.a,"Printing "+this.b.gfA()+"\u2026",null)},
$S:0}
C.bSz.prototype={
$0(){var x,w=this.a
A.ao(w,!0).S()
x=this.c
G.a0E(w,this.b,x.gad(x),!1)},
$S:0}
C.bSA.prototype={
$0(){var x,w=this.a
A.ao(w,!0).S()
x=this.c
G.a0E(w,this.b,x.gad(x),!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.bSB,A.bN)
w(A.cA,[C.bSy,C.bSz,C.bSA])})()
var y={n:A.H("l<Y>"),u:A.H("l<f>"),l:A.H("i<d2>"),q:A.H("i<d3>"),f:A.H("d3"),w:A.H("c"),b:A.H("@")};(function constants(){D.VE=new A.cO("swap",14,B.J,null)})()};
(a=>{a["23LDtiiHzWMFSgQIaIZgry9jaHo="]=a.current})($__dart_deferred_initializers__);