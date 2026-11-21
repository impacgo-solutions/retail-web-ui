((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
any(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null
for(x=J.ab(e.m(0,$.e6(),y.l)),w=n;x.p();){v=x.gE(x)
if(v.a===f.gfd())w=v}x=A.z(y.w,y.f)
for(u=J.ab(e.m(0,$.fh(),y.q));u.p();){t=u.gE(u)
x.l(0,t.a,t)}s=new C.bDu(x)
x=B.m.q(f.gfB(f).toLowerCase(),"online")||B.m.bb(f.gaf(f),"ORD-")?"Online Order":"Store Bill"
u=f.giP(f)
t=f.gqM()
r=f.gjB()
q=w==null?n:w.b
if(q==null)q="Walk-in"
p=y.u
q=A.a([new A.et(A.a([new A.am("Order Type",x,!1),new A.am("Store / counter",u+" \xb7 "+t,!1),new A.am("Cashier",r,!1),new A.am("Customer",q,!1),new A.am("Paid by",f.gfB(f),!1),new A.am("Billed",E.ee(f.gdW(f)),!1),new A.am("Status",I.ef(f.gaI(f)),!1)],y.n),2,n),K.cW,A.h("Items ("+f.giz(f)+")",n,n,n,n,A.p(n,n,n,n,16,B.R).aW(15),n,n),B.cQ],p)
for(x=J.ab(f.ghD(f));x.p();)q.push(s.$1(x.gE(x)))
q.push(B.bs)
q.push(C.bKA("Discounts","\u2212"+A.J(f.gIa()),B.aK,!1))
q.push(C.bKA("GST included",A.J(f.gKQ()),n,!1))
q.push(C.bKA("Net paid",A.J(f.gh8()),n,!0))
o=A.S(q,B.H,n,B.r,B.M)
x=f.ghc()
u=E.ee(f.gdW(f))
t=$.d
r=A.a0(n,!1,n,n,n,A.bU("printer",t?B.y:B.w,14),n,"Print",new C.bDr(d,f),B.N,B.at)
H.nA(d,o,A.a([r,A.a0(n,!1,n,n,n,A.bU("refund",t?B.y:B.w,14),n,"Return items",new C.bDs(d,e,f),B.N,B.at),A.a0(n,!1,n,n,n,D.Uz,n,"Exchange",new C.bDt(d,e,f),B.N,B.ah)],p),"Tax invoice \xb7 "+u,x,y.b)},
bKA(d,e,f,g){var x,w,v,u,t=null,s=g?8:3
if(g)x=new A.a6(t,t,new A.ce(new A.aK($.d?B.Y:B.Z,1,B.O,-1),B.U,B.U,B.U),t,t,t,B.J)
else x=t
w=g?8:0
if(g)v=A.p($.d?B.y:B.w,t,t,t,17,B.bz)
else v=A.p($.d?B.a_:B.a0,F.cq,t,t,13,B.p)
v=A.h(d,t,B.ab,t,t,v,t,t)
if(g)u=A.p($.d?B.y:B.w,t,t,t,17,B.bz)
else u=A.p($.d?B.a_:B.a0,F.cq,t,t,13,B.p)
return new A.ah(new A.a7(0,s,0,3),A.a5(t,A.ae(A.a([new A.fl(1,B.c8,v,t),A.h(e,t,t,t,t,u.aD(f),t,t)],y.u),B.E,B.bM,B.z,0),B.A,t,t,x,t,t,t,t,new A.a7(0,w,0,0),t,t,t),t)},
bDu:function bDu(d){this.a=d},
bDr:function bDr(d,e){this.a=d
this.b=e},
bDs:function bDs(d,e,f){this.a=d
this.b=e
this.c=f},
bDt:function bDt(d,e,f){this.a=d
this.b=e
this.c=f}},D,E,F,H,G,I,K
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[55],C)
D=c[181]
E=c[89]
F=c[134]
H=c[82]
G=c[62]
I=c[86]
K=c[151]
var z=a.updateTypes([])
C.bDu.prototype={
$1(d){var x,w,v,u,t=null,s=this.a.h(0,d.gd5()),r=s==null,q=r?t:s.c
if(q==null)q=d.gd5()
x=r?t:s.f
if(x==null)x=0
r=A.h(q,t,t,t,t,A.p(t,t,t,t,11.8,B.R),t,t)
w=d.ge5()
v=A.J(x)
u=y.u
return new A.ah(B.mU,A.ae(A.a([A.aS(A.S(A.a([r,A.h(""+w+" \xd7 "+v,t,t,t,t,A.p($.d?B.Q:B.P,t,t,t,13,B.p),t,t)],u),B.H,t,B.r,B.z),1),A.h(A.J(d.ge5()*x),t,t,t,t,A.p(t,t,t,t,11.8,B.R),t,t)],u),B.E,B.r,B.z,0),t)},
$S:1012}
C.bDr.prototype={
$0(){return A.M(this.a,"Printing "+this.b.ghc()+"\u2026",null)},
$S:0}
C.bDs.prototype={
$0(){var x,w=this.a
A.ap(w,!0).Y()
x=this.c
G.YU(w,this.b,x.gaf(x),!1)},
$S:0}
C.bDt.prototype={
$0(){var x,w=this.a
A.ap(w,!0).Y()
x=this.c
G.YU(w,this.b,x.gaf(x),!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.bDu,A.cm)
w(A.d2,[C.bDr,C.bDs,C.bDt])})()
var y={n:A.G("m<am>"),u:A.G("m<e>"),l:A.G("j<cM>"),q:A.G("j<cK>"),f:A.G("cK"),w:A.G("c"),b:A.G("@")};(function constants(){D.Uz=new A.cC("swap",14,B.D,null)})()};
(a=>{a["1hpUdJb9r2jBnsOdUDNEnUoxT/Q="]=a.current})($__dart_deferred_initializers__);