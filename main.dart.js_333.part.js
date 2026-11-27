((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ccd(d){var x
A.aH(d)
x=d==null?null:d
return x==null?0:x},
a0a(d){var x
A.aH(d)
x=d==null?null:C.q.aO(d)
return x==null?0:x},
wv(d){var x,w,v=A.a([],y.t)
y.M.a(d)
x=J.a0(d==null?C.ah:d)
w=y.P
while(x.n())v.push(w.a(x.gB(x)))
return v},
c6M(d){var x,w,v,u,t,s,r,q,p,o,n=J.X(d),m=A.M(n.h(d,"id")),l=A.B(n.h(d,"name"))
if(l==null)l=""
x=A.B(n.h(d,"phone"))
if(x==null)x=""
w=A.a([],y.Q)
for(v=B.wv(n.h(d,"addresses")),u=v.length,t=0;t<v.length;v.length===u||(0,A.y)(v),++t){s=v[t]
r=J.X(s)
q=A.M(r.h(s,"id"))
p=A.B(r.h(s,"label"))
if(p==null)p=""
o=A.B(r.h(s,"text"))
if(o==null)o=""
A.iJ(r.h(s,"is_default"))
w.push(new B.xv(q,p,o))}n=A.iJ(n.h(d,"has_plan"))
return new B.xw(m,l,x,w,n===!0)},
GM(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5="delivery_boy",a6=J.X(a8),a7=A.M(a6.h(a8,"id"))
A.M(a6.h(a8,"customer_id"))
x=A.B(a6.h(a8,"customer"))
if(x==null)x=""
w=A.B(a6.h(a8,"phone"))
if(w==null)w=""
v=A.M(a6.h(a8,"address_id"))
u=A.B(a6.h(a8,"address"))
if(u==null)u=""
t=A.B(a6.h(a8,"slot"))
if(t==null)t=""
s=A.B(a6.h(a8,"start_date"))
if(s==null)s=""
r=A.B(a6.h(a8,"status"))
if(r==null)r=""
q=A.B(a6.h(a8,"warehouse_id"))
p=A.B(a6.h(a8,"created_via"))
if(p==null)p=""
o=A.B(a6.h(a8,"notes"))
if(o==null)o=""
n=A.a([],y.u)
for(m=B.wv(a6.h(a8,"lines")),l=m.length,k=0;k<m.length;m.length===l||(0,A.y)(m),++k){j=m[k]
i=J.X(j)
h=A.M(i.h(j,"item_id"))
g=A.B(i.h(j,"name"))
if(g==null)g=""
f=A.aH(i.h(j,"qty_per_day"))
f=f==null?a4:C.q.aO(f)
if(f==null)f=0
i=A.aH(i.h(j,"rate"))
if(i==null)i=a4
n.push(new B.BV(h,g,f,i==null?0:i))}m=B.ccd(a6.h(a8,"per_day"))
l=B.a0a(a6.h(a8,"delivered_days"))
i=B.ccd(a6.h(a8,"bill_so_far"))
h=A.a([],y.S)
for(g=B.wv(a6.h(a8,"days")),f=g.length,k=0;k<g.length;g.length===f||(0,A.y)(g),++k){e=g[k]
d=J.X(e)
a0=A.B(d.h(e,"day"))
if(a0==null)a0=""
a1=A.B(d.h(e,"state"))
if(a1==null)a1=""
a2=A.aH(d.h(e,"qty"))
a2=a2==null?a4:C.q.aO(a2)
if(a2==null)a2=0
a3=A.aH(d.h(e,"amount"))
if(a3==null)a3=a4
if(a3==null)a3=0
A.B(d.h(e,"order_no"))
d=A.B(d.h(e,"note"))
h.push(new B.a50(a0,a1,a2,a3,d==null?"":d))}g=A.B(a6.h(a8,"end_date"))
f=A.iJ(a6.h(a8,"ended"))
if(a6.h(a8,a5)==null)a6=a4
else{a6=y.P.a(a6.h(a8,a5))
d=J.X(a6)
a0=A.M(d.h(a6,"id"))
a1=A.B(d.h(a6,"name"))
if(a1==null)a1=""
a6=A.B(d.h(a6,"mobile"))
a6=new B.aBe(a0,a1,a6==null?"":a6)}return new B.nD(a7,x,w,v,u,t,s,r,q,p,o,n,m,l,i,h,g,f===!0,a6)},
cnh(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3="packets",a4="plans",a5=J.X(a8),a6=y.h.a(a5.h(a8,"slots")),a7=new B.aBd(a6==null?C.dw:a6)
A.B(a5.h(a8,"date"))
x=A.a([],y.U)
for(w=B.wv(a5.h(a8,"totals")),v=w.length,u=0;u<w.length;w.length===v||(0,A.y)(w),++u){t=w[u]
s=J.X(t)
r=A.B(s.h(t,"item_id"))
if(r==null)r=""
q=A.B(s.h(t,"item"))
if(q==null)q=""
s=A.aH(s.h(t,"qty"))
s=s==null?null:C.q.aO(s)
x.push(new B.a4Z(r,q,s==null?0:s))}w=B.a0a(J.ae(a7.$1("AM"),a3))
v=B.a0a(J.ae(a7.$1("AM"),a4))
s=B.a0a(J.ae(a7.$1("PM"),a3))
r=B.a0a(J.ae(a7.$1("PM"),a4))
q=A.a([],y.T)
for(a5=B.wv(a5.h(a8,a4)),p=a5.length,o=y.e,u=0;u<a5.length;a5.length===p||(0,A.y)(a5),++u){n=a5[u]
m=J.X(n)
A.B(m.h(n,"plan_id"))
l=A.B(m.h(n,"customer"))
if(l==null)l=""
k=A.B(m.h(n,"phone"))
if(k==null)k=""
j=A.B(m.h(n,"address"))
if(j==null)j=""
i=A.B(m.h(n,"slot"))
if(i==null)i=""
h=A.B(m.h(n,"delivery_boy"))
if(h==null)h=""
g=A.a([],o)
for(f=B.wv(m.h(n,"lines")),e=f.length,d=0;d<f.length;f.length===e||(0,A.y)(f),++d){a0=f[d]
a1=J.X(a0)
a2=A.B(a1.h(a0,"item"))
if(a2==null)a2=""
a1=A.aH(a1.h(a0,"qty"))
a1=a1==null?null:C.q.aO(a1)
g.push(new A.ak4(a2,a1==null?0:a1))}m=A.aH(m.h(n,a3))
m=m==null?null:C.q.aO(m)
q.push(new B.a4Y(l,k,j,i,h,g,m==null?0:m))}return new B.a5_(x,w,v,s,r,q)},
c_V(b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=J.X(b1),a9=A.M(a8.h(b1,"id")),b0=A.B(a8.h(b1,"date"))
if(b0==null)b0=""
x=A.B(a8.h(b1,"slot"))
if(x==null)x=""
w=A.B(a8.h(b1,"slot_label"))
if(w==null)w=""
v=A.B(a8.h(b1,"status"))
if(v==null)v=""
u=A.B(a8.h(b1,"warehouse_id"))
t=B.a0a(a8.h(b1,"plan_orders_made"))
s=A.a([],y.Y)
for(r=B.wv(a8.h(b1,"packing")),q=r.length,p=0;p<r.length;r.length===q||(0,A.y)(r),++p){o=r[p]
n=J.X(o)
m=A.M(n.h(o,"item_id"))
l=A.B(n.h(o,"name"))
if(l==null)l=""
n=A.aH(n.h(o,"packets"))
n=n==null?a7:C.q.aO(n)
s.push(new A.akc(m,l,n==null?0:n))}r=A.a([],y._)
for(q=B.wv(a8.h(b1,"orders")),n=q.length,p=0;p<q.length;q.length===n||(0,A.y)(q),++p){k=q[p]
m=J.X(k)
l=A.M(m.h(k,"id"))
j=A.B(m.h(k,"order_no"))
if(j==null)j=""
i=A.B(m.h(k,"source"))
if(i==null)i=""
h=A.B(m.h(k,"customer"))
if(h==null)h=""
g=A.B(m.h(k,"phone"))
if(g==null)g=""
f=A.B(m.h(k,"address"))
if(f==null)f=""
e=A.B(m.h(k,"items"))
if(e==null)e=""
d=A.aH(m.h(k,"packets"))
if(d!=null)C.q.aO(d)
d=A.aH(m.h(k,"total"))
if(d==null)d=a7
if(d==null)d=0
a0=A.B(m.h(k,"payment"))
if(a0==null)a0=""
a1=A.B(m.h(k,"status"))
if(a1==null)a1=""
a2=A.B(m.h(k,"boy_id"))
a3=A.B(m.h(k,"boy"))
if(a3==null)a3=""
a4=A.B(m.h(k,"ice_box"))
if(a4==null)a4=""
a5=A.B(m.h(k,"reason"))
if(a5==null)a5=""
m=A.B(m.h(k,"collected"))
r.push(new B.BW(l,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,m==null?"":m))}q=A.a([],y.w)
for(a8=B.wv(a8.h(b1,"boys")),n=a8.length,p=0;p<a8.length;a8.length===n||(0,A.y)(a8),++p){a6=a8[p]
m=J.X(a6)
l=A.M(m.h(a6,"boy_id"))
j=A.B(m.h(a6,"name"))
if(j==null)j=""
i=A.aH(m.h(a6,"drops"))
i=i==null?a7:C.q.aO(i)
if(i==null)i=0
h=A.aH(m.h(a6,"delivered"))
h=h==null?a7:C.q.aO(h)
if(h==null)h=0
g=A.aH(m.h(a6,"not_delivered"))
g=g==null?a7:C.q.aO(g)
if(g==null)g=0
f=A.aH(m.h(a6,"pending"))
f=f==null?a7:C.q.aO(f)
if(f==null)f=0
e=A.aH(m.h(a6,"cash"))
if(e==null)e=a7
if(e==null)e=0
d=A.aH(m.h(a6,"upi"))
if(d==null)d=a7
if(d==null)d=0
a0=A.aH(m.h(a6,"ice_boxes_out"))
a0=a0==null?a7:C.q.aO(a0)
if(a0==null)a0=0
m=A.aH(m.h(a6,"ice_boxes_back"))
q.push(new B.a51(l,j,i,h,g,f,e,d,a0,m==null?a7:C.q.aO(m)))}return new B.GN(a9,b0,x,w,v,u,t,s,r,q)},
c6L(d){var x,w,v=J.X(d),u=A.M(v.h(d,"id")),t=A.B(v.h(d,"name"))
if(t==null)t=""
x=A.B(v.h(d,"mobile"))
if(x==null)x=""
w=A.iJ(v.h(d,"is_active"))
v=A.iJ(v.h(d,"has_pin"))
return new B.nC(u,t,x,w!==!1,v===!0)},
xv:function xv(d,e,f){this.a=d
this.b=e
this.c=f},
xw:function xw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
oL:function oL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
BV:function BV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a50:function a50(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h},
aBe:function aBe(d,e,f){this.a=d
this.b=e
this.c=f},
nD:function nD(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
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
_.cy=v},
a4Z:function a4Z(d,e,f){this.a=d
this.b=e
this.c=f},
a4Y:function a4Y(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j},
a5_:function a5_(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
aBd:function aBd(d){this.a=d},
BW:function BW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.as=o
_.at=p
_.ax=q
_.ay=r},
a51:function a51(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
GN:function GN(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
nC:function nC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rC:function rC(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
aBK:function aBK(){}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[53],B)
D=c[170]
E=c[70]
B.xv.prototype={}
B.xw.prototype={}
B.oL.prototype={}
B.BV.prototype={}
B.a50.prototype={}
B.aBe.prototype={}
B.nD.prototype={}
B.a4Z.prototype={}
B.a4Y.prototype={}
B.a5_.prototype={}
B.BW.prototype={}
B.a51.prototype={}
B.GN.prototype={}
B.nC.prototype={}
B.rC.prototype={}
B.aBK.prototype={
K4(d,e){return this.aUq(d,e)},
aUq(d,e){var x=0,w=A.t(y.Z),v,u,t,s,r
var $async$K4=A.o(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:s=A.a([],y.L)
r=J
x=3
return A.h(C.S.cQ("/home-delivery/customers?q="+A.eS(1,d,C.aK,!0),e),$async$K4)
case 3:u=r.a0(g),t=y.P
case 4:if(!u.n()){x=5
break}s.push(B.c6M(t.a(u.gB(u))))
x=4
break
case 5:v=s
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$K4,w)},
IF(d,e,f,g){return this.aPB(d,e,f,g)},
aPB(d,e,f,g){var x=0,w=A.t(y.E),v,u
var $async$IF=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bs("/home-delivery/customers",A.av(["phone",f,"name",e,"address",d],y.N,y.z),g),$async$IF)
case 3:v=u.c6M(i)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$IF,w)},
MX(d,e){return this.b34(d,e)},
b34(d,e){var x=0,w=A.t(y.W),v,u,t,s,r,q,p,o,n,m,l
var $async$MX=A.o(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:m=A.a([],y.j)
l=J
x=3
return A.h(C.S.cQ("/home-delivery/products?q="+A.eS(1,d,C.aK,!0),e),$async$MX)
case 3:u=l.a0(g),t=y.P
case 4:if(!u.n()){x=5
break}s=t.a(u.gB(u))
r=J.X(s)
q=A.M(r.h(s,"id"))
p=A.B(r.h(s,"code"))
if(p==null)p=""
o=A.B(r.h(s,"name"))
if(o==null)o=""
n=A.aH(r.h(s,"price"))
if(n==null)n=null
if(n==null)n=0
s=A.aH(r.h(s,"mrp"))
if(s==null)s=null
m.push(new B.oL(q,p,o,n,s==null?0:s))
x=4
break
case 5:v=m
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$MX,w)},
MM(d,e,f){return this.b2I(d,e,f)},
b2I(d,e,f){var x=0,w=A.t(y.b),v,u,t,s,r,q
var $async$MM=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:r=A.a([],y.s)
if(e.length!==0)r.push("status="+e)
if(d.length!==0)r.push("slot="+d)
u=C.e.av(r,"&")
r=A.a([],y.I)
q=J
x=3
return A.h(C.S.cQ("/home-delivery/plans"+(u.length===0?"":"?"+u),f),$async$MM)
case 3:t=q.a0(h)
s=y.P
while(t.n())r.push(B.GM(s.a(t.gB(t))))
v=r
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$MM,w)},
DQ(d,e,f){return this.b2i(d,e,f)},
b2h(d,e){return this.DQ(d,"",e)},
b2i(d,e,f){var x=0,w=A.t(y.o),v,u,t
var $async$DQ=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:u=e.length===0?"":"&slot="+e
t=B
x=3
return A.h(C.S.bK(0,"/home-delivery/packing?date="+d+u,f),$async$DQ)
case 3:v=t.cnh(h)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$DQ,w)},
ML(d,e){return this.b2H(d,e)},
b2H(d,e){var x=0,w=A.t(y.d),v,u
var $async$ML=A.o(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bK(0,"/home-delivery/plans/"+d,e),$async$ML)
case 3:v=u.GM(g)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$ML,w)},
JQ(d,e){return this.aU5(d,e)},
aU5(d,e){var x=0,w=A.t(y.d),v,u
var $async$JQ=A.o(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bs("/home-delivery/plans",d,e),$async$JQ)
case 3:v=u.GM(g)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$JQ,w)},
O3(d,e,f){return this.b5f(d,e,f)},
b5f(d,e,f){var x=0,w=A.t(y.d),v,u
var $async$O3=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.fW(0,"/home-delivery/plans/"+d,e,f),$async$O3)
case 3:v=u.GM(h)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$O3,w)},
ME(d,e,f,g,h,i){return this.b2z(0,e,f,g,h,i)},
b2z(d,e,f,g,h,i){var x=0,w=A.t(y.d),v,u
var $async$ME=A.o(function(j,k){if(j===1)return A.p(k,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bs("/home-delivery/plans/"+e+"/pause",A.av(["date_from",f,"date_to",h,"pause",g],y.N,y.z),i),$async$ME)
case 3:v=u.GM(k)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$ME,w)},
K7(d,e,f,g,h){return this.aUv(d,e,f,g,h)},
aUv(d,e,f,g,h){var x=0,w=A.t(y.d),v,u
var $async$K7=A.o(function(i,j){if(i===1)return A.p(j,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bs("/home-delivery/plans/"+d+"/day-change",A.av(["day",e,"item_id",f,"qty",g],y.N,y.z),h),$async$K7)
case 3:v=u.GM(j)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$K7,w)},
vY(d,e,f){return this.amq(d,e,f)},
amq(d,e,f){var x=0,w=A.t(y.d),v,u
var $async$vY=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bs("/home-delivery/plans/"+d+"/status",A.av(["status",e],y.N,y.z),f),$async$vY)
case 3:v=u.GM(h)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$vY,w)},
Nq(d,e,f){return this.b4h(d,e,f)},
b4h(d,e,f){var x=0,w=A.t(y.C),v,u
var $async$Nq=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bK(0,"/home-delivery/runs?date="+d+"&slot="+e,f),$async$Nq)
case 3:v=u.c_V(h)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Nq,w)},
UN(d,e,f,g,h){return this.aQg(0,e,f,g,h)},
aQg(d,e,f,g,h){var x=0,w=A.t(y.H),v,u
var $async$UN=A.o(function(i,j){if(i===1)return A.p(j,w)
for(;;)switch(x){case 0:u=A.A(y.N,y.z)
u.l(0,"order_ids",e)
u.l(0,"boy_id",f)
if(g!=null)u.l(0,"ice_box",g)
v=C.S.bs("/home-delivery/runs/assign",u,h)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$UN,w)},
Kw(d,e,f){return this.aV8(d,e,f)},
aV8(d,e,f){var x=0,w=A.t(y.C),v,u
var $async$Kw=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bs("/home-delivery/runs/"+d+"/dispatch",A.av(["warehouse_id",e],y.N,y.z),f),$async$Kw)
case 3:v=u.c_V(h)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Kw,w)},
Jo(d,e,f,g){return this.aRF(0,e,f,g)},
aRF(d,e,f,g){var x=0,w=A.t(y.C),v,u
var $async$Jo=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bs("/home-delivery/runs/"+e+"/close",A.av(["boys",f],y.N,y.z),g),$async$Jo)
case 3:v=u.c_V(i)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Jo,w)},
VS(d,e,f,g){return this.aUU(d,e,f,g)},
aUU(d,e,f,g){var x=0,w=A.t(y.H),v
var $async$VS=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:v=C.S.bs("/home-delivery/orders/"+d+"/delivered",A.av(["collected_by",f,"amount",e],y.N,y.z),g)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$VS,w)},
Y_(d,e,f){return this.b1_(d,e,f)},
b1_(d,e,f){var x=0,w=A.t(y.H),v
var $async$Y_=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:v=C.S.bs("/home-delivery/orders/"+d+"/not-delivered",A.av(["reason",e],y.N,y.z),f)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Y_,w)},
C0(d){return this.aQL(d)},
aQL(d){var x=0,w=A.t(y.g),v,u,t,s,r
var $async$C0=A.o(function(e,f){if(e===1)return A.p(f,w)
for(;;)switch(x){case 0:s=A.a([],y.a)
r=J
x=3
return A.h(C.S.cQ("/home-delivery/boys",d),$async$C0)
case 3:u=r.a0(f),t=y.P
case 4:if(!u.n()){x=5
break}s.push(B.c6L(t.a(u.gB(u))))
x=4
break
case 5:v=s
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$C0,w)},
zt(d,e,f,g,h){return this.alx(d,e,f,g,h)},
alx(d,e,f,g,h){var x=0,w=A.t(y.g),v,u,t,s,r,q
var $async$zt=A.o(function(i,j){if(i===1)return A.p(j,w)
for(;;)switch(x){case 0:s=A.av(["name",f,"mobile",e,"pin",g,"is_active",!0],y.N,y.X)
x=d==null?3:5
break
case 3:x=6
return A.h(C.S.MQ("/home-delivery/boys",s,h),$async$zt)
case 6:x=4
break
case 5:x=7
return A.h(C.S.MY("/home-delivery/boys/"+d,s,h),$async$zt)
case 7:case 4:r=j
q=A.a([],y.a)
for(u=J.a0(r),t=y.P;u.n();)q.push(B.c6L(t.a(u.gB(u))))
v=q
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$zt,w)},
LA(d,e){return this.aYS(d,e)},
aYS(d,e){var x=0,w=A.t(y.R),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$LA=A.o(function(f,a0){if(f===1)return A.p(a0,w)
for(;;)switch(x){case 0:j=A.a([],y.i)
g=J
x=3
return A.h(C.S.cQ("/home-delivery/invoices"+("?month="+d),e),$async$LA)
case 3:i=g.a0(a0)
h=y.P
while(i.n()){u=h.a(i.gB(i))
t=J.X(u)
s=A.M(t.h(u,"id"))
r=A.B(t.h(u,"invoice_no"))
if(r==null)r=""
q=A.B(t.h(u,"customer"))
if(q==null)q=""
p=A.B(t.h(u,"phone"))
if(p==null)p=""
o=A.B(t.h(u,"kind"))
if(o==null)o=""
n=A.B(t.h(u,"period_from"))
if(n==null)n=""
m=A.B(t.h(u,"period_to"))
if(m==null)m=""
l=A.aH(t.h(u,"total"))
if(l==null)l=null
if(l==null)l=0
k=A.B(t.h(u,"status"))
if(k==null)k=""
j.push(new B.rC(s,r,q,p,o,n,m,l,k,B.wv(t.h(u,"lines"))))}v=j
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$LA,w)},
XX(d,e){return this.b0O(d,e)},
b0O(d,e){var x=0,w=A.t(y.P),v
var $async$XX=A.o(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:v=C.S.bs("/home-delivery/invoices/monthly",A.av(["month",d],y.N,y.z),e)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$XX,w)},
Xi(d,e,f,g){return this.aYR(d,e,f,g)},
aYR(d,e,f,g){var x=0,w=A.t(y.H),v
var $async$Xi=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:v=C.S.bs("/home-delivery/invoices/"+d+"/paid",A.av(["mode",e,"reference",f],y.N,y.z),g)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Xi,w)}}
var z=a.updateTypes([])
B.aBd.prototype={
$1(d){var x=y.h.a(J.ae(this.a,d))
return x==null?C.dw:x},
$S:1103};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.P,[B.xv,B.xw,B.oL,B.BV,B.a50,B.aBe,B.nD,B.a4Z,B.a4Y,B.a5_,B.BW,B.a51,B.GN,B.nC,B.rC,B.aBK])
w(B.aBd,A.bN)})()
var y=(function rtii(){var x=A.H
return{E:x("xw"),o:x("a5_"),d:x("nD"),C:x("GN"),Q:x("l<xv>"),a:x("l<nC>"),L:x("l<xw>"),i:x("l<rC>"),T:x("l<a4Y>"),U:x("l<a4Z>"),I:x("l<nD>"),S:x("l<a50>"),u:x("l<BV>"),j:x("l<oL>"),w:x("l<a51>"),_:x("l<BW>"),t:x("l<aA<c,@>>"),e:x("l<+item,qty(c,v)>"),Y:x("l<+itemId,name,packets(c,c,v)>"),s:x("l<c>"),g:x("i<nC>"),Z:x("i<xw>"),R:x("i<rC>"),b:x("i<nD>"),W:x("i<oL>"),P:x("aA<c,@>"),N:x("c"),z:x("@"),M:x("i<@>?"),h:x("aA<c,@>?"),X:x("P?"),H:x("~")}})();(function constants(){D.ch=new B.aBK()
D.T8=new E.cG("Packets",2,!0)
D.T5=new E.cG("Delivered",2,!0)
D.qV=new E.cG("Customer",4,!1)
D.T7=new E.cG("Items",5,!1)})()};
(a=>{a["kP8GCT4APHmhUwDGMpk8fQ7HLEM="]=a.current})($__dart_deferred_initializers__);