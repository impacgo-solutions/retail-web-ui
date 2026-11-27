((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,R,Q,H,I,L,M,V,W,B={
apt(a1,a2,a3,a4){var x=0,w=A.u(y._),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$apt=A.p(function(a5,a6){if(a5===1)return A.q(a6,w)
for(;;)switch(x){case 0:d=a1.m(0,$.ah(),y.q)
a0=a3==null
if(a0){u=d==null?null:d.a
t=u==null?"Cashier":u}else t=a3
s=a1.m(0,$.hi(),y.d)
r=a1.m(0,$.n3(),y.W)
u=J.cf(s)
q=u.cz(s,new B.bLd(t))
p=A.T(q,q.$ti.i("E.E"))
q=A.ak(p).i("ar<1>")
o=A.T(new A.ar(p,new B.bLi(a2,new B.bLh(a4),new B.bLg(A.lt(A.f7()))),q),q.i("E.E"))
switch(a2.a){case 0:q=L.dE(A.f7())
break
case 1:q="Last 7 days"
break
case 2:q="Last 30 days"
break
case 3:q=a4==null?"Custom range":L.dE(C.e.gL(a4.a.ju().split("T")))+" \u2013 "+L.dE(C.e.gL(a4.b.ju().split("T")))
break
default:q=null}if(o.length!==0){n=a1.m(0,$.cF(),y.B)
m=A.cO(J.b9(n,new B.bLe(o)))
l=m==null?A.cO(n):m
if(l==null)l=C.hy
k=l.gb5(l)+" \xb7 "+l.gcq(l)}else k="\u2014"
j=null
i=null
x=a2===G.jV?3:4
break
case 3:m=d==null
h=m?null:d.Q
if(h==null)h=""
if(!a0){a0=A.cO(u.cz(s,new B.bLf(t)))
g=a0==null?null:a0.ax}else g=m?null:d.at
x=h.length!==0&&g!=null?5:6
break
case 5:if(o.length!==0)f=C.e.gL(o).b
else{a0=a1.m(0,$.j_(),y.E)
f=a0.gaj(a0)}x=7
return A.h(C.fe.zb(g,f,h),$async$apt)
case 7:e=a6
j=e.a
i=e.b
case 6:case 4:v=new B.a1p(a2,q,t,k,o,r,j,i)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$apt,w)},
a1p:function a1p(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
at8:function at8(){},
at5:function at5(){},
at4:function at4(){},
at7:function at7(){},
at6:function at6(){},
at9:function at9(){},
at3:function at3(){},
at2:function at2(){},
at0:function at0(){},
at1:function at1(){},
bLd:function bLd(d){this.a=d},
bLg:function bLg(d){this.a=d},
bLh:function bLh(d){this.a=d},
bLi:function bLi(d,e,f){this.a=d
this.b=e
this.c=f},
bLe:function bLe(d){this.a=d},
bLf:function bLf(d){this.a=d},
bNB(d,e,f,g,h){var x=0,w=A.u(y.H),v,u,t,s,r
var $async$bNB=A.p(function(i,j){if(i===1)return A.q(j,w)
for(;;)switch(x){case 0:x=3
return A.h(B.apt(e,f,g,h),$async$bNB)
case 3:r=j
if(d.e==null){x=1
break}u=K.hS(f)
u=A.aV(u.toLowerCase()," ","_")
t=f===G.di?r.b:K.hS(f)
s=A.O(null,!1,null,null,null,null,null,"Close",new B.bNC(d),C.C,C.ae)
A.bv(d,new B.Uk(r,null),A.a([s,A.O(null,!1,null,null,null,A.bC("printer",$.d?C.v:C.t,14),null,"Print",new B.bND(d),C.C,C.ae),A.O(null,!1,null,null,null,M.fb,null,"Download PDF",new B.bNE(d,r,"cashops_report_"+u+".pdf"),C.C,C.a8)],y.p),t+" Cash Ops Report \u2014 PDF Preview",C.bD,y.z)
case 1:return A.r(v,w)}})
return A.t($async$bNB,w)},
bNy(d,e,f,g,h){var x=0,w=A.u(y.H),v,u,t,s
var $async$bNy=A.p(function(i,j){if(i===1)return A.q(j,w)
for(;;)switch(x){case 0:x=3
return A.h(B.apt(e,f,g,h),$async$bNy)
case 3:s=j
if(d.e==null){x=1
break}u=K.hS(f)
u=A.aV(u.toLowerCase()," ","_")
t=f===G.di?s.b:K.hS(f)
A.bv(d,new B.Uk(s,null),A.a([A.O(null,!1,null,null,null,null,null,"Close",new B.bNz(d),C.C,C.ae),A.O(null,!1,null,null,null,M.fb,null,"Download .xlsx",new B.bNA(d,s,"cashops_report_"+u+".csv"),C.C,C.hD)],y.p),t+" Cash Ops Report \u2014 Excel Preview",C.bD,y.z)
case 1:return A.r(v,w)}})
return A.t($async$bNy,w)},
bNC:function bNC(d){this.a=d},
bND:function bND(d){this.a=d},
bNE:function bNE(d,e,f){this.a=d
this.b=e
this.c=f},
bNz:function bNz(d){this.a=d},
bNA:function bNA(d,e,f){this.a=d
this.b=e
this.c=f},
Uk:function Uk(d,e){this.c=d
this.a=e},
bMb(d){var x=0,w=A.u(y.H),v,u,t
var $async$bMb=A.p(function(e,f){if(e===1)return A.q(f,w)
for(;;)switch(x){case 0:t=D.Ni(null)
t.xb(O.a5R(new B.bMc(d,new B.bMd()),null,E.lR))
x=2
return A.h(t.i0(0),$async$bMb)
case 2:v=f
u=K.hS(d.a)
P.w5("cashops_report_"+A.aV(u.toLowerCase()," ","_")+".pdf",v,"application/pdf")
return A.r(null,w)}})
return A.t($async$bMb,w)},
cuT(d){var x,w,v,u,t,s,r=new B.bM9(),q=new A.dT(""),p=d.a,o=K.hS(p)+" Cash Ops Report\n"
q.a=o
x=d.c
w=d.d
o+=x+","+w+"\n"
q.a=o
o+="\n"
q.a=o
q.a=o+"SUMMARY\n"
v=new B.bMa(q,r)
v.$2("Date",d.b)
v.$2("Cashier",x)
v.$2("Store",w)
w=d.e
v.$2("Registers Opened",""+w.length)
v.$2("Currently Open",""+d.gXx())
v.$2("Closed",""+d.gUx())
v.$2("Total Opening Float",A.K(d.gYr()))
v.$2("Total Cash Sales",A.K(d.gYn()))
v.$2("Total Cash Refunds",A.K(d.gYm()))
v.$2("Total Expected in Drawer",A.K(d.gYp()))
v.$2("Total Counted",A.K(d.gYo()))
v.$2("Total Variance",A.K(d.gYu()))
if(d.gl4().length!==0){o=d.gl4()
v.$2("Denomination Final Count",new A.aw(o,new B.bM8(),A.ak(o).i("aw<1,c>")).aB(0," "))}o=q.a+="\n"
x=w.length
o+="REGISTERS ("+x+")\n"
q.a=o
q.a=o+"Register,Counter,Opened By,Opening,Cash Sales,Expected,Counted,Variance,Status\n"
for(u=0;u<w.length;w.length===x||(0,A.y)(w),++u){t=w[u]
o=A.j(r.$1(t.a))+","+A.j(r.$1(t.c))+","+A.j(r.$1(t.y))+","+A.K(t.d)+","+A.K(t.e)+","+A.K(t.r)+","+A.K(t.w)+","+A.K(t.x)+","+A.j(r.$1(t.Q))+"\n"
q.a+=o}o=A.a([239,187,191],y.a)
x=q.a
C.e.A(o,C.c4.bF(x.charCodeAt(0)==0?x:x))
s=new Uint8Array(A.fi(o))
p=K.hS(p)
P.w5("cashops_report_"+A.aV(p.toLowerCase()," ","_")+".csv",s,"text/csv")},
bMd:function bMd(){},
bMc:function bMc(d,e){this.a=d
this.b=e},
bM9:function bM9(){},
bMa:function bMa(d,e){this.a=d
this.b=e},
bM8:function bM8(){},
clq(d){return new B.yh(null)},
yh:function yh(d){this.a=d},
akf:function akf(){this.d=$
this.c=this.a=null},
btA:function btA(d){this.a=d},
btz:function btz(){},
bty:function bty(d,e,f){this.a=d
this.b=e
this.c=f},
btw:function btw(d){this.a=d},
btx:function btx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Km:function Km(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
ajM:function ajM(d,e,f){this.c=d
this.d=e
this.a=f},
Vs:function Vs(d,e){this.d=d
this.a=e},
Vt:function Vt(d,e){var _=this
_.w=d
_.x=null
_.y=!0
_.Q=_.z=null
_.as=e
_.d=$
_.c=_.a=null},
bbl:function bbl(d){this.a=d},
bbm:function bbm(d){this.a=d},
bbn:function bbn(){},
bbr:function bbr(){},
bbs:function bbs(){},
bbt:function bbt(d,e){this.a=d
this.b=e},
bbj:function bbj(d){this.a=d},
bbk:function bbk(d){this.a=d},
bbu:function bbu(){},
bbv:function bbv(d){this.a=d},
bbi:function bbi(d,e){this.a=d
this.b=e},
bbw:function bbw(d){this.a=d},
bbh:function bbh(d){this.a=d},
bbx:function bbx(d){this.a=d},
bbg:function bbg(d){this.a=d},
bby:function bby(d){this.a=d},
bbf:function bbf(d){this.a=d},
bbo:function bbo(d,e){this.a=d
this.b=e},
bbe:function bbe(d,e){this.a=d
this.b=e},
bbp:function bbp(d){this.a=d},
bbd:function bbd(d){this.a=d},
bbq:function bbq(d){this.a=d},
bbc:function bbc(d){this.a=d},
t8:function t8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ada:function ada(){this.d=!1
this.c=this.a=null},
b2p:function b2p(d){this.a=d},
b2o:function b2o(d){this.a=d},
b2q:function b2q(d){this.a=d},
b2n:function b2n(d){this.a=d},
c8U(d,e,f,g){var x,w,v,u,t,s=d.m(0,$.cF(),y.B),r=g==null?null:A.cO(J.b9(s,new B.bLC(g))),q=r==null,p=q?s:A.a([r],y.x),o=d.m(0,$.mb(),y.y),n=d.m(0,$.mc(),y.A),m=d.m(0,$.eL(),y.j),l=new B.bLL(e,new B.bLK(f),new B.bLJ(A.lt(A.f7()))),k=new B.bLB(),j=A.a([],y.Y)
for(x=J.a3(p),w=J.cf(o),v=J.cf(n),u=J.cf(m);x.p();){t=x.gB(x)
j.push(new B.yF(t,w.cz(o,new B.bLD(k,t,l)).bj(0,0,new B.bLE()),w.cz(o,new B.bLF(k,t,l)).gu(0),v.cz(n,new B.bLG(k,t)).gu(0),u.cz(m,new B.bLH(k,t)).gu(0)))}switch(e.a){case 0:x=L.dE(A.f7())
break
case 1:x="Last 7 days"
break
case 2:x="Last 30 days"
break
case 3:x=f==null?"Custom range":L.dE(C.e.gL(f.a.ju().split("T")))+" - "+L.dE(C.e.gL(f.b.ju().split("T")))
break
default:x=null}w=!q?0:u.cz(m,new B.bLI()).gu(0)
return new B.aG_(q?null:r.gb5(r)+" \xb7 "+r.gcq(r),e,x,j,w)},
yF:function yF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aG_:function aG_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aG3:function aG3(){},
aG0:function aG0(){},
aG2:function aG2(){},
aG1:function aG1(){},
bLC:function bLC(d){this.a=d},
bLJ:function bLJ(d){this.a=d},
bLK:function bLK(d){this.a=d},
bLL:function bLL(d,e,f){this.a=d
this.b=e
this.c=f},
bLB:function bLB(){},
bLD:function bLD(d,e,f){this.a=d
this.b=e
this.c=f},
bLE:function bLE(){},
bLF:function bLF(d,e,f){this.a=d
this.b=e
this.c=f},
bLG:function bLG(d,e){this.a=d
this.b=e},
bLH:function bLH(d,e){this.a=d
this.b=e},
bLA:function bLA(d,e){this.a=d
this.b=e},
bLI:function bLI(){},
cwh(d,e,f,g,h){var x,w,v=null,u=B.c8U(e,f,g,h),t=K.hS(f)
t=A.aV(t.toLowerCase()," ","_")
x=f===G.di?u.c:K.hS(f)
w=u.a
w=w==null?"":" \xb7 "+w
A.bv(d,new B.Wp(u,v),A.a([A.O(v,!1,v,v,v,v,v,"Close",new B.bNU(d),C.C,C.ae),A.O(v,!1,v,v,v,M.fb,v,"Download PDF",new B.bNV(d,u,"network_report_"+t+".pdf"),C.C,C.a8)],y.p),x+" Network Report"+w+" \u2014 PDF Preview",C.bD,y.z)},
cwg(d,e,f,g,h){var x,w,v=null,u=B.c8U(e,f,g,h),t=K.hS(f)
t=A.aV(t.toLowerCase()," ","_")
x=f===G.di?u.c:K.hS(f)
w=u.a
w=w==null?"":" \xb7 "+w
A.bv(d,new B.Wp(u,v),A.a([A.O(v,!1,v,v,v,v,v,"Close",new B.bNS(d),C.C,C.ae),A.O(v,!1,v,v,v,M.fb,v,"Download .xlsx",new B.bNT(d,u,"network_report_"+t+".xlsx"),C.C,C.hD)],y.p),x+" Network Report"+w+" \u2014 Excel Preview",C.bD,y.z)},
bFt(d){var x=0,w=A.u(y.H),v,u,t
var $async$bFt=A.p(function(e,f){if(e===1)return A.q(f,w)
for(;;)switch(x){case 0:t=D.Ni(null)
t.xb(O.a5R(new B.bFu(d,new B.bFv()),null,E.lR))
x=2
return A.h(t.i0(0),$async$bFt)
case 2:v=f
u=K.hS(d.b)
P.w5("network_report_"+A.aV(u.toLowerCase()," ","_")+".pdf",v,"application/pdf")
return A.r(null,w)}})
return A.t($async$bFt,w)},
cqZ(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="Network Report",g={},f=H.axH(new A.Aj().bF("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")),e=f.NL()
e.toString
f.Y_(e,h)
f.qp(h)
x=f.x.h(0,h)
x.ly(0,30)
x.ly(1,18)
x.ly(2,16)
x.ly(3,12)
x.ly(4,18)
x.ly(5,14)
g.a=0
w=new B.bFq(x)
v=new B.bFs(g,x,w)
u=new B.bFr(g,w)
t=new B.bFp(g)
e=d.b
s=K.hS(e)
r=d.a
r=r==null?"":" \xb7 "+r
v.$3$bold$fontSize(s+" Network Report"+r,!0,16)
r=d.d
v.$3$bold$fontSize(""+r.length+" stores \xb7 Network",!1,10)
t.$0()
s=$.ce2()
v.$3$bold$color("SUMMARY",!0,s)
u.$2("Date",d.c)
u.$2("Active Stores",""+r.length)
u.$2("Network Sales",A.K(d.gYt()))
u.$2("Total Bills",""+d.gYl())
u.$2("Pending Stock Requests",""+d.gYs())
u.$2("Low/Out-of-Stock Items",""+d.gYq())
t.$0()
v.$3$bold$color("STORE PERFORMANCE ("+r.length+")",!0,s)
for(q=0;q<6;++q){p=w.$2(q,g.a)
s=F.aKn[q]
o=p.c
n=p.f
o.or(new H.j2(p.e,n),new H.h0(new H.ia(s,i,i)))
s=H.pw($.ce5(),!0,i,i,!1,!1,I.uq,i,i,i,I.eJ,!1,i,I.ei,i,0,i,i,I.d2,I.fB)
o.a.a=!0
p.a=s}++g.a
if(r.length===0)v.$3$bold$fontSize("No stores in the network yet.",!1,10)
else for(m=0;m<r.length;++m){l=r[m]
s=l.a
k=[s.gb5(s)+" \xb7 "+s.gcq(s),s.gem(s),A.K(l.b),""+l.c,""+l.d,""+l.e]
for(s=(m&1)===0,q=0;q<6;++q){p=w.$2(q,g.a)
o=k[q]
n=p.c
j=p.f
n.or(new H.j2(p.e,j),new H.h0(new H.ia(o,i,i)))
o=s?$.ce1():I.ed
j=$.ce3()
j=j.a
j=H.KT(H.w1(j)||j==="none"?j:I.cN.gic())
j=H.pw(o,!1,new H.Al(I.mH,j),i,!1,!1,I.cN,i,i,i,I.eJ,!1,i,I.ei,i,0,i,i,I.d2,I.fB)
n.a.a=!0
p.a=j}++g.a}s=f.dx
s===$&&A.b()
s=new H.Re(f,A.B(y.N,y.c),A.a([],y.R),s).Qt()
s.toString
e=K.hS(e)
P.w5("network_report_"+A.aV(e.toLowerCase()," ","_")+".xlsx",new Uint8Array(A.fi(s)),"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")},
bNU:function bNU(d){this.a=d},
bNV:function bNV(d,e,f){this.a=d
this.b=e
this.c=f},
bNS:function bNS(d){this.a=d},
bNT:function bNT(d,e,f){this.a=d
this.b=e
this.c=f},
Wp:function Wp(d,e){this.c=d
this.a=e},
bFv:function bFv(){},
bFu:function bFu(d,e){this.a=d
this.b=e},
bFq:function bFq(d){this.a=d},
bFs:function bFs(d,e,f){this.a=d
this.b=e
this.c=f},
bFr:function bFr(d,e){this.a=d
this.b=e},
bFp:function bFp(d){this.a=d}},F,S,T,X,K,G,N,Y,D,E,O,U,P
J=c[1]
A=c[0]
C=c[2]
R=c[74]
Q=c[205]
H=c[76]
I=c[236]
L=c[111]
M=c[189]
V=c[98]
W=c[206]
B=a.updateHolder(c[25],B)
F=c[234]
S=c[126]
T=c[162]
X=c[116]
K=c[66]
G=c[235]
N=c[220]
Y=c[97]
D=c[89]
E=c[185]
O=c[83]
U=c[186]
P=c[91]
B.a1p.prototype={
gYr(){return C.e.bj(this.e,0,new B.at8())},
gYn(){var x=this.r
return x==null?C.e.bj(this.e,0,new B.at5()):x},
gYm(){var x=this.w
return x==null?C.e.bj(this.e,0,new B.at4()):x},
gYp(){return C.e.bj(this.e,0,new B.at7())},
gYo(){return C.e.bj(this.e,0,new B.at6())},
gYu(){return C.e.bj(this.e,0,new B.at9())},
gXx(){var x=this.e
return new A.ar(x,new B.at3(),A.ak(x).i("ar<1>")).gu(0)},
gUx(){var x=this.e
return new A.ar(x,new B.at2(),A.ak(x).i("ar<1>")).gu(0)},
gl4(){var x=J.A2(this.f)
x=x.cz(x,new B.at0()).aF(0)
C.e.dJ(x,new B.at1())
return x}}
B.Uk.prototype={
H(d){var x,w,v,u,t,s,r,q,p=null,o=this.c,n=o.c,m=o.d,l=A.e(n+" \xb7 "+m,p,p,p,p,p,A.k($.d?C.G:C.F,p,p,p,13,C.n).aA(12.5),p,p),k=$.d,j=k?C.au:C.ax,i=A.aW(k?C.W:C.Y,C.K,1),h=A.as(14),g=A.e("SUMMARY",p,p,p,p,p,A.k(k?C.G:C.F,p,p,p,12,C.am),p,p),f=o.e
m=A.a([new A.W("Date",o.b,!1),new A.W("Cashier",n,!1),new A.W("Store",m,!1),new A.W("Registers Opened",""+f.length,!1),new A.W("Currently Open",""+o.gXx(),!1),new A.W("Closed",""+o.gUx(),!1),new A.W("Total Opening Float",A.K(o.gYr()),!1),new A.W("Total Cash Sales",A.K(o.gYn()),!1),new A.W("Total Cash Refunds",A.K(o.gYm()),!1),new A.W("Total Expected in Drawer",A.K(o.gYp()),!1),new A.W("Total Counted",A.K(o.gYo()),!1),new A.W("Total Variance",A.K(o.gYu()),!1)],y.o)
n=A.e("DENOMINATION FINAL COUNT",p,p,p,p,p,A.k($.d?C.G:C.F,p,p,p,12,C.am),p,p)
if(o.gl4().length===0)k=A.e("No cash denominations counted yet.",p,p,p,p,p,A.k($.d?C.X:C.T,p,1.5,p,13.5,C.n),p,p)
else{k=A.a([],y.p)
for(x=o.gl4(),w=x.length,v=0;v<x.length;x.length===w||(0,A.y)(x),++v){u=x[v]
t=$.d
s=t?C.ap:C.J
r=new A.aJ(t?C.W:C.Y,1,C.K,-1)
q=new A.bi(6,6)
t=t?C.v:C.t
k.push(A.S(p,A.e("\u20b9"+u.a+" \xd7 "+u.b,p,p,p,p,p,new A.z(!0,t,p,"Inter",p,p,11.8,C.H,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),C.z,p,p,new A.Z(s,p,new A.bL(r,r,r,r),new A.di(q,q,q,q),p,p,C.E),p,p,p,p,Q.tS,p,p,p))}k=A.cr(C.aK,k,C.b6,8,8)}x=y.p
h=A.S(p,A.I(A.a([g,C.aU,new A.dW(m,2,p),C.aw,n,C.b3,k],x),C.A,p,C.o,C.L),C.z,p,p,new A.Z(j,p,i,h,p,p,C.E),p,p,p,p,C.ds,p,p,1/0)
f=f.length
return A.I(A.a([l,C.aw,h,T.cl,A.e("REGISTERS ("+f+")",p,p,p,p,p,A.k($.d?C.G:C.F,p,p,p,12,C.am),p,p),C.b3,this.aIo(o)],x),C.A,p,C.o,C.L)},
aIo(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.e
if(i.length===0){i=$.d
x=A.aW(i?C.W:C.Y,C.K,1)
w=A.as(8)
return A.S(C.ak,A.e("No registers in this period.",j,j,j,j,j,A.k(i?C.X:C.T,j,1.5,j,13.5,C.n),j,j),C.z,j,j,new A.Z(j,j,x,w,j,j,C.E),j,j,j,j,Q.nv,j,j,j)}x=A.aW($.d?C.W:C.Y,C.K,1)
w=A.as(8)
v=A.B(y.S,y.w)
for(u=0;u<9;++u)v.l(0,u,M.hI)
t=y.p
s=A.a([],t)
for(u=0;u<9;++u){r=F.b_E[u]
q=$.d?C.X:C.T
q=new A.z(!0,q,j,"Inter",j,j,12,C.H,j,0.3,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j).ai(C.J)
s.push(new A.a5(F.ny,A.e(r,j,j,j,j,j,q,u>=3&&u<=7?C.bW:C.cz,j),j))}s=A.a([new L.hU(M.mL,s)],y.T)
for(r=y.s,q=y.M,u=0;u<i.length;++u){if((u&1)===0)p=$.d?C.ap:C.J
else p=$.d?C.au:C.ax
o=A.a([],t)
for(n=i[u],n=new A.xu(A.a([n.a,n.c,n.y,A.K(n.d),A.K(i[u].e),A.K(i[u].r),A.K(i[u].w),A.K(i[u].x),i[u].Q],r),q),n=n.gfJ(n),n=n.gW(n);n.p();){m=n.gB(n)
l=m.b
k=$.d?C.v:C.t
m=m.a
m=m>=3&&m<=7?C.bW:C.cz
o.push(new A.a5(F.ny,A.e(l,j,j,j,j,j,new A.z(!0,k,j,"Inter",j,j,13.5,C.n,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),m,j),j))}s.push(new L.hU(new A.Z(p,j,j,j,j,j,C.E),o))}return A.S(j,L.St(s,v,M.mc),C.bY,j,j,new A.Z(j,j,x,w,j,j,C.E),j,j,j,j,j,j,j,j)}}
B.yh.prototype={
V(){return new B.akf()}}
B.akf.prototype={
ak(){this.av()
$.az.rx$.push(new B.btA(this))},
H(d){var x,w,v=y.p,u=A.a([],v)
for(x=0;x<3;++x){w=F.aUo[x]
u.push(new B.ajM(w,new B.bty(this,d,w),null))}return A.I(A.a([F.Vw,Y.n5(4,u,!0)],v),C.A,null,C.o,C.u)},
aFB(d,e){var x=null,w=new A.cz(x,y.J)
A.bv(d,new B.Vs(e,w),A.a([A.O(x,!1,x,x,x,x,x,"Cancel",new B.btw(d),C.C,C.al),A.O(x,!1,x,x,x,F.Vg,x,"Preview & download",new B.btx(this,w,d,e),C.C,C.a8)],y.p),e.c,C.aB,y.z)},
aJl(d,e,f,g,h,i,j){var x=this,w=f===G.di?g:null
switch(e.a){case 0:if(h)B.cwh(d,x.gO(),f,w,i)
else B.cwg(d,x.gO(),f,w,i)
break
case 1:if(h)K.L9(d,x.gO(),f,j,w)
else K.L8(d,x.gO(),f,j,w)
break
case 2:if(h)B.bNB(d,x.gO(),f,j,w)
else B.bNy(d,x.gO(),f,j,w)
break}}}
B.Km.prototype={
R(){return"_ReportType."+this.b},
gaV5(){switch(this.a){case 0:var x=C.a7
break
case 1:x=C.aN
break
case 2:x=C.bZ
break
default:x=null}return x},
gaPo(){switch(this.a){case 0:var x=$.d?C.b5:C.b9
break
case 1:x=$.d?S.bN:S.bT
break
case 2:x=$.d?C.cd:C.ch
break
default:x=null}return x}}
B.ajM.prototype={
H(d){var x=null,w=this.c,v=w.gaPo(),u=A.as(10)
u=A.S(C.ak,A.bC(w.e,w.gaV5(),22),C.z,x,x,new A.Z(v,x,x,u,x,x,C.E),x,46,x,x,x,x,x,46)
v=A.e(w.c,x,x,x,x,x,A.k(x,x,x,-0.1,16,C.H),x,x)
w=A.e(w.d,x,x,x,x,x,A.k($.d?C.G:C.F,x,x,x,13,C.n).aRS(13.5,1.5),x,x)
return V.h3(A.I(A.a([u,C.aT,v,C.aJ,w,C.hw,C.aT,A.O(x,!1,x,x,x,A.bC("bars",$.d?C.v:C.t,16),x,"Generate",this.d,C.C,C.ae)],y.p),C.A,x,C.o,C.u),!0)}}
B.Vs.prototype={
V(){return new B.Vt(G.jV,C.cP)}}
B.Vt.prototype={
b4c(){var x,w=this
if(w.w===G.di&&w.x==null)return"Pick a start and end date first"
x=w.a.d
if(x!==F.y_&&w.z==null)return x===F.rd?"No cashier in this store yet":"No store manager in this store yet"
return null},
H(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l={},k=n.gO(),j=k.U($.Ex(),y.U),i=y.N,h=k.U($.pi(),i),g=k.U($.cF(),y.B)
l.a=null
if(h!=="All Stores")for(k=J.a3(g);k.p();){x=k.gB(k)
if(x.gb5(x)+" \u2014 "+x.gem(x)===h||x.gb5(x)===h||x.gaj(x)===h){l.a=x
break}}k=l.a
n.Q=k==null?m:k.gaj(k)
if(l.a==null)w=j
else{k=J.b9(j,new B.bbl(l))
w=A.T(k,k.$ti.i("E.E"))}k=n.a.d
v=k===F.y_
u=k===F.rd?C.d3:C.cr
if(v)k=C.cP
else{k=J.b9(w,new B.bbm(u))
x=k.$ti.i("cP<1,c>")
x=A.ei(new A.cP(k,new B.bbn(),x),x.i("E.E"))
k=A.T(x,A.w(x).c)
C.e.fw(k)}n.as=k
x=!v
if(x){t=n.z
k=t==null||!C.e.q(k,t)}else k=!1
if(k){k=n.as
n.z=k.length===0?m:C.e.gL(k)}k=A.a(["All Stores"],y.s)
C.e.A(k,J.ba(g,new B.bbr(),i))
s=C.e.q(k,h)?h:"All Stores"
t=n.x
r=t==null?"Pick dates":L.dE(C.e.gL(t.a.ju().split("T")))+" \u2013 "+L.dE(C.e.gL(n.x.b.ju().split("T")))
t=n.a.d
q=t===F.rd?"Cashier":"Store manager"
t=A.e(t.d,m,m,m,m,m,A.k($.d?C.G:C.F,m,m,m,13,C.n).aA(13),m,m)
p=y.p
k=A.a([t,C.dO,new A.a5(C.eG,A.e("Store",m,m,m,m,m,A.k($.d?C.G:C.F,m,m,m,12,C.am),m,m),m),A.j1(!0,!0,!0,!1,k,m,new B.bbs(),m,new B.bbt(n,g),C.bx,m,m,s,i)],p)
if(x){x=A.a([C.aT,new A.a5(C.eG,A.e(q,m,m,m,m,m,A.k($.d?C.G:C.F,m,m,m,12,C.am),m,m),m)],p)
t=n.as
if(t.length===0)x.push(A.e("No "+q.toLowerCase()+" accounts in this store yet",m,m,m,m,m,A.k($.d?C.G:C.F,m,m,m,13,C.n).aA(13),m,m))
else{o=n.z
o.toString
x.push(A.j1(!0,!0,!0,!1,t,m,new B.bbu(),m,new B.bbv(n),C.bx,m,m,o,i))}C.e.A(k,x)}k.push(C.aT)
k.push(new A.a5(C.eG,A.e("Period",m,m,m,m,m,A.k($.d?C.G:C.F,m,m,m,12,C.am),m,m),m))
i=L.dE(A.f7())
x=n.w
k.push(A.cr(C.aK,A.a([new B.t8("Today",i,x===G.jV,new B.bbw(n),m,m),new B.t8("Weekly","Last 7 days",x===G.wj,new B.bbx(n),m,m),new B.t8("Monthly","Last 30 days",x===G.wk,new B.bby(n),m,m),new B.t8("Custom",r,x===G.di,new B.bbo(n,d),m,m)],p),C.b6,8,8))
k.push(C.aT)
k.push(new A.a5(C.eG,A.e("Format",m,m,m,m,m,A.k($.d?C.G:C.F,m,m,m,12,C.am),m,m),m))
i=n.y
k.push(A.cr(C.aK,A.a([new B.t8("PDF",m,i,new B.bbp(n),F.UV,m),new B.t8("Excel",m,!i,new B.bbq(n),F.V1,m)],p),C.b6,8,8))
return A.I(k,C.A,m,C.o,C.u)}}
B.t8.prototype={
V(){return new B.ada()}}
B.ada.prototype={
H(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.e
m=m.f
if(l){x=$.d
w=x?C.b5:C.b9
v=w
w=x
x=v}else if(o.d){x=$.d
w=x?C.hP:C.kJ
v=w
w=x
x=v}else{x=$.d
w=x?C.ap:C.J
v=w
w=x
x=v}if(l)w=C.a7
else w=w?C.W:C.Y
w=A.aW(w,C.K,1)
u=A.as(10)
t=y.p
s=A.a([],t)
r=o.a.r
if(r!=null)C.e.A(s,A.a([r,C.aO],t))
r=o.a.c
q=A.k(n,n,1.45,n,14,C.n)
if(l)p=C.a7
else p=$.d?C.v:C.t
s.push(A.e(r,n,n,n,n,n,q.fh(p,13.5,C.H),n,n))
r=o.a.d
if(r!=null)C.e.A(s,A.a([C.cI,A.e(r,n,n,n,n,n,A.k($.d?C.G:C.F,n,n,n,13,C.n).aA(12.5),n,n)],t))
return A.bI(A.bz(n,A.S(n,A.V(s,C.B,C.o,C.L),C.z,n,F.Xn,new A.Z(x,n,w,u,n,n,C.E),n,n,n,n,C.Aw,n,n,n),C.ag,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,m,n,n,n),C.an,n,new B.b2p(o),new B.b2q(o),n)}}
B.yF.prototype={}
B.aG_.prototype={
gYt(){return C.e.bj(this.d,0,new B.aG3())},
gYl(){return C.e.bj(this.d,0,new B.aG0())},
gYs(){return C.e.bj(this.d,0,new B.aG2())},
gYq(){return C.e.bj(this.d,0,new B.aG1())+this.e}}
B.Wp.prototype={
H(d){var x,w,v,u,t,s=null,r=this.c,q=r.d,p=q.length
p=A.e(""+p+" stores \xb7 Network",s,s,s,s,s,A.k($.d?C.G:C.F,s,s,s,13,C.n).aA(12.5),s,s)
x=$.d
w=x?C.au:C.ax
v=A.aW(x?C.W:C.Y,C.K,1)
u=A.as(14)
t=y.p
u=A.S(s,A.I(A.a([A.e("SUMMARY",s,s,s,s,s,A.k(x?C.G:C.F,s,s,s,12,C.am),s,s),C.aU,new A.dW(A.a([new A.W("Date",r.c,!1),new A.W("Active Stores",""+q.length,!1),new A.W("Network Sales",A.K(r.gYt()),!1),new A.W("Total Bills",""+r.gYl(),!1),new A.W("Pending Stock Requests",""+r.gYs(),!1),new A.W("Low/Out-of-Stock Items",""+r.gYq(),!1)],y.o),2,s)],t),C.A,s,C.o,C.L),C.z,s,s,new A.Z(w,s,v,u,s,s,C.E),s,s,s,s,C.ds,s,s,1/0)
q=q.length
return A.I(A.a([p,C.aw,u,T.cl,A.e("STORE PERFORMANCE ("+q+")",s,s,s,s,s,A.k($.d?C.G:C.F,s,s,s,12,C.am),s,s),C.b3,this.aLs(r)],t),C.A,s,C.o,C.L)},
aLs(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d
if(h.length===0){h=$.d
x=A.aW(h?C.W:C.Y,C.K,1)
w=A.as(8)
return A.S(C.ak,A.e("No stores in the network yet.",i,i,i,i,i,A.k(h?C.X:C.T,i,1.5,i,13.5,C.n),i,i),C.z,i,i,new A.Z(i,i,x,w,i,i,C.E),i,i,i,i,Q.nv,i,i,i)}x=A.aW($.d?C.W:C.Y,C.K,1)
w=A.as(8)
v=A.B(y.S,y.w)
for(u=0;u<6;++u)v.l(0,u,M.hI)
t=y.p
s=A.a([],t)
for(u=0;u<6;++u){r=F.aWj[u]
q=$.d?C.X:C.T
q=new A.z(!0,q,i,"Inter",i,i,12,C.H,i,0.3,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i).ai(C.J)
s.push(new A.a5(F.ny,A.e(r,i,i,i,i,i,q,u>=2?C.bW:C.cz,i),i))}s=A.a([new L.hU(M.mL,s)],y.T)
for(r=y.s,q=y.M,u=0;u<h.length;++u){if((u&1)===0)p=$.d?C.ap:C.J
else p=$.d?C.au:C.ax
o=A.a([],t)
for(n=h[u].a,n=n.gb5(n),m=h[u].a,m=m.gcq(m),l=h[u].a,l=l.gem(l),k=A.K(h[u].b),j=h[u],j=new A.xu(A.a([n+" \xb7 "+m,l,k,""+j.c,""+j.d,""+j.e],r),q),j=j.gfJ(j),j=j.gW(j);j.p();){n=j.gB(j)
m=n.b
l=$.d?C.v:C.t
n=n.a>=2?C.bW:C.cz
o.push(new A.a5(F.ny,A.e(m,i,i,C.a2,i,i,new A.z(!0,l,i,"Inter",i,i,13.5,C.n,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),n,i),i))}s.push(new L.hU(new A.Z(p,i,i,i,i,i,C.E),o))}return A.S(i,L.St(s,v,M.mc),C.bY,i,i,new A.Z(i,i,x,w,i,i,C.E),i,i,i,i,i,i,i,i)}}
var z=a.updateTypes(["v(v,yF)","cV(c,c)","i<cV>(ko)","aQ(aQ,yF)","fQ(v,v)","~(c{bold!x,color:a2?,fontSize:v})"])
B.at8.prototype={
$2(d,e){return d+e.d},
$S:104}
B.at5.prototype={
$2(d,e){return d+e.e},
$S:104}
B.at4.prototype={
$2(d,e){return d+e.f},
$S:104}
B.at7.prototype={
$2(d,e){return d+e.r},
$S:104}
B.at6.prototype={
$2(d,e){return d+e.w},
$S:104}
B.at9.prototype={
$2(d,e){return d+e.x},
$S:104}
B.at3.prototype={
$1(d){return d.Q==="Open"},
$S:23}
B.at2.prototype={
$1(d){return d.Q!=="Open"},
$S:23}
B.at0.prototype={
$1(d){return d.b>0},
$S:391}
B.at1.prototype={
$2(d,e){return C.r.bo(e.a,d.a)},
$S:392}
B.bLd.prototype={
$1(d){return d.y===this.a},
$S:23}
B.bLg.prototype={
$1(d){var x,w,v
try{x=A.lt(d)
w=C.r.bl(this.a.dR(x).a,864e8)
return w}catch(v){return null}},
$S:237}
B.bLh.prototype={
$1(d){var x,w,v,u,t,s=this.a
if(s==null)return!1
try{x=A.lt(d)
u=s.a
w=A.cK(A.bl(u),A.bh(u),A.cT(u),0,0,0,0)
s=s.b
v=A.cK(A.bl(s),A.bh(s),A.cT(s),0,0,0,0)
s=!x.ma(w)&&!x.o5(v)
return s}catch(t){return!1}},
$S:8}
B.bLi.prototype={
$1(d){var x,w,v=this.a
if(v===G.di)return this.b.$1(d.as)
if(d.Q==="Open"||d.as===A.f7())return!0
x=this.c.$1(d.as)
if(x==null)return!1
w=!1
switch(v.a){case 0:v=w
break
case 1:v=x>0&&x<=7
break
case 2:v=x>0&&x<=30
break
case 3:v=w
break
default:v=null}return v},
$S:23}
B.bLe.prototype={
$1(d){return d.gaj(d)===C.e.gL(this.a).b},
$S:15}
B.bLf.prototype={
$1(d){return d.y===this.a},
$S:23}
B.bNC.prototype={
$0(){return A.ao(this.a,!0).S()},
$S:0}
B.bND.prototype={
$0(){return A.J(this.a,"Sent to Microsoft Print to PDF",null)},
$S:0}
B.bNE.prototype={
$0(){var x=0,w=A.u(y.H),v=this,u
var $async$$0=A.p(function(d,e){if(d===1)return A.q(e,w)
for(;;)switch(x){case 0:u=v.a
A.ao(u,!0).S()
x=2
return A.h(B.bMb(v.b),$async$$0)
case 2:if(u.e!=null)A.J(u,"Downloaded "+v.c,null)
return A.r(null,w)}})
return A.t($async$$0,w)},
$S:2}
B.bNz.prototype={
$0(){return A.ao(this.a,!0).S()},
$S:0}
B.bNA.prototype={
$0(){var x=this.a
A.ao(x,!0).S()
B.cuT(this.b)
A.J(x,"Downloaded "+this.c,null)},
$S:0}
B.bMd.prototype={
$2(d,e){var x=null
return new D.l2(G.tH,D.kC(A.a([D.cj(d,D.fq(x,N.fU,x,x,x,x,x,x,x,E.bu,x,x,9,x,x,x,!0,x,x,x,x),x,x),D.cj(e,D.fq(x,x,x,x,x,x,x,x,x,E.bu,x,x,10,x,E.bG,x,!0,x,x,x,x),x,x)],y.n),E.eE,E.jG))},
$S:z+1}
B.bMc.prototype={
$1(d){var x,w,v,u,t,s,r=null,q="\u20b9",p="Rs ",o=this.a,n=o.c,m=o.d,l=this.b,k=o.e,j=y.n
l=A.a([D.cj(K.hS(o.a)+" Cash Ops Report",D.fq(r,r,r,r,r,r,r,r,r,E.bu,r,r,18,r,E.bG,r,!0,r,r,r,r),r,r),new D.cU(r,2,r),D.cj(n+" \xb7 "+m,G.xm,r,r),new D.cU(r,14,r),D.cj("SUMMARY",D.fq(r,N.hr,r,r,r,r,r,r,r,E.bu,r,r,10,r,E.bG,r,!0,r,r,r,r),r,r),new D.cU(r,8,r),D.kC(A.a([new D.fu(1,E.cE,D.iJ(A.a([l.$2("Date",o.b),l.$2("Cashier",n),l.$2("Store",m),l.$2("Registers Opened",""+k.length),l.$2("Currently Open",""+o.gXx()),l.$2("Closed",""+o.gUx())],j),E.c6)),new D.cU(24,r,r),new D.fu(1,E.cE,D.iJ(A.a([l.$2("Total Opening Float",C.h.cB(A.K(o.gYr()),q,p)),l.$2("Total Cash Sales",C.h.cB(A.K(o.gYn()),q,p)),l.$2("Total Cash Refunds",C.h.cB(A.K(o.gYm()),q,p)),l.$2("Total Expected in Drawer",C.h.cB(A.K(o.gYp()),q,p)),l.$2("Total Counted",C.h.cB(A.K(o.gYo()),q,p)),l.$2("Total Variance",C.h.cB(A.K(o.gYu()),q,p))],j),E.c6))],j),E.c6,E.dY)],j)
if(o.gl4().length!==0){n=D.cj("DENOMINATION FINAL COUNT",D.fq(r,N.fU,r,r,r,r,r,r,r,E.bu,r,r,8.5,r,E.bG,r,!0,r,r,r,r),r,r)
m=A.a([],j)
for(o=o.gl4(),x=o.length,w=0;w<o.length;o.length===x||(0,A.y)(o),++w){v=o[w]
m.push(D.cj("Rs "+v.a+" x "+v.b,N.k4,r,r))}C.e.A(l,A.a([new D.cU(r,6,r),n,new D.cU(r,4,r),K.c5r(m,4,8)],j))}l.push(new D.cU(r,14,r))
l.push(D.cj("REGISTERS ("+k.length+")",D.fq(r,N.hr,r,r,r,r,r,r,r,E.bu,r,r,10,r,E.bG,r,!0,r,r,r,r),r,r))
l.push(new D.cU(r,6,r))
if(k.length===0)l.push(D.cj("No registers in this period.",G.xl,r,r))
else{o=A.a([],y.t)
for(n=k.length,w=0;w<k.length;k.length===n||(0,A.y)(k),++w){u=k[w]
m=A.K(u.d)
m=A.kL(m,q,p,0)
j=A.K(u.e)
j=A.kL(j,q,p,0)
x=A.K(u.r)
x=A.kL(x,q,p,0)
t=A.K(u.w)
t=A.kL(t,q,p,0)
s=A.K(u.x)
o.push([u.a,u.c,u.y,m,j,x,t,A.kL(s,q,p,0),u.Q])}n=D.fq(r,U.lQ,r,r,r,r,r,r,r,E.bu,r,r,8,r,E.bG,r,!0,r,r,r,r)
l.push(O.aah(R.aRu(G.wb,0.5),r,F.a4X,W.fA,r,o,r,G.rN,n,F.aXk))}return l},
$S:z+2}
B.bM9.prototype={
$1(d){var x
if(C.h.q(d,",")||C.h.q(d,'"'))x='"'+A.aV(d,'"','""')+'"'
else x=d
return x},
$S:6}
B.bMa.prototype={
$2(d,e){var x=this.a,w=this.b
w=A.j(w.$1(d))+","+A.j(w.$1(e))+"\n"
x.a+=w
return null},
$S:73}
B.bM8.prototype={
$1(d){return"\u20b9"+d.a+"\xd7"+d.b},
$S:394}
B.btA.prototype={
$1(d){return this.aji(d)},
aji(d){var x=0,w=A.u(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.p(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=s.a
l=m.gO()
k=l.m(0,$.ah(),y.q)
j=k==null?null:k.Q
i=j==null?"":j
if(J.Y(i)===0){x=1
break}u=4
o=$.cF()
x=7
return A.h(l.m(0,o.gK(),y.e).bf(i),$async$$1)
case 7:if(m.c==null){x=1
break}r=J.ba(l.m(0,o,y.B),new B.btz(),y.N).aF(0)
o=$.jU()
x=8
return A.h(l.m(0,o.gK(),y.Z).eg(i,r),$async$$1)
case 8:if(m.c==null){x=1
break}q=l.m(0,o,y.D)
x=9
return A.h(A.eF(A.a([l.m(0,$.hi().gK(),y.C).hn(i,r,q),l.m(0,$.iH().gK(),y.h).hn(i,r,q),l.m(0,$.mb().gK(),y.X).eg(i,r),l.m(0,$.Ln().gK(),y.r).eg(i,r),l.m(0,$.mc().gK(),y.V).bf(i),l.m(0,$.eL().gK(),y.K).cW(i)],y.O),y.H),$async$$1)
case 9:u=2
x=6
break
case 4:u=3
h=t.pop()
l=A.R(h)
if(l instanceof A.aB){p=l
m=m.c
if(m==null){x=1
break}A.J(m,p.a,null)}else throw h
x=6
break
case 3:x=2
break
case 6:case 1:return A.r(v,w)
case 2:return A.q(t.at(-1),w)}})
return A.t($async$$1,w)},
$S:28}
B.btz.prototype={
$1(d){return d.gaj(d)},
$S:16}
B.bty.prototype={
$0(){return this.a.aFB(this.b,this.c)},
$S:0}
B.btw.prototype={
$0(){return A.ao(this.a,!0).S()},
$S:0}
B.btx.prototype={
$0(){var x,w,v=this,u=v.b.ga6()
if(u==null)return
x=u.b4c()
if(x!=null){A.J(v.c,x,null)
return}w=v.c
A.ao(w,!0).S()
v.a.aJl(w,v.d,u.w,u.x,u.y,u.Q,u.z)},
$S:0}
B.bbl.prototype={
$1(d){var x=d.d,w=this.a,v=w.a,u=!0
if(!C.h.q(x,v.gb5(v))){v=w.a
if(!C.h.q(x,v.gaj(v))){w=w.a
w=C.h.q(x,w.gem(w))
x=w}else x=u}else x=u
return x},
$S:141}
B.bbm.prototype={
$1(d){return d.b===this.a},
$S:141}
B.bbn.prototype={
$1(d){return d.a},
$S:399}
B.bbr.prototype={
$1(d){return d.gb5(d)+" \u2014 "+d.gem(d)},
$S:16}
B.bbs.prototype={
$1(d){return d==="All Stores"?"All stores":d},
$S:6}
B.bbt.prototype={
$1(d){var x,w,v=this.a.gO()
v.m(0,$.pi().gK(),y.u).hw(0,d)
if(d!=="All Stores"){x=this.b
w=J.me(x,new B.bbj(d),new B.bbk(x))
v.m(0,$.j_().gK(),y.v).hw(0,w)}},
$S:1}
B.bbj.prototype={
$1(d){return d.gb5(d)+" \u2014 "+d.gem(d)===this.a},
$S:15}
B.bbk.prototype={
$0(){return J.fE(this.a)},
$S:51}
B.bbu.prototype={
$1(d){return d},
$S:6}
B.bbv.prototype={
$1(d){var x=this.a
return x.t(new B.bbi(x,d))},
$S:1}
B.bbi.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.bbw.prototype={
$0(){var x=this.a
return x.t(new B.bbh(x))},
$S:0}
B.bbh.prototype={
$0(){return this.a.w=G.jV},
$S:0}
B.bbx.prototype={
$0(){var x=this.a
return x.t(new B.bbg(x))},
$S:0}
B.bbg.prototype={
$0(){return this.a.w=G.wj},
$S:0}
B.bby.prototype={
$0(){var x=this.a
return x.t(new B.bbf(x))},
$S:0}
B.bbf.prototype={
$0(){return this.a.w=G.wk},
$S:0}
B.bbo.prototype={
$0(){var x=0,w=A.u(y.H),v,u=this,t,s
var $async$$0=A.p(function(d,e){if(d===1)return A.q(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.h(L.bZu(u.b,null,null,t.x,null),$async$$0)
case 3:s=e
if(s==null||t.c==null){x=1
break}t.t(new B.bbe(t,s))
case 1:return A.r(v,w)}})
return A.t($async$$0,w)},
$S:2}
B.bbe.prototype={
$0(){var x=this.a
x.x=this.b
x.w=G.di},
$S:0}
B.bbp.prototype={
$0(){var x=this.a
return x.t(new B.bbd(x))},
$S:0}
B.bbd.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bbq.prototype={
$0(){var x=this.a
return x.t(new B.bbc(x))},
$S:0}
B.bbc.prototype={
$0(){return this.a.y=!1},
$S:0}
B.b2p.prototype={
$1(d){var x=this.a
return x.t(new B.b2o(x))},
$S:19}
B.b2o.prototype={
$0(){return this.a.d=!0},
$S:0}
B.b2q.prototype={
$1(d){var x=this.a
return x.t(new B.b2n(x))},
$S:18}
B.b2n.prototype={
$0(){return this.a.d=!1},
$S:0}
B.aG3.prototype={
$2(d,e){return d+e.b},
$S:z+3}
B.aG0.prototype={
$2(d,e){return d+e.c},
$S:z+0}
B.aG2.prototype={
$2(d,e){return d+e.d},
$S:z+0}
B.aG1.prototype={
$2(d,e){return d+e.e},
$S:z+0}
B.bLC.prototype={
$1(d){return d.gaj(d)===this.a},
$S:15}
B.bLJ.prototype={
$1(d){var x,w,v
try{x=A.lt(d)
w=C.r.bl(this.a.dR(x).a,864e8)
return w}catch(v){return null}},
$S:237}
B.bLK.prototype={
$1(d){var x,w,v,u,t,s=this.a
if(s==null)return!1
try{x=A.lt(d)
u=s.a
w=A.cK(A.bl(u),A.bh(u),A.cT(u),0,0,0,0)
s=s.b
v=A.cK(A.bl(s),A.bh(s),A.cT(s),0,0,0,0)
s=!x.ma(w)&&!x.o5(v)
return s}catch(t){return!1}},
$S:8}
B.bLL.prototype={
$1(d){var x,w,v
if(d.gaK(d).toLowerCase()==="voided")return!1
x=this.a
if(x===G.di)return this.b.$1(C.e.gL(d.gdY(d).split(" ")))
if(C.h.q(d.gdY(d),"now")||C.h.b8(d.gdY(d),A.f7()))return!0
w=this.c.$1(C.e.gL(d.gdY(d).split(" ")))
if(w==null)return!1
v=!1
switch(x.a){case 0:x=v
break
case 1:x=w>0&&w<=7
break
case 2:x=w>0&&w<=30
break
case 3:x=v
break
default:x=null}return x},
$S:39}
B.bLB.prototype={
$2(d,e){return d===e.gaj(e)||d===e.gb5(e)},
$S:1079}
B.bLD.prototype={
$1(d){return this.a.$2(d.gj3(d),this.b)&&this.c.$1(d)},
$S:39}
B.bLE.prototype={
$2(d,e){return d+e.gho()},
$S:56}
B.bLF.prototype={
$1(d){return this.a.$2(d.gj3(d),this.b)&&this.c.$1(d)},
$S:39}
B.bLG.prototype={
$1(d){return this.a.$2(d.c,this.b)&&d.y==="Pending Approval"},
$S:103}
B.bLH.prototype={
$1(d){return d.y.du(0,new B.bLA(this.a,this.b))&&d.gaK(0)!=="In Stock"},
$S:74}
B.bLA.prototype={
$1(d){return this.a.$2(d,this.b)},
$S:8}
B.bLI.prototype={
$1(d){var x=d.y
return x.ga3(x)&&d.gaK(0)!=="In Stock"},
$S:74}
B.bNU.prototype={
$0(){return A.ao(this.a,!0).S()},
$S:0}
B.bNV.prototype={
$0(){var x=0,w=A.u(y.H),v=this,u
var $async$$0=A.p(function(d,e){if(d===1)return A.q(e,w)
for(;;)switch(x){case 0:u=v.a
A.ao(u,!0).S()
x=2
return A.h(B.bFt(v.b),$async$$0)
case 2:if(u.e!=null)A.J(u,"Downloaded "+v.c,null)
return A.r(null,w)}})
return A.t($async$$0,w)},
$S:2}
B.bNS.prototype={
$0(){return A.ao(this.a,!0).S()},
$S:0}
B.bNT.prototype={
$0(){var x=this.a
A.ao(x,!0).S()
B.cqZ(this.b)
A.J(x,"Downloaded "+this.c,null)},
$S:0}
B.bFv.prototype={
$2(d,e){var x=null
return new D.l2(G.tH,D.kC(A.a([D.cj(d,D.fq(x,N.fU,x,x,x,x,x,x,x,E.bu,x,x,9,x,x,x,!0,x,x,x,x),x,x),D.cj(e,D.fq(x,x,x,x,x,x,x,x,x,E.bu,x,x,10,x,E.bG,x,!0,x,x,x,x),x,x)],y.n),E.eE,E.jG))},
$S:z+1}
B.bFu.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.a,o=K.hS(p.b),n=p.a
n=n==null?"":" \xb7 "+n
x=p.d
w=this.b
v=y.n
v=A.a([D.cj(o+" Network Report"+n,D.fq(q,q,q,q,q,q,q,q,q,E.bu,q,q,18,q,E.bG,q,!0,q,q,q,q),q,q),new D.cU(q,2,q),D.cj(""+x.length+" stores - Network",G.xm,q,q),new D.cU(q,14,q),D.cj("SUMMARY",D.fq(q,N.hr,q,q,q,q,q,q,q,E.bu,q,q,10,q,E.bG,q,!0,q,q,q,q),q,q),new D.cU(q,8,q),D.kC(A.a([new D.fu(1,E.cE,D.iJ(A.a([w.$2("Date",p.c),w.$2("Active Stores",""+x.length),w.$2("Total Bills",""+p.gYl())],v),E.c6)),new D.cU(24,q,q),new D.fu(1,E.cE,D.iJ(A.a([w.$2("Network Sales",C.h.cB(A.K(p.gYt()),"\u20b9","Rs ")),w.$2("Pending Stock Requests",""+p.gYs()),w.$2("Low/Out-of-Stock Items",""+p.gYq())],v),E.c6))],v),E.c6,E.dY),new D.cU(q,14,q),D.cj("STORE PERFORMANCE ("+x.length+")",D.fq(q,N.hr,q,q,q,q,q,q,q,E.bu,q,q,10,q,E.bG,q,!0,q,q,q,q),q,q),new D.cU(q,6,q)],v)
if(x.length===0)v.push(D.cj("No stores in the network yet.",G.xl,q,q))
else{p=A.a([],y.t)
for(o=x.length,u=0;u<x.length;x.length===o||(0,A.y)(x),++u){t=x[u]
n=t.a
w=n.gb5(n)
s=n.gcq(n)
n=n.gem(n)
r=A.K(t.b)
p.push([w+" - "+s,n,A.kL(r,"\u20b9","Rs ",0),""+t.c,""+t.d,""+t.e])}o=D.fq(q,U.lQ,q,q,q,q,q,q,q,E.bu,q,q,8.5,q,E.bG,q,!0,q,q,q,q)
v.push(O.aah(R.aRu(G.wb,0.5),q,G.AK,G.Tj,q,p,q,G.rN,o,F.aKo))}return v},
$S:z+2}
B.bFq.prototype={
$2(d,e){return this.a.ac1(new H.j2(e,d))},
$S:z+4}
B.bFs.prototype={
$4$bold$color$fontSize(d,e,f,g){var x,w,v=null,u=this.a,t=u.a
this.b.ag7(new H.j2(t,0),new H.j2(t,5))
x=this.c.$2(0,u.a)
t=x.c
w=x.f
t.or(new H.j2(x.e,w),new H.h0(new H.ia(d,v,v)))
w=H.pw(I.ed,e,v,v,!1,!1,f==null?I.cN:f,v,v,g,I.eJ,!1,v,I.ei,v,0,v,v,I.d2,I.fB)
t.a.a=!0
x.a=w;++u.a},
$2$bold(d,e){return this.$4$bold$color$fontSize(d,e,null,11)},
$3$bold$fontSize(d,e,f){return this.$4$bold$color$fontSize(d,e,null,f)},
$3$bold$color(d,e,f){return this.$4$bold$color$fontSize(d,e,f,11)},
$S:z+5}
B.bFr.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=v.$2(0,u.a),s=t.c,r=t.f
s.or(new H.j2(t.e,r),new H.h0(new H.ia(d,w,w)))
r=H.pw(I.ed,!0,w,w,!1,!1,I.cN,w,w,w,I.eJ,!1,w,I.ei,w,0,w,w,I.d2,I.fB)
s.a.a=!0
t.a=r
x=v.$2(1,u.a)
v=x.c
r=x.f
v.or(new H.j2(x.e,r),new H.h0(new H.ia(e,w,w)));++u.a},
$S:73}
B.bFp.prototype={
$0(){return this.a.a++},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.P,[B.a1p,B.yF,B.aG_])
x(A.cY,[B.at8,B.at5,B.at4,B.at7,B.at6,B.at9,B.at1,B.bMd,B.bMa,B.aG3,B.aG0,B.aG2,B.aG1,B.bLB,B.bLE,B.bFv,B.bFq,B.bFr])
x(A.bQ,[B.at3,B.at2,B.at0,B.bLd,B.bLg,B.bLh,B.bLi,B.bLe,B.bLf,B.bMc,B.bM9,B.bM8,B.btA,B.btz,B.bbl,B.bbm,B.bbn,B.bbr,B.bbs,B.bbt,B.bbj,B.bbu,B.bbv,B.b2p,B.b2q,B.bLC,B.bLJ,B.bLK,B.bLL,B.bLD,B.bLF,B.bLG,B.bLH,B.bLA,B.bLI,B.bFu,B.bFs])
x(A.cD,[B.bNC,B.bND,B.bNE,B.bNz,B.bNA,B.bty,B.btw,B.btx,B.bbk,B.bbi,B.bbw,B.bbh,B.bbx,B.bbg,B.bby,B.bbf,B.bbo,B.bbe,B.bbp,B.bbd,B.bbq,B.bbc,B.b2o,B.b2n,B.bNU,B.bNV,B.bNS,B.bNT,B.bFp])
x(A.au,[B.Uk,B.ajM,B.Wp])
x(A.dH,[B.yh,B.Vs])
x(A.dB,[B.akf,B.Vt])
w(B.Km,A.kh)
w(B.t8,A.Q)
w(B.ada,A.ag)})()
A.bP(b.typeUniverse,JSON.parse('{"Uk":{"au":[],"f":[]},"Vs":{"Q":[],"f":[]},"Vt":{"ag":["Vs"]},"t8":{"Q":[],"f":[]},"yh":{"Q":[],"f":[]},"akf":{"ag":["yh"]},"ajM":{"au":[],"f":[]},"ada":{"ag":["t8"]},"Wp":{"au":[],"f":[]}}'))
var y=(function rtii(){var x=A.G
return{c:x("jW"),_:x("a1p"),Z:x("kp"),R:x("l<tQ>"),O:x("l<an<~>>"),o:x("l<W>"),t:x("l<i<@>>"),x:x("l<bH>"),Y:x("l<yF>"),s:x("l<c>"),T:x("l<hU>"),p:x("l<f>"),n:x("l<cV>"),b:x("l<@>"),a:x("l<v>"),J:x("cz<Vt>"),M:x("xu<c>"),U:x("i<c_>"),d:x("i<dp>"),D:x("i<dq>"),y:x("i<bG>"),A:x("i<dw>"),B:x("i<bH>"),j:x("i<cp>"),W:x("aA<v,v>"),C:x("lO"),r:x("oM"),X:x("nJ"),h:x("mH"),v:x("jI<bH>"),u:x("jI<c>"),V:x("qg"),E:x("bH"),e:x("fC"),N:x("c"),w:x("qk"),K:x("m0"),z:x("@"),S:x("v"),q:x("c_?"),H:x("~")}})();(function constants(){var x=a.makeConstList
F.UV=new A.cM("file",16,C.aI,null)
F.V1=new A.cM("grid",16,C.aN,null)
F.Vg=new A.cM("download",16,C.J,null)
F.Vw=new X.dF("Reports","Network, cashier and store manager reports. Each has its own store, period and format filters, with PDF or Excel export.",C.aW,null)
F.Xn=new A.aE(0,1/0,38,1/0)
F.ny=new A.ad(10,9,10,9)
F.a4X=new D.jX(5,4,5,4)
F.aKn=x(["Store","City","Sales","Bills","Pending Requests","Low Stock"],y.s)
F.aKo=x(["Store","City","Sales","Bills","Pending Requests","Low Stock"],y.b)
F.y_=new B.Km("Network Report","Sales, bills, pending stock requests and low stock for every store or one store.","store",0,"network")
F.rd=new B.Km("Cashier Report","Bills, returns and exchanges for one cashier, with shift timings and tender totals.","users",1,"cashier")
F.blQ=new B.Km("Store Manager Report","Cash opening and closing summary for one store manager, with float and variance.","register",2,"manager")
F.aUo=x([F.y_,F.rd,F.blQ],A.G("l<Km>"))
F.aWj=x(["STORE","CITY","SALES","BILLS","PENDING REQUESTS","LOW STOCK"],y.s)
F.aXk=x(["Register","Counter","Opened By","Opening","Cash Sales","Expected","Counted","Variance","Status"],y.b)
F.b_E=x(["REGISTER","COUNTER","OPENED BY","OPENING","CASH SALES","EXPECTED","COUNTED","VARIANCE","STATUS"],y.s)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cF5","ce5",()=>K.wT("FF182234"))
x($,"cF0","ce2",()=>K.wT("FF1E3A8A"))
x($,"cEZ","ce1",()=>K.wT("FFF3F5FA"))
x($,"cF2","ce3",()=>K.wT("FFE6E9F2"))})()};
(a=>{a["uW73Xa6sfCNGKHmkYRE+TcxAOxs="]=a.current})($__dart_deferred_initializers__);