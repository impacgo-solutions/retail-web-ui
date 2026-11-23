((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,R,L,M,A={
anA(a1,a2,a3,a4){var x=0,w=B.v(y._),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$anA=B.q(function(a5,a6){if(a5===1)return B.r(a6,w)
for(;;)switch(x){case 0:d=a1.m(0,$.ai(),y.q)
a0=a3==null
if(a0){u=d==null?null:d.a
t=u==null?"Cashier":u}else t=a3
s=a1.m(0,$.h9(),y.d)
r=a1.m(0,$.mx(),y.W)
u=J.bZ(s)
q=u.cB(s,new A.bBV(t))
p=B.N(q,q.$ti.i("C.E"))
q=B.aj(p).i("az<1>")
o=B.N(new B.az(p,new A.bC_(a2,new A.bBZ(a4),new A.bBY(B.kX(B.eL()))),q),q.i("C.E"))
switch(a2.a){case 0:q=L.dU(B.eL())
break
case 1:q="Last 7 days"
break
case 2:q="Last 30 days"
break
case 3:q=a4==null?"Custom range":L.dU(C.e.gM(a4.a.jn().split("T")))+" \u2013 "+L.dU(C.e.gM(a4.b.jn().split("T")))
break
default:q=null}if(o.length!==0){n=a1.m(0,$.cC(),y.B)
m=B.dm(J.bk(n,new A.bBW(o)))
l=m==null?B.dm(n):m
if(l==null)l=C.hg
k=l.gb4(l)+" \xb7 "+l.gcj(l)}else k="\u2014"
j=null
i=null
x=a2===G.jv?3:4
break
case 3:m=d==null
h=m?null:d.Q
if(h==null)h=""
if(!a0){a0=B.dm(u.cB(s,new A.bBX(t)))
g=a0==null?null:a0.ax}else g=m?null:d.at
x=h.length!==0&&g!=null?5:6
break
case 5:if(o.length!==0)f=C.e.gM(o).b
else{a0=a1.m(0,$.iI(),y.C)
f=a0.gaf(a0)}x=7
return B.k(C.eY.yo(g,f,h),$async$anA)
case 7:e=a6
j=e.a
i=e.b
case 6:case 4:v=new A.a_P(a2,q,t,k,o,r,j,i)
x=1
break
case 1:return B.t(v,w)}})
return B.u($async$anA,w)},
a_P:function a_P(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aqW:function aqW(){},
aqT:function aqT(){},
aqS:function aqS(){},
aqV:function aqV(){},
aqU:function aqU(){},
aqX:function aqX(){},
aqR:function aqR(){},
aqQ:function aqQ(){},
aqO:function aqO(){},
aqP:function aqP(){},
bBV:function bBV(d){this.a=d},
bBY:function bBY(d){this.a=d},
bBZ:function bBZ(d){this.a=d},
bC_:function bC_(d,e,f){this.a=d
this.b=e
this.c=f},
bBW:function bBW(d){this.a=d},
bBX:function bBX(d){this.a=d},
bEj(d,e,f,g,h){var x=0,w=B.v(y.H),v,u,t,s,r
var $async$bEj=B.q(function(i,j){if(i===1)return B.r(j,w)
for(;;)switch(x){case 0:x=3
return B.k(A.anA(e,f,g,h),$async$bEj)
case 3:r=j
if(d.e==null){x=1
break}u=I.hG(f)
u=B.bB(u.toLowerCase()," ","_")
t=f===G.d9?r.b:I.hG(f)
s=B.Y(null,!1,null,null,null,null,null,"Close",new A.bEk(d),C.M,C.ar)
B.bS(d,new A.T2(r,null),B.a([s,B.Y(null,!1,null,null,null,B.bO("printer",$.d?C.x:C.v,14),null,"Print",new A.bEl(d),C.M,C.ar),B.Y(null,!1,null,null,null,M.fn,null,"Download PDF",new A.bEm(d,r,"cashops_report_"+u+".pdf"),C.M,C.ah)],y.p),t+" Cash Ops Report \u2014 PDF Preview",C.de,y.z)
case 1:return B.t(v,w)}})
return B.u($async$bEj,w)},
bEg(d,e,f,g,h){var x=0,w=B.v(y.H),v,u,t,s
var $async$bEg=B.q(function(i,j){if(i===1)return B.r(j,w)
for(;;)switch(x){case 0:x=3
return B.k(A.anA(e,f,g,h),$async$bEg)
case 3:s=j
if(d.e==null){x=1
break}u=I.hG(f)
u=B.bB(u.toLowerCase()," ","_")
t=f===G.d9?s.b:I.hG(f)
B.bS(d,new A.T2(s,null),B.a([B.Y(null,!1,null,null,null,null,null,"Close",new A.bEh(d),C.M,C.ar),B.Y(null,!1,null,null,null,M.fn,null,"Download .xlsx",new A.bEi(d,s,"cashops_report_"+u+".csv"),C.M,C.hl)],y.p),t+" Cash Ops Report \u2014 Excel Preview",C.de,y.z)
case 1:return B.t(v,w)}})
return B.u($async$bEg,w)},
bEk:function bEk(d){this.a=d},
bEl:function bEl(d){this.a=d},
bEm:function bEm(d,e,f){this.a=d
this.b=e
this.c=f},
bEh:function bEh(d){this.a=d},
bEi:function bEi(d,e,f){this.a=d
this.b=e
this.c=f},
T2:function T2(d,e){this.c=d
this.a=e},
bCT(d){var x=0,w=B.v(y.H),v,u,t
var $async$bCT=B.q(function(e,f){if(e===1)return B.r(f,w)
for(;;)switch(x){case 0:t=D.atr()
t.GR(D.aD5(new A.bCU(d,new A.bCV()),null,E.ps))
x=2
return B.k(t.iJ(0),$async$bCT)
case 2:v=f
u=I.hG(d.a)
N.Do("cashops_report_"+B.bB(u.toLowerCase()," ","_")+".pdf",v,"application/pdf")
return B.t(null,w)}})
return B.u($async$bCT,w)},
chK(d){var x,w,v,u,t,s,r=new A.bCR(),q=new B.dH(""),p=d.a,o=I.hG(p)+" Cash Ops Report\n"
q.a=o
x=d.c
w=d.d
o+=x+","+w+"\n"
q.a=o
o+="\n"
q.a=o
q.a=o+"SUMMARY\n"
v=new A.bCS(q,r)
v.$2("Date",d.b)
v.$2("Cashier",x)
v.$2("Store",w)
w=d.e
v.$2("Registers Opened",""+w.length)
v.$2("Currently Open",""+d.gVP())
v.$2("Closed",""+d.gSM())
v.$2("Total Opening Float",B.J(d.gWM()))
v.$2("Total Cash Sales",B.J(d.gWI()))
v.$2("Total Cash Refunds",B.J(d.gWH()))
v.$2("Total Expected in Drawer",B.J(d.gWK()))
v.$2("Total Counted",B.J(d.gWJ()))
v.$2("Total Variance",B.J(d.gWP()))
if(d.gkN().length!==0){o=d.gkN()
v.$2("Denomination Final Count",new B.an(o,new A.bCQ(),B.aj(o).i("an<1,c>")).aU(0," "))}o=q.a+="\n"
x=w.length
o+="REGISTERS ("+x+")\n"
q.a=o
q.a=o+"Register,Counter,Opened By,Opening,Cash Sales,Expected,Counted,Variance,Status\n"
for(u=0;u<w.length;w.length===x||(0,B.A)(w),++u){t=w[u]
o=B.n(r.$1(t.a))+","+B.n(r.$1(t.c))+","+B.n(r.$1(t.y))+","+B.J(t.d)+","+B.J(t.e)+","+B.J(t.r)+","+B.J(t.w)+","+B.J(t.x)+","+B.n(r.$1(t.Q))+"\n"
q.a+=o}o=B.a([239,187,191],y.a)
x=q.a
C.e.A(o,C.c4.bn(x.charCodeAt(0)==0?x:x))
s=new Uint8Array(B.ex(o))
p=I.hG(p)
N.Do("cashops_report_"+B.bB(p.toLowerCase()," ","_")+".csv",s,"text/csv")},
bCV:function bCV(){},
bCU:function bCU(d,e){this.a=d
this.b=e},
bCR:function bCR(){},
bCS:function bCS(d,e){this.a=d
this.b=e},
bCQ:function bCQ(){},
c8G(d){return new A.xA(null)},
xA:function xA(d){this.a=d},
aij:function aij(){this.d=$
this.c=this.a=null},
bnh:function bnh(d){this.a=d},
bng:function bng(){},
bnf:function bnf(d,e,f){this.a=d
this.b=e
this.c=f},
bnd:function bnd(d){this.a=d},
bne:function bne(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Jb:function Jb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
ahQ:function ahQ(d,e,f){this.c=d
this.d=e
this.a=f},
U3:function U3(d,e){this.d=d
this.a=e},
U4:function U4(d,e){var _=this
_.w=d
_.x=null
_.y=!0
_.Q=_.z=null
_.as=e
_.d=$
_.c=_.a=null},
b6C:function b6C(d){this.a=d},
b6D:function b6D(d){this.a=d},
b6E:function b6E(){},
b6I:function b6I(){},
b6J:function b6J(){},
b6K:function b6K(d,e){this.a=d
this.b=e},
b6A:function b6A(d){this.a=d},
b6B:function b6B(d){this.a=d},
b6L:function b6L(){},
b6M:function b6M(d){this.a=d},
b6z:function b6z(d,e){this.a=d
this.b=e},
b6N:function b6N(d){this.a=d},
b6y:function b6y(d){this.a=d},
b6O:function b6O(d){this.a=d},
b6x:function b6x(d){this.a=d},
b6P:function b6P(d){this.a=d},
b6w:function b6w(d){this.a=d},
b6F:function b6F(d,e){this.a=d
this.b=e},
b6v:function b6v(d,e){this.a=d
this.b=e},
b6G:function b6G(d){this.a=d},
b6u:function b6u(d){this.a=d},
b6H:function b6H(d){this.a=d},
b6t:function b6t(d){this.a=d},
rz:function rz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
abl:function abl(){this.d=!1
this.c=this.a=null},
b_A:function b_A(d){this.a=d},
b_z:function b_z(d){this.a=d},
b_B:function b_B(d){this.a=d},
b_y:function b_y(d){this.a=d},
bWY(d,e,f,g){var x,w,v,u,t,s=d.m(0,$.cC(),y.B),r=g==null?null:B.dm(J.bk(s,new A.bCj(g))),q=r==null,p=q?s:B.a([r],y.x),o=d.m(0,$.lG(),y.c),n=d.m(0,$.lH(),y.y),m=d.m(0,$.ez(),y.j),l=new A.bCs(e,new A.bCr(f),new A.bCq(B.kX(B.eL()))),k=new A.bCi(),j=B.a([],y.Y)
for(x=J.aa(p),w=J.bZ(o),v=J.bZ(n),u=J.bZ(m);x.p();){t=x.gE(x)
j.push(new A.xT(t,w.cB(o,new A.bCk(k,t,l)).bu(0,0,new A.bCl()),w.cB(o,new A.bCm(k,t,l)).gt(0),v.cB(n,new A.bCn(k,t)).gt(0),u.cB(m,new A.bCo(k,t)).gt(0)))}switch(e.a){case 0:x=L.dU(B.eL())
break
case 1:x="Last 7 days"
break
case 2:x="Last 30 days"
break
case 3:x=f==null?"Custom range":L.dU(C.e.gM(f.a.jn().split("T")))+" - "+L.dU(C.e.gM(f.b.jn().split("T")))
break
default:x=null}w=!q?0:u.cB(m,new A.bCp()).gt(0)
return new A.aDz(q?null:r.gb4(r)+" \xb7 "+r.gcj(r),e,x,j,w)},
xT:function xT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aDz:function aDz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aDD:function aDD(){},
aDA:function aDA(){},
aDC:function aDC(){},
aDB:function aDB(){},
bCj:function bCj(d){this.a=d},
bCq:function bCq(d){this.a=d},
bCr:function bCr(d){this.a=d},
bCs:function bCs(d,e,f){this.a=d
this.b=e
this.c=f},
bCi:function bCi(){},
bCk:function bCk(d,e,f){this.a=d
this.b=e
this.c=f},
bCl:function bCl(){},
bCm:function bCm(d,e,f){this.a=d
this.b=e
this.c=f},
bCn:function bCn(d,e){this.a=d
this.b=e},
bCo:function bCo(d,e){this.a=d
this.b=e},
bCh:function bCh(d,e){this.a=d
this.b=e},
bCp:function bCp(){},
cj3(d,e,f,g,h){var x,w,v=null,u=A.bWY(e,f,g,h),t=I.hG(f)
t=B.bB(t.toLowerCase()," ","_")
x=f===G.d9?u.c:I.hG(f)
w=u.a
w=w==null?"":" \xb7 "+w
B.bS(d,new A.V_(u,v),B.a([B.Y(v,!1,v,v,v,v,v,"Close",new A.bEC(d),C.M,C.ar),B.Y(v,!1,v,v,v,M.fn,v,"Download PDF",new A.bED(d,u,"network_report_"+t+".pdf"),C.M,C.ah)],y.p),x+" Network Report"+w+" \u2014 PDF Preview",C.de,y.z)},
cj2(d,e,f,g,h){var x,w,v=null,u=A.bWY(e,f,g,h),t=I.hG(f)
t=B.bB(t.toLowerCase()," ","_")
x=f===G.d9?u.c:I.hG(f)
w=u.a
w=w==null?"":" \xb7 "+w
B.bS(d,new A.V_(u,v),B.a([B.Y(v,!1,v,v,v,v,v,"Close",new A.bEA(d),C.M,C.ar),B.Y(v,!1,v,v,v,M.fn,v,"Download .xlsx",new A.bEB(d,u,"network_report_"+t+".xlsx"),C.M,C.hl)],y.p),x+" Network Report"+w+" \u2014 Excel Preview",C.de,y.z)},
bwd(d){var x=0,w=B.v(y.H),v,u,t
var $async$bwd=B.q(function(e,f){if(e===1)return B.r(f,w)
for(;;)switch(x){case 0:t=D.atr()
t.GR(D.aD5(new A.bwe(d,new A.bwf()),null,E.ps))
x=2
return B.k(t.iJ(0),$async$bwd)
case 2:v=f
u=I.hG(d.b)
N.Do("network_report_"+B.bB(u.toLowerCase()," ","_")+".pdf",v,"application/pdf")
return B.t(null,w)}})
return B.u($async$bwd,w)},
ce1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="Network Report",g={},f=H.avw(new B.zr().bn("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")),e=f.M4()
e.toString
f.Wk(e,h)
f.q2(h)
x=f.x.h(0,h)
x.ld(0,30)
x.ld(1,18)
x.ld(2,16)
x.ld(3,12)
x.ld(4,18)
x.ld(5,14)
g.a=0
w=new A.bwa(x)
v=new A.bwc(g,x,w)
u=new A.bwb(g,w)
t=new A.bw9(g)
e=d.b
s=I.hG(e)
r=d.a
r=r==null?"":" \xb7 "+r
v.$3$bold$fontSize(s+" Network Report"+r,!0,16)
r=d.d
v.$3$bold$fontSize(""+r.length+" stores \xb7 Network",!1,10)
t.$0()
s=$.c1h()
v.$3$bold$color("SUMMARY",!0,s)
u.$2("Date",d.c)
u.$2("Active Stores",""+r.length)
u.$2("Network Sales",B.J(d.gWO()))
u.$2("Total Bills",""+d.gWG())
u.$2("Pending Stock Requests",""+d.gWN())
u.$2("Low/Out-of-Stock Items",""+d.gWL())
t.$0()
v.$3$bold$color("STORE PERFORMANCE ("+r.length+")",!0,s)
for(q=0;q<6;++q){p=w.$2(q,g.a)
s=F.aIZ[q]
o=p.c
n=p.f
o.oa(new H.iM(p.e,n),new H.fP(new H.hU(s,i,i)))
s=H.p6($.c1k(),!0,i,i,!1,!1,K.tS,i,i,i,K.ew,!1,i,K.e7,i,0,i,i,K.cU,K.fk)
o.a.a=!0
p.a=s}++g.a
if(r.length===0)v.$3$bold$fontSize("No stores in the network yet.",!1,10)
else for(m=0;m<r.length;++m){l=r[m]
s=l.a
k=[s.gb4(s)+" \xb7 "+s.gcj(s),s.geB(s),B.J(l.b),""+l.c,""+l.d,""+l.e]
for(s=(m&1)===0,q=0;q<6;++q){p=w.$2(q,g.a)
o=k[q]
n=p.c
j=p.f
n.oa(new H.iM(p.e,j),new H.fP(new H.hU(o,i,i)))
o=s?$.c1g():K.e_
j=$.c1i()
j=j.a
j=H.JH(H.vu(j)||j==="none"?j:K.cB.ghY())
j=H.p6(o,!1,new H.zt(K.ma,j),i,!1,!1,K.cB,i,i,i,K.ew,!1,i,K.e7,i,0,i,i,K.cU,K.fk)
n.a.a=!0
p.a=j}++g.a}s=f.TR()
s.toString
e=I.hG(e)
N.Do("network_report_"+B.bB(e.toLowerCase()," ","_")+".xlsx",new Uint8Array(B.ex(s)),"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")},
bEC:function bEC(d){this.a=d},
bED:function bED(d,e,f){this.a=d
this.b=e
this.c=f},
bEA:function bEA(d){this.a=d},
bEB:function bEB(d,e,f){this.a=d
this.b=e
this.c=f},
V_:function V_(d,e){this.c=d
this.a=e},
bwf:function bwf(){},
bwe:function bwe(d,e){this.a=d
this.b=e},
bwa:function bwa(d){this.a=d},
bwc:function bwc(d,e,f){this.a=d
this.b=e
this.c=f},
bwb:function bwb(d,e){this.a=d
this.b=e},
bw9:function bw9(d){this.a=d}},F,P,Q,S,I,G,D,E,T,N,O,H,K
J=c[1]
B=c[0]
C=c[2]
R=c[80]
L=c[92]
M=c[179]
A=a.updateHolder(c[25],A)
F=c[180]
P=c[102]
Q=c[104]
S=c[95]
I=c[54]
G=c[181]
D=c[60]
E=c[163]
T=c[75]
N=c[67]
O=c[150]
H=c[61]
K=c[182]
A.a_P.prototype={
gWM(){return C.e.bu(this.e,0,new A.aqW())},
gWI(){var x=this.r
return x==null?C.e.bu(this.e,0,new A.aqT()):x},
gWH(){var x=this.w
return x==null?C.e.bu(this.e,0,new A.aqS()):x},
gWK(){return C.e.bu(this.e,0,new A.aqV())},
gWJ(){return C.e.bu(this.e,0,new A.aqU())},
gWP(){return C.e.bu(this.e,0,new A.aqX())},
gVP(){var x=this.e
return new B.az(x,new A.aqR(),B.aj(x).i("az<1>")).gt(0)},
gSM(){var x=this.e
return new B.az(x,new A.aqQ(),B.aj(x).i("az<1>")).gt(0)},
gkN(){var x=J.rZ(this.f)
x=x.cB(x,new A.aqO()).aE(0)
C.e.dI(x,new A.aqP())
return x}}
A.T2.prototype={
I(d){var x,w,v,u,t,s,r,q,p=null,o=this.c,n=o.c,m=o.d,l=B.f(n+" \xb7 "+m,p,p,p,p,p,B.o($.d?C.Q:C.P,p,p,p,13,C.p).aV(12.5),p,p),k=$.d,j=k?C.aB:C.aH,i=B.bl(k?C.a_:C.a0,C.O,1),h=B.at(14),g=B.f("SUMMARY",p,p,p,p,p,B.o(k?C.Q:C.P,p,p,p,12,C.an),p,p),f=o.e
m=B.a([new B.al("Date",o.b,!1),new B.al("Cashier",n,!1),new B.al("Store",m,!1),new B.al("Registers Opened",""+f.length,!1),new B.al("Currently Open",""+o.gVP(),!1),new B.al("Closed",""+o.gSM(),!1),new B.al("Total Opening Float",B.J(o.gWM()),!1),new B.al("Total Cash Sales",B.J(o.gWI()),!1),new B.al("Total Cash Refunds",B.J(o.gWH()),!1),new B.al("Total Expected in Drawer",B.J(o.gWK()),!1),new B.al("Total Counted",B.J(o.gWJ()),!1),new B.al("Total Variance",B.J(o.gWP()),!1)],y.o)
n=B.f("DENOMINATION FINAL COUNT",p,p,p,p,p,B.o($.d?C.Q:C.P,p,p,p,12,C.an),p,p)
if(o.gkN().length===0)k=B.f("No cash denominations counted yet.",p,p,p,p,p,B.o($.d?C.X:C.Y,p,1.5,p,13.5,C.p),p,p)
else{k=B.a([],y.p)
for(x=o.gkN(),w=x.length,v=0;v<x.length;x.length===w||(0,B.A)(x),++v){u=x[v]
t=$.d
s=t?C.ao:C.D
r=new B.aK(t?C.a_:C.a0,1,C.O,-1)
q=new B.b8(6,6)
t=t?C.x:C.v
k.push(B.a3(p,B.f("\u20b9"+u.a+" \xd7 "+u.b,p,p,p,p,p,new B.E(!0,t,p,"Inter",p,p,11.8,C.R,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),C.A,p,p,new B.a6(s,p,new B.c7(r,r,r,r),new B.dg(q,q,q,q),p,p,C.I),p,p,p,p,O.tl,p,p,p))}k=B.d6(C.b2,k,C.bB,8,8)}x=y.p
h=B.a3(p,B.Q(B.a([g,C.bt,new B.ep(m,2,p),C.aN,n,C.bl,k],x),C.E,p,C.r,C.N),C.A,p,p,new B.a6(j,p,i,h,p,p,C.I),p,p,p,p,C.ef,p,p,1/0)
f=f.length
return B.Q(B.a([l,C.aN,h,Q.cS,B.f("REGISTERS ("+f+")",p,p,p,p,p,B.o($.d?C.Q:C.P,p,p,p,12,C.an),p,p),C.bl,this.aFt(o)],x),C.E,p,C.r,C.N)},
aFt(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.e
if(i.length===0){i=$.d
x=B.bl(i?C.a_:C.a0,C.O,1)
w=B.at(8)
return B.a3(C.ag,B.f("No registers in this period.",j,j,j,j,j,B.o(i?C.X:C.Y,j,1.5,j,13.5,C.p),j,j),C.A,j,j,new B.a6(j,j,x,w,j,j,C.I),j,j,j,j,O.mU,j,j,j)}x=B.bl($.d?C.a_:C.a0,C.O,1)
w=B.at(8)
v=B.x(y.S,y.w)
for(u=0;u<9;++u)v.l(0,u,M.hq)
t=y.p
s=B.a([],t)
for(u=0;u<9;++u){r=F.aWq[u]
q=$.d?C.X:C.Y
q=new B.E(!0,q,j,"Inter",j,j,12,C.R,j,0.3,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j).aD(C.D)
s.push(new B.af(F.mY,B.f(r,j,j,j,j,j,q,u>=3&&u<=7?C.c7:C.cK,j),j))}s=B.a([new L.hI(M.mc,s)],y.T)
for(r=y.s,q=y.M,u=0;u<i.length;++u){if((u&1)===0)p=$.d?C.ao:C.D
else p=$.d?C.aB:C.aH
o=B.a([],t)
for(n=i[u],n=new B.wQ(B.a([n.a,n.c,n.y,B.J(n.d),B.J(i[u].e),B.J(i[u].r),B.J(i[u].w),B.J(i[u].x),i[u].Q],r),q),n=n.gfv(n),n=n.gU(n);n.p();){m=n.gE(n)
l=m.b
k=$.d?C.x:C.v
m=m.a
m=m>=3&&m<=7?C.c7:C.cK
o.push(new B.af(F.mY,B.f(l,j,j,j,j,j,new B.E(!0,k,j,"Inter",j,j,13.5,C.p,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),m,j),j))}s.push(new L.hI(new B.a6(p,j,j,j,j,j,C.I),o))}return B.a3(j,L.Rb(s,v,M.lH),C.c_,j,j,new B.a6(j,j,x,w,j,j,C.I),j,j,j,j,j,j,j,j)}}
A.xA.prototype={
W(){return new A.aij()}}
A.aij.prototype={
ao(){this.az()
$.ap.rx$.push(new A.bnh(this))},
I(d){var x,w,v=y.p,u=B.a([],v)
for(x=0;x<3;++x){w=F.aSz[x]
u.push(new A.ahQ(w,new A.bnf(this,d,w),null))}return B.Q(B.a([F.UX,T.t4(4,u,!0)],v),C.E,null,C.r,C.z)},
aCM(d,e){var x=null,w=new B.cw(x,y.J)
B.bS(d,new A.U3(e,w),B.a([B.Y(x,!1,x,x,x,x,x,"Cancel",new A.bnd(d),C.M,C.ap),B.Y(x,!1,x,x,x,F.UJ,x,"Preview & download",new A.bne(this,w,d,e),C.M,C.ah)],y.p),e.c,C.aJ,y.z)},
aGg(d,e,f,g,h,i,j){var x=this,w=f===G.d9?g:null
switch(e.a){case 0:if(h)A.cj3(d,x.gN(),f,w,i)
else A.cj2(d,x.gN(),f,w,i)
break
case 1:if(h)I.JV(d,x.gN(),f,j,w)
else I.JU(d,x.gN(),f,j,w)
break
case 2:if(h)A.bEj(d,x.gN(),f,j,w)
else A.bEg(d,x.gN(),f,j,w)
break}}}
A.Jb.prototype={
P(){return"_ReportType."+this.b},
gaRj(){switch(this.a){case 0:var x=C.a6
break
case 1:x=C.aK
break
case 2:x=C.ci
break
default:x=null}return x},
gaLY(){switch(this.a){case 0:var x=$.d?C.bi:C.bn
break
case 1:x=$.d?P.bX:P.c0
break
case 2:x=$.d?C.cO:C.cX
break
default:x=null}return x}}
A.ahQ.prototype={
I(d){var x=null,w=this.c,v=w.gaLY(),u=B.at(10)
u=B.a3(C.ag,B.bO(w.e,w.gaRj(),22),C.A,x,x,new B.a6(v,x,x,u,x,x,C.I),x,46,x,x,x,x,x,46)
v=B.f(w.c,x,x,x,x,x,B.o(x,x,x,-0.1,16,C.R),x,x)
w=B.f(w.d,x,x,x,x,x,B.o($.d?C.Q:C.P,x,x,x,13,C.p).aOi(13.5,1.5),x,x)
return R.jT(B.Q(B.a([u,C.bj,v,C.b6,w,C.i8,C.bj,B.Y(x,!1,x,x,x,B.bO("bars",$.d?C.x:C.v,16),x,"Generate",this.d,C.M,C.ar)],y.p),C.E,x,C.r,C.z),!0)}}
A.U3.prototype={
W(){return new A.U4(G.jv,C.cH)}}
A.U4.prototype={
b0i(){var x,w=this
if(w.w===G.d9&&w.x==null)return"Pick a start and end date first"
x=w.a.d
if(x!==F.xp&&w.z==null)return x===F.qD?"No cashier in this store yet":"No store manager in this store yet"
return null},
I(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l={},k=n.gN(),j=k.T($.Dy(),y.U),i=y.N,h=k.T($.oT(),i),g=k.T($.cC(),y.B)
l.a=null
if(h!=="All Stores")for(k=J.aa(g);k.p();){x=k.gE(k)
if(x.gb4(x)+" \u2014 "+x.geB(x)===h||x.gb4(x)===h||x.gaf(x)===h){l.a=x
break}}k=l.a
n.Q=k==null?m:k.gaf(k)
if(l.a==null)w=j
else{k=J.bk(j,new A.b6C(l))
w=B.N(k,k.$ti.i("C.E"))}k=n.a.d
v=k===F.xp
u=k===F.qD?C.db:C.cn
if(v)k=C.cH
else{k=J.bk(w,new A.b6D(u))
x=k.$ti.i("dx<1,c>")
x=B.dF(new B.dx(k,new A.b6E(),x),x.i("C.E"))
k=B.N(x,B.w(x).c)
C.e.fK(k)}n.as=k
x=!v
if(x){t=n.z
k=t==null||!C.e.q(k,t)}else k=!1
if(k){k=n.as
n.z=k.length===0?m:C.e.gM(k)}k=B.a(["All Stores"],y.s)
C.e.A(k,J.b7(g,new A.b6I(),i))
s=C.e.q(k,h)?h:"All Stores"
t=n.x
r=t==null?"Pick dates":L.dU(C.e.gM(t.a.jn().split("T")))+" \u2013 "+L.dU(C.e.gM(n.x.b.jn().split("T")))
t=n.a.d
q=t===F.qD?"Cashier":"Store manager"
t=B.f(t.d,m,m,m,m,m,B.o($.d?C.Q:C.P,m,m,m,13,C.p).aV(13),m,m)
p=y.p
k=B.a([t,C.e6,new B.af(C.f6,B.f("Store",m,m,m,m,m,B.o($.d?C.Q:C.P,m,m,m,12,C.an),m,m),m),B.ql(!0,!0,!0,!1,k,m,new A.b6J(),m,new A.b6K(n,g),C.ck,m,m,s,i)],p)
if(x){x=B.a([C.bj,new B.af(C.f6,B.f(q,m,m,m,m,m,B.o($.d?C.Q:C.P,m,m,m,12,C.an),m,m),m)],p)
t=n.as
if(t.length===0)x.push(B.f("No "+q.toLowerCase()+" accounts in this store yet",m,m,m,m,m,B.o($.d?C.Q:C.P,m,m,m,13,C.p).aV(13),m,m))
else{o=n.z
o.toString
x.push(B.ql(!0,!0,!0,!1,t,m,new A.b6L(),m,new A.b6M(n),C.ck,m,m,o,i))}C.e.A(k,x)}k.push(C.bj)
k.push(new B.af(C.f6,B.f("Period",m,m,m,m,m,B.o($.d?C.Q:C.P,m,m,m,12,C.an),m,m),m))
i=L.dU(B.eL())
x=n.w
k.push(B.d6(C.b2,B.a([new A.rz("Today",i,x===G.jv,new A.b6N(n),m,m),new A.rz("Weekly","Last 7 days",x===G.vP,new A.b6O(n),m,m),new A.rz("Monthly","Last 30 days",x===G.vQ,new A.b6P(n),m,m),new A.rz("Custom",r,x===G.d9,new A.b6F(n,d),m,m)],p),C.bB,8,8))
k.push(C.bj)
k.push(new B.af(C.f6,B.f("Format",m,m,m,m,m,B.o($.d?C.Q:C.P,m,m,m,12,C.an),m,m),m))
i=n.y
k.push(B.d6(C.b2,B.a([new A.rz("PDF",m,i,new A.b6G(n),F.Ul,m),new A.rz("Excel",m,!i,new A.b6H(n),F.Ur,m)],p),C.bB,8,8))
return B.Q(k,C.E,m,C.r,C.z)}}
A.rz.prototype={
W(){return new A.abl()}}
A.abl.prototype={
I(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.e
m=m.f
if(l){x=$.d
w=x?C.bi:C.bn
v=w
w=x
x=v}else if(o.d){x=$.d
w=x?C.hw:C.ka
v=w
w=x
x=v}else{x=$.d
w=x?C.ao:C.D
v=w
w=x
x=v}if(l)w=C.a6
else w=w?C.a_:C.a0
w=B.bl(w,C.O,1)
u=B.at(10)
t=y.p
s=B.a([],t)
r=o.a.r
if(r!=null)C.e.A(s,B.a([r,C.aV],t))
r=o.a.c
q=B.o(n,n,1.45,n,14,C.p)
if(l)p=C.a6
else p=$.d?C.x:C.v
s.push(B.f(r,n,n,n,n,n,q.hC(p,13.5,C.R),n,n))
r=o.a.d
if(r!=null)C.e.A(s,B.a([C.da,B.f(r,n,n,n,n,n,B.o($.d?C.Q:C.P,n,n,n,13,C.p).aV(12.5),n,n)],t))
return B.bA(B.bs(n,B.a3(n,B.ac(s,C.F,C.r,C.N,0),C.A,n,F.WE,new B.a6(x,n,w,u,n,n,C.I),n,n,n,n,C.zZ,n,n,n),C.ae,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,m,n,n,n),C.ak,n,new A.b_A(o),new A.b_B(o),n)}}
A.xT.prototype={}
A.aDz.prototype={
gWO(){return C.e.bu(this.d,0,new A.aDD())},
gWG(){return C.e.bu(this.d,0,new A.aDA())},
gWN(){return C.e.bu(this.d,0,new A.aDC())},
gWL(){return C.e.bu(this.d,0,new A.aDB())+this.e}}
A.V_.prototype={
I(d){var x,w,v,u,t,s=null,r=this.c,q=r.d,p=q.length
p=B.f(""+p+" stores \xb7 Network",s,s,s,s,s,B.o($.d?C.Q:C.P,s,s,s,13,C.p).aV(12.5),s,s)
x=$.d
w=x?C.aB:C.aH
v=B.bl(x?C.a_:C.a0,C.O,1)
u=B.at(14)
t=y.p
u=B.a3(s,B.Q(B.a([B.f("SUMMARY",s,s,s,s,s,B.o(x?C.Q:C.P,s,s,s,12,C.an),s,s),C.bt,new B.ep(B.a([new B.al("Date",r.c,!1),new B.al("Active Stores",""+q.length,!1),new B.al("Network Sales",B.J(r.gWO()),!1),new B.al("Total Bills",""+r.gWG(),!1),new B.al("Pending Stock Requests",""+r.gWN(),!1),new B.al("Low/Out-of-Stock Items",""+r.gWL(),!1)],y.o),2,s)],t),C.E,s,C.r,C.N),C.A,s,s,new B.a6(w,s,v,u,s,s,C.I),s,s,s,s,C.ef,s,s,1/0)
q=q.length
return B.Q(B.a([p,C.aN,u,Q.cS,B.f("STORE PERFORMANCE ("+q+")",s,s,s,s,s,B.o($.d?C.Q:C.P,s,s,s,12,C.an),s,s),C.bl,this.aIb(r)],t),C.E,s,C.r,C.N)},
aIb(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d
if(h.length===0){h=$.d
x=B.bl(h?C.a_:C.a0,C.O,1)
w=B.at(8)
return B.a3(C.ag,B.f("No stores in the network yet.",i,i,i,i,i,B.o(h?C.X:C.Y,i,1.5,i,13.5,C.p),i,i),C.A,i,i,new B.a6(i,i,x,w,i,i,C.I),i,i,i,i,O.mU,i,i,i)}x=B.bl($.d?C.a_:C.a0,C.O,1)
w=B.at(8)
v=B.x(y.S,y.w)
for(u=0;u<6;++u)v.l(0,u,M.hq)
t=y.p
s=B.a([],t)
for(u=0;u<6;++u){r=F.aTK[u]
q=$.d?C.X:C.Y
q=new B.E(!0,q,i,"Inter",i,i,12,C.R,i,0.3,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i).aD(C.D)
s.push(new B.af(F.mY,B.f(r,i,i,i,i,i,q,u>=2?C.c7:C.cK,i),i))}s=B.a([new L.hI(M.mc,s)],y.T)
for(r=y.s,q=y.M,u=0;u<h.length;++u){if((u&1)===0)p=$.d?C.ao:C.D
else p=$.d?C.aB:C.aH
o=B.a([],t)
for(n=h[u].a,n=n.gb4(n),m=h[u].a,m=m.gcj(m),l=h[u].a,l=l.geB(l),k=B.J(h[u].b),j=h[u],j=new B.wQ(B.a([n+" \xb7 "+m,l,k,""+j.c,""+j.d,""+j.e],r),q),j=j.gfv(j),j=j.gU(j);j.p();){n=j.gE(j)
m=n.b
l=$.d?C.x:C.v
n=n.a>=2?C.c7:C.cK
o.push(new B.af(F.mY,B.f(m,i,i,C.ab,i,i,new B.E(!0,l,i,"Inter",i,i,13.5,C.p,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),n,i),i))}s.push(new L.hI(new B.a6(p,i,i,i,i,i,C.I),o))}return B.a3(i,L.Rb(s,v,M.lH),C.c_,i,i,new B.a6(i,i,x,w,i,i,C.I),i,i,i,i,i,i,i,i)}}
var z=a.updateTypes(["p(p,xT)","dB(c,c)","j<dB>(nM)","aY(aY,xT)","fF(p,p)","~(c{bold!B,color:T?,fontSize:p})"])
A.aqW.prototype={
$2(d,e){return d+e.d},
$S:96}
A.aqT.prototype={
$2(d,e){return d+e.e},
$S:96}
A.aqS.prototype={
$2(d,e){return d+e.f},
$S:96}
A.aqV.prototype={
$2(d,e){return d+e.r},
$S:96}
A.aqU.prototype={
$2(d,e){return d+e.w},
$S:96}
A.aqX.prototype={
$2(d,e){return d+e.x},
$S:96}
A.aqR.prototype={
$1(d){return d.Q==="Open"},
$S:23}
A.aqQ.prototype={
$1(d){return d.Q!=="Open"},
$S:23}
A.aqO.prototype={
$1(d){return d.b>0},
$S:390}
A.aqP.prototype={
$2(d,e){return C.t.bm(e.a,d.a)},
$S:391}
A.bBV.prototype={
$1(d){return d.y===this.a},
$S:23}
A.bBY.prototype={
$1(d){var x,w,v
try{x=B.kX(d)
w=C.t.bq(this.a.e2(x).a,864e8)
return w}catch(v){return null}},
$S:216}
A.bBZ.prototype={
$1(d){var x,w,v,u,t,s=this.a
if(s==null)return!1
try{x=B.kX(d)
u=s.a
w=B.cK(B.bv(u),B.bq(u),B.dj(u),0,0,0,0)
s=s.b
v=B.cK(B.bv(s),B.bq(s),B.dj(s),0,0,0,0)
s=!x.lU(w)&&!x.nR(v)
return s}catch(t){return!1}},
$S:12}
A.bC_.prototype={
$1(d){var x,w,v=this.a
if(v===G.d9)return this.b.$1(d.as)
if(d.Q==="Open"||d.as===B.eL())return!0
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
A.bBW.prototype={
$1(d){return d.gaf(d)===C.e.gM(this.a).b},
$S:16}
A.bBX.prototype={
$1(d){return d.y===this.a},
$S:23}
A.bEk.prototype={
$0(){return B.ao(this.a,!0).X()},
$S:0}
A.bEl.prototype={
$0(){return B.M(this.a,"Sent to Microsoft Print to PDF",null)},
$S:0}
A.bEm.prototype={
$0(){var x=0,w=B.v(y.H),v=this,u
var $async$$0=B.q(function(d,e){if(d===1)return B.r(e,w)
for(;;)switch(x){case 0:u=v.a
B.ao(u,!0).X()
x=2
return B.k(A.bCT(v.b),$async$$0)
case 2:if(u.e!=null)B.M(u,"Downloaded "+v.c,null)
return B.t(null,w)}})
return B.u($async$$0,w)},
$S:3}
A.bEh.prototype={
$0(){return B.ao(this.a,!0).X()},
$S:0}
A.bEi.prototype={
$0(){var x=this.a
B.ao(x,!0).X()
A.chK(this.b)
B.M(x,"Downloaded "+this.c,null)},
$S:0}
A.bCV.prototype={
$2(d,e){var x=null
return new D.u5(G.tb,D.rb(B.a([D.ea(d,D.fQ(x,E.fC,x,x,x,x,x,x,x,E.bA,x,x,9,x,x,x,!0,x,x,x,x),x,x),D.ea(e,D.fQ(x,x,x,x,x,x,x,x,x,E.bA,x,x,10,x,E.bN,x,!0,x,x,x,x),x,x)],y.n),E.kl,E.jh))},
$S:z+1}
A.bCU.prototype={
$1(d){var x,w,v,u,t,s,r=null,q="\u20b9",p="Rs ",o=this.a,n=o.c,m=o.d,l=this.b,k=o.e,j=y.n
l=B.a([D.ea(I.hG(o.a)+" Cash Ops Report",D.fQ(r,r,r,r,r,r,r,r,r,E.bA,r,r,18,r,E.bN,r,!0,r,r,r,r),r,r),new D.dN(r,2,r),D.ea(n+" \xb7 "+m,G.wP,r,r),new D.dN(r,14,r),D.ea("SUMMARY",D.fQ(r,E.h9,r,r,r,r,r,r,r,E.bA,r,r,10,r,E.bN,r,!0,r,r,r,r),r,r),new D.dN(r,8,r),D.rb(B.a([D.tw(D.mD(B.a([l.$2("Date",o.b),l.$2("Cashier",n),l.$2("Store",m),l.$2("Registers Opened",""+k.length),l.$2("Currently Open",""+o.gVP()),l.$2("Closed",""+o.gSM())],j),E.cP)),new D.dN(24,r,r),D.tw(D.mD(B.a([l.$2("Total Opening Float",C.m.cU(B.J(o.gWM()),q,p)),l.$2("Total Cash Sales",C.m.cU(B.J(o.gWI()),q,p)),l.$2("Total Cash Refunds",C.m.cU(B.J(o.gWH()),q,p)),l.$2("Total Expected in Drawer",C.m.cU(B.J(o.gWK()),q,p)),l.$2("Total Counted",C.m.cU(B.J(o.gWJ()),q,p)),l.$2("Total Variance",C.m.cU(B.J(o.gWP()),q,p))],j),E.cP))],j),E.cP,E.jg)],j)
if(o.gkN().length!==0){n=D.ea("DENOMINATION FINAL COUNT",D.fQ(r,E.fC,r,r,r,r,r,r,r,E.bA,r,r,8.5,r,E.bN,r,!0,r,r,r,r),r,r)
m=B.a([],j)
for(o=o.gkN(),x=o.length,w=0;w<o.length;o.length===x||(0,B.A)(o),++w){v=o[w]
m.push(D.ea("Rs "+v.a+" x "+v.b,E.lL,r,r))}C.e.A(l,B.a([new D.dN(r,6,r),n,new D.dN(r,4,r),I.bTH(m,4,8)],j))}l.push(new D.dN(r,14,r))
l.push(D.ea("REGISTERS ("+k.length+")",D.fQ(r,E.h9,r,r,r,r,r,r,r,E.bA,r,r,10,r,E.bN,r,!0,r,r,r,r),r,r))
l.push(new D.dN(r,6,r))
if(k.length===0)l.push(D.ea("No registers in this period.",G.wO,r,r))
else{o=B.a([],y.t)
for(n=k.length,w=0;w<k.length;k.length===n||(0,B.A)(k),++w){u=k[w]
m=B.J(u.d)
m=B.mt(m,q,p,0)
j=B.J(u.e)
j=B.mt(j,q,p,0)
x=B.J(u.r)
x=B.mt(x,q,p,0)
t=B.J(u.w)
t=B.mt(t,q,p,0)
s=B.J(u.x)
o.push([u.a,u.c,u.y,m,j,x,t,B.mt(s,q,p,0),u.Q])}n=D.fQ(r,E.pq,r,r,r,r,r,r,r,E.bA,r,r,8,r,E.bN,r,!0,r,r,r,r)
l.push(D.aOS(I.bKB(G.vG,0.5),r,F.a4c,F.bbt,r,o,G.r8,n,F.aUl))}return l},
$S:z+2}
A.bCR.prototype={
$1(d){var x
if(C.m.q(d,",")||C.m.q(d,'"'))x='"'+B.bB(d,'"','""')+'"'
else x=d
return x},
$S:7}
A.bCS.prototype={
$2(d,e){var x=this.a,w=this.b
w=B.n(w.$1(d))+","+B.n(w.$1(e))+"\n"
x.a+=w
return null},
$S:75}
A.bCQ.prototype={
$1(d){return"\u20b9"+d.a+"\xd7"+d.b},
$S:392}
A.bnh.prototype={
$1(d){return this.ahj(d)},
ahj(d){var x=0,w=B.v(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=B.q(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=s.a
l=m.gN()
k=l.m(0,$.ai(),y.q)
j=k==null?null:k.Q
i=j==null?"":j
if(J.U(i)===0){x=1
break}u=4
o=$.cC()
x=7
return B.k(l.m(0,o.gJ(),y.R).bc(i),$async$$1)
case 7:if(m.c==null){x=1
break}r=J.b7(l.m(0,o,y.B),new A.bng(),y.N).aE(0)
o=$.jv()
x=8
return B.k(l.m(0,o.gJ(),y.Z).el(i,r),$async$$1)
case 8:if(m.c==null){x=1
break}q=l.m(0,o,y.D)
x=9
return B.k(B.eK(B.a([l.m(0,$.h9().gJ(),y.A).h6(i,r,q),l.m(0,$.it().gJ(),y.h).h6(i,r,q),l.m(0,$.lG().gJ(),y.X).el(i,r),l.m(0,$.K8().gJ(),y.r).el(i,r),l.m(0,$.lH().gJ(),y.V).bc(i),l.m(0,$.ez().gJ(),y.K).cN(i)],y.O),y.H),$async$$1)
case 9:u=2
x=6
break
case 4:u=3
h=t.pop()
l=B.S(h)
if(l instanceof B.aB){p=l
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
A.bng.prototype={
$1(d){return d.gaf(d)},
$S:15}
A.bnf.prototype={
$0(){return this.a.aCM(this.b,this.c)},
$S:0}
A.bnd.prototype={
$0(){return B.ao(this.a,!0).X()},
$S:0}
A.bne.prototype={
$0(){var x,w,v=this,u=v.b.ga3()
if(u==null)return
x=u.b0i()
if(x!=null){B.M(v.c,x,null)
return}w=v.c
B.ao(w,!0).X()
v.a.aGg(w,v.d,u.w,u.x,u.y,u.Q,u.z)},
$S:0}
A.b6C.prototype={
$1(d){var x=d.d,w=this.a,v=w.a,u=!0
if(!C.m.q(x,v.gb4(v))){v=w.a
if(!C.m.q(x,v.gaf(v))){w=w.a
w=C.m.q(x,w.geB(w))
x=w}else x=u}else x=u
return x},
$S:153}
A.b6D.prototype={
$1(d){return d.b===this.a},
$S:153}
A.b6E.prototype={
$1(d){return d.a},
$S:395}
A.b6I.prototype={
$1(d){return d.gb4(d)+" \u2014 "+d.geB(d)},
$S:15}
A.b6J.prototype={
$1(d){return d==="All Stores"?"All stores":d},
$S:7}
A.b6K.prototype={
$1(d){var x,w,v=this.a.gN()
v.m(0,$.oT().gJ(),y.u).fY(0,d)
if(d!=="All Stores"){x=this.b
w=J.mz(x,new A.b6A(d),new A.b6B(x))
v.m(0,$.iI().gJ(),y.v).fY(0,w)}},
$S:1}
A.b6A.prototype={
$1(d){return d.gb4(d)+" \u2014 "+d.geB(d)===this.a},
$S:16}
A.b6B.prototype={
$0(){return J.hK(this.a)},
$S:49}
A.b6L.prototype={
$1(d){return d},
$S:7}
A.b6M.prototype={
$1(d){var x=this.a
return x.B(new A.b6z(x,d))},
$S:1}
A.b6z.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.b6N.prototype={
$0(){var x=this.a
return x.B(new A.b6y(x))},
$S:0}
A.b6y.prototype={
$0(){return this.a.w=G.jv},
$S:0}
A.b6O.prototype={
$0(){var x=this.a
return x.B(new A.b6x(x))},
$S:0}
A.b6x.prototype={
$0(){return this.a.w=G.vP},
$S:0}
A.b6P.prototype={
$0(){var x=this.a
return x.B(new A.b6w(x))},
$S:0}
A.b6w.prototype={
$0(){return this.a.w=G.vQ},
$S:0}
A.b6F.prototype={
$0(){var x=0,w=B.v(y.H),v,u=this,t,s
var $async$$0=B.q(function(d,e){if(d===1)return B.r(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return B.k(L.bMW(u.b,null,null,t.x,null),$async$$0)
case 3:s=e
if(s==null||t.c==null){x=1
break}t.B(new A.b6v(t,s))
case 1:return B.t(v,w)}})
return B.u($async$$0,w)},
$S:3}
A.b6v.prototype={
$0(){var x=this.a
x.x=this.b
x.w=G.d9},
$S:0}
A.b6G.prototype={
$0(){var x=this.a
return x.B(new A.b6u(x))},
$S:0}
A.b6u.prototype={
$0(){return this.a.y=!0},
$S:0}
A.b6H.prototype={
$0(){var x=this.a
return x.B(new A.b6t(x))},
$S:0}
A.b6t.prototype={
$0(){return this.a.y=!1},
$S:0}
A.b_A.prototype={
$1(d){var x=this.a
return x.B(new A.b_z(x))},
$S:19}
A.b_z.prototype={
$0(){return this.a.d=!0},
$S:0}
A.b_B.prototype={
$1(d){var x=this.a
return x.B(new A.b_y(x))},
$S:18}
A.b_y.prototype={
$0(){return this.a.d=!1},
$S:0}
A.aDD.prototype={
$2(d,e){return d+e.b},
$S:z+3}
A.aDA.prototype={
$2(d,e){return d+e.c},
$S:z+0}
A.aDC.prototype={
$2(d,e){return d+e.d},
$S:z+0}
A.aDB.prototype={
$2(d,e){return d+e.e},
$S:z+0}
A.bCj.prototype={
$1(d){return d.gaf(d)===this.a},
$S:16}
A.bCq.prototype={
$1(d){var x,w,v
try{x=B.kX(d)
w=C.t.bq(this.a.e2(x).a,864e8)
return w}catch(v){return null}},
$S:216}
A.bCr.prototype={
$1(d){var x,w,v,u,t,s=this.a
if(s==null)return!1
try{x=B.kX(d)
u=s.a
w=B.cK(B.bv(u),B.bq(u),B.dj(u),0,0,0,0)
s=s.b
v=B.cK(B.bv(s),B.bq(s),B.dj(s),0,0,0,0)
s=!x.lU(w)&&!x.nR(v)
return s}catch(t){return!1}},
$S:12}
A.bCs.prototype={
$1(d){var x,w,v
if(d.gaI(d).toLowerCase()==="voided")return!1
x=this.a
if(x===G.d9)return this.b.$1(C.e.gM(d.gdX(d).split(" ")))
if(C.m.q(d.gdX(d),"now")||C.m.b9(d.gdX(d),B.eL()))return!0
w=this.c.$1(C.e.gM(d.gdX(d).split(" ")))
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
A.bCi.prototype={
$2(d,e){return d===e.gaf(e)||d===e.gb4(e)},
$S:1040}
A.bCk.prototype={
$1(d){return this.a.$2(d.giQ(d),this.b)&&this.c.$1(d)},
$S:38}
A.bCl.prototype={
$2(d,e){return d+e.gh8()},
$S:53}
A.bCm.prototype={
$1(d){return this.a.$2(d.giQ(d),this.b)&&this.c.$1(d)},
$S:38}
A.bCn.prototype={
$1(d){return this.a.$2(d.c,this.b)&&d.y==="Pending Approval"},
$S:98}
A.bCo.prototype={
$1(d){return d.x.cX(0,new A.bCh(this.a,this.b))&&d.gaI(0)!=="In Stock"},
$S:80}
A.bCh.prototype={
$1(d){return this.a.$2(d,this.b)},
$S:12}
A.bCp.prototype={
$1(d){var x=d.x
return x.ga1(x)&&d.gaI(0)!=="In Stock"},
$S:80}
A.bEC.prototype={
$0(){return B.ao(this.a,!0).X()},
$S:0}
A.bED.prototype={
$0(){var x=0,w=B.v(y.H),v=this,u
var $async$$0=B.q(function(d,e){if(d===1)return B.r(e,w)
for(;;)switch(x){case 0:u=v.a
B.ao(u,!0).X()
x=2
return B.k(A.bwd(v.b),$async$$0)
case 2:if(u.e!=null)B.M(u,"Downloaded "+v.c,null)
return B.t(null,w)}})
return B.u($async$$0,w)},
$S:3}
A.bEA.prototype={
$0(){return B.ao(this.a,!0).X()},
$S:0}
A.bEB.prototype={
$0(){var x=this.a
B.ao(x,!0).X()
A.ce1(this.b)
B.M(x,"Downloaded "+this.c,null)},
$S:0}
A.bwf.prototype={
$2(d,e){var x=null
return new D.u5(G.tb,D.rb(B.a([D.ea(d,D.fQ(x,E.fC,x,x,x,x,x,x,x,E.bA,x,x,9,x,x,x,!0,x,x,x,x),x,x),D.ea(e,D.fQ(x,x,x,x,x,x,x,x,x,E.bA,x,x,10,x,E.bN,x,!0,x,x,x,x),x,x)],y.n),E.kl,E.jh))},
$S:z+1}
A.bwe.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.a,o=I.hG(p.b),n=p.a
n=n==null?"":" \xb7 "+n
x=p.d
w=this.b
v=y.n
v=B.a([D.ea(o+" Network Report"+n,D.fQ(q,q,q,q,q,q,q,q,q,E.bA,q,q,18,q,E.bN,q,!0,q,q,q,q),q,q),new D.dN(q,2,q),D.ea(""+x.length+" stores - Network",G.wP,q,q),new D.dN(q,14,q),D.ea("SUMMARY",D.fQ(q,E.h9,q,q,q,q,q,q,q,E.bA,q,q,10,q,E.bN,q,!0,q,q,q,q),q,q),new D.dN(q,8,q),D.rb(B.a([D.tw(D.mD(B.a([w.$2("Date",p.c),w.$2("Active Stores",""+x.length),w.$2("Total Bills",""+p.gWG())],v),E.cP)),new D.dN(24,q,q),D.tw(D.mD(B.a([w.$2("Network Sales",C.m.cU(B.J(p.gWO()),"\u20b9","Rs ")),w.$2("Pending Stock Requests",""+p.gWN()),w.$2("Low/Out-of-Stock Items",""+p.gWL())],v),E.cP))],v),E.cP,E.jg),new D.dN(q,14,q),D.ea("STORE PERFORMANCE ("+x.length+")",D.fQ(q,E.h9,q,q,q,q,q,q,q,E.bA,q,q,10,q,E.bN,q,!0,q,q,q,q),q,q),new D.dN(q,6,q)],v)
if(x.length===0)v.push(D.ea("No stores in the network yet.",G.wO,q,q))
else{p=B.a([],y.t)
for(o=x.length,u=0;u<x.length;x.length===o||(0,B.A)(x),++u){t=x[u]
n=t.a
w=n.gb4(n)
s=n.gcj(n)
n=n.geB(n)
r=B.J(t.b)
p.push([w+" - "+s,n,B.mt(r,"\u20b9","Rs ",0),""+t.c,""+t.d,""+t.e])}o=D.fQ(q,E.pq,q,q,q,q,q,q,q,E.bA,q,q,8.5,q,E.bN,q,!0,q,q,q,q)
v.push(D.aOS(I.bKB(G.vG,0.5),q,G.A8,G.SD,q,p,G.r8,o,F.aJ_))}return v},
$S:z+2}
A.bwa.prototype={
$2(d,e){return this.a.aak(new H.iM(e,d))},
$S:z+4}
A.bwc.prototype={
$4$bold$color$fontSize(d,e,f,g){var x,w,v=null,u=this.a,t=u.a
this.b.aeh(new H.iM(t,0),new H.iM(t,5))
x=this.c.$2(0,u.a)
t=x.c
w=x.f
t.oa(new H.iM(x.e,w),new H.fP(new H.hU(d,v,v)))
w=H.p6(K.e_,e,v,v,!1,!1,f==null?K.cB:f,v,v,g,K.ew,!1,v,K.e7,v,0,v,v,K.cU,K.fk)
t.a.a=!0
x.a=w;++u.a},
$3$bold$fontSize(d,e,f){return this.$4$bold$color$fontSize(d,e,null,f)},
$3$bold$color(d,e,f){return this.$4$bold$color$fontSize(d,e,f,11)},
$S:z+5}
A.bwb.prototype={
$2(d,e){var x,w=null,v=this.b,u=this.a,t=v.$2(0,u.a),s=t.c,r=t.f
s.oa(new H.iM(t.e,r),new H.fP(new H.hU(d,w,w)))
r=H.p6(K.e_,!0,w,w,!1,!1,K.cB,w,w,w,K.ew,!1,w,K.e7,w,0,w,w,K.cU,K.fk)
s.a.a=!0
t.a=r
x=v.$2(1,u.a)
v=x.c
r=x.f
v.oa(new H.iM(x.e,r),new H.fP(new H.hU(e,w,w)));++u.a},
$S:75}
A.bw9.prototype={
$0(){return this.a.a++},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.L,[A.a_P,A.xT,A.aDz])
x(B.dt,[A.aqW,A.aqT,A.aqS,A.aqV,A.aqU,A.aqX,A.aqP,A.bCV,A.bCS,A.aDD,A.aDA,A.aDC,A.aDB,A.bCi,A.bCl,A.bwf,A.bwa,A.bwb])
x(B.ck,[A.aqR,A.aqQ,A.aqO,A.bBV,A.bBY,A.bBZ,A.bC_,A.bBW,A.bBX,A.bCU,A.bCR,A.bCQ,A.bnh,A.bng,A.b6C,A.b6D,A.b6E,A.b6I,A.b6J,A.b6K,A.b6A,A.b6L,A.b6M,A.b_A,A.b_B,A.bCj,A.bCq,A.bCr,A.bCs,A.bCk,A.bCm,A.bCn,A.bCo,A.bCh,A.bCp,A.bwe,A.bwc])
x(B.cX,[A.bEk,A.bEl,A.bEm,A.bEh,A.bEi,A.bnf,A.bnd,A.bne,A.b6B,A.b6z,A.b6N,A.b6y,A.b6O,A.b6x,A.b6P,A.b6w,A.b6F,A.b6v,A.b6G,A.b6u,A.b6H,A.b6t,A.b_z,A.b_y,A.bEC,A.bED,A.bEA,A.bEB,A.bw9])
x(B.aw,[A.T2,A.ahQ,A.V_])
x(B.e3,[A.xA,A.U3])
x(B.dW,[A.aij,A.U4])
w(A.Jb,B.nt)
w(A.rz,B.P)
w(A.abl,B.ae)})()
B.cs(b.typeUniverse,JSON.parse('{"T2":{"aw":[],"e":[]},"U3":{"P":[],"e":[]},"U4":{"ae":["U3"]},"rz":{"P":[],"e":[]},"xA":{"P":[],"e":[]},"aij":{"ae":["xA"]},"ahQ":{"aw":[],"e":[]},"abl":{"ae":["rz"]},"V_":{"aw":[],"e":[]}}'))
var y=(function rtii(){var x=B.G
return{_:x("a_P"),Z:x("jZ"),O:x("m<ar<~>>"),o:x("m<al>"),t:x("m<j<@>>"),x:x("m<bt>"),Y:x("m<xT>"),s:x("m<c>"),T:x("m<hI>"),p:x("m<e>"),n:x("m<dB>"),b:x("m<@>"),a:x("m<p>"),J:x("cw<U4>"),M:x("wQ<c>"),U:x("j<cg>"),d:x("j<d8>"),D:x("j<d9>"),c:x("j<bw>"),y:x("j<dc>"),B:x("j<bt>"),j:x("j<ce>"),W:x("aF<p,p>"),A:x("lh"),r:x("om"),X:x("ne"),h:x("m9"),v:x("iX<bt>"),u:x("iX<c>"),V:x("pP"),C:x("bt"),R:x("fr"),N:x("c"),w:x("pU"),K:x("lt"),z:x("@"),S:x("p"),q:x("cg?"),H:x("~")}})();(function constants(){var x=a.makeConstList
F.Ul=new B.cE("file",16,C.aI,null)
F.Ur=new B.cE("grid",16,C.aK,null)
F.UJ=new B.cE("download",16,C.D,null)
F.UX=new S.e2("Reports","Network, cashier and store manager reports. Each has its own store, period and format filters, with PDF or Excel export.",C.b8,null)
F.WE=new B.ax(0,1/0,38,1/0)
F.mY=new B.a7(10,9,10,9)
F.a4c=new D.mL(5,4,5,4)
F.aIZ=x(["Store","City","Sales","Bills","Pending Requests","Low Stock"],y.s)
F.aJ_=x(["Store","City","Sales","Bills","Pending Requests","Low Stock"],y.b)
F.xp=new A.Jb("Network Report","Sales, bills, pending stock requests and low stock for every store or one store.","store",0,"network")
F.qD=new A.Jb("Cashier Report","Bills, returns and exchanges for one cashier, with shift timings and tender totals.","users",1,"cashier")
F.bgl=new A.Jb("Store Manager Report","Cash opening and closing summary for one store manager, with float and variance.","register",2,"manager")
F.aSz=x([F.xp,F.qD,F.bgl],B.G("m<Jb>"))
F.aTK=x(["STORE","CITY","SALES","BILLS","PENDING REQUESTS","LOW STOCK"],y.s)
F.aUl=x(["Register","Counter","Opened By","Opening","Cash Sales","Expected","Counted","Variance","Status"],y.b)
F.aWq=x(["REGISTER","COUNTER","OPENED BY","OPENING","CASH SALES","EXPECTED","COUNTED","VARIANCE","STATUS"],y.s)
F.bbt=new D.os(!0,null,null,null,null,null,E.bA,8,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"crP","c1k",()=>I.wi("FF182234"))
x($,"crK","c1h",()=>I.wi("FF1E3A8A"))
x($,"crI","c1g",()=>I.wi("FFF3F5FA"))
x($,"crM","c1i",()=>I.wi("FFE6E9F2"))})()};
(a=>{a["pSEa+LITjscwKXc3Vro1bHT4Vqo="]=a.current})($__dart_deferred_initializers__);