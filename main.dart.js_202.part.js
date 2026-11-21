((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,R,L,M,A={
anl(a1,a2,a3,a4){var x=0,w=B.v(y._),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$anl=B.q(function(a5,a6){if(a5===1)return B.r(a6,w)
for(;;)switch(x){case 0:d=a1.m(0,$.af(),y.q)
a0=a3==null
if(a0){u=d==null?null:d.a
t=u==null?"Cashier":u}else t=a3
s=a1.m(0,$.h9(),y.d)
r=a1.m(0,$.mu(),y.W)
u=J.bW(s)
q=u.cA(s,new A.bAQ(t))
p=B.N(q,q.$ti.i("A.E"))
q=B.ai(p).i("ay<1>")
o=B.N(new B.ay(p,new A.bAV(a2,new A.bAU(a4),new A.bAT(B.kU(B.eK()))),q),q.i("A.E"))
switch(a2.a){case 0:q=L.ee(B.eK())
break
case 1:q="Last 7 days"
break
case 2:q="Last 30 days"
break
case 3:q=a4==null?"Custom range":L.ee(C.e.gM(a4.a.jn().split("T")))+" \u2013 "+L.ee(C.e.gM(a4.b.jn().split("T")))
break
default:q=null}if(o.length!==0){n=a1.m(0,$.cB(),y.B)
m=B.dm(J.bj(n,new A.bAR(o)))
l=m==null?B.dm(n):m
if(l==null)l=C.hg
k=l.gb4(l)+" \xb7 "+l.gcj(l)}else k="\u2014"
j=null
i=null
x=a2===G.ju?3:4
break
case 3:m=d==null
h=m?null:d.y
if(h==null)h=""
if(!a0){a0=B.dm(u.cA(s,new A.bAS(t)))
g=a0==null?null:a0.ax}else g=m?null:d.Q
x=h.length!==0&&g!=null?5:6
break
case 5:if(o.length!==0)f=C.e.gM(o).b
else{a0=a1.m(0,$.iH(),y.C)
f=a0.gaf(a0)}x=7
return B.l(C.eY.yi(g,f,h),$async$anl)
case 7:e=a6
j=e.a
i=e.b
case 6:case 4:v=new A.a_B(a2,q,t,k,o,r,j,i)
x=1
break
case 1:return B.t(v,w)}})
return B.u($async$anl,w)},
a_B:function a_B(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aqH:function aqH(){},
aqE:function aqE(){},
aqD:function aqD(){},
aqG:function aqG(){},
aqF:function aqF(){},
aqI:function aqI(){},
aqC:function aqC(){},
aqB:function aqB(){},
aqz:function aqz(){},
aqA:function aqA(){},
bAQ:function bAQ(d){this.a=d},
bAT:function bAT(d){this.a=d},
bAU:function bAU(d){this.a=d},
bAV:function bAV(d,e,f){this.a=d
this.b=e
this.c=f},
bAR:function bAR(d){this.a=d},
bAS:function bAS(d){this.a=d},
bDe(d,e,f,g,h){var x=0,w=B.v(y.H),v,u,t,s,r
var $async$bDe=B.q(function(i,j){if(i===1)return B.r(j,w)
for(;;)switch(x){case 0:x=3
return B.l(A.anl(e,f,g,h),$async$bDe)
case 3:r=j
if(d.e==null){x=1
break}u=I.hE(f)
u=B.bA(u.toLowerCase()," ","_")
t=f===G.d8?r.b:I.hE(f)
s=B.a0(null,!1,null,null,null,null,null,"Close",new A.bDf(d),C.N,C.at)
B.c0(d,new A.SR(r,null),B.a([s,B.a0(null,!1,null,null,null,B.bU("printer",$.d?C.y:C.w,14),null,"Print",new A.bDg(d),C.N,C.at),B.a0(null,!1,null,null,null,M.fm,null,"Download PDF",new A.bDh(d,r,"cashops_report_"+u+".pdf"),C.N,C.ah)],y.p),t+" Cash Ops Report \u2014 PDF Preview",C.dc,y.z)
case 1:return B.t(v,w)}})
return B.u($async$bDe,w)},
bDb(d,e,f,g,h){var x=0,w=B.v(y.H),v,u,t,s
var $async$bDb=B.q(function(i,j){if(i===1)return B.r(j,w)
for(;;)switch(x){case 0:x=3
return B.l(A.anl(e,f,g,h),$async$bDb)
case 3:s=j
if(d.e==null){x=1
break}u=I.hE(f)
u=B.bA(u.toLowerCase()," ","_")
t=f===G.d8?s.b:I.hE(f)
B.c0(d,new A.SR(s,null),B.a([B.a0(null,!1,null,null,null,null,null,"Close",new A.bDc(d),C.N,C.at),B.a0(null,!1,null,null,null,M.fm,null,"Download .xlsx",new A.bDd(d,s,"cashops_report_"+u+".csv"),C.N,C.hl)],y.p),t+" Cash Ops Report \u2014 Excel Preview",C.dc,y.z)
case 1:return B.t(v,w)}})
return B.u($async$bDb,w)},
bDf:function bDf(d){this.a=d},
bDg:function bDg(d){this.a=d},
bDh:function bDh(d,e,f){this.a=d
this.b=e
this.c=f},
bDc:function bDc(d){this.a=d},
bDd:function bDd(d,e,f){this.a=d
this.b=e
this.c=f},
SR:function SR(d,e){this.c=d
this.a=e},
bBO(d){var x=0,w=B.v(y.H),v,u,t
var $async$bBO=B.q(function(e,f){if(e===1)return B.r(f,w)
for(;;)switch(x){case 0:t=D.atb()
t.GC(D.aCP(new A.bBP(d,new A.bBQ()),null,E.po))
x=2
return B.l(t.iI(0),$async$bBO)
case 2:v=f
u=I.hE(d.a)
N.Di("cashops_report_"+B.bA(u.toLowerCase()," ","_")+".pdf",v,"application/pdf")
return B.t(null,w)}})
return B.u($async$bBO,w)},
cfZ(d){var x,w,v,u,t,s,r=new A.bBM(),q=new B.dH(""),p=d.a,o=I.hE(p)+" Cash Ops Report\n"
q.a=o
x=d.c
w=d.d
o+=x+","+w+"\n"
q.a=o
o+="\n"
q.a=o
q.a=o+"SUMMARY\n"
v=new A.bBN(q,r)
v.$2("Date",d.b)
v.$2("Cashier",x)
v.$2("Store",w)
w=d.e
v.$2("Registers Opened",""+w.length)
v.$2("Currently Open",""+d.gVs())
v.$2("Closed",""+d.gSq())
v.$2("Total Opening Float",B.J(d.gWo()))
v.$2("Total Cash Sales",B.J(d.gWk()))
v.$2("Total Cash Refunds",B.J(d.gWj()))
v.$2("Total Expected in Drawer",B.J(d.gWm()))
v.$2("Total Counted",B.J(d.gWl()))
v.$2("Total Variance",B.J(d.gWr()))
if(d.gkM().length!==0){o=d.gkM()
v.$2("Denomination Final Count",new B.an(o,new A.bBL(),B.ai(o).i("an<1,c>")).aU(0," "))}o=q.a+="\n"
x=w.length
o+="REGISTERS ("+x+")\n"
q.a=o
q.a=o+"Register,Counter,Opened By,Opening,Cash Sales,Expected,Counted,Variance,Status\n"
for(u=0;u<w.length;w.length===x||(0,B.B)(w),++u){t=w[u]
o=B.o(r.$1(t.a))+","+B.o(r.$1(t.c))+","+B.o(r.$1(t.y))+","+B.J(t.d)+","+B.J(t.e)+","+B.J(t.r)+","+B.J(t.w)+","+B.J(t.x)+","+B.o(r.$1(t.Q))+"\n"
q.a+=o}o=B.a([239,187,191],y.a)
x=q.a
C.e.A(o,C.c1.bn(x.charCodeAt(0)==0?x:x))
s=new Uint8Array(B.ex(o))
p=I.hE(p)
N.Di("cashops_report_"+B.bA(p.toLowerCase()," ","_")+".csv",s,"text/csv")},
bBQ:function bBQ(){},
bBP:function bBP(d,e){this.a=d
this.b=e},
bBM:function bBM(){},
bBN:function bBN(d,e){this.a=d
this.b=e},
bBL:function bBL(){},
c6X(d){return new A.xv(null)},
xv:function xv(d){this.a=d},
ai4:function ai4(){this.d=$
this.c=this.a=null},
bmc:function bmc(d){this.a=d},
bmb:function bmb(){},
bma:function bma(d,e,f){this.a=d
this.b=e
this.c=f},
bm8:function bm8(d){this.a=d},
bm9:function bm9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
J4:function J4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
ahC:function ahC(d,e,f){this.c=d
this.d=e
this.a=f},
TQ:function TQ(d,e){this.d=d
this.a=e},
TR:function TR(d,e){var _=this
_.w=d
_.x=null
_.y=!0
_.Q=_.z=null
_.as=e
_.d=$
_.c=_.a=null},
b61:function b61(d){this.a=d},
b62:function b62(d){this.a=d},
b63:function b63(){},
b67:function b67(){},
b68:function b68(){},
b69:function b69(d,e){this.a=d
this.b=e},
b6_:function b6_(d){this.a=d},
b60:function b60(d){this.a=d},
b6a:function b6a(){},
b6b:function b6b(d){this.a=d},
b5Z:function b5Z(d,e){this.a=d
this.b=e},
b6c:function b6c(d){this.a=d},
b5Y:function b5Y(d){this.a=d},
b6d:function b6d(d){this.a=d},
b5X:function b5X(d){this.a=d},
b6e:function b6e(d){this.a=d},
b5W:function b5W(d){this.a=d},
b64:function b64(d,e){this.a=d
this.b=e},
b5V:function b5V(d,e){this.a=d
this.b=e},
b65:function b65(d){this.a=d},
b5U:function b5U(d){this.a=d},
b66:function b66(d){this.a=d},
b5T:function b5T(d){this.a=d},
rw:function rw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ab9:function ab9(){this.d=!1
this.c=this.a=null},
b__:function b__(d){this.a=d},
aZZ:function aZZ(d){this.a=d},
b_0:function b_0(d){this.a=d},
aZY:function aZY(d){this.a=d},
bVm(d,e,f,g){var x,w,v,u,t,s=d.m(0,$.cB(),y.B),r=g==null?null:B.dm(J.bj(s,new A.bBe(g))),q=r==null,p=q?s:B.a([r],y.x),o=d.m(0,$.lC(),y.c),n=d.m(0,$.lD(),y.y),m=d.m(0,$.ez(),y.j),l=new A.bBn(e,new A.bBm(f),new A.bBl(B.kU(B.eK()))),k=new A.bBd(),j=B.a([],y.Y)
for(x=J.ab(p),w=J.bW(o),v=J.bW(n),u=J.bW(m);x.p();){t=x.gE(x)
j.push(new A.xO(t,w.cA(o,new A.bBf(k,t,l)).bu(0,0,new A.bBg()),w.cA(o,new A.bBh(k,t,l)).gt(0),v.cA(n,new A.bBi(k,t)).gt(0),u.cA(m,new A.bBj(k,t)).gt(0)))}switch(e.a){case 0:x=L.ee(B.eK())
break
case 1:x="Last 7 days"
break
case 2:x="Last 30 days"
break
case 3:x=f==null?"Custom range":L.ee(C.e.gM(f.a.jn().split("T")))+" - "+L.ee(C.e.gM(f.b.jn().split("T")))
break
default:x=null}w=!q?0:u.cA(m,new A.bBk()).gt(0)
return new A.aDi(q?null:r.gb4(r)+" \xb7 "+r.gcj(r),e,x,j,w)},
xO:function xO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aDi:function aDi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aDm:function aDm(){},
aDj:function aDj(){},
aDl:function aDl(){},
aDk:function aDk(){},
bBe:function bBe(d){this.a=d},
bBl:function bBl(d){this.a=d},
bBm:function bBm(d){this.a=d},
bBn:function bBn(d,e,f){this.a=d
this.b=e
this.c=f},
bBd:function bBd(){},
bBf:function bBf(d,e,f){this.a=d
this.b=e
this.c=f},
bBg:function bBg(){},
bBh:function bBh(d,e,f){this.a=d
this.b=e
this.c=f},
bBi:function bBi(d,e){this.a=d
this.b=e},
bBj:function bBj(d,e){this.a=d
this.b=e},
bBc:function bBc(d,e){this.a=d
this.b=e},
bBk:function bBk(){},
chi(d,e,f,g,h){var x,w,v=null,u=A.bVm(e,f,g,h),t=I.hE(f)
t=B.bA(t.toLowerCase()," ","_")
x=f===G.d8?u.c:I.hE(f)
w=u.a
w=w==null?"":" \xb7 "+w
B.c0(d,new A.UM(u,v),B.a([B.a0(v,!1,v,v,v,v,v,"Close",new A.bDx(d),C.N,C.at),B.a0(v,!1,v,v,v,M.fm,v,"Download PDF",new A.bDy(d,u,"network_report_"+t+".pdf"),C.N,C.ah)],y.p),x+" Network Report"+w+" \u2014 PDF Preview",C.dc,y.z)},
chh(d,e,f,g,h){var x,w,v=null,u=A.bVm(e,f,g,h),t=I.hE(f)
t=B.bA(t.toLowerCase()," ","_")
x=f===G.d8?u.c:I.hE(f)
w=u.a
w=w==null?"":" \xb7 "+w
B.c0(d,new A.UM(u,v),B.a([B.a0(v,!1,v,v,v,v,v,"Close",new A.bDv(d),C.N,C.at),B.a0(v,!1,v,v,v,M.fm,v,"Download .xlsx",new A.bDw(d,u,"network_report_"+t+".xlsx"),C.N,C.hl)],y.p),x+" Network Report"+w+" \u2014 Excel Preview",C.dc,y.z)},
bv8(d){var x=0,w=B.v(y.H),v,u,t
var $async$bv8=B.q(function(e,f){if(e===1)return B.r(f,w)
for(;;)switch(x){case 0:t=D.atb()
t.GC(D.aCP(new A.bv9(d,new A.bva()),null,E.po))
x=2
return B.l(t.iI(0),$async$bv8)
case 2:v=f
u=I.hE(d.b)
N.Di("network_report_"+B.bA(u.toLowerCase()," ","_")+".pdf",v,"application/pdf")
return B.t(null,w)}})
return B.u($async$bv8,w)},
ccg(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="Network Report",g={},f=H.avg(new B.zo().bn("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")),e=f.LM()
e.toString
f.VY(e,h)
f.q1(h)
x=f.x.h(0,h)
x.lc(0,30)
x.lc(1,18)
x.lc(2,16)
x.lc(3,12)
x.lc(4,18)
x.lc(5,14)
g.a=0
w=new A.bv5(x)
v=new A.bv7(g,x,w)
u=new A.bv6(g,w)
t=new A.bv4(g)
e=d.b
s=I.hE(e)
r=d.a
r=r==null?"":" \xb7 "+r
v.$3$bold$fontSize(s+" Network Report"+r,!0,16)
r=d.d
v.$3$bold$fontSize(""+r.length+" stores \xb7 Network",!1,10)
t.$0()
s=$.c_E()
v.$3$bold$color("SUMMARY",!0,s)
u.$2("Date",d.c)
u.$2("Active Stores",""+r.length)
u.$2("Network Sales",B.J(d.gWq()))
u.$2("Total Bills",""+d.gWi())
u.$2("Pending Stock Requests",""+d.gWp())
u.$2("Low/Out-of-Stock Items",""+d.gWn())
t.$0()
v.$3$bold$color("STORE PERFORMANCE ("+r.length+")",!0,s)
for(q=0;q<6;++q){p=w.$2(q,g.a)
s=F.aIP[q]
o=p.c
n=p.f
o.oa(new H.iM(p.e,n),new H.fO(new H.hU(s,i,i)))
s=H.p5($.c_H(),!0,i,i,!1,!1,K.tN,i,i,i,K.ev,!1,i,K.e7,i,0,i,i,K.cR,K.fj)
o.a.a=!0
p.a=s}++g.a
if(r.length===0)v.$3$bold$fontSize("No stores in the network yet.",!1,10)
else for(m=0;m<r.length;++m){l=r[m]
s=l.a
k=[s.gb4(s)+" \xb7 "+s.gcj(s),s.geA(s),B.J(l.b),""+l.c,""+l.d,""+l.e]
for(s=(m&1)===0,q=0;q<6;++q){p=w.$2(q,g.a)
o=k[q]
n=p.c
j=p.f
n.oa(new H.iM(p.e,j),new H.fO(new H.hU(o,i,i)))
o=s?$.c_D():K.e_
j=$.c_F()
j=j.a
j=H.JA(H.vq(j)||j==="none"?j:K.cA.ghT())
j=H.p5(o,!1,new H.zq(K.m7,j),i,!1,!1,K.cA,i,i,i,K.ev,!1,i,K.e7,i,0,i,i,K.cR,K.fj)
n.a.a=!0
p.a=j}++g.a}s=f.Tv()
s.toString
e=I.hE(e)
N.Di("network_report_"+B.bA(e.toLowerCase()," ","_")+".xlsx",new Uint8Array(B.ex(s)),"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")},
bDx:function bDx(d){this.a=d},
bDy:function bDy(d,e,f){this.a=d
this.b=e
this.c=f},
bDv:function bDv(d){this.a=d},
bDw:function bDw(d,e,f){this.a=d
this.b=e
this.c=f},
UM:function UM(d,e){this.c=d
this.a=e},
bva:function bva(){},
bv9:function bv9(d,e){this.a=d
this.b=e},
bv5:function bv5(d){this.a=d},
bv7:function bv7(d,e,f){this.a=d
this.b=e
this.c=f},
bv6:function bv6(d,e){this.a=d
this.b=e},
bv4:function bv4(d){this.a=d}},F,P,Q,S,I,G,D,E,T,N,O,H,K
J=c[1]
B=c[0]
C=c[2]
R=c[77]
L=c[89]
M=c[171]
A=a.updateHolder(c[25],A)
F=c[172]
P=c[99]
Q=c[151]
S=c[92]
I=c[51]
G=c[173]
D=c[57]
E=c[154]
T=c[72]
N=c[64]
O=c[140]
H=c[58]
K=c[174]
A.a_B.prototype={
gWo(){return C.e.bu(this.e,0,new A.aqH())},
gWk(){var x=this.r
return x==null?C.e.bu(this.e,0,new A.aqE()):x},
gWj(){var x=this.w
return x==null?C.e.bu(this.e,0,new A.aqD()):x},
gWm(){return C.e.bu(this.e,0,new A.aqG())},
gWl(){return C.e.bu(this.e,0,new A.aqF())},
gWr(){return C.e.bu(this.e,0,new A.aqI())},
gVs(){var x=this.e
return new B.ay(x,new A.aqC(),B.ai(x).i("ay<1>")).gt(0)},
gSq(){var x=this.e
return new B.ay(x,new A.aqB(),B.ai(x).i("ay<1>")).gt(0)},
gkM(){var x=J.z4(this.f)
x=x.cA(x,new A.aqz()).aG(0)
C.e.dG(x,new A.aqA())
return x}}
A.SR.prototype={
I(d){var x,w,v,u,t,s,r,q,p=null,o=this.c,n=o.c,m=o.d,l=B.h(n+" \xb7 "+m,p,p,p,p,B.p($.d?C.Q:C.P,p,p,p,13,C.p).aW(12.5),p,p),k=$.d,j=k?C.aB:C.aH,i=B.bk(k?C.Y:C.Z,C.O,1),h=B.at(14),g=B.h("SUMMARY",p,p,p,p,B.p(k?C.Q:C.P,p,p,p,12,C.an),p,p),f=o.e
m=B.a([new B.am("Date",o.b,!1),new B.am("Cashier",n,!1),new B.am("Store",m,!1),new B.am("Registers Opened",""+f.length,!1),new B.am("Currently Open",""+o.gVs(),!1),new B.am("Closed",""+o.gSq(),!1),new B.am("Total Opening Float",B.J(o.gWo()),!1),new B.am("Total Cash Sales",B.J(o.gWk()),!1),new B.am("Total Cash Refunds",B.J(o.gWj()),!1),new B.am("Total Expected in Drawer",B.J(o.gWm()),!1),new B.am("Total Counted",B.J(o.gWl()),!1),new B.am("Total Variance",B.J(o.gWr()),!1)],y.o)
n=B.h("DENOMINATION FINAL COUNT",p,p,p,p,B.p($.d?C.Q:C.P,p,p,p,12,C.an),p,p)
if(o.gkM().length===0)k=B.h("No cash denominations counted yet.",p,p,p,p,B.p($.d?C.a_:C.a0,p,1.5,p,13.5,C.p),p,p)
else{k=B.a([],y.p)
for(x=o.gkM(),w=x.length,v=0;v<x.length;x.length===w||(0,B.B)(x),++v){u=x[v]
t=$.d
s=t?C.ao:C.D
r=new B.aK(t?C.Y:C.Z,1,C.O,-1)
q=new B.b8(6,6)
t=t?C.y:C.w
k.push(B.a5(p,B.h("\u20b9"+u.a+" \xd7 "+u.b,p,p,p,p,new B.E(!0,t,p,"Inter",p,p,11.8,C.R,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),C.A,p,p,new B.a6(s,p,new B.ce(r,r,r,r),new B.dl(q,q,q,q),p,p,C.J),p,p,p,p,O.tg,p,p,p))}k=B.dj(C.b8,k,C.bB,8,8)}x=y.p
h=B.a5(p,B.S(B.a([g,C.bA,new B.et(m,2,p),C.aX,n,C.bs,k],x),C.H,p,C.r,C.M),C.A,p,p,new B.a6(j,p,i,h,p,p,C.J),p,p,p,p,C.et,p,p,1/0)
f=f.length
return B.S(B.a([l,C.aX,h,Q.cW,B.h("REGISTERS ("+f+")",p,p,p,p,B.p($.d?C.Q:C.P,p,p,p,12,C.an),p,p),C.bs,this.aET(o)],x),C.H,p,C.r,C.M)},
aET(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.e
if(i.length===0){i=$.d
x=B.bk(i?C.Y:C.Z,C.O,1)
w=B.at(8)
return B.a5(C.ag,B.h("No registers in this period.",j,j,j,j,B.p(i?C.a_:C.a0,j,1.5,j,13.5,C.p),j,j),C.A,j,j,new B.a6(j,j,x,w,j,j,C.J),j,j,j,j,O.mR,j,j,j)}x=B.bk($.d?C.Y:C.Z,C.O,1)
w=B.at(8)
v=B.z(y.S,y.w)
for(u=0;u<9;++u)v.l(0,u,M.hq)
t=y.p
s=B.a([],t)
for(u=0;u<9;++u){r=F.aWd[u]
q=$.d?C.a_:C.a0
q=new B.E(!0,q,j,"Inter",j,j,12,C.R,j,0.3,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j).aD(C.D)
s.push(new B.ah(F.mV,B.h(r,j,j,j,j,q,u>=3&&u<=7?C.c4:C.cJ,j),j))}s=B.a([new L.hG(M.m9,s)],y.T)
for(r=y.s,q=y.M,u=0;u<i.length;++u){if((u&1)===0)p=$.d?C.ao:C.D
else p=$.d?C.aB:C.aH
o=B.a([],t)
for(n=i[u],n=new B.wM(B.a([n.a,n.c,n.y,B.J(n.d),B.J(i[u].e),B.J(i[u].r),B.J(i[u].w),B.J(i[u].x),i[u].Q],r),q),n=n.gfv(n),n=n.gU(n);n.p();){m=n.gE(n)
l=m.b
k=$.d?C.y:C.w
m=m.a
m=m>=3&&m<=7?C.c4:C.cJ
o.push(new B.ah(F.mV,B.h(l,j,j,j,j,new B.E(!0,k,j,"Inter",j,j,13.5,C.p,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),m,j),j))}s.push(new L.hG(new B.a6(p,j,j,j,j,j,C.J),o))}return B.a5(j,L.R0(s,v,M.lE),C.bZ,j,j,new B.a6(j,j,x,w,j,j,C.J),j,j,j,j,j,j,j,j)}}
A.xv.prototype={
W(){return new A.ai4()}}
A.ai4.prototype={
ap(){this.aB()
$.aq.rx$.push(new A.bmc(this))},
I(d){var x,w,v=y.p,u=B.a([],v)
for(x=0;x<3;++x){w=F.aSo[x]
u.push(new A.ahC(w,new A.bma(this,d,w),null))}return B.S(B.a([F.UM,T.t0(4,u,!0)],v),C.H,null,C.r,C.z)},
aCb(d,e){var x=null,w=new B.cu(x,y.J)
B.c0(d,new A.TQ(e,w),B.a([B.a0(x,!1,x,x,x,x,x,"Cancel",new A.bm8(d),C.N,C.aq),B.a0(x,!1,x,x,x,F.Uy,x,"Preview & download",new A.bm9(this,w,d,e),C.N,C.ah)],y.p),e.c,C.aI,y.z)},
aFD(d,e,f,g,h,i,j){var x=this,w=f===G.d8?g:null
switch(e.a){case 0:if(h)A.chi(d,x.gO(),f,w,i)
else A.chh(d,x.gO(),f,w,i)
break
case 1:if(h)I.JM(d,x.gO(),f,j,w)
else I.JL(d,x.gO(),f,j,w)
break
case 2:if(h)A.bDe(d,x.gO(),f,j,w)
else A.bDb(d,x.gO(),f,j,w)
break}}}
A.J4.prototype={
P(){return"_ReportType."+this.b},
gaQA(){switch(this.a){case 0:var x=C.a6
break
case 1:x=C.aK
break
case 2:x=C.cp
break
default:x=null}return x},
gaLf(){switch(this.a){case 0:var x=$.d?C.bj:C.bp
break
case 1:x=$.d?P.c_:P.c2
break
case 2:x=$.d?C.cT:C.d3
break
default:x=null}return x}}
A.ahC.prototype={
I(d){var x=null,w=this.c,v=w.gaLf(),u=B.at(10)
u=B.a5(C.ag,B.bU(w.e,w.gaQA(),22),C.A,x,x,new B.a6(v,x,x,u,x,x,C.J),x,46,x,x,x,x,x,46)
v=B.h(w.c,x,x,x,x,B.p(x,x,x,-0.1,16,C.R),x,x)
w=B.h(w.d,x,x,x,x,B.p($.d?C.Q:C.P,x,x,x,13,C.p).aNA(13.5,1.5),x,x)
return R.lF(B.S(B.a([u,C.bi,v,C.b7,w,C.i8,C.bi,B.a0(x,!1,x,x,x,B.bU("bars",$.d?C.y:C.w,16),x,"Generate",this.d,C.N,C.at)],y.p),C.H,x,C.r,C.z),!0)}}
A.TQ.prototype={
W(){return new A.TR(G.ju,C.cU)}}
A.TR.prototype={
b_v(){var x,w=this
if(w.w===G.d8&&w.x==null)return"Pick a start and end date first"
x=w.a.d
if(x!==F.xk&&w.z==null)return x===F.qz?"No cashier in this store yet":"No store manager in this store yet"
return null},
I(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l={},k=n.gO(),j=k.T($.Ds(),y.U),i=y.N,h=k.T($.oS(),i),g=k.T($.cB(),y.B)
l.a=null
if(h!=="All Stores")for(k=J.ab(g);k.p();){x=k.gE(k)
if(x.gb4(x)+" \u2014 "+x.geA(x)===h||x.gb4(x)===h||x.gaf(x)===h){l.a=x
break}}k=l.a
n.Q=k==null?m:k.gaf(k)
if(l.a==null)w=j
else{k=J.bj(j,new A.b61(l))
w=B.N(k,k.$ti.i("A.E"))}k=n.a.d
v=k===F.xk
u=k===F.qz?C.dp:C.c6
if(v)k=C.cU
else{k=J.bj(w,new A.b62(u))
x=k.$ti.i("dv<1,c>")
x=B.dF(new B.dv(k,new A.b63(),x),x.i("A.E"))
k=B.N(x,B.w(x).c)
C.e.fK(k)}n.as=k
x=!v
if(x){t=n.z
k=t==null||!C.e.q(k,t)}else k=!1
if(k){k=n.as
n.z=k.length===0?m:C.e.gM(k)}k=B.a(["All Stores"],y.s)
C.e.A(k,J.bc(g,new A.b67(),i))
s=C.e.q(k,h)?h:"All Stores"
t=n.x
r=t==null?"Pick dates":L.ee(C.e.gM(t.a.jn().split("T")))+" \u2013 "+L.ee(C.e.gM(n.x.b.jn().split("T")))
t=n.a.d
q=t===F.qz?"Cashier":"Store manager"
t=B.h(t.d,m,m,m,m,B.p($.d?C.Q:C.P,m,m,m,13,C.p).aW(13),m,m)
p=y.p
k=B.a([t,C.e6,new B.ah(C.f6,B.h("Store",m,m,m,m,B.p($.d?C.Q:C.P,m,m,m,12,C.an),m,m),m),B.vL(!0,!0,!0,!1,k,new A.b68(),m,new A.b69(n,g),C.cz,m,m,s,i)],p)
if(x){x=B.a([C.bi,new B.ah(C.f6,B.h(q,m,m,m,m,B.p($.d?C.Q:C.P,m,m,m,12,C.an),m,m),m)],p)
t=n.as
if(t.length===0)x.push(B.h("No "+q.toLowerCase()+" accounts in this store yet",m,m,m,m,B.p($.d?C.Q:C.P,m,m,m,13,C.p).aW(13),m,m))
else{o=n.z
o.toString
x.push(B.vL(!0,!0,!0,!1,t,new A.b6a(),m,new A.b6b(n),C.cz,m,m,o,i))}C.e.A(k,x)}k.push(C.bi)
k.push(new B.ah(C.f6,B.h("Period",m,m,m,m,B.p($.d?C.Q:C.P,m,m,m,12,C.an),m,m),m))
i=L.ee(B.eK())
x=n.w
k.push(B.dj(C.b8,B.a([new A.rw("Today",i,x===G.ju,new A.b6c(n),m,m),new A.rw("Weekly","Last 7 days",x===G.vK,new A.b6d(n),m,m),new A.rw("Monthly","Last 30 days",x===G.vL,new A.b6e(n),m,m),new A.rw("Custom",r,x===G.d8,new A.b64(n,d),m,m)],p),C.bB,8,8))
k.push(C.bi)
k.push(new B.ah(C.f6,B.h("Format",m,m,m,m,B.p($.d?C.Q:C.P,m,m,m,12,C.an),m,m),m))
i=n.y
k.push(B.dj(C.b8,B.a([new A.rw("PDF",m,i,new A.b65(n),F.Ua,m),new A.rw("Excel",m,!i,new A.b66(n),F.Ug,m)],p),C.bB,8,8))
return B.S(k,C.H,m,C.r,C.z)}}
A.rw.prototype={
W(){return new A.ab9()}}
A.ab9.prototype={
I(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.e
m=m.f
if(l){x=$.d
w=x?C.bj:C.bp
v=w
w=x
x=v}else if(o.d){x=$.d
w=x?C.hw:C.k8
v=w
w=x
x=v}else{x=$.d
w=x?C.ao:C.D
v=w
w=x
x=v}if(l)w=C.a6
else w=w?C.Y:C.Z
w=B.bk(w,C.O,1)
u=B.at(10)
t=y.p
s=B.a([],t)
r=o.a.r
if(r!=null)C.e.A(s,B.a([r,C.aU],t))
r=o.a.c
q=B.p(n,n,1.45,n,14,C.p)
if(l)p=C.a6
else p=$.d?C.y:C.w
s.push(B.h(r,n,n,n,n,q.it(p,13.5,C.R),n,n))
r=o.a.d
if(r!=null)C.e.A(s,B.a([C.d9,B.h(r,n,n,n,n,B.p($.d?C.Q:C.P,n,n,n,13,C.p).aW(12.5),n,n)],t))
return B.bC(B.bv(n,B.a5(n,B.ae(s,C.E,C.r,C.M,0),C.A,n,F.Wt,new B.a6(x,n,w,u,n,n,C.J),n,n,n,n,C.zQ,n,n,n),C.ae,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,m,n,n,n),C.am,n,new A.b__(o),new A.b_0(o),n)}}
A.xO.prototype={}
A.aDi.prototype={
gWq(){return C.e.bu(this.d,0,new A.aDm())},
gWi(){return C.e.bu(this.d,0,new A.aDj())},
gWp(){return C.e.bu(this.d,0,new A.aDl())},
gWn(){return C.e.bu(this.d,0,new A.aDk())+this.e}}
A.UM.prototype={
I(d){var x,w,v,u,t,s=null,r=this.c,q=r.d,p=q.length
p=B.h(""+p+" stores \xb7 Network",s,s,s,s,B.p($.d?C.Q:C.P,s,s,s,13,C.p).aW(12.5),s,s)
x=$.d
w=x?C.aB:C.aH
v=B.bk(x?C.Y:C.Z,C.O,1)
u=B.at(14)
t=y.p
u=B.a5(s,B.S(B.a([B.h("SUMMARY",s,s,s,s,B.p(x?C.Q:C.P,s,s,s,12,C.an),s,s),C.bA,new B.et(B.a([new B.am("Date",r.c,!1),new B.am("Active Stores",""+q.length,!1),new B.am("Network Sales",B.J(r.gWq()),!1),new B.am("Total Bills",""+r.gWi(),!1),new B.am("Pending Stock Requests",""+r.gWp(),!1),new B.am("Low/Out-of-Stock Items",""+r.gWn(),!1)],y.o),2,s)],t),C.H,s,C.r,C.M),C.A,s,s,new B.a6(w,s,v,u,s,s,C.J),s,s,s,s,C.et,s,s,1/0)
q=q.length
return B.S(B.a([p,C.aX,u,Q.cW,B.h("STORE PERFORMANCE ("+q+")",s,s,s,s,B.p($.d?C.Q:C.P,s,s,s,12,C.an),s,s),C.bs,this.aHv(r)],t),C.H,s,C.r,C.M)},
aHv(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d
if(h.length===0){h=$.d
x=B.bk(h?C.Y:C.Z,C.O,1)
w=B.at(8)
return B.a5(C.ag,B.h("No stores in the network yet.",i,i,i,i,B.p(h?C.a_:C.a0,i,1.5,i,13.5,C.p),i,i),C.A,i,i,new B.a6(i,i,x,w,i,i,C.J),i,i,i,i,O.mR,i,i,i)}x=B.bk($.d?C.Y:C.Z,C.O,1)
w=B.at(8)
v=B.z(y.S,y.w)
for(u=0;u<6;++u)v.l(0,u,M.hq)
t=y.p
s=B.a([],t)
for(u=0;u<6;++u){r=F.aTz[u]
q=$.d?C.a_:C.a0
q=new B.E(!0,q,i,"Inter",i,i,12,C.R,i,0.3,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i).aD(C.D)
s.push(new B.ah(F.mV,B.h(r,i,i,i,i,q,u>=2?C.c4:C.cJ,i),i))}s=B.a([new L.hG(M.m9,s)],y.T)
for(r=y.s,q=y.M,u=0;u<h.length;++u){if((u&1)===0)p=$.d?C.ao:C.D
else p=$.d?C.aB:C.aH
o=B.a([],t)
for(n=h[u].a,n=n.gb4(n),m=h[u].a,m=m.gcj(m),l=h[u].a,l=l.geA(l),k=B.J(h[u].b),j=h[u],j=new B.wM(B.a([n+" \xb7 "+m,l,k,""+j.c,""+j.d,""+j.e],r),q),j=j.gfv(j),j=j.gU(j);j.p();){n=j.gE(j)
m=n.b
l=$.d?C.y:C.w
n=n.a>=2?C.c4:C.cJ
o.push(new B.ah(F.mV,B.h(m,i,C.ab,i,i,new B.E(!0,l,i,"Inter",i,i,13.5,C.p,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),n,i),i))}s.push(new L.hG(new B.a6(p,i,i,i,i,i,C.J),o))}return B.a5(i,L.R0(s,v,M.lE),C.bZ,i,i,new B.a6(i,i,x,w,i,i,C.J),i,i,i,i,i,i,i,i)}}
var z=a.updateTypes(["n(n,xO)","dz(c,c)","j<dz>(nL)","aY(aY,xO)","fE(n,n)","~(c{bold!D,color:R?,fontSize:n})"])
A.aqH.prototype={
$2(d,e){return d+e.d},
$S:91}
A.aqE.prototype={
$2(d,e){return d+e.e},
$S:91}
A.aqD.prototype={
$2(d,e){return d+e.f},
$S:91}
A.aqG.prototype={
$2(d,e){return d+e.r},
$S:91}
A.aqF.prototype={
$2(d,e){return d+e.w},
$S:91}
A.aqI.prototype={
$2(d,e){return d+e.x},
$S:91}
A.aqC.prototype={
$1(d){return d.Q==="Open"},
$S:22}
A.aqB.prototype={
$1(d){return d.Q!=="Open"},
$S:22}
A.aqz.prototype={
$1(d){return d.b>0},
$S:288}
A.aqA.prototype={
$2(d,e){return C.t.bm(e.a,d.a)},
$S:289}
A.bAQ.prototype={
$1(d){return d.y===this.a},
$S:22}
A.bAT.prototype={
$1(d){var x,w,v
try{x=B.kU(d)
w=C.t.bq(this.a.e1(x).a,864e8)
return w}catch(v){return null}},
$S:191}
A.bAU.prototype={
$1(d){var x,w,v,u,t,s=this.a
if(s==null)return!1
try{x=B.kU(d)
u=s.a
w=B.cI(B.bt(u),B.bq(u),B.dh(u),0,0,0,0)
s=s.b
v=B.cI(B.bt(s),B.bq(s),B.dh(s),0,0,0,0)
s=!x.lU(w)&&!x.nR(v)
return s}catch(t){return!1}},
$S:11}
A.bAV.prototype={
$1(d){var x,w,v=this.a
if(v===G.d8)return this.b.$1(d.as)
if(d.Q==="Open"||d.as===B.eK())return!0
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
$S:22}
A.bAR.prototype={
$1(d){return d.gaf(d)===C.e.gM(this.a).b},
$S:14}
A.bAS.prototype={
$1(d){return d.y===this.a},
$S:22}
A.bDf.prototype={
$0(){return B.ap(this.a,!0).Y()},
$S:0}
A.bDg.prototype={
$0(){return B.M(this.a,"Sent to Microsoft Print to PDF",null)},
$S:0}
A.bDh.prototype={
$0(){var x=0,w=B.v(y.H),v=this,u
var $async$$0=B.q(function(d,e){if(d===1)return B.r(e,w)
for(;;)switch(x){case 0:u=v.a
B.ap(u,!0).Y()
x=2
return B.l(A.bBO(v.b),$async$$0)
case 2:if(u.e!=null)B.M(u,"Downloaded "+v.c,null)
return B.t(null,w)}})
return B.u($async$$0,w)},
$S:3}
A.bDc.prototype={
$0(){return B.ap(this.a,!0).Y()},
$S:0}
A.bDd.prototype={
$0(){var x=this.a
B.ap(x,!0).Y()
A.cfZ(this.b)
B.M(x,"Downloaded "+this.c,null)},
$S:0}
A.bBQ.prototype={
$2(d,e){var x=null
return new D.u1(G.t8,D.r8(B.a([D.e4(d,D.fP(x,E.fC,x,x,x,x,x,x,x,E.bx,x,x,9,x,x,x,!0,x,x,x,x),x,x),D.e4(e,D.fP(x,x,x,x,x,x,x,x,x,E.bx,x,x,10,x,E.bO,x,!0,x,x,x,x),x,x)],y.n),E.kj,E.jg))},
$S:z+1}
A.bBP.prototype={
$1(d){var x,w,v,u,t,s,r=null,q="\u20b9",p="Rs ",o=this.a,n=o.c,m=o.d,l=this.b,k=o.e,j=y.n
l=B.a([D.e4(I.hE(o.a)+" Cash Ops Report",D.fP(r,r,r,r,r,r,r,r,r,E.bx,r,r,18,r,E.bO,r,!0,r,r,r,r),r,r),new D.dN(r,2,r),D.e4(n+" \xb7 "+m,G.wK,r,r),new D.dN(r,14,r),D.e4("SUMMARY",D.fP(r,E.h9,r,r,r,r,r,r,r,E.bx,r,r,10,r,E.bO,r,!0,r,r,r,r),r,r),new D.dN(r,8,r),D.r8(B.a([D.ts(D.mA(B.a([l.$2("Date",o.b),l.$2("Cashier",n),l.$2("Store",m),l.$2("Registers Opened",""+k.length),l.$2("Currently Open",""+o.gVs()),l.$2("Closed",""+o.gSq())],j),E.cN)),new D.dN(24,r,r),D.ts(D.mA(B.a([l.$2("Total Opening Float",C.m.cU(B.J(o.gWo()),q,p)),l.$2("Total Cash Sales",C.m.cU(B.J(o.gWk()),q,p)),l.$2("Total Cash Refunds",C.m.cU(B.J(o.gWj()),q,p)),l.$2("Total Expected in Drawer",C.m.cU(B.J(o.gWm()),q,p)),l.$2("Total Counted",C.m.cU(B.J(o.gWl()),q,p)),l.$2("Total Variance",C.m.cU(B.J(o.gWr()),q,p))],j),E.cN))],j),E.cN,E.jf)],j)
if(o.gkM().length!==0){n=D.e4("DENOMINATION FINAL COUNT",D.fP(r,E.fC,r,r,r,r,r,r,r,E.bx,r,r,8.5,r,E.bO,r,!0,r,r,r,r),r,r)
m=B.a([],j)
for(o=o.gkM(),x=o.length,w=0;w<o.length;o.length===x||(0,B.B)(o),++w){v=o[w]
m.push(D.e4("Rs "+v.a+" x "+v.b,E.lI,r,r))}C.e.A(l,B.a([new D.dN(r,6,r),n,new D.dN(r,4,r),I.bS7(m,4,8)],j))}l.push(new D.dN(r,14,r))
l.push(D.e4("REGISTERS ("+k.length+")",D.fP(r,E.h9,r,r,r,r,r,r,r,E.bx,r,r,10,r,E.bO,r,!0,r,r,r,r),r,r))
l.push(new D.dN(r,6,r))
if(k.length===0)l.push(D.e4("No registers in this period.",G.wJ,r,r))
else{o=B.a([],y.t)
for(n=k.length,w=0;w<k.length;k.length===n||(0,B.B)(k),++w){u=k[w]
m=B.J(u.d)
m=B.mq(m,q,p,0)
j=B.J(u.e)
j=B.mq(j,q,p,0)
x=B.J(u.r)
x=B.mq(x,q,p,0)
t=B.J(u.w)
t=B.mq(t,q,p,0)
s=B.J(u.x)
o.push([u.a,u.c,u.y,m,j,x,t,B.mq(s,q,p,0),u.Q])}n=D.fP(r,E.pm,r,r,r,r,r,r,r,E.bx,r,r,8,r,E.bO,r,!0,r,r,r,r)
l.push(D.aOw(I.bJ1(G.vB,0.5),r,F.a42,F.bb9,r,o,G.r5,n,F.aU9))}return l},
$S:z+2}
A.bBM.prototype={
$1(d){var x
if(C.m.q(d,",")||C.m.q(d,'"'))x='"'+B.bA(d,'"','""')+'"'
else x=d
return x},
$S:7}
A.bBN.prototype={
$2(d,e){var x=this.a,w=this.b
w=B.o(w.$1(d))+","+B.o(w.$1(e))+"\n"
x.a+=w
return null},
$S:72}
A.bBL.prototype={
$1(d){return"\u20b9"+d.a+"\xd7"+d.b},
$S:303}
A.bmc.prototype={
$1(d){return this.agU(d)},
agU(d){var x=0,w=B.v(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=B.q(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=s.a
l=m.gO()
k=l.m(0,$.af(),y.q)
j=k==null?null:k.y
i=j==null?"":j
if(J.W(i)===0){x=1
break}u=4
o=$.cB()
x=7
return B.l(l.m(0,o.gJ(),y.R).bc(i),$async$$1)
case 7:if(m.c==null){x=1
break}r=J.bc(l.m(0,o,y.B),new A.bmb(),y.N).aG(0)
o=$.jt()
x=8
return B.l(l.m(0,o.gJ(),y.Z).ej(i,r),$async$$1)
case 8:if(m.c==null){x=1
break}q=l.m(0,o,y.D)
x=9
return B.l(B.eJ(B.a([l.m(0,$.h9().gJ(),y.A).h6(i,r,q),l.m(0,$.is().gJ(),y.h).h6(i,r,q),l.m(0,$.lC().gJ(),y.X).ej(i,r),l.m(0,$.K_().gJ(),y.r).ej(i,r),l.m(0,$.lD().gJ(),y.V).bc(i),l.m(0,$.ez().gJ(),y.K).cN(i)],y.O),y.H),$async$$1)
case 9:u=2
x=6
break
case 4:u=3
h=t.pop()
l=B.T(h)
if(l instanceof B.aC){p=l
m=m.c
if(m==null){x=1
break}B.M(m,p.a,null)}else throw h
x=6
break
case 3:x=2
break
case 6:case 1:return B.t(v,w)
case 2:return B.r(t.at(-1),w)}})
return B.u($async$$1,w)},
$S:28}
A.bmb.prototype={
$1(d){return d.gaf(d)},
$S:15}
A.bma.prototype={
$0(){return this.a.aCb(this.b,this.c)},
$S:0}
A.bm8.prototype={
$0(){return B.ap(this.a,!0).Y()},
$S:0}
A.bm9.prototype={
$0(){var x,w,v=this,u=v.b.ga3()
if(u==null)return
x=u.b_v()
if(x!=null){B.M(v.c,x,null)
return}w=v.c
B.ap(w,!0).Y()
v.a.aFD(w,v.d,u.w,u.x,u.y,u.Q,u.z)},
$S:0}
A.b61.prototype={
$1(d){var x=d.d,w=this.a,v=w.a,u=!0
if(!C.m.q(x,v.gb4(v))){v=w.a
if(!C.m.q(x,v.gaf(v))){w=w.a
w=C.m.q(x,w.geA(w))
x=w}else x=u}else x=u
return x},
$S:135}
A.b62.prototype={
$1(d){return d.b===this.a},
$S:135}
A.b63.prototype={
$1(d){return d.a},
$S:340}
A.b67.prototype={
$1(d){return d.gb4(d)+" \u2014 "+d.geA(d)},
$S:15}
A.b68.prototype={
$1(d){return d==="All Stores"?"All stores":d},
$S:7}
A.b69.prototype={
$1(d){var x,w,v=this.a.gO()
v.m(0,$.oS().gJ(),y.u).fY(0,d)
if(d!=="All Stores"){x=this.b
w=J.mw(x,new A.b6_(d),new A.b60(x))
v.m(0,$.iH().gJ(),y.v).fY(0,w)}},
$S:1}
A.b6_.prototype={
$1(d){return d.gb4(d)+" \u2014 "+d.geA(d)===this.a},
$S:14}
A.b60.prototype={
$0(){return J.hJ(this.a)},
$S:52}
A.b6a.prototype={
$1(d){return d},
$S:7}
A.b6b.prototype={
$1(d){var x=this.a
return x.D(new A.b5Z(x,d))},
$S:1}
A.b5Z.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.b6c.prototype={
$0(){var x=this.a
return x.D(new A.b5Y(x))},
$S:0}
A.b5Y.prototype={
$0(){return this.a.w=G.ju},
$S:0}
A.b6d.prototype={
$0(){var x=this.a
return x.D(new A.b5X(x))},
$S:0}
A.b5X.prototype={
$0(){return this.a.w=G.vK},
$S:0}
A.b6e.prototype={
$0(){var x=this.a
return x.D(new A.b5W(x))},
$S:0}
A.b5W.prototype={
$0(){return this.a.w=G.vL},
$S:0}
A.b64.prototype={
$0(){var x=0,w=B.v(y.H),v,u=this,t,s
var $async$$0=B.q(function(d,e){if(d===1)return B.r(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return B.l(L.bLk(u.b,null,null,t.x,null),$async$$0)
case 3:s=e
if(s==null||t.c==null){x=1
break}t.D(new A.b5V(t,s))
case 1:return B.t(v,w)}})
return B.u($async$$0,w)},
$S:3}
A.b5V.prototype={
$0(){var x=this.a
x.x=this.b
x.w=G.d8},
$S:0}
A.b65.prototype={
$0(){var x=this.a
return x.D(new A.b5U(x))},
$S:0}
A.b5U.prototype={
$0(){return this.a.y=!0},
$S:0}
A.b66.prototype={
$0(){var x=this.a
return x.D(new A.b5T(x))},
$S:0}
A.b5T.prototype={
$0(){return this.a.y=!1},
$S:0}
A.b__.prototype={
$1(d){var x=this.a
return x.D(new A.aZZ(x))},
$S:19}
A.aZZ.prototype={
$0(){return this.a.d=!0},
$S:0}
A.b_0.prototype={
$1(d){var x=this.a
return x.D(new A.aZY(x))},
$S:18}
A.aZY.prototype={
$0(){return this.a.d=!1},
$S:0}
A.aDm.prototype={
$2(d,e){return d+e.b},
$S:z+3}
A.aDj.prototype={
$2(d,e){return d+e.c},
$S:z+0}
A.aDl.prototype={
$2(d,e){return d+e.d},
$S:z+0}
A.aDk.prototype={
$2(d,e){return d+e.e},
$S:z+0}
A.bBe.prototype={
$1(d){return d.gaf(d)===this.a},
$S:14}
A.bBl.prototype={
$1(d){var x,w,v
try{x=B.kU(d)
w=C.t.bq(this.a.e1(x).a,864e8)
return w}catch(v){return null}},
$S:191}
A.bBm.prototype={
$1(d){var x,w,v,u,t,s=this.a
if(s==null)return!1
try{x=B.kU(d)
u=s.a
w=B.cI(B.bt(u),B.bq(u),B.dh(u),0,0,0,0)
s=s.b
v=B.cI(B.bt(s),B.bq(s),B.dh(s),0,0,0,0)
s=!x.lU(w)&&!x.nR(v)
return s}catch(t){return!1}},
$S:11}
A.bBn.prototype={
$1(d){var x,w,v
if(d.gaI(d).toLowerCase()==="voided")return!1
x=this.a
if(x===G.d8)return this.b.$1(C.e.gM(d.gdW(d).split(" ")))
if(C.m.q(d.gdW(d),"now")||C.m.bb(d.gdW(d),B.eK()))return!0
w=this.c.$1(C.e.gM(d.gdW(d).split(" ")))
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
$S:35}
A.bBd.prototype={
$2(d,e){return d===e.gaf(e)||d===e.gb4(e)},
$S:1032}
A.bBf.prototype={
$1(d){return this.a.$2(d.giP(d),this.b)&&this.c.$1(d)},
$S:35}
A.bBg.prototype={
$2(d,e){return d+e.gh8()},
$S:49}
A.bBh.prototype={
$1(d){return this.a.$2(d.giP(d),this.b)&&this.c.$1(d)},
$S:35}
A.bBi.prototype={
$1(d){return this.a.$2(d.c,this.b)&&d.y==="Pending Approval"},
$S:98}
A.bBj.prototype={
$1(d){return d.x.cX(0,new A.bBc(this.a,this.b))&&d.gaI(0)!=="In Stock"},
$S:75}
A.bBc.prototype={
$1(d){return this.a.$2(d,this.b)},
$S:11}
A.bBk.prototype={
$1(d){var x=d.x
return x.ga1(x)&&d.gaI(0)!=="In Stock"},
$S:75}
A.bDx.prototype={
$0(){return B.ap(this.a,!0).Y()},
$S:0}
A.bDy.prototype={
$0(){var x=0,w=B.v(y.H),v=this,u
var $async$$0=B.q(function(d,e){if(d===1)return B.r(e,w)
for(;;)switch(x){case 0:u=v.a
B.ap(u,!0).Y()
x=2
return B.l(A.bv8(v.b),$async$$0)
case 2:if(u.e!=null)B.M(u,"Downloaded "+v.c,null)
return B.t(null,w)}})
return B.u($async$$0,w)},
$S:3}
A.bDv.prototype={
$0(){return B.ap(this.a,!0).Y()},
$S:0}
A.bDw.prototype={
$0(){var x=this.a
B.ap(x,!0).Y()
A.ccg(this.b)
B.M(x,"Downloaded "+this.c,null)},
$S:0}
A.bva.prototype={
$2(d,e){var x=null
return new D.u1(G.t8,D.r8(B.a([D.e4(d,D.fP(x,E.fC,x,x,x,x,x,x,x,E.bx,x,x,9,x,x,x,!0,x,x,x,x),x,x),D.e4(e,D.fP(x,x,x,x,x,x,x,x,x,E.bx,x,x,10,x,E.bO,x,!0,x,x,x,x),x,x)],y.n),E.kj,E.jg))},
$S:z+1}
A.bv9.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.a,o=I.hE(p.b),n=p.a
n=n==null?"":" \xb7 "+n
x=p.d
w=this.b
v=y.n
v=B.a([D.e4(o+" Network Report"+n,D.fP(q,q,q,q,q,q,q,q,q,E.bx,q,q,18,q,E.bO,q,!0,q,q,q,q),q,q),new D.dN(q,2,q),D.e4(""+x.length+" stores - Network",G.wK,q,q),new D.dN(q,14,q),D.e4("SUMMARY",D.fP(q,E.h9,q,q,q,q,q,q,q,E.bx,q,q,10,q,E.bO,q,!0,q,q,q,q),q,q),new D.dN(q,8,q),D.r8(B.a([D.ts(D.mA(B.a([w.$2("Date",p.c),w.$2("Active Stores",""+x.length),w.$2("Total Bills",""+p.gWi())],v),E.cN)),new D.dN(24,q,q),D.ts(D.mA(B.a([w.$2("Network Sales",C.m.cU(B.J(p.gWq()),"\u20b9","Rs ")),w.$2("Pending Stock Requests",""+p.gWp()),w.$2("Low/Out-of-Stock Items",""+p.gWn())],v),E.cN))],v),E.cN,E.jf),new D.dN(q,14,q),D.e4("STORE PERFORMANCE ("+x.length+")",D.fP(q,E.h9,q,q,q,q,q,q,q,E.bx,q,q,10,q,E.bO,q,!0,q,q,q,q),q,q),new D.dN(q,6,q)],v)
if(x.length===0)v.push(D.e4("No stores in the network yet.",G.wJ,q,q))
else{p=B.a([],y.t)
for(o=x.length,u=0;u<x.length;x.length===o||(0,B.B)(x),++u){t=x[u]
n=t.a
w=n.gb4(n)
s=n.gcj(n)
n=n.geA(n)
r=B.J(t.b)
p.push([w+" - "+s,n,B.mq(r,"\u20b9","Rs ",0),""+t.c,""+t.d,""+t.e])}o=D.fP(q,E.pm,q,q,q,q,q,q,q,E.bx,q,q,8.5,q,E.bO,q,!0,q,q,q,q)
v.push(D.aOw(I.bJ1(G.vB,0.5),q,G.A1,G.Sw,q,p,G.r5,o,F.aIQ))}return v},
$S:z+2}
A.bv5.prototype={
$2(d,e){return this.a.a9W(new H.iM(e,d))},
$S:z+4}
A.bv7.prototype={
$4$bold$color$fontSize(d,e,f,g){var x,w,v=null,u=this.a,t=u.a
this.b.adT(new H.iM(t,0),new H.iM(t,5))
x=this.c.$2(0,u.a)
t=x.c
w=x.f
t.oa(new H.iM(x.e,w),new H.fO(new H.hU(d,v,v)))
w=H.p5(K.e_,e,v,v,!1,!1,f==null?K.cA:f,v,v,g,K.ev,!1,v,K.e7,v,0,v,v,K.cR,K.fj)
t.a.a=!0
x.a=w;++u.a},
$3$bold$fontSize(d,e,f){return this.$4$bold$color$fontSize(d,e,null,f)},
$3$bold$color(d,e,f){return this.$4$bold$color$fontSize(d,e,f,11)},
$S:z+5}
A.bv6.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=v.$2(0,u.a),s=t.c,r=t.f
s.oa(new H.iM(t.e,r),new H.fO(new H.hU(d,w,w)))
r=H.p5(K.e_,!0,w,w,!1,!1,K.cA,w,w,w,K.ev,!1,w,K.e7,w,0,w,w,K.cR,K.fj)
s.a.a=!0
t.a=r
x=v.$2(1,u.a)
v=x.c
r=x.f
v.oa(new H.iM(x.e,r),new H.fO(new H.hU(e,w,w)));++u.a},
$S:72}
A.bv4.prototype={
$0(){return this.a.a++},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.K,[A.a_B,A.xO,A.aDi])
x(B.dB,[A.aqH,A.aqE,A.aqD,A.aqG,A.aqF,A.aqI,A.aqA,A.bBQ,A.bBN,A.aDm,A.aDj,A.aDl,A.aDk,A.bBd,A.bBg,A.bva,A.bv5,A.bv6])
x(B.cm,[A.aqC,A.aqB,A.aqz,A.bAQ,A.bAT,A.bAU,A.bAV,A.bAR,A.bAS,A.bBP,A.bBM,A.bBL,A.bmc,A.bmb,A.b61,A.b62,A.b63,A.b67,A.b68,A.b69,A.b6_,A.b6a,A.b6b,A.b__,A.b_0,A.bBe,A.bBl,A.bBm,A.bBn,A.bBf,A.bBh,A.bBi,A.bBj,A.bBc,A.bBk,A.bv9,A.bv7])
x(B.d2,[A.bDf,A.bDg,A.bDh,A.bDc,A.bDd,A.bma,A.bm8,A.bm9,A.b60,A.b5Z,A.b6c,A.b5Y,A.b6d,A.b5X,A.b6e,A.b5W,A.b64,A.b5V,A.b65,A.b5U,A.b66,A.b5T,A.aZZ,A.aZY,A.bDx,A.bDy,A.bDv,A.bDw,A.bv4])
x(B.ax,[A.SR,A.ahC,A.UM])
x(B.eh,[A.xv,A.TQ])
x(B.e9,[A.ai4,A.TR])
w(A.J4,B.nq)
w(A.rw,B.P)
w(A.ab9,B.ad)})()
B.cy(b.typeUniverse,JSON.parse('{"SR":{"ax":[],"e":[]},"TQ":{"P":[],"e":[]},"TR":{"ad":["TQ"]},"rw":{"P":[],"e":[]},"xv":{"P":[],"e":[]},"ai4":{"ad":["xv"]},"ahC":{"ax":[],"e":[]},"ab9":{"ad":["rw"]},"UM":{"ax":[],"e":[]}}'))
var y=(function rtii(){var x=B.G
return{_:x("a_B"),Z:x("jW"),O:x("m<ar<~>>"),o:x("m<am>"),t:x("m<j<@>>"),x:x("m<br>"),Y:x("m<xO>"),s:x("m<c>"),T:x("m<hG>"),p:x("m<e>"),n:x("m<dz>"),b:x("m<@>"),a:x("m<n>"),J:x("cu<TR>"),M:x("wM<c>"),U:x("j<ci>"),d:x("j<d5>"),D:x("j<d6>"),c:x("j<bu>"),y:x("j<d9>"),B:x("j<br>"),j:x("j<cb>"),W:x("aI<n,n>"),A:x("ld"),r:x("ol"),X:x("nb"),h:x("m7"),v:x("iX<br>"),u:x("iX<c>"),V:x("pN"),C:x("br"),R:x("fr"),N:x("c"),w:x("pS"),K:x("lp"),z:x("@"),S:x("n"),q:x("ci?"),H:x("~")}})();(function constants(){var x=a.makeConstList
F.Ua=new B.cC("file",16,C.aJ,null)
F.Ug=new B.cC("grid",16,C.aK,null)
F.Uy=new B.cC("download",16,C.D,null)
F.UM=new S.eg("Reports","Network, cashier and store manager reports. Each has its own store, period and format filters, with PDF or Excel export.",C.bb,null)
F.Wt=new B.aw(0,1/0,38,1/0)
F.mV=new B.a7(10,9,10,9)
F.a42=new D.mI(5,4,5,4)
F.aIP=x(["Store","City","Sales","Bills","Pending Requests","Low Stock"],y.s)
F.aIQ=x(["Store","City","Sales","Bills","Pending Requests","Low Stock"],y.b)
F.xk=new A.J4("Network Report","Sales, bills, pending stock requests and low stock for every store or one store.","store",0,"network")
F.qz=new A.J4("Cashier Report","Bills, returns and exchanges for one cashier, with shift timings and tender totals.","users",1,"cashier")
F.bfV=new A.J4("Store Manager Report","Cash opening and closing summary for one store manager, with float and variance.","register",2,"manager")
F.aSo=x([F.xk,F.qz,F.bfV],B.G("m<J4>"))
F.aTz=x(["STORE","CITY","SALES","BILLS","PENDING REQUESTS","LOW STOCK"],y.s)
F.aU9=x(["Register","Counter","Opened By","Opening","Cash Sales","Expected","Counted","Variance","Status"],y.b)
F.aWd=x(["REGISTER","COUNTER","OPENED BY","OPENING","CASH SALES","EXPECTED","COUNTED","VARIANCE","STATUS"],y.s)
F.bb9=new D.or(!0,null,null,null,null,null,E.bx,8,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cpZ","c_H",()=>I.wd("FF182234"))
x($,"cpU","c_E",()=>I.wd("FF1E3A8A"))
x($,"cpS","c_D",()=>I.wd("FFF3F5FA"))
x($,"cpW","c_F",()=>I.wd("FFE6E9F2"))})()};
(a=>{a["3oVasF4Z65Zg4EzRW3m5IQIEQGU="]=a.current})($__dart_deferred_initializers__);