((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,S,P,K,N,Q,G,H,L,M,R,B={
i1(d){var x
switch(d.a){case 0:x="Daily"
break
case 1:x="Weekly"
break
case 2:x="Monthly"
break
case 3:x="Custom Range"
break
default:x=null}return x},
qV(d,e){var x
if(d==null||d.length===0)return"Walk-in Customer"
x=e.h(0,d)
return x==null?d:x},
bQW(d,e){if(J.df(d.ghD(d)))return"\u2014"
return J.b7(d.ghD(d),new B.bQX(e),y.R).aw(0,", ")},
cav(d){var x,w,v,u,t,s=A.aY("^(\\d{1,2}):(\\d{2})\\s*([AaPp][Mm])$",!0,!1,!1).fv(C.h.G(d))
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
cwk(d){var x,w,v=d.ay==="Open",u=v?"ongoing":d.w,t=d.r,s=B.cav(t),r=new A.bq(Date.now(),0,!1),q=v?A.f6(r)*60+A.kF(r):B.cav(d.w)
if(s==null||q==null)return t+" - "+u
x=q-s
if(x<0)x+=1440
w=C.t.bj(x,60)
v=""+C.t.aH(x,60)
return(w>0?""+w+"h "+v+"m":v+"m")+" ("+t+" - "+u+")"},
c0U(d,e){var x,w,v=A.kZ(A.eU())
switch(d.a){case 0:x=new A.zU(v,v)
break
case 1:x=new A.zU(v.fn(-6048e8),v)
break
case 2:x=new A.zU(v.fn(-2592e9),v)
break
case 3:if(e==null)x=new A.zU(v,v)
else{x=e.a
x=A.cF(A.bi(x),A.bb(x),A.cQ(x),0,0,0,0)
w=e.b
w=new A.zU(x,A.cF(A.bi(w),A.bb(w),A.cQ(w),0,0,0,0))
x=w}break
default:x=null}return x},
a05(d,e,f,g){return B.cxk(d,e,f,g)},
cxk(c8,c9,d0,d1){var x=0,w=A.t(y.d),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$a05=A.o(function(d2,d3){if(d2===1){t.push(d3)
x=u}for(;;)switch(x){case 0:b8=c8.m(0,$.af(),y.u)
b9=c8.m(0,$.iO(),y.U)
c0=c8.m(0,$.me(),y.c)
c1=c8.m(0,$.LK(),y.e)
c2=c8.m(0,$.iP(),y.P)
c3=c8.m(0,$.py(),y.r)
c4=c8.m(0,$.nc(),y.W)
c5=y.R
c6=A.z(c5,c5)
for(j=J.a1(c8.m(0,$.eo(),y.l));j.n();){i=j.gB(j)
c6.k(0,i.a,i.b)}c5=A.z(c5,c5)
for(j=J.a1(c8.m(0,$.fo(),y.Y));j.n();){i=j.gB(j)
c5.k(0,i.a,i.c)}j=d0==null
if(j){i=b8==null?null:b8.a
h=i==null?"Cashier":i}else h=d0
g=new B.bNx(A.kZ(A.eU()))
f=new B.bNy(d1)
i=J.b8(c0,new B.bNA(h,c9,f,g))
e=A.U(i,i.$ti.i("D.E"))
i=J.b8(c1,new B.bNz(h,c9,f,g))
d=A.U(i,i.$ti.i("D.E"))
i=A.am(d).i("ar<1>")
a0=i.i("D.E")
a1=A.U(new A.ar(d,new B.bNk(),i),a0)
a2=A.U(new A.ar(d,new B.bNl(),i),a0)
i=J.ce(c2)
a0=i.cB(c2,new B.bNm(h))
a3=A.U(a0,a0.$ti.i("D.E"))
a0=A.am(a3).i("ar<1>")
a4=A.U(new A.ar(a3,new B.bNB(c9,f,g),a0),a0.i("D.E"))
a5=a3.length===0?null:C.e.hU(a3,new B.bNp(),new B.bNq(a3))
a6=C.e.bf(a4,0,new B.bNr())
s=C.e.bf(a4,0,new B.bNs())
r=C.e.bf(a4,0,new B.bNt())
q=C.e.bf(a4,0,new B.bNu())
p=C.e.bf(a4,0,new B.bNv())
o=C.e.bf(a4,0,new B.bNw())
a0=c9===D.k3
x=a0?3:5
break
case 3:a7=b8==null
n=a7?null:b8.Q
if(n==null)n=""
if(!j){j=A.cL(i.cB(c2,new B.bNn(h)))
m=j==null?null:j.cy}else m=a7?null:b8.at
x=n.length!==0&&m!=null?6:7
break
case 6:x=8
return A.h(C.eG.zp(m,J.An(b9),n),$async$a05)
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
if(!j){j=A.cL(i.cB(c2,new B.bNo(h)))
b4=j==null?null:j.cy}else b4=a7?null:b8.at
m=b4
x=J.S(n)!==0&&m!=null?9:10
break
case 9:u=12
l=B.c0U(c9,d1)
j=l.a
i=l.b
x=15
return A.h(U.mX.E9(m,j,J.An(b9),i,n),$async$a05)
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
if(!(A.Q(c7) instanceof A.ay))throw c7
x=14
break
case 11:x=2
break
case 14:case 10:case 4:if(a0)b6=a5==null?"-":B.cwk(a5)
else{b7=a4.length
j=b7===1?"":"s"
b6=""+b7+" shift"+j+" worked"}switch(c9.a){case 0:j=L.dF(A.eU())
break
case 1:j="Last 7 days"
break
case 2:j="Last 30 days"
break
case 3:j=d1==null?"Custom range":L.dF(C.e.gM(d1.a.jG().split("T")))+" - "+L.dF(C.e.gM(d1.b.jG().split("T")))
break
default:j=null}i=J.LO(b9)
a0=J.c2e(b9)
a7=a5==null?"\u2014":a5.d+" \xb7 "+a5.e
v=new B.a20(c9,j,h,i+" \xb7 "+a0,a7,b6,a6,s,r,q,p,o,J.S(c3),c4,e,a1,a2,c6,c5)
x=1
break
case 1:return A.q(v,w)
case 2:return A.p(t.at(-1),w)}})
return A.r($async$a05,w)},
yt:function yt(d,e){this.a=d
this.b=e},
a20:function a20(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
au7:function au7(){},
au8:function au8(){},
aub:function aub(){},
aua:function aua(){},
aud:function aud(){},
au9:function au9(){},
aue:function aue(){},
auc:function auc(){},
auf:function auf(){},
bQX:function bQX(d){this.a=d},
bNx:function bNx(d){this.a=d},
bNy:function bNy(d){this.a=d},
bNA:function bNA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNz:function bNz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNB:function bNB(d,e,f){this.a=d
this.b=e
this.c=f},
bNk:function bNk(){},
bNl:function bNl(){},
bNm:function bNm(d){this.a=d},
bNp:function bNp(){},
bNq:function bNq(d){this.a=d},
bNr:function bNr(){},
bNs:function bNs(){},
bNt:function bNt(){},
bNu:function bNu(){},
bNv:function bNv(){},
bNw:function bNw(){},
bNn:function bNn(d){this.a=d},
bNo:function bNo(d){this.a=d},
Lv(d,e,f,g,h){return B.czd(d,e,f,g,h)},
czd(d,e,f,g,h){var x=0,w=A.t(y.H),v,u,t,s,r
var $async$Lv=A.o(function(i,j){if(i===1)return A.p(j,w)
for(;;)switch(x){case 0:x=3
return A.h(B.a05(e,f,g,h),$async$Lv)
case 3:r=j
if(d.e==null){x=1
break}u=B.i1(f)
u=A.aV(u.toLowerCase()," ","_")
t=f===D.dp?r.b:B.i1(f)
s=A.N(null,!1,null,null,null,null,null,"Close",new B.bPL(d),C.D,C.af)
A.bs(d,new B.UT(r,null),A.a([s,A.N(null,!1,null,null,null,A.bC("printer",$.d?C.w:C.u,14),null,"Print",new B.bPM(d),C.D,C.af),A.N(null,!1,null,null,null,M.ff,null,"Download PDF",new B.bPN(d,r,"cashier_report_"+u+".pdf"),C.D,C.a9)],y.p),t+" Cashier Report \u2014 PDF Preview",C.bH,y.z)
case 1:return A.q(v,w)}})
return A.r($async$Lv,w)},
Lu(d,e,f,g,h){return B.czc(d,e,f,g,h)},
czc(d,e,f,g,h){var x=0,w=A.t(y.H),v,u,t,s
var $async$Lu=A.o(function(i,j){if(i===1)return A.p(j,w)
for(;;)switch(x){case 0:x=3
return A.h(B.a05(e,f,g,h),$async$Lu)
case 3:s=j
if(d.e==null){x=1
break}u=B.i1(f)
u=A.aV(u.toLowerCase()," ","_")
t=f===D.dp?s.b:B.i1(f)
A.bs(d,new B.adM(s,null),A.a([A.N(null,!1,null,null,null,null,null,"Close",new B.bPJ(d),C.D,C.af),A.N(null,!1,null,null,null,M.ff,null,"Download .xlsx",new B.bPK(d,s,"cashier_report_"+u+".xlsx"),C.D,C.hL)],y.p),t+" Cashier Report \u2014 Excel Preview",C.bH,y.z)
case 1:return A.q(v,w)}})
return A.r($async$Lu,w)},
caX(d){var x,w,v,u,t,s,r=null,q=d.c,p=d.d,o=d.e,n=A.e(q+" \xb7 "+p+" \xb7 "+o,r,r,r,r,r,A.k($.d?C.H:C.G,r,r,r,13,C.n).aA(12.5),r,r),m=$.d,l=m?C.av:C.ay,k=A.aW(m?C.Y:C.Z,C.L,1),j=A.at(14),i=A.e("SUMMARY",r,r,r,r,r,A.k(m?C.H:C.G,r,r,r,12,C.an),r,r),h=d.r,g=d.w,f=y.o
g=A.a([new A.Y("Date",d.b,!1),new A.Y("Branch",p,!1),new A.Y("Cashier",q,!1),new A.Y("Counter",o,!1),new A.Y("Shift Timings",d.f,!1),new A.Y("Opening Float",A.J(h),!1),new A.Y("Cash Sales",A.J(g),!1),new A.Y("UPI Sales",A.J(d.x),!1),new A.Y("Card Sales",A.J(d.y),!1),new A.Y("Wallet Sales",A.J(d.z),!1),new A.Y("Expected Drawer Total (Cash)",A.J(h+g),!1),new A.Y("Total Sales",A.J(d.Q),!1),new A.Y("No. of Bills",""+d.ax.length,!1),new A.Y("No. of Returns & Exchanges",""+(d.ay.length+d.ch.length),!1),new A.Y("Held Bills",""+d.as,!1)],f)
q=A.e("GST / TAX SUMMARY",r,r,r,r,r,A.k($.d?C.H:C.G,r,r,r,12,C.an),r,r)
f=A.a([new A.Y("Gross Sales (MRP)",A.J(d.gOr()),!1),new A.Y("Discounts",A.J(d.gW6()),!1),new A.Y("Taxable Value",A.J(d.gyB()-d.gz1()),!1),new A.Y("CGST",A.J(d.gV_()),!1),new A.Y("SGST",A.J(d.gOP()),!1)],f)
if(d.gyi()>0)f.push(new A.Y("IGST",A.J(d.gyi()),!1))
f.push(new A.Y("Total GST",A.J(d.gz1()),!1))
f.push(new A.Y("Net Sales (Bills)",A.J(d.gyB()),!1))
p=A.e("DENOMINATION FINAL COUNT (AFTER CLOSING)",r,r,r,r,r,A.k($.d?C.H:C.G,r,r,r,12,C.an),r,r)
if(d.gl6().length===0)o=A.e("No cash denominations counted yet.",r,r,r,r,r,A.k($.d?C.X:C.U,r,1.5,r,13.5,C.n),r,r)
else{o=A.a([],y.p)
for(m=d.gl6(),h=m.length,x=0;x<m.length;m.length===h||(0,A.y)(m),++x){w=m[x]
v=$.d
u=v?C.aq:C.K
t=new A.aK(v?C.Y:C.Z,1,C.L,-1)
s=new A.be(6,6)
v=v?C.w:C.u
o.push(A.T(r,A.e("\u20b9"+w.a+" \xd7 "+w.b,r,r,r,r,r,new A.A(!0,v,r,"Inter",r,r,11.8,C.I,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r),C.A,r,r,new A.a_(u,r,new A.bM(t,t,t,t),new A.dk(s,s,s,s),r,r,C.F),r,r,r,r,Q.u7,r,r,r))}o=A.cp(C.aM,o,C.b8,8,8)}m=y.p
return A.I(A.a([n,C.ax,A.T(r,A.I(A.a([i,C.aX,new A.e_(g,2,r),C.ax,q,C.aX,new A.e_(f,2,r),C.ax,p,C.b2,o],m),C.B,r,C.p,C.M),C.A,r,r,new A.a_(l,r,k,j,r,r,C.F),r,r,r,r,C.dy,r,r,1/0)],m),C.B,r,C.p,C.M)},
bPL:function bPL(d){this.a=d},
bPM:function bPM(d){this.a=d},
bPN:function bPN(d,e,f){this.a=d
this.b=e
this.c=f},
bPJ:function bPJ(d){this.a=d},
bPK:function bPK(d,e,f){this.a=d
this.b=e
this.c=f},
UT:function UT(d,e){this.c=d
this.a=e},
adN:function adN(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.x=_.w=_.r=null},
b2D:function b2D(d){this.a=d},
b2C:function b2C(d){this.a=d},
b2E:function b2E(d){this.a=d},
b2B:function b2B(d){this.a=d},
b2F:function b2F(d){this.a=d},
b2A:function b2A(d){this.a=d},
b2v:function b2v(d,e,f){this.a=d
this.b=e
this.c=f},
b2u:function b2u(d,e,f){this.a=d
this.b=e
this.c=f},
b2z:function b2z(d,e,f){this.a=d
this.b=e
this.c=f},
b2y:function b2y(d,e,f){this.a=d
this.b=e
this.c=f},
b2x:function b2x(d,e,f){this.a=d
this.b=e
this.c=f},
b2w:function b2w(d,e,f){this.a=d
this.b=e
this.c=f},
adM:function adM(d,e){this.c=d
this.a=e},
caw(d){var x=A.aV(d,"\u2013","-")
x=A.aV(x,"\u2014","-")
x=A.aV(x,"\u2019","'")
x=A.aV(x,"\u2018","'")
x=A.aV(x,"\u201c",'"')
x=A.aV(x,"\u201d",'"')
return A.aV(x,"\xd7","x")},
bOn(d){var x=0,w=A.t(y.H),v,u,t
var $async$bOn=A.o(function(e,f){if(e===1)return A.p(f,w)
for(;;)switch(x){case 0:t=E.NF(null)
t.xp(O.a6y(new B.bOo(d,new B.bOp(),new B.bOq()),null,F.lX))
x=2
return A.h(t.i_(0),$async$bOn)
case 2:v=f
u=B.i1(d.a)
P.wr("cashier_report_"+A.aV(u.toLowerCase()," ","_")+".pdf",v,"application/pdf")
return A.q(null,w)}})
return A.r($async$bOn,w)},
cb4(d,e){var x=null,w=d?$.c1R():H.eg
return G.pN(w,e,G.My($.c1T(),H.mQ),x,!1,!1,H.cQ,x,x,x,H.eQ,!1,x,H.em,x,0,x,x,H.d5,H.qZ)},
cxR(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="Cashier Report",d={},a0=G.ayK(new A.AF().bm("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")),a1=a0.Oe()
a1.toString
a0.YK(a1,e)
a0.qx(e)
x=a0.x.h(0,e)
x.lC(0,26)
x.lC(1,22)
x.lC(2,34)
x.lC(3,16)
x.lC(4,18)
x.lC(5,18)
d.a=0
w=new B.bOi(x)
v=new B.bOl(d,x,w)
u=new B.bOk(d,w)
t=new B.bOh(d)
s=new B.bOm(d,v,w,t)
a1=a2.a
v.$3$bold$fontSize(B.i1(a1)+" Cashier Report",!0,16)
r=a2.c
q=a2.d
p=a2.e
v.$4$bold$color$fontSize(r+" \xb7 "+q+" \xb7 "+p,!1,$.c1U(),10)
t.$0()
o=$.c1S()
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
if(a2.gl6().length!==0){n=a2.gl6()
u.$2("Denomination Final Count",new A.aw(n,new B.bOj(),A.am(n).i("aw<1,c>")).aw(0,"  "))}t.$0()
v.$3$bold$color("GST / TAX SUMMARY",!0,o)
u.$2("Gross Sales (MRP)",A.J(a2.gOr()))
u.$2("Discounts",A.J(a2.gW6()))
u.$2("Taxable Value",A.J(a2.gyB()-a2.gz1()))
u.$2("CGST",A.J(a2.gV_()))
u.$2("SGST",A.J(a2.gOP()))
if(a2.gyi()>0)u.$2("IGST",A.J(a2.gyi()))
u.$2("Total GST",A.J(a2.gz1()))
u.$2("Net Sales (Bills)",A.J(a2.gyB()))
t.$0()
o=r.length
n=y.E
m=A.a([],n)
for(l=r.length,k=a2.CW,j=a2.cx,i=y.s,h=0;h<r.length;r.length===l||(0,A.y)(r),++h){g=r[h]
m.push(A.a([g.gaf(g),B.qV(g.gf8(),k),B.bQW(g,j),A.J(g.gfU()),g.gfS(g)],i))}s.$3("BILLS ("+o+")",D.aXO,m)
r=p.length
o=A.a([],n)
for(m=p.length,h=0;h<p.length;p.length===m||(0,A.y)(p),++h){f=p[h]
o.push(A.a([f.a,B.qV(f.d,k),f.b,f.f,A.J(f.w),f.y],i))}s.$3("RETURNS ("+r+")",D.b0p,o)
r=q.length
n=A.a([],n)
for(p=q.length,h=0;h<q.length;q.length===p||(0,A.y)(q),++h){f=q[h]
n.push(A.a([f.a,B.qV(f.d,k),f.b,f.f,A.J(f.w)],i))}s.$3("EXCHANGES ("+r+")",D.aR0,n)
r=a0.Wk()
r.toString
a1=B.i1(a1)
P.wr("cashier_report_"+A.aV(a1.toLowerCase()," ","_")+".xlsx",new Uint8Array(A.eG(r)),"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")},
bOp:function bOp(){},
bOq:function bOq(){},
bOo:function bOo(d,e,f){this.a=d
this.b=e
this.c=f},
bOi:function bOi(d){this.a=d},
bOl:function bOl(d,e,f){this.a=d
this.b=e
this.c=f},
bOk:function bOk(d,e){this.a=d
this.b=e},
bOh:function bOh(d){this.a=d},
bOm:function bOm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bOj:function bOj(){},
c7R(d,e,f){return new B.aci(f,e,new B.acj(),d)},
aVO:function aVO(d,e){this.a=d
this.b=e},
aVP:function aVP(d,e){this.a=d
this.b=e},
Yd:function Yd(d,e,f){this.a=d
this.b=e
this.c=f},
acj:function acj(){this.b=this.a=0},
aci:function aci(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
ao8:function ao8(){},
xg(d){return new G.a2(d,null,null)}},D,I,T,U,E,F
J=c[1]
A=c[0]
C=c[2]
O=c[85]
S=c[188]
P=c[94]
K=c[75]
N=c[189]
Q=c[210]
G=c[78]
H=c[242]
L=c[114]
M=c[191]
R=c[164]
B=a.updateHolder(c[66],B)
D=c[241]
I=c[225]
T=c[223]
U=c[197]
E=c[91]
F=c[187]
B.yt.prototype={
R(){return"ReportPeriod."+this.b}}
B.a20.prototype={
gl6(){var x=J.tQ(this.at)
x=x.cB(x,new B.au7()).aF(0)
C.e.dH(x,new B.au8())
return x},
gOr(){return C.e.bf(this.ax,0,new B.aub())},
gW6(){return C.e.bf(this.ax,0,new B.aua())},
gyB(){return C.e.bf(this.ax,0,new B.aud())},
gV_(){return C.e.bf(this.ax,0,new B.au9())},
gOP(){return C.e.bf(this.ax,0,new B.aue())},
gyi(){return C.e.bf(this.ax,0,new B.auc())},
gz1(){return C.e.bf(this.ax,0,new B.auf())}}
B.UT.prototype={
V(){return new B.adN()}}
B.adN.prototype={
I(d){var x,w,v,u,t,s=this,r=null,q=s.a.c,p=B.caX(q),o=A.e("DETAILS",r,r,r,r,r,A.k($.d?C.H:C.G,r,r,r,12,C.an),r,r),n=q.ax,m=n.length,l=s.d
if(m===0)n=A.a([A.e("No bills in this period.",r,r,r,r,r,A.k($.d?C.X:C.U,r,1.5,r,13.5,C.n),r,r)],y.p)
else{x=A.a([],y.p)
for(w=n.length,v=0;v<n.length;n.length===w||(0,A.y)(n),++v)x.push(s.au5(n[v]))
n=x}n=s.QU(m,new B.b2D(s),l,n,"Bills")
l=q.ay
m=l.length
x=s.e
if(m===0)l=A.a([A.e("No returns in this period.",r,r,r,r,r,A.k($.d?C.X:C.U,r,1.5,r,13.5,C.n),r,r)],y.p)
else{w=A.a([],y.p)
for(u=l.length,v=0;v<l.length;l.length===u||(0,A.y)(l),++v)w.push(s.aKL(l[v]))
l=w}l=s.QU(m,new B.b2E(s),x,l,"Returns")
x=q.ch
m=x.length
w=s.f
if(m===0)x=A.a([A.e("No exchanges in this period.",r,r,r,r,r,A.k($.d?C.X:C.U,r,1.5,r,13.5,C.n),r,r)],y.p)
else{u=A.a([],y.p)
for(t=x.length,v=0;v<x.length;x.length===t||(0,A.y)(x),++v)u.push(s.ayc(x[v]))
x=u}return A.I(A.a([p,R.cp,o,C.aX,n,C.b2,l,C.b2,s.QU(m,new B.b2F(s),w,x,"Exchanges")],y.p),C.B,r,C.p,C.M)},
QU(d,e,f,g,h){var x,w=null,v=$.d,u=A.aW(v?C.Y:C.Z,C.L,1),t=A.at(8),s=v?C.av:C.ay,r=f?0.5:0,q=y.p
r=A.W(A.a([A.c2r(A.bC("chevdown",v?C.X:C.U,14),C.fp,r),C.aP,A.e(h,w,w,w,w,w,A.k(w,w,w,w,11.8,C.I).aA(13),w,w)],q),C.C,C.p,C.v)
x=A.at(20)
q=A.a([A.bH(A.bz(w,A.T(w,A.W(A.a([r,A.T(w,A.e(""+d,w,w,w,w,w,D.bf_,w,w),C.A,w,w,new A.a_(C.a8,w,w,x,w,w,C.F),w,w,w,w,D.a5S,w,w,w)],q),C.C,C.bX,C.v),C.A,s,w,w,w,w,w,w,T.jo,w,w,w),C.ah,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w),C.ao,w,w,w,w)],q)
if(f)q.push(new A.a6(D.a4T,A.I(g,C.B,w,C.p,C.M),w))
return A.T(w,A.I(q,C.B,w,C.p,C.M),C.c1,w,w,new A.a_(w,w,u,t,w,w,C.F),w,w,w,w,w,w,w,w)},
au5(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.r===d.gaf(d),n=$.d?C.Y:C.Z,m=A.e(d.gaf(d)+" \xb7 "+B.qV(d.gf8(),q.a.c.CW),p,p,p,p,p,A.k(p,p,p,p,11.8,C.I),p,p),l=B.bQW(d,q.a.c.cx)
l=A.e(l,p,2,C.a3,p,p,A.k($.d?C.H:C.G,p,p,p,11,C.n),p,p)
x=d.ge3(d)
w=d.gfS(d)
v=y.p
v=A.a([A.bH(A.bz(p,A.T(p,A.W(A.a([A.aC(A.I(A.a([m,C.cY,l,C.cY,A.e(x+" \xb7 "+w,p,p,p,p,p,A.k($.d?C.H:C.G,p,p,p,13,C.n).aA(11),p,p)],v),C.B,p,C.p,C.M),1),C.aJ,A.e(A.J(d.gfU()),p,p,p,p,p,A.k(p,p,p,p,11.8,C.I),p,p)],v),C.B,C.p,C.v),C.A,p,p,new A.a_(p,p,new A.bM(new A.aK(n,1,C.L,-1),C.Q,C.Q,C.Q),p,p,p,C.F),p,p,p,p,D.u_,p,p,p),C.ah,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.b2v(q,o,d),p,p,p),C.ao,p,p,p,p)],v)
if(o){n=$.d?C.av:C.ay
m=A.at(6)
l=d.gdU()
x=A.J(d.gOq())
w=A.J(d.gKe())
u=A.J(d.gNd())
t=A.J(d.gfU())
s=d.gfS(d)
r=d.gaL(d)
v.push(A.T(p,A.e(""+l+" items \xb7 MRP "+x+" \xb7 Discount "+w+" \xb7 GST "+u+" \xb7 Net "+t+" \xb7 Paid via "+s+", "+r+".",p,p,p,p,p,A.k($.d?C.H:C.G,p,p,p,13,C.n).aA(11.5),p,p),C.A,p,p,new A.a_(n,p,p,m,p,p,C.F),p,p,p,I.hm,C.fq,p,p,1/0))}return A.I(v,C.C,p,C.p,C.M)},
aKL(d){var x,w,v,u,t=null,s=d.a,r=this.w===s,q=$.d?C.Y:C.Z
s=A.e(s+" \xb7 "+B.qV(d.d,this.a.c.CW),t,t,t,t,t,A.k(t,t,t,t,11.8,C.I),t,t)
x=d.f
w=A.e(x,t,2,C.a3,t,t,A.k($.d?C.H:C.G,t,t,t,11,C.n),t,t)
v=d.y
u=y.p
u=A.a([A.bH(A.bz(t,A.T(t,A.W(A.a([A.aC(A.I(A.a([s,C.cY,w,C.cY,A.e("against "+d.b+" \xb7 "+v,t,t,t,t,t,A.k($.d?C.H:C.G,t,t,t,13,C.n).aA(11),t,t)],u),C.B,t,C.p,C.M),1),C.aJ,A.e(A.J(d.w),t,t,t,t,t,A.k(t,t,t,t,11.8,C.I),t,t)],u),C.B,C.p,C.v),C.A,t,t,new A.a_(t,t,new A.bM(new A.aK(q,1,C.L,-1),C.Q,C.Q,C.Q),t,t,t,C.F),t,t,t,t,D.u_,t,t,t),C.ah,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.b2z(this,r,d),t,t,t),C.ao,t,t,t,t)],u)
if(r){s=$.d
q=s?C.av:C.ay
w=A.at(6)
u.push(A.T(t,A.e(x+" \xd7 "+d.r+" \u2014 Reason: "+d.x+". Refunded as "+v+".",t,t,t,t,t,A.k(s?C.H:C.G,t,t,t,13,C.n).aA(11.5),t,t),C.A,t,t,new A.a_(q,t,t,w,t,t,C.F),t,t,t,I.hm,C.fq,t,t,1/0))}return A.I(u,C.C,t,C.p,C.M)},
ayc(d){var x,w,v=null,u=d.a,t=this.x===u,s=$.d?C.Y:C.Z
u=A.e(u+" \xb7 "+B.qV(d.d,this.a.c.CW),v,v,v,v,v,A.k(v,v,v,v,11.8,C.I),v,v)
x=A.e(d.y,v,2,C.a3,v,v,A.k($.d?C.H:C.G,v,v,v,11,C.n),v,v)
w=y.p
w=A.a([A.bH(A.bz(v,A.T(v,A.W(A.a([A.aC(A.I(A.a([u,C.cY,x,C.cY,A.e("against "+d.b,v,v,v,v,v,A.k($.d?C.H:C.G,v,v,v,13,C.n).aA(11),v,v)],w),C.B,v,C.p,C.M),1),C.aJ,A.e(A.J(d.w),v,v,v,v,v,A.k(v,v,v,v,11.8,C.I),v,v)],w),C.B,C.p,C.v),C.A,v,v,new A.a_(v,v,new A.bM(new A.aK(s,1,C.L,-1),C.Q,C.Q,C.Q),v,v,v,C.F),v,v,v,v,D.u_,v,v,v),C.ah,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.b2x(this,t,d),v,v,v),C.ao,v,v,v,v)],w)
if(t){u=$.d
s=u?C.av:C.ay
x=A.at(6)
w.push(A.T(v,A.e(d.f+" \xd7 "+d.r+" \u2014 Reason: "+d.x+". Recorded as an exchange.",v,v,v,v,v,A.k(u?C.H:C.G,v,v,v,13,C.n).aA(11.5),v,v),C.A,v,v,new A.a_(s,v,v,x,v,v,C.F),v,v,v,I.hm,C.fq,v,v,1/0))}return A.I(w,C.C,v,C.p,C.M)}}
B.adM.prototype={
I(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c,j=B.caX(k),i=k.ax,h=i.length
h=A.e("BILLS ("+h+")",l,l,l,l,l,A.k($.d?C.H:C.G,l,l,l,12,C.an),l,l)
x=y.E
w=A.a([],x)
for(v=i.length,u=k.CW,t=k.cx,s=y.s,r=0;r<i.length;i.length===v||(0,A.y)(i),++r){q=i[r]
w.push(A.a([q.gaf(q),B.qV(q.gf8(),u),B.bQW(q,t),A.J(q.gfU()),q.gfS(q)],s))}i=m.Re(D.aWS,D.b9I,w)
w=k.ay
v=w.length
v=A.e("RETURNS ("+v+")",l,l,l,l,l,A.k($.d?C.H:C.G,l,l,l,12,C.an),l,l)
t=A.a([],x)
for(p=w.length,r=0;r<w.length;w.length===p||(0,A.y)(w),++r){o=w[r]
t.push(A.a([o.a,B.qV(o.d,u),o.b,o.f,A.J(o.w),o.y],s))}w=m.Re(D.b0f,D.Sn,t)
t=k.ch
p=t.length
p=A.e("EXCHANGES ("+p+")",l,l,l,l,l,A.k($.d?C.H:C.G,l,l,l,12,C.an),l,l)
x=A.a([],x)
for(n=t.length,r=0;r<t.length;t.length===n||(0,A.y)(t),++r){o=t[r]
x.push(A.a([o.a,B.qV(o.d,u),o.b,o.f,A.J(o.w)],s))}return A.I(A.a([j,R.cp,h,C.b2,i,C.dB,v,C.b2,w,C.dB,p,C.b2,m.Re(D.b_5,D.Sn,x)],y.p),C.B,l,C.p,C.M)},
Re(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=null
if(f.length===0){x=$.d
w=A.aW(x?C.Y:C.Z,C.L,1)
v=A.at(8)
return A.T(C.al,A.e("Nothing to show for this period.",l,l,l,l,l,A.k(x?C.X:C.U,l,1.5,l,13.5,C.n),l,l),C.A,l,l,new A.a_(l,l,w,v,l,l,C.F),l,l,l,l,Q.nE,l,l,l)}x=A.aW($.d?C.Y:C.Z,C.L,1)
w=A.at(8)
v=A.z(y.S,y.w)
for(u=d.length,t=0;t<u;++t)v.k(0,t,M.hQ)
s=y.p
r=A.a([],s)
for(t=0;t<u;++t){q=d[t]
p=$.d?C.X:C.U
p=new A.A(!0,p,l,"Inter",l,l,12,C.I,l,0.3,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l).aj(C.K)
r.push(new A.a6(C.i3,A.e(q,l,l,l,l,l,p,e.q(0,t)?C.bY:C.cu,l),l))}u=A.a([new L.i3(M.mU,r)],y.T)
for(o=0;o<f.length;++o){if((o&1)===0)r=$.d?C.aq:C.K
else r=$.d?C.av:C.ay
q=A.a([],s)
for(t=0;p=f[o],t<p.length;++t){p=p[t]
n=$.d?C.w:C.u
m=e.q(0,t)?C.bY:C.cu
q.push(new A.a6(C.i3,A.e(p,l,l,l,l,l,new A.A(!0,n,l,"Inter",l,l,13.5,C.n,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),m,l),l))}u.push(new L.i3(new A.a_(r,l,l,l,l,l,C.F),q))}return A.T(l,L.SX(u,v,M.ml),C.c1,l,l,new A.a_(l,l,x,w,l,l,C.F),l,l,l,l,l,l,l,l)}}
B.aVO.prototype={
R(){return"WrapAlignment."+this.b}}
B.aVP.prototype={
R(){return"WrapCrossAlignment."+this.b}}
B.Yd.prototype={}
B.acj.prototype={
eh(d){this.a=d.a
this.b=d.b},
jj(d){var x=new B.acj()
x.a=this.a
x.b=this.b
return x},
j(d){return A.O(this).j(0)+" first:"+this.a+" last:"+this.b}}
B.aci.prototype={
gmQ(){return!0},
grM(){return this.z.b<this.b.length},
a4Z(d){switch(0){case 0:return d.a.c}},
a4N(d){switch(0){case 0:return d.a.d}},
azC(d,e){switch(0){case 0:return new E.jJ(d,e)}},
azc(d,e,f){var x=e-f
switch(0){case 0:return d?x:0}},
f_(b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.b,b2=b1.length
if(b2===0||b0.z.a>=b2){b0.a=new E.fI(0,0,C.t.aK(0,b4.a,b4.b),C.t.aK(0,b4.c,b4.d))
return}x=E.Ga(b3)
switch(0){case 0:w=b4.b
v=new E.fN(0,w,0,1/0)
u=x===F.qN
break}t=A.a([],y.q)
s=A.z(y.j,y.S)
for(b2=b0.z,r=C.e.hc(b1,b2.a),q=r.length,p=b0.f,o=b0.w,n=0,m=0,l=0,k=0,j=0,i=0;i<r.length;r.length===q||(0,A.y)(r),++i){h=r[i]
h.f_(b3,v,!0)
g=b0.a4Z(h)
g.toString
f=b0.a4N(h)
f.toString
if(j>0&&l+p+g>w){n=Math.max(n,l)
m+=k
if(t.length!==0)m+=o
t.push(new B.Yd(l,k,j))
l=0
k=0
j=0}l+=g
if(j>0)l+=p
k=Math.max(k,f);++j
s.k(0,h,t.length)}if(j>0){n=Math.max(n,l)
m+=k
if(t.length!==0)m+=o
t.push(new B.Yd(l,k,j))}e=t.length
switch(0){case 0:r=b4.bc(new E.jJ(n,m))
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
for(r=C.e.hc(b1,a1),g=r.length,i=0;i<r.length;r.length===g||(0,A.y)(r),++i){h=r[i]
if(s.h(0,h)!==a3)break;++a1
a7=b0.a4Z(h)
f=b0.a4N(h)
f.toString
a8=b0.azc(!0,k,f)
if(u){a7.toString
a5-=a7}f=b0.azC(a5,a2+a8)
a9=h.a
h.a=new E.fI(f.a,f.b,a9.c,a9.d)
if(u)a5-=p
else{a7.toString
a5+=a7+p}}a2-=o
a2=a2
b2.b=a1}},
fe(d){var x,w,v,u,t,s=this
s.kW(d)
x=d.b
x.fC()
w=A.fs()
v=s.a
w.dG(v.a,v.b,0,1)
x.qj(0,w)
for(v=s.z,v=C.e.c_(s.b,v.a,v.b),u=v.length,t=0;t<v.length;v.length===u||(0,A.y)(v),++t)v[t].fe(d)
x.q2(0)},
t6(d,e){var x=this.z
x.a=e.a
x.b=e.b
x.a=e.b},
fC(){return this.z}}
B.ao8.prototype={}
var z=a.updateTypes(["x(dn)","ai<~>(ad,qH,yt{cashierName:c?,customRange:fY<bq>?})","cV(c,c)","cV(c,i<c>,i<i<c>>{columnWidths:aA<v,qz>?})","i<cV>(kv)","fX(v,v)","~(c{bold!x,color:a2?,fontSize:v})"])
B.au7.prototype={
$1(d){return d.b>0},
$S:397}
B.au8.prototype={
$2(d,e){return C.t.bo(e.a,d.a)},
$S:398}
B.aub.prototype={
$2(d,e){return d+e.gOq()},
$S:56}
B.aua.prototype={
$2(d,e){return d+e.gKe()},
$S:56}
B.aud.prototype={
$2(d,e){return d+e.gfU()},
$S:56}
B.au9.prototype={
$2(d,e){return d+e.gadm()},
$S:56}
B.aue.prototype={
$2(d,e){return d+e.ga_W()},
$S:56}
B.auc.prototype={
$2(d,e){return d+e.gagl()},
$S:56}
B.auf.prototype={
$2(d,e){return d+e.gNd()},
$S:56}
B.bQX.prototype={
$1(d){var x=this.a.h(0,d.gcZ())
return x==null?d.gcZ():x},
$S:1079}
B.bNx.prototype={
$1(d){var x,w,v
try{x=A.kZ(d)
w=C.t.bj(this.a.dK(x).a,864e8)
return w}catch(v){return null}},
$S:224}
B.bNy.prototype={
$1(d){var x,w,v,u,t,s=this.a
if(s==null)return!1
try{x=A.kZ(d)
u=s.a
w=A.cF(A.bi(u),A.bb(u),A.cQ(u),0,0,0,0)
s=s.b
v=A.cF(A.bi(s),A.bb(s),A.cQ(s),0,0,0,0)
s=!x.md(w)&&!x.od(v)
return s}catch(t){return!1}},
$S:7}
B.bNA.prototype={
$1(d){var x,w,v,u=this
if(d.gjU()!==u.a)return!1
x=u.b
if(x===D.dp)return u.c.$1(C.e.gM(d.ge3(d).split(" ")))
if(C.h.q(d.ge3(d),"now")||C.h.b6(d.ge3(d),A.eU()))return!0
w=u.d.$1(C.e.gM(d.ge3(d).split(" ")))
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
$S:40}
B.bNz.prototype={
$1(d){var x,w,v,u=this
if(!C.h.b6(d.Q,u.a))return!1
x=u.b
if(x===D.dp)return u.c.$1(C.e.gM(d.e.split(" ")))
w=d.e
if(C.h.q(w,"now")||C.h.b6(w,A.eU()))return!0
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
B.bNB.prototype={
$1(d){var x,w,v=this.a
if(v===D.dp)return this.b.$1(d.f)
if(d.ay==="Open"||d.f===A.eU())return!0
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
B.bNk.prototype={
$1(d){return d.z==="Refunded"},
$S:z+0}
B.bNl.prototype={
$1(d){return d.z==="Exchanged"},
$S:z+0}
B.bNm.prototype={
$1(d){return d.b===this.a},
$S:33}
B.bNp.prototype={
$1(d){return d.ay==="Open"},
$S:33}
B.bNq.prototype={
$0(){return C.e.gM(this.a)},
$S:181}
B.bNr.prototype={
$2(d,e){return d+e.x},
$S:53}
B.bNs.prototype={
$2(d,e){return d+e.z},
$S:53}
B.bNt.prototype={
$2(d,e){return d+e.as},
$S:53}
B.bNu.prototype={
$2(d,e){return d+e.Q},
$S:53}
B.bNv.prototype={
$2(d,e){return d+e.at},
$S:53}
B.bNw.prototype={
$2(d,e){return d+e.y},
$S:53}
B.bNn.prototype={
$1(d){return d.b===this.a},
$S:33}
B.bNo.prototype={
$1(d){return d.b===this.a},
$S:33}
B.bPL.prototype={
$0(){return A.ao(this.a,!0).S()},
$S:0}
B.bPM.prototype={
$0(){return A.K(this.a,"Sent to Microsoft Print to PDF",null)},
$S:0}
B.bPN.prototype={
$0(){var x=0,w=A.t(y.H),v=this,u
var $async$$0=A.o(function(d,e){if(d===1)return A.p(e,w)
for(;;)switch(x){case 0:u=v.a
A.ao(u,!0).S()
x=2
return A.h(B.bOn(v.b),$async$$0)
case 2:if(u.e!=null)A.K(u,"Downloaded "+v.c,null)
return A.q(null,w)}})
return A.r($async$$0,w)},
$S:2}
B.bPJ.prototype={
$0(){return A.ao(this.a,!0).S()},
$S:0}
B.bPK.prototype={
$0(){var x=this.a
A.ao(x,!0).S()
B.cxR(this.b)
A.K(x,"Downloaded "+this.c,null)},
$S:0}
B.b2D.prototype={
$0(){var x=this.a
return x.t(new B.b2C(x))},
$S:0}
B.b2C.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.b2E.prototype={
$0(){var x=this.a
return x.t(new B.b2B(x))},
$S:0}
B.b2B.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
B.b2F.prototype={
$0(){var x=this.a
return x.t(new B.b2A(x))},
$S:0}
B.b2A.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.b2v.prototype={
$0(){var x=this.a
return x.t(new B.b2u(x,this.b,this.c))},
$S:0}
B.b2u.prototype={
$0(){if(this.b)var x=null
else{x=this.c
x=x.gaf(x)}return this.a.r=x},
$S:0}
B.b2z.prototype={
$0(){var x=this.a
return x.t(new B.b2y(x,this.b,this.c))},
$S:0}
B.b2y.prototype={
$0(){var x=this.b?null:this.c.a
return this.a.w=x},
$S:0}
B.b2x.prototype={
$0(){var x=this.a
return x.t(new B.b2w(x,this.b,this.c))},
$S:0}
B.b2w.prototype={
$0(){var x=this.b?null:this.c.a
return this.a.x=x},
$S:0}
B.bOp.prototype={
$2(d,e){var x=null
return new E.la(D.tX,E.kI(A.a([E.ch(d,E.fx(x,I.fX,x,x,x,x,x,x,x,F.bw,x,x,9,x,x,x,!0,x,x,x,x),x,x),E.ch(B.caw(e),E.fx(x,x,x,x,x,x,x,x,x,F.bw,x,x,10,x,F.bK,x,!0,x,x,x,x),x,x)],y.n),F.eL,F.jQ))},
$S:z+2}
B.bOq.prototype={
$4$columnWidths(d,e,f,g){var x,w,v,u,t,s=null,r=A.a([new E.cU(s,14,s),E.ch(d,E.fx(s,I.hx,s,s,s,s,s,s,s,F.bw,s,s,10,s,F.bK,s,!0,s,s,s,s),s,s),new E.cU(s,6,s)],y.n)
if(f.length===0)r.push(E.ch("None in this period.",D.xE,s,s))
else{x=A.a([],y.t)
for(w=f.length,v=0;v<f.length;f.length===w||(0,A.y)(f),++v){u=[]
for(t=C.e.gW(f[v]);t.n();)u.push(B.caw(t.gB(0)))
x.push(u)}w=E.fx(s,S.lW,s,s,s,s,s,s,s,F.bw,s,s,8.5,s,F.bK,s,!0,s,s,s,s)
r.push(O.ab_(K.aSO(D.ws,0.5),s,D.B5,D.TR,g,x,s,D.rT,w,e))}return E.iQ(r,F.ca)},
$3(d,e,f){return this.$4$columnWidths(d,e,f,null)},
$S:z+3}
B.bOo.prototype={
$1(a3){var x,w,v,u,t,s,r,q=null,p="\u20b9",o="Rs ",n=this.a,m=E.ch(B.i1(n.a)+" Cashier Report",E.fx(q,q,q,q,q,q,q,q,q,F.bw,q,q,18,q,F.bK,q,!0,q,q,q,q),q,q),l=n.c,k=n.d,j=n.e,i=E.ch(l+" \xb7 "+k+" \xb7 "+j,D.xF,q,q),h=E.ch("SUMMARY",E.fx(q,I.hx,q,q,q,q,q,q,q,F.bw,q,q,10,q,F.bK,q,!0,q,q,q,q),q,q),g=this.b,f=y.n,e=n.r,d=n.w,a0=n.ax,a1=n.ay,a2=n.ch
d=E.kI(A.a([new E.fF(1,F.cF,E.iQ(A.a([g.$2("Date",n.b),g.$2("Branch",k),g.$2("Cashier",l),g.$2("Counter",j),g.$2("Shift Timings",n.f),g.$2("Held Bills",""+n.as)],f),F.ca)),new E.cU(24,q,q),new E.fF(1,F.cF,E.iQ(A.a([g.$2("Opening Float",C.h.cI(A.J(e),p,o)),g.$2("Cash Sales",C.h.cI(A.J(d),p,o)),g.$2("UPI Sales",C.h.cI(A.J(n.x),p,o)),g.$2("Card Sales",C.h.cI(A.J(n.y),p,o)),g.$2("Wallet Sales",C.h.cI(A.J(n.z),p,o)),g.$2("Expected Drawer Total (Cash)",C.h.cI(A.J(e+d),p,o)),g.$2("Total Sales",C.h.cI(A.J(n.Q),p,o)),g.$2("No. of Bills",""+a0.length),g.$2("No. of Returns & Exchanges",""+(a1.length+a2.length))],f),F.ca))],f),F.ca,F.e0)
e=E.ch("GST / TAX SUMMARY",E.fx(q,I.hx,q,q,q,q,q,q,q,F.bw,q,q,10,q,F.bK,q,!0,q,q,q,q),q,q)
j=E.iQ(A.a([g.$2("Gross Sales (MRP)",C.h.cI(A.J(n.gOr()),p,o)),g.$2("Discounts",C.h.cI(A.J(n.gW6()),p,o)),g.$2("Taxable Value",C.h.cI(A.J(n.gyB()-n.gz1()),p,o))],f),F.ca)
l=A.a([g.$2("CGST",C.h.cI(A.J(n.gV_()),p,o)),g.$2("SGST",C.h.cI(A.J(n.gOP()),p,o))],f)
if(n.gyi()>0)l.push(g.$2("IGST",C.h.cI(A.J(n.gyi()),p,o)))
l.push(g.$2("Total GST",C.h.cI(A.J(n.gz1()),p,o)))
l.push(g.$2("Net Sales (Bills)",C.h.cI(A.J(n.gyB()),p,o)))
m=A.a([m,new E.cU(q,2,q),i,new E.cU(q,14,q),h,new E.cU(q,8,q),d,new E.cU(q,6,q),e,new E.cU(q,8,q),E.kI(A.a([new E.fF(1,F.cF,j),new E.cU(24,q,q),new E.fF(1,F.cF,E.iQ(l,F.ca))],f),F.ca,F.e0)],f)
if(n.gl6().length!==0){l=E.ch("DENOMINATION FINAL COUNT (AFTER CLOSING)",E.fx(q,I.fX,q,q,q,q,q,q,q,F.bw,q,q,8.5,q,F.bK,q,!0,q,q,q,q),q,q)
k=A.a([],f)
for(j=n.gl6(),i=j.length,x=0;x<j.length;j.length===i||(0,A.y)(j),++x){w=j[x]
k.push(E.ch("Rs "+w.a+" x "+w.b,I.kc,q,q))}C.e.u(m,A.a([new E.cU(q,6,q),l,new E.cU(q,4,q),B.c7R(k,4,8)],f))}l=this.c
k=a0.length
j=y.s
i=A.a(["Bill","Customer","Items","Net","Tender"],j)
h=y.E
g=A.a([],h)
for(f=a0.length,e=n.CW,n=n.cx,x=0;x<a0.length;a0.length===f||(0,A.y)(a0),++x){v=a0[x]
d=v.gaf(v)
u=B.qV(v.gf8(),e)
t=B.bQW(v,n)
s=A.J(v.gfU())
g.push(A.a([d,u,t,A.kS(s,p,o,0),v.gfS(v)],j))}n=y.S
f=y.I
m.push(l.$4$columnWidths("BILLS ("+k+")",i,g,A.au([0,D.lg,1,D.By,2,D.aax,3,D.Bx,4,D.aav],n,f)))
g=a1.length
i=A.a(["Return","Customer","Against Bill","Item","Amount","Mode"],j)
k=A.a([],h)
for(d=a1.length,x=0;x<a1.length;a1.length===d||(0,A.y)(a1),++x){r=a1[x]
a0=B.qV(r.d,e)
u=A.J(r.w)
k.push(A.a([r.a,a0,r.b,r.f,A.kS(u,p,o,0),r.y],j))}m.push(l.$4$columnWidths("RETURNS ("+g+")",i,k,A.au([0,D.lg,1,D.aaw,2,D.lg,3,N.i6,4,D.aau,5,N.i6],n,f)))
k=a2.length
i=A.a(["Return","Customer","Against Bill","Item Exchanged","Value"],j)
h=A.a([],h)
for(g=a2.length,x=0;x<a2.length;a2.length===g||(0,A.y)(a2),++x){r=a2[x]
d=B.qV(r.d,e)
a0=A.J(r.w)
h.push(A.a([r.a,d,r.b,r.f,A.kS(a0,p,o,0)],j))}m.push(l.$4$columnWidths("EXCHANGES ("+k+")",i,h,A.au([0,D.lg,1,D.By,2,D.lg,3,N.i6,4,D.Bx],n,f)))
return m},
$S:z+4}
B.bOi.prototype={
$2(d,e){return this.a.adk(new G.j9(e,d))},
$S:z+5}
B.bOl.prototype={
$4$bold$color$fontSize(d,e,f,g){var x,w,v=null,u=this.a,t=u.a
this.b.ahw(new G.j9(t,0),new G.j9(t,5))
x=this.c.$2(0,u.a)
t=x.c
w=x.f
t.oz(new G.j9(x.e,w),new G.h7(new G.ij(d,v,v)))
w=G.pN(H.eg,e,v,v,!1,!1,f==null?H.cQ:f,v,v,g,H.eQ,!1,v,H.em,v,0,v,v,H.d5,H.fF)
t.a.a=!0
x.a=w;++u.a},
$2$bold(d,e){return this.$4$bold$color$fontSize(d,e,null,11)},
$3$bold$fontSize(d,e,f){return this.$4$bold$color$fontSize(d,e,null,f)},
$3$bold$color(d,e,f){return this.$4$bold$color$fontSize(d,e,f,11)},
$S:z+6}
B.bOk.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=v.$2(0,u.a),s=t.c,r=t.f
s.oz(new G.j9(t.e,r),new G.h7(new G.ij(d,w,w)))
r=B.cb4(!1,!0)
s.a.a=!0
t.a=r
x=v.$2(1,u.a)
v=x.c
r=x.f
v.oz(new G.j9(x.e,r),new G.h7(new G.ij(e,w,w)))
r=B.cb4(!1,!1)
v.a.a=!0
x.a=r;++u.a},
$S:80}
B.bOh.prototype={
$0(){return this.a.a++},
$S:0}
B.bOm.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.b
m.$4$bold$color$fontSize(d,!0,$.c1S(),11)
for(x=e.length,w=o.c,v=o.a,u=0;u<x;++u){t=w.$2(u,v.a)
s=e[u]
r=t.c
q=t.f
r.oz(new G.j9(t.e,q),new G.h7(new G.ij(s,n,n)))
s=G.pN($.cgH(),!0,n,n,!1,!1,H.uE,n,n,n,H.eQ,!1,n,H.em,n,0,n,n,H.d5,H.qZ)
r.a.a=!0
t.a=s}++v.a
if(f.length===0)m.$4$bold$color$fontSize("None in this period.",!1,$.c1U(),10)
else for(p=0;p<f.length;++p){for(m=(p&1)===0,u=0;u<f[p].length;++u){t=w.$2(u,v.a)
x=f[p][u]
s=t.c
r=t.f
s.oz(new G.j9(t.e,r),new G.h7(new G.ij(x,n,n)))
x=m?$.c1R():H.eg
r=$.c1T()
r=r.a
r=G.Lh(G.wm(r)||r==="none"?r:H.cQ.gie())
r=G.pN(x,!1,new G.AH(H.mQ,r),n,!1,!1,H.cQ,n,n,n,H.eQ,!1,n,H.em,n,0,n,n,H.d5,H.qZ)
s.a.a=!0
t.a=r}++v.a}o.d.$0()},
$S:1081}
B.bOj.prototype={
$1(d){return"\u20b9"+d.a+"\xd7"+d.b},
$S:400};(function installTearOffs(){var x=a.installStaticTearOff
x(B,"cbc",3,null,["$5$cashierName$customRange","$3","$4$customRange"],["Lv",function(d,e,f){return B.Lv(d,e,f,null,null)},function(d,e,f,g){return B.Lv(d,e,f,null,g)}],1,0)
x(B,"cbb",3,null,["$5$cashierName$customRange","$3","$4$customRange"],["Lu",function(d,e,f){return B.Lu(d,e,f,null,null)},function(d,e,f,g){return B.Lu(d,e,f,null,g)}],1,0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.ki,[B.yt,B.aVO,B.aVP])
w(A.P,[B.a20,B.Yd])
w(A.bO,[B.au7,B.bQX,B.bNx,B.bNy,B.bNA,B.bNz,B.bNB,B.bNk,B.bNl,B.bNm,B.bNp,B.bNn,B.bNo,B.bOq,B.bOo,B.bOl,B.bOm,B.bOj])
w(A.d_,[B.au8,B.aub,B.aua,B.aud,B.au9,B.aue,B.auc,B.auf,B.bNr,B.bNs,B.bNt,B.bNu,B.bNv,B.bNw,B.bOp,B.bOi,B.bOk])
w(A.cK,[B.bNq,B.bPL,B.bPM,B.bPN,B.bPJ,B.bPK,B.b2D,B.b2C,B.b2E,B.b2B,B.b2F,B.b2A,B.b2v,B.b2u,B.b2z,B.b2y,B.b2x,B.b2w,B.bOh])
v(B.UT,A.R)
v(B.adN,A.ah)
v(B.adM,A.av)
v(B.acj,E.TW)
v(B.ao8,E.Px)
v(B.aci,B.ao8)
x(B.ao8,E.fw)})()
A.bQ(b.typeUniverse,JSON.parse('{"UT":{"R":[],"f":[]},"adN":{"ah":["UT"]},"adM":{"av":[],"f":[]},"aci":{"fw":[],"cV":[]}}'))
var y=(function rtii(){var x=A.G
return{d:x("a20"),N:x("hh<v>"),o:x("l<Y>"),E:x("l<i<c>>"),t:x("l<i<@>>"),s:x("l<c>"),T:x("l<i3>"),p:x("l<f>"),n:x("l<cV>"),q:x("l<Yd>"),l:x("i<d0>"),r:x("i<l1>"),Y:x("i<d1>"),c:x("i<bE>"),e:x("i<dn>"),P:x("i<dA>"),W:x("aA<v,v>"),U:x("bG"),R:x("c"),w:x("qy"),I:x("qz"),j:x("cV"),z:x("@"),S:x("v"),u:x("bV?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b67=new E.jI(0.09411764705882353,0.13333333333333333,0.20392156862745098)
D.rT=new E.Fo(D.b67,null,null)
D.tX=new E.jY(0,0,0,6)
D.u_=new A.ae(0,9,0,9)
D.a4T=new A.ae(14,6,14,10)
D.B5=new E.jY(6,5,6,5)
D.a5S=new A.ae(9,2,9,2)
D.aau=new K.rt(45)
D.Bx=new K.rt(48)
D.aav=new K.rt(50)
D.aaw=new K.rt(62)
D.By=new K.rt(66)
D.lg=new K.rt(92)
D.aax=new K.Gs(3)
D.aR0=x(["Return","Customer","Against Bill","Item Exchanged","Value"],y.s)
D.aWS=x(["BILL","CUSTOMER","ITEMS","NET","TENDER"],y.s)
D.aXO=x(["Bill","Customer","Items","Net","Tender"],y.s)
D.b_5=x(["RETURN","CUSTOMER","AGAINST BILL","ITEM EXCHANGED","VALUE"],y.s)
D.b0f=x(["RETURN","CUSTOMER","AGAINST BILL","ITEM","AMOUNT","MODE"],y.s)
D.b0p=x(["Return","Customer","Against Bill","Item","Amount","Mode"],y.s)
D.ws=new E.jI(0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.k3=new B.yt(0,"daily")
D.wB=new B.yt(1,"weekly")
D.wC=new B.yt(2,"monthly")
D.dp=new B.yt(3,"custom")
D.Sn=new A.hh([4],y.N)
D.b9I=new A.hh([3],y.N)
D.bf_=new A.A(!0,C.K,null,null,null,null,12,C.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.TR=new E.mR(!0,null,null,null,null,null,F.bw,8.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.b68=new E.jI(0.6196078431372549,0.6196078431372549,0.6196078431372549)
D.xE=new E.mR(!0,D.b68,null,null,null,null,F.bw,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.xF=new E.mR(!0,I.fX,null,null,null,null,F.bw,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.bo9=new B.aVO(0,"start")
D.boa=new B.aVP(0,"start")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cIp","cgH",()=>B.xg("FF182234"))
x($,"cIk","c1S",()=>B.xg("FF1E3A8A"))
x($,"cIn","c1U",()=>B.xg("FF6B7280"))
x($,"cIi","c1R",()=>B.xg("FFF3F5FA"))
x($,"cIm","c1T",()=>B.xg("FFE6E9F2"))})()};
(a=>{a["bQuvRadK1De/NIG4UPHHnSfxFkQ="]=a.current})($__dart_deferred_initializers__);