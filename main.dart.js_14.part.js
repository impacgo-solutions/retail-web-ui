((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
anM(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=null
for(x=J.aa(e.m(0,$.ed(),y.l)),w=n;x.p();){v=x.gE(x)
if(v.a===f.gfd())w=v}x=A.x(y.w,y.f)
for(u=J.aa(e.m(0,$.fa(),y.q));u.p();){t=u.gE(u)
x.l(0,t.a,t)}s=new C.bEz(x)
x=B.m.q(f.gfB(f).toLowerCase(),"online")||B.m.b9(f.gaf(f),"ORD-")?"Online Order":"Store Bill"
u=f.giQ(f)
t=f.gqP()
r=f.gjB()
q=w==null?n:w.b
if(q==null)q="Walk-in"
p=y.u
q=A.a([new A.ep(A.a([new A.al("Order Type",x,!1),new A.al("Store / counter",u+" \xb7 "+t,!1),new A.al("Cashier",r,!1),new A.al("Customer",q,!1),new A.al("Paid by",f.gfB(f),!1),new A.al("Billed",E.dU(f.gdX(f)),!1),new A.al("Status",I.ee(f.gaI(f)),!1)],y.n),2,n),K.cS,A.f("Items ("+f.giA(f)+")",n,n,n,n,n,A.o(n,n,n,n,16,B.R).aV(15),n,n),B.cT],p)
for(x=J.aa(f.ghG(f));x.p();)q.push(s.$1(x.gE(x)))
q.push(B.bl)
q.push(C.bMb("Discounts","\u2212"+A.J(f.gIq()),B.aK,!1))
q.push(C.bMb("GST included",A.J(f.gL6()),n,!1))
q.push(C.bMb("Net paid",A.J(f.gh8()),n,!0))
o=A.Q(q,B.E,n,B.r,B.N)
x=f.ghc()
u=E.dU(f.gdX(f))
t=$.d
r=A.Y(n,!1,n,n,n,A.bO("printer",t?B.x:B.v,14),n,"Print",new C.bEw(d,f),B.M,B.ar)
H.ms(d,o,A.a([r,A.Y(n,!1,n,n,n,A.bO("refund",t?B.x:B.v,14),n,"Return items",new C.bEx(d,e,f),B.M,B.ar),A.Y(n,!1,n,n,n,D.UK,n,"Exchange",new C.bEy(d,e,f),B.M,B.ah)],p),"Tax invoice \xb7 "+u,x,y.b)},
bMb(d,e,f,g){var x,w,v,u,t=null,s=g?8:3
if(g)x=new A.a6(t,t,new A.c7(new A.aK($.d?B.a_:B.a0,1,B.O,-1),B.S,B.S,B.S),t,t,t,B.I)
else x=t
w=g?8:0
if(g)v=A.o($.d?B.x:B.v,t,t,t,17,B.bw)
else v=A.o($.d?B.X:B.Y,F.cr,t,t,13,B.p)
v=A.f(d,t,t,B.ab,t,t,v,t,t)
if(g)u=A.o($.d?B.x:B.v,t,t,t,17,B.bw)
else u=A.o($.d?B.X:B.Y,F.cr,t,t,13,B.p)
return new A.af(new A.a7(0,s,0,3),A.a3(t,A.ac(A.a([new A.fl(1,B.ca,v,t),A.f(e,t,t,t,t,t,u.aD(f),t,t)],y.u),B.F,B.bL,B.z,0),B.A,t,t,x,t,t,t,t,new A.a7(0,w,0,0),t,t,t),t)},
bEz:function bEz(d){this.a=d},
bEw:function bEw(d,e){this.a=d
this.b=e},
bEx:function bEx(d,e,f){this.a=d
this.b=e
this.c=f},
bEy:function bEy(d,e,f){this.a=d
this.b=e
this.c=f}},D,E,F,H,G,I,K
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[58],C)
D=c[189]
E=c[92]
F=c[144]
H=c[85]
G=c[65]
I=c[89]
K=c[104]
var z=a.updateTypes([])
C.bEz.prototype={
$1(d){var x,w,v,u,t=null,s=this.a.h(0,d.gd1()),r=s==null,q=r?t:s.c
if(q==null)q=d.gd1()
x=r?t:s.f
if(x==null)x=0
r=A.f(q,t,t,t,t,t,A.o(t,t,t,t,11.8,B.R),t,t)
w=d.ge6()
v=A.J(x)
u=y.u
return new A.af(B.mX,A.ac(A.a([A.aS(A.Q(A.a([r,A.f(""+w+" \xd7 "+v,t,t,t,t,t,A.o($.d?B.Q:B.P,t,t,t,13,B.p),t,t)],u),B.E,t,B.r,B.z),1),A.f(A.J(d.ge6()*x),t,t,t,t,t,A.o(t,t,t,t,11.8,B.R),t,t)],u),B.F,B.r,B.z,0),t)},
$S:1020}
C.bEw.prototype={
$0(){return A.M(this.a,"Printing "+this.b.ghc()+"\u2026",null)},
$S:0}
C.bEx.prototype={
$0(){var x,w=this.a
A.ao(w,!0).X()
x=this.c
G.Z7(w,this.b,x.gaf(x),!1)},
$S:0}
C.bEy.prototype={
$0(){var x,w=this.a
A.ao(w,!0).X()
x=this.c
G.Z7(w,this.b,x.gaf(x),!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.bEz,A.ck)
w(A.cX,[C.bEw,C.bEx,C.bEy])})()
var y={n:A.G("m<al>"),u:A.G("m<e>"),l:A.G("j<cO>"),q:A.G("j<cM>"),f:A.G("cM"),w:A.G("c"),b:A.G("@")};(function constants(){D.UK=new A.cE("swap",14,B.D,null)})()};
(a=>{a["VTI4sqXLI733x0omcOqhX6HqaCQ="]=a.current})($__dart_deferred_initializers__);