((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,B={
hE(d){var x
switch(d.a){case 0:x="Daily"
break
case 1:x="Weekly"
break
case 2:x="Monthly"
break
case 3:x="Custom Range"
break
default:x=null}return x},
q9(d,e){var x
if(d==null||d.length===0)return"Walk-in Customer"
x=e.h(0,d)
return x==null?d:x},
bEK(d,e){if(J.dV(d.ghE(d)))return"\u2014"
return J.bc(d.ghE(d),new B.bEL(e),y.R).aU(0,", ")},
bV_(d){var x,w,v,u,t,s=A.b2("^(\\d{1,2}):(\\d{2})\\s*([AaPp][Mm])$",!0,!1,!1).fQ(C.m.S(d))
if(s==null)return null
x=s.b
w=x[1]
w.toString
v=A.cS(w,null)
w=x[2]
w.toString
u=A.cS(w,null)
t=x[3].toUpperCase()==="PM"
if(t&&v!==12)v+=12
return(!t&&v===12?0:v)*60+u},
ceZ(d){var x,w,v=d.ay==="Open",u=v?"ongoing":d.w,t=d.r,s=B.bV_(t),r=new A.bE(Date.now(),0,!1),q=v?A.id(r)*60+A.n8(r):B.bV_(d.w)
if(s==null||q==null)return t+" - "+u
x=q-s
if(x<0)x+=1440
w=C.t.bq(x,60)
v=""+C.t.aZ(x,60)
return(w>0?""+w+"h "+v+"m":v+"m")+" ("+t+" - "+u+")"},
anq(b6,b7,b8,b9){var x=0,w=A.v(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$anq=A.q(function(c0,c1){if(c0===1)return A.r(c1,w)
for(;;)switch(x){case 0:a7=b6.m(0,$.ag(),y.u)
a8=b6.m(0,$.iH(),y.U)
a9=b6.m(0,$.lC(),y.c)
b0=b6.m(0,$.K4(),y.e)
b1=b6.m(0,$.is(),y.P)
b2=b6.m(0,$.oR(),y.r)
b3=b6.m(0,$.mv(),y.W)
b4=y.R
b5=A.z(b4,b4)
for(u=J.ab(b6.m(0,$.e9(),y.l));u.p();){t=u.gE(u)
b5.l(0,t.a,t.b)}b4=A.z(b4,b4)
for(u=J.ab(b6.m(0,$.f9(),y.Y));u.p();){t=u.gE(u)
b4.l(0,t.a,t.c)}u=b8==null
if(u){t=a7==null?null:a7.a
s=t==null?"Cashier":t}else s=b8
r=new B.bBt(A.kU(A.eK()))
q=new B.bBu(b9)
t=J.bj(a9,new B.bBw(s,b7,q,r))
p=A.N(t,t.$ti.i("A.E"))
t=J.bj(b0,new B.bBv(s,b7,q,r))
o=A.N(t,t.$ti.i("A.E"))
t=A.aj(o).i("ay<1>")
n=t.i("A.E")
m=A.N(new A.ay(o,new B.bBh(),t),n)
l=A.N(new A.ay(o,new B.bBi(),t),n)
t=J.bY(b1)
n=t.cA(b1,new B.bBj(s))
k=A.N(n,n.$ti.i("A.E"))
n=A.aj(k).i("ay<1>")
j=A.N(new A.ay(k,new B.bBx(b7,q,r),n),n.i("A.E"))
i=k.length===0?null:C.e.hZ(k,new B.bBl(),new B.bBm(k))
h=C.e.bu(j,0,new B.bBn())
g=C.e.bu(j,0,new B.bBo())
f=C.e.bu(j,0,new B.bBp())
e=C.e.bu(j,0,new B.bBq())
d=C.e.bu(j,0,new B.bBr())
a0=C.e.bu(j,0,new B.bBs())
n=b7===D.ju
x=n?3:4
break
case 3:a1=a7==null
a2=a1?null:a7.y
if(a2==null)a2=""
if(!u){u=A.dm(t.cA(b1,new B.bBk(s)))
a3=u==null?null:u.cy}else a3=a1?null:a7.Q
x=a2.length!==0&&a3!=null?5:6
break
case 5:x=7
return A.l(C.eY.yj(a3,a8.gaf(a8),a2),$async$anq)
case 7:a4=c1
g=a4.a
f=a4.e
e=a4.c
d=a4.r
a0=g+e+f+d
case 6:case 4:if(n)a5=i==null?"-":B.ceZ(i)
else{a6=j.length
u=a6===1?"":"s"
a5=""+a6+" shift"+u+" worked"}switch(b7.a){case 0:u=I.dT(A.eK())
break
case 1:u="Last 7 days"
break
case 2:u="Last 30 days"
break
case 3:u=b9==null?"Custom range":I.dT(C.e.gM(b9.a.jn().split("T")))+" - "+I.dT(C.e.gM(b9.b.jn().split("T")))
break
default:u=null}t=a8.gb4(a8)
n=a8.gcj(a8)
a1=i==null?"\u2014":i.d+" \xb7 "+i.e
v=new B.a_G(b7,u,s,t+" \xb7 "+n,a1,a5,h,g,f,e,d,a0,J.U(b2),b3,p,m,l,b5,b4)
x=1
break
case 1:return A.t(v,w)}})
return A.u($async$anq,w)},
xm:function xm(d,e){this.a=d
this.b=e},
a_G:function a_G(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aqN:function aqN(){},
aqO:function aqO(){},
aqR:function aqR(){},
aqQ:function aqQ(){},
aqT:function aqT(){},
aqP:function aqP(){},
aqU:function aqU(){},
aqS:function aqS(){},
aqV:function aqV(){},
bEL:function bEL(d){this.a=d},
bBt:function bBt(d){this.a=d},
bBu:function bBu(d){this.a=d},
bBw:function bBw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bBv:function bBv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bBx:function bBx(d,e,f){this.a=d
this.b=e
this.c=f},
bBh:function bBh(){},
bBi:function bBi(){},
bBj:function bBj(d){this.a=d},
bBl:function bBl(){},
bBm:function bBm(d){this.a=d},
bBn:function bBn(){},
bBo:function bBo(){},
bBp:function bBp(){},
bBq:function bBq(){},
bBr:function bBr(){},
bBs:function bBs(){},
bBk:function bBk(d){this.a=d},
JR(d,e,f,g,h){return B.chF(d,e,f,g,h)},
chF(d,e,f,g,h){var x=0,w=A.v(y.H),v,u,t,s,r
var $async$JR=A.q(function(i,j){if(i===1)return A.r(j,w)
for(;;)switch(x){case 0:x=3
return A.l(B.anq(e,f,g,h),$async$JR)
case 3:r=j
if(d.e==null){x=1
break}u=B.hE(f)
u=A.bA(u.toLowerCase()," ","_")
t=f===D.d8?r.b:B.hE(f)
s=A.a0(null,!1,null,null,null,null,null,"Close",new B.bDG(d),C.N,C.at)
A.c2(d,new B.SW(r,null),A.a([s,A.a0(null,!1,null,null,null,A.bW("printer",$.d?C.y:C.v,14),null,"Print",new B.bDH(d),C.N,C.at),A.a0(null,!1,null,null,null,K.fn,null,"Download PDF",new B.bDI(d,r,"cashier_report_"+u+".pdf"),C.N,C.ah)],y.p),t+" Cashier Report \u2014 PDF Preview",C.dc,y.z)
case 1:return A.t(v,w)}})
return A.u($async$JR,w)},
JQ(d,e,f,g,h){return B.chE(d,e,f,g,h)},
chE(d,e,f,g,h){var x=0,w=A.v(y.H),v,u,t,s
var $async$JQ=A.q(function(i,j){if(i===1)return A.r(j,w)
for(;;)switch(x){case 0:x=3
return A.l(B.anq(e,f,g,h),$async$JQ)
case 3:s=j
if(d.e==null){x=1
break}u=B.hE(f)
u=A.bA(u.toLowerCase()," ","_")
t=f===D.d8?s.b:B.hE(f)
A.c2(d,new B.ab7(s,null),A.a([A.a0(null,!1,null,null,null,null,null,"Close",new B.bDE(d),C.N,C.at),A.a0(null,!1,null,null,null,K.fn,null,"Download .xlsx",new B.bDF(d,s,"cashier_report_"+u+".xlsx"),C.N,C.hl)],y.p),t+" Cashier Report \u2014 Excel Preview",C.dc,y.z)
case 1:return A.t(v,w)}})
return A.u($async$JQ,w)},
bVp(d){var x,w,v,u,t,s,r=null,q=d.c,p=d.d,o=d.e,n=A.h(q+" \xb7 "+p+" \xb7 "+o,r,r,r,r,A.p($.d?C.R:C.Q,r,r,r,13,C.p).aW(12.5),r,r),m=$.d,l=m?C.aB:C.aH,k=A.bk(m?C.Y:C.Z,C.O,1),j=A.at(14),i=A.h("SUMMARY",r,r,r,r,A.p(m?C.R:C.Q,r,r,r,12,C.an),r,r),h=d.r,g=d.w,f=y.o
g=A.a([new A.al("Date",d.b,!1),new A.al("Branch",p,!1),new A.al("Cashier",q,!1),new A.al("Counter",o,!1),new A.al("Shift Timings",d.f,!1),new A.al("Opening Float",A.J(h),!1),new A.al("Cash Sales",A.J(g),!1),new A.al("UPI Sales",A.J(d.x),!1),new A.al("Card Sales",A.J(d.y),!1),new A.al("Wallet Sales",A.J(d.z),!1),new A.al("Expected Drawer Total (Cash)",A.J(h+g),!1),new A.al("Total Sales",A.J(d.Q),!1),new A.al("No. of Bills",""+d.ax.length,!1),new A.al("No. of Returns & Exchanges",""+(d.ay.length+d.ch.length),!1),new A.al("Held Bills",""+d.as,!1)],f)
q=A.h("GST / TAX SUMMARY",r,r,r,r,A.p($.d?C.R:C.Q,r,r,r,12,C.an),r,r)
f=A.a([new A.al("Gross Sales (MRP)",A.J(d.gM2()),!1),new A.al("Discounts",A.J(d.gTl()),!1),new A.al("Taxable Value",A.J(d.gxt()-d.gxT()),!1),new A.al("CGST",A.J(d.gSh()),!1),new A.al("SGST",A.J(d.gMo()),!1)],f)
if(d.gx9()>0)f.push(new A.al("IGST",A.J(d.gx9()),!1))
f.push(new A.al("Total GST",A.J(d.gxT()),!1))
f.push(new A.al("Net Sales (Bills)",A.J(d.gxt()),!1))
p=A.h("DENOMINATION FINAL COUNT (AFTER CLOSING)",r,r,r,r,A.p($.d?C.R:C.Q,r,r,r,12,C.an),r,r)
if(d.gkM().length===0)o=A.h("No cash denominations counted yet.",r,r,r,r,A.p($.d?C.a_:C.a0,r,1.5,r,13.5,C.p),r,r)
else{o=A.a([],y.p)
for(m=d.gkM(),h=m.length,x=0;x<m.length;m.length===h||(0,A.B)(m),++x){w=m[x]
v=$.d
u=v?C.ao:C.D
t=new A.aL(v?C.Y:C.Z,1,C.O,-1)
s=new A.b8(6,6)
v=v?C.y:C.v
o.push(A.a5(r,A.h("\u20b9"+w.a+" \xd7 "+w.b,r,r,r,r,new A.E(!0,v,r,"Inter",r,r,11.8,C.P,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r),C.A,r,r,new A.a7(u,r,new A.cf(t,t,t,t),new A.dl(s,s,s,s),r,r,C.J),r,r,r,r,N.tg,r,r,r))}o=A.dj(C.b8,o,C.bB,8,8)}m=y.p
return A.R(A.a([n,C.aX,A.a5(r,A.R(A.a([i,C.bA,new A.ep(g,2,r),C.aX,q,C.bA,new A.ep(f,2,r),C.aX,p,C.bn,o],m),C.F,r,C.r,C.M),C.A,r,r,new A.a7(l,r,k,j,r,r,C.J),r,r,r,r,C.et,r,r,1/0)],m),C.F,r,C.r,C.M)},
bDG:function bDG(d){this.a=d},
bDH:function bDH(d){this.a=d},
bDI:function bDI(d,e,f){this.a=d
this.b=e
this.c=f},
bDE:function bDE(d){this.a=d},
bDF:function bDF(d,e,f){this.a=d
this.b=e
this.c=f},
SW:function SW(d,e){this.c=d
this.a=e},
ab8:function ab8(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.x=_.w=_.r=null},
aZj:function aZj(d){this.a=d},
aZi:function aZi(d){this.a=d},
aZk:function aZk(d){this.a=d},
aZh:function aZh(d){this.a=d},
aZl:function aZl(d){this.a=d},
aZg:function aZg(d){this.a=d},
aZb:function aZb(d,e,f){this.a=d
this.b=e
this.c=f},
aZa:function aZa(d,e,f){this.a=d
this.b=e
this.c=f},
aZf:function aZf(d,e,f){this.a=d
this.b=e
this.c=f},
aZe:function aZe(d,e,f){this.a=d
this.b=e
this.c=f},
aZd:function aZd(d,e,f){this.a=d
this.b=e
this.c=f},
aZc:function aZc(d,e,f){this.a=d
this.b=e
this.c=f},
ab7:function ab7(d,e){this.c=d
this.a=e},
bV0(d){var x=A.bA(d,"\u2013","-")
x=A.bA(x,"\u2014","-")
x=A.bA(x,"\u2019","'")
x=A.bA(x,"\u2018","'")
x=A.bA(x,"\u201c",'"')
x=A.bA(x,"\u201d",'"')
return A.bA(x,"\xd7","x")},
bCi(d){var x=0,w=A.v(y.H),v,u,t
var $async$bCi=A.q(function(e,f){if(e===1)return A.r(f,w)
for(;;)switch(x){case 0:t=E.atg()
t.GE(E.aCU(new B.bCj(d,new B.bCk(),new B.bCl()),null,F.po))
x=2
return A.l(t.iI(0),$async$bCi)
case 2:v=f
u=B.hE(d.a)
M.Dl("cashier_report_"+A.bA(u.toLowerCase()," ","_")+".pdf",v,"application/pdf")
return A.t(null,w)}})
return A.u($async$bCi,w)},
bVx(d,e){var x=null,w=d?$.bMz():H.e_
return G.p5(w,e,G.KO($.bMB(),H.m7),x,!1,!1,H.cA,x,x,x,H.ev,!1,x,H.e7,x,0,x,x,H.cS,H.qc)},
cgp(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="Cashier Report",d={},a0=G.avl(new A.zo().bn("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")),a1=a0.LP()
a1.toString
a0.W1(a1,e)
a0.q1(e)
x=a0.x.h(0,e)
x.lc(0,26)
x.lc(1,22)
x.lc(2,34)
x.lc(3,16)
x.lc(4,18)
x.lc(5,18)
d.a=0
w=new B.bCd(x)
v=new B.bCg(d,x,w)
u=new B.bCf(d,w)
t=new B.bCc(d)
s=new B.bCh(d,v,w,t)
a1=a2.a
v.$3$bold$fontSize(B.hE(a1)+" Cashier Report",!0,16)
r=a2.c
q=a2.d
p=a2.e
v.$4$bold$color$fontSize(r+" \xb7 "+q+" \xb7 "+p,!1,$.bMC(),10)
t.$0()
o=$.bMA()
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
if(a2.gkM().length!==0){n=a2.gkM()
u.$2("Denomination Final Count",new A.an(n,new B.bCe(),A.aj(n).i("an<1,c>")).aU(0,"  "))}t.$0()
v.$3$bold$color("GST / TAX SUMMARY",!0,o)
u.$2("Gross Sales (MRP)",A.J(a2.gM2()))
u.$2("Discounts",A.J(a2.gTl()))
u.$2("Taxable Value",A.J(a2.gxt()-a2.gxT()))
u.$2("CGST",A.J(a2.gSh()))
u.$2("SGST",A.J(a2.gMo()))
if(a2.gx9()>0)u.$2("IGST",A.J(a2.gx9()))
u.$2("Total GST",A.J(a2.gxT()))
u.$2("Net Sales (Bills)",A.J(a2.gxt()))
t.$0()
o=r.length
n=y.E
m=A.a([],n)
for(l=r.length,k=a2.CW,j=a2.cx,i=y.s,h=0;h<r.length;r.length===l||(0,A.B)(r),++h){g=r[h]
m.push(A.a([g.gaf(g),B.q9(g.gfd(),k),B.bEK(g,j),A.J(g.gh8()),g.gfB(g)],i))}s.$3("BILLS ("+o+")",D.aU2,m)
r=p.length
o=A.a([],n)
for(m=p.length,h=0;h<p.length;p.length===m||(0,A.B)(p),++h){f=p[h]
o.push(A.a([f.a,B.q9(f.d,k),f.b,f.f,A.J(f.w),f.y],i))}s.$3("RETURNS ("+r+")",D.aWe,o)
r=q.length
n=A.a([],n)
for(p=q.length,h=0;h<q.length;q.length===p||(0,A.B)(q),++h){f=q[h]
n.push(A.a([f.a,B.q9(f.d,k),f.b,f.f,A.J(f.w)],i))}s.$3("EXCHANGES ("+r+")",D.aOm,n)
r=a0.Tz()
r.toString
a1=B.hE(a1)
M.Dl("cashier_report_"+A.bA(a1.toLowerCase()," ","_")+".xlsx",new Uint8Array(A.ex(r)),"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")},
bCk:function bCk(){},
bCl:function bCl(){},
bCj:function bCj(d,e,f){this.a=d
this.b=e
this.c=f},
bCd:function bCd(d){this.a=d},
bCg:function bCg(d,e,f){this.a=d
this.b=e
this.c=f},
bCf:function bCf(d,e){this.a=d
this.b=e},
bCc:function bCc(d){this.a=d},
bCh:function bCh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bCe:function bCe(){},
bJn(d,e){var x=new E.zs(d,e,F.r0)
return new E.a8l(x,x,x,x,x,x)},
tz:function tz(d){this.a=d},
Mo:function Mo(d){this.a=d},
bSt(d,e,f){return new B.a9E(f,e,new B.a9F(),d)},
aRy:function aRy(d,e){this.a=d
this.b=e},
aRz:function aRz(d,e){this.a=d
this.b=e},
W8:function W8(d,e,f){this.a=d
this.b=e
this.c=f},
a9F:function a9F(){this.b=this.a=0},
a9E:function a9E(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
alb:function alb(){},
wd(d){return new G.S(d,null,null)}},D,E,F,O,M,N,G,H
J=c[1]
A=c[0]
C=c[2]
I=c[90]
K=c[173]
L=c[95]
B=a.updateHolder(c[52],B)
D=c[175]
E=c[58]
F=c[156]
O=c[154]
M=c[65]
N=c[143]
G=c[59]
H=c[176]
B.xm.prototype={
P(){return"ReportPeriod."+this.b}}
B.a_G.prototype={
gkM(){var x=J.z4(this.at)
x=x.cA(x,new B.aqN()).aG(0)
C.e.dH(x,new B.aqO())
return x},
gM2(){return C.e.bu(this.ax,0,new B.aqR())},
gTl(){return C.e.bu(this.ax,0,new B.aqQ())},
gxt(){return C.e.bu(this.ax,0,new B.aqT())},
gSh(){return C.e.bu(this.ax,0,new B.aqP())},
gMo(){return C.e.bu(this.ax,0,new B.aqU())},
gx9(){return C.e.bu(this.ax,0,new B.aqS())},
gxT(){return C.e.bu(this.ax,0,new B.aqV())}}
B.SW.prototype={
W(){return new B.ab8()}}
B.ab8.prototype={
I(d){var x,w,v,u,t,s=this,r=null,q=s.a.c,p=B.bVp(q),o=A.h("DETAILS",r,r,r,r,A.p($.d?C.R:C.Q,r,r,r,12,C.an),r,r),n=q.ax,m=n.length,l=s.d
if(m===0)n=A.a([A.h("No bills in this period.",r,r,r,r,A.p($.d?C.a_:C.a0,r,1.5,r,13.5,C.p),r,r)],y.p)
else{x=A.a([],y.p)
for(w=n.length,v=0;v<n.length;n.length===w||(0,A.B)(n),++v)x.push(s.apU(n[v]))
n=x}n=s.Oh(m,new B.aZj(s),l,n,"Bills")
l=q.ay
m=l.length
x=s.e
if(m===0)l=A.a([A.h("No returns in this period.",r,r,r,r,A.p($.d?C.a_:C.a0,r,1.5,r,13.5,C.p),r,r)],y.p)
else{w=A.a([],y.p)
for(u=l.length,v=0;v<l.length;l.length===u||(0,A.B)(l),++v)w.push(s.aFu(l[v]))
l=w}l=s.Oh(m,new B.aZk(s),x,l,"Returns")
x=q.ch
m=x.length
w=s.f
if(m===0)x=A.a([A.h("No exchanges in this period.",r,r,r,r,A.p($.d?C.a_:C.a0,r,1.5,r,13.5,C.p),r,r)],y.p)
else{u=A.a([],y.p)
for(t=x.length,v=0;v<x.length;x.length===t||(0,A.B)(x),++v)u.push(s.atE(x[v]))
x=u}return A.R(A.a([p,L.cQ,o,C.bA,n,C.bn,l,C.bn,s.Oh(m,new B.aZl(s),w,x,"Exchanges")],y.p),C.F,r,C.r,C.M)},
Oh(d,e,f,g,h){var x,w=null,v=$.d,u=A.bk(v?C.Y:C.Z,C.O,1),t=A.at(8),s=v?C.aB:C.aH,r=f?0.5:0,q=y.p
r=A.ae(A.a([A.bN8(A.bW("chevdown",v?C.a_:C.a0,14),C.f5,r),C.aU,A.h(h,w,w,w,w,A.p(w,w,w,w,11.8,C.P).aW(13),w,w)],q),C.E,C.r,C.z,0)
x=A.at(20)
q=A.a([A.bC(A.bw(w,A.a5(w,A.ae(A.a([r,A.a5(w,A.h(""+d,w,w,w,w,D.b8J,w,w),C.A,w,w,new A.a7(C.a6,w,w,x,w,w,C.J),w,w,w,w,D.a4j,w,w,w)],q),C.E,C.bM,C.z,0),C.A,s,w,w,w,w,w,w,O.iP,w,w,w),C.ae,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w),C.am,w,w,w,w)],q)
if(f)q.push(new A.ai(D.a3k,A.R(g,C.F,w,C.r,C.M),w))
return A.a5(w,A.R(q,C.F,w,C.r,C.M),C.bZ,w,w,new A.a7(w,w,u,t,w,w,C.J),w,w,w,w,w,w,w,w)},
apU(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.r===d.gaf(d),n=$.d?C.Y:C.Z,m=A.h(d.gaf(d)+" \xb7 "+B.q9(d.gfd(),q.a.c.CW),p,p,p,p,A.p(p,p,p,p,11.8,C.P),p,p),l=B.bEK(d,q.a.c.cx)
l=A.h(l,2,C.ab,p,p,A.p($.d?C.R:C.Q,p,p,p,11,C.p),p,p)
x=d.gdW(d)
w=d.gfB(d)
v=y.p
v=A.a([A.bC(A.bw(p,A.a5(p,A.ae(A.a([A.aS(A.R(A.a([m,C.cX,l,C.cX,A.h(x+" \xb7 "+w,p,p,p,p,A.p($.d?C.R:C.Q,p,p,p,13,C.p).aW(11),p,p)],v),C.F,p,C.r,C.M),1),C.aM,A.h(A.J(d.gh8()),p,p,p,p,A.p(p,p,p,p,11.8,C.P),p,p)],v),C.F,C.r,C.z,0),C.A,p,p,new A.a7(p,p,new A.cf(new A.aL(n,1,C.O,-1),C.U,C.U,C.U),p,p,p,C.J),p,p,p,p,D.t9,p,p,p),C.ae,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.aZb(q,o,d),p,p,p),C.am,p,p,p,p)],v)
if(o){n=$.d?C.aB:C.aH
m=A.at(6)
l=d.ge5()
x=A.J(d.gM1())
w=A.J(d.gIc())
u=A.J(d.gKT())
t=A.J(d.gh8())
s=d.gfB(d)
r=d.gaI(d)
v.push(A.a5(p,A.h(""+l+" items \xb7 MRP "+x+" \xb7 Discount "+w+" \xb7 GST "+u+" \xb7 Net "+t+" \xb7 Paid via "+s+", "+r+".",p,p,p,p,A.p($.d?C.R:C.Q,p,p,p,13,C.p).aW(11.5),p,p),C.A,p,p,new A.a7(n,p,p,m,p,p,C.J),p,p,p,F.fZ,C.f7,p,p,1/0))}return A.R(v,C.E,p,C.r,C.M)},
aFu(d){var x,w,v,u,t=null,s=d.a,r=this.w===s,q=$.d?C.Y:C.Z
s=A.h(s+" \xb7 "+B.q9(d.d,this.a.c.CW),t,t,t,t,A.p(t,t,t,t,11.8,C.P),t,t)
x=d.f
w=A.h(x,2,C.ab,t,t,A.p($.d?C.R:C.Q,t,t,t,11,C.p),t,t)
v=d.y
u=y.p
u=A.a([A.bC(A.bw(t,A.a5(t,A.ae(A.a([A.aS(A.R(A.a([s,C.cX,w,C.cX,A.h("against "+d.b+" \xb7 "+v,t,t,t,t,A.p($.d?C.R:C.Q,t,t,t,13,C.p).aW(11),t,t)],u),C.F,t,C.r,C.M),1),C.aM,A.h(A.J(d.w),t,t,t,t,A.p(t,t,t,t,11.8,C.P),t,t)],u),C.F,C.r,C.z,0),C.A,t,t,new A.a7(t,t,new A.cf(new A.aL(q,1,C.O,-1),C.U,C.U,C.U),t,t,t,C.J),t,t,t,t,D.t9,t,t,t),C.ae,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.aZf(this,r,d),t,t,t),C.am,t,t,t,t)],u)
if(r){s=$.d
q=s?C.aB:C.aH
w=A.at(6)
u.push(A.a5(t,A.h(x+" \xd7 "+d.r+" \u2014 Reason: "+d.x+". Refunded as "+v+".",t,t,t,t,A.p(s?C.R:C.Q,t,t,t,13,C.p).aW(11.5),t,t),C.A,t,t,new A.a7(q,t,t,w,t,t,C.J),t,t,t,F.fZ,C.f7,t,t,1/0))}return A.R(u,C.E,t,C.r,C.M)},
atE(d){var x,w,v=null,u=d.a,t=this.x===u,s=$.d?C.Y:C.Z
u=A.h(u+" \xb7 "+B.q9(d.d,this.a.c.CW),v,v,v,v,A.p(v,v,v,v,11.8,C.P),v,v)
x=A.h(d.y,2,C.ab,v,v,A.p($.d?C.R:C.Q,v,v,v,11,C.p),v,v)
w=y.p
w=A.a([A.bC(A.bw(v,A.a5(v,A.ae(A.a([A.aS(A.R(A.a([u,C.cX,x,C.cX,A.h("against "+d.b,v,v,v,v,A.p($.d?C.R:C.Q,v,v,v,13,C.p).aW(11),v,v)],w),C.F,v,C.r,C.M),1),C.aM,A.h(A.J(d.w),v,v,v,v,A.p(v,v,v,v,11.8,C.P),v,v)],w),C.F,C.r,C.z,0),C.A,v,v,new A.a7(v,v,new A.cf(new A.aL(s,1,C.O,-1),C.U,C.U,C.U),v,v,v,C.J),v,v,v,v,D.t9,v,v,v),C.ae,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.aZd(this,t,d),v,v,v),C.am,v,v,v,v)],w)
if(t){u=$.d
s=u?C.aB:C.aH
x=A.at(6)
w.push(A.a5(v,A.h(d.f+" \xd7 "+d.r+" \u2014 Reason: "+d.x+". Recorded as an exchange.",v,v,v,v,A.p(u?C.R:C.Q,v,v,v,13,C.p).aW(11.5),v,v),C.A,v,v,new A.a7(s,v,v,x,v,v,C.J),v,v,v,F.fZ,C.f7,v,v,1/0))}return A.R(w,C.E,v,C.r,C.M)}}
B.ab7.prototype={
I(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c,j=B.bVp(k),i=k.ax,h=i.length
h=A.h("BILLS ("+h+")",l,l,l,l,A.p($.d?C.R:C.Q,l,l,l,12,C.an),l,l)
x=y.E
w=A.a([],x)
for(v=i.length,u=k.CW,t=k.cx,s=y.s,r=0;r<i.length;i.length===v||(0,A.B)(i),++r){q=i[r]
w.push(A.a([q.gaf(q),B.q9(q.gfd(),u),B.bEK(q,t),A.J(q.gh8()),q.gfB(q)],s))}i=m.OA(D.aTq,D.b3P,w)
w=k.ay
v=w.length
v=A.h("RETURNS ("+v+")",l,l,l,l,A.p($.d?C.R:C.Q,l,l,l,12,C.an),l,l)
t=A.a([],x)
for(p=w.length,r=0;r<w.length;w.length===p||(0,A.B)(w),++r){o=w[r]
t.push(A.a([o.a,B.q9(o.d,u),o.b,o.f,A.J(o.w),o.y],s))}w=m.OA(D.aW8,D.Rc,t)
t=k.ch
p=t.length
p=A.h("EXCHANGES ("+p+")",l,l,l,l,A.p($.d?C.R:C.Q,l,l,l,12,C.an),l,l)
x=A.a([],x)
for(n=t.length,r=0;r<t.length;t.length===n||(0,A.B)(t),++r){o=t[r]
x.push(A.a([o.a,B.q9(o.d,u),o.b,o.f,A.J(o.w)],s))}return A.R(A.a([j,L.cQ,h,C.bn,i,C.e6,v,C.bn,w,C.e6,p,C.bn,m.OA(D.aVk,D.Rc,x)],y.p),C.F,l,C.r,C.M)},
OA(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=null
if(f.length===0){x=$.d
w=A.bk(x?C.Y:C.Z,C.O,1)
v=A.at(8)
return A.a5(C.ag,A.h("Nothing to show for this period.",l,l,l,l,A.p(x?C.a_:C.a0,l,1.5,l,13.5,C.p),l,l),C.A,l,l,new A.a7(l,l,w,v,l,l,C.J),l,l,l,l,N.mR,l,l,l)}x=A.bk($.d?C.Y:C.Z,C.O,1)
w=A.at(8)
v=A.z(y.S,y.w)
for(u=d.length,t=0;t<u;++t)v.l(0,t,K.hq)
s=y.p
r=A.a([],s)
for(t=0;t<u;++t){q=d[t]
p=$.d?C.a_:C.a0
p=new A.E(!0,p,l,"Inter",l,l,12,C.P,l,0.3,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l).aD(C.D)
r.push(new A.ai(C.hE,A.h(q,l,l,l,l,p,e.q(0,t)?C.c4:C.cJ,l),l))}u=A.a([new I.hG(K.m9,r)],y.T)
for(o=0;o<f.length;++o){if((o&1)===0)r=$.d?C.ao:C.D
else r=$.d?C.aB:C.aH
q=A.a([],s)
for(t=0;p=f[o],t<p.length;++t){p=p[t]
n=$.d?C.y:C.v
m=e.q(0,t)?C.c4:C.cJ
q.push(new A.ai(C.hE,A.h(p,l,l,l,l,new A.E(!0,n,l,"Inter",l,l,13.5,C.p,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),m,l),l))}u.push(new I.hG(new A.a7(r,l,l,l,l,l,C.J),q))}return A.a5(l,I.R4(u,v,K.lE),C.bZ,l,l,new A.a7(l,l,x,w,l,l,C.J),l,l,l,l,l,l,l,l)}}
B.tz.prototype={
UK(d,e,f){return new E.Lp(this.a,0)}}
B.Mo.prototype={
UK(d,e,f){return new E.Lp(0,this.a)}}
B.aRy.prototype={
P(){return"WrapAlignment."+this.b}}
B.aRz.prototype={
P(){return"WrapCrossAlignment."+this.b}}
B.W8.prototype={}
B.a9F.prototype={
eb(d){this.a=d.a
this.b=d.b},
j0(d){var x=new B.a9F()
x.a=this.a
x.b=this.b
return x},
j(d){return A.H(this).j(0)+" first:"+this.a+" last:"+this.b}}
B.a9E.prototype={
gmx(){return!0},
gr5(){return this.z.b<this.b.length},
a25(d){switch(0){case 0:return d.a.c}},
a1U(d){switch(0){case 0:return d.a.d}},
av0(d,e){switch(0){case 0:return new E.jA(d,e)}},
auB(d,e,f){var x=e-f
switch(0){case 0:return d?x:0}},
fg(b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.b,b2=b1.length
if(b2===0||b0.z.a>=b2){b0.a=new E.fM(0,0,C.t.aN(0,b4.a,b4.b),C.t.aN(0,b4.c,b4.d))
return}x=E.LS(b3)
switch(0){case 0:w=b4.b
v=new E.fU(0,w,0,1/0)
u=x===F.pZ
break}t=A.a([],y.q)
s=A.z(y.j,y.S)
for(b2=b0.z,r=C.e.fW(b1,b2.a),q=r.length,p=b0.f,o=b0.w,n=0,m=0,l=0,k=0,j=0,i=0;i<r.length;r.length===q||(0,A.B)(r),++i){h=r[i]
h.fg(b3,v,!0)
g=b0.a25(h)
g.toString
f=b0.a1U(h)
f.toString
if(j>0&&l+p+g>w){n=Math.max(n,l)
m+=k
if(t.length!==0)m+=o
t.push(new B.W8(l,k,j))
l=0
k=0
j=0}l+=g
if(j>0)l+=p
k=Math.max(k,f);++j
s.l(0,h,t.length)}if(j>0){n=Math.max(n,l)
m+=k
if(t.length!==0)m+=o
t.push(new B.W8(l,k,j))}e=t.length
switch(0){case 0:r=b4.b9(new E.jA(n,m))
d=r.a
a0=r.b
b0.a=new E.fM(0,0,d,a0)
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
for(r=C.e.fW(b1,a1),g=r.length,i=0;i<r.length;r.length===g||(0,A.B)(r),++i){h=r[i]
if(s.h(0,h)!==a3)break;++a1
a7=b0.a25(h)
f=b0.a1U(h)
f.toString
a8=b0.auB(!0,k,f)
if(u){a7.toString
a5-=a7}f=b0.av0(a5,a2+a8)
a9=h.a
h.a=new E.fM(f.a,f.b,a9.c,a9.d)
if(u)a5-=p
else{a7.toString
a5+=a7+p}}a2-=o
a2=a2
b2.b=a1}},
fT(d){var x,w,v,u,t,s=this
s.li(d)
x=d.b
x.fI()
w=A.fm()
v=s.a
w.dE(v.a,v.b,0,1)
x.rM(0,w)
for(v=s.z,v=C.e.bY(s.b,v.a,v.b),u=v.length,t=0;t<v.length;v.length===u||(0,A.B)(v),++t)v[t].fT(d)
x.ro(0)},
rp(d,e){var x=this.z
x.a=e.a
x.b=e.b
x.a=e.b},
fI(){return this.z}}
B.alb.prototype={}
var z=a.updateTypes(["D(d4)","ar<~>(a1,uW,xm{cashierName:c?,customRange:fF<bE>?})","dA(c,c)","dA(c,j<c>,j<j<c>>{columnWidths:aG<n,re>?})","j<dA>(nL)","fE(n,n)","~(c{bold!D,color:S?,fontSize:n})"])
B.aqN.prototype={
$1(d){return d.b>0},
$S:387}
B.aqO.prototype={
$2(d,e){return C.t.bm(e.a,d.a)},
$S:388}
B.aqR.prototype={
$2(d,e){return d+e.gM1()},
$S:49}
B.aqQ.prototype={
$2(d,e){return d+e.gIc()},
$S:49}
B.aqT.prototype={
$2(d,e){return d+e.gh8()},
$S:49}
B.aqP.prototype={
$2(d,e){return d+e.gaa2()},
$S:49}
B.aqU.prototype={
$2(d,e){return d+e.gYd()},
$S:49}
B.aqS.prototype={
$2(d,e){return d+e.gacV()},
$S:49}
B.aqV.prototype={
$2(d,e){return d+e.gKT()},
$S:49}
B.bEL.prototype={
$1(d){var x=this.a.h(0,d.gd1())
return x==null?d.gd1():x},
$S:1012}
B.bBt.prototype={
$1(d){var x,w,v
try{x=A.kU(d)
w=C.t.bq(this.a.e1(x).a,864e8)
return w}catch(v){return null}},
$S:216}
B.bBu.prototype={
$1(d){var x,w,v,u,t,s=this.a
if(s==null)return!1
try{x=A.kU(d)
u=s.a
w=A.cJ(A.bu(u),A.bq(u),A.dh(u),0,0,0,0)
s=s.b
v=A.cJ(A.bu(s),A.bq(s),A.dh(s),0,0,0,0)
s=!x.lU(w)&&!x.nR(v)
return s}catch(t){return!1}},
$S:12}
B.bBw.prototype={
$1(d){var x,w,v,u=this
if(d.gjB()!==u.a)return!1
x=u.b
if(x===D.d8)return u.c.$1(C.e.gM(d.gdW(d).split(" ")))
if(C.m.q(d.gdW(d),"now")||C.m.bb(d.gdW(d),A.eK()))return!0
w=u.d.$1(C.e.gM(d.gdW(d).split(" ")))
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
$S:36}
B.bBv.prototype={
$1(d){var x,w,v,u=this
if(!C.m.bb(d.Q,u.a))return!1
x=u.b
if(x===D.d8)return u.c.$1(C.e.gM(d.e.split(" ")))
w=d.e
if(C.m.q(w,"now")||C.m.bb(w,A.eK()))return!0
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
B.bBx.prototype={
$1(d){var x,w,v=this.a
if(v===D.d8)return this.b.$1(d.f)
if(d.ay==="Open"||d.f===A.eK())return!0
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
B.bBh.prototype={
$1(d){return d.z==="Refunded"},
$S:z+0}
B.bBi.prototype={
$1(d){return d.z==="Exchanged"},
$S:z+0}
B.bBj.prototype={
$1(d){return d.b===this.a},
$S:33}
B.bBl.prototype={
$1(d){return d.ay==="Open"},
$S:33}
B.bBm.prototype={
$0(){return C.e.gM(this.a)},
$S:152}
B.bBn.prototype={
$2(d,e){return d+e.x},
$S:53}
B.bBo.prototype={
$2(d,e){return d+e.z},
$S:53}
B.bBp.prototype={
$2(d,e){return d+e.as},
$S:53}
B.bBq.prototype={
$2(d,e){return d+e.Q},
$S:53}
B.bBr.prototype={
$2(d,e){return d+e.at},
$S:53}
B.bBs.prototype={
$2(d,e){return d+e.y},
$S:53}
B.bBk.prototype={
$1(d){return d.b===this.a},
$S:33}
B.bDG.prototype={
$0(){return A.aq(this.a,!0).Y()},
$S:0}
B.bDH.prototype={
$0(){return A.M(this.a,"Sent to Microsoft Print to PDF",null)},
$S:0}
B.bDI.prototype={
$0(){var x=0,w=A.v(y.H),v=this,u
var $async$$0=A.q(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:u=v.a
A.aq(u,!0).Y()
x=2
return A.l(B.bCi(v.b),$async$$0)
case 2:if(u.e!=null)A.M(u,"Downloaded "+v.c,null)
return A.t(null,w)}})
return A.u($async$$0,w)},
$S:3}
B.bDE.prototype={
$0(){return A.aq(this.a,!0).Y()},
$S:0}
B.bDF.prototype={
$0(){var x=this.a
A.aq(x,!0).Y()
B.cgp(this.b)
A.M(x,"Downloaded "+this.c,null)},
$S:0}
B.aZj.prototype={
$0(){var x=this.a
return x.C(new B.aZi(x))},
$S:0}
B.aZi.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.aZk.prototype={
$0(){var x=this.a
return x.C(new B.aZh(x))},
$S:0}
B.aZh.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
B.aZl.prototype={
$0(){var x=this.a
return x.C(new B.aZg(x))},
$S:0}
B.aZg.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.aZb.prototype={
$0(){var x=this.a
return x.C(new B.aZa(x,this.b,this.c))},
$S:0}
B.aZa.prototype={
$0(){if(this.b)var x=null
else{x=this.c
x=x.gaf(x)}return this.a.r=x},
$S:0}
B.aZf.prototype={
$0(){var x=this.a
return x.C(new B.aZe(x,this.b,this.c))},
$S:0}
B.aZe.prototype={
$0(){var x=this.b?null:this.c.a
return this.a.w=x},
$S:0}
B.aZd.prototype={
$0(){var x=this.a
return x.C(new B.aZc(x,this.b,this.c))},
$S:0}
B.aZc.prototype={
$0(){var x=this.b?null:this.c.a
return this.a.x=x},
$S:0}
B.bCk.prototype={
$2(d,e){var x=null
return new E.u1(D.t8,E.r9(A.a([E.e7(d,E.fP(x,F.fC,x,x,x,x,x,x,x,F.by,x,x,9,x,x,x,!0,x,x,x,x),x,x),E.e7(B.bV0(e),E.fP(x,x,x,x,x,x,x,x,x,F.by,x,x,10,x,F.bO,x,!0,x,x,x,x),x,x)],y.n),F.kj,F.jg))},
$S:z+2}
B.bCl.prototype={
$4$columnWidths(d,e,f,g){var x,w,v,u,t,s=null,r=A.a([new E.dN(s,14,s),E.e7(d,E.fP(s,F.h9,s,s,s,s,s,s,s,F.by,s,s,10,s,F.bO,s,!0,s,s,s,s),s,s),new E.dN(s,6,s)],y.n)
if(f.length===0)r.push(E.e7("None in this period.",D.wJ,s,s))
else{x=A.a([],y.t)
for(w=f.length,v=0;v<f.length;f.length===w||(0,A.B)(f),++v){u=[]
for(t=C.e.gU(f[v]);t.p();)u.push(B.bV0(t.gE(0)))
x.push(u)}w=E.fP(s,F.pm,s,s,s,s,s,s,s,F.by,s,s,8.5,s,F.bO,s,!0,s,s,s,s)
r.push(E.aOD(B.bJn(D.vB,0.5),s,D.A1,D.Sw,g,x,D.r5,w,e))}return E.mC(r,F.cN)},
$3(d,e,f){return this.$4$columnWidths(d,e,f,null)},
$S:z+3}
B.bCj.prototype={
$1(a3){var x,w,v,u,t,s,r,q=null,p="\u20b9",o="Rs ",n=this.a,m=E.e7(B.hE(n.a)+" Cashier Report",E.fP(q,q,q,q,q,q,q,q,q,F.by,q,q,18,q,F.bO,q,!0,q,q,q,q),q,q),l=n.c,k=n.d,j=n.e,i=E.e7(l+" \xb7 "+k+" \xb7 "+j,D.wK,q,q),h=E.e7("SUMMARY",E.fP(q,F.h9,q,q,q,q,q,q,q,F.by,q,q,10,q,F.bO,q,!0,q,q,q,q),q,q),g=this.b,f=y.n,e=n.r,d=n.w,a0=n.ax,a1=n.ay,a2=n.ch
d=E.r9(A.a([E.tt(E.mC(A.a([g.$2("Date",n.b),g.$2("Branch",k),g.$2("Cashier",l),g.$2("Counter",j),g.$2("Shift Timings",n.f),g.$2("Held Bills",""+n.as)],f),F.cN)),new E.dN(24,q,q),E.tt(E.mC(A.a([g.$2("Opening Float",C.m.cU(A.J(e),p,o)),g.$2("Cash Sales",C.m.cU(A.J(d),p,o)),g.$2("UPI Sales",C.m.cU(A.J(n.x),p,o)),g.$2("Card Sales",C.m.cU(A.J(n.y),p,o)),g.$2("Wallet Sales",C.m.cU(A.J(n.z),p,o)),g.$2("Expected Drawer Total (Cash)",C.m.cU(A.J(e+d),p,o)),g.$2("Total Sales",C.m.cU(A.J(n.Q),p,o)),g.$2("No. of Bills",""+a0.length),g.$2("No. of Returns & Exchanges",""+(a1.length+a2.length))],f),F.cN))],f),F.cN,F.jf)
e=E.e7("GST / TAX SUMMARY",E.fP(q,F.h9,q,q,q,q,q,q,q,F.by,q,q,10,q,F.bO,q,!0,q,q,q,q),q,q)
j=E.tt(E.mC(A.a([g.$2("Gross Sales (MRP)",C.m.cU(A.J(n.gM2()),p,o)),g.$2("Discounts",C.m.cU(A.J(n.gTl()),p,o)),g.$2("Taxable Value",C.m.cU(A.J(n.gxt()-n.gxT()),p,o))],f),F.cN))
l=A.a([g.$2("CGST",C.m.cU(A.J(n.gSh()),p,o)),g.$2("SGST",C.m.cU(A.J(n.gMo()),p,o))],f)
if(n.gx9()>0)l.push(g.$2("IGST",C.m.cU(A.J(n.gx9()),p,o)))
l.push(g.$2("Total GST",C.m.cU(A.J(n.gxT()),p,o)))
l.push(g.$2("Net Sales (Bills)",C.m.cU(A.J(n.gxt()),p,o)))
m=A.a([m,new E.dN(q,2,q),i,new E.dN(q,14,q),h,new E.dN(q,8,q),d,new E.dN(q,6,q),e,new E.dN(q,8,q),E.r9(A.a([j,new E.dN(24,q,q),E.tt(E.mC(l,F.cN))],f),F.cN,F.jf)],f)
if(n.gkM().length!==0){l=E.e7("DENOMINATION FINAL COUNT (AFTER CLOSING)",E.fP(q,F.fC,q,q,q,q,q,q,q,F.by,q,q,8.5,q,F.bO,q,!0,q,q,q,q),q,q)
k=A.a([],f)
for(j=n.gkM(),i=j.length,x=0;x<j.length;j.length===i||(0,A.B)(j),++x){w=j[x]
k.push(E.e7("Rs "+w.a+" x "+w.b,F.lI,q,q))}C.e.A(m,A.a([new E.dN(q,6,q),l,new E.dN(q,4,q),B.bSt(k,4,8)],f))}l=this.c
k=a0.length
j=y.s
i=A.a(["Bill","Customer","Items","Net","Tender"],j)
h=y.E
g=A.a([],h)
for(f=a0.length,e=n.CW,n=n.cx,x=0;x<a0.length;a0.length===f||(0,A.B)(a0),++x){v=a0[x]
d=v.gaf(v)
u=B.q9(v.gfd(),e)
t=B.bEK(v,n)
s=A.J(v.gh8())
g.push(A.a([d,u,t,A.mr(s,p,o,0),v.gfB(v)],j))}n=y.S
f=y.I
m.push(l.$4$columnWidths("BILLS ("+k+")",i,g,A.av([0,D.kD,1,D.At,2,D.a8Y,3,D.As,4,D.a8W],n,f)))
g=a1.length
i=A.a(["Return","Customer","Against Bill","Item","Amount","Mode"],j)
k=A.a([],h)
for(d=a1.length,x=0;x<a1.length;a1.length===d||(0,A.B)(a1),++x){r=a1[x]
a0=B.q9(r.d,e)
u=A.J(r.w)
k.push(A.a([r.a,a0,r.b,r.f,A.mr(u,p,o,0),r.y],j))}m.push(l.$4$columnWidths("RETURNS ("+g+")",i,k,A.av([0,D.kD,1,D.a8X,2,D.kD,3,D.tT,4,D.a8V,5,D.tT],n,f)))
k=a2.length
i=A.a(["Return","Customer","Against Bill","Item Exchanged","Value"],j)
h=A.a([],h)
for(g=a2.length,x=0;x<a2.length;a2.length===g||(0,A.B)(a2),++x){r=a2[x]
d=B.q9(r.d,e)
a0=A.J(r.w)
h.push(A.a([r.a,d,r.b,r.f,A.mr(a0,p,o,0)],j))}m.push(l.$4$columnWidths("EXCHANGES ("+k+")",i,h,A.av([0,D.kD,1,D.At,2,D.kD,3,D.tT,4,D.As],n,f)))
return m},
$S:z+4}
B.bCd.prototype={
$2(d,e){return this.a.aa0(new G.iM(e,d))},
$S:z+5}
B.bCg.prototype={
$4$bold$color$fontSize(d,e,f,g){var x,w,v=null,u=this.a,t=u.a
this.b.adY(new G.iM(t,0),new G.iM(t,5))
x=this.c.$2(0,u.a)
t=x.c
w=x.f
t.oa(new G.iM(x.e,w),new G.fO(new G.hU(d,v,v)))
w=G.p5(H.e_,e,v,v,!1,!1,f==null?H.cA:f,v,v,g,H.ev,!1,v,H.e7,v,0,v,v,H.cS,H.fk)
t.a.a=!0
x.a=w;++u.a},
$3$bold$fontSize(d,e,f){return this.$4$bold$color$fontSize(d,e,null,f)},
$3$bold$color(d,e,f){return this.$4$bold$color$fontSize(d,e,f,11)},
$S:z+6}
B.bCf.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=v.$2(0,u.a),s=t.c,r=t.f
s.oa(new G.iM(t.e,r),new G.fO(new G.hU(d,w,w)))
r=B.bVx(!1,!0)
s.a.a=!0
t.a=r
x=v.$2(1,u.a)
v=x.c
r=x.f
v.oa(new G.iM(x.e,r),new G.fO(new G.hU(e,w,w)))
r=B.bVx(!1,!1)
v.a.a=!0
x.a=r;++u.a},
$S:70}
B.bCc.prototype={
$0(){return this.a.a++},
$S:0}
B.bCh.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.b
m.$4$bold$color$fontSize(d,!0,$.bMA(),11)
for(x=e.length,w=o.c,v=o.a,u=0;u<x;++u){t=w.$2(u,v.a)
s=e[u]
r=t.c
q=t.f
r.oa(new G.iM(t.e,q),new G.fO(new G.hU(s,n,n)))
s=G.p5($.c02(),!0,n,n,!1,!1,H.tN,n,n,n,H.ev,!1,n,H.e7,n,0,n,n,H.cS,H.qc)
r.a.a=!0
t.a=s}++v.a
if(f.length===0)m.$4$bold$color$fontSize("None in this period.",!1,$.bMC(),10)
else for(p=0;p<f.length;++p){for(m=(p&1)===0,u=0;u<f[p].length;++u){t=w.$2(u,v.a)
x=f[p][u]
s=t.c
r=t.f
s.oa(new G.iM(t.e,r),new G.fO(new G.hU(x,n,n)))
x=m?$.bMz():H.e_
r=$.bMB()
r=r.a
r=G.JE(G.vq(r)||r==="none"?r:H.cA.ghV())
r=G.p5(x,!1,new G.zq(H.m7,r),n,!1,!1,H.cA,n,n,n,H.ev,!1,n,H.e7,n,0,n,n,H.cS,H.qc)
s.a.a=!0
t.a=r}++v.a}o.d.$0()},
$S:1014}
B.bCe.prototype={
$1(d){return"\u20b9"+d.a+"\xd7"+d.b},
$S:389};(function installTearOffs(){var x=a.installStaticTearOff
x(B,"bVE",3,null,["$5$cashierName$customRange","$3","$4$customRange"],["JR",function(d,e,f){return B.JR(d,e,f,null,null)},function(d,e,f,g){return B.JR(d,e,f,null,g)}],1,0)
x(B,"bVD",3,null,["$5$cashierName$customRange","$3","$4$customRange"],["JQ",function(d,e,f){return B.JQ(d,e,f,null,null)},function(d,e,f,g){return B.JQ(d,e,f,null,g)}],1,0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.ns,[B.xm,B.aRy,B.aRz])
w(A.L,[B.a_G,B.W8])
w(A.cl,[B.aqN,B.bEL,B.bBt,B.bBu,B.bBw,B.bBv,B.bBx,B.bBh,B.bBi,B.bBj,B.bBl,B.bBk,B.bCl,B.bCj,B.bCg,B.bCh,B.bCe])
w(A.dy,[B.aqO,B.aqR,B.aqQ,B.aqT,B.aqP,B.aqU,B.aqS,B.aqV,B.bBn,B.bBo,B.bBp,B.bBq,B.bBr,B.bBs,B.bCk,B.bCd,B.bCf])
w(A.d_,[B.bBm,B.bDG,B.bDH,B.bDI,B.bDE,B.bDF,B.aZj,B.aZi,B.aZk,B.aZh,B.aZl,B.aZg,B.aZb,B.aZa,B.aZf,B.aZe,B.aZd,B.aZc,B.bCc])
v(B.SW,A.P)
v(B.ab8,A.ad)
v(B.ab7,A.ax)
w(E.re,[B.tz,B.Mo])
v(B.a9F,E.a9w)
v(B.alb,E.NK)
v(B.a9E,B.alb)
x(B.alb,E.fz)})()
A.cy(b.typeUniverse,JSON.parse('{"SW":{"P":[],"e":[]},"ab8":{"ad":["SW"]},"ab7":{"ax":[],"e":[]},"tz":{"re":[]},"Mo":{"re":[]},"a9E":{"fz":[],"dA":[]}}'))
var y=(function rtii(){var x=A.G
return{d:x("a_G"),N:x("fZ<n>"),o:x("m<al>"),E:x("m<j<c>>"),t:x("m<j<@>>"),s:x("m<c>"),T:x("m<hG>"),p:x("m<e>"),n:x("m<dA>"),q:x("m<W8>"),l:x("j<cN>"),r:x("j<kn>"),Y:x("j<cL>"),c:x("j<bv>"),e:x("j<d4>"),P:x("j<di>"),W:x("aG<n,n>"),U:x("bs"),R:x("c"),w:x("pS"),I:x("re"),j:x("dA"),z:x("@"),S:x("n"),u:x("cj?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b0n=new E.qZ(0.09411764705882353,0.13333333333333333,0.20392156862745098)
D.r5=new E.KV(D.b0n,null)
D.t8=new E.mK(0,0,0,6)
D.t9=new A.a6(0,9,0,9)
D.a3k=new A.a6(14,6,14,10)
D.A1=new E.mK(6,5,6,5)
D.a4j=new A.a6(9,2,9,2)
D.a8V=new B.tz(45)
D.As=new B.tz(48)
D.a8W=new B.tz(50)
D.a8X=new B.tz(62)
D.At=new B.tz(66)
D.kD=new B.tz(92)
D.tT=new B.Mo(2)
D.a8Y=new B.Mo(3)
D.aOm=x(["Return","Customer","Against Bill","Item Exchanged","Value"],y.s)
D.aTq=x(["BILL","CUSTOMER","ITEMS","NET","TENDER"],y.s)
D.aU2=x(["Bill","Customer","Items","Net","Tender"],y.s)
D.aVk=x(["RETURN","CUSTOMER","AGAINST BILL","ITEM EXCHANGED","VALUE"],y.s)
D.aW8=x(["RETURN","CUSTOMER","AGAINST BILL","ITEM","AMOUNT","MODE"],y.s)
D.aWe=x(["Return","Customer","Against Bill","Item","Amount","Mode"],y.s)
D.vB=new E.qZ(0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.ju=new B.xm(0,"daily")
D.vK=new B.xm(1,"weekly")
D.vL=new B.xm(2,"monthly")
D.d8=new B.xm(3,"custom")
D.Rc=new A.fZ([4],y.N)
D.b3P=new A.fZ([3],y.N)
D.b8J=new A.E(!0,C.D,null,null,null,null,12,C.ac,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Sw=new E.or(!0,null,null,null,null,null,F.by,8.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.b0o=new E.qZ(0.6196078431372549,0.6196078431372549,0.6196078431372549)
D.wJ=new E.or(!0,D.b0o,null,null,null,null,F.by,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.wK=new E.or(!0,F.fC,null,null,null,null,F.by,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.bgP=new B.aRy(0,"start")
D.bgQ=new B.aRz(0,"start")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cqp","c02",()=>B.wd("FF182234"))
x($,"cqk","bMA",()=>B.wd("FF1E3A8A"))
x($,"cqn","bMC",()=>B.wd("FF6B7280"))
x($,"cqi","bMz",()=>B.wd("FFF3F5FA"))
x($,"cqm","bMB",()=>B.wd("FFE6E9F2"))})()};
(a=>{a["b3e1r/d/tTgafKlfOHkuym44x4E="]=a.current})($__dart_deferred_initializers__);