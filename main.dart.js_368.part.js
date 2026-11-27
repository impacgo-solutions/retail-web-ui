((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,L,M,O,G,N,I,P,Q,H,K,C={
awr(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return new C.Gf(!1,f,l,t,d,r,g,p,s,o,h,i,e,j,q,k,n)},
a0g(d){return A.F7(B.q.a4(d,2),A.aZ("(\\d)(?=(\\d\\d)+\\d\\.)",!0,!1,!1),new C.bKU(),null)},
ccc(d){var w=d.split("-")
if(w.length!==3)return d
return w[2]+"-"+w[1]+"-"+w[0]},
cd4(d){return d===B.q.e8(d)?B.t.j(B.q.aO(d)):B.q.j(d)},
c26(d){var w,v,u=A.a([],x.s)
if(d>=100){u.push(D.vN[B.t.bl(d,100)]+" Hundred")
d=B.t.aG(d,100)}if(d>=20){w=D.aXU[B.t.bl(d,10)]
v=B.t.aG(d,10)
u.push(w+(v>0?"-"+D.vN[v]:""))}else if(d>0)u.push(D.vN[d])
return B.e.av(u," ")},
cdD(d){var w,v,u,t,s,r,q=B.q.h5(d),p=B.q.al((d-q)*100)
if(q===0&&p===0)return"Rupees Zero Only"
w=A.a([],x.s)
for(v=[D.b7a,D.b7b,D.b7c],u=0;u<3;++u){t=v[u]
s=t.a
if(q>=s){w.push(C.c26(B.t.jN(q,s))+" "+t.b)
q=B.t.aG(q,s)}}if(q>0)w.push(C.c26(q))
r=B.e.av(w," ")
v=r.length===0?"Zero":r
t=p>0?" and "+C.c26(p)+" Paise":""
return"Rupees "+v+t+" Only"},
ccz(d){var w=B.h.kq(B.h.F(d),A.aZ("\\s+",!0,!1,!1)),v=A.al(w).i("ap<1>"),u=A.U(new A.ap(w,new C.bKm(),v),v.i("F.E"))
w=u.length
if(w===0)return"IR"
w=w===1?B.h.a0(B.e.gM(u),0,B.t.aK(B.e.gM(u).length,0,2)):u[0][0]+u[1][0]
return w.toUpperCase()},
cdN(d){var w=B.h.F(d.as.a)
if(w.length===0)w="the company"
return A.a(["Goods are sent on stock transfer between "+w+" locations. This is not a sale.","Check the quantity and condition of the goods on receipt and report any shortage or damage within 24 hours.","The goods remain the property of "+w+" while in transit.","This challan must travel with the goods, along with the e-way bill where one is required."],x.s)},
aqO(d,e){var w=null
A.bt(d,new C.a3B(e,w),A.a([A.N(w,!1,w,w,w,w,w,"Close",new C.bUG(d),B.C,B.al),A.N(w,!1,w,w,w,T.fg,w,"Download PDF",new C.bUH(e),B.C,B.a8)],x.p),"Delivery challan "+e.e,B.bF,x.z)},
om(d){var w=A.aR(d,"\xb7","-")
w=A.aR(w,"\u2014","-")
w=A.aR(w,"\u2013","-")
return A.aR(w,"\u20b9","Rs ")},
c25(d){var w,v,u,t,s,r=C.om(d.a),q=A.a([],x.s)
for(w=d.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.y)(w),++u){t=w[u]
s=A.aR(t,"\xb7","-")
s=A.aR(s,"\u2014","-")
s=A.aR(s,"\u2013","-")
q.push(A.aR(s,"\u20b9","Rs "))}return new C.lA(r,q,C.om(d.c),C.om(d.d))},
c2L(d){var w=0,v=A.t(x.E),u,t,s,r
var $async$c2L=A.o(function(e,f){if(e===1)return A.p(f,v)
for(;;)switch(w){case 0:s=C.om(B.e.gM(d).e)
r=E.Gm("Delivery challan "+s)
for(t=0;t<1;++t)C.cvb(r,d[t])
u=r.hQ(0)
w=1
break
case 1:return A.q(u,v)}})
return A.r($async$c2L,v)},
cvb(a2,a3){var w,v,u,t,s,r,q,p,o=null,n="-",m="Rs ",l=C.om(a3.e),k=C.om(a3.f),j=C.om(a3.w),i=C.om(a3.x),h=C.om(a3.y),g=C.om(a3.z),f=C.om(a3.Q),e=C.c25(a3.as),d=C.c25(a3.at),a0=C.c25(a3.ax),a1=A.a([],x.f)
for(w=a3.ay,v=w.length,u=0;u<w.length;w.length===v||(0,A.y)(w),++u){t=w[u]
s=A.aR(t.a,"\xb7",n)
s=A.aR(s,"\u2014",n)
s=A.aR(s,"\u2013",n)
s=A.aR(s,"\u20b9",m)
r=A.aR(t.b,"\xb7",n)
r=A.aR(r,"\u2014",n)
r=A.aR(r,"\u2013",n)
r=A.aR(r,"\u20b9",m)
q=A.aR(t.c,"\xb7",n)
q=A.aR(q,"\u2014",n)
q=A.aR(q,"\u2013",n)
q=A.aR(q,"\u20b9",m)
p=A.aR(t.e,"\xb7",n)
p=A.aR(p,"\u2014",n)
p=A.aR(p,"\u2013",n)
a1.push(new C.uc(s,r,q,t.d,A.aR(p,"\u20b9",m),t.f))}w=C.om(a3.c)
v=C.om(a3.d)
s=new C.bJ6()
r=new E.rg(D.NP,1,F.iX)
a2.uc(L.PL(new C.bJ2(C.awr(l,e,C.om(a3.b),a3.r,g,f,d,a1,w,!1,a3.ch,h,j,a0,k,i,v),s,E.atn(new E.Fx(r,r,r,r),o,o),new C.bJ3(s),new C.bJ4(s)),o,o,R.AU,F.k1))},
lA:function lA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uc:function uc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Gf:function Gf(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.ch=t},
aws:function aws(){},
awt:function awt(){},
bKU:function bKU(){},
bKm:function bKm(){},
a3B:function a3B(d,e){this.c=d
this.a=e},
aww:function aww(){},
awx:function awx(){},
awy:function awy(){},
awu:function awu(){},
awv:function awv(){},
bUG:function bUG(d){this.a=d},
bUH:function bUH(d){this.a=d},
bJ6:function bJ6(){},
bJ3:function bJ3(d){this.a=d},
bJ4:function bJ4(d){this.a=d},
bJ5:function bJ5(){},
bJ2:function bJ2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bJ1:function bJ1(){},
cdM(d){var w,v,u=d.c
u=B.h.F(u).length!==0?u:d.b
w=x.s
v=x.U
return new C.lA(u,A.a([new A.ap(A.a([d.e,d.f],w),new C.bPM(),v).av(0,", "),new A.ap(A.a([new A.ap(A.a([d.r,d.w],w),new C.bPN(),v).av(0,", "),d.x],w),new C.bPO(),v).av(0," - ")],w),d.d,"")},
c2J(d,e,f){var w=A.cB(J.b8(f,new C.bPn(d)))
if(w==null)return new C.lA(e,B.cq,"","")
return new C.lA(w.c+" \xb7 "+w.d,A.a([w.gIT(),w.gn8(0)],x.s),w.w,"")},
cc_(d){var w=A.aZ("\\d+$",!0,!1,!1).fa(d),v=w==null?null:w.b[0]
return"DC-"+(v==null?d:v)},
ccI(d){var w,v,u,t=A.a([],x.f)
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.y)(d),++v){u=d[v]
t.push(new C.uc(u.c,u.b,"",u.e,u.d,u.r))}return t},
bPM:function bPM(){},
bPN:function bPN(){},
bPO:function bPO(){},
bPn:function bPn(d){this.a=d},
jY(d){var w
if(typeof d=="number")w=d
else{w=S.e8(A.j(d))
if(w==null)w=0}return w},
c9n(d){var w,v,u,t=J.X(d),s=t.h(d,"item_id")
s=s==null?"":A.j(s)
w=t.h(d,"code")
w=w==null?"":A.j(w)
v=t.h(d,"name")
v=v==null?"":A.j(v)
u=t.h(d,"uom")
u=u==null?"":A.j(u)
return new C.tc(s,w,v,u,C.jY(t.h(d,"qty")),C.jY(t.h(d,"mrp")),C.jY(t.h(d,"cost")),C.jY(t.h(d,"value")))},
aS9(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=J.X(a3),a2=a1.h(a3,"id")
a2=a2==null?"":A.j(a2)
w=a1.h(a3,"entry_no")
w=w==null?"":A.j(w)
v=a1.h(a3,"warehouse_id")
v=v==null?"":A.j(v)
u=a1.h(a3,"warehouse")
u=u==null?"":A.j(u)
t=a1.h(a3,"entry_date")
t=t==null?"":A.j(t)
s=a1.h(a3,"source")
s=s==null?"":A.j(s)
A.B(a1.h(a3,"transfer_id"))
r=a1.h(a3,"transfer_no")
r=r==null?"":A.j(r)
q=a1.h(a3,"delivered_by")
q=q==null?"":A.j(q)
p=a1.h(a3,"delivered_phone")
p=p==null?"":A.j(p)
o=a1.h(a3,"vehicle_no")
o=o==null?"":A.j(o)
n=a1.h(a3,"reference_no")
n=n==null?"":A.j(n)
m=a1.h(a3,"received_by")
m=m==null?"":A.j(m)
l=a1.h(a3,"received_phone")
l=l==null?"":A.j(l)
k=a1.h(a3,"note")
k=k==null?"":A.j(k)
j=a1.h(a3,"status")
j=j==null?"":A.j(j)
i=a1.h(a3,"created_by")
i=i==null?"":A.j(i)
h=a1.h(a3,"created_at")
h=A.k4(h==null?"":A.j(h))
h=h==null?null:h.kf()
g=B.q.aO(C.jY(a1.h(a3,"items")))
f=C.jY(a1.h(a3,"qty"))
e=C.jY(a1.h(a3,"value"))
d=A.a([],x.w)
a1=x.g.a(a1.h(a3,"lines"))
a1=J.a0(a1==null?B.ah:a1)
a0=x.P
while(a1.n())d.push(C.c9n(a0.a(a1.gB(a1))))
return new C.hl(a2,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d)},
aSe(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.X(a2),a1=a0.h(a2,"id")
a1=a1==null?"":A.j(a1)
w=a0.h(a2,"no")
w=w==null?"":A.j(w)
v=a0.h(a2,"date")
v=v==null?"":A.j(v)
u=a0.h(a2,"from_warehouse_id")
u=u==null?"":A.j(u)
t=a0.h(a2,"from_name")
t=t==null?"":A.j(t)
s=a0.h(a2,"to_warehouse_id")
s=s==null?"":A.j(s)
r=a0.h(a2,"to_name")
r=r==null?"":A.j(r)
q=a0.h(a2,"status")
q=q==null?"":A.j(q)
p=a0.h(a2,"delivered_by")
p=p==null?"":A.j(p)
o=a0.h(a2,"delivered_phone")
o=o==null?"":A.j(o)
n=a0.h(a2,"vehicle_no")
n=n==null?"":A.j(n)
m=a0.h(a2,"note")
m=m==null?"":A.j(m)
l=a0.h(a2,"received_by")
l=l==null?"":A.j(l)
k=a0.h(a2,"received_phone")
k=k==null?"":A.j(k)
j=a0.h(a2,"received_at")
j=A.k4(j==null?"":A.j(j))
j=j==null?null:j.kf()
i=a0.h(a2,"created_by")
i=i==null?"":A.j(i)
h=B.q.aO(C.jY(a0.h(a2,"items")))
g=C.jY(a0.h(a2,"qty"))
f=C.jY(a0.h(a2,"value"))
e=A.a([],x.w)
a0=x.g.a(a0.h(a2,"lines"))
a0=J.a0(a0==null?B.ah:a0)
d=x.P
while(a0.n())e.push(C.c9n(d.a(a0.gB(a0))))
return new C.fK(a1,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e)},
tc:function tc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hl:function hl(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.w=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.as=o
_.at=p
_.ax=q
_.ay=r
_.ch=s
_.CW=t
_.cx=u
_.cy=v
_.db=w
_.dx=a0},
fK:function fK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
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
_.cx=v
_.cy=w},
IH:function IH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
IJ:function IJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aS8:function aS8(){},
a8e:function a8e(d,e){this.a=d
this.b=e},
ati:function ati(){},
ath:function ath(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,R,S,T
J=c[1]
A=c[0]
B=c[2]
E=c[106]
F=c[217]
L=c[100]
M=c[233]
O=c[107]
G=c[99]
N=c[95]
I=c[265]
P=c[98]
Q=c[149]
H=c[234]
K=c[235]
C=a.updateHolder(c[71],C)
D=c[191]
R=c[242]
S=c[126]
T=c[255]
C.lA.prototype={}
C.uc.prototype={}
C.Gf.prototype={
gaiV(){return B.e.bd(this.ay,0,new C.aws())},
gNF(){return B.e.bd(this.ay,0,new C.awt())}}
C.a3B.prototype={
H(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c,k=new C.aww(),j=new C.awx(),i=new C.awu(),h=new A.a_(m,m,A.aW(D.l0,B.K,1),m,m,m,B.F),g=x.p,f=A.a([],g)
if(!l.ch)f.push(A.S(m,A.e(y.d,m,m,m,m,m,A.b5(m,m,D.a2b,m,m,m,m,m,m,m,m,12,m,m,B.n,m,1.35,!0,m,m,m,m,m,m,m,m),m,m),B.y,D.a29,m,m,m,m,m,Q.e0,B.fr,m,m,1/0))
w=A.as(8)
v=l.as
u=v.a
w=A.S(B.ak,A.e(C.ccz(u),m,m,m,m,m,A.b5(m,m,B.J,m,m,m,m,m,m,m,m,20,m,m,B.a4,m,1.35,!0,m,m,m,m,m,m,m,m),m,m),B.y,m,m,new A.a_(D.A3,m,m,w,m,m,B.F),m,56,m,m,m,m,m,56)
u=A.a([A.e(u,m,m,m,m,m,A.b5(m,m,B.r,m,m,m,m,m,m,m,m,18,m,m,B.a4,m,1.35,!0,m,m,m,m,m,m,m,m),m,m)],g)
for(t=v.b,s=B.e.gW(t),t=new A.f1(s,new C.awv(),A.al(t).i("f1<1>"));t.n();){r=s.gB(0)
u.push(A.e(r,m,m,m,m,m,new A.z(!0,B.T,m,m,m,m,12,B.n,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m))}v=v.c
if(v.length!==0)u.push(A.e("GSTIN "+v,m,m,m,m,m,A.b5(m,m,B.T,m,m,m,m,m,m,m,m,12,m,m,B.n,m,1.35,!0,m,m,m,m,m,m,m,m),m,m))
v=A.aC(A.I(u,B.A,m,B.o,B.u),1)
u=A.e("DELIVERY CHALLAN",m,m,m,m,m,A.b5(m,m,B.r,m,m,m,m,m,m,m,m,20,m,m,B.a4,m,1.35,!0,m,m,m,m,m,m,m,m),m,m)
f.push(A.V(A.a([w,B.iB,v,A.I(A.a([u,A.e("Stock transfer \xb7 Original for recipient",m,m,m,m,m,A.b5(m,m,B.T,m,m,m,m,m,m,m,m,12,m,m,B.n,m,1.35,!0,m,m,m,m,m,m,m,m),m,m)],g),B.cj,m,B.o,B.u)],g),B.A,B.o,B.u))
f.push(B.au)
f.push(A.S(m,m,B.y,B.r,m,m,m,2,m,m,m,m,m,m))
f.push(A.S(m,new A.rG(A.V(A.a([A.aC(new A.a4(B.c8,A.I(A.a([k.$2("Challan No.",l.e),k.$2("Challan Date",C.ccc(l.r)),k.$2("Time",l.w),k.$2(l.c,l.f)],g),B.A,m,B.o,B.u),m),1),A.S(m,m,B.y,D.l0,m,m,m,m,m,m,m,m,m,1),A.aC(new A.a4(B.c8,A.I(A.a([k.$2(l.d,l.x),k.$2("Delivery person",l.z),k.$2("Contact",l.Q),k.$2("Status",l.y)],g),B.A,m,B.o,B.u),m),1)],g),B.ai,B.o,B.u),m),B.y,m,m,h,m,m,m,m,m,m,m,m))
f.push(A.S(m,new A.rG(A.V(A.a([j.$2("DISPATCH FROM",l.at),A.S(m,m,B.y,D.l0,m,m,m,m,m,m,m,m,m,1),j.$2("SHIP TO",l.ax)],g),B.ai,B.o,B.u),m),B.y,m,m,D.XS,m,m,m,m,m,m,m,m))
f.push(B.au)
w=A.a([A.S(m,A.V(A.a([i.$2$head("#",!0),i.$3$flex$head("ITEM",5,!0),i.$3$flex$head("HSN",2,!0),i.$4$flex$head$right("QTY",2,!0,!0),i.$4$flex$head$right("RATE",2,!0,!0),i.$4$flex$head$right("VALUE",2,!0,!0)],g),B.B,B.o,B.u),B.y,D.a_c,m,m,m,m,m,m,m,m,m,m)],g)
for(v=l.ay,q=0;q<v.length;q=p){p=q+1
u=i.$1(""+p)
t=v[q]
s=A.e(t.a,m,m,m,m,m,new A.z(!0,B.r,m,m,m,m,12,B.n,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m)
t=A.I(A.a([s,A.e(t.b,m,m,m,m,m,new A.z(!0,B.T,m,m,m,m,11,B.n,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m)],g),B.A,m,B.o,B.u)
s=v[q].c
s=i.$2$flex(s.length===0?"\u2014":s,2)
r=v[q].d
r=r===B.q.e8(r)?B.t.j(B.q.aO(r)):B.q.j(r)
r=i.$3$flex$right(B.h.F(r+" "+v[q].e),2,!0)
o=i.$3$flex$right(C.a0g(v[q].f),2,!0)
n=v[q]
w.push(A.S(m,A.V(A.a([u,new A.d4(5,B.b5,new A.a4(D.B1,t,m),m),s,r,o,i.$3$flex$right(C.a0g(n.d*n.f),2,!0)],g),B.A,B.o,B.u),B.y,m,m,D.yR,m,m,m,m,m,m,m,m))}w.push(A.S(m,new A.rG(A.V(A.a([A.aC(new A.a4(B.c8,A.I(A.a([A.e("VALUE IN WORDS",m,m,m,m,m,A.b5(m,m,B.T,m,m,m,m,m,m,m,m,11,m,m,B.H,m,1.35,!0,m,m,m,m,m,m,m,m),m,m),B.bI,A.e(C.cdD(l.gNF()),m,m,m,m,m,A.b5(m,m,B.r,m,m,m,m,m,m,m,m,13,m,m,B.H,m,1.35,!0,m,m,m,m,m,m,m,m),m,m)],g),B.A,m,B.o,B.u),m),3),A.S(m,m,B.y,D.l0,m,m,m,m,m,m,m,m,m,1),A.aC(new A.a4(B.c8,A.I(A.a([A.V(A.a([A.aC(A.e("Total quantity",m,m,m,m,m,A.b5(m,m,B.r,m,m,m,m,m,m,m,m,12,m,m,B.n,m,1.35,!0,m,m,m,m,m,m,m,m),m,m),1),A.e(C.cd4(l.gaiV()),m,m,m,m,m,A.b5(m,m,B.r,m,m,m,m,m,m,m,m,12,m,m,B.n,m,1.35,!0,m,m,m,m,m,m,m,m),m,m)],g),B.B,B.o,B.u),B.aL,A.S(m,m,B.y,B.r,m,m,m,1,m,m,m,m,m,m),B.aL,A.V(A.a([A.aC(A.e("Total value",m,m,m,m,m,A.b5(m,m,B.r,m,m,m,m,m,m,m,m,14,m,m,B.a4,m,1.35,!0,m,m,m,m,m,m,m,m),m,m),1),A.e("Rs. "+C.a0g(l.gNF()),m,m,m,m,m,A.b5(m,m,B.r,m,m,m,m,m,m,m,m,14,m,m,B.a4,m,1.35,!0,m,m,m,m,m,m,m,m),m,m)],g),B.B,B.o,B.u)],g),B.B,m,B.o,B.u),m),2)],g),B.ai,B.o,B.u),m),B.y,m,m,D.yR,m,m,m,m,m,m,m,m))
f.push(A.S(m,A.I(w,B.B,m,B.o,B.u),B.y,m,m,h,m,m,m,m,m,m,m,m))
f.push(B.aT)
f.push(A.e("TERMS",m,m,m,m,m,A.b5(m,m,D.A3,m,m,m,m,m,m,m,m,11,m,m,B.H,m,1.35,!0,m,m,m,m,m,m,m,m),m,m))
w=l.b
if(w.length!==0)B.e.u(f,A.a([B.aW,A.e(w,m,m,m,m,m,A.b5(m,m,B.r,m,m,m,m,m,m,m,m,13,m,m,B.a4,m,1.35,!0,m,m,m,m,m,m,m,m),m,m)],g))
for(g=A.c01(C.cdN(l),0,x.N),w=J.a0(g.a),v=g.b,g=new A.rF(w,v,A.w(g).i("rF<1>"));g.n();){u=g.c
u=u>=0?new A.aF(v+u,w.gB(w)):A.a1(A.dv())
f.push(A.e(""+(u.a+1)+". "+u.b,m,m,m,m,m,new A.z(!0,B.T,m,m,m,m,12,B.n,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m))}return A.S(m,A.I(f,B.A,m,B.o,B.u),B.y,B.J,m,m,m,m,m,m,B.jq,m,m,m)}}
C.tc.prototype={}
C.hl.prototype={
gFk(){var w,v=this.f
A:{if("transfer"===v){w=this.w
w=w.length===0?"Transfer":"Transfer "+w
break A}if("production"===v){w="Production"
break A}w="Other"
break A}return w}}
C.fK.prototype={}
C.IH.prototype={}
C.IJ.prototype={}
C.aS8.prototype={
LV(d,e){return this.aZS(d,e)},
aZS(d,e){var w=0,v=A.t(x.G),u,t,s,r,q
var $async$LV=A.o(function(f,g){if(f===1)return A.p(g,v)
for(;;)switch(w){case 0:w=3
return A.h(B.S.cQ("/stock-in"+(e.length===0?"":"?warehouse_id="+e),d),$async$LV)
case 3:r=g
q=A.a([],x.x)
for(t=J.a0(r),s=x.P;t.n();)q.push(C.aS9(s.a(t.gB(t))))
u=q
w=1
break
case 1:return A.q(u,v)}})
return A.r($async$LV,v)},
KJ(d,e){return this.aW3(d,e)},
aW3(d,e){var w=0,v=A.t(x.L),u,t,s
var $async$KJ=A.o(function(f,g){if(f===1)return A.p(g,v)
for(;;)switch(w){case 0:w=3
return A.h(B.S.bK(0,"/stock-in/stats"+(e.length===0?"":"?warehouse_id="+e),d),$async$KJ)
case 3:t=g
s=J.X(t)
u=new C.IH(B.q.aO(C.jY(s.h(t,"entries"))),C.jY(s.h(t,"units")),B.q.aO(C.jY(s.h(t,"items"))),B.q.aO(C.jY(s.h(t,"pending_transfers"))))
w=1
break
case 1:return A.q(u,v)}})
return A.r($async$KJ,v)},
MH(d,e){return this.b2B(d,e)},
b2B(d,e){var w=0,v=A.t(x.r),u,t,s,r,q
var $async$MH=A.o(function(f,g){if(f===1)return A.p(g,v)
for(;;)switch(w){case 0:w=3
return A.h(B.S.cQ("/stock-in/pending-transfers"+(e.length===0?"":"?warehouse_id="+e),d),$async$MH)
case 3:r=g
q=A.a([],x.F)
for(t=J.a0(r),s=x.P;t.n();)q.push(C.aSe(s.a(t.gB(t))))
u=q
w=1
break
case 1:return A.q(u,v)}})
return A.r($async$MH,v)},
a3Y(d,e,f,g,h,i,j,k,l,m,n){return A.av(["warehouse_id",n,"entry_date",d,"source",l,"delivered_by",e,"delivered_phone",f,"vehicle_no",m,"reference_no",k,"received_by",i,"received_phone",j,"note",h,"lines",g],x.N,x.z)},
JM(d,e,f,g,h,i,j,k,l,m,n,o){return this.aU_(d,e,f,g,h,i,j,k,l,m,n,o)},
aU_(d,e,f,g,h,i,j,k,l,m,n,o){var w=0,v=A.t(x.e),u,t=this,s
var $async$JM=A.o(function(p,q){if(p===1)return A.p(q,v)
for(;;)switch(w){case 0:s=C
w=3
return A.h(B.S.bs("/stock-in",t.a3Y(d,e,f,g,h,i,j,k,l,n,o),m),$async$JM)
case 3:u=s.aS9(q)
w=1
break
case 1:return A.q(u,v)}})
return A.r($async$JM,v)},
NZ(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.b56(d,e,f,g,h,i,j,k,l,m,n,o,p)},
b56(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=0,v=A.t(x.e),u,t=this,s
var $async$NZ=A.o(function(q,r){if(q===1)return A.p(r,v)
for(;;)switch(w){case 0:s=C
w=3
return A.h(B.S.fW(0,"/stock-in/"+g,t.a3Y(d,e,f,h,i,j,k,l,m,o,p),n),$async$NZ)
case 3:u=s.aS9(r)
w=1
break
case 1:return A.q(u,v)}})
return A.r($async$NZ,v)},
N3(d,e,f,g,h){return this.b3u(d,e,f,g,h)},
b3u(d,e,f,g,h){var w=0,v=A.t(x.e),u,t
var $async$N3=A.o(function(i,j){if(i===1)return A.p(j,v)
for(;;)switch(w){case 0:t=C
w=3
return A.h(B.S.bs("/stock-in/receive-transfer/"+h,A.av(["received_by",e,"received_phone",f,"note",d],x.N,x.z),g),$async$N3)
case 3:u=t.aS9(j)
w=1
break
case 1:return A.q(u,v)}})
return A.r($async$N3,v)},
Dt(d,e){return this.b_h(d,e)},
b_g(d){return this.Dt(d,"")},
b_h(d,e){var w=0,v=A.t(x.r),u,t,s,r,q
var $async$Dt=A.o(function(f,g){if(f===1)return A.p(g,v)
for(;;)switch(w){case 0:w=3
return A.h(B.S.cQ("/stock-out"+(e.length===0?"":"?warehouse_id="+e),d),$async$Dt)
case 3:r=g
q=A.a([],x.F)
for(t=J.a0(r),s=x.P;t.n();)q.push(C.aSe(s.a(t.gB(t))))
u=q
w=1
break
case 1:return A.q(u,v)}})
return A.r($async$Dt,v)},
Fo(d,e){return this.anc(d,e)},
anc(d,e){var w=0,v=A.t(x.A),u,t,s
var $async$Fo=A.o(function(f,g){if(f===1)return A.p(g,v)
for(;;)switch(w){case 0:w=3
return A.h(B.S.bK(0,"/stock-out/stats"+(e.length===0?"":"?warehouse_id="+e),d),$async$Fo)
case 3:t=g
s=J.X(t)
u=new C.IJ(B.q.aO(C.jY(s.h(t,"transfers"))),C.jY(s.h(t,"units_sent")),C.jY(s.h(t,"in_transit")),C.jY(s.h(t,"received")),B.q.aO(C.jY(s.h(t,"in_transit_transfers"))),B.q.aO(C.jY(s.h(t,"received_transfers"))))
w=1
break
case 1:return A.q(u,v)}})
return A.r($async$Fo,v)},
JV(d,e,f,g,h,i,j,k,l){return this.aUc(d,e,f,g,h,i,j,k,l)},
aUc(d,e,f,g,h,i,j,k,l){var w=0,v=A.t(x.l),u,t
var $async$JV=A.o(function(m,n){if(m===1)return A.p(n,v)
for(;;)switch(w){case 0:t=C
w=3
return A.h(B.S.bs("/stock-out",A.av(["from_warehouse_id",g,"to_warehouse_id",j,"transfer_date",d,"delivered_by",e,"delivered_phone",f,"vehicle_no",l,"note",i,"lines",h],x.N,x.z),k),$async$JV)
case 3:u=t.aSe(n)
w=1
break
case 1:return A.q(u,v)}})
return A.r($async$JV,v)},
NX(d,e,f,g,h,i){return this.b53(d,e,f,g,h,i)},
b53(d,e,f,g,h,i){var w=0,v=A.t(x.l),u,t
var $async$NX=A.o(function(j,k){if(j===1)return A.p(k,v)
for(;;)switch(w){case 0:t=C
w=3
return A.h(B.S.fW(0,"/stock-out/"+f,A.av(["delivered_by",d,"delivered_phone",e,"vehicle_no",i,"note",g],x.N,x.z),h),$async$NX)
case 3:u=t.aSe(k)
w=1
break
case 1:return A.q(u,v)}})
return A.r($async$NX,v)}}
C.a8e.prototype={}
C.ati.prototype={
j(d){var w,v,u,t=this,s="BorderRadius.only(",r=t.a,q=t.b
if(r===q){w=t.c
w=q===w&&w===t.d}else w=!1
if(w)if(r!==D.m7){q=r.a
v=q===r.b?"BorderRadius.circular("+B.t.a4(q,1)+")":"BorderRadius.all("+r.j(0)+")"}else v=null
else{u=r!==D.m7
r=u?s+("topLeft: "+r.j(0)):s
if(q!==D.m7){if(u)r+=", "
q=r+("topRight: "+q.j(0))
r=q
u=!0}q=t.c
if(q!==D.m7){if(u)r+=", "
q=r+("bottomLeft: "+q.j(0))
r=q
u=!0}q=t.d
if(q!==D.m7){if(u)r+=", "
q=r+("bottomRight: "+q.j(0))
r=q}r+=")"
v=r.charCodeAt(0)==0?r:r}if(v!=null)return v
return"BorderRadius.zero"}}
C.ath.prototype={
aP(d,e){var w,v,u,t,s=this,r=d.b,q=e.a,p=e.b,o=s.c,n=o.b,m=p+n
r.kN(0,q,m)
o=o.a
r.rb(q,p-0.551784*n+n,q-0.551784*o+o,p,q+o,p)
o=e.c
n=q+o
w=s.d
v=w.a
r.jx(0,n-v,p)
w=w.b
r.rb(q+0.551784*v+o-v,p,n,p-0.551784*w+w,n,p+w)
w=e.d
v=p+w
u=s.b
t=u.b
r.jx(0,n,v-t)
u=u.a
r.rb(n,p+0.551784*t+w-t,q+0.551784*u+o-u,v,n-u,v)
u=s.a
n=u.a
r.jx(0,q+n,v)
u=u.b
r.rb(q-0.551784*n+n,v,q,p+0.551784*u+w-u,q,v-u)
r.jx(0,q,m)},
aj(d){return this}}
var z=a.updateTypes(["aL(aL,uc)","f(c,lA)","kQ(a7{bold:x,c:iE})","cJ(c,c)","cJ(c,lA)","i<cJ>(ia)"])
C.aws.prototype={
$2(d,e){return d+e.d},
$S:z+0}
C.awt.prototype={
$2(d,e){return d+e.d*e.f},
$S:z+0}
C.bKU.prototype={
$1(d){return A.j(d.h(0,1))+","},
$S:77}
C.bKm.prototype={
$1(d){return d.length!==0},
$S:7}
C.aww.prototype={
$2(d,e){var w=null,v=A.aQ(A.e(d,w,w,w,w,w,A.b5(w,w,B.T,w,w,w,w,w,w,w,w,12,w,w,B.n,w,1.35,!0,w,w,w,w,w,w,w,w),w,w),w,120),u=e.length===0?"\u2014":e
return new A.a4(D.a3X,A.V(A.a([v,A.aC(A.e(u,w,w,w,w,w,A.b5(w,w,B.r,w,w,w,w,w,w,w,w,12,w,w,B.H,w,1.35,!0,w,w,w,w,w,w,w,w),w,w),1)],x.p),B.A,B.o,B.u),w)},
$S:1038}
C.awx.prototype={
$2(d,e){var w,v,u,t=null,s=A.a([A.e(d,t,t,t,t,t,A.b5(t,t,B.T,t,t,t,t,t,t,t,t,11,t,t,B.H,t,1.35,!0,t,t,t,t,t,t,t,t),t,t),B.bI,A.e(e.a,t,t,t,t,t,A.b5(t,t,B.r,t,t,t,t,t,t,t,t,14,t,t,B.a4,t,1.35,!0,t,t,t,t,t,t,t,t),t,t)],x.p)
for(w=e.b,v=B.e.gW(w),w=new A.f1(v,new C.awy(),A.al(w).i("f1<1>"));w.n();){u=v.gB(0)
s.push(A.e(u,t,t,t,t,t,new A.z(!0,B.r,t,t,t,t,12,B.n,t,t,t,t,1.35,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t))}w=e.c
if(w.length!==0)s.push(A.e("GSTIN "+w,t,t,t,t,t,A.b5(t,t,B.r,t,t,t,t,t,t,t,t,12,t,t,B.n,t,1.35,!0,t,t,t,t,t,t,t,t),t,t))
w=e.d
if(w.length!==0)s.push(A.e("Phone "+w,t,t,t,t,t,A.b5(t,t,B.r,t,t,t,t,t,t,t,t,12,t,t,B.n,t,1.35,!0,t,t,t,t,t,t,t,t),t,t))
return A.aC(new A.a4(B.c8,A.I(s,B.A,t,B.o,B.u),t),1)},
$S:z+1}
C.awy.prototype={
$1(d){return B.h.F(d).length!==0},
$S:7}
C.awu.prototype={
$4$flex$head$right(d,e,f,g){var w=null,v=g?B.bJ:B.cg
return A.aC(new A.a4(D.B1,A.e(d,w,w,w,w,w,f?A.b5(w,w,B.T,w,w,w,w,w,w,w,w,11,w,w,B.H,w,1.35,!0,w,w,w,w,w,w,w,w):A.b5(w,w,B.r,w,w,w,w,w,w,w,w,12,w,w,B.n,w,1.35,!0,w,w,w,w,w,w,w,w),v,w),w),e)},
$1(d){return this.$4$flex$head$right(d,1,!1,!1)},
$2$head(d,e){return this.$4$flex$head$right(d,1,e,!1)},
$3$flex$head(d,e,f){return this.$4$flex$head$right(d,e,f,!1)},
$2$flex(d,e){return this.$4$flex$head$right(d,e,!1,!1)},
$3$flex$right(d,e,f){return this.$4$flex$head$right(d,e,!1,f)},
$2$right(d,e){return this.$4$flex$head$right(d,1,!1,e)},
$S:1039}
C.awv.prototype={
$1(d){return B.h.F(d).length!==0},
$S:7}
C.bUG.prototype={
$0(){return A.ao(this.a,!0).S()},
$S:0}
C.bUH.prototype={
$0(){var w=0,v=A.t(x.n),u=this,t,s,r
var $async$$0=A.o(function(d,e){if(d===1)return A.p(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.h(C.c2L(A.a([t],x.b)),$async$$0)
case 2:s=e
r=A.aZ("[^A-Za-z0-9-]",!0,!1,!1)
O.qY("Delivery_Challan_"+A.aR(t.e,r,"-")+".pdf",s,"application/pdf")
return A.q(null,v)}})
return A.r($async$$0,v)},
$S:2}
C.bJ6.prototype={
$3$bold$c(d,e,f){var w=null
return E.f0(w,f,w,w,w,w,w,w,w,F.bj,w,w,d,w,e?F.bB:F.uM,w,!0,w,w,w,w)},
$1(d){return this.$3$bold$c(d,!1,D.qi)},
$2$c(d,e){return this.$3$bold$c(d,!1,e)},
$2$bold(d,e){return this.$3$bold$c(d,e,D.qi)},
$S:z+2}
C.bJ3.prototype={
$2(d,e){var w=null,v=this.a,u=E.bV(d,v.$2$c(9,D.hw),w,w),t=e.length===0?"-":e
return new E.kb(D.a3W,E.kf(A.a([new E.cR(90,w,u),new G.hr(1,F.cG,E.bV(t,v.$2$bold(9,!0),w,w))],x.H),F.c7,F.e3))},
$S:z+3}
C.bJ4.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([E.bV(d,t.$3$bold$c(8,!0,D.hw),u,u),new E.cR(u,2,u),E.bV(e.a,t.$2$bold(11,!0),u,u)],x.H)
for(w=e.b,v=B.e.gW(w),w=new A.f1(v,new C.bJ5(),A.al(w).i("f1<1>"));w.n();)s.push(E.bV(v.gB(0),t.$1(9),u,u))
w=e.c
if(w.length!==0)s.push(E.bV("GSTIN "+w,t.$1(9),u,u))
w=e.d
if(w.length!==0)s.push(E.bV("Phone "+w,t.$1(9),u,u))
return new G.hr(1,F.cG,new E.kb(D.lj,G.iR(s,F.c7)))},
$S:z+4}
C.bJ5.prototype={
$1(d){return B.h.F(d).length!==0},
$S:7}
C.bJ2.prototype={
$1(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=x.H,a0=A.a([],d),a1=f.a
if(!a1.ch)a0.push(E.rq(e,E.bV(y.d,f.b.$2$c(9,D.b5O),e,e),D.b5P,e,e,e,D.a3Y,D.a5x,1/0))
w=new C.a8e(6,6)
w=E.atn(e,new C.ath(w,w,w,w),D.NN)
v=a1.as
u=v.a
t=f.b
w=E.rq(F.mJ,E.bV(C.ccz(u),t.$3$bold$c(16,!0,M.k0),e,e),e,e,w,44,e,e,44)
u=A.a([E.bV(u,t.$2$bold(14,!0),e,e)],d)
for(s=v.b,r=B.e.gW(s),s=new A.f1(r,new C.bJ1(),A.al(s).i("f1<1>"));s.n();)u.push(E.bV(r.gB(0),t.$2$c(9,D.hw),e,e))
v=v.c
if(v.length!==0)u.push(E.bV("GSTIN "+v,t.$2$c(9,D.hw),e,e))
v=G.iR(u,F.c7)
u=E.bV("DELIVERY CHALLAN",t.$2$bold(16,!0),e,e)
a0.push(E.kf(A.a([w,new E.cR(10,e,e),new G.hr(1,F.cG,v),G.iR(A.a([u,E.bV("Stock transfer - Original for recipient",t.$2$c(9,D.hw),e,e)],d),F.Aj)],d),F.c7,F.e3))
a0.push(new E.cR(e,10,e))
a0.push(E.rq(e,e,D.qi,e,e,1.5,e,e,e))
w=f.c
v=f.d
a0.push(E.rq(e,E.kf(A.a([new G.hr(1,F.cG,new E.kb(D.lj,G.iR(A.a([v.$2("Challan No.",a1.e),v.$2("Challan Date",C.ccc(a1.r)),v.$2("Time",a1.w),v.$2(a1.c,a1.f)],d),F.es))),new G.hr(1,F.cG,new E.kb(D.lj,G.iR(A.a([v.$2(a1.d,a1.x),v.$2("Delivery person",a1.z),v.$2("Contact",a1.Q),v.$2("Status",a1.y)],d),F.es)))],d),F.c7,F.e3),e,e,w,e,e,e,e))
v=f.e
a0.push(E.rq(e,E.kf(A.a([v.$2("DISPATCH FROM",a1.at),v.$2("SHIP TO",a1.ax)],d),F.c7,F.e3),e,e,w,e,e,e,e))
a0.push(new E.cR(e,10,e))
v=N.aSV(D.NP,1)
u=t.$3$bold$c(8,!0,D.hw)
s=t.$1(9)
r=x.S
q=A.av([0,D.aaf,1,D.aak,2,I.i8,3,I.i8,4,I.i8,5,I.i8],r,x.m)
p=x.D
o=A.av([3,H.fF,4,H.fF,5,H.fF],r,p)
p=A.av([0,K.kE,1,K.kE,2,K.kE,3,H.fF,4,H.fF,5,H.fF],r,p)
r=A.a([],x.t)
for(n=a1.ay,m=0;m<n.length;m=l){l=m+1
k=n[m]
j=k.c
if(j.length===0)j="-"
i=k.d
i=i===B.q.e8(i)?B.t.j(B.q.aO(i)):B.q.j(i)
h=n[m]
i=B.h.F(i+" "+h.e)
h=C.a0g(h.f)
g=n[m]
r.push([""+l,k.a+" ("+k.b+")",j,i,h,C.a0g(g.d*g.f)])}a0.push(L.Ta(v,o,e,M.AX,s,q,r,p,1,D.Y1,u,["#","ITEM","HSN","QTY","RATE","VALUE"]))
a0.push(E.rq(e,E.kf(A.a([new G.hr(3,F.cG,new E.kb(D.lj,G.iR(A.a([E.bV("VALUE IN WORDS",t.$3$bold$c(8,!0,D.hw),e,e),new E.cR(e,2,e),E.bV(C.cdD(a1.gNF()),t.$2$bold(10,!0),e,e)],d),F.c7))),new G.hr(2,F.cG,new E.kb(D.lj,G.iR(A.a([E.kf(A.a([new G.hr(1,F.cG,E.bV("Total quantity",t.$1(9),e,e)),E.bV(C.cd4(a1.gaiV()),t.$1(9),e,e)],d),F.es,F.e3),new E.cR(e,4,e),E.rq(e,e,D.qi,e,e,1,e,e,e),new E.cR(e,4,e),E.kf(A.a([new G.hr(1,F.cG,E.bV("Total value",t.$2$bold(11,!0),e,e)),E.bV("Rs. "+C.a0g(a1.gNF()),t.$2$bold(11,!0),e,e)],d),F.es,F.e3)],d),F.es)))],d),F.c7,F.e3),e,e,w,e,e,e,e))
w=a1.b
if(w.length!==0)B.e.u(a0,A.a([new E.cR(e,8,e),E.bV(w,t.$2$bold(10,!0),e,e)],d))
a0.push(new E.cR(e,12,e))
a0.push(E.bV("TERMS",t.$3$bold$c(8,!0,D.NN),e,e))
for(d=A.c01(C.cdN(a1),0,x.N),a1=J.a0(d.a),w=d.b,d=new A.rF(a1,w,A.w(d).i("rF<1>"));d.n();){v=d.c
v=v>=0?new A.aF(w+v,a1.gB(a1)):A.a1(A.dv())
a0.push(E.bV(""+(v.a+1)+". "+v.b,t.$2$c(9,D.hw),e,e))}return a0},
$S:z+5}
C.bJ1.prototype={
$1(d){return B.h.F(d).length!==0},
$S:7}
C.bPM.prototype={
$1(d){return B.h.F(d).length!==0},
$S:7}
C.bPN.prototype={
$1(d){return B.h.F(d).length!==0},
$S:7}
C.bPO.prototype={
$1(d){return B.h.F(d).length!==0},
$S:7}
C.bPn.prototype={
$1(d){return d.a===this.a},
$S:134};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.P,[C.lA,C.uc,C.Gf,C.tc,C.hl,C.fK,C.IH,C.IJ,C.aS8,C.a8e,C.ati])
w(A.cU,[C.aws,C.awt,C.aww,C.awx,C.bJ3,C.bJ4])
w(A.bN,[C.bKU,C.bKm,C.awy,C.awu,C.awv,C.bJ6,C.bJ5,C.bJ2,C.bJ1,C.bPM,C.bPN,C.bPO,C.bPn])
v(C.a3B,A.at)
w(A.cA,[C.bUG,C.bUH])
v(C.ath,C.ati)})()
A.bJ(b.typeUniverse,JSON.parse('{"a3B":{"at":[],"f":[]}}'))
var y={d:"Preview only: this transfer was not saved, so the challan has no number yet."}
var x=(function rtii(){var w=A.H
return{D:w("AI"),f:w("l<uc>"),b:w("l<Gf>"),t:w("l<i<@>>"),x:w("l<hl>"),w:w("l<tc>"),F:w("l<fK>"),s:w("l<c>"),p:w("l<f>"),H:w("l<cJ>"),G:w("i<hl>"),r:w("i<fK>"),P:w("aA<c,@>"),e:w("hl"),L:w("IH"),A:w("IJ"),l:w("fK"),N:w("c"),m:w("o5"),E:w("fW"),U:w("ap<c>"),z:w("@"),S:w("v"),g:w("i<@>?"),n:w("~")}})();(function constants(){var w=a.makeConstList
D.l0=new A.W(1,0.8352941176470589,0.8549019607843137,0.8980392156862745,B.M)
D.mT=new A.aK(D.l0,1,B.K,-1)
D.Xp=new A.bK(B.N,D.mT,D.mT,D.mT)
D.XS=new A.a_(null,null,D.Xp,null,null,null,B.F)
D.Xn=new A.bK(D.mT,B.N,B.N,B.N)
D.yR=new A.a_(null,null,D.Xn,null,null,null,B.F)
D.b5L=new E.iE(0.9490196078431372,0.9607843137254902,0.984313725490196)
D.Y1=new E.rh(D.b5L,null,null)
D.f_=new C.aS8()
D.a_c=new A.W(1,0.9490196078431372,0.9607843137254902,0.984313725490196,B.M)
D.a29=new A.W(1,1,0.9568627450980393,0.8784313725490196,B.M)
D.a2b=new A.W(1,0.6039215686274509,0.3568627450980392,0,B.M)
D.A3=new A.W(1,0.1843137254901961,0.3568627450980392,0.9176470588235294,B.M)
D.a3W=new E.iV(0,0,0,2)
D.a3X=new A.ad(0,0,0,3)
D.a3Y=new E.iV(0,0,0,8)
D.a5x=new E.iV(6,6,6,6)
D.B1=new A.ad(8,7,8,7)
D.lj=new E.iV(8,8,8,8)
D.aaf=new N.rz(22)
D.aak=new P.BF(5)
D.vN=w(["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],x.s)
D.aXU=w(["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],x.s)
D.NN=new E.iE(0.1843137254901961,0.3568627450980392,0.9176470588235294)
D.hw=new E.iE(0.3568627450980392,0.39215686274509803,0.47058823529411764)
D.b5O=new E.iE(0.6039215686274509,0.3568627450980392,0)
D.b5P=new E.iE(1,0.9568627450980393,0.8784313725490196)
D.NP=new E.iE(0.8352941176470589,0.8549019607843137,0.8980392156862745)
D.qi=new E.iE(0.10980392156862745,0.1411764705882353,0.20392156862745098)
D.m7=new C.a8e(0,0)
D.b7a=new A.aF(1e7,"Crore")
D.b7b=new A.aF(1e5,"Lakh")
D.b7c=new A.aF(1000,"Thousand")})()};
(a=>{a["VuzmReKqfnn6ISRXilRBn8IhtIE="]=a.current})($__dart_deferred_initializers__);