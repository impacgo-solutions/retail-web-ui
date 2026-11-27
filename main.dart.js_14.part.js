((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
apF(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null
for(x=J.a3(e.m(0,$.en(),y.l)),w=n;x.p();){v=x.gB(x)
if(v.a===f.gfi())w=v}x=A.B(y.w,y.f)
for(u=J.a3(e.m(0,$.fj(),y.q));u.p();){t=u.gB(u)
x.l(0,t.a,t)}s=new C.bNR(x)
x=B.h.q(f.gfN(f).toLowerCase(),"online")||B.h.b8(f.gaj(f),"ORD-")?"Online Order":"Store Bill"
u=f.gj3(f)
t=f.gr4()
r=f.gjN()
q=w==null?n:w.b
if(q==null)q="Walk-in"
p=y.u
q=A.a([new A.dW(A.a([new A.W("Order Type",x,!1),new A.W("Store / counter",u+" \xb7 "+t,!1),new A.W("Cashier",r,!1),new A.W("Customer",q,!1),new A.W("Paid by",f.gfN(f),!1),new A.W("Billed",E.dE(f.gdY(f)),!1),new A.W("Status",I.dn(f.gaK(f)),!1)],y.n),2,n),K.cl,A.e("Items ("+f.giR(f)+")",n,n,n,n,n,A.k(n,n,n,n,16,B.H).aA(15),n,n),B.bI],p)
for(x=J.a3(f.ghG(f));x.p();)q.push(s.$1(x.gB(x)))
q.push(B.b3)
q.push(C.bYM("Discounts","\u2212"+A.K(f.gJR()),B.aN,!1))
q.push(C.bYM("GST included",A.K(f.gMM()),n,!1))
q.push(C.bYM("Net paid",A.K(f.gho()),n,!0))
o=A.I(q,B.A,n,B.o,B.L)
x=f.ghu()
u=E.dE(f.gdY(f))
t=$.d
r=A.O(n,!1,n,n,n,A.bC("printer",t?B.v:B.t,14),n,"Print",new C.bNO(d,f),B.C,B.ae)
H.lf(d,o,A.a([r,A.O(n,!1,n,n,n,A.bC("refund",t?B.v:B.t,14),n,"Return items",new C.bNP(d,e,f),B.C,B.ae),A.O(n,!1,n,n,n,D.Vh,n,"Exchange",new C.bNQ(d,e,f),B.C,B.a8)],p),"Tax invoice \xb7 "+u,x,y.b)},
bYM(d,e,f,g){var x,w,v,u,t=null,s=g?8:3
if(g)x=new A.Z(t,t,new A.bL(new A.aJ($.d?B.W:B.Y,1,B.K,-1),B.P,B.P,B.P),t,t,t,B.E)
else x=t
w=g?8:0
if(g)v=A.k($.d?B.v:B.t,t,t,t,17,B.bB)
else v=A.k($.d?B.X:B.T,F.c9,t,t,13,B.n)
v=A.e(d,t,t,B.a2,t,t,v,t,t)
if(g)u=A.k($.d?B.v:B.t,t,t,t,17,B.bB)
else u=A.k($.d?B.X:B.T,F.c9,t,t,13,B.n)
return new A.a5(new A.ad(0,s,0,3),A.S(t,A.V(A.a([new A.h8(1,B.cO,v,t),A.e(e,t,t,t,t,t,u.ai(f),t,t)],y.u),B.B,B.bV,B.u),B.z,t,t,x,t,t,t,t,new A.ad(0,w,0,0),t,t,t),t)},
bNR:function bNR(d){this.a=d},
bNO:function bNO(d,e){this.a=d
this.b=e},
bNP:function bNP(d,e,f){this.a=d
this.b=e
this.c=f},
bNQ:function bNQ(d,e,f){this.a=d
this.b=e
this.c=f}},D,E,F,H,G,I,K
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[72],C)
D=c[245]
E=c[111]
F=c[163]
H=c[105]
G=c[81]
I=c[109]
K=c[162]
var z=a.updateTypes([])
C.bNR.prototype={
$1(d){var x,w,v,u,t=null,s=this.a.h(0,d.gcT()),r=s==null,q=r?t:s.c
if(q==null)q=d.gcT()
x=r?t:s.f
if(x==null)x=0
r=A.e(q,t,t,t,t,t,A.k(t,t,t,t,11.8,B.H),t,t)
w=d.gdO()
v=A.K(x)
u=y.u
return new A.a5(B.l2,A.V(A.a([A.aC(A.I(A.a([r,A.e(""+w+" \xd7 "+v,t,t,t,t,t,A.k($.d?B.G:B.F,t,t,t,13,B.n),t,t)],u),B.A,t,B.o,B.u),1),A.e(A.K(d.gdO()*x),t,t,t,t,t,A.k(t,t,t,t,11.8,B.H),t,t)],u),B.B,B.o,B.u),t)},
$S:1060}
C.bNO.prototype={
$0(){return A.J(this.a,"Printing "+this.b.ghu()+"\u2026",null)},
$S:0}
C.bNP.prototype={
$0(){var x,w=this.a
A.ao(w,!0).S()
x=this.c
G.a_N(w,this.b,x.gaj(x),!1)},
$S:0}
C.bNQ.prototype={
$0(){var x,w=this.a
A.ao(w,!0).S()
x=this.c
G.a_N(w,this.b,x.gaj(x),!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.bNR,A.bQ)
w(A.cD,[C.bNO,C.bNP,C.bNQ])})()
var y={n:A.G("l<W>"),u:A.G("l<f>"),l:A.G("i<d1>"),q:A.G("i<d_>"),f:A.G("d_"),w:A.G("c"),b:A.G("@")};(function constants(){D.Vh=new A.cM("swap",14,B.J,null)})()};
(a=>{a["19TbugcPpf4N+Dr5zyuZSrONZ0Y="]=a.current})($__dart_deferred_initializers__);