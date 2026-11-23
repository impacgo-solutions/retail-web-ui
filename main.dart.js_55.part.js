((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,B={
hG(d){var x
switch(d.a){case 0:x="Daily"
break
case 1:x="Weekly"
break
case 2:x="Monthly"
break
case 3:x="Custom Range"
break
default:x=null}return x},
qb(d,e){var x
if(d==null||d.length===0)return"Walk-in Customer"
x=e.h(0,d)
return x==null?d:x},
bFt(d,e){if(J.dQ(d.ghG(d)))return"\u2014"
return J.b7(d.ghG(d),new B.bFu(e),y.R).aU(0,", ")},
bWf(d){var x,w,v,u,t,s=A.b2("^(\\d{1,2}):(\\d{2})\\s*([AaPp][Mm])$",!0,!1,!1).fQ(C.m.R(d))
if(s==null)return null
x=s.b
w=x[1]
w.toString
v=A.cT(w,null)
w=x[2]
w.toString
u=A.cT(w,null)
t=x[3].toUpperCase()==="PM"
if(t&&v!==12)v+=12
return(!t&&v===12?0:v)*60+u},
cgk(d){var x,w,v=d.ay==="Open",u=v?"ongoing":d.w,t=d.r,s=B.bWf(t),r=new A.bE(Date.now(),0,!1),q=v?A.ie(r)*60+A.n9(r):B.bWf(d.w)
if(s==null||q==null)return t+" - "+u
x=q-s
if(x<0)x+=1440
w=C.t.bq(x,60)
v=""+C.t.aZ(x,60)
return(w>0?""+w+"h "+v+"m":v+"m")+" ("+t+" - "+u+")"},
anB(b6,b7,b8,b9){var x=0,w=A.v(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$anB=A.q(function(c0,c1){if(c0===1)return A.r(c1,w)
for(;;)switch(x){case 0:a7=b6.m(0,$.ai(),y.u)
a8=b6.m(0,$.iI(),y.U)
a9=b6.m(0,$.lG(),y.c)
b0=b6.m(0,$.K8(),y.e)
b1=b6.m(0,$.it(),y.P)
b2=b6.m(0,$.oS(),y.r)
b3=b6.m(0,$.mx(),y.W)
b4=y.R
b5=A.x(b4,b4)
for(u=J.aa(b6.m(0,$.ed(),y.l));u.p();){t=u.gE(u)
b5.l(0,t.a,t.b)}b4=A.x(b4,b4)
for(u=J.aa(b6.m(0,$.fa(),y.Y));u.p();){t=u.gE(u)
b4.l(0,t.a,t.c)}u=b8==null
if(u){t=a7==null?null:a7.a
s=t==null?"Cashier":t}else s=b8
r=new B.bCc(A.kX(A.eL()))
q=new B.bCd(b9)
t=J.bk(a9,new B.bCf(s,b7,q,r))
p=A.N(t,t.$ti.i("C.E"))
t=J.bk(b0,new B.bCe(s,b7,q,r))
o=A.N(t,t.$ti.i("C.E"))
t=A.aj(o).i("az<1>")
n=t.i("C.E")
m=A.N(new A.az(o,new B.bC0(),t),n)
l=A.N(new A.az(o,new B.bC1(),t),n)
t=J.bZ(b1)
n=t.cB(b1,new B.bC2(s))
k=A.N(n,n.$ti.i("C.E"))
n=A.aj(k).i("az<1>")
j=A.N(new A.az(k,new B.bCg(b7,q,r),n),n.i("C.E"))
i=k.length===0?null:C.e.hF(k,new B.bC4(),new B.bC5(k))
h=C.e.bu(j,0,new B.bC6())
g=C.e.bu(j,0,new B.bC7())
f=C.e.bu(j,0,new B.bC8())
e=C.e.bu(j,0,new B.bC9())
d=C.e.bu(j,0,new B.bCa())
a0=C.e.bu(j,0,new B.bCb())
n=b7===D.jv
x=n?3:4
break
case 3:a1=a7==null
a2=a1?null:a7.Q
if(a2==null)a2=""
if(!u){u=A.dm(t.cB(b1,new B.bC3(s)))
a3=u==null?null:u.cy}else a3=a1?null:a7.at
x=a2.length!==0&&a3!=null?5:6
break
case 5:x=7
return A.k(C.eY.yo(a3,a8.gaf(a8),a2),$async$anB)
case 7:a4=c1
g=a4.a
f=a4.e
e=a4.c
d=a4.r
a0=g+e+f+d
case 6:case 4:if(n)a5=i==null?"-":B.cgk(i)
else{a6=j.length
u=a6===1?"":"s"
a5=""+a6+" shift"+u+" worked"}switch(b7.a){case 0:u=I.dU(A.eL())
break
case 1:u="Last 7 days"
break
case 2:u="Last 30 days"
break
case 3:u=b9==null?"Custom range":I.dU(C.e.gM(b9.a.jn().split("T")))+" - "+I.dU(C.e.gM(b9.b.jn().split("T")))
break
default:u=null}t=a8.gb4(a8)
n=a8.gcj(a8)
a1=i==null?"\u2014":i.d+" \xb7 "+i.e
v=new B.a_Q(b7,u,s,t+" \xb7 "+n,a1,a5,h,g,f,e,d,a0,J.U(b2),b3,p,m,l,b5,b4)
x=1
break
case 1:return A.t(v,w)}})
return A.u($async$anB,w)},
xq:function xq(d,e){this.a=d
this.b=e},
a_Q:function a_Q(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aqY:function aqY(){},
aqZ:function aqZ(){},
ar1:function ar1(){},
ar0:function ar0(){},
ar3:function ar3(){},
ar_:function ar_(){},
ar4:function ar4(){},
ar2:function ar2(){},
ar5:function ar5(){},
bFu:function bFu(d){this.a=d},
bCc:function bCc(d){this.a=d},
bCd:function bCd(d){this.a=d},
bCf:function bCf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bCe:function bCe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bCg:function bCg(d,e,f){this.a=d
this.b=e
this.c=f},
bC0:function bC0(){},
bC1:function bC1(){},
bC2:function bC2(d){this.a=d},
bC4:function bC4(){},
bC5:function bC5(d){this.a=d},
bC6:function bC6(){},
bC7:function bC7(){},
bC8:function bC8(){},
bC9:function bC9(){},
bCa:function bCa(){},
bCb:function bCb(){},
bC3:function bC3(d){this.a=d},
JV(d,e,f,g,h){return B.cj0(d,e,f,g,h)},
cj0(d,e,f,g,h){var x=0,w=A.v(y.H),v,u,t,s,r
var $async$JV=A.q(function(i,j){if(i===1)return A.r(j,w)
for(;;)switch(x){case 0:x=3
return A.k(B.anB(e,f,g,h),$async$JV)
case 3:r=j
if(d.e==null){x=1
break}u=B.hG(f)
u=A.bB(u.toLowerCase()," ","_")
t=f===D.d9?r.b:B.hG(f)
s=A.Y(null,!1,null,null,null,null,null,"Close",new B.bEp(d),C.M,C.ar)
A.bS(d,new B.T3(r,null),A.a([s,A.Y(null,!1,null,null,null,A.bO("printer",$.d?C.x:C.v,14),null,"Print",new B.bEq(d),C.M,C.ar),A.Y(null,!1,null,null,null,K.fn,null,"Download PDF",new B.bEr(d,r,"cashier_report_"+u+".pdf"),C.M,C.ah)],y.p),t+" Cashier Report \u2014 PDF Preview",C.de,y.z)
case 1:return A.t(v,w)}})
return A.u($async$JV,w)},
JU(d,e,f,g,h){return B.cj_(d,e,f,g,h)},
cj_(d,e,f,g,h){var x=0,w=A.v(y.H),v,u,t,s
var $async$JU=A.q(function(i,j){if(i===1)return A.r(j,w)
for(;;)switch(x){case 0:x=3
return A.k(B.anB(e,f,g,h),$async$JU)
case 3:s=j
if(d.e==null){x=1
break}u=B.hG(f)
u=A.bB(u.toLowerCase()," ","_")
t=f===D.d9?s.b:B.hG(f)
A.bS(d,new B.abf(s,null),A.a([A.Y(null,!1,null,null,null,null,null,"Close",new B.bEn(d),C.M,C.ar),A.Y(null,!1,null,null,null,K.fn,null,"Download .xlsx",new B.bEo(d,s,"cashier_report_"+u+".xlsx"),C.M,C.hl)],y.p),t+" Cashier Report \u2014 Excel Preview",C.de,y.z)
case 1:return A.t(v,w)}})
return A.u($async$JU,w)},
bWF(d){var x,w,v,u,t,s,r=null,q=d.c,p=d.d,o=d.e,n=A.f(q+" \xb7 "+p+" \xb7 "+o,r,r,r,r,r,A.o($.d?C.Q:C.P,r,r,r,13,C.p).aV(12.5),r,r),m=$.d,l=m?C.aB:C.aH,k=A.bl(m?C.a_:C.a0,C.O,1),j=A.at(14),i=A.f("SUMMARY",r,r,r,r,r,A.o(m?C.Q:C.P,r,r,r,12,C.an),r,r),h=d.r,g=d.w,f=y.o
g=A.a([new A.al("Date",d.b,!1),new A.al("Branch",p,!1),new A.al("Cashier",q,!1),new A.al("Counter",o,!1),new A.al("Shift Timings",d.f,!1),new A.al("Opening Float",A.J(h),!1),new A.al("Cash Sales",A.J(g),!1),new A.al("UPI Sales",A.J(d.x),!1),new A.al("Card Sales",A.J(d.y),!1),new A.al("Wallet Sales",A.J(d.z),!1),new A.al("Expected Drawer Total (Cash)",A.J(h+g),!1),new A.al("Total Sales",A.J(d.Q),!1),new A.al("No. of Bills",""+d.ax.length,!1),new A.al("No. of Returns & Exchanges",""+(d.ay.length+d.ch.length),!1),new A.al("Held Bills",""+d.as,!1)],f)
q=A.f("GST / TAX SUMMARY",r,r,r,r,r,A.o($.d?C.Q:C.P,r,r,r,12,C.an),r,r)
f=A.a([new A.al("Gross Sales (MRP)",A.J(d.gMi()),!1),new A.al("Discounts",A.J(d.gTD()),!1),new A.al("Taxable Value",A.J(d.gxz()-d.gxY()),!1),new A.al("CGST",A.J(d.gSz()),!1),new A.al("SGST",A.J(d.gME()),!1)],f)
if(d.gxf()>0)f.push(new A.al("IGST",A.J(d.gxf()),!1))
f.push(new A.al("Total GST",A.J(d.gxY()),!1))
f.push(new A.al("Net Sales (Bills)",A.J(d.gxz()),!1))
p=A.f("DENOMINATION FINAL COUNT (AFTER CLOSING)",r,r,r,r,r,A.o($.d?C.Q:C.P,r,r,r,12,C.an),r,r)
if(d.gkN().length===0)o=A.f("No cash denominations counted yet.",r,r,r,r,r,A.o($.d?C.X:C.Y,r,1.5,r,13.5,C.p),r,r)
else{o=A.a([],y.p)
for(m=d.gkN(),h=m.length,x=0;x<m.length;m.length===h||(0,A.A)(m),++x){w=m[x]
v=$.d
u=v?C.ao:C.D
t=new A.aK(v?C.a_:C.a0,1,C.O,-1)
s=new A.b8(6,6)
v=v?C.x:C.v
o.push(A.a3(r,A.f("\u20b9"+w.a+" \xd7 "+w.b,r,r,r,r,r,new A.E(!0,v,r,"Inter",r,r,11.8,C.R,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r),C.A,r,r,new A.a6(u,r,new A.c7(t,t,t,t),new A.dg(s,s,s,s),r,r,C.I),r,r,r,r,N.tl,r,r,r))}o=A.d6(C.b2,o,C.bB,8,8)}m=y.p
return A.Q(A.a([n,C.aN,A.a3(r,A.Q(A.a([i,C.bt,new A.ep(g,2,r),C.aN,q,C.bt,new A.ep(f,2,r),C.aN,p,C.bl,o],m),C.E,r,C.r,C.N),C.A,r,r,new A.a6(l,r,k,j,r,r,C.I),r,r,r,r,C.ef,r,r,1/0)],m),C.E,r,C.r,C.N)},
bEp:function bEp(d){this.a=d},
bEq:function bEq(d){this.a=d},
bEr:function bEr(d,e,f){this.a=d
this.b=e
this.c=f},
bEn:function bEn(d){this.a=d},
bEo:function bEo(d,e,f){this.a=d
this.b=e
this.c=f},
T3:function T3(d,e){this.c=d
this.a=e},
abg:function abg(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.x=_.w=_.r=null},
aZy:function aZy(d){this.a=d},
aZx:function aZx(d){this.a=d},
aZz:function aZz(d){this.a=d},
aZw:function aZw(d){this.a=d},
aZA:function aZA(d){this.a=d},
aZv:function aZv(d){this.a=d},
aZq:function aZq(d,e,f){this.a=d
this.b=e
this.c=f},
aZp:function aZp(d,e,f){this.a=d
this.b=e
this.c=f},
aZu:function aZu(d,e,f){this.a=d
this.b=e
this.c=f},
aZt:function aZt(d,e,f){this.a=d
this.b=e
this.c=f},
aZs:function aZs(d,e,f){this.a=d
this.b=e
this.c=f},
aZr:function aZr(d,e,f){this.a=d
this.b=e
this.c=f},
abf:function abf(d,e){this.c=d
this.a=e},
bWg(d){var x=A.bB(d,"\u2013","-")
x=A.bB(x,"\u2014","-")
x=A.bB(x,"\u2019","'")
x=A.bB(x,"\u2018","'")
x=A.bB(x,"\u201c",'"')
x=A.bB(x,"\u201d",'"')
return A.bB(x,"\xd7","x")},
bD1(d){var x=0,w=A.v(y.H),v,u,t
var $async$bD1=A.q(function(e,f){if(e===1)return A.r(f,w)
for(;;)switch(x){case 0:t=E.atr()
t.GR(E.aD5(new B.bD2(d,new B.bD3(),new B.bD4()),null,F.ps))
x=2
return A.k(t.iJ(0),$async$bD1)
case 2:v=f
u=B.hG(d.a)
M.Do("cashier_report_"+A.bB(u.toLowerCase()," ","_")+".pdf",v,"application/pdf")
return A.t(null,w)}})
return A.u($async$bD1,w)},
bWN(d,e){var x=null,w=d?$.bNP():H.e_
return G.p6(w,e,G.KT($.bNR(),H.ma),x,!1,!1,H.cB,x,x,x,H.ew,!1,x,H.e7,x,0,x,x,H.cU,H.qg)},
chL(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="Cashier Report",d={},a0=G.avw(new A.zr().bn("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")),a1=a0.M4()
a1.toString
a0.Wk(a1,e)
a0.q2(e)
x=a0.x.h(0,e)
x.ld(0,26)
x.ld(1,22)
x.ld(2,34)
x.ld(3,16)
x.ld(4,18)
x.ld(5,18)
d.a=0
w=new B.bCX(x)
v=new B.bD_(d,x,w)
u=new B.bCZ(d,w)
t=new B.bCW(d)
s=new B.bD0(d,v,w,t)
a1=a2.a
v.$3$bold$fontSize(B.hG(a1)+" Cashier Report",!0,16)
r=a2.c
q=a2.d
p=a2.e
v.$4$bold$color$fontSize(r+" \xb7 "+q+" \xb7 "+p,!1,$.bNS(),10)
t.$0()
o=$.bNQ()
v.$3$bold$color("SUMMARY",!0,o)
u.$2("Date",a2.b)
u.$2("Branch",q)
u.$2("Cashier",r)
u.$2("Counter",p)
u.$2("Shift Timings",a2.f)
p=a2.r
u.$2("Opening Float",A.J(p))
r=a2.w
u.$2("Cash Sales",A.J(r))
u.$2("UPI Sales",A.J(a2.x))
u.$2("Card Sales",A.J(a2.y))
u.$2("Wallet Sales",A.J(a2.z))
u.$2("Expected Drawer Total (Cash)",A.J(p+r))
u.$2("Total Sales",A.J(a2.Q))
r=a2.ax
u.$2("No. of Bills",""+r.length)
p=a2.ay
q=a2.ch
u.$2("No. of Returns & Exchanges",""+(p.length+q.length))
u.$2("Held Bills",""+a2.as)
if(a2.gkN().length!==0){n=a2.gkN()
u.$2("Denomination Final Count",new A.an(n,new B.bCY(),A.aj(n).i("an<1,c>")).aU(0,"  "))}t.$0()
v.$3$bold$color("GST / TAX SUMMARY",!0,o)
u.$2("Gross Sales (MRP)",A.J(a2.gMi()))
u.$2("Discounts",A.J(a2.gTD()))
u.$2("Taxable Value",A.J(a2.gxz()-a2.gxY()))
u.$2("CGST",A.J(a2.gSz()))
u.$2("SGST",A.J(a2.gME()))
if(a2.gxf()>0)u.$2("IGST",A.J(a2.gxf()))
u.$2("Total GST",A.J(a2.gxY()))
u.$2("Net Sales (Bills)",A.J(a2.gxz()))
t.$0()
o=r.length
n=y.E
m=A.a([],n)
for(l=r.length,k=a2.CW,j=a2.cx,i=y.s,h=0;h<r.length;r.length===l||(0,A.A)(r),++h){g=r[h]
m.push(A.a([g.gaf(g),B.qb(g.gfd(),k),B.bFt(g,j),A.J(g.gh8()),g.gfB(g)],i))}s.$3("BILLS ("+o+")",D.aUa,m)
r=p.length
o=A.a([],n)
for(m=p.length,h=0;h<p.length;p.length===m||(0,A.A)(p),++h){f=p[h]
o.push(A.a([f.a,B.qb(f.d,k),f.b,f.f,A.J(f.w),f.y],i))}s.$3("RETURNS ("+r+")",D.aWn,o)
r=q.length
n=A.a([],n)
for(p=q.length,h=0;h<q.length;q.length===p||(0,A.A)(q),++h){f=q[h]
n.push(A.a([f.a,B.qb(f.d,k),f.b,f.f,A.J(f.w)],i))}s.$3("EXCHANGES ("+r+")",D.aOu,n)
r=a0.TR()
r.toString
a1=B.hG(a1)
M.Do("cashier_report_"+A.bB(a1.toLowerCase()," ","_")+".xlsx",new Uint8Array(A.ex(r)),"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")},
bD3:function bD3(){},
bD4:function bD4(){},
bD2:function bD2(d,e,f){this.a=d
this.b=e
this.c=f},
bCX:function bCX(d){this.a=d},
bD_:function bD_(d,e,f){this.a=d
this.b=e
this.c=f},
bCZ:function bCZ(d,e){this.a=d
this.b=e},
bCW:function bCW(d){this.a=d},
bD0:function bD0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bCY:function bCY(){},
bKB(d,e){var x=new E.zv(d,e,F.r3)
return new E.a8u(x,x,x,x,x,x)},
tC:function tC(d){this.a=d},
Mu:function Mu(d){this.a=d},
bTH(d,e,f){return new B.a9M(f,e,new B.a9N(),d)},
aRN:function aRN(d,e){this.a=d
this.b=e},
aRO:function aRO(d,e){this.a=d
this.b=e},
Wi:function Wi(d,e,f){this.a=d
this.b=e
this.c=f},
a9N:function a9N(){this.b=this.a=0},
a9M:function a9M(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
alm:function alm(){},
wi(d){return new G.T(d,null,null)}},D,E,F,O,M,N,G,H
J=c[1]
A=c[0]
C=c[2]
I=c[92]
K=c[179]
L=c[104]
B=a.updateHolder(c[54],B)
D=c[181]
E=c[60]
F=c[163]
O=c[161]
M=c[67]
N=c[150]
G=c[61]
H=c[182]
B.xq.prototype={
P(){return"ReportPeriod."+this.b}}
B.a_Q.prototype={
gkN(){var x=J.rZ(this.at)
x=x.cB(x,new B.aqY()).aE(0)
C.e.dI(x,new B.aqZ())
return x},
gMi(){return C.e.bu(this.ax,0,new B.ar1())},
gTD(){return C.e.bu(this.ax,0,new B.ar0())},
gxz(){return C.e.bu(this.ax,0,new B.ar3())},
gSz(){return C.e.bu(this.ax,0,new B.ar_())},
gME(){return C.e.bu(this.ax,0,new B.ar4())},
gxf(){return C.e.bu(this.ax,0,new B.ar2())},
gxY(){return C.e.bu(this.ax,0,new B.ar5())}}
B.T3.prototype={
W(){return new B.abg()}}
B.abg.prototype={
I(d){var x,w,v,u,t,s=this,r=null,q=s.a.c,p=B.bWF(q),o=A.f("DETAILS",r,r,r,r,r,A.o($.d?C.Q:C.P,r,r,r,12,C.an),r,r),n=q.ax,m=n.length,l=s.d
if(m===0)n=A.a([A.f("No bills in this period.",r,r,r,r,r,A.o($.d?C.X:C.Y,r,1.5,r,13.5,C.p),r,r)],y.p)
else{x=A.a([],y.p)
for(w=n.length,v=0;v<n.length;n.length===w||(0,A.A)(n),++v)x.push(s.aqh(n[v]))
n=x}n=s.Oz(m,new B.aZy(s),l,n,"Bills")
l=q.ay
m=l.length
x=s.e
if(m===0)l=A.a([A.f("No returns in this period.",r,r,r,r,r,A.o($.d?C.X:C.Y,r,1.5,r,13.5,C.p),r,r)],y.p)
else{w=A.a([],y.p)
for(u=l.length,v=0;v<l.length;l.length===u||(0,A.A)(l),++v)w.push(s.aFY(l[v]))
l=w}l=s.Oz(m,new B.aZz(s),x,l,"Returns")
x=q.ch
m=x.length
w=s.f
if(m===0)x=A.a([A.f("No exchanges in this period.",r,r,r,r,r,A.o($.d?C.X:C.Y,r,1.5,r,13.5,C.p),r,r)],y.p)
else{u=A.a([],y.p)
for(t=x.length,v=0;v<x.length;x.length===t||(0,A.A)(x),++v)u.push(s.au2(x[v]))
x=u}return A.Q(A.a([p,L.cS,o,C.bt,n,C.bl,l,C.bl,s.Oz(m,new B.aZA(s),w,x,"Exchanges")],y.p),C.E,r,C.r,C.N)},
Oz(d,e,f,g,h){var x,w=null,v=$.d,u=A.bl(v?C.a_:C.a0,C.O,1),t=A.at(8),s=v?C.aB:C.aH,r=f?0.5:0,q=y.p
r=A.ac(A.a([A.bOo(A.bO("chevdown",v?C.X:C.Y,14),C.f5,r),C.aV,A.f(h,w,w,w,w,w,A.o(w,w,w,w,11.8,C.R).aV(13),w,w)],q),C.F,C.r,C.z,0)
x=A.at(20)
q=A.a([A.bA(A.bs(w,A.a3(w,A.ac(A.a([r,A.a3(w,A.f(""+d,w,w,w,w,w,D.b8T,w,w),C.A,w,w,new A.a6(C.a6,w,w,x,w,w,C.I),w,w,w,w,D.a4r,w,w,w)],q),C.F,C.bL,C.z,0),C.A,s,w,w,w,w,w,w,O.iQ,w,w,w),C.ae,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w),C.ak,w,w,w,w)],q)
if(f)q.push(new A.af(D.a3s,A.Q(g,C.E,w,C.r,C.N),w))
return A.a3(w,A.Q(q,C.E,w,C.r,C.N),C.c_,w,w,new A.a6(w,w,u,t,w,w,C.I),w,w,w,w,w,w,w,w)},
aqh(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.r===d.gaf(d),n=$.d?C.a_:C.a0,m=A.f(d.gaf(d)+" \xb7 "+B.qb(d.gfd(),q.a.c.CW),p,p,p,p,p,A.o(p,p,p,p,11.8,C.R),p,p),l=B.bFt(d,q.a.c.cx)
l=A.f(l,p,2,C.ab,p,p,A.o($.d?C.Q:C.P,p,p,p,11,C.p),p,p)
x=d.gdX(d)
w=d.gfB(d)
v=y.p
v=A.a([A.bA(A.bs(p,A.a3(p,A.ac(A.a([A.aS(A.Q(A.a([m,C.cZ,l,C.cZ,A.f(x+" \xb7 "+w,p,p,p,p,p,A.o($.d?C.Q:C.P,p,p,p,13,C.p).aV(11),p,p)],v),C.E,p,C.r,C.N),1),C.aM,A.f(A.J(d.gh8()),p,p,p,p,p,A.o(p,p,p,p,11.8,C.R),p,p)],v),C.E,C.r,C.z,0),C.A,p,p,new A.a6(p,p,new A.c7(new A.aK(n,1,C.O,-1),C.S,C.S,C.S),p,p,p,C.I),p,p,p,p,D.tc,p,p,p),C.ae,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.aZq(q,o,d),p,p,p),C.ak,p,p,p,p)],v)
if(o){n=$.d?C.aB:C.aH
m=A.at(6)
l=d.ge6()
x=A.J(d.gMh())
w=A.J(d.gIq())
u=A.J(d.gL6())
t=A.J(d.gh8())
s=d.gfB(d)
r=d.gaI(d)
v.push(A.a3(p,A.f(""+l+" items \xb7 MRP "+x+" \xb7 Discount "+w+" \xb7 GST "+u+" \xb7 Net "+t+" \xb7 Paid via "+s+", "+r+".",p,p,p,p,p,A.o($.d?C.Q:C.P,p,p,p,13,C.p).aV(11.5),p,p),C.A,p,p,new A.a6(n,p,p,m,p,p,C.I),p,p,p,F.fZ,C.f7,p,p,1/0))}return A.Q(v,C.F,p,C.r,C.N)},
aFY(d){var x,w,v,u,t=null,s=d.a,r=this.w===s,q=$.d?C.a_:C.a0
s=A.f(s+" \xb7 "+B.qb(d.d,this.a.c.CW),t,t,t,t,t,A.o(t,t,t,t,11.8,C.R),t,t)
x=d.f
w=A.f(x,t,2,C.ab,t,t,A.o($.d?C.Q:C.P,t,t,t,11,C.p),t,t)
v=d.y
u=y.p
u=A.a([A.bA(A.bs(t,A.a3(t,A.ac(A.a([A.aS(A.Q(A.a([s,C.cZ,w,C.cZ,A.f("against "+d.b+" \xb7 "+v,t,t,t,t,t,A.o($.d?C.Q:C.P,t,t,t,13,C.p).aV(11),t,t)],u),C.E,t,C.r,C.N),1),C.aM,A.f(A.J(d.w),t,t,t,t,t,A.o(t,t,t,t,11.8,C.R),t,t)],u),C.E,C.r,C.z,0),C.A,t,t,new A.a6(t,t,new A.c7(new A.aK(q,1,C.O,-1),C.S,C.S,C.S),t,t,t,C.I),t,t,t,t,D.tc,t,t,t),C.ae,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.aZu(this,r,d),t,t,t),C.ak,t,t,t,t)],u)
if(r){s=$.d
q=s?C.aB:C.aH
w=A.at(6)
u.push(A.a3(t,A.f(x+" \xd7 "+d.r+" \u2014 Reason: "+d.x+". Refunded as "+v+".",t,t,t,t,t,A.o(s?C.Q:C.P,t,t,t,13,C.p).aV(11.5),t,t),C.A,t,t,new A.a6(q,t,t,w,t,t,C.I),t,t,t,F.fZ,C.f7,t,t,1/0))}return A.Q(u,C.F,t,C.r,C.N)},
au2(d){var x,w,v=null,u=d.a,t=this.x===u,s=$.d?C.a_:C.a0
u=A.f(u+" \xb7 "+B.qb(d.d,this.a.c.CW),v,v,v,v,v,A.o(v,v,v,v,11.8,C.R),v,v)
x=A.f(d.y,v,2,C.ab,v,v,A.o($.d?C.Q:C.P,v,v,v,11,C.p),v,v)
w=y.p
w=A.a([A.bA(A.bs(v,A.a3(v,A.ac(A.a([A.aS(A.Q(A.a([u,C.cZ,x,C.cZ,A.f("against "+d.b,v,v,v,v,v,A.o($.d?C.Q:C.P,v,v,v,13,C.p).aV(11),v,v)],w),C.E,v,C.r,C.N),1),C.aM,A.f(A.J(d.w),v,v,v,v,v,A.o(v,v,v,v,11.8,C.R),v,v)],w),C.E,C.r,C.z,0),C.A,v,v,new A.a6(v,v,new A.c7(new A.aK(s,1,C.O,-1),C.S,C.S,C.S),v,v,v,C.I),v,v,v,v,D.tc,v,v,v),C.ae,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.aZs(this,t,d),v,v,v),C.ak,v,v,v,v)],w)
if(t){u=$.d
s=u?C.aB:C.aH
x=A.at(6)
w.push(A.a3(v,A.f(d.f+" \xd7 "+d.r+" \u2014 Reason: "+d.x+". Recorded as an exchange.",v,v,v,v,v,A.o(u?C.Q:C.P,v,v,v,13,C.p).aV(11.5),v,v),C.A,v,v,new A.a6(s,v,v,x,v,v,C.I),v,v,v,F.fZ,C.f7,v,v,1/0))}return A.Q(w,C.F,v,C.r,C.N)}}
B.abf.prototype={
I(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c,j=B.bWF(k),i=k.ax,h=i.length
h=A.f("BILLS ("+h+")",l,l,l,l,l,A.o($.d?C.Q:C.P,l,l,l,12,C.an),l,l)
x=y.E
w=A.a([],x)
for(v=i.length,u=k.CW,t=k.cx,s=y.s,r=0;r<i.length;i.length===v||(0,A.A)(i),++r){q=i[r]
w.push(A.a([q.gaf(q),B.qb(q.gfd(),u),B.bFt(q,t),A.J(q.gh8()),q.gfB(q)],s))}i=m.OS(D.aTy,D.b3Z,w)
w=k.ay
v=w.length
v=A.f("RETURNS ("+v+")",l,l,l,l,l,A.o($.d?C.Q:C.P,l,l,l,12,C.an),l,l)
t=A.a([],x)
for(p=w.length,r=0;r<w.length;w.length===p||(0,A.A)(w),++r){o=w[r]
t.push(A.a([o.a,B.qb(o.d,u),o.b,o.f,A.J(o.w),o.y],s))}w=m.OS(D.aWh,D.Rj,t)
t=k.ch
p=t.length
p=A.f("EXCHANGES ("+p+")",l,l,l,l,l,A.o($.d?C.Q:C.P,l,l,l,12,C.an),l,l)
x=A.a([],x)
for(n=t.length,r=0;r<t.length;t.length===n||(0,A.A)(t),++r){o=t[r]
x.push(A.a([o.a,B.qb(o.d,u),o.b,o.f,A.J(o.w)],s))}return A.Q(A.a([j,L.cS,h,C.bl,i,C.e6,v,C.bl,w,C.e6,p,C.bl,m.OS(D.aVt,D.Rj,x)],y.p),C.E,l,C.r,C.N)},
OS(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=null
if(f.length===0){x=$.d
w=A.bl(x?C.a_:C.a0,C.O,1)
v=A.at(8)
return A.a3(C.ag,A.f("Nothing to show for this period.",l,l,l,l,l,A.o(x?C.X:C.Y,l,1.5,l,13.5,C.p),l,l),C.A,l,l,new A.a6(l,l,w,v,l,l,C.I),l,l,l,l,N.mU,l,l,l)}x=A.bl($.d?C.a_:C.a0,C.O,1)
w=A.at(8)
v=A.x(y.S,y.w)
for(u=d.length,t=0;t<u;++t)v.l(0,t,K.hq)
s=y.p
r=A.a([],s)
for(t=0;t<u;++t){q=d[t]
p=$.d?C.X:C.Y
p=new A.E(!0,p,l,"Inter",l,l,12,C.R,l,0.3,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l).aD(C.D)
r.push(new A.af(C.hE,A.f(q,l,l,l,l,l,p,e.q(0,t)?C.c7:C.cK,l),l))}u=A.a([new I.hI(K.mc,r)],y.T)
for(o=0;o<f.length;++o){if((o&1)===0)r=$.d?C.ao:C.D
else r=$.d?C.aB:C.aH
q=A.a([],s)
for(t=0;p=f[o],t<p.length;++t){p=p[t]
n=$.d?C.x:C.v
m=e.q(0,t)?C.c7:C.cK
q.push(new A.af(C.hE,A.f(p,l,l,l,l,l,new A.E(!0,n,l,"Inter",l,l,13.5,C.p,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),m,l),l))}u.push(new I.hI(new A.a6(r,l,l,l,l,l,C.I),q))}return A.a3(l,I.Rb(u,v,K.lH),C.c_,l,l,new A.a6(l,l,x,w,l,l,C.I),l,l,l,l,l,l,l,l)}}
B.tC.prototype={
V1(d,e,f){return new E.Lv(this.a,0)}}
B.Mu.prototype={
V1(d,e,f){return new E.Lv(0,this.a)}}
B.aRN.prototype={
P(){return"WrapAlignment."+this.b}}
B.aRO.prototype={
P(){return"WrapCrossAlignment."+this.b}}
B.Wi.prototype={}
B.a9N.prototype={
ed(d){this.a=d.a
this.b=d.b},
j1(d){var x=new B.a9N()
x.a=this.a
x.b=this.b
return x},
j(d){return A.I(this).j(0)+" first:"+this.a+" last:"+this.b}}
B.a9M.prototype={
gmx(){return!0},
gr8(){return this.z.b<this.b.length},
a2p(d){switch(0){case 0:return d.a.c}},
a2d(d){switch(0){case 0:return d.a.d}},
avq(d,e){switch(0){case 0:return new E.jD(d,e)}},
av_(d,e,f){var x=e-f
switch(0){case 0:return d?x:0}},
fg(b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.b,b2=b1.length
if(b2===0||b0.z.a>=b2){b0.a=new E.fN(0,0,C.t.aN(0,b4.a,b4.b),C.t.aN(0,b4.c,b4.d))
return}x=E.LY(b3)
switch(0){case 0:w=b4.b
v=new E.fU(0,w,0,1/0)
u=x===F.q2
break}t=A.a([],y.q)
s=A.x(y.j,y.S)
for(b2=b0.z,r=C.e.fW(b1,b2.a),q=r.length,p=b0.f,o=b0.w,n=0,m=0,l=0,k=0,j=0,i=0;i<r.length;r.length===q||(0,A.A)(r),++i){h=r[i]
h.fg(b3,v,!0)
g=b0.a2p(h)
g.toString
f=b0.a2d(h)
f.toString
if(j>0&&l+p+g>w){n=Math.max(n,l)
m+=k
if(t.length!==0)m+=o
t.push(new B.Wi(l,k,j))
l=0
k=0
j=0}l+=g
if(j>0)l+=p
k=Math.max(k,f);++j
s.l(0,h,t.length)}if(j>0){n=Math.max(n,l)
m+=k
if(t.length!==0)m+=o
t.push(new B.Wi(l,k,j))}e=t.length
switch(0){case 0:r=b4.ba(new E.jD(n,m))
d=r.a
a0=r.b
b0.a=new E.fN(0,0,d,a0)
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
for(r=C.e.fW(b1,a1),g=r.length,i=0;i<r.length;r.length===g||(0,A.A)(r),++i){h=r[i]
if(s.h(0,h)!==a3)break;++a1
a7=b0.a2p(h)
f=b0.a2d(h)
f.toString
a8=b0.av_(!0,k,f)
if(u){a7.toString
a5-=a7}f=b0.avq(a5,a2+a8)
a9=h.a
h.a=new E.fN(f.a,f.b,a9.c,a9.d)
if(u)a5-=p
else{a7.toString
a5+=a7+p}}a2-=o
a2=a2
b2.b=a1}},
fT(d){var x,w,v,u,t,s=this
s.lj(d)
x=d.b
x.fI()
w=A.fm()
v=s.a
w.dG(v.a,v.b,0,1)
x.rQ(0,w)
for(v=s.z,v=C.e.bY(s.b,v.a,v.b),u=v.length,t=0;t<v.length;v.length===u||(0,A.A)(v),++t)v[t].fT(d)
x.rs(0)},
rt(d,e){var x=this.z
x.a=e.a
x.b=e.b
x.a=e.b},
fI(){return this.z}}
B.alm.prototype={}
var z=a.updateTypes(["B(d5)","ar<~>(a1,v_,xq{cashierName:c?,customRange:fG<bE>?})","dB(c,c)","dB(c,j<c>,j<j<c>>{columnWidths:aF<p,rg>?})","j<dB>(nM)","fF(p,p)","~(c{bold!B,color:T?,fontSize:p})"])
B.aqY.prototype={
$1(d){return d.b>0},
$S:390}
B.aqZ.prototype={
$2(d,e){return C.t.bm(e.a,d.a)},
$S:391}
B.ar1.prototype={
$2(d,e){return d+e.gMh()},
$S:53}
B.ar0.prototype={
$2(d,e){return d+e.gIq()},
$S:53}
B.ar3.prototype={
$2(d,e){return d+e.gh8()},
$S:53}
B.ar_.prototype={
$2(d,e){return d+e.gaam()},
$S:53}
B.ar4.prototype={
$2(d,e){return d+e.gYx()},
$S:53}
B.ar2.prototype={
$2(d,e){return d+e.gadf()},
$S:53}
B.ar5.prototype={
$2(d,e){return d+e.gL6()},
$S:53}
B.bFu.prototype={
$1(d){var x=this.a.h(0,d.gd1())
return x==null?d.gd1():x},
$S:1016}
B.bCc.prototype={
$1(d){var x,w,v
try{x=A.kX(d)
w=C.t.bq(this.a.e2(x).a,864e8)
return w}catch(v){return null}},
$S:216}
B.bCd.prototype={
$1(d){var x,w,v,u,t,s=this.a
if(s==null)return!1
try{x=A.kX(d)
u=s.a
w=A.cK(A.bv(u),A.bq(u),A.dj(u),0,0,0,0)
s=s.b
v=A.cK(A.bv(s),A.bq(s),A.dj(s),0,0,0,0)
s=!x.lU(w)&&!x.nR(v)
return s}catch(t){return!1}},
$S:12}
B.bCf.prototype={
$1(d){var x,w,v,u=this
if(d.gjB()!==u.a)return!1
x=u.b
if(x===D.d9)return u.c.$1(C.e.gM(d.gdX(d).split(" ")))
if(C.m.q(d.gdX(d),"now")||C.m.b9(d.gdX(d),A.eL()))return!0
w=u.d.$1(C.e.gM(d.gdX(d).split(" ")))
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
$S:38}
B.bCe.prototype={
$1(d){var x,w,v,u=this
if(!C.m.b9(d.Q,u.a))return!1
x=u.b
if(x===D.d9)return u.c.$1(C.e.gM(d.e.split(" ")))
w=d.e
if(C.m.q(w,"now")||C.m.b9(w,A.eL()))return!0
v=u.d.$1(C.e.gM(w.split(" ")))
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
B.bCg.prototype={
$1(d){var x,w,v=this.a
if(v===D.d9)return this.b.$1(d.f)
if(d.ay==="Open"||d.f===A.eL())return!0
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
$S:33}
B.bC0.prototype={
$1(d){return d.z==="Refunded"},
$S:z+0}
B.bC1.prototype={
$1(d){return d.z==="Exchanged"},
$S:z+0}
B.bC2.prototype={
$1(d){return d.b===this.a},
$S:33}
B.bC4.prototype={
$1(d){return d.ay==="Open"},
$S:33}
B.bC5.prototype={
$0(){return C.e.gM(this.a)},
$S:133}
B.bC6.prototype={
$2(d,e){return d+e.x},
$S:51}
B.bC7.prototype={
$2(d,e){return d+e.z},
$S:51}
B.bC8.prototype={
$2(d,e){return d+e.as},
$S:51}
B.bC9.prototype={
$2(d,e){return d+e.Q},
$S:51}
B.bCa.prototype={
$2(d,e){return d+e.at},
$S:51}
B.bCb.prototype={
$2(d,e){return d+e.y},
$S:51}
B.bC3.prototype={
$1(d){return d.b===this.a},
$S:33}
B.bEp.prototype={
$0(){return A.ao(this.a,!0).X()},
$S:0}
B.bEq.prototype={
$0(){return A.M(this.a,"Sent to Microsoft Print to PDF",null)},
$S:0}
B.bEr.prototype={
$0(){var x=0,w=A.v(y.H),v=this,u
var $async$$0=A.q(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:u=v.a
A.ao(u,!0).X()
x=2
return A.k(B.bD1(v.b),$async$$0)
case 2:if(u.e!=null)A.M(u,"Downloaded "+v.c,null)
return A.t(null,w)}})
return A.u($async$$0,w)},
$S:3}
B.bEn.prototype={
$0(){return A.ao(this.a,!0).X()},
$S:0}
B.bEo.prototype={
$0(){var x=this.a
A.ao(x,!0).X()
B.chL(this.b)
A.M(x,"Downloaded "+this.c,null)},
$S:0}
B.aZy.prototype={
$0(){var x=this.a
return x.B(new B.aZx(x))},
$S:0}
B.aZx.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.aZz.prototype={
$0(){var x=this.a
return x.B(new B.aZw(x))},
$S:0}
B.aZw.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
B.aZA.prototype={
$0(){var x=this.a
return x.B(new B.aZv(x))},
$S:0}
B.aZv.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.aZq.prototype={
$0(){var x=this.a
return x.B(new B.aZp(x,this.b,this.c))},
$S:0}
B.aZp.prototype={
$0(){if(this.b)var x=null
else{x=this.c
x=x.gaf(x)}return this.a.r=x},
$S:0}
B.aZu.prototype={
$0(){var x=this.a
return x.B(new B.aZt(x,this.b,this.c))},
$S:0}
B.aZt.prototype={
$0(){var x=this.b?null:this.c.a
return this.a.w=x},
$S:0}
B.aZs.prototype={
$0(){var x=this.a
return x.B(new B.aZr(x,this.b,this.c))},
$S:0}
B.aZr.prototype={
$0(){var x=this.b?null:this.c.a
return this.a.x=x},
$S:0}
B.bD3.prototype={
$2(d,e){var x=null
return new E.u5(D.tb,E.rb(A.a([E.ea(d,E.fQ(x,F.fC,x,x,x,x,x,x,x,F.bA,x,x,9,x,x,x,!0,x,x,x,x),x,x),E.ea(B.bWg(e),E.fQ(x,x,x,x,x,x,x,x,x,F.bA,x,x,10,x,F.bN,x,!0,x,x,x,x),x,x)],y.n),F.kl,F.jh))},
$S:z+2}
B.bD4.prototype={
$4$columnWidths(d,e,f,g){var x,w,v,u,t,s=null,r=A.a([new E.dN(s,14,s),E.ea(d,E.fQ(s,F.h9,s,s,s,s,s,s,s,F.bA,s,s,10,s,F.bN,s,!0,s,s,s,s),s,s),new E.dN(s,6,s)],y.n)
if(f.length===0)r.push(E.ea("None in this period.",D.wO,s,s))
else{x=A.a([],y.t)
for(w=f.length,v=0;v<f.length;f.length===w||(0,A.A)(f),++v){u=[]
for(t=C.e.gU(f[v]);t.p();)u.push(B.bWg(t.gE(0)))
x.push(u)}w=E.fQ(s,F.pq,s,s,s,s,s,s,s,F.bA,s,s,8.5,s,F.bN,s,!0,s,s,s,s)
r.push(E.aOS(B.bKB(D.vG,0.5),s,D.A8,D.SD,g,x,D.r8,w,e))}return E.mD(r,F.cP)},
$3(d,e,f){return this.$4$columnWidths(d,e,f,null)},
$S:z+3}
B.bD2.prototype={
$1(a3){var x,w,v,u,t,s,r,q=null,p="\u20b9",o="Rs ",n=this.a,m=E.ea(B.hG(n.a)+" Cashier Report",E.fQ(q,q,q,q,q,q,q,q,q,F.bA,q,q,18,q,F.bN,q,!0,q,q,q,q),q,q),l=n.c,k=n.d,j=n.e,i=E.ea(l+" \xb7 "+k+" \xb7 "+j,D.wP,q,q),h=E.ea("SUMMARY",E.fQ(q,F.h9,q,q,q,q,q,q,q,F.bA,q,q,10,q,F.bN,q,!0,q,q,q,q),q,q),g=this.b,f=y.n,e=n.r,d=n.w,a0=n.ax,a1=n.ay,a2=n.ch
d=E.rb(A.a([E.tw(E.mD(A.a([g.$2("Date",n.b),g.$2("Branch",k),g.$2("Cashier",l),g.$2("Counter",j),g.$2("Shift Timings",n.f),g.$2("Held Bills",""+n.as)],f),F.cP)),new E.dN(24,q,q),E.tw(E.mD(A.a([g.$2("Opening Float",C.m.cU(A.J(e),p,o)),g.$2("Cash Sales",C.m.cU(A.J(d),p,o)),g.$2("UPI Sales",C.m.cU(A.J(n.x),p,o)),g.$2("Card Sales",C.m.cU(A.J(n.y),p,o)),g.$2("Wallet Sales",C.m.cU(A.J(n.z),p,o)),g.$2("Expected Drawer Total (Cash)",C.m.cU(A.J(e+d),p,o)),g.$2("Total Sales",C.m.cU(A.J(n.Q),p,o)),g.$2("No. of Bills",""+a0.length),g.$2("No. of Returns & Exchanges",""+(a1.length+a2.length))],f),F.cP))],f),F.cP,F.jg)
e=E.ea("GST / TAX SUMMARY",E.fQ(q,F.h9,q,q,q,q,q,q,q,F.bA,q,q,10,q,F.bN,q,!0,q,q,q,q),q,q)
j=E.tw(E.mD(A.a([g.$2("Gross Sales (MRP)",C.m.cU(A.J(n.gMi()),p,o)),g.$2("Discounts",C.m.cU(A.J(n.gTD()),p,o)),g.$2("Taxable Value",C.m.cU(A.J(n.gxz()-n.gxY()),p,o))],f),F.cP))
l=A.a([g.$2("CGST",C.m.cU(A.J(n.gSz()),p,o)),g.$2("SGST",C.m.cU(A.J(n.gME()),p,o))],f)
if(n.gxf()>0)l.push(g.$2("IGST",C.m.cU(A.J(n.gxf()),p,o)))
l.push(g.$2("Total GST",C.m.cU(A.J(n.gxY()),p,o)))
l.push(g.$2("Net Sales (Bills)",C.m.cU(A.J(n.gxz()),p,o)))
m=A.a([m,new E.dN(q,2,q),i,new E.dN(q,14,q),h,new E.dN(q,8,q),d,new E.dN(q,6,q),e,new E.dN(q,8,q),E.rb(A.a([j,new E.dN(24,q,q),E.tw(E.mD(l,F.cP))],f),F.cP,F.jg)],f)
if(n.gkN().length!==0){l=E.ea("DENOMINATION FINAL COUNT (AFTER CLOSING)",E.fQ(q,F.fC,q,q,q,q,q,q,q,F.bA,q,q,8.5,q,F.bN,q,!0,q,q,q,q),q,q)
k=A.a([],f)
for(j=n.gkN(),i=j.length,x=0;x<j.length;j.length===i||(0,A.A)(j),++x){w=j[x]
k.push(E.ea("Rs "+w.a+" x "+w.b,F.lL,q,q))}C.e.A(m,A.a([new E.dN(q,6,q),l,new E.dN(q,4,q),B.bTH(k,4,8)],f))}l=this.c
k=a0.length
j=y.s
i=A.a(["Bill","Customer","Items","Net","Tender"],j)
h=y.E
g=A.a([],h)
for(f=a0.length,e=n.CW,n=n.cx,x=0;x<a0.length;a0.length===f||(0,A.A)(a0),++x){v=a0[x]
d=v.gaf(v)
u=B.qb(v.gfd(),e)
t=B.bFt(v,n)
s=A.J(v.gh8())
g.push(A.a([d,u,t,A.mt(s,p,o,0),v.gfB(v)],j))}n=y.S
f=y.I
m.push(l.$4$columnWidths("BILLS ("+k+")",i,g,A.av([0,D.kF,1,D.AA,2,D.a95,3,D.Az,4,D.a93],n,f)))
g=a1.length
i=A.a(["Return","Customer","Against Bill","Item","Amount","Mode"],j)
k=A.a([],h)
for(d=a1.length,x=0;x<a1.length;a1.length===d||(0,A.A)(a1),++x){r=a1[x]
a0=B.qb(r.d,e)
u=A.J(r.w)
k.push(A.a([r.a,a0,r.b,r.f,A.mt(u,p,o,0),r.y],j))}m.push(l.$4$columnWidths("RETURNS ("+g+")",i,k,A.av([0,D.kF,1,D.a94,2,D.kF,3,D.tY,4,D.a92,5,D.tY],n,f)))
k=a2.length
i=A.a(["Return","Customer","Against Bill","Item Exchanged","Value"],j)
h=A.a([],h)
for(g=a2.length,x=0;x<a2.length;a2.length===g||(0,A.A)(a2),++x){r=a2[x]
d=B.qb(r.d,e)
a0=A.J(r.w)
h.push(A.a([r.a,d,r.b,r.f,A.mt(a0,p,o,0)],j))}m.push(l.$4$columnWidths("EXCHANGES ("+k+")",i,h,A.av([0,D.kF,1,D.AA,2,D.kF,3,D.tY,4,D.Az],n,f)))
return m},
$S:z+4}
B.bCX.prototype={
$2(d,e){return this.a.aak(new G.iM(e,d))},
$S:z+5}
B.bD_.prototype={
$4$bold$color$fontSize(d,e,f,g){var x,w,v=null,u=this.a,t=u.a
this.b.aeh(new G.iM(t,0),new G.iM(t,5))
x=this.c.$2(0,u.a)
t=x.c
w=x.f
t.oa(new G.iM(x.e,w),new G.fP(new G.hU(d,v,v)))
w=G.p6(H.e_,e,v,v,!1,!1,f==null?H.cB:f,v,v,g,H.ew,!1,v,H.e7,v,0,v,v,H.cU,H.fk)
t.a.a=!0
x.a=w;++u.a},
$3$bold$fontSize(d,e,f){return this.$4$bold$color$fontSize(d,e,null,f)},
$3$bold$color(d,e,f){return this.$4$bold$color$fontSize(d,e,f,11)},
$S:z+6}
B.bCZ.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=v.$2(0,u.a),s=t.c,r=t.f
s.oa(new G.iM(t.e,r),new G.fP(new G.hU(d,w,w)))
r=B.bWN(!1,!0)
s.a.a=!0
t.a=r
x=v.$2(1,u.a)
v=x.c
r=x.f
v.oa(new G.iM(x.e,r),new G.fP(new G.hU(e,w,w)))
r=B.bWN(!1,!1)
v.a.a=!0
x.a=r;++u.a},
$S:75}
B.bCW.prototype={
$0(){return this.a.a++},
$S:0}
B.bD0.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.b
m.$4$bold$color$fontSize(d,!0,$.bNQ(),11)
for(x=e.length,w=o.c,v=o.a,u=0;u<x;++u){t=w.$2(u,v.a)
s=e[u]
r=t.c
q=t.f
r.oa(new G.iM(t.e,q),new G.fP(new G.hU(s,n,n)))
s=G.p6($.c1j(),!0,n,n,!1,!1,H.tS,n,n,n,H.ew,!1,n,H.e7,n,0,n,n,H.cU,H.qg)
r.a.a=!0
t.a=s}++v.a
if(f.length===0)m.$4$bold$color$fontSize("None in this period.",!1,$.bNS(),10)
else for(p=0;p<f.length;++p){for(m=(p&1)===0,u=0;u<f[p].length;++u){t=w.$2(u,v.a)
x=f[p][u]
s=t.c
r=t.f
s.oa(new G.iM(t.e,r),new G.fP(new G.hU(x,n,n)))
x=m?$.bNP():H.e_
r=$.bNR()
r=r.a
r=G.JH(G.vu(r)||r==="none"?r:H.cB.ghY())
r=G.p6(x,!1,new G.zt(H.ma,r),n,!1,!1,H.cB,n,n,n,H.ew,!1,n,H.e7,n,0,n,n,H.cU,H.qg)
s.a.a=!0
t.a=r}++v.a}o.d.$0()},
$S:1018}
B.bCY.prototype={
$1(d){return"\u20b9"+d.a+"\xd7"+d.b},
$S:392};(function installTearOffs(){var x=a.installStaticTearOff
x(B,"bWU",3,null,["$5$cashierName$customRange","$3","$4$customRange"],["JV",function(d,e,f){return B.JV(d,e,f,null,null)},function(d,e,f,g){return B.JV(d,e,f,null,g)}],1,0)
x(B,"bWT",3,null,["$5$cashierName$customRange","$3","$4$customRange"],["JU",function(d,e,f){return B.JU(d,e,f,null,null)},function(d,e,f,g){return B.JU(d,e,f,null,g)}],1,0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.nt,[B.xq,B.aRN,B.aRO])
w(A.L,[B.a_Q,B.Wi])
w(A.ck,[B.aqY,B.bFu,B.bCc,B.bCd,B.bCf,B.bCe,B.bCg,B.bC0,B.bC1,B.bC2,B.bC4,B.bC3,B.bD4,B.bD2,B.bD_,B.bD0,B.bCY])
w(A.dt,[B.aqZ,B.ar1,B.ar0,B.ar3,B.ar_,B.ar4,B.ar2,B.ar5,B.bC6,B.bC7,B.bC8,B.bC9,B.bCa,B.bCb,B.bD3,B.bCX,B.bCZ])
w(A.cX,[B.bC5,B.bEp,B.bEq,B.bEr,B.bEn,B.bEo,B.aZy,B.aZx,B.aZz,B.aZw,B.aZA,B.aZv,B.aZq,B.aZp,B.aZu,B.aZt,B.aZs,B.aZr,B.bCW])
v(B.T3,A.P)
v(B.abg,A.ae)
v(B.abf,A.aw)
w(E.rg,[B.tC,B.Mu])
v(B.a9N,E.a9E)
v(B.alm,E.NQ)
v(B.a9M,B.alm)
x(B.alm,E.fz)})()
A.cs(b.typeUniverse,JSON.parse('{"T3":{"P":[],"e":[]},"abg":{"ae":["T3"]},"abf":{"aw":[],"e":[]},"tC":{"rg":[]},"Mu":{"rg":[]},"a9M":{"fz":[],"dB":[]}}'))
var y=(function rtii(){var x=A.G
return{d:x("a_Q"),N:x("fZ<p>"),o:x("m<al>"),E:x("m<j<c>>"),t:x("m<j<@>>"),s:x("m<c>"),T:x("m<hI>"),p:x("m<e>"),n:x("m<dB>"),q:x("m<Wi>"),l:x("j<cO>"),r:x("j<kq>"),Y:x("j<cM>"),c:x("j<bw>"),e:x("j<d5>"),P:x("j<dk>"),W:x("aF<p,p>"),U:x("bt"),R:x("c"),w:x("pU"),I:x("rg"),j:x("dB"),z:x("@"),S:x("p"),u:x("cg?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b0x=new E.r_(0.09411764705882353,0.13333333333333333,0.20392156862745098)
D.r8=new E.L_(D.b0x,null)
D.tb=new E.mL(0,0,0,6)
D.tc=new A.a7(0,9,0,9)
D.a3s=new A.a7(14,6,14,10)
D.A8=new E.mL(6,5,6,5)
D.a4r=new A.a7(9,2,9,2)
D.a92=new B.tC(45)
D.Az=new B.tC(48)
D.a93=new B.tC(50)
D.a94=new B.tC(62)
D.AA=new B.tC(66)
D.kF=new B.tC(92)
D.tY=new B.Mu(2)
D.a95=new B.Mu(3)
D.aOu=x(["Return","Customer","Against Bill","Item Exchanged","Value"],y.s)
D.aTy=x(["BILL","CUSTOMER","ITEMS","NET","TENDER"],y.s)
D.aUa=x(["Bill","Customer","Items","Net","Tender"],y.s)
D.aVt=x(["RETURN","CUSTOMER","AGAINST BILL","ITEM EXCHANGED","VALUE"],y.s)
D.aWh=x(["RETURN","CUSTOMER","AGAINST BILL","ITEM","AMOUNT","MODE"],y.s)
D.aWn=x(["Return","Customer","Against Bill","Item","Amount","Mode"],y.s)
D.vG=new E.r_(0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.jv=new B.xq(0,"daily")
D.vP=new B.xq(1,"weekly")
D.vQ=new B.xq(2,"monthly")
D.d9=new B.xq(3,"custom")
D.Rj=new A.fZ([4],y.N)
D.b3Z=new A.fZ([3],y.N)
D.b8T=new A.E(!0,C.D,null,null,null,null,12,C.ac,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.SD=new E.os(!0,null,null,null,null,null,F.bA,8.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.b0y=new E.r_(0.6196078431372549,0.6196078431372549,0.6196078431372549)
D.wO=new E.os(!0,D.b0y,null,null,null,null,F.bA,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.wP=new E.os(!0,F.fC,null,null,null,null,F.bA,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.bh3=new B.aRN(0,"start")
D.bh4=new B.aRO(0,"start")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"crQ","c1j",()=>B.wi("FF182234"))
x($,"crL","bNQ",()=>B.wi("FF1E3A8A"))
x($,"crO","bNS",()=>B.wi("FF6B7280"))
x($,"crJ","bNP",()=>B.wi("FFF3F5FA"))
x($,"crN","bNR",()=>B.wi("FFE6E9F2"))})()};
(a=>{a["I/YjnBM5yPl1bh/XGiKzTAWryUw="]=a.current})($__dart_deferred_initializers__);