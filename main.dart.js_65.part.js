((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,K,N,O,G,H,L,M,P,C={
hS(d){var x
switch(d.a){case 0:x="Daily"
break
case 1:x="Weekly"
break
case 2:x="Monthly"
break
case 3:x="Custom Range"
break
default:x=null}return x},
qI(d,e){var x
if(d==null||d.length===0)return"Walk-in Customer"
x=e.h(0,d)
return x==null?d:x},
bOL(d,e){if(J.df(d.ghG(d)))return"\u2014"
return J.ba(d.ghG(d),new C.bOM(e),y.N).aB(0,", ")},
c84(d){var x,w,v,u,t,s=A.b_("^(\\d{1,2}):(\\d{2})\\s*([AaPp][Mm])$",!0,!1,!1).fq(B.h.G(d))
if(s==null)return null
x=s.b
w=x[1]
w.toString
v=A.cX(w,null)
w=x[2]
w.toString
u=A.cX(w,null)
t=x[3].toUpperCase()==="PM"
if(t&&v!==12)v+=12
return(!t&&v===12?0:v)*60+u},
cto(d){var x,w,v=d.ay==="Open",u=v?"ongoing":d.w,t=d.r,s=C.c84(t),r=new A.bp(Date.now(),0,!1),q=v?A.fA(r)*60+A.l4(r):C.c84(d.w)
if(s==null||q==null)return t+" - "+u
x=q-s
if(x<0)x+=1440
w=B.r.bl(x,60)
v=""+B.r.aH(x,60)
return(w>0?""+w+"h "+v+"m":v+"m")+" ("+t+" - "+u+")"},
apu(b6,b7,b8,b9){var x=0,w=A.u(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$apu=A.p(function(c0,c1){if(c0===1)return A.q(c1,w)
for(;;)switch(x){case 0:a7=b6.m(0,$.ah(),y.v)
a8=b6.m(0,$.j_(),y.U)
a9=b6.m(0,$.mb(),y.u)
b0=b6.m(0,$.Ln(),y.e)
b1=b6.m(0,$.iH(),y.P)
b2=b6.m(0,$.ph(),y.r)
b3=b6.m(0,$.n3(),y.W)
b4=y.N
b5=A.B(b4,b4)
for(u=J.a3(b6.m(0,$.en(),y.l));u.p();){t=u.gB(u)
b5.l(0,t.a,t.b)}b4=A.B(b4,b4)
for(u=J.a3(b6.m(0,$.fj(),y.Y));u.p();){t=u.gB(u)
b4.l(0,t.a,t.c)}u=b8==null
if(u){t=a7==null?null:a7.a
s=t==null?"Cashier":t}else s=b8
r=new C.bLv(A.lt(A.f7()))
q=new C.bLw(b9)
t=J.b9(a9,new C.bLy(s,b7,q,r))
p=A.T(t,t.$ti.i("E.E"))
t=J.b9(b0,new C.bLx(s,b7,q,r))
o=A.T(t,t.$ti.i("E.E"))
t=A.ak(o).i("ar<1>")
n=t.i("E.E")
m=A.T(new A.ar(o,new C.bLj(),t),n)
l=A.T(new A.ar(o,new C.bLk(),t),n)
t=J.cf(b1)
n=t.cz(b1,new C.bLl(s))
k=A.T(n,n.$ti.i("E.E"))
n=A.ak(k).i("ar<1>")
j=A.T(new A.ar(k,new C.bLz(b7,q,r),n),n.i("E.E"))
i=k.length===0?null:B.e.hU(k,new C.bLn(),new C.bLo(k))
h=B.e.bj(j,0,new C.bLp())
g=B.e.bj(j,0,new C.bLq())
f=B.e.bj(j,0,new C.bLr())
e=B.e.bj(j,0,new C.bLs())
d=B.e.bj(j,0,new C.bLt())
a0=B.e.bj(j,0,new C.bLu())
n=b7===D.jV
x=n?3:4
break
case 3:a1=a7==null
a2=a1?null:a7.Q
if(a2==null)a2=""
if(!u){u=A.cO(t.cz(b1,new C.bLm(s)))
a3=u==null?null:u.cy}else a3=a1?null:a7.at
x=a2.length!==0&&a3!=null?5:6
break
case 5:x=7
return A.h(B.fe.zb(a3,a8.gaj(a8),a2),$async$apu)
case 7:a4=c1
g=a4.a
f=a4.e
e=a4.c
d=a4.r
a0=g+e+f+d
case 6:case 4:if(n)a5=i==null?"-":C.cto(i)
else{a6=j.length
u=a6===1?"":"s"
a5=""+a6+" shift"+u+" worked"}switch(b7.a){case 0:u=L.dE(A.f7())
break
case 1:u="Last 7 days"
break
case 2:u="Last 30 days"
break
case 3:u=b9==null?"Custom range":L.dE(B.e.gL(b9.a.ju().split("T")))+" - "+L.dE(B.e.gL(b9.b.ju().split("T")))
break
default:u=null}t=a8.gb5(a8)
n=a8.gcq(a8)
a1=i==null?"\u2014":i.d+" \xb7 "+i.e
v=new C.a1q(b7,u,s,t+" \xb7 "+n,a1,a5,h,g,f,e,d,a0,J.Y(b2),b3,p,m,l,b5,b4)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$apu,w)},
y8:function y8(d,e){this.a=d
this.b=e},
a1q:function a1q(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v},
ata:function ata(){},
atb:function atb(){},
ate:function ate(){},
atd:function atd(){},
atg:function atg(){},
atc:function atc(){},
ath:function ath(){},
atf:function atf(){},
ati:function ati(){},
bOM:function bOM(d){this.a=d},
bLv:function bLv(d){this.a=d},
bLw:function bLw(d){this.a=d},
bLy:function bLy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLx:function bLx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLz:function bLz(d,e,f){this.a=d
this.b=e
this.c=f},
bLj:function bLj(){},
bLk:function bLk(){},
bLl:function bLl(d){this.a=d},
bLn:function bLn(){},
bLo:function bLo(d){this.a=d},
bLp:function bLp(){},
bLq:function bLq(){},
bLr:function bLr(){},
bLs:function bLs(){},
bLt:function bLt(){},
bLu:function bLu(){},
bLm:function bLm(d){this.a=d},
L9(d,e,f,g,h){return C.cwe(d,e,f,g,h)},
cwe(d,e,f,g,h){var x=0,w=A.u(y.H),v,u,t,s,r
var $async$L9=A.p(function(i,j){if(i===1)return A.q(j,w)
for(;;)switch(x){case 0:x=3
return A.h(C.apu(e,f,g,h),$async$L9)
case 3:r=j
if(d.e==null){x=1
break}u=C.hS(f)
u=A.aV(u.toLowerCase()," ","_")
t=f===D.di?r.b:C.hS(f)
s=A.O(null,!1,null,null,null,null,null,"Close",new C.bNH(d),B.C,B.ae)
A.bv(d,new C.Ul(r,null),A.a([s,A.O(null,!1,null,null,null,A.bC("printer",$.d?B.v:B.t,14),null,"Print",new C.bNI(d),B.C,B.ae),A.O(null,!1,null,null,null,M.fb,null,"Download PDF",new C.bNJ(d,r,"cashier_report_"+u+".pdf"),B.C,B.a8)],y.p),t+" Cashier Report \u2014 PDF Preview",B.bD,y.z)
case 1:return A.r(v,w)}})
return A.t($async$L9,w)},
L8(d,e,f,g,h){return C.cwd(d,e,f,g,h)},
cwd(d,e,f,g,h){var x=0,w=A.u(y.H),v,u,t,s
var $async$L8=A.p(function(i,j){if(i===1)return A.q(j,w)
for(;;)switch(x){case 0:x=3
return A.h(C.apu(e,f,g,h),$async$L8)
case 3:s=j
if(d.e==null){x=1
break}u=C.hS(f)
u=A.aV(u.toLowerCase()," ","_")
t=f===D.di?s.b:C.hS(f)
A.bv(d,new C.ad2(s,null),A.a([A.O(null,!1,null,null,null,null,null,"Close",new C.bNF(d),B.C,B.ae),A.O(null,!1,null,null,null,M.fb,null,"Download .xlsx",new C.bNG(d,s,"cashier_report_"+u+".xlsx"),B.C,B.hD)],y.p),t+" Cashier Report \u2014 Excel Preview",B.bD,y.z)
case 1:return A.r(v,w)}})
return A.t($async$L8,w)},
c8y(d){var x,w,v,u,t,s,r=null,q=d.c,p=d.d,o=d.e,n=A.e(q+" \xb7 "+p+" \xb7 "+o,r,r,r,r,r,A.k($.d?B.G:B.F,r,r,r,13,B.n).aA(12.5),r,r),m=$.d,l=m?B.au:B.ax,k=A.aW(m?B.W:B.Y,B.K,1),j=A.as(14),i=A.e("SUMMARY",r,r,r,r,r,A.k(m?B.G:B.F,r,r,r,12,B.am),r,r),h=d.r,g=d.w,f=y.o
g=A.a([new A.W("Date",d.b,!1),new A.W("Branch",p,!1),new A.W("Cashier",q,!1),new A.W("Counter",o,!1),new A.W("Shift Timings",d.f,!1),new A.W("Opening Float",A.K(h),!1),new A.W("Cash Sales",A.K(g),!1),new A.W("UPI Sales",A.K(d.x),!1),new A.W("Card Sales",A.K(d.y),!1),new A.W("Wallet Sales",A.K(d.z),!1),new A.W("Expected Drawer Total (Cash)",A.K(h+g),!1),new A.W("Total Sales",A.K(d.Q),!1),new A.W("No. of Bills",""+d.ax.length,!1),new A.W("No. of Returns & Exchanges",""+(d.ay.length+d.ch.length),!1),new A.W("Held Bills",""+d.as,!1)],f)
q=A.e("GST / TAX SUMMARY",r,r,r,r,r,A.k($.d?B.G:B.F,r,r,r,12,B.am),r,r)
f=A.a([new A.W("Gross Sales (MRP)",A.K(d.gNZ()),!1),new A.W("Discounts",A.K(d.gVq()),!1),new A.W("Taxable Value",A.K(d.gyi()-d.gyP()),!1),new A.W("CGST",A.K(d.gUl()),!1),new A.W("SGST",A.K(d.gOl()),!1)],f)
if(d.gxY()>0)f.push(new A.W("IGST",A.K(d.gxY()),!1))
f.push(new A.W("Total GST",A.K(d.gyP()),!1))
f.push(new A.W("Net Sales (Bills)",A.K(d.gyi()),!1))
p=A.e("DENOMINATION FINAL COUNT (AFTER CLOSING)",r,r,r,r,r,A.k($.d?B.G:B.F,r,r,r,12,B.am),r,r)
if(d.gl4().length===0)o=A.e("No cash denominations counted yet.",r,r,r,r,r,A.k($.d?B.X:B.T,r,1.5,r,13.5,B.n),r,r)
else{o=A.a([],y.p)
for(m=d.gl4(),h=m.length,x=0;x<m.length;m.length===h||(0,A.y)(m),++x){w=m[x]
v=$.d
u=v?B.ap:B.J
t=new A.aJ(v?B.W:B.Y,1,B.K,-1)
s=new A.bi(6,6)
v=v?B.v:B.t
o.push(A.S(r,A.e("\u20b9"+w.a+" \xd7 "+w.b,r,r,r,r,r,new A.z(!0,v,r,"Inter",r,r,11.8,B.H,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r),B.z,r,r,new A.Z(u,r,new A.bL(t,t,t,t),new A.di(s,s,s,s),r,r,B.E),r,r,r,r,O.tS,r,r,r))}o=A.cr(B.aK,o,B.b6,8,8)}m=y.p
return A.I(A.a([n,B.aw,A.S(r,A.I(A.a([i,B.aU,new A.dW(g,2,r),B.aw,q,B.aU,new A.dW(f,2,r),B.aw,p,B.b3,o],m),B.A,r,B.o,B.L),B.z,r,r,new A.Z(l,r,k,j,r,r,B.E),r,r,r,r,B.ds,r,r,1/0)],m),B.A,r,B.o,B.L)},
bNH:function bNH(d){this.a=d},
bNI:function bNI(d){this.a=d},
bNJ:function bNJ(d,e,f){this.a=d
this.b=e
this.c=f},
bNF:function bNF(d){this.a=d},
bNG:function bNG(d,e,f){this.a=d
this.b=e
this.c=f},
Ul:function Ul(d,e){this.c=d
this.a=e},
ad3:function ad3(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.x=_.w=_.r=null},
b18:function b18(d){this.a=d},
b17:function b17(d){this.a=d},
b19:function b19(d){this.a=d},
b16:function b16(d){this.a=d},
b1a:function b1a(d){this.a=d},
b15:function b15(d){this.a=d},
b10:function b10(d,e,f){this.a=d
this.b=e
this.c=f},
b1_:function b1_(d,e,f){this.a=d
this.b=e
this.c=f},
b14:function b14(d,e,f){this.a=d
this.b=e
this.c=f},
b13:function b13(d,e,f){this.a=d
this.b=e
this.c=f},
b12:function b12(d,e,f){this.a=d
this.b=e
this.c=f},
b11:function b11(d,e,f){this.a=d
this.b=e
this.c=f},
ad2:function ad2(d,e){this.c=d
this.a=e},
c85(d){var x=A.aV(d,"\u2013","-")
x=A.aV(x,"\u2014","-")
x=A.aV(x,"\u2019","'")
x=A.aV(x,"\u2018","'")
x=A.aV(x,"\u201c",'"')
x=A.aV(x,"\u201d",'"')
return A.aV(x,"\xd7","x")},
bMk(d){var x=0,w=A.u(y.H),v,u,t
var $async$bMk=A.p(function(e,f){if(e===1)return A.q(f,w)
for(;;)switch(x){case 0:t=E.Ni(null)
t.xb(Q.a5R(new C.bMl(d,new C.bMm(),new C.bMn()),null,F.lR))
x=2
return A.h(t.i0(0),$async$bMk)
case 2:v=f
u=C.hS(d.a)
R.w5("cashier_report_"+A.aV(u.toLowerCase()," ","_")+".pdf",v,"application/pdf")
return A.r(null,w)}})
return A.t($async$bMk,w)},
c8F(d,e){var x=null,w=d?$.c_o():H.ed
return G.pw(w,e,G.M7($.c_q(),H.mH),x,!1,!1,H.cN,x,x,x,H.eJ,!1,x,H.ei,x,0,x,x,H.d2,H.qR)},
cuU(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="Cashier Report",d={},a0=G.axH(new A.Aj().bF("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")),a1=a0.NL()
a1.toString
a0.Y_(a1,e)
a0.qp(e)
x=a0.x.h(0,e)
x.ly(0,26)
x.ly(1,22)
x.ly(2,34)
x.ly(3,16)
x.ly(4,18)
x.ly(5,18)
d.a=0
w=new C.bMf(x)
v=new C.bMi(d,x,w)
u=new C.bMh(d,w)
t=new C.bMe(d)
s=new C.bMj(d,v,w,t)
a1=a2.a
v.$3$bold$fontSize(C.hS(a1)+" Cashier Report",!0,16)
r=a2.c
q=a2.d
p=a2.e
v.$4$bold$color$fontSize(r+" \xb7 "+q+" \xb7 "+p,!1,$.c_r(),10)
t.$0()
o=$.c_p()
v.$3$bold$color("SUMMARY",!0,o)
u.$2("Date",a2.b)
u.$2("Branch",q)
u.$2("Cashier",r)
u.$2("Counter",p)
u.$2("Shift Timings",a2.f)
p=a2.r
u.$2("Opening Float",A.K(p))
r=a2.w
u.$2("Cash Sales",A.K(r))
u.$2("UPI Sales",A.K(a2.x))
u.$2("Card Sales",A.K(a2.y))
u.$2("Wallet Sales",A.K(a2.z))
u.$2("Expected Drawer Total (Cash)",A.K(p+r))
u.$2("Total Sales",A.K(a2.Q))
r=a2.ax
u.$2("No. of Bills",""+r.length)
p=a2.ay
q=a2.ch
u.$2("No. of Returns & Exchanges",""+(p.length+q.length))
u.$2("Held Bills",""+a2.as)
if(a2.gl4().length!==0){n=a2.gl4()
u.$2("Denomination Final Count",new A.aw(n,new C.bMg(),A.ak(n).i("aw<1,c>")).aB(0,"  "))}t.$0()
v.$3$bold$color("GST / TAX SUMMARY",!0,o)
u.$2("Gross Sales (MRP)",A.K(a2.gNZ()))
u.$2("Discounts",A.K(a2.gVq()))
u.$2("Taxable Value",A.K(a2.gyi()-a2.gyP()))
u.$2("CGST",A.K(a2.gUl()))
u.$2("SGST",A.K(a2.gOl()))
if(a2.gxY()>0)u.$2("IGST",A.K(a2.gxY()))
u.$2("Total GST",A.K(a2.gyP()))
u.$2("Net Sales (Bills)",A.K(a2.gyi()))
t.$0()
o=r.length
n=y.E
m=A.a([],n)
for(l=r.length,k=a2.CW,j=a2.cx,i=y.s,h=0;h<r.length;r.length===l||(0,A.y)(r),++h){g=r[h]
m.push(A.a([g.gaj(g),C.qI(g.gfi(),k),C.bOL(g,j),A.K(g.gho()),g.gfN(g)],i))}s.$3("BILLS ("+o+")",D.aX_,m)
r=p.length
o=A.a([],n)
for(m=p.length,h=0;h<p.length;p.length===m||(0,A.y)(p),++h){f=p[h]
o.push(A.a([f.a,C.qI(f.d,k),f.b,f.f,A.K(f.w),f.y],i))}s.$3("RETURNS ("+r+")",D.b_z,o)
r=q.length
n=A.a([],n)
for(p=q.length,h=0;h<q.length;q.length===p||(0,A.y)(q),++h){f=q[h]
n.push(A.a([f.a,C.qI(f.d,k),f.b,f.f,A.K(f.w)],i))}s.$3("EXCHANGES ("+r+")",D.aQg,n)
r=a0.dx
r===$&&A.b()
r=new G.Re(a0,A.B(y.N,y.c),A.a([],y.T),r).Qt()
r.toString
a1=C.hS(a1)
R.w5("cashier_report_"+A.aV(a1.toLowerCase()," ","_")+".xlsx",new Uint8Array(A.fi(r)),"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")},
bMm:function bMm(){},
bMn:function bMn(){},
bMl:function bMl(d,e,f){this.a=d
this.b=e
this.c=f},
bMf:function bMf(d){this.a=d},
bMi:function bMi(d,e,f){this.a=d
this.b=e
this.c=f},
bMh:function bMh(d,e){this.a=d
this.b=e},
bMe:function bMe(d){this.a=d},
bMj:function bMj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMg:function bMg(){},
c5r(d,e,f){return new C.abz(f,e,new C.abA(),d)},
aUu:function aUu(d,e){this.a=d
this.b=e},
aUv:function aUv(d,e){this.a=d
this.b=e},
XL:function XL(d,e,f){this.a=d
this.b=e
this.c=f},
abA:function abA(){this.b=this.a=0},
abz:function abz(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
anh:function anh(){},
wT(d){return new G.a2(d,null,null)}},D,I,S,E,F,Q,T,R
J=c[1]
A=c[0]
B=c[2]
K=c[74]
N=c[187]
O=c[205]
G=c[76]
H=c[236]
L=c[111]
M=c[189]
P=c[162]
C=a.updateHolder(c[66],C)
D=c[235]
I=c[220]
S=c[218]
E=c[89]
F=c[185]
Q=c[83]
T=c[186]
R=c[91]
C.y8.prototype={
R(){return"ReportPeriod."+this.b}}
C.a1q.prototype={
gl4(){var x=J.A2(this.at)
x=x.cz(x,new C.ata()).aF(0)
B.e.dJ(x,new C.atb())
return x},
gNZ(){return B.e.bj(this.ax,0,new C.ate())},
gVq(){return B.e.bj(this.ax,0,new C.atd())},
gyi(){return B.e.bj(this.ax,0,new C.atg())},
gUl(){return B.e.bj(this.ax,0,new C.atc())},
gOl(){return B.e.bj(this.ax,0,new C.ath())},
gxY(){return B.e.bj(this.ax,0,new C.atf())},
gyP(){return B.e.bj(this.ax,0,new C.ati())}}
C.Ul.prototype={
V(){return new C.ad3()}}
C.ad3.prototype={
H(d){var x,w,v,u,t,s=this,r=null,q=s.a.c,p=C.c8y(q),o=A.e("DETAILS",r,r,r,r,r,A.k($.d?B.G:B.F,r,r,r,12,B.am),r,r),n=q.ax,m=n.length,l=s.d
if(m===0)n=A.a([A.e("No bills in this period.",r,r,r,r,r,A.k($.d?B.X:B.T,r,1.5,r,13.5,B.n),r,r)],y.p)
else{x=A.a([],y.p)
for(w=n.length,v=0;v<n.length;n.length===w||(0,A.y)(n),++v)x.push(s.ass(n[v]))
n=x}n=s.Ql(m,new C.b18(s),l,n,"Bills")
l=q.ay
m=l.length
x=s.e
if(m===0)l=A.a([A.e("No returns in this period.",r,r,r,r,r,A.k($.d?B.X:B.T,r,1.5,r,13.5,B.n),r,r)],y.p)
else{w=A.a([],y.p)
for(u=l.length,v=0;v<l.length;l.length===u||(0,A.y)(l),++v)w.push(s.aJ_(l[v]))
l=w}l=s.Ql(m,new C.b19(s),x,l,"Returns")
x=q.ch
m=x.length
w=s.f
if(m===0)x=A.a([A.e("No exchanges in this period.",r,r,r,r,r,A.k($.d?B.X:B.T,r,1.5,r,13.5,B.n),r,r)],y.p)
else{u=A.a([],y.p)
for(t=x.length,v=0;v<x.length;x.length===t||(0,A.y)(x),++v)u.push(s.awt(x[v]))
x=u}return A.I(A.a([p,P.cl,o,B.aU,n,B.b3,l,B.b3,s.Ql(m,new C.b1a(s),w,x,"Exchanges")],y.p),B.A,r,B.o,B.L)},
Ql(d,e,f,g,h){var x,w=null,v=$.d,u=A.aW(v?B.W:B.Y,B.K,1),t=A.as(8),s=v?B.au:B.ax,r=f?0.5:0,q=y.p
r=A.V(A.a([A.c_Z(A.bC("chevdown",v?B.X:B.T,14),B.fm,r),B.aO,A.e(h,w,w,w,w,w,A.k(w,w,w,w,11.8,B.H).aA(13),w,w)],q),B.B,B.o,B.u)
x=A.as(20)
q=A.a([A.bI(A.bz(w,A.S(w,A.V(A.a([r,A.S(w,A.e(""+d,w,w,w,w,w,D.bdI,w,w),B.z,w,w,new A.Z(B.a7,w,w,x,w,w,B.E),w,w,w,w,D.a5b,w,w,w)],q),B.B,B.bV,B.u),B.z,s,w,w,w,w,w,w,S.jb,w,w,w),B.ag,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w),B.an,w,w,w,w)],q)
if(f)q.push(new A.a5(D.a4c,A.I(g,B.A,w,B.o,B.L),w))
return A.S(w,A.I(q,B.A,w,B.o,B.L),B.bY,w,w,new A.Z(w,w,u,t,w,w,B.E),w,w,w,w,w,w,w,w)},
ass(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.r===d.gaj(d),n=$.d?B.W:B.Y,m=A.e(d.gaj(d)+" \xb7 "+C.qI(d.gfi(),q.a.c.CW),p,p,p,p,p,A.k(p,p,p,p,11.8,B.H),p,p),l=C.bOL(d,q.a.c.cx)
l=A.e(l,p,2,B.a2,p,p,A.k($.d?B.G:B.F,p,p,p,11,B.n),p,p)
x=d.gdY(d)
w=d.gfN(d)
v=y.p
v=A.a([A.bI(A.bz(p,A.S(p,A.V(A.a([A.aC(A.I(A.a([m,B.cV,l,B.cV,A.e(x+" \xb7 "+w,p,p,p,p,p,A.k($.d?B.G:B.F,p,p,p,13,B.n).aA(11),p,p)],v),B.A,p,B.o,B.L),1),B.aG,A.e(A.K(d.gho()),p,p,p,p,p,A.k(p,p,p,p,11.8,B.H),p,p)],v),B.A,B.o,B.u),B.z,p,p,new A.Z(p,p,new A.bL(new A.aJ(n,1,B.K,-1),B.P,B.P,B.P),p,p,p,B.E),p,p,p,p,D.tK,p,p,p),B.ag,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.b10(q,o,d),p,p,p),B.an,p,p,p,p)],v)
if(o){n=$.d?B.au:B.ax
m=A.as(6)
l=d.gdO()
x=A.K(d.gNY())
w=A.K(d.gJR())
u=A.K(d.gMM())
t=A.K(d.gho())
s=d.gfN(d)
r=d.gaK(d)
v.push(A.S(p,A.e(""+l+" items \xb7 MRP "+x+" \xb7 Discount "+w+" \xb7 GST "+u+" \xb7 Net "+t+" \xb7 Paid via "+s+", "+r+".",p,p,p,p,p,A.k($.d?B.G:B.F,p,p,p,13,B.n).aA(11.5),p,p),B.z,p,p,new A.Z(n,p,p,m,p,p,B.E),p,p,p,I.hi,B.fn,p,p,1/0))}return A.I(v,B.B,p,B.o,B.L)},
aJ_(d){var x,w,v,u,t=null,s=d.a,r=this.w===s,q=$.d?B.W:B.Y
s=A.e(s+" \xb7 "+C.qI(d.d,this.a.c.CW),t,t,t,t,t,A.k(t,t,t,t,11.8,B.H),t,t)
x=d.f
w=A.e(x,t,2,B.a2,t,t,A.k($.d?B.G:B.F,t,t,t,11,B.n),t,t)
v=d.y
u=y.p
u=A.a([A.bI(A.bz(t,A.S(t,A.V(A.a([A.aC(A.I(A.a([s,B.cV,w,B.cV,A.e("against "+d.b+" \xb7 "+v,t,t,t,t,t,A.k($.d?B.G:B.F,t,t,t,13,B.n).aA(11),t,t)],u),B.A,t,B.o,B.L),1),B.aG,A.e(A.K(d.w),t,t,t,t,t,A.k(t,t,t,t,11.8,B.H),t,t)],u),B.A,B.o,B.u),B.z,t,t,new A.Z(t,t,new A.bL(new A.aJ(q,1,B.K,-1),B.P,B.P,B.P),t,t,t,B.E),t,t,t,t,D.tK,t,t,t),B.ag,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.b14(this,r,d),t,t,t),B.an,t,t,t,t)],u)
if(r){s=$.d
q=s?B.au:B.ax
w=A.as(6)
u.push(A.S(t,A.e(x+" \xd7 "+d.r+" \u2014 Reason: "+d.x+". Refunded as "+v+".",t,t,t,t,t,A.k(s?B.G:B.F,t,t,t,13,B.n).aA(11.5),t,t),B.z,t,t,new A.Z(q,t,t,w,t,t,B.E),t,t,t,I.hi,B.fn,t,t,1/0))}return A.I(u,B.B,t,B.o,B.L)},
awt(d){var x,w,v=null,u=d.a,t=this.x===u,s=$.d?B.W:B.Y
u=A.e(u+" \xb7 "+C.qI(d.d,this.a.c.CW),v,v,v,v,v,A.k(v,v,v,v,11.8,B.H),v,v)
x=A.e(d.y,v,2,B.a2,v,v,A.k($.d?B.G:B.F,v,v,v,11,B.n),v,v)
w=y.p
w=A.a([A.bI(A.bz(v,A.S(v,A.V(A.a([A.aC(A.I(A.a([u,B.cV,x,B.cV,A.e("against "+d.b,v,v,v,v,v,A.k($.d?B.G:B.F,v,v,v,13,B.n).aA(11),v,v)],w),B.A,v,B.o,B.L),1),B.aG,A.e(A.K(d.w),v,v,v,v,v,A.k(v,v,v,v,11.8,B.H),v,v)],w),B.A,B.o,B.u),B.z,v,v,new A.Z(v,v,new A.bL(new A.aJ(s,1,B.K,-1),B.P,B.P,B.P),v,v,v,B.E),v,v,v,v,D.tK,v,v,v),B.ag,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.b12(this,t,d),v,v,v),B.an,v,v,v,v)],w)
if(t){u=$.d
s=u?B.au:B.ax
x=A.as(6)
w.push(A.S(v,A.e(d.f+" \xd7 "+d.r+" \u2014 Reason: "+d.x+". Recorded as an exchange.",v,v,v,v,v,A.k(u?B.G:B.F,v,v,v,13,B.n).aA(11.5),v,v),B.z,v,v,new A.Z(s,v,v,x,v,v,B.E),v,v,v,I.hi,B.fn,v,v,1/0))}return A.I(w,B.B,v,B.o,B.L)}}
C.ad2.prototype={
H(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c,j=C.c8y(k),i=k.ax,h=i.length
h=A.e("BILLS ("+h+")",l,l,l,l,l,A.k($.d?B.G:B.F,l,l,l,12,B.am),l,l)
x=y.E
w=A.a([],x)
for(v=i.length,u=k.CW,t=k.cx,s=y.s,r=0;r<i.length;i.length===v||(0,A.y)(i),++r){q=i[r]
w.push(A.a([q.gaj(q),C.qI(q.gfi(),u),C.bOL(q,t),A.K(q.gho()),q.gfN(q)],s))}i=m.QH(D.aW4,D.b8s,w)
w=k.ay
v=w.length
v=A.e("RETURNS ("+v+")",l,l,l,l,l,A.k($.d?B.G:B.F,l,l,l,12,B.am),l,l)
t=A.a([],x)
for(p=w.length,r=0;r<w.length;w.length===p||(0,A.y)(w),++r){o=w[r]
t.push(A.a([o.a,C.qI(o.d,u),o.b,o.f,A.K(o.w),o.y],s))}w=m.QH(D.b_q,D.RQ,t)
t=k.ch
p=t.length
p=A.e("EXCHANGES ("+p+")",l,l,l,l,l,A.k($.d?B.G:B.F,l,l,l,12,B.am),l,l)
x=A.a([],x)
for(n=t.length,r=0;r<t.length;t.length===n||(0,A.y)(t),++r){o=t[r]
x.push(A.a([o.a,C.qI(o.d,u),o.b,o.f,A.K(o.w)],s))}return A.I(A.a([j,P.cl,h,B.b3,i,B.dO,v,B.b3,w,B.dO,p,B.b3,m.QH(D.aZf,D.RQ,x)],y.p),B.A,l,B.o,B.L)},
QH(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=null
if(f.length===0){x=$.d
w=A.aW(x?B.W:B.Y,B.K,1)
v=A.as(8)
return A.S(B.ak,A.e("Nothing to show for this period.",l,l,l,l,l,A.k(x?B.X:B.T,l,1.5,l,13.5,B.n),l,l),B.z,l,l,new A.Z(l,l,w,v,l,l,B.E),l,l,l,l,O.nv,l,l,l)}x=A.aW($.d?B.W:B.Y,B.K,1)
w=A.as(8)
v=A.B(y.S,y.w)
for(u=d.length,t=0;t<u;++t)v.l(0,t,M.hI)
s=y.p
r=A.a([],s)
for(t=0;t<u;++t){q=d[t]
p=$.d?B.X:B.T
p=new A.z(!0,p,l,"Inter",l,l,12,B.H,l,0.3,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l).ai(B.J)
r.push(new A.a5(B.hX,A.e(q,l,l,l,l,l,p,e.q(0,t)?B.bW:B.cz,l),l))}u=A.a([new L.hU(M.mL,r)],y.V)
for(o=0;o<f.length;++o){if((o&1)===0)r=$.d?B.ap:B.J
else r=$.d?B.au:B.ax
q=A.a([],s)
for(t=0;p=f[o],t<p.length;++t){p=p[t]
n=$.d?B.v:B.t
m=e.q(0,t)?B.bW:B.cz
q.push(new A.a5(B.hX,A.e(p,l,l,l,l,l,new A.z(!0,n,l,"Inter",l,l,13.5,B.n,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),m,l),l))}u.push(new L.hU(new A.Z(r,l,l,l,l,l,B.E),q))}return A.S(l,L.St(u,v,M.mc),B.bY,l,l,new A.Z(l,l,x,w,l,l,B.E),l,l,l,l,l,l,l,l)}}
C.aUu.prototype={
R(){return"WrapAlignment."+this.b}}
C.aUv.prototype={
R(){return"WrapCrossAlignment."+this.b}}
C.XL.prototype={}
C.abA.prototype={
e9(d){this.a=d.a
this.b=d.b},
nN(d){var x=new C.abA()
x.a=this.a
x.b=this.b
return x},
j(d){return A.N(this).j(0)+" first:"+this.a+" last:"+this.b}}
C.abz.prototype={
gmK(){return!0},
grv(){return this.z.b<this.b.length},
a3Y(d){switch(0){case 0:return d.a.c}},
a3O(d){switch(0){case 0:return d.a.d}},
axT(d,e){switch(0){case 0:return new E.jE(d,e)}},
axt(d,e,f){var x=e-f
switch(0){case 0:return d?x:0}},
eR(b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.b,b2=b1.length
if(b2===0||b0.z.a>=b2){b0.a=new E.fz(0,0,B.r.aM(0,b4.a,b4.b),B.r.aM(0,b4.c,b4.d))
return}x=E.FK(b3)
switch(0){case 0:w=b4.b
v=new E.fH(0,w,0,1/0)
u=x===F.qG
break}t=A.a([],y.q)
s=A.B(y.j,y.S)
for(b2=b0.z,r=B.e.h8(b1,b2.a),q=r.length,p=b0.f,o=b0.w,n=0,m=0,l=0,k=0,j=0,i=0;i<r.length;r.length===q||(0,A.y)(r),++i){h=r[i]
h.eR(b3,v,!0)
g=b0.a3Y(h)
g.toString
f=b0.a3O(h)
f.toString
if(j>0&&l+p+g>w){n=Math.max(n,l)
m+=k
if(t.length!==0)m+=o
t.push(new C.XL(l,k,j))
l=0
k=0
j=0}l+=g
if(j>0)l+=p
k=Math.max(k,f);++j
s.l(0,h,t.length)}if(j>0){n=Math.max(n,l)
m+=k
if(t.length!==0)m+=o
t.push(new C.XL(l,k,j))}e=t.length
switch(0){case 0:r=b4.bd(new E.jE(n,m))
d=r.a
a0=r.b
b0.a=new E.fz(0,0,d,a0)
break}Math.max(0,a0-m)
switch(0){case 0:break}r=b2.a
b2.b=r
for(q=a0+0.01,a1=r,a2=a0,a3=0;a3<e;++a3){a4=t[a3]
k=a4.b
Math.max(0,d-a4.a)
switch(0){case 0:break}a5=u?d:0
a6=a2-k
a2=a6
if(a2<-0.01||a2+k>q)break
for(r=B.e.h8(b1,a1),g=r.length,i=0;i<r.length;r.length===g||(0,A.y)(r),++i){h=r[i]
if(s.h(0,h)!==a3)break;++a1
a7=b0.a3Y(h)
f=b0.a3O(h)
f.toString
a8=b0.axt(!0,k,f)
if(u){a7.toString
a5-=a7}f=b0.axT(a5,a2+a8)
a9=h.a
h.a=new E.fz(f.a,f.b,a9.c,a9.d)
if(u)a5-=p
else{a7.toString
a5+=a7+p}}a2-=o
a2=a2
b2.b=a1}},
f7(d){var x,w,v,u,t,s=this
s.kV(d)
x=d.b
x.fu()
w=new A.bY(new Float64Array(16))
w.d2()
v=s.a
w.dE(v.a,v.b,0,1)
x.q9(0,w)
for(v=s.z,v=B.e.bW(s.b,v.a,v.b),u=v.length,t=0;t<v.length;v.length===u||(0,A.y)(v),++t)v[t].f7(d)
x.pT(0)},
rQ(d,e){var x=this.z
x.a=e.a
x.b=e.b
x.a=e.b},
fu(){return this.z}}
C.anh.prototype={}
var z=a.updateTypes(["x(dl)","an<~>(aa,qu,y8{cashierName:c?,customRange:fR<bp>?})","cV(c,c)","cV(c,i<c>,i<i<c>>{columnWidths:aA<v,ql>?})","i<cV>(ko)","fQ(v,v)","~(c{bold!x,color:a2?,fontSize:v})"])
C.ata.prototype={
$1(d){return d.b>0},
$S:391}
C.atb.prototype={
$2(d,e){return B.r.bo(e.a,d.a)},
$S:392}
C.ate.prototype={
$2(d,e){return d+e.gNY()},
$S:56}
C.atd.prototype={
$2(d,e){return d+e.gJR()},
$S:56}
C.atg.prototype={
$2(d,e){return d+e.gho()},
$S:56}
C.atc.prototype={
$2(d,e){return d+e.gac3()},
$S:56}
C.ath.prototype={
$2(d,e){return d+e.ga_a()},
$S:56}
C.atf.prototype={
$2(d,e){return d+e.gaeU()},
$S:56}
C.ati.prototype={
$2(d,e){return d+e.gMM()},
$S:56}
C.bOM.prototype={
$1(d){var x=this.a.h(0,d.gcT())
return x==null?d.gcT():x},
$S:1056}
C.bLv.prototype={
$1(d){var x,w,v
try{x=A.lt(d)
w=B.r.bl(this.a.dR(x).a,864e8)
return w}catch(v){return null}},
$S:237}
C.bLw.prototype={
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
C.bLy.prototype={
$1(d){var x,w,v,u=this
if(d.gjN()!==u.a)return!1
x=u.b
if(x===D.di)return u.c.$1(B.e.gL(d.gdY(d).split(" ")))
if(B.h.q(d.gdY(d),"now")||B.h.b8(d.gdY(d),A.f7()))return!0
w=u.d.$1(B.e.gL(d.gdY(d).split(" ")))
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
C.bLx.prototype={
$1(d){var x,w,v,u=this
if(!B.h.b8(d.Q,u.a))return!1
x=u.b
if(x===D.di)return u.c.$1(B.e.gL(d.e.split(" ")))
w=d.e
if(B.h.q(w,"now")||B.h.b8(w,A.f7()))return!0
v=u.d.$1(B.e.gL(w.split(" ")))
if(v==null)return!1
w=!1
switch(x.a){case 0:x=w
break
case 1:x=v>0&&v<=7
break
case 2:x=v>0&&v<=30
break
case 3:x=w
break
default:x=null}return x},
$S:z+0}
C.bLz.prototype={
$1(d){var x,w,v=this.a
if(v===D.di)return this.b.$1(d.f)
if(d.ay==="Open"||d.f===A.f7())return!0
x=this.c.$1(d.f)
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
$S:34}
C.bLj.prototype={
$1(d){return d.z==="Refunded"},
$S:z+0}
C.bLk.prototype={
$1(d){return d.z==="Exchanged"},
$S:z+0}
C.bLl.prototype={
$1(d){return d.b===this.a},
$S:34}
C.bLn.prototype={
$1(d){return d.ay==="Open"},
$S:34}
C.bLo.prototype={
$0(){return B.e.gL(this.a)},
$S:145}
C.bLp.prototype={
$2(d,e){return d+e.x},
$S:52}
C.bLq.prototype={
$2(d,e){return d+e.z},
$S:52}
C.bLr.prototype={
$2(d,e){return d+e.as},
$S:52}
C.bLs.prototype={
$2(d,e){return d+e.Q},
$S:52}
C.bLt.prototype={
$2(d,e){return d+e.at},
$S:52}
C.bLu.prototype={
$2(d,e){return d+e.y},
$S:52}
C.bLm.prototype={
$1(d){return d.b===this.a},
$S:34}
C.bNH.prototype={
$0(){return A.ao(this.a,!0).S()},
$S:0}
C.bNI.prototype={
$0(){return A.J(this.a,"Sent to Microsoft Print to PDF",null)},
$S:0}
C.bNJ.prototype={
$0(){var x=0,w=A.u(y.H),v=this,u
var $async$$0=A.p(function(d,e){if(d===1)return A.q(e,w)
for(;;)switch(x){case 0:u=v.a
A.ao(u,!0).S()
x=2
return A.h(C.bMk(v.b),$async$$0)
case 2:if(u.e!=null)A.J(u,"Downloaded "+v.c,null)
return A.r(null,w)}})
return A.t($async$$0,w)},
$S:2}
C.bNF.prototype={
$0(){return A.ao(this.a,!0).S()},
$S:0}
C.bNG.prototype={
$0(){var x=this.a
A.ao(x,!0).S()
C.cuU(this.b)
A.J(x,"Downloaded "+this.c,null)},
$S:0}
C.b18.prototype={
$0(){var x=this.a
return x.t(new C.b17(x))},
$S:0}
C.b17.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
C.b19.prototype={
$0(){var x=this.a
return x.t(new C.b16(x))},
$S:0}
C.b16.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.b1a.prototype={
$0(){var x=this.a
return x.t(new C.b15(x))},
$S:0}
C.b15.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
C.b10.prototype={
$0(){var x=this.a
return x.t(new C.b1_(x,this.b,this.c))},
$S:0}
C.b1_.prototype={
$0(){if(this.b)var x=null
else{x=this.c
x=x.gaj(x)}return this.a.r=x},
$S:0}
C.b14.prototype={
$0(){var x=this.a
return x.t(new C.b13(x,this.b,this.c))},
$S:0}
C.b13.prototype={
$0(){var x=this.b?null:this.c.a
return this.a.w=x},
$S:0}
C.b12.prototype={
$0(){var x=this.a
return x.t(new C.b11(x,this.b,this.c))},
$S:0}
C.b11.prototype={
$0(){var x=this.b?null:this.c.a
return this.a.x=x},
$S:0}
C.bMm.prototype={
$2(d,e){var x=null
return new E.l2(D.tH,E.kC(A.a([E.cj(d,E.fq(x,I.fU,x,x,x,x,x,x,x,F.bu,x,x,9,x,x,x,!0,x,x,x,x),x,x),E.cj(C.c85(e),E.fq(x,x,x,x,x,x,x,x,x,F.bu,x,x,10,x,F.bG,x,!0,x,x,x,x),x,x)],y.n),F.eE,F.jG))},
$S:z+2}
C.bMn.prototype={
$4$columnWidths(d,e,f,g){var x,w,v,u,t,s=null,r=A.a([new E.cU(s,14,s),E.cj(d,E.fq(s,I.hr,s,s,s,s,s,s,s,F.bu,s,s,10,s,F.bG,s,!0,s,s,s,s),s,s),new E.cU(s,6,s)],y.n)
if(f.length===0)r.push(E.cj("None in this period.",D.xl,s,s))
else{x=A.a([],y.t)
for(w=f.length,v=0;v<f.length;f.length===w||(0,A.y)(f),++v){u=[]
for(t=B.e.gW(f[v]);t.p();)u.push(C.c85(t.gB(0)))
x.push(u)}w=E.fq(s,T.lQ,s,s,s,s,s,s,s,F.bu,s,s,8.5,s,F.bG,s,!0,s,s,s,s)
r.push(Q.aah(K.aRu(D.wb,0.5),s,D.AK,D.Tj,g,x,s,D.rN,w,e))}return E.iJ(r,F.c6)},
$3(d,e,f){return this.$4$columnWidths(d,e,f,null)},
$S:z+3}
C.bMl.prototype={
$1(a3){var x,w,v,u,t,s,r,q=null,p="\u20b9",o="Rs ",n=this.a,m=E.cj(C.hS(n.a)+" Cashier Report",E.fq(q,q,q,q,q,q,q,q,q,F.bu,q,q,18,q,F.bG,q,!0,q,q,q,q),q,q),l=n.c,k=n.d,j=n.e,i=E.cj(l+" \xb7 "+k+" \xb7 "+j,D.xm,q,q),h=E.cj("SUMMARY",E.fq(q,I.hr,q,q,q,q,q,q,q,F.bu,q,q,10,q,F.bG,q,!0,q,q,q,q),q,q),g=this.b,f=y.n,e=n.r,d=n.w,a0=n.ax,a1=n.ay,a2=n.ch
d=E.kC(A.a([new E.fu(1,F.cE,E.iJ(A.a([g.$2("Date",n.b),g.$2("Branch",k),g.$2("Cashier",l),g.$2("Counter",j),g.$2("Shift Timings",n.f),g.$2("Held Bills",""+n.as)],f),F.c6)),new E.cU(24,q,q),new E.fu(1,F.cE,E.iJ(A.a([g.$2("Opening Float",B.h.cB(A.K(e),p,o)),g.$2("Cash Sales",B.h.cB(A.K(d),p,o)),g.$2("UPI Sales",B.h.cB(A.K(n.x),p,o)),g.$2("Card Sales",B.h.cB(A.K(n.y),p,o)),g.$2("Wallet Sales",B.h.cB(A.K(n.z),p,o)),g.$2("Expected Drawer Total (Cash)",B.h.cB(A.K(e+d),p,o)),g.$2("Total Sales",B.h.cB(A.K(n.Q),p,o)),g.$2("No. of Bills",""+a0.length),g.$2("No. of Returns & Exchanges",""+(a1.length+a2.length))],f),F.c6))],f),F.c6,F.dY)
e=E.cj("GST / TAX SUMMARY",E.fq(q,I.hr,q,q,q,q,q,q,q,F.bu,q,q,10,q,F.bG,q,!0,q,q,q,q),q,q)
j=E.iJ(A.a([g.$2("Gross Sales (MRP)",B.h.cB(A.K(n.gNZ()),p,o)),g.$2("Discounts",B.h.cB(A.K(n.gVq()),p,o)),g.$2("Taxable Value",B.h.cB(A.K(n.gyi()-n.gyP()),p,o))],f),F.c6)
l=A.a([g.$2("CGST",B.h.cB(A.K(n.gUl()),p,o)),g.$2("SGST",B.h.cB(A.K(n.gOl()),p,o))],f)
if(n.gxY()>0)l.push(g.$2("IGST",B.h.cB(A.K(n.gxY()),p,o)))
l.push(g.$2("Total GST",B.h.cB(A.K(n.gyP()),p,o)))
l.push(g.$2("Net Sales (Bills)",B.h.cB(A.K(n.gyi()),p,o)))
m=A.a([m,new E.cU(q,2,q),i,new E.cU(q,14,q),h,new E.cU(q,8,q),d,new E.cU(q,6,q),e,new E.cU(q,8,q),E.kC(A.a([new E.fu(1,F.cE,j),new E.cU(24,q,q),new E.fu(1,F.cE,E.iJ(l,F.c6))],f),F.c6,F.dY)],f)
if(n.gl4().length!==0){l=E.cj("DENOMINATION FINAL COUNT (AFTER CLOSING)",E.fq(q,I.fU,q,q,q,q,q,q,q,F.bu,q,q,8.5,q,F.bG,q,!0,q,q,q,q),q,q)
k=A.a([],f)
for(j=n.gl4(),i=j.length,x=0;x<j.length;j.length===i||(0,A.y)(j),++x){w=j[x]
k.push(E.cj("Rs "+w.a+" x "+w.b,I.k4,q,q))}B.e.A(m,A.a([new E.cU(q,6,q),l,new E.cU(q,4,q),C.c5r(k,4,8)],f))}l=this.c
k=a0.length
j=y.s
i=A.a(["Bill","Customer","Items","Net","Tender"],j)
h=y.E
g=A.a([],h)
for(f=a0.length,e=n.CW,n=n.cx,x=0;x<a0.length;a0.length===f||(0,A.y)(a0),++x){v=a0[x]
d=v.gaj(v)
u=C.qI(v.gfi(),e)
t=C.bOL(v,n)
s=A.K(v.gho())
g.push(A.a([d,u,t,A.kL(s,p,o,0),v.gfN(v)],j))}n=y.S
f=y.I
m.push(l.$4$columnWidths("BILLS ("+k+")",i,g,A.av([0,D.la,1,D.Bb,2,D.a9P,3,D.Ba,4,D.a9N],n,f)))
g=a1.length
i=A.a(["Return","Customer","Against Bill","Item","Amount","Mode"],j)
k=A.a([],h)
for(d=a1.length,x=0;x<a1.length;a1.length===d||(0,A.y)(a1),++x){r=a1[x]
a0=C.qI(r.d,e)
u=A.K(r.w)
k.push(A.a([r.a,a0,r.b,r.f,A.kL(u,p,o,0),r.y],j))}m.push(l.$4$columnWidths("RETURNS ("+g+")",i,k,A.av([0,D.la,1,D.a9O,2,D.la,3,N.i_,4,D.a9M,5,N.i_],n,f)))
k=a2.length
i=A.a(["Return","Customer","Against Bill","Item Exchanged","Value"],j)
h=A.a([],h)
for(g=a2.length,x=0;x<a2.length;a2.length===g||(0,A.y)(a2),++x){r=a2[x]
d=C.qI(r.d,e)
a0=A.K(r.w)
h.push(A.a([r.a,d,r.b,r.f,A.kL(a0,p,o,0)],j))}m.push(l.$4$columnWidths("EXCHANGES ("+k+")",i,h,A.av([0,D.la,1,D.Bb,2,D.la,3,N.i_,4,D.Ba],n,f)))
return m},
$S:z+4}
C.bMf.prototype={
$2(d,e){return this.a.ac1(new G.j2(e,d))},
$S:z+5}
C.bMi.prototype={
$4$bold$color$fontSize(d,e,f,g){var x,w,v=null,u=this.a,t=u.a
this.b.ag7(new G.j2(t,0),new G.j2(t,5))
x=this.c.$2(0,u.a)
t=x.c
w=x.f
t.or(new G.j2(x.e,w),new G.h0(new G.ia(d,v,v)))
w=G.pw(H.ed,e,v,v,!1,!1,f==null?H.cN:f,v,v,g,H.eJ,!1,v,H.ei,v,0,v,v,H.d2,H.fB)
t.a.a=!0
x.a=w;++u.a},
$2$bold(d,e){return this.$4$bold$color$fontSize(d,e,null,11)},
$3$bold$fontSize(d,e,f){return this.$4$bold$color$fontSize(d,e,null,f)},
$3$bold$color(d,e,f){return this.$4$bold$color$fontSize(d,e,f,11)},
$S:z+6}
C.bMh.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=v.$2(0,u.a),s=t.c,r=t.f
s.or(new G.j2(t.e,r),new G.h0(new G.ia(d,w,w)))
r=C.c8F(!1,!0)
s.a.a=!0
t.a=r
x=v.$2(1,u.a)
v=x.c
r=x.f
v.or(new G.j2(x.e,r),new G.h0(new G.ia(e,w,w)))
r=C.c8F(!1,!1)
v.a.a=!0
x.a=r;++u.a},
$S:73}
C.bMe.prototype={
$0(){return this.a.a++},
$S:0}
C.bMj.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.b
m.$4$bold$color$fontSize(d,!0,$.c_p(),11)
for(x=e.length,w=o.c,v=o.a,u=0;u<x;++u){t=w.$2(u,v.a)
s=e[u]
r=t.c
q=t.f
r.or(new G.j2(t.e,q),new G.h0(new G.ia(s,n,n)))
s=G.pw($.ce4(),!0,n,n,!1,!1,H.uq,n,n,n,H.eJ,!1,n,H.ei,n,0,n,n,H.d2,H.qR)
r.a.a=!0
t.a=s}++v.a
if(f.length===0)m.$4$bold$color$fontSize("None in this period.",!1,$.c_r(),10)
else for(p=0;p<f.length;++p){for(m=(p&1)===0,u=0;u<f[p].length;++u){t=w.$2(u,v.a)
x=f[p][u]
s=t.c
r=t.f
s.or(new G.j2(t.e,r),new G.h0(new G.ia(x,n,n)))
x=m?$.c_o():H.ed
r=$.c_q()
r=r.a
r=G.KT(G.w1(r)||r==="none"?r:H.cN.gic())
r=G.pw(x,!1,new G.Al(H.mH,r),n,!1,!1,H.cN,n,n,n,H.eJ,!1,n,H.ei,n,0,n,n,H.d2,H.qR)
s.a.a=!0
t.a=r}++v.a}o.d.$0()},
$S:1058}
C.bMg.prototype={
$1(d){return"\u20b9"+d.a+"\xd7"+d.b},
$S:394};(function installTearOffs(){var x=a.installStaticTearOff
x(C,"c8O",3,null,["$5$cashierName$customRange","$3","$4$customRange"],["L9",function(d,e,f){return C.L9(d,e,f,null,null)},function(d,e,f,g){return C.L9(d,e,f,null,g)}],1,0)
x(C,"c8N",3,null,["$5$cashierName$customRange","$3","$4$customRange"],["L8",function(d,e,f){return C.L8(d,e,f,null,null)},function(d,e,f,g){return C.L8(d,e,f,null,g)}],1,0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.kh,[C.y8,C.aUu,C.aUv])
w(A.P,[C.a1q,C.XL])
w(A.bQ,[C.ata,C.bOM,C.bLv,C.bLw,C.bLy,C.bLx,C.bLz,C.bLj,C.bLk,C.bLl,C.bLn,C.bLm,C.bMn,C.bMl,C.bMi,C.bMj,C.bMg])
w(A.cY,[C.atb,C.ate,C.atd,C.atg,C.atc,C.ath,C.atf,C.ati,C.bLp,C.bLq,C.bLr,C.bLs,C.bLt,C.bLu,C.bMm,C.bMf,C.bMh])
w(A.cD,[C.bLo,C.bNH,C.bNI,C.bNJ,C.bNF,C.bNG,C.b18,C.b17,C.b19,C.b16,C.b1a,C.b15,C.b10,C.b1_,C.b14,C.b13,C.b12,C.b11,C.bMe])
v(C.Ul,A.Q)
v(C.ad3,A.ag)
v(C.ad2,A.au)
v(C.abA,E.Tq)
v(C.anh,E.P6)
v(C.abz,C.anh)
x(C.anh,E.fo)})()
A.bP(b.typeUniverse,JSON.parse('{"Ul":{"Q":[],"f":[]},"ad3":{"ag":["Ul"]},"ad2":{"au":[],"f":[]},"abz":{"fo":[],"cV":[]}}'))
var y=(function rtii(){var x=A.G
return{c:x("jW"),d:x("a1q"),R:x("fV<v>"),T:x("l<tQ>"),o:x("l<W>"),E:x("l<i<c>>"),t:x("l<i<@>>"),s:x("l<c>"),V:x("l<hU>"),p:x("l<f>"),n:x("l<cV>"),q:x("l<XL>"),l:x("i<d1>"),r:x("i<kV>"),Y:x("i<d_>"),u:x("i<bG>"),e:x("i<dl>"),P:x("i<dC>"),W:x("aA<v,v>"),U:x("bH"),N:x("c"),w:x("qk"),I:x("ql"),j:x("cV"),z:x("@"),S:x("v"),v:x("c_?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b5d=new E.jD(0.09411764705882353,0.13333333333333333,0.20392156862745098)
D.rN=new E.EY(D.b5d,null,null)
D.tH=new E.jX(0,0,0,6)
D.tK=new A.ad(0,9,0,9)
D.a4c=new A.ad(14,6,14,10)
D.AK=new E.jX(6,5,6,5)
D.a5b=new A.ad(9,2,9,2)
D.a9M=new K.rc(45)
D.Ba=new K.rc(48)
D.a9N=new K.rc(50)
D.a9O=new K.rc(62)
D.Bb=new K.rc(66)
D.la=new K.rc(92)
D.a9P=new K.FY(3)
D.aQg=x(["Return","Customer","Against Bill","Item Exchanged","Value"],y.s)
D.aW4=x(["BILL","CUSTOMER","ITEMS","NET","TENDER"],y.s)
D.aX_=x(["Bill","Customer","Items","Net","Tender"],y.s)
D.aZf=x(["RETURN","CUSTOMER","AGAINST BILL","ITEM EXCHANGED","VALUE"],y.s)
D.b_q=x(["RETURN","CUSTOMER","AGAINST BILL","ITEM","AMOUNT","MODE"],y.s)
D.b_z=x(["Return","Customer","Against Bill","Item","Amount","Mode"],y.s)
D.wb=new E.jD(0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.jV=new C.y8(0,"daily")
D.wj=new C.y8(1,"weekly")
D.wk=new C.y8(2,"monthly")
D.di=new C.y8(3,"custom")
D.RQ=new A.fV([4],y.R)
D.b8s=new A.fV([3],y.R)
D.bdI=new A.z(!0,B.J,null,null,null,null,12,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Tj=new E.mL(!0,null,null,null,null,null,F.bu,8.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.b5e=new E.jD(0.6196078431372549,0.6196078431372549,0.6196078431372549)
D.xl=new E.mL(!0,D.b5e,null,null,null,null,F.bu,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.xm=new E.mL(!0,I.fU,null,null,null,null,F.bu,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.bmQ=new C.aUu(0,"start")
D.bmR=new C.aUv(0,"start")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cF6","ce4",()=>C.wT("FF182234"))
x($,"cF1","c_p",()=>C.wT("FF1E3A8A"))
x($,"cF4","c_r",()=>C.wT("FF6B7280"))
x($,"cF_","c_o",()=>C.wT("FFF3F5FA"))
x($,"cF3","c_q",()=>C.wT("FFE6E9F2"))})()};
(a=>{a["HZx1EVbTExSLUbh2C3yr9lXNUb0="]=a.current})($__dart_deferred_initializers__);