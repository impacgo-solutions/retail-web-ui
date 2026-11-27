((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,X,E,F,T,Y,U,I,K,P,Z,V,G,H,Q,W,C={
i_(d){var x
switch(d.a){case 0:x="Daily"
break
case 1:x="Weekly"
break
case 2:x="Monthly"
break
case 3:x="Custom Range"
break
default:x=null}return x},
qZ(d,e){var x
if(d==null||d.length===0)return"Walk-in Customer"
x=e.h(0,d)
return x==null?d:x},
bTA(d,e){if(J.de(d.ghH(d)))return"\u2014"
return J.ba(d.ghH(d),new C.bTB(e),y.N).av(0,", ")},
cd0(d){var x,w,v,u,t,s=A.aZ("^(\\d{1,2}):(\\d{2})\\s*([AaPp][Mm])$",!0,!1,!1).fa(B.h.F(d))
if(s==null)return null
x=s.b
w=x[1]
w.toString
v=A.cZ(w,null)
w=x[2]
w.toString
u=A.cZ(w,null)
t=x[3].toUpperCase()==="PM"
if(t&&v!==12)v+=12
return(!t&&v===12?0:v)*60+u},
cyr(d){var x,w,v=d.ay==="Open",u=v?"ongoing":d.w,t=d.r,s=C.cd0(t),r=new A.bn(Date.now(),0,!1),q=v?A.eX(r)*60+A.kd(r):C.cd0(d.w)
if(s==null||q==null)return t+" - "+u
x=q-s
if(x<0)x+=1440
w=B.t.bl(x,60)
v=""+B.t.aG(x,60)
return(w>0?""+w+"h "+v+"m":v+"m")+" ("+t+" - "+u+")"},
c3o(d,e){var x,w,v=A.l4(A.fi())
switch(d.a){case 0:x=new A.A7(v,v)
break
case 1:x=new A.A7(v.eq(-6048e8),v)
break
case 2:x=new A.A7(v.eq(-2592e9),v)
break
case 3:if(e==null)x=new A.A7(v,v)
else{x=e.a
x=A.ct(A.b6(x),A.b4(x),A.cC(x),0,0,0,0)
w=e.b
w=new A.A7(x,A.ct(A.b6(w),A.b4(w),A.cC(w),0,0,0,0))
x=w}break
default:x=null}return x},
a0r(d,e,f,g){return C.czr(d,e,f,g)},
czr(c8,c9,d0,d1){var x=0,w=A.t(y.d),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$a0r=A.o(function(d2,d3){if(d2===1){t.push(d3)
x=u}for(;;)switch(x){case 0:b8=c8.m(0,$.af(),y.v)
b9=c8.m(0,$.iN(),y.U)
c0=c8.m(0,$.mp(),y.u)
c1=c8.m(0,$.LW(),y.e)
c2=c8.m(0,$.iP(),y.P)
c3=c8.m(0,$.pz(),y.r)
c4=c8.m(0,$.nn(),y.W)
c5=y.N
c6=A.A(c5,c5)
for(j=J.a0(c8.m(0,$.eq(),y.l));j.n();){i=j.gB(j)
c6.l(0,i.a,i.b)}c5=A.A(c5,c5)
for(j=J.a0(c8.m(0,$.fr(),y.Y));j.n();){i=j.gB(j)
c5.l(0,i.a,i.c)}j=d0==null
if(j){i=b8==null?null:b8.a
h=i==null?"Cashier":i}else h=d0
g=new C.bQd(A.l4(A.fi()))
f=new C.bQe(d1)
i=J.b8(c0,new C.bQg(h,c9,f,g))
e=A.U(i,i.$ti.i("F.E"))
i=J.b8(c1,new C.bQf(h,c9,f,g))
d=A.U(i,i.$ti.i("F.E"))
i=A.al(d).i("ap<1>")
a0=i.i("F.E")
a1=A.U(new A.ap(d,new C.bQ0(),i),a0)
a2=A.U(new A.ap(d,new C.bQ1(),i),a0)
i=J.cj(c2)
a0=i.cu(c2,new C.bQ2(h))
a3=A.U(a0,a0.$ti.i("F.E"))
a0=A.al(a3).i("ap<1>")
a4=A.U(new A.ap(a3,new C.bQh(c9,f,g),a0),a0.i("F.E"))
a5=a3.length===0?null:B.e.hX(a3,new C.bQ5(),new C.bQ6(a3))
a6=B.e.bd(a4,0,new C.bQ7())
s=B.e.bd(a4,0,new C.bQ8())
r=B.e.bd(a4,0,new C.bQ9())
q=B.e.bd(a4,0,new C.bQa())
p=B.e.bd(a4,0,new C.bQb())
o=B.e.bd(a4,0,new C.bQc())
a0=c9===D.k9
x=a0?3:5
break
case 3:a7=b8==null
n=a7?null:b8.Q
if(n==null)n=""
if(!j){j=A.cB(i.cu(c2,new C.bQ3(h)))
m=j==null?null:j.cy}else m=a7?null:b8.at
x=n.length!==0&&m!=null?6:7
break
case 6:x=8
return A.h(B.eF.zr(m,J.AC(b9),n),$async$a0r)
case 8:a8=d3
a9=a8.a
s=a9
b0=a8.e
r=b0
b1=a8.c
q=b1
b2=a8.r
p=b2
o=a9+b1+b0+b2
case 7:x=4
break
case 5:a7=b8==null
b3=a7?null:b8.Q
n=b3==null?"":b3
if(!j){j=A.cB(i.cu(c2,new C.bQ4(h)))
b4=j==null?null:j.cy}else b4=a7?null:b8.at
m=b4
x=J.T(n)!==0&&m!=null?9:10
break
case 9:u=12
l=C.c3o(c9,d1)
j=l.a
i=l.b
x=15
return A.h(X.n0.Ef(m,j,J.AC(b9),i,n),$async$a0r)
case 15:k=d3
s=k.c
r=k.r
q=k.e
p=k.x
o=k.b
u=2
x=14
break
case 12:u=11
c7=t.pop()
if(!(A.Q(c7) instanceof A.ax))throw c7
x=14
break
case 11:x=2
break
case 14:case 10:case 4:if(a0)b6=a5==null?"-":C.cyr(a5)
else{b7=a4.length
j=b7===1?"":"s"
b6=""+b7+" shift"+j+" worked"}switch(c9.a){case 0:j=Q.d0(A.fi())
break
case 1:j="Last 7 days"
break
case 2:j="Last 30 days"
break
case 3:j=d1==null?"Custom range":Q.d0(B.e.gM(d1.a.jD().split("T")))+" - "+Q.d0(B.e.gM(d1.b.jD().split("T")))
break
default:j=null}i=J.M_(b9)
a0=J.c4I(b9)
a7=a5==null?"\u2014":a5.d+" \xb7 "+a5.e
v=new C.a2g(c9,j,h,i+" \xb7 "+a0,a7,b6,a6,s,r,q,p,o,J.T(c3),c4,e,a1,a2,c6,c5)
x=1
break
case 1:return A.q(v,w)
case 2:return A.p(t.at(-1),w)}})
return A.r($async$a0r,w)},
yF:function yF(d,e){this.a=d
this.b=e},
a2g:function a2g(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aum:function aum(){},
aun:function aun(){},
auq:function auq(){},
aup:function aup(){},
aus:function aus(){},
auo:function auo(){},
aut:function aut(){},
aur:function aur(){},
auu:function auu(){},
bTB:function bTB(d){this.a=d},
bQd:function bQd(d){this.a=d},
bQe:function bQe(d){this.a=d},
bQg:function bQg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQf:function bQf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQh:function bQh(d,e,f){this.a=d
this.b=e
this.c=f},
bQ0:function bQ0(){},
bQ1:function bQ1(){},
bQ2:function bQ2(d){this.a=d},
bQ5:function bQ5(){},
bQ6:function bQ6(d){this.a=d},
bQ7:function bQ7(){},
bQ8:function bQ8(){},
bQ9:function bQ9(){},
bQa:function bQa(){},
bQb:function bQb(){},
bQc:function bQc(){},
bQ3:function bQ3(d){this.a=d},
bQ4:function bQ4(d){this.a=d},
LI(d,e,f,g,h){return C.cBo(d,e,f,g,h)},
cBo(d,e,f,g,h){var x=0,w=A.t(y.H),v,u,t,s,r
var $async$LI=A.o(function(i,j){if(i===1)return A.p(j,w)
for(;;)switch(x){case 0:x=3
return A.h(C.a0r(e,f,g,h),$async$LI)
case 3:r=j
if(d.e==null){x=1
break}u=C.i_(f)
u=A.aR(u.toLowerCase()," ","_")
t=f===D.dj?r.b:C.i_(f)
s=A.N(null,!1,null,null,null,null,null,"Close",new C.bSq(d),B.C,B.aa)
A.bt(d,new C.V6(r,null),A.a([s,A.N(null,!1,null,null,null,A.bz("printer",$.d?B.v:B.r,14),null,"Print",new C.bSr(d),B.C,B.aa),A.N(null,!1,null,null,null,N.fg,null,"Download PDF",new C.bSs(d,r,"cashier_report_"+u+".pdf"),B.C,B.a8)],y.p),t+" Cashier Report \u2014 PDF Preview",B.bF,y.z)
case 1:return A.q(v,w)}})
return A.r($async$LI,w)},
LH(d,e,f,g,h){return C.cBn(d,e,f,g,h)},
cBn(d,e,f,g,h){var x=0,w=A.t(y.H),v,u,t,s
var $async$LH=A.o(function(i,j){if(i===1)return A.p(j,w)
for(;;)switch(x){case 0:x=3
return A.h(C.a0r(e,f,g,h),$async$LH)
case 3:s=j
if(d.e==null){x=1
break}u=C.i_(f)
u=A.aR(u.toLowerCase()," ","_")
t=f===D.dj?s.b:C.i_(f)
A.bt(d,new C.ae_(s,null),A.a([A.N(null,!1,null,null,null,null,null,"Close",new C.bSo(d),B.C,B.aa),A.N(null,!1,null,null,null,N.fg,null,"Download .xlsx",new C.bSp(d,s,"cashier_report_"+u+".xlsx"),B.C,B.hK)],y.p),t+" Cashier Report \u2014 Excel Preview",B.bF,y.z)
case 1:return A.q(v,w)}})
return A.r($async$LH,w)},
cdu(d){var x,w,v,u,t,s,r=null,q=d.c,p=d.d,o=d.e,n=A.e(q+" \xb7 "+p+" \xb7 "+o,r,r,r,r,r,A.k($.d?B.E:B.D,r,r,r,13,B.n).aA(12.5),r,r),m=$.d,l=m?B.at:B.ax,k=A.aW(m?B.U:B.X,B.K,1),j=A.as(14),i=A.e("SUMMARY",r,r,r,r,r,A.k(m?B.E:B.D,r,r,r,12,B.am),r,r),h=d.r,g=d.w,f=y.o
g=A.a([new A.Y("Date",d.b,!1),new A.Y("Branch",p,!1),new A.Y("Cashier",q,!1),new A.Y("Counter",o,!1),new A.Y("Shift Timings",d.f,!1),new A.Y("Opening Float",A.E(h),!1),new A.Y("Cash Sales",A.E(g),!1),new A.Y("UPI Sales",A.E(d.x),!1),new A.Y("Card Sales",A.E(d.y),!1),new A.Y("Wallet Sales",A.E(d.z),!1),new A.Y("Expected Drawer Total (Cash)",A.E(h+g),!1),new A.Y("Total Sales",A.E(d.Q),!1),new A.Y("No. of Bills",""+d.ax.length,!1),new A.Y("No. of Returns & Exchanges",""+(d.ay.length+d.ch.length),!1),new A.Y("Held Bills",""+d.as,!1)],f)
q=A.e("GST / TAX SUMMARY",r,r,r,r,r,A.k($.d?B.E:B.D,r,r,r,12,B.am),r,r)
f=A.a([new A.Y("Gross Sales (MRP)",A.E(d.gOF()),!1),new A.Y("Discounts",A.E(d.gW7()),!1),new A.Y("Taxable Value",A.E(d.gyx()-d.gz3()),!1),new A.Y("CGST",A.E(d.gV5()),!1),new A.Y("SGST",A.E(d.gP1()),!1)],f)
if(d.gyc()>0)f.push(new A.Y("IGST",A.E(d.gyc()),!1))
f.push(new A.Y("Total GST",A.E(d.gz3()),!1))
f.push(new A.Y("Net Sales (Bills)",A.E(d.gyx()),!1))
p=A.e("DENOMINATION FINAL COUNT (AFTER CLOSING)",r,r,r,r,r,A.k($.d?B.E:B.D,r,r,r,12,B.am),r,r)
if(d.gl9().length===0)o=A.e("No cash denominations counted yet.",r,r,r,r,r,A.k($.d?B.Y:B.T,r,1.5,r,13.5,B.n),r,r)
else{o=A.a([],y.p)
for(m=d.gl9(),h=m.length,x=0;x<m.length;m.length===h||(0,A.y)(m),++x){w=m[x]
v=$.d
u=v?B.ap:B.J
t=new A.aK(v?B.U:B.X,1,B.K,-1)
s=new A.bk(6,6)
v=v?B.v:B.r
o.push(A.S(r,A.e("\u20b9"+w.a+" \xd7 "+w.b,r,r,r,r,r,new A.z(!0,v,r,"Inter",r,r,11.8,B.H,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r),B.y,r,r,new A.a_(u,r,new A.bK(t,t,t,t),new A.dl(s,s,s,s),r,r,B.F),r,r,r,r,V.u5,r,r,r))}o=A.ci(B.aG,o,B.b1,8,8)}m=y.p
return A.I(A.a([n,B.au,A.S(r,A.I(A.a([i,B.aW,new A.dZ(g,2,r),B.au,q,B.aW,new A.dZ(f,2,r),B.au,p,B.b0,o],m),B.A,r,B.o,B.L),B.y,r,r,new A.a_(l,r,k,j,r,r,B.F),r,r,r,r,B.du,r,r,1/0)],m),B.A,r,B.o,B.L)},
bSq:function bSq(d){this.a=d},
bSr:function bSr(d){this.a=d},
bSs:function bSs(d,e,f){this.a=d
this.b=e
this.c=f},
bSo:function bSo(d){this.a=d},
bSp:function bSp(d,e,f){this.a=d
this.b=e
this.c=f},
V6:function V6(d,e){this.c=d
this.a=e},
ae0:function ae0(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.x=_.w=_.r=null},
b2F:function b2F(d){this.a=d},
b2E:function b2E(d){this.a=d},
b2G:function b2G(d){this.a=d},
b2D:function b2D(d){this.a=d},
b2H:function b2H(d){this.a=d},
b2C:function b2C(d){this.a=d},
b2x:function b2x(d,e,f){this.a=d
this.b=e
this.c=f},
b2w:function b2w(d,e,f){this.a=d
this.b=e
this.c=f},
b2B:function b2B(d,e,f){this.a=d
this.b=e
this.c=f},
b2A:function b2A(d,e,f){this.a=d
this.b=e
this.c=f},
b2z:function b2z(d,e,f){this.a=d
this.b=e
this.c=f},
b2y:function b2y(d,e,f){this.a=d
this.b=e
this.c=f},
ae_:function ae_(d,e){this.c=d
this.a=e},
cd1(d){var x=A.aR(d,"\u2013","-")
x=A.aR(x,"\u2014","-")
x=A.aR(x,"\u2019","'")
x=A.aR(x,"\u2018","'")
x=A.aR(x,"\u201c",'"')
x=A.aR(x,"\u201d",'"')
return A.aR(x,"\xd7","x")},
bR3(d){var x=0,w=A.t(y.H),v,u,t
var $async$bR3=A.o(function(e,f){if(e===1)return A.p(f,w)
for(;;)switch(x){case 0:t=E.Gm(null)
t.uc(T.PL(new C.bR4(d,new C.bR5(),new C.bR6()),null,null,null,F.k1))
x=2
return A.h(t.hQ(0),$async$bR3)
case 2:v=f
u=C.i_(d.a)
U.qY("cashier_report_"+A.aR(u.toLowerCase()," ","_")+".pdf",v,"application/pdf")
return A.q(null,w)}})
return A.r($async$bR3,w)},
cdB(d,e){var x=null,w=d?$.c4j():H.dN
return G.mz(w,e,G.MJ($.c4l(),H.mU),x,!1,!1,H.cA,x,x,x,H.e1,!1,x,H.dA,x,0,x,x,H.cM,H.r7)},
cA0(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="Cashier Report",d={},a0=G.a4e(new A.wQ().bE("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")),a1=a0.EH()
a1.toString
a0.Ni(a1,e)
a0.oN(e)
x=a0.x.h(0,e)
x.kT(0,26)
x.kT(1,22)
x.kT(2,34)
x.kT(3,16)
x.kT(4,18)
x.kT(5,18)
d.a=0
w=new C.bQZ(x)
v=new C.bR1(d,x,w)
u=new C.bR0(d,w)
t=new C.bQY(d)
s=new C.bR2(d,v,w,t)
a1=a2.a
v.$3$bold$fontSize(C.i_(a1)+" Cashier Report",!0,16)
r=a2.c
q=a2.d
p=a2.e
v.$4$bold$color$fontSize(r+" \xb7 "+q+" \xb7 "+p,!1,$.c4m(),10)
t.$0()
o=$.c4k()
v.$3$bold$color("SUMMARY",!0,o)
u.$2("Date",a2.b)
u.$2("Branch",q)
u.$2("Cashier",r)
u.$2("Counter",p)
u.$2("Shift Timings",a2.f)
p=a2.r
u.$2("Opening Float",A.E(p))
r=a2.w
u.$2("Cash Sales",A.E(r))
u.$2("UPI Sales",A.E(a2.x))
u.$2("Card Sales",A.E(a2.y))
u.$2("Wallet Sales",A.E(a2.z))
u.$2("Expected Drawer Total (Cash)",A.E(p+r))
u.$2("Total Sales",A.E(a2.Q))
r=a2.ax
u.$2("No. of Bills",""+r.length)
p=a2.ay
q=a2.ch
u.$2("No. of Returns & Exchanges",""+(p.length+q.length))
u.$2("Held Bills",""+a2.as)
if(a2.gl9().length!==0){n=a2.gl9()
u.$2("Denomination Final Count",new A.aw(n,new C.bR_(),A.al(n).i("aw<1,c>")).av(0,"  "))}t.$0()
v.$3$bold$color("GST / TAX SUMMARY",!0,o)
u.$2("Gross Sales (MRP)",A.E(a2.gOF()))
u.$2("Discounts",A.E(a2.gW7()))
u.$2("Taxable Value",A.E(a2.gyx()-a2.gz3()))
u.$2("CGST",A.E(a2.gV5()))
u.$2("SGST",A.E(a2.gP1()))
if(a2.gyc()>0)u.$2("IGST",A.E(a2.gyc()))
u.$2("Total GST",A.E(a2.gz3()))
u.$2("Net Sales (Bills)",A.E(a2.gyx()))
t.$0()
o=r.length
n=y.E
m=A.a([],n)
for(l=r.length,k=a2.CW,j=a2.cx,i=y.s,h=0;h<r.length;r.length===l||(0,A.y)(r),++h){g=r[h]
m.push(A.a([g.gad(g),C.qZ(g.gf6(),k),C.bTA(g,j),A.E(g.gfT()),g.gfR(g)],i))}s.$3("BILLS ("+o+")",D.aXu,m)
r=p.length
o=A.a([],n)
for(m=p.length,h=0;h<p.length;p.length===m||(0,A.y)(p),++h){f=p[h]
o.push(A.a([f.a,C.qZ(f.d,k),f.b,f.f,A.E(f.w),f.y],i))}s.$3("RETURNS ("+r+")",D.b05,o)
r=q.length
n=A.a([],n)
for(p=q.length,h=0;h<q.length;q.length===p||(0,A.y)(q),++h){f=q[h]
n.push(A.a([f.a,C.qZ(f.d,k),f.b,f.f,A.E(f.w)],i))}s.$3("EXCHANGES ("+r+")",D.aQJ,n)
r=a0.dx
r===$&&A.b()
r=new G.Ih(a0,A.A(y.N,y.c),A.a([],y.T),r).Gk()
r.toString
a1=C.i_(a1)
U.qY("cashier_report_"+A.aR(a1.toLowerCase()," ","_")+".xlsx",new Uint8Array(A.f4(r)),"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")},
bR5:function bR5(){},
bR6:function bR6(){},
bR4:function bR4(d,e,f){this.a=d
this.b=e
this.c=f},
bQZ:function bQZ(d){this.a=d},
bR1:function bR1(d,e,f){this.a=d
this.b=e
this.c=f},
bR0:function bR0(d,e){this.a=d
this.b=e},
bQY:function bQY(d){this.a=d},
bR2:function bR2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bR_:function bR_(){},
cal(d,e,f){return new C.acx(f,e,new C.acy(),d)},
aVX:function aVX(d,e){this.a=d
this.b=e},
aVY:function aVY(d,e){this.a=d
this.b=e},
Yw:function Yw(d,e,f){this.a=d
this.b=e
this.c=f},
acy:function acy(){this.b=this.a=0},
acx:function acx(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
aok:function aok(){}},D,M,O,R,L,S,N,A_
J=c[1]
A=c[0]
B=c[2]
X=c[202]
E=c[106]
F=c[217]
T=c[100]
Y=c[233]
U=c[107]
I=c[99]
K=c[95]
P=c[265]
Z=c[98]
V=c[216]
G=c[89]
H=c[230]
Q=c[124]
W=c[173]
C=a.updateHolder(c[69],C)
D=c[257]
M=c[81]
O=c[231]
R=c[236]
L=c[240]
S=c[122]
N=c[255]
A_=c[238]
C.yF.prototype={
R(){return"ReportPeriod."+this.b}}
C.a2g.prototype={
gl9(){var x=J.AB(this.at)
x=x.cu(x,new C.aum()).aF(0)
B.e.dK(x,new C.aun())
return x},
gOF(){return B.e.bd(this.ax,0,new C.auq())},
gW7(){return B.e.bd(this.ax,0,new C.aup())},
gyx(){return B.e.bd(this.ax,0,new C.aus())},
gV5(){return B.e.bd(this.ax,0,new C.auo())},
gP1(){return B.e.bd(this.ax,0,new C.aut())},
gyc(){return B.e.bd(this.ax,0,new C.aur())},
gz3(){return B.e.bd(this.ax,0,new C.auu())}}
C.V6.prototype={
V(){return new C.ae0()}}
C.ae0.prototype={
H(d){var x,w,v,u,t,s=this,r=null,q=s.a.c,p=C.cdu(q),o=A.e("DETAILS",r,r,r,r,r,A.k($.d?B.E:B.D,r,r,r,12,B.am),r,r),n=q.ax,m=n.length,l=s.d
if(m===0)n=A.a([A.e("No bills in this period.",r,r,r,r,r,A.k($.d?B.Y:B.T,r,1.5,r,13.5,B.n),r,r)],y.p)
else{x=A.a([],y.p)
for(w=n.length,v=0;v<n.length;n.length===w||(0,A.y)(n),++v)x.push(s.att(n[v]))
n=x}n=s.QZ(m,new C.b2F(s),l,n,"Bills")
l=q.ay
m=l.length
x=s.e
if(m===0)l=A.a([A.e("No returns in this period.",r,r,r,r,r,A.k($.d?B.Y:B.T,r,1.5,r,13.5,B.n),r,r)],y.p)
else{w=A.a([],y.p)
for(u=l.length,v=0;v<l.length;l.length===u||(0,A.y)(l),++v)w.push(s.aK9(l[v]))
l=w}l=s.QZ(m,new C.b2G(s),x,l,"Returns")
x=q.ch
m=x.length
w=s.f
if(m===0)x=A.a([A.e("No exchanges in this period.",r,r,r,r,r,A.k($.d?B.Y:B.T,r,1.5,r,13.5,B.n),r,r)],y.p)
else{u=A.a([],y.p)
for(t=x.length,v=0;v<x.length;x.length===t||(0,A.y)(x),++v)u.push(s.axC(x[v]))
x=u}return A.I(A.a([p,W.cm,o,B.aW,n,B.b0,l,B.b0,s.QZ(m,new C.b2H(s),w,x,"Exchanges")],y.p),B.A,r,B.o,B.L)},
QZ(d,e,f,g,h){var x,w=null,v=$.d,u=A.aW(v?B.U:B.X,B.K,1),t=A.as(8),s=v?B.at:B.ax,r=f?0.5:0,q=y.p
r=A.V(A.a([A.c4W(A.bz("chevdown",v?B.Y:B.T,14),B.fp,r),B.aM,A.e(h,w,w,w,w,w,A.k(w,w,w,w,11.8,B.H).aA(13),w,w)],q),B.B,B.o,B.u)
x=A.as(20)
q=A.a([A.bH(A.bx(w,A.S(w,A.V(A.a([r,A.S(w,A.e(""+d,w,w,w,w,w,D.beg,w,w),B.y,w,w,new A.a_(B.a7,w,w,x,w,w,B.F),w,w,w,w,D.a5G,w,w,w)],q),B.B,B.bX,B.u),B.y,s,w,w,w,w,w,w,A_.jp,w,w,w),B.af,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w),B.an,w,w,w,w)],q)
if(f)q.push(new A.a4(D.a4F,A.I(g,B.A,w,B.o,B.L),w))
return A.S(w,A.I(q,B.A,w,B.o,B.L),B.c0,w,w,new A.a_(w,w,u,t,w,w,B.F),w,w,w,w,w,w,w,w)},
att(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.r===d.gad(d),n=$.d?B.U:B.X,m=A.e(d.gad(d)+" \xb7 "+C.qZ(d.gf6(),q.a.c.CW),p,p,p,p,p,A.k(p,p,p,p,11.8,B.H),p,p),l=C.bTA(d,q.a.c.cx)
l=A.e(l,p,2,B.a2,p,p,A.k($.d?B.E:B.D,p,p,p,11,B.n),p,p)
x=d.gdZ(d)
w=d.gfR(d)
v=y.p
v=A.a([A.bH(A.bx(p,A.S(p,A.V(A.a([A.aC(A.I(A.a([m,B.cW,l,B.cW,A.e(x+" \xb7 "+w,p,p,p,p,p,A.k($.d?B.E:B.D,p,p,p,13,B.n).aA(11),p,p)],v),B.A,p,B.o,B.L),1),B.aI,A.e(A.E(d.gfT()),p,p,p,p,p,A.k(p,p,p,p,11.8,B.H),p,p)],v),B.A,B.o,B.u),B.y,p,p,new A.a_(p,p,new A.bK(new A.aK(n,1,B.K,-1),B.N,B.N,B.N),p,p,p,B.F),p,p,p,p,D.tY,p,p,p),B.af,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.b2x(q,o,d),p,p,p),B.an,p,p,p,p)],v)
if(o){n=$.d?B.at:B.ax
m=A.as(6)
l=d.gdQ()
x=A.E(d.gOE())
w=A.E(d.gKv())
u=A.E(d.gNs())
t=A.E(d.gfT())
s=d.gfR(d)
r=d.gaL(d)
v.push(A.S(p,A.e(""+l+" items \xb7 MRP "+x+" \xb7 Discount "+w+" \xb7 GST "+u+" \xb7 Net "+t+" \xb7 Paid via "+s+", "+r+".",p,p,p,p,p,A.k($.d?B.E:B.D,p,p,p,13,B.n).aA(11.5),p,p),B.y,p,p,new A.a_(n,p,p,m,p,p,B.F),p,p,p,L.ho,B.fq,p,p,1/0))}return A.I(v,B.B,p,B.o,B.L)},
aK9(d){var x,w,v,u,t=null,s=d.a,r=this.w===s,q=$.d?B.U:B.X
s=A.e(s+" \xb7 "+C.qZ(d.d,this.a.c.CW),t,t,t,t,t,A.k(t,t,t,t,11.8,B.H),t,t)
x=d.f
w=A.e(x,t,2,B.a2,t,t,A.k($.d?B.E:B.D,t,t,t,11,B.n),t,t)
v=d.y
u=y.p
u=A.a([A.bH(A.bx(t,A.S(t,A.V(A.a([A.aC(A.I(A.a([s,B.cW,w,B.cW,A.e("against "+d.b+" \xb7 "+v,t,t,t,t,t,A.k($.d?B.E:B.D,t,t,t,13,B.n).aA(11),t,t)],u),B.A,t,B.o,B.L),1),B.aI,A.e(A.E(d.w),t,t,t,t,t,A.k(t,t,t,t,11.8,B.H),t,t)],u),B.A,B.o,B.u),B.y,t,t,new A.a_(t,t,new A.bK(new A.aK(q,1,B.K,-1),B.N,B.N,B.N),t,t,t,B.F),t,t,t,t,D.tY,t,t,t),B.af,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.b2B(this,r,d),t,t,t),B.an,t,t,t,t)],u)
if(r){s=$.d
q=s?B.at:B.ax
w=A.as(6)
u.push(A.S(t,A.e(x+" \xd7 "+d.r+" \u2014 Reason: "+d.x+". Refunded as "+v+".",t,t,t,t,t,A.k(s?B.E:B.D,t,t,t,13,B.n).aA(11.5),t,t),B.y,t,t,new A.a_(q,t,t,w,t,t,B.F),t,t,t,L.ho,B.fq,t,t,1/0))}return A.I(u,B.B,t,B.o,B.L)},
axC(d){var x,w,v=null,u=d.a,t=this.x===u,s=$.d?B.U:B.X
u=A.e(u+" \xb7 "+C.qZ(d.d,this.a.c.CW),v,v,v,v,v,A.k(v,v,v,v,11.8,B.H),v,v)
x=A.e(d.y,v,2,B.a2,v,v,A.k($.d?B.E:B.D,v,v,v,11,B.n),v,v)
w=y.p
w=A.a([A.bH(A.bx(v,A.S(v,A.V(A.a([A.aC(A.I(A.a([u,B.cW,x,B.cW,A.e("against "+d.b,v,v,v,v,v,A.k($.d?B.E:B.D,v,v,v,13,B.n).aA(11),v,v)],w),B.A,v,B.o,B.L),1),B.aI,A.e(A.E(d.w),v,v,v,v,v,A.k(v,v,v,v,11.8,B.H),v,v)],w),B.A,B.o,B.u),B.y,v,v,new A.a_(v,v,new A.bK(new A.aK(s,1,B.K,-1),B.N,B.N,B.N),v,v,v,B.F),v,v,v,v,D.tY,v,v,v),B.af,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.b2z(this,t,d),v,v,v),B.an,v,v,v,v)],w)
if(t){u=$.d
s=u?B.at:B.ax
x=A.as(6)
w.push(A.S(v,A.e(d.f+" \xd7 "+d.r+" \u2014 Reason: "+d.x+". Recorded as an exchange.",v,v,v,v,v,A.k(u?B.E:B.D,v,v,v,13,B.n).aA(11.5),v,v),B.y,v,v,new A.a_(s,v,v,x,v,v,B.F),v,v,v,L.ho,B.fq,v,v,1/0))}return A.I(w,B.B,v,B.o,B.L)}}
C.ae_.prototype={
H(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c,j=C.cdu(k),i=k.ax,h=i.length
h=A.e("BILLS ("+h+")",l,l,l,l,l,A.k($.d?B.E:B.D,l,l,l,12,B.am),l,l)
x=y.E
w=A.a([],x)
for(v=i.length,u=k.CW,t=k.cx,s=y.s,r=0;r<i.length;i.length===v||(0,A.y)(i),++r){q=i[r]
w.push(A.a([q.gad(q),C.qZ(q.gf6(),u),C.bTA(q,t),A.E(q.gfT()),q.gfR(q)],s))}i=m.Rl(D.aWy,D.b91,w)
w=k.ay
v=w.length
v=A.e("RETURNS ("+v+")",l,l,l,l,l,A.k($.d?B.E:B.D,l,l,l,12,B.am),l,l)
t=A.a([],x)
for(p=w.length,r=0;r<w.length;w.length===p||(0,A.y)(w),++r){o=w[r]
t.push(A.a([o.a,C.qZ(o.d,u),o.b,o.f,A.E(o.w),o.y],s))}w=m.Rl(D.b_X,D.S6,t)
t=k.ch
p=t.length
p=A.e("EXCHANGES ("+p+")",l,l,l,l,l,A.k($.d?B.E:B.D,l,l,l,12,B.am),l,l)
x=A.a([],x)
for(n=t.length,r=0;r<t.length;t.length===n||(0,A.y)(t),++r){o=t[r]
x.push(A.a([o.a,C.qZ(o.d,u),o.b,o.f,A.E(o.w)],s))}return A.I(A.a([j,W.cm,h,B.b0,i,B.dz,v,B.b0,w,B.dz,p,B.b0,m.Rl(D.aZM,D.S6,x)],y.p),B.A,l,B.o,B.L)},
Rl(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=null
if(f.length===0){x=$.d
w=A.aW(x?B.U:B.X,B.K,1)
v=A.as(8)
return A.S(B.ak,A.e("Nothing to show for this period.",l,l,l,l,l,A.k(x?B.Y:B.T,l,1.5,l,13.5,B.n),l,l),B.y,l,l,new A.a_(l,l,w,v,l,l,B.F),l,l,l,l,V.nJ,l,l,l)}x=A.aW($.d?B.U:B.X,B.K,1)
w=A.as(8)
v=A.A(y.S,y.w)
for(u=d.length,t=0;t<u;++t)v.l(0,t,N.hQ)
s=y.p
r=A.a([],s)
for(t=0;t<u;++t){q=d[t]
p=$.d?B.Y:B.T
p=new A.z(!0,p,l,"Inter",l,l,12,B.H,l,0.3,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l).ai(B.J)
r.push(new A.a4(B.i4,A.e(q,l,l,l,l,l,p,e.q(0,t)?B.bJ:B.cg,l),l))}u=A.a([new S.i1(N.mY,r)],y.V)
for(o=0;o<f.length;++o){if((o&1)===0)r=$.d?B.ap:B.J
else r=$.d?B.at:B.ax
q=A.a([],s)
for(t=0;p=f[o],t<p.length;++t){p=p[t]
n=$.d?B.v:B.r
m=e.q(0,t)?B.bJ:B.cg
q.push(new A.a4(B.i4,A.e(p,l,l,l,l,l,new A.z(!0,n,l,"Inter",l,l,13.5,B.n,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),m,l),l))}u.push(new S.i1(new A.a_(r,l,l,l,l,l,B.F),q))}return A.S(l,S.T8(u,v,N.mo),B.c0,l,l,new A.a_(l,l,x,w,l,l,B.F),l,l,l,l,l,l,l,l)}}
C.aVX.prototype={
R(){return"WrapAlignment."+this.b}}
C.aVY.prototype={
R(){return"WrapCrossAlignment."+this.b}}
C.Yw.prototype={}
C.acy.prototype={
ed(d){this.a=d.a
this.b=d.b},
nT(d){var x=new C.acy()
x.a=this.a
x.b=this.b
return x},
j(d){return A.O(this).j(0)+" first:"+this.a+" last:"+this.b}}
C.acx.prototype={
gmO(){return!0},
grC(){return this.z.b<this.b.length},
a4L(d){switch(0){case 0:return d.a.c}},
a4B(d){switch(0){case 0:return d.a.d}},
az2(d,e){switch(0){case 0:return new E.jL(d,e)}},
ayD(d,e,f){var x=e-f
switch(0){case 0:return d?x:0}},
e5(b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.b,b2=b1.length
if(b2===0||b0.z.a>=b2){b0.a=new E.fI(0,0,B.t.aK(0,b4.a,b4.b),B.t.aK(0,b4.c,b4.d))
return}x=E.Gl(b3)
switch(0){case 0:w=b4.b
v=new E.fE(0,w,0,1/0)
u=x===F.qX
break}t=A.a([],y.q)
s=A.A(y.j,y.S)
for(b2=b0.z,r=B.e.he(b1,b2.a),q=r.length,p=b0.f,o=b0.w,n=0,m=0,l=0,k=0,j=0,i=0;i<r.length;r.length===q||(0,A.y)(r),++i){h=r[i]
h.e5(b3,v,!0)
g=b0.a4L(h)
g.toString
f=b0.a4B(h)
f.toString
if(j>0&&l+p+g>w){n=Math.max(n,l)
m+=k
if(t.length!==0)m+=o
t.push(new C.Yw(l,k,j))
l=0
k=0
j=0}l+=g
if(j>0)l+=p
k=Math.max(k,f);++j
s.l(0,h,t.length)}if(j>0){n=Math.max(n,l)
m+=k
if(t.length!==0)m+=o
t.push(new C.Yw(l,k,j))}e=t.length
switch(0){case 0:r=b4.be(new E.jL(n,m))
d=r.a
a0=r.b
b0.a=new E.fI(0,0,d,a0)
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
for(r=B.e.he(b1,a1),g=r.length,i=0;i<r.length;r.length===g||(0,A.y)(r),++i){h=r[i]
if(s.h(0,h)!==a3)break;++a1
a7=b0.a4L(h)
f=b0.a4B(h)
f.toString
a8=b0.ayD(!0,k,f)
if(u){a7.toString
a5-=a7}f=b0.az2(a5,a2+a8)
a9=h.a
h.a=new E.fI(f.a,f.b,a9.c,a9.d)
if(u)a5-=p
else{a7.toString
a5+=a7+p}}a2-=o
a2=a2
b2.b=a1}},
fd(d){var x,w,v,u,t,s=this
s.kZ(d)
x=d.b
x.fB()
w=new A.c0(new Float64Array(16))
w.d3()
v=s.a
w.dF(v.a,v.b,0,1)
x.qd(0,w)
for(v=s.z,v=B.e.bY(s.b,v.a,v.b),u=v.length,t=0;t<v.length;v.length===u||(0,A.y)(v),++t)v[t].fd(d)
x.pX(0)},
t0(d,e){var x=this.z
x.a=e.a
x.b=e.b
x.a=e.b},
fB(){return this.z}}
C.aok.prototype={}
var z=a.updateTypes(["x(dr)","aj<~>(aa,qJ,yF{cashierName:c?,customRange:h_<bn>?})","cJ(c,c)","cJ(c,i<c>,i<i<c>>{columnWidths:aA<v,o5>?})","i<cJ>(ia)","fZ(v,v)","~(c{bold!x,color:a3?,fontSize:v})"])
C.aum.prototype={
$1(d){return d.b>0},
$S:408}
C.aun.prototype={
$2(d,e){return B.t.bp(e.a,d.a)},
$S:409}
C.auq.prototype={
$2(d,e){return d+e.gOE()},
$S:53}
C.aup.prototype={
$2(d,e){return d+e.gKv()},
$S:53}
C.aus.prototype={
$2(d,e){return d+e.gfT()},
$S:53}
C.auo.prototype={
$2(d,e){return d+e.gacZ()},
$S:53}
C.aut.prototype={
$2(d,e){return d+e.ga_V()},
$S:53}
C.aur.prototype={
$2(d,e){return d+e.gafR()},
$S:53}
C.auu.prototype={
$2(d,e){return d+e.gNs()},
$S:53}
C.bTB.prototype={
$1(d){var x=this.a.h(0,d.gcX())
return x==null?d.gcX():x},
$S:1067}
C.bQd.prototype={
$1(d){var x,w,v
try{x=A.l4(d)
w=B.t.bl(this.a.dI(x).a,864e8)
return w}catch(v){return null}},
$S:231}
C.bQe.prototype={
$1(d){var x,w,v,u,t,s=this.a
if(s==null)return!1
try{x=A.l4(d)
u=s.a
w=A.ct(A.b6(u),A.b4(u),A.cC(u),0,0,0,0)
s=s.b
v=A.ct(A.b6(s),A.b4(s),A.cC(s),0,0,0,0)
s=!x.me(w)&&!x.o9(v)
return s}catch(t){return!1}},
$S:7}
C.bQg.prototype={
$1(d){var x,w,v,u=this
if(d.gjW()!==u.a)return!1
x=u.b
if(x===D.dj)return u.c.$1(B.e.gM(d.gdZ(d).split(" ")))
if(B.h.q(d.gdZ(d),"now")||B.h.b5(d.gdZ(d),A.fi()))return!0
w=u.d.$1(B.e.gM(d.gdZ(d).split(" ")))
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
C.bQf.prototype={
$1(d){var x,w,v,u=this
if(!B.h.b5(d.Q,u.a))return!1
x=u.b
if(x===D.dj)return u.c.$1(B.e.gM(d.e.split(" ")))
w=d.e
if(B.h.q(w,"now")||B.h.b5(w,A.fi()))return!0
v=u.d.$1(B.e.gM(w.split(" ")))
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
C.bQh.prototype={
$1(d){var x,w,v=this.a
if(v===D.dj)return this.b.$1(d.f)
if(d.ay==="Open"||d.f===A.fi())return!0
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
C.bQ0.prototype={
$1(d){return d.z==="Refunded"},
$S:z+0}
C.bQ1.prototype={
$1(d){return d.z==="Exchanged"},
$S:z+0}
C.bQ2.prototype={
$1(d){return d.b===this.a},
$S:33}
C.bQ5.prototype={
$1(d){return d.ay==="Open"},
$S:33}
C.bQ6.prototype={
$0(){return B.e.gM(this.a)},
$S:174}
C.bQ7.prototype={
$2(d,e){return d+e.x},
$S:56}
C.bQ8.prototype={
$2(d,e){return d+e.z},
$S:56}
C.bQ9.prototype={
$2(d,e){return d+e.as},
$S:56}
C.bQa.prototype={
$2(d,e){return d+e.Q},
$S:56}
C.bQb.prototype={
$2(d,e){return d+e.at},
$S:56}
C.bQc.prototype={
$2(d,e){return d+e.y},
$S:56}
C.bQ3.prototype={
$1(d){return d.b===this.a},
$S:33}
C.bQ4.prototype={
$1(d){return d.b===this.a},
$S:33}
C.bSq.prototype={
$0(){return A.ao(this.a,!0).S()},
$S:0}
C.bSr.prototype={
$0(){return A.K(this.a,"Sent to Microsoft Print to PDF",null)},
$S:0}
C.bSs.prototype={
$0(){var x=0,w=A.t(y.H),v=this,u
var $async$$0=A.o(function(d,e){if(d===1)return A.p(e,w)
for(;;)switch(x){case 0:u=v.a
A.ao(u,!0).S()
x=2
return A.h(C.bR3(v.b),$async$$0)
case 2:if(u.e!=null)A.K(u,"Downloaded "+v.c,null)
return A.q(null,w)}})
return A.r($async$$0,w)},
$S:2}
C.bSo.prototype={
$0(){return A.ao(this.a,!0).S()},
$S:0}
C.bSp.prototype={
$0(){var x=this.a
A.ao(x,!0).S()
C.cA0(this.b)
A.K(x,"Downloaded "+this.c,null)},
$S:0}
C.b2F.prototype={
$0(){var x=this.a
return x.t(new C.b2E(x))},
$S:0}
C.b2E.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
C.b2G.prototype={
$0(){var x=this.a
return x.t(new C.b2D(x))},
$S:0}
C.b2D.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.b2H.prototype={
$0(){var x=this.a
return x.t(new C.b2C(x))},
$S:0}
C.b2C.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
C.b2x.prototype={
$0(){var x=this.a
return x.t(new C.b2w(x,this.b,this.c))},
$S:0}
C.b2w.prototype={
$0(){if(this.b)var x=null
else{x=this.c
x=x.gad(x)}return this.a.r=x},
$S:0}
C.b2B.prototype={
$0(){var x=this.a
return x.t(new C.b2A(x,this.b,this.c))},
$S:0}
C.b2A.prototype={
$0(){var x=this.b?null:this.c.a
return this.a.w=x},
$S:0}
C.b2z.prototype={
$0(){var x=this.a
return x.t(new C.b2y(x,this.b,this.c))},
$S:0}
C.b2y.prototype={
$0(){var x=this.b?null:this.c.a
return this.a.x=x},
$S:0}
C.bR5.prototype={
$2(d,e){var x=null
return new E.kb(O.nF,E.kf(A.a([E.bV(d,E.f0(x,R.fz,x,x,x,x,x,x,x,F.bj,x,x,9,x,x,x,!0,x,x,x,x),x,x),E.bV(C.cd1(e),E.f0(x,x,x,x,x,x,x,x,x,F.bj,x,x,10,x,F.bB,x,!0,x,x,x,x),x,x)],y.n),F.es,F.is))},
$S:z+2}
C.bR6.prototype={
$4$columnWidths(d,e,f,g){var x,w,v,u,t,s=null,r=A.a([new E.cR(s,14,s),E.bV(d,E.f0(s,L.hx,s,s,s,s,s,s,s,F.bj,s,s,10,s,F.bB,s,!0,s,s,s,s),s,s),new E.cR(s,6,s)],y.n)
if(f.length===0)r.push(E.bV("None in this period.",D.xy,s,s))
else{x=A.a([],y.t)
for(w=f.length,v=0;v<f.length;f.length===w||(0,A.y)(f),++v){u=[]
for(t=B.e.gW(f[v]);t.n();)u.push(C.cd1(t.gB(0)))
x.push(u)}w=E.f0(s,Y.k0,s,s,s,s,s,s,s,F.bj,s,s,8.5,s,F.bB,s,!0,s,s,s,s)
r.push(T.Ta(K.aSV(O.qh,0.5),s,s,D.B_,D.TD,g,x,s,1,O.mX,w,e))}return I.iR(r,F.c7)},
$3(d,e,f){return this.$4$columnWidths(d,e,f,null)},
$S:z+3}
C.bR4.prototype={
$1(a3){var x,w,v,u,t,s,r,q=null,p="\u20b9",o="Rs ",n=this.a,m=E.bV(C.i_(n.a)+" Cashier Report",E.f0(q,q,q,q,q,q,q,q,q,F.bj,q,q,18,q,F.bB,q,!0,q,q,q,q),q,q),l=n.c,k=n.d,j=n.e,i=E.bV(l+" \xb7 "+k+" \xb7 "+j,D.xz,q,q),h=E.bV("SUMMARY",E.f0(q,L.hx,q,q,q,q,q,q,q,F.bj,q,q,10,q,F.bB,q,!0,q,q,q,q),q,q),g=this.b,f=y.n,e=n.r,d=n.w,a0=n.ax,a1=n.ay,a2=n.ch
d=E.kf(A.a([new I.hr(1,F.cG,I.iR(A.a([g.$2("Date",n.b),g.$2("Branch",k),g.$2("Cashier",l),g.$2("Counter",j),g.$2("Shift Timings",n.f),g.$2("Held Bills",""+n.as)],f),F.c7)),new E.cR(24,q,q),new I.hr(1,F.cG,I.iR(A.a([g.$2("Opening Float",B.h.cA(A.E(e),p,o)),g.$2("Cash Sales",B.h.cA(A.E(d),p,o)),g.$2("UPI Sales",B.h.cA(A.E(n.x),p,o)),g.$2("Card Sales",B.h.cA(A.E(n.y),p,o)),g.$2("Wallet Sales",B.h.cA(A.E(n.z),p,o)),g.$2("Expected Drawer Total (Cash)",B.h.cA(A.E(e+d),p,o)),g.$2("Total Sales",B.h.cA(A.E(n.Q),p,o)),g.$2("No. of Bills",""+a0.length),g.$2("No. of Returns & Exchanges",""+(a1.length+a2.length))],f),F.c7))],f),F.c7,F.e3)
e=E.bV("GST / TAX SUMMARY",E.f0(q,L.hx,q,q,q,q,q,q,q,F.bj,q,q,10,q,F.bB,q,!0,q,q,q,q),q,q)
j=I.iR(A.a([g.$2("Gross Sales (MRP)",B.h.cA(A.E(n.gOF()),p,o)),g.$2("Discounts",B.h.cA(A.E(n.gW7()),p,o)),g.$2("Taxable Value",B.h.cA(A.E(n.gyx()-n.gz3()),p,o))],f),F.c7)
l=A.a([g.$2("CGST",B.h.cA(A.E(n.gV5()),p,o)),g.$2("SGST",B.h.cA(A.E(n.gP1()),p,o))],f)
if(n.gyc()>0)l.push(g.$2("IGST",B.h.cA(A.E(n.gyc()),p,o)))
l.push(g.$2("Total GST",B.h.cA(A.E(n.gz3()),p,o)))
l.push(g.$2("Net Sales (Bills)",B.h.cA(A.E(n.gyx()),p,o)))
m=A.a([m,new E.cR(q,2,q),i,new E.cR(q,14,q),h,new E.cR(q,8,q),d,new E.cR(q,6,q),e,new E.cR(q,8,q),E.kf(A.a([new I.hr(1,F.cG,j),new E.cR(24,q,q),new I.hr(1,F.cG,I.iR(l,F.c7))],f),F.c7,F.e3)],f)
if(n.gl9().length!==0){l=E.bV("DENOMINATION FINAL COUNT (AFTER CLOSING)",E.f0(q,R.fz,q,q,q,q,q,q,q,F.bj,q,q,8.5,q,F.bB,q,!0,q,q,q,q),q,q)
k=A.a([],f)
for(j=n.gl9(),i=j.length,x=0;x<j.length;j.length===i||(0,A.y)(j),++x){w=j[x]
k.push(E.bV("Rs "+w.a+" x "+w.b,L.kj,q,q))}B.e.u(m,A.a([new E.cR(q,6,q),l,new E.cR(q,4,q),C.cal(k,4,8)],f))}l=this.c
k=a0.length
j=y.s
i=A.a(["Bill","Customer","Items","Net","Tender"],j)
h=y.E
g=A.a([],h)
for(f=a0.length,e=n.CW,n=n.cx,x=0;x<a0.length;a0.length===f||(0,A.y)(a0),++x){v=a0[x]
d=v.gad(v)
u=C.qZ(v.gf6(),e)
t=C.bTA(v,n)
s=A.E(v.gfT())
g.push(A.a([d,u,t,A.kY(s,p,o,0),v.gfR(v)],j))}n=y.S
f=y.I
m.push(l.$4$columnWidths("BILLS ("+k+")",i,g,A.av([0,D.lo,1,D.Br,2,D.aaj,3,D.Bq,4,D.aah],n,f)))
g=a1.length
i=A.a(["Return","Customer","Against Bill","Item","Amount","Mode"],j)
k=A.a([],h)
for(d=a1.length,x=0;x<a1.length;a1.length===d||(0,A.y)(a1),++x){r=a1[x]
a0=C.qZ(r.d,e)
u=A.E(r.w)
k.push(A.a([r.a,a0,r.b,r.f,A.kY(u,p,o,0),r.y],j))}m.push(l.$4$columnWidths("RETURNS ("+g+")",i,k,A.av([0,D.lo,1,D.aai,2,D.lo,3,P.i8,4,D.aag,5,P.i8],n,f)))
k=a2.length
i=A.a(["Return","Customer","Against Bill","Item Exchanged","Value"],j)
h=A.a([],h)
for(g=a2.length,x=0;x<a2.length;a2.length===g||(0,A.y)(a2),++x){r=a2[x]
d=C.qZ(r.d,e)
a0=A.E(r.w)
h.push(A.a([r.a,d,r.b,r.f,A.kY(a0,p,o,0)],j))}m.push(l.$4$columnWidths("EXCHANGES ("+k+")",i,h,A.av([0,D.lo,1,D.Br,2,D.lo,3,P.i8,4,D.Bq],n,f)))
return m},
$S:z+4}
C.bQZ.prototype={
$2(d,e){return this.a.r3(new G.ff(e,d))},
$S:z+5}
C.bR1.prototype={
$4$bold$color$fontSize(d,e,f,g){var x,w,v=null,u=this.a,t=u.a
this.b.ah4(new G.ff(t,0),new G.ff(t,5))
x=this.c.$2(0,u.a)
t=x.c
w=x.f
t.jH(new G.ff(x.e,w),new G.f_(new G.fV(d,v,v)))
w=G.mz(H.dN,e,v,v,!1,!1,f==null?H.cA:f,v,v,g,H.e1,!1,v,H.dA,v,0,v,v,H.cM,H.eA)
t.a.a=!0
x.a=w;++u.a},
$2$bold(d,e){return this.$4$bold$color$fontSize(d,e,null,11)},
$3$bold$fontSize(d,e,f){return this.$4$bold$color$fontSize(d,e,null,f)},
$3$bold$color(d,e,f){return this.$4$bold$color$fontSize(d,e,f,11)},
$S:z+6}
C.bR0.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=v.$2(0,u.a),s=t.c,r=t.f
s.jH(new G.ff(t.e,r),new G.f_(new G.fV(d,w,w)))
r=C.cdB(!1,!0)
s.a.a=!0
t.a=r
x=v.$2(1,u.a)
v=x.c
r=x.f
v.jH(new G.ff(x.e,r),new G.f_(new G.fV(e,w,w)))
r=C.cdB(!1,!1)
v.a.a=!0
x.a=r;++u.a},
$S:81}
C.bQY.prototype={
$0(){return this.a.a++},
$S:0}
C.bR2.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.b
m.$4$bold$color$fontSize(d,!0,$.c4k(),11)
for(x=e.length,w=o.c,v=o.a,u=0;u<x;++u){t=w.$2(u,v.a)
s=e[u]
r=t.c
q=t.f
r.jH(new G.ff(t.e,q),new G.f_(new G.fV(s,n,n)))
s=G.mz($.cj1(),!0,n,n,!1,!1,H.nT,n,n,n,H.e1,!1,n,H.dA,n,0,n,n,H.cM,H.r7)
r.a.a=!0
t.a=s}++v.a
if(f.length===0)m.$4$bold$color$fontSize("None in this period.",!1,$.c4m(),10)
else for(p=0;p<f.length;++p){for(m=(p&1)===0,u=0;u<f[p].length;++u){t=w.$2(u,v.a)
x=f[p][u]
s=t.c
r=t.f
s.jH(new G.ff(t.e,r),new G.f_(new G.fV(x,n,n)))
x=m?$.c4j():H.dN
r=$.c4l()
r=r.a
r=G.Ls(G.wt(r)||r==="none"?r:H.cA.gie())
r=G.mz(x,!1,new G.AW(H.mU,r),n,!1,!1,H.cA,n,n,n,H.e1,!1,n,H.dA,n,0,n,n,H.cM,H.r7)
s.a.a=!0
t.a=r}++v.a}o.d.$0()},
$S:1069}
C.bR_.prototype={
$1(d){return"\u20b9"+d.a+"\xd7"+d.b},
$S:410};(function installTearOffs(){var x=a.installStaticTearOff
x(C,"cdK",3,null,["$5$cashierName$customRange","$3","$4$customRange"],["LI",function(d,e,f){return C.LI(d,e,f,null,null)},function(d,e,f,g){return C.LI(d,e,f,null,g)}],1,0)
x(C,"cdJ",3,null,["$5$cashierName$customRange","$3","$4$customRange"],["LH",function(d,e,f){return C.LH(d,e,f,null,null)},function(d,e,f,g){return C.LH(d,e,f,null,g)}],1,0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.jU,[C.yF,C.aVX,C.aVY])
w(A.P,[C.a2g,C.Yw])
w(A.bN,[C.aum,C.bTB,C.bQd,C.bQe,C.bQg,C.bQf,C.bQh,C.bQ0,C.bQ1,C.bQ2,C.bQ5,C.bQ3,C.bQ4,C.bR6,C.bR4,C.bR1,C.bR2,C.bR_])
w(A.cU,[C.aun,C.auq,C.aup,C.aus,C.auo,C.aut,C.aur,C.auu,C.bQ7,C.bQ8,C.bQ9,C.bQa,C.bQb,C.bQc,C.bR5,C.bQZ,C.bR0])
w(A.cA,[C.bQ6,C.bSq,C.bSr,C.bSs,C.bSo,C.bSp,C.b2F,C.b2E,C.b2G,C.b2D,C.b2H,C.b2C,C.b2x,C.b2w,C.b2B,C.b2A,C.b2z,C.b2y,C.bQY])
v(C.V6,A.R)
v(C.ae0,A.ah)
v(C.ae_,A.at)
v(C.acy,E.U8)
v(C.aok,E.PI)
v(C.acx,C.aok)
x(C.aok,E.eZ)})()
A.bJ(b.typeUniverse,JSON.parse('{"V6":{"R":[],"f":[]},"ae0":{"ah":["V6"]},"ae_":{"at":[],"f":[]},"acx":{"eZ":[],"cJ":[]}}'))
var y=(function rtii(){var x=A.H
return{c:x("jx"),d:x("a2g"),R:x("h4<v>"),T:x("l<rl>"),o:x("l<Y>"),E:x("l<i<c>>"),t:x("l<i<@>>"),s:x("l<c>"),V:x("l<i1>"),p:x("l<f>"),n:x("l<cJ>"),q:x("l<Yw>"),l:x("i<d2>"),r:x("i<l7>"),Y:x("i<d3>"),u:x("i<bE>"),e:x("i<dr>"),P:x("i<dH>"),W:x("aA<v,v>"),U:x("bI"),N:x("c"),w:x("qA"),I:x("o5"),j:x("cJ"),z:x("@"),S:x("v"),v:x("bW?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.tY=new A.ad(0,9,0,9)
D.a4F=new A.ad(14,6,14,10)
D.B_=new E.iV(6,5,6,5)
D.a5G=new A.ad(9,2,9,2)
D.aag=new K.rz(45)
D.Bq=new K.rz(48)
D.aah=new K.rz(50)
D.aai=new K.rz(62)
D.Br=new K.rz(66)
D.lo=new K.rz(92)
D.aaj=new Z.BF(3)
D.aQJ=x(["Return","Customer","Against Bill","Item Exchanged","Value"],y.s)
D.aWy=x(["BILL","CUSTOMER","ITEMS","NET","TENDER"],y.s)
D.aXu=x(["Bill","Customer","Items","Net","Tender"],y.s)
D.aZM=x(["RETURN","CUSTOMER","AGAINST BILL","ITEM EXCHANGED","VALUE"],y.s)
D.b_X=x(["RETURN","CUSTOMER","AGAINST BILL","ITEM","AMOUNT","MODE"],y.s)
D.b05=x(["Return","Customer","Against Bill","Item","Amount","Mode"],y.s)
D.k9=new C.yF(0,"daily")
D.wv=new C.yF(1,"weekly")
D.ww=new C.yF(2,"monthly")
D.dj=new C.yF(3,"custom")
D.S6=new A.h4([4],y.R)
D.b91=new A.h4([3],y.R)
D.beg=new A.z(!0,B.J,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.TD=new E.kQ(!0,null,null,null,null,null,F.bj,8.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.xy=new E.kQ(!0,O.NO,null,null,null,null,F.bj,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.xz=new E.kQ(!0,R.fz,null,null,null,null,F.bj,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.bnz=new C.aVX(0,"start")
D.bnA=new C.aVY(0,"start")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cKk","cj1",()=>M.xl("FF182234"))
x($,"cKf","c4k",()=>M.xl("FF1E3A8A"))
x($,"cKi","c4m",()=>M.xl("FF6B7280"))
x($,"cKd","c4j",()=>M.xl("FFF3F5FA"))
x($,"cKh","c4l",()=>M.xl("FFE6E9F2"))})()};
(a=>{a["WhloM/qE5Y8FEsDtkOx70G3y9mw="]=a.current})($__dart_deferred_initializers__);