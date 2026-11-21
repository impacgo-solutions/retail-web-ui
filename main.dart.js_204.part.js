((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,R,L,M,A={
anp(a1,a2,a3,a4){var x=0,w=B.v(y._),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$anp=B.q(function(a5,a6){if(a5===1)return B.r(a6,w)
for(;;)switch(x){case 0:d=a1.m(0,$.ag(),y.q)
a0=a3==null
if(a0){u=d==null?null:d.a
t=u==null?"Cashier":u}else t=a3
s=a1.m(0,$.h9(),y.d)
r=a1.m(0,$.mv(),y.W)
u=J.bY(s)
q=u.cA(s,new A.bBb(t))
p=B.N(q,q.$ti.i("A.E"))
q=B.aj(p).i("ay<1>")
o=B.N(new B.ay(p,new A.bBg(a2,new A.bBf(a4),new A.bBe(B.kU(B.eK()))),q),q.i("A.E"))
switch(a2.a){case 0:q=L.dT(B.eK())
break
case 1:q="Last 7 days"
break
case 2:q="Last 30 days"
break
case 3:q=a4==null?"Custom range":L.dT(C.e.gM(a4.a.jn().split("T")))+" \u2013 "+L.dT(C.e.gM(a4.b.jn().split("T")))
break
default:q=null}if(o.length!==0){n=a1.m(0,$.cB(),y.B)
m=B.dm(J.bj(n,new A.bBc(o)))
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
if(!a0){a0=B.dm(u.cA(s,new A.bBd(t)))
g=a0==null?null:a0.ax}else g=m?null:d.Q
x=h.length!==0&&g!=null?5:6
break
case 5:if(o.length!==0)f=C.e.gM(o).b
else{a0=a1.m(0,$.iH(),y.C)
f=a0.gaf(a0)}x=7
return B.l(C.eY.yj(g,f,h),$async$anp)
case 7:e=a6
j=e.a
i=e.b
case 6:case 4:v=new A.a_F(a2,q,t,k,o,r,j,i)
x=1
break
case 1:return B.t(v,w)}})
return B.u($async$anp,w)},
a_F:function a_F(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aqL:function aqL(){},
aqI:function aqI(){},
aqH:function aqH(){},
aqK:function aqK(){},
aqJ:function aqJ(){},
aqM:function aqM(){},
aqG:function aqG(){},
aqF:function aqF(){},
aqD:function aqD(){},
aqE:function aqE(){},
bBb:function bBb(d){this.a=d},
bBe:function bBe(d){this.a=d},
bBf:function bBf(d){this.a=d},
bBg:function bBg(d,e,f){this.a=d
this.b=e
this.c=f},
bBc:function bBc(d){this.a=d},
bBd:function bBd(d){this.a=d},
bDA(d,e,f,g,h){var x=0,w=B.v(y.H),v,u,t,s,r
var $async$bDA=B.q(function(i,j){if(i===1)return B.r(j,w)
for(;;)switch(x){case 0:x=3
return B.l(A.anp(e,f,g,h),$async$bDA)
case 3:r=j
if(d.e==null){x=1
break}u=I.hE(f)
u=B.bA(u.toLowerCase()," ","_")
t=f===G.d8?r.b:I.hE(f)
s=B.a0(null,!1,null,null,null,null,null,"Close",new A.bDB(d),C.N,C.at)
B.c2(d,new A.SV(r,null),B.a([s,B.a0(null,!1,null,null,null,B.bW("printer",$.d?C.y:C.v,14),null,"Print",new A.bDC(d),C.N,C.at),B.a0(null,!1,null,null,null,M.fn,null,"Download PDF",new A.bDD(d,r,"cashops_report_"+u+".pdf"),C.N,C.ah)],y.p),t+" Cash Ops Report \u2014 PDF Preview",C.dc,y.z)
case 1:return B.t(v,w)}})
return B.u($async$bDA,w)},
bDx(d,e,f,g,h){var x=0,w=B.v(y.H),v,u,t,s
var $async$bDx=B.q(function(i,j){if(i===1)return B.r(j,w)
for(;;)switch(x){case 0:x=3
return B.l(A.anp(e,f,g,h),$async$bDx)
case 3:s=j
if(d.e==null){x=1
break}u=I.hE(f)
u=B.bA(u.toLowerCase()," ","_")
t=f===G.d8?s.b:I.hE(f)
B.c2(d,new A.SV(s,null),B.a([B.a0(null,!1,null,null,null,null,null,"Close",new A.bDy(d),C.N,C.at),B.a0(null,!1,null,null,null,M.fn,null,"Download .xlsx",new A.bDz(d,s,"cashops_report_"+u+".csv"),C.N,C.hl)],y.p),t+" Cash Ops Report \u2014 Excel Preview",C.dc,y.z)
case 1:return B.t(v,w)}})
return B.u($async$bDx,w)},
bDB:function bDB(d){this.a=d},
bDC:function bDC(d){this.a=d},
bDD:function bDD(d,e,f){this.a=d
this.b=e
this.c=f},
bDy:function bDy(d){this.a=d},
bDz:function bDz(d,e,f){this.a=d
this.b=e
this.c=f},
SV:function SV(d,e){this.c=d
this.a=e},
bC9(d){var x=0,w=B.v(y.H),v,u,t
var $async$bC9=B.q(function(e,f){if(e===1)return B.r(f,w)
for(;;)switch(x){case 0:t=D.atg()
t.GE(D.aCU(new A.bCa(d,new A.bCb()),null,E.po))
x=2
return B.l(t.iI(0),$async$bC9)
case 2:v=f
u=I.hE(d.a)
N.Dl("cashops_report_"+B.bA(u.toLowerCase()," ","_")+".pdf",v,"application/pdf")
return B.t(null,w)}})
return B.u($async$bC9,w)},
cgo(d){var x,w,v,u,t,s,r=new A.bC7(),q=new B.dH(""),p=d.a,o=I.hE(p)+" Cash Ops Report\n"
q.a=o
x=d.c
w=d.d
o+=x+","+w+"\n"
q.a=o
o+="\n"
q.a=o
q.a=o+"SUMMARY\n"
v=new A.bC8(q,r)
v.$2("Date",d.b)
v.$2("Cashier",x)
v.$2("Store",w)
w=d.e
v.$2("Registers Opened",""+w.length)
v.$2("Currently Open",""+d.gVw())
v.$2("Closed",""+d.gSu())
v.$2("Total Opening Float",B.J(d.gWs()))
v.$2("Total Cash Sales",B.J(d.gWo()))
v.$2("Total Cash Refunds",B.J(d.gWn()))
v.$2("Total Expected in Drawer",B.J(d.gWq()))
v.$2("Total Counted",B.J(d.gWp()))
v.$2("Total Variance",B.J(d.gWv()))
if(d.gkM().length!==0){o=d.gkM()
v.$2("Denomination Final Count",new B.an(o,new A.bC6(),B.aj(o).i("an<1,c>")).aU(0," "))}o=q.a+="\n"
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
N.Dl("cashops_report_"+B.bA(p.toLowerCase()," ","_")+".csv",s,"text/csv")},
bCb:function bCb(){},
bCa:function bCa(d,e){this.a=d
this.b=e},
bC7:function bC7(){},
bC8:function bC8(d,e){this.a=d
this.b=e},
bC6:function bC6(){},
c7l(d){return new A.xv(null)},
xv:function xv(d){this.a=d},
ai8:function ai8(){this.d=$
this.c=this.a=null},
bmy:function bmy(d){this.a=d},
bmx:function bmx(){},
bmw:function bmw(d,e,f){this.a=d
this.b=e
this.c=f},
bmu:function bmu(d){this.a=d},
bmv:function bmv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
J8:function J8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
ahG:function ahG(d,e,f){this.c=d
this.d=e
this.a=f},
TV:function TV(d,e){this.d=d
this.a=e},
TW:function TW(d,e){var _=this
_.w=d
_.x=null
_.y=!0
_.Q=_.z=null
_.as=e
_.d=$
_.c=_.a=null},
b6n:function b6n(d){this.a=d},
b6o:function b6o(d){this.a=d},
b6p:function b6p(){},
b6t:function b6t(){},
b6u:function b6u(){},
b6v:function b6v(d,e){this.a=d
this.b=e},
b6l:function b6l(d){this.a=d},
b6m:function b6m(d){this.a=d},
b6w:function b6w(){},
b6x:function b6x(d){this.a=d},
b6k:function b6k(d,e){this.a=d
this.b=e},
b6y:function b6y(d){this.a=d},
b6j:function b6j(d){this.a=d},
b6z:function b6z(d){this.a=d},
b6i:function b6i(d){this.a=d},
b6A:function b6A(d){this.a=d},
b6h:function b6h(d){this.a=d},
b6q:function b6q(d,e){this.a=d
this.b=e},
b6g:function b6g(d,e){this.a=d
this.b=e},
b6r:function b6r(d){this.a=d},
b6f:function b6f(d){this.a=d},
b6s:function b6s(d){this.a=d},
b6e:function b6e(d){this.a=d},
rx:function rx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
abd:function abd(){this.d=!1
this.c=this.a=null},
b_l:function b_l(d){this.a=d},
b_k:function b_k(d){this.a=d},
b_m:function b_m(d){this.a=d},
b_j:function b_j(d){this.a=d},
bVI(d,e,f,g){var x,w,v,u,t,s=d.m(0,$.cB(),y.B),r=g==null?null:B.dm(J.bj(s,new A.bBA(g))),q=r==null,p=q?s:B.a([r],y.x),o=d.m(0,$.lC(),y.c),n=d.m(0,$.lD(),y.y),m=d.m(0,$.ez(),y.j),l=new A.bBJ(e,new A.bBI(f),new A.bBH(B.kU(B.eK()))),k=new A.bBz(),j=B.a([],y.Y)
for(x=J.ab(p),w=J.bY(o),v=J.bY(n),u=J.bY(m);x.p();){t=x.gE(x)
j.push(new A.xO(t,w.cA(o,new A.bBB(k,t,l)).bu(0,0,new A.bBC()),w.cA(o,new A.bBD(k,t,l)).gt(0),v.cA(n,new A.bBE(k,t)).gt(0),u.cA(m,new A.bBF(k,t)).gt(0)))}switch(e.a){case 0:x=L.dT(B.eK())
break
case 1:x="Last 7 days"
break
case 2:x="Last 30 days"
break
case 3:x=f==null?"Custom range":L.dT(C.e.gM(f.a.jn().split("T")))+" - "+L.dT(C.e.gM(f.b.jn().split("T")))
break
default:x=null}w=!q?0:u.cA(m,new A.bBG()).gt(0)
return new A.aDn(q?null:r.gb4(r)+" \xb7 "+r.gcj(r),e,x,j,w)},
xO:function xO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aDn:function aDn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aDr:function aDr(){},
aDo:function aDo(){},
aDq:function aDq(){},
aDp:function aDp(){},
bBA:function bBA(d){this.a=d},
bBH:function bBH(d){this.a=d},
bBI:function bBI(d){this.a=d},
bBJ:function bBJ(d,e,f){this.a=d
this.b=e
this.c=f},
bBz:function bBz(){},
bBB:function bBB(d,e,f){this.a=d
this.b=e
this.c=f},
bBC:function bBC(){},
bBD:function bBD(d,e,f){this.a=d
this.b=e
this.c=f},
bBE:function bBE(d,e){this.a=d
this.b=e},
bBF:function bBF(d,e){this.a=d
this.b=e},
bBy:function bBy(d,e){this.a=d
this.b=e},
bBG:function bBG(){},
chI(d,e,f,g,h){var x,w,v=null,u=A.bVI(e,f,g,h),t=I.hE(f)
t=B.bA(t.toLowerCase()," ","_")
x=f===G.d8?u.c:I.hE(f)
w=u.a
w=w==null?"":" \xb7 "+w
B.c2(d,new A.UR(u,v),B.a([B.a0(v,!1,v,v,v,v,v,"Close",new A.bDT(d),C.N,C.at),B.a0(v,!1,v,v,v,M.fn,v,"Download PDF",new A.bDU(d,u,"network_report_"+t+".pdf"),C.N,C.ah)],y.p),x+" Network Report"+w+" \u2014 PDF Preview",C.dc,y.z)},
chH(d,e,f,g,h){var x,w,v=null,u=A.bVI(e,f,g,h),t=I.hE(f)
t=B.bA(t.toLowerCase()," ","_")
x=f===G.d8?u.c:I.hE(f)
w=u.a
w=w==null?"":" \xb7 "+w
B.c2(d,new A.UR(u,v),B.a([B.a0(v,!1,v,v,v,v,v,"Close",new A.bDR(d),C.N,C.at),B.a0(v,!1,v,v,v,M.fn,v,"Download .xlsx",new A.bDS(d,u,"network_report_"+t+".xlsx"),C.N,C.hl)],y.p),x+" Network Report"+w+" \u2014 Excel Preview",C.dc,y.z)},
bvu(d){var x=0,w=B.v(y.H),v,u,t
var $async$bvu=B.q(function(e,f){if(e===1)return B.r(f,w)
for(;;)switch(x){case 0:t=D.atg()
t.GE(D.aCU(new A.bvv(d,new A.bvw()),null,E.po))
x=2
return B.l(t.iI(0),$async$bvu)
case 2:v=f
u=I.hE(d.b)
N.Dl("network_report_"+B.bA(u.toLowerCase()," ","_")+".pdf",v,"application/pdf")
return B.t(null,w)}})
return B.u($async$bvu,w)},
ccG(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="Network Report",g={},f=H.avl(new B.zo().bn("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")),e=f.LP()
e.toString
f.W1(e,h)
f.q1(h)
x=f.x.h(0,h)
x.lc(0,30)
x.lc(1,18)
x.lc(2,16)
x.lc(3,12)
x.lc(4,18)
x.lc(5,14)
g.a=0
w=new A.bvr(x)
v=new A.bvt(g,x,w)
u=new A.bvs(g,w)
t=new A.bvq(g)
e=d.b
s=I.hE(e)
r=d.a
r=r==null?"":" \xb7 "+r
v.$3$bold$fontSize(s+" Network Report"+r,!0,16)
r=d.d
v.$3$bold$fontSize(""+r.length+" stores \xb7 Network",!1,10)
t.$0()
s=$.c00()
v.$3$bold$color("SUMMARY",!0,s)
u.$2("Date",d.c)
u.$2("Active Stores",""+r.length)
u.$2("Network Sales",B.J(d.gWu()))
u.$2("Total Bills",""+d.gWm())
u.$2("Pending Stock Requests",""+d.gWt())
u.$2("Low/Out-of-Stock Items",""+d.gWr())
t.$0()
v.$3$bold$color("STORE PERFORMANCE ("+r.length+")",!0,s)
for(q=0;q<6;++q){p=w.$2(q,g.a)
s=F.aIR[q]
o=p.c
n=p.f
o.oa(new H.iM(p.e,n),new H.fO(new H.hU(s,i,i)))
s=H.p5($.c03(),!0,i,i,!1,!1,K.tN,i,i,i,K.ev,!1,i,K.e7,i,0,i,i,K.cS,K.fk)
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
o=s?$.c0_():K.e_
j=$.c01()
j=j.a
j=H.JE(H.vq(j)||j==="none"?j:K.cA.ghV())
j=H.p5(o,!1,new H.zq(K.m7,j),i,!1,!1,K.cA,i,i,i,K.ev,!1,i,K.e7,i,0,i,i,K.cS,K.fk)
n.a.a=!0
p.a=j}++g.a}s=f.Tz()
s.toString
e=I.hE(e)
N.Dl("network_report_"+B.bA(e.toLowerCase()," ","_")+".xlsx",new Uint8Array(B.ex(s)),"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")},
bDT:function bDT(d){this.a=d},
bDU:function bDU(d,e,f){this.a=d
this.b=e
this.c=f},
bDR:function bDR(d){this.a=d},
bDS:function bDS(d,e,f){this.a=d
this.b=e
this.c=f},
UR:function UR(d,e){this.c=d
this.a=e},
bvw:function bvw(){},
bvv:function bvv(d,e){this.a=d
this.b=e},
bvr:function bvr(d){this.a=d},
bvt:function bvt(d,e,f){this.a=d
this.b=e
this.c=f},
bvs:function bvs(d,e){this.a=d
this.b=e},
bvq:function bvq(d){this.a=d}},F,P,Q,S,I,G,D,E,T,N,O,H,K
J=c[1]
B=c[0]
C=c[2]
R=c[78]
L=c[90]
M=c[173]
A=a.updateHolder(c[25],A)
F=c[174]
P=c[103]
Q=c[95]
S=c[93]
I=c[52]
G=c[175]
D=c[58]
E=c[156]
T=c[73]
N=c[65]
O=c[143]
H=c[59]
K=c[176]
A.a_F.prototype={
gWs(){return C.e.bu(this.e,0,new A.aqL())},
gWo(){var x=this.r
return x==null?C.e.bu(this.e,0,new A.aqI()):x},
gWn(){var x=this.w
return x==null?C.e.bu(this.e,0,new A.aqH()):x},
gWq(){return C.e.bu(this.e,0,new A.aqK())},
gWp(){return C.e.bu(this.e,0,new A.aqJ())},
gWv(){return C.e.bu(this.e,0,new A.aqM())},
gVw(){var x=this.e
return new B.ay(x,new A.aqG(),B.aj(x).i("ay<1>")).gt(0)},
gSu(){var x=this.e
return new B.ay(x,new A.aqF(),B.aj(x).i("ay<1>")).gt(0)},
gkM(){var x=J.z4(this.f)
x=x.cA(x,new A.aqD()).aG(0)
C.e.dH(x,new A.aqE())
return x}}
A.SV.prototype={
I(d){var x,w,v,u,t,s,r,q,p=null,o=this.c,n=o.c,m=o.d,l=B.h(n+" \xb7 "+m,p,p,p,p,B.p($.d?C.R:C.Q,p,p,p,13,C.p).aW(12.5),p,p),k=$.d,j=k?C.aB:C.aH,i=B.bk(k?C.Y:C.Z,C.O,1),h=B.at(14),g=B.h("SUMMARY",p,p,p,p,B.p(k?C.R:C.Q,p,p,p,12,C.an),p,p),f=o.e
m=B.a([new B.al("Date",o.b,!1),new B.al("Cashier",n,!1),new B.al("Store",m,!1),new B.al("Registers Opened",""+f.length,!1),new B.al("Currently Open",""+o.gVw(),!1),new B.al("Closed",""+o.gSu(),!1),new B.al("Total Opening Float",B.J(o.gWs()),!1),new B.al("Total Cash Sales",B.J(o.gWo()),!1),new B.al("Total Cash Refunds",B.J(o.gWn()),!1),new B.al("Total Expected in Drawer",B.J(o.gWq()),!1),new B.al("Total Counted",B.J(o.gWp()),!1),new B.al("Total Variance",B.J(o.gWv()),!1)],y.o)
n=B.h("DENOMINATION FINAL COUNT",p,p,p,p,B.p($.d?C.R:C.Q,p,p,p,12,C.an),p,p)
if(o.gkM().length===0)k=B.h("No cash denominations counted yet.",p,p,p,p,B.p($.d?C.a_:C.a0,p,1.5,p,13.5,C.p),p,p)
else{k=B.a([],y.p)
for(x=o.gkM(),w=x.length,v=0;v<x.length;x.length===w||(0,B.B)(x),++v){u=x[v]
t=$.d
s=t?C.ao:C.D
r=new B.aL(t?C.Y:C.Z,1,C.O,-1)
q=new B.b8(6,6)
t=t?C.y:C.v
k.push(B.a5(p,B.h("\u20b9"+u.a+" \xd7 "+u.b,p,p,p,p,new B.E(!0,t,p,"Inter",p,p,11.8,C.P,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),C.A,p,p,new B.a7(s,p,new B.cf(r,r,r,r),new B.dl(q,q,q,q),p,p,C.J),p,p,p,p,O.tg,p,p,p))}k=B.dj(C.b8,k,C.bB,8,8)}x=y.p
h=B.a5(p,B.R(B.a([g,C.bA,new B.ep(m,2,p),C.aX,n,C.bn,k],x),C.F,p,C.r,C.M),C.A,p,p,new B.a7(j,p,i,h,p,p,C.J),p,p,p,p,C.et,p,p,1/0)
f=f.length
return B.R(B.a([l,C.aX,h,Q.cQ,B.h("REGISTERS ("+f+")",p,p,p,p,B.p($.d?C.R:C.Q,p,p,p,12,C.an),p,p),C.bn,this.aF_(o)],x),C.F,p,C.r,C.M)},
aF_(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.e
if(i.length===0){i=$.d
x=B.bk(i?C.Y:C.Z,C.O,1)
w=B.at(8)
return B.a5(C.ag,B.h("No registers in this period.",j,j,j,j,B.p(i?C.a_:C.a0,j,1.5,j,13.5,C.p),j,j),C.A,j,j,new B.a7(j,j,x,w,j,j,C.J),j,j,j,j,O.mR,j,j,j)}x=B.bk($.d?C.Y:C.Z,C.O,1)
w=B.at(8)
v=B.z(y.S,y.w)
for(u=0;u<9;++u)v.l(0,u,M.hq)
t=y.p
s=B.a([],t)
for(u=0;u<9;++u){r=F.aWh[u]
q=$.d?C.a_:C.a0
q=new B.E(!0,q,j,"Inter",j,j,12,C.P,j,0.3,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j).aD(C.D)
s.push(new B.ai(F.mV,B.h(r,j,j,j,j,q,u>=3&&u<=7?C.c4:C.cJ,j),j))}s=B.a([new L.hG(M.m9,s)],y.T)
for(r=y.s,q=y.M,u=0;u<i.length;++u){if((u&1)===0)p=$.d?C.ao:C.D
else p=$.d?C.aB:C.aH
o=B.a([],t)
for(n=i[u],n=new B.wM(B.a([n.a,n.c,n.y,B.J(n.d),B.J(i[u].e),B.J(i[u].r),B.J(i[u].w),B.J(i[u].x),i[u].Q],r),q),n=n.gfv(n),n=n.gU(n);n.p();){m=n.gE(n)
l=m.b
k=$.d?C.y:C.v
m=m.a
m=m>=3&&m<=7?C.c4:C.cJ
o.push(new B.ai(F.mV,B.h(l,j,j,j,j,new B.E(!0,k,j,"Inter",j,j,13.5,C.p,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),m,j),j))}s.push(new L.hG(new B.a7(p,j,j,j,j,j,C.J),o))}return B.a5(j,L.R4(s,v,M.lE),C.bZ,j,j,new B.a7(j,j,x,w,j,j,C.J),j,j,j,j,j,j,j,j)}}
A.xv.prototype={
W(){return new A.ai8()}}
A.ai8.prototype={
ap(){this.aA()
$.ap.rx$.push(new A.bmy(this))},
I(d){var x,w,v=y.p,u=B.a([],v)
for(x=0;x<3;++x){w=F.aSr[x]
u.push(new A.ahG(w,new A.bmw(this,d,w),null))}return B.R(B.a([F.UM,T.t1(4,u,!0)],v),C.F,null,C.r,C.z)},
aCi(d,e){var x=null,w=new B.cu(x,y.J)
B.c2(d,new A.TV(e,w),B.a([B.a0(x,!1,x,x,x,x,x,"Cancel",new A.bmu(d),C.N,C.aq),B.a0(x,!1,x,x,x,F.Uy,x,"Preview & download",new A.bmv(this,w,d,e),C.N,C.ah)],y.p),e.c,C.aI,y.z)},
aFL(d,e,f,g,h,i,j){var x=this,w=f===G.d8?g:null
switch(e.a){case 0:if(h)A.chI(d,x.gO(),f,w,i)
else A.chH(d,x.gO(),f,w,i)
break
case 1:if(h)I.JR(d,x.gO(),f,j,w)
else I.JQ(d,x.gO(),f,j,w)
break
case 2:if(h)A.bDA(d,x.gO(),f,j,w)
else A.bDx(d,x.gO(),f,j,w)
break}}}
A.J8.prototype={
P(){return"_ReportType."+this.b},
gaQI(){switch(this.a){case 0:var x=C.a6
break
case 1:x=C.aK
break
case 2:x=C.cp
break
default:x=null}return x},
gaLn(){switch(this.a){case 0:var x=$.d?C.bj:C.bq
break
case 1:x=$.d?P.c_:P.c2
break
case 2:x=$.d?C.cU:C.d3
break
default:x=null}return x}}
A.ahG.prototype={
I(d){var x=null,w=this.c,v=w.gaLn(),u=B.at(10)
u=B.a5(C.ag,B.bW(w.e,w.gaQI(),22),C.A,x,x,new B.a7(v,x,x,u,x,x,C.J),x,46,x,x,x,x,x,46)
v=B.h(w.c,x,x,x,x,B.p(x,x,x,-0.1,16,C.P),x,x)
w=B.h(w.d,x,x,x,x,B.p($.d?C.R:C.Q,x,x,x,13,C.p).aNI(13.5,1.5),x,x)
return R.lF(B.R(B.a([u,C.bi,v,C.b7,w,C.i8,C.bi,B.a0(x,!1,x,x,x,B.bW("bars",$.d?C.y:C.v,16),x,"Generate",this.d,C.N,C.at)],y.p),C.F,x,C.r,C.z),!0)}}
A.TV.prototype={
W(){return new A.TW(G.ju,C.cV)}}
A.TW.prototype={
b_E(){var x,w=this
if(w.w===G.d8&&w.x==null)return"Pick a start and end date first"
x=w.a.d
if(x!==F.xk&&w.z==null)return x===F.qz?"No cashier in this store yet":"No store manager in this store yet"
return null},
I(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l={},k=n.gO(),j=k.T($.Dv(),y.U),i=y.N,h=k.T($.oS(),i),g=k.T($.cB(),y.B)
l.a=null
if(h!=="All Stores")for(k=J.ab(g);k.p();){x=k.gE(k)
if(x.gb4(x)+" \u2014 "+x.geA(x)===h||x.gb4(x)===h||x.gaf(x)===h){l.a=x
break}}k=l.a
n.Q=k==null?m:k.gaf(k)
if(l.a==null)w=j
else{k=J.bj(j,new A.b6n(l))
w=B.N(k,k.$ti.i("A.E"))}k=n.a.d
v=k===F.xk
u=k===F.qz?C.dp:C.c6
if(v)k=C.cV
else{k=J.bj(w,new A.b6o(u))
x=k.$ti.i("dv<1,c>")
x=B.dF(new B.dv(k,new A.b6p(),x),x.i("A.E"))
k=B.N(x,B.w(x).c)
C.e.fK(k)}n.as=k
x=!v
if(x){t=n.z
k=t==null||!C.e.q(k,t)}else k=!1
if(k){k=n.as
n.z=k.length===0?m:C.e.gM(k)}k=B.a(["All Stores"],y.s)
C.e.A(k,J.bc(g,new A.b6t(),i))
s=C.e.q(k,h)?h:"All Stores"
t=n.x
r=t==null?"Pick dates":L.dT(C.e.gM(t.a.jn().split("T")))+" \u2013 "+L.dT(C.e.gM(n.x.b.jn().split("T")))
t=n.a.d
q=t===F.qz?"Cashier":"Store manager"
t=B.h(t.d,m,m,m,m,B.p($.d?C.R:C.Q,m,m,m,13,C.p).aW(13),m,m)
p=y.p
k=B.a([t,C.e6,new B.ai(C.f6,B.h("Store",m,m,m,m,B.p($.d?C.R:C.Q,m,m,m,12,C.an),m,m),m),B.vL(!0,!0,!0,!1,k,new A.b6u(),m,new A.b6v(n,g),C.cz,m,m,s,i)],p)
if(x){x=B.a([C.bi,new B.ai(C.f6,B.h(q,m,m,m,m,B.p($.d?C.R:C.Q,m,m,m,12,C.an),m,m),m)],p)
t=n.as
if(t.length===0)x.push(B.h("No "+q.toLowerCase()+" accounts in this store yet",m,m,m,m,B.p($.d?C.R:C.Q,m,m,m,13,C.p).aW(13),m,m))
else{o=n.z
o.toString
x.push(B.vL(!0,!0,!0,!1,t,new A.b6w(),m,new A.b6x(n),C.cz,m,m,o,i))}C.e.A(k,x)}k.push(C.bi)
k.push(new B.ai(C.f6,B.h("Period",m,m,m,m,B.p($.d?C.R:C.Q,m,m,m,12,C.an),m,m),m))
i=L.dT(B.eK())
x=n.w
k.push(B.dj(C.b8,B.a([new A.rx("Today",i,x===G.ju,new A.b6y(n),m,m),new A.rx("Weekly","Last 7 days",x===G.vK,new A.b6z(n),m,m),new A.rx("Monthly","Last 30 days",x===G.vL,new A.b6A(n),m,m),new A.rx("Custom",r,x===G.d8,new A.b6q(n,d),m,m)],p),C.bB,8,8))
k.push(C.bi)
k.push(new B.ai(C.f6,B.h("Format",m,m,m,m,B.p($.d?C.R:C.Q,m,m,m,12,C.an),m,m),m))
i=n.y
k.push(B.dj(C.b8,B.a([new A.rx("PDF",m,i,new A.b6r(n),F.Ua,m),new A.rx("Excel",m,!i,new A.b6s(n),F.Ug,m)],p),C.bB,8,8))
return B.R(k,C.F,m,C.r,C.z)}}
A.rx.prototype={
W(){return new A.abd()}}
A.abd.prototype={
I(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.e
m=m.f
if(l){x=$.d
w=x?C.bj:C.bq
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
else p=$.d?C.y:C.v
s.push(B.h(r,n,n,n,n,q.it(p,13.5,C.P),n,n))
r=o.a.d
if(r!=null)C.e.A(s,B.a([C.d9,B.h(r,n,n,n,n,B.p($.d?C.R:C.Q,n,n,n,13,C.p).aW(12.5),n,n)],t))
return B.bC(B.bw(n,B.a5(n,B.ae(s,C.E,C.r,C.M,0),C.A,n,F.Wt,new B.a7(x,n,w,u,n,n,C.J),n,n,n,n,C.zQ,n,n,n),C.ae,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,m,n,n,n),C.am,n,new A.b_l(o),new A.b_m(o),n)}}
A.xO.prototype={}
A.aDn.prototype={
gWu(){return C.e.bu(this.d,0,new A.aDr())},
gWm(){return C.e.bu(this.d,0,new A.aDo())},
gWt(){return C.e.bu(this.d,0,new A.aDq())},
gWr(){return C.e.bu(this.d,0,new A.aDp())+this.e}}
A.UR.prototype={
I(d){var x,w,v,u,t,s=null,r=this.c,q=r.d,p=q.length
p=B.h(""+p+" stores \xb7 Network",s,s,s,s,B.p($.d?C.R:C.Q,s,s,s,13,C.p).aW(12.5),s,s)
x=$.d
w=x?C.aB:C.aH
v=B.bk(x?C.Y:C.Z,C.O,1)
u=B.at(14)
t=y.p
u=B.a5(s,B.R(B.a([B.h("SUMMARY",s,s,s,s,B.p(x?C.R:C.Q,s,s,s,12,C.an),s,s),C.bA,new B.ep(B.a([new B.al("Date",r.c,!1),new B.al("Active Stores",""+q.length,!1),new B.al("Network Sales",B.J(r.gWu()),!1),new B.al("Total Bills",""+r.gWm(),!1),new B.al("Pending Stock Requests",""+r.gWt(),!1),new B.al("Low/Out-of-Stock Items",""+r.gWr(),!1)],y.o),2,s)],t),C.F,s,C.r,C.M),C.A,s,s,new B.a7(w,s,v,u,s,s,C.J),s,s,s,s,C.et,s,s,1/0)
q=q.length
return B.R(B.a([p,C.aX,u,Q.cQ,B.h("STORE PERFORMANCE ("+q+")",s,s,s,s,B.p($.d?C.R:C.Q,s,s,s,12,C.an),s,s),C.bn,this.aHD(r)],t),C.F,s,C.r,C.M)},
aHD(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d
if(h.length===0){h=$.d
x=B.bk(h?C.Y:C.Z,C.O,1)
w=B.at(8)
return B.a5(C.ag,B.h("No stores in the network yet.",i,i,i,i,B.p(h?C.a_:C.a0,i,1.5,i,13.5,C.p),i,i),C.A,i,i,new B.a7(i,i,x,w,i,i,C.J),i,i,i,i,O.mR,i,i,i)}x=B.bk($.d?C.Y:C.Z,C.O,1)
w=B.at(8)
v=B.z(y.S,y.w)
for(u=0;u<6;++u)v.l(0,u,M.hq)
t=y.p
s=B.a([],t)
for(u=0;u<6;++u){r=F.aTC[u]
q=$.d?C.a_:C.a0
q=new B.E(!0,q,i,"Inter",i,i,12,C.P,i,0.3,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i).aD(C.D)
s.push(new B.ai(F.mV,B.h(r,i,i,i,i,q,u>=2?C.c4:C.cJ,i),i))}s=B.a([new L.hG(M.m9,s)],y.T)
for(r=y.s,q=y.M,u=0;u<h.length;++u){if((u&1)===0)p=$.d?C.ao:C.D
else p=$.d?C.aB:C.aH
o=B.a([],t)
for(n=h[u].a,n=n.gb4(n),m=h[u].a,m=m.gcj(m),l=h[u].a,l=l.geA(l),k=B.J(h[u].b),j=h[u],j=new B.wM(B.a([n+" \xb7 "+m,l,k,""+j.c,""+j.d,""+j.e],r),q),j=j.gfv(j),j=j.gU(j);j.p();){n=j.gE(j)
m=n.b
l=$.d?C.y:C.v
n=n.a>=2?C.c4:C.cJ
o.push(new B.ai(F.mV,B.h(m,i,C.ab,i,i,new B.E(!0,l,i,"Inter",i,i,13.5,C.p,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),n,i),i))}s.push(new L.hG(new B.a7(p,i,i,i,i,i,C.J),o))}return B.a5(i,L.R4(s,v,M.lE),C.bZ,i,i,new B.a7(i,i,x,w,i,i,C.J),i,i,i,i,i,i,i,i)}}
var z=a.updateTypes(["n(n,xO)","dA(c,c)","j<dA>(nL)","aY(aY,xO)","fE(n,n)","~(c{bold!D,color:S?,fontSize:n})"])
A.aqL.prototype={
$2(d,e){return d+e.d},
$S:96}
A.aqI.prototype={
$2(d,e){return d+e.e},
$S:96}
A.aqH.prototype={
$2(d,e){return d+e.f},
$S:96}
A.aqK.prototype={
$2(d,e){return d+e.r},
$S:96}
A.aqJ.prototype={
$2(d,e){return d+e.w},
$S:96}
A.aqM.prototype={
$2(d,e){return d+e.x},
$S:96}
A.aqG.prototype={
$1(d){return d.Q==="Open"},
$S:22}
A.aqF.prototype={
$1(d){return d.Q!=="Open"},
$S:22}
A.aqD.prototype={
$1(d){return d.b>0},
$S:387}
A.aqE.prototype={
$2(d,e){return C.t.bm(e.a,d.a)},
$S:388}
A.bBb.prototype={
$1(d){return d.y===this.a},
$S:22}
A.bBe.prototype={
$1(d){var x,w,v
try{x=B.kU(d)
w=C.t.bq(this.a.e1(x).a,864e8)
return w}catch(v){return null}},
$S:216}
A.bBf.prototype={
$1(d){var x,w,v,u,t,s=this.a
if(s==null)return!1
try{x=B.kU(d)
u=s.a
w=B.cJ(B.bu(u),B.bq(u),B.dh(u),0,0,0,0)
s=s.b
v=B.cJ(B.bu(s),B.bq(s),B.dh(s),0,0,0,0)
s=!x.lU(w)&&!x.nR(v)
return s}catch(t){return!1}},
$S:12}
A.bBg.prototype={
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
A.bBc.prototype={
$1(d){return d.gaf(d)===C.e.gM(this.a).b},
$S:16}
A.bBd.prototype={
$1(d){return d.y===this.a},
$S:22}
A.bDB.prototype={
$0(){return B.aq(this.a,!0).Y()},
$S:0}
A.bDC.prototype={
$0(){return B.M(this.a,"Sent to Microsoft Print to PDF",null)},
$S:0}
A.bDD.prototype={
$0(){var x=0,w=B.v(y.H),v=this,u
var $async$$0=B.q(function(d,e){if(d===1)return B.r(e,w)
for(;;)switch(x){case 0:u=v.a
B.aq(u,!0).Y()
x=2
return B.l(A.bC9(v.b),$async$$0)
case 2:if(u.e!=null)B.M(u,"Downloaded "+v.c,null)
return B.t(null,w)}})
return B.u($async$$0,w)},
$S:3}
A.bDy.prototype={
$0(){return B.aq(this.a,!0).Y()},
$S:0}
A.bDz.prototype={
$0(){var x=this.a
B.aq(x,!0).Y()
A.cgo(this.b)
B.M(x,"Downloaded "+this.c,null)},
$S:0}
A.bCb.prototype={
$2(d,e){var x=null
return new D.u1(G.t8,D.r9(B.a([D.e7(d,D.fP(x,E.fC,x,x,x,x,x,x,x,E.by,x,x,9,x,x,x,!0,x,x,x,x),x,x),D.e7(e,D.fP(x,x,x,x,x,x,x,x,x,E.by,x,x,10,x,E.bO,x,!0,x,x,x,x),x,x)],y.n),E.kj,E.jg))},
$S:z+1}
A.bCa.prototype={
$1(d){var x,w,v,u,t,s,r=null,q="\u20b9",p="Rs ",o=this.a,n=o.c,m=o.d,l=this.b,k=o.e,j=y.n
l=B.a([D.e7(I.hE(o.a)+" Cash Ops Report",D.fP(r,r,r,r,r,r,r,r,r,E.by,r,r,18,r,E.bO,r,!0,r,r,r,r),r,r),new D.dN(r,2,r),D.e7(n+" \xb7 "+m,G.wK,r,r),new D.dN(r,14,r),D.e7("SUMMARY",D.fP(r,E.h9,r,r,r,r,r,r,r,E.by,r,r,10,r,E.bO,r,!0,r,r,r,r),r,r),new D.dN(r,8,r),D.r9(B.a([D.tt(D.mC(B.a([l.$2("Date",o.b),l.$2("Cashier",n),l.$2("Store",m),l.$2("Registers Opened",""+k.length),l.$2("Currently Open",""+o.gVw()),l.$2("Closed",""+o.gSu())],j),E.cN)),new D.dN(24,r,r),D.tt(D.mC(B.a([l.$2("Total Opening Float",C.m.cU(B.J(o.gWs()),q,p)),l.$2("Total Cash Sales",C.m.cU(B.J(o.gWo()),q,p)),l.$2("Total Cash Refunds",C.m.cU(B.J(o.gWn()),q,p)),l.$2("Total Expected in Drawer",C.m.cU(B.J(o.gWq()),q,p)),l.$2("Total Counted",C.m.cU(B.J(o.gWp()),q,p)),l.$2("Total Variance",C.m.cU(B.J(o.gWv()),q,p))],j),E.cN))],j),E.cN,E.jf)],j)
if(o.gkM().length!==0){n=D.e7("DENOMINATION FINAL COUNT",D.fP(r,E.fC,r,r,r,r,r,r,r,E.by,r,r,8.5,r,E.bO,r,!0,r,r,r,r),r,r)
m=B.a([],j)
for(o=o.gkM(),x=o.length,w=0;w<o.length;o.length===x||(0,B.B)(o),++w){v=o[w]
m.push(D.e7("Rs "+v.a+" x "+v.b,E.lI,r,r))}C.e.A(l,B.a([new D.dN(r,6,r),n,new D.dN(r,4,r),I.bSt(m,4,8)],j))}l.push(new D.dN(r,14,r))
l.push(D.e7("REGISTERS ("+k.length+")",D.fP(r,E.h9,r,r,r,r,r,r,r,E.by,r,r,10,r,E.bO,r,!0,r,r,r,r),r,r))
l.push(new D.dN(r,6,r))
if(k.length===0)l.push(D.e7("No registers in this period.",G.wJ,r,r))
else{o=B.a([],y.t)
for(n=k.length,w=0;w<k.length;k.length===n||(0,B.B)(k),++w){u=k[w]
m=B.J(u.d)
m=B.mr(m,q,p,0)
j=B.J(u.e)
j=B.mr(j,q,p,0)
x=B.J(u.r)
x=B.mr(x,q,p,0)
t=B.J(u.w)
t=B.mr(t,q,p,0)
s=B.J(u.x)
o.push([u.a,u.c,u.y,m,j,x,t,B.mr(s,q,p,0),u.Q])}n=D.fP(r,E.pm,r,r,r,r,r,r,r,E.by,r,r,8,r,E.bO,r,!0,r,r,r,r)
l.push(D.aOD(I.bJn(G.vB,0.5),r,F.a44,F.bbj,r,o,G.r5,n,F.aUc))}return l},
$S:z+2}
A.bC7.prototype={
$1(d){var x
if(C.m.q(d,",")||C.m.q(d,'"'))x='"'+B.bA(d,'"','""')+'"'
else x=d
return x},
$S:7}
A.bC8.prototype={
$2(d,e){var x=this.a,w=this.b
w=B.o(w.$1(d))+","+B.o(w.$1(e))+"\n"
x.a+=w
return null},
$S:70}
A.bC6.prototype={
$1(d){return"\u20b9"+d.a+"\xd7"+d.b},
$S:389}
A.bmy.prototype={
$1(d){return this.agZ(d)},
agZ(d){var x=0,w=B.v(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=B.q(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=s.a
l=m.gO()
k=l.m(0,$.ag(),y.q)
j=k==null?null:k.y
i=j==null?"":j
if(J.U(i)===0){x=1
break}u=4
o=$.cB()
x=7
return B.l(l.m(0,o.gJ(),y.R).bc(i),$async$$1)
case 7:if(m.c==null){x=1
break}r=J.bc(l.m(0,o,y.B),new A.bmx(),y.N).aG(0)
o=$.jt()
x=8
return B.l(l.m(0,o.gJ(),y.Z).ej(i,r),$async$$1)
case 8:if(m.c==null){x=1
break}q=l.m(0,o,y.D)
x=9
return B.l(B.eJ(B.a([l.m(0,$.h9().gJ(),y.A).h6(i,r,q),l.m(0,$.is().gJ(),y.h).h6(i,r,q),l.m(0,$.lC().gJ(),y.X).ej(i,r),l.m(0,$.K4().gJ(),y.r).ej(i,r),l.m(0,$.lD().gJ(),y.V).bc(i),l.m(0,$.ez().gJ(),y.K).cN(i)],y.O),y.H),$async$$1)
case 9:u=2
x=6
break
case 4:u=3
h=t.pop()
l=B.T(h)
if(l instanceof B.aD){p=l
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
$S:27}
A.bmx.prototype={
$1(d){return d.gaf(d)},
$S:15}
A.bmw.prototype={
$0(){return this.a.aCi(this.b,this.c)},
$S:0}
A.bmu.prototype={
$0(){return B.aq(this.a,!0).Y()},
$S:0}
A.bmv.prototype={
$0(){var x,w,v=this,u=v.b.ga3()
if(u==null)return
x=u.b_E()
if(x!=null){B.M(v.c,x,null)
return}w=v.c
B.aq(w,!0).Y()
v.a.aFL(w,v.d,u.w,u.x,u.y,u.Q,u.z)},
$S:0}
A.b6n.prototype={
$1(d){var x=d.d,w=this.a,v=w.a,u=!0
if(!C.m.q(x,v.gb4(v))){v=w.a
if(!C.m.q(x,v.gaf(v))){w=w.a
w=C.m.q(x,w.geA(w))
x=w}else x=u}else x=u
return x},
$S:148}
A.b6o.prototype={
$1(d){return d.b===this.a},
$S:148}
A.b6p.prototype={
$1(d){return d.a},
$S:392}
A.b6t.prototype={
$1(d){return d.gb4(d)+" \u2014 "+d.geA(d)},
$S:15}
A.b6u.prototype={
$1(d){return d==="All Stores"?"All stores":d},
$S:7}
A.b6v.prototype={
$1(d){var x,w,v=this.a.gO()
v.m(0,$.oS().gJ(),y.u).fY(0,d)
if(d!=="All Stores"){x=this.b
w=J.my(x,new A.b6l(d),new A.b6m(x))
v.m(0,$.iH().gJ(),y.v).fY(0,w)}},
$S:1}
A.b6l.prototype={
$1(d){return d.gb4(d)+" \u2014 "+d.geA(d)===this.a},
$S:16}
A.b6m.prototype={
$0(){return J.hJ(this.a)},
$S:50}
A.b6w.prototype={
$1(d){return d},
$S:7}
A.b6x.prototype={
$1(d){var x=this.a
return x.C(new A.b6k(x,d))},
$S:1}
A.b6k.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.b6y.prototype={
$0(){var x=this.a
return x.C(new A.b6j(x))},
$S:0}
A.b6j.prototype={
$0(){return this.a.w=G.ju},
$S:0}
A.b6z.prototype={
$0(){var x=this.a
return x.C(new A.b6i(x))},
$S:0}
A.b6i.prototype={
$0(){return this.a.w=G.vK},
$S:0}
A.b6A.prototype={
$0(){var x=this.a
return x.C(new A.b6h(x))},
$S:0}
A.b6h.prototype={
$0(){return this.a.w=G.vL},
$S:0}
A.b6q.prototype={
$0(){var x=0,w=B.v(y.H),v,u=this,t,s
var $async$$0=B.q(function(d,e){if(d===1)return B.r(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return B.l(L.bLG(u.b,null,null,t.x,null),$async$$0)
case 3:s=e
if(s==null||t.c==null){x=1
break}t.C(new A.b6g(t,s))
case 1:return B.t(v,w)}})
return B.u($async$$0,w)},
$S:3}
A.b6g.prototype={
$0(){var x=this.a
x.x=this.b
x.w=G.d8},
$S:0}
A.b6r.prototype={
$0(){var x=this.a
return x.C(new A.b6f(x))},
$S:0}
A.b6f.prototype={
$0(){return this.a.y=!0},
$S:0}
A.b6s.prototype={
$0(){var x=this.a
return x.C(new A.b6e(x))},
$S:0}
A.b6e.prototype={
$0(){return this.a.y=!1},
$S:0}
A.b_l.prototype={
$1(d){var x=this.a
return x.C(new A.b_k(x))},
$S:19}
A.b_k.prototype={
$0(){return this.a.d=!0},
$S:0}
A.b_m.prototype={
$1(d){var x=this.a
return x.C(new A.b_j(x))},
$S:18}
A.b_j.prototype={
$0(){return this.a.d=!1},
$S:0}
A.aDr.prototype={
$2(d,e){return d+e.b},
$S:z+3}
A.aDo.prototype={
$2(d,e){return d+e.c},
$S:z+0}
A.aDq.prototype={
$2(d,e){return d+e.d},
$S:z+0}
A.aDp.prototype={
$2(d,e){return d+e.e},
$S:z+0}
A.bBA.prototype={
$1(d){return d.gaf(d)===this.a},
$S:16}
A.bBH.prototype={
$1(d){var x,w,v
try{x=B.kU(d)
w=C.t.bq(this.a.e1(x).a,864e8)
return w}catch(v){return null}},
$S:216}
A.bBI.prototype={
$1(d){var x,w,v,u,t,s=this.a
if(s==null)return!1
try{x=B.kU(d)
u=s.a
w=B.cJ(B.bu(u),B.bq(u),B.dh(u),0,0,0,0)
s=s.b
v=B.cJ(B.bu(s),B.bq(s),B.dh(s),0,0,0,0)
s=!x.lU(w)&&!x.nR(v)
return s}catch(t){return!1}},
$S:12}
A.bBJ.prototype={
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
$S:36}
A.bBz.prototype={
$2(d,e){return d===e.gaf(e)||d===e.gb4(e)},
$S:1036}
A.bBB.prototype={
$1(d){return this.a.$2(d.giP(d),this.b)&&this.c.$1(d)},
$S:36}
A.bBC.prototype={
$2(d,e){return d+e.gh8()},
$S:49}
A.bBD.prototype={
$1(d){return this.a.$2(d.giP(d),this.b)&&this.c.$1(d)},
$S:36}
A.bBE.prototype={
$1(d){return this.a.$2(d.c,this.b)&&d.y==="Pending Approval"},
$S:102}
A.bBF.prototype={
$1(d){return d.x.cX(0,new A.bBy(this.a,this.b))&&d.gaI(0)!=="In Stock"},
$S:80}
A.bBy.prototype={
$1(d){return this.a.$2(d,this.b)},
$S:12}
A.bBG.prototype={
$1(d){var x=d.x
return x.ga1(x)&&d.gaI(0)!=="In Stock"},
$S:80}
A.bDT.prototype={
$0(){return B.aq(this.a,!0).Y()},
$S:0}
A.bDU.prototype={
$0(){var x=0,w=B.v(y.H),v=this,u
var $async$$0=B.q(function(d,e){if(d===1)return B.r(e,w)
for(;;)switch(x){case 0:u=v.a
B.aq(u,!0).Y()
x=2
return B.l(A.bvu(v.b),$async$$0)
case 2:if(u.e!=null)B.M(u,"Downloaded "+v.c,null)
return B.t(null,w)}})
return B.u($async$$0,w)},
$S:3}
A.bDR.prototype={
$0(){return B.aq(this.a,!0).Y()},
$S:0}
A.bDS.prototype={
$0(){var x=this.a
B.aq(x,!0).Y()
A.ccG(this.b)
B.M(x,"Downloaded "+this.c,null)},
$S:0}
A.bvw.prototype={
$2(d,e){var x=null
return new D.u1(G.t8,D.r9(B.a([D.e7(d,D.fP(x,E.fC,x,x,x,x,x,x,x,E.by,x,x,9,x,x,x,!0,x,x,x,x),x,x),D.e7(e,D.fP(x,x,x,x,x,x,x,x,x,E.by,x,x,10,x,E.bO,x,!0,x,x,x,x),x,x)],y.n),E.kj,E.jg))},
$S:z+1}
A.bvv.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.a,o=I.hE(p.b),n=p.a
n=n==null?"":" \xb7 "+n
x=p.d
w=this.b
v=y.n
v=B.a([D.e7(o+" Network Report"+n,D.fP(q,q,q,q,q,q,q,q,q,E.by,q,q,18,q,E.bO,q,!0,q,q,q,q),q,q),new D.dN(q,2,q),D.e7(""+x.length+" stores - Network",G.wK,q,q),new D.dN(q,14,q),D.e7("SUMMARY",D.fP(q,E.h9,q,q,q,q,q,q,q,E.by,q,q,10,q,E.bO,q,!0,q,q,q,q),q,q),new D.dN(q,8,q),D.r9(B.a([D.tt(D.mC(B.a([w.$2("Date",p.c),w.$2("Active Stores",""+x.length),w.$2("Total Bills",""+p.gWm())],v),E.cN)),new D.dN(24,q,q),D.tt(D.mC(B.a([w.$2("Network Sales",C.m.cU(B.J(p.gWu()),"\u20b9","Rs ")),w.$2("Pending Stock Requests",""+p.gWt()),w.$2("Low/Out-of-Stock Items",""+p.gWr())],v),E.cN))],v),E.cN,E.jf),new D.dN(q,14,q),D.e7("STORE PERFORMANCE ("+x.length+")",D.fP(q,E.h9,q,q,q,q,q,q,q,E.by,q,q,10,q,E.bO,q,!0,q,q,q,q),q,q),new D.dN(q,6,q)],v)
if(x.length===0)v.push(D.e7("No stores in the network yet.",G.wJ,q,q))
else{p=B.a([],y.t)
for(o=x.length,u=0;u<x.length;x.length===o||(0,B.B)(x),++u){t=x[u]
n=t.a
w=n.gb4(n)
s=n.gcj(n)
n=n.geA(n)
r=B.J(t.b)
p.push([w+" - "+s,n,B.mr(r,"\u20b9","Rs ",0),""+t.c,""+t.d,""+t.e])}o=D.fP(q,E.pm,q,q,q,q,q,q,q,E.by,q,q,8.5,q,E.bO,q,!0,q,q,q,q)
v.push(D.aOD(I.bJn(G.vB,0.5),q,G.A1,G.Sw,q,p,G.r5,o,F.aIS))}return v},
$S:z+2}
A.bvr.prototype={
$2(d,e){return this.a.aa0(new H.iM(e,d))},
$S:z+4}
A.bvt.prototype={
$4$bold$color$fontSize(d,e,f,g){var x,w,v=null,u=this.a,t=u.a
this.b.adY(new H.iM(t,0),new H.iM(t,5))
x=this.c.$2(0,u.a)
t=x.c
w=x.f
t.oa(new H.iM(x.e,w),new H.fO(new H.hU(d,v,v)))
w=H.p5(K.e_,e,v,v,!1,!1,f==null?K.cA:f,v,v,g,K.ev,!1,v,K.e7,v,0,v,v,K.cS,K.fk)
t.a.a=!0
x.a=w;++u.a},
$3$bold$fontSize(d,e,f){return this.$4$bold$color$fontSize(d,e,null,f)},
$3$bold$color(d,e,f){return this.$4$bold$color$fontSize(d,e,f,11)},
$S:z+5}
A.bvs.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=v.$2(0,u.a),s=t.c,r=t.f
s.oa(new H.iM(t.e,r),new H.fO(new H.hU(d,w,w)))
r=H.p5(K.e_,!0,w,w,!1,!1,K.cA,w,w,w,K.ev,!1,w,K.e7,w,0,w,w,K.cS,K.fk)
s.a.a=!0
t.a=r
x=v.$2(1,u.a)
v=x.c
r=x.f
v.oa(new H.iM(x.e,r),new H.fO(new H.hU(e,w,w)));++u.a},
$S:70}
A.bvq.prototype={
$0(){return this.a.a++},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.L,[A.a_F,A.xO,A.aDn])
x(B.dy,[A.aqL,A.aqI,A.aqH,A.aqK,A.aqJ,A.aqM,A.aqE,A.bCb,A.bC8,A.aDr,A.aDo,A.aDq,A.aDp,A.bBz,A.bBC,A.bvw,A.bvr,A.bvs])
x(B.cl,[A.aqG,A.aqF,A.aqD,A.bBb,A.bBe,A.bBf,A.bBg,A.bBc,A.bBd,A.bCa,A.bC7,A.bC6,A.bmy,A.bmx,A.b6n,A.b6o,A.b6p,A.b6t,A.b6u,A.b6v,A.b6l,A.b6w,A.b6x,A.b_l,A.b_m,A.bBA,A.bBH,A.bBI,A.bBJ,A.bBB,A.bBD,A.bBE,A.bBF,A.bBy,A.bBG,A.bvv,A.bvt])
x(B.d_,[A.bDB,A.bDC,A.bDD,A.bDy,A.bDz,A.bmw,A.bmu,A.bmv,A.b6m,A.b6k,A.b6y,A.b6j,A.b6z,A.b6i,A.b6A,A.b6h,A.b6q,A.b6g,A.b6r,A.b6f,A.b6s,A.b6e,A.b_k,A.b_j,A.bDT,A.bDU,A.bDR,A.bDS,A.bvq])
x(B.ax,[A.SV,A.ahG,A.UR])
x(B.ee,[A.xv,A.TV])
x(B.e0,[A.ai8,A.TW])
w(A.J8,B.ns)
w(A.rx,B.P)
w(A.abd,B.ad)})()
B.cy(b.typeUniverse,JSON.parse('{"SV":{"ax":[],"e":[]},"TV":{"P":[],"e":[]},"TW":{"ad":["TV"]},"rx":{"P":[],"e":[]},"xv":{"P":[],"e":[]},"ai8":{"ad":["xv"]},"ahG":{"ax":[],"e":[]},"abd":{"ad":["rx"]},"UR":{"ax":[],"e":[]}}'))
var y=(function rtii(){var x=B.G
return{_:x("a_F"),Z:x("jW"),O:x("m<ar<~>>"),o:x("m<al>"),t:x("m<j<@>>"),x:x("m<bs>"),Y:x("m<xO>"),s:x("m<c>"),T:x("m<hG>"),p:x("m<e>"),n:x("m<dA>"),b:x("m<@>"),a:x("m<n>"),J:x("cu<TW>"),M:x("wM<c>"),U:x("j<cj>"),d:x("j<d5>"),D:x("j<d6>"),c:x("j<bv>"),y:x("j<d9>"),B:x("j<bs>"),j:x("j<cc>"),W:x("aG<n,n>"),A:x("ld"),r:x("ol"),X:x("nd"),h:x("m7"),v:x("iX<bs>"),u:x("iX<c>"),V:x("pN"),C:x("bs"),R:x("fr"),N:x("c"),w:x("pS"),K:x("lp"),z:x("@"),S:x("n"),q:x("cj?"),H:x("~")}})();(function constants(){var x=a.makeConstList
F.Ua=new B.cC("file",16,C.aJ,null)
F.Ug=new B.cC("grid",16,C.aK,null)
F.Uy=new B.cC("download",16,C.D,null)
F.UM=new S.eb("Reports","Network, cashier and store manager reports. Each has its own store, period and format filters, with PDF or Excel export.",C.b9,null)
F.Wt=new B.aw(0,1/0,38,1/0)
F.mV=new B.a6(10,9,10,9)
F.a44=new D.mK(5,4,5,4)
F.aIR=x(["Store","City","Sales","Bills","Pending Requests","Low Stock"],y.s)
F.aIS=x(["Store","City","Sales","Bills","Pending Requests","Low Stock"],y.b)
F.xk=new A.J8("Network Report","Sales, bills, pending stock requests and low stock for every store or one store.","store",0,"network")
F.qz=new A.J8("Cashier Report","Bills, returns and exchanges for one cashier, with shift timings and tender totals.","users",1,"cashier")
F.bg6=new A.J8("Store Manager Report","Cash opening and closing summary for one store manager, with float and variance.","register",2,"manager")
F.aSr=x([F.xk,F.qz,F.bg6],B.G("m<J8>"))
F.aTC=x(["STORE","CITY","SALES","BILLS","PENDING REQUESTS","LOW STOCK"],y.s)
F.aUc=x(["Register","Counter","Opened By","Opening","Cash Sales","Expected","Counted","Variance","Status"],y.b)
F.aWh=x(["REGISTER","COUNTER","OPENED BY","OPENING","CASH SALES","EXPECTED","COUNTED","VARIANCE","STATUS"],y.s)
F.bbj=new D.or(!0,null,null,null,null,null,E.by,8,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cqo","c03",()=>I.wd("FF182234"))
x($,"cqj","c00",()=>I.wd("FF1E3A8A"))
x($,"cqh","c0_",()=>I.wd("FFF3F5FA"))
x($,"cql","c01",()=>I.wd("FFE6E9F2"))})()};
(a=>{a["updzhuB8znMbQP7oGCp7BCT3it8="]=a.current})($__dart_deferred_initializers__);