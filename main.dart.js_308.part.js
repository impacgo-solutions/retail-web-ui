((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
c9G(d){var x
A.aG(d)
x=d==null?null:d
return x==null?0:x},
a_P(d){var x
A.aG(d)
x=d==null?null:C.r.aU(d)
return x==null?0:x},
wo(d){var x,w,v=A.a([],y.t)
y.M.a(d)
x=J.a1(d==null?C.ai:d)
w=y.P
while(x.n())v.push(w.a(x.gB(x)))
return v},
c4i(d){var x,w,v,u,t,s,r,q,p,o,n=J.Z(d),m=A.M(n.h(d,"id")),l=A.E(n.h(d,"name"))
if(l==null)l=""
x=A.E(n.h(d,"phone"))
if(x==null)x=""
w=A.a([],y.Q)
for(v=B.wo(n.h(d,"addresses")),u=v.length,t=0;t<v.length;v.length===u||(0,A.y)(v),++t){s=v[t]
r=J.Z(s)
q=A.M(r.h(s,"id"))
p=A.E(r.h(s,"label"))
if(p==null)p=""
o=A.E(r.h(s,"text"))
if(o==null)o=""
A.iJ(r.h(s,"is_default"))
w.push(new B.xp(q,p,o))}n=A.iJ(n.h(d,"has_plan"))
return new B.xq(m,l,x,w,n===!0)},
GD(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5="delivery_boy",a6=J.Z(a8),a7=A.M(a6.h(a8,"id"))
A.M(a6.h(a8,"customer_id"))
x=A.E(a6.h(a8,"customer"))
if(x==null)x=""
w=A.E(a6.h(a8,"phone"))
if(w==null)w=""
v=A.M(a6.h(a8,"address_id"))
u=A.E(a6.h(a8,"address"))
if(u==null)u=""
t=A.E(a6.h(a8,"slot"))
if(t==null)t=""
s=A.E(a6.h(a8,"start_date"))
if(s==null)s=""
r=A.E(a6.h(a8,"status"))
if(r==null)r=""
q=A.E(a6.h(a8,"warehouse_id"))
p=A.E(a6.h(a8,"created_via"))
if(p==null)p=""
o=A.E(a6.h(a8,"notes"))
if(o==null)o=""
n=A.a([],y.u)
for(m=B.wo(a6.h(a8,"lines")),l=m.length,k=0;k<m.length;m.length===l||(0,A.y)(m),++k){j=m[k]
i=J.Z(j)
h=A.M(i.h(j,"item_id"))
g=A.E(i.h(j,"name"))
if(g==null)g=""
f=A.aG(i.h(j,"qty_per_day"))
f=f==null?a4:C.r.aU(f)
if(f==null)f=0
i=A.aG(i.h(j,"rate"))
if(i==null)i=a4
n.push(new B.BG(h,g,f,i==null?0:i))}m=B.c9G(a6.h(a8,"per_day"))
l=B.a_P(a6.h(a8,"delivered_days"))
i=B.c9G(a6.h(a8,"bill_so_far"))
h=A.a([],y.S)
for(g=B.wo(a6.h(a8,"days")),f=g.length,k=0;k<g.length;g.length===f||(0,A.y)(g),++k){e=g[k]
d=J.Z(e)
a0=A.E(d.h(e,"day"))
if(a0==null)a0=""
a1=A.E(d.h(e,"state"))
if(a1==null)a1=""
a2=A.aG(d.h(e,"qty"))
a2=a2==null?a4:C.r.aU(a2)
if(a2==null)a2=0
a3=A.aG(d.h(e,"amount"))
if(a3==null)a3=a4
if(a3==null)a3=0
A.E(d.h(e,"order_no"))
d=A.E(d.h(e,"note"))
h.push(new B.a4P(a0,a1,a2,a3,d==null?"":d))}g=A.E(a6.h(a8,"end_date"))
f=A.iJ(a6.h(a8,"ended"))
if(a6.h(a8,a5)==null)a6=a4
else{a6=y.P.a(a6.h(a8,a5))
d=J.Z(a6)
a0=A.M(d.h(a6,"id"))
a1=A.E(d.h(a6,"name"))
if(a1==null)a1=""
a6=A.E(d.h(a6,"mobile"))
a6=new B.aBc(a0,a1,a6==null?"":a6)}return new B.nu(a7,x,w,v,u,t,s,r,q,p,o,n,m,l,i,h,g,f===!0,a6)},
cl4(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3="packets",a4="plans",a5=J.Z(a8),a6=y.h.a(a5.h(a8,"slots")),a7=new B.aBb(a6==null?C.ey:a6)
A.E(a5.h(a8,"date"))
x=A.a([],y.U)
for(w=B.wo(a5.h(a8,"totals")),v=w.length,u=0;u<w.length;w.length===v||(0,A.y)(w),++u){t=w[u]
s=J.Z(t)
r=A.E(s.h(t,"item_id"))
if(r==null)r=""
q=A.E(s.h(t,"item"))
if(q==null)q=""
s=A.aG(s.h(t,"qty"))
s=s==null?null:C.r.aU(s)
x.push(new B.a4N(r,q,s==null?0:s))}w=B.a_P(J.ac(a7.$1("AM"),a3))
v=B.a_P(J.ac(a7.$1("AM"),a4))
s=B.a_P(J.ac(a7.$1("PM"),a3))
r=B.a_P(J.ac(a7.$1("PM"),a4))
q=A.a([],y.T)
for(a5=B.wo(a5.h(a8,a4)),p=a5.length,o=y.e,u=0;u<a5.length;a5.length===p||(0,A.y)(a5),++u){n=a5[u]
m=J.Z(n)
A.E(m.h(n,"plan_id"))
l=A.E(m.h(n,"customer"))
if(l==null)l=""
k=A.E(m.h(n,"phone"))
if(k==null)k=""
j=A.E(m.h(n,"address"))
if(j==null)j=""
i=A.E(m.h(n,"slot"))
if(i==null)i=""
h=A.E(m.h(n,"delivery_boy"))
if(h==null)h=""
g=A.a([],o)
for(f=B.wo(m.h(n,"lines")),e=f.length,d=0;d<f.length;f.length===e||(0,A.y)(f),++d){a0=f[d]
a1=J.Z(a0)
a2=A.E(a1.h(a0,"item"))
if(a2==null)a2=""
a1=A.aG(a1.h(a0,"qty"))
a1=a1==null?null:C.r.aU(a1)
g.push(new A.ajP(a2,a1==null?0:a1))}m=A.aG(m.h(n,a3))
m=m==null?null:C.r.aU(m)
q.push(new B.a4M(l,k,j,i,h,g,m==null?0:m))}return new B.a4O(x,w,v,s,r,q)},
bYm(b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=J.Z(b1),a9=A.M(a8.h(b1,"id")),b0=A.E(a8.h(b1,"date"))
if(b0==null)b0=""
x=A.E(a8.h(b1,"slot"))
if(x==null)x=""
w=A.E(a8.h(b1,"slot_label"))
if(w==null)w=""
v=A.E(a8.h(b1,"status"))
if(v==null)v=""
u=A.E(a8.h(b1,"warehouse_id"))
t=B.a_P(a8.h(b1,"plan_orders_made"))
s=A.a([],y.Y)
for(r=B.wo(a8.h(b1,"packing")),q=r.length,p=0;p<r.length;r.length===q||(0,A.y)(r),++p){o=r[p]
n=J.Z(o)
m=A.M(n.h(o,"item_id"))
l=A.E(n.h(o,"name"))
if(l==null)l=""
n=A.aG(n.h(o,"packets"))
n=n==null?a7:C.r.aU(n)
s.push(new A.ajY(m,l,n==null?0:n))}r=A.a([],y._)
for(q=B.wo(a8.h(b1,"orders")),n=q.length,p=0;p<q.length;q.length===n||(0,A.y)(q),++p){k=q[p]
m=J.Z(k)
l=A.M(m.h(k,"id"))
j=A.E(m.h(k,"order_no"))
if(j==null)j=""
i=A.E(m.h(k,"source"))
if(i==null)i=""
h=A.E(m.h(k,"customer"))
if(h==null)h=""
g=A.E(m.h(k,"phone"))
if(g==null)g=""
f=A.E(m.h(k,"address"))
if(f==null)f=""
e=A.E(m.h(k,"items"))
if(e==null)e=""
d=A.aG(m.h(k,"packets"))
if(d!=null)C.r.aU(d)
d=A.aG(m.h(k,"total"))
if(d==null)d=a7
if(d==null)d=0
a0=A.E(m.h(k,"payment"))
if(a0==null)a0=""
a1=A.E(m.h(k,"status"))
if(a1==null)a1=""
a2=A.E(m.h(k,"boy_id"))
a3=A.E(m.h(k,"boy"))
if(a3==null)a3=""
a4=A.E(m.h(k,"ice_box"))
if(a4==null)a4=""
a5=A.E(m.h(k,"reason"))
if(a5==null)a5=""
m=A.E(m.h(k,"collected"))
r.push(new B.BH(l,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,m==null?"":m))}q=A.a([],y.w)
for(a8=B.wo(a8.h(b1,"boys")),n=a8.length,p=0;p<a8.length;a8.length===n||(0,A.y)(a8),++p){a6=a8[p]
m=J.Z(a6)
l=A.M(m.h(a6,"boy_id"))
j=A.E(m.h(a6,"name"))
if(j==null)j=""
i=A.aG(m.h(a6,"drops"))
i=i==null?a7:C.r.aU(i)
if(i==null)i=0
h=A.aG(m.h(a6,"delivered"))
h=h==null?a7:C.r.aU(h)
if(h==null)h=0
g=A.aG(m.h(a6,"not_delivered"))
g=g==null?a7:C.r.aU(g)
if(g==null)g=0
f=A.aG(m.h(a6,"pending"))
f=f==null?a7:C.r.aU(f)
if(f==null)f=0
e=A.aG(m.h(a6,"cash"))
if(e==null)e=a7
if(e==null)e=0
d=A.aG(m.h(a6,"upi"))
if(d==null)d=a7
if(d==null)d=0
a0=A.aG(m.h(a6,"ice_boxes_out"))
a0=a0==null?a7:C.r.aU(a0)
if(a0==null)a0=0
m=A.aG(m.h(a6,"ice_boxes_back"))
q.push(new B.a4Q(l,j,i,h,g,f,e,d,a0,m==null?a7:C.r.aU(m)))}return new B.GE(a9,b0,x,w,v,u,t,s,r,q)},
c4h(d){var x,w,v=J.Z(d),u=A.M(v.h(d,"id")),t=A.E(v.h(d,"name"))
if(t==null)t=""
x=A.E(v.h(d,"mobile"))
if(x==null)x=""
w=A.iJ(v.h(d,"is_active"))
v=A.iJ(v.h(d,"has_pin"))
return new B.nt(u,t,x,w!==!1,v===!0)},
xp:function xp(d,e,f){this.a=d
this.b=e
this.c=f},
xq:function xq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
oF:function oF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
BG:function BG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4P:function a4P(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h},
aBc:function aBc(d,e,f){this.a=d
this.b=e
this.c=f},
nu:function nu(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
a4N:function a4N(d,e,f){this.a=d
this.b=e
this.c=f},
a4M:function a4M(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j},
a4O:function a4O(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
aBb:function aBb(d){this.a=d},
BH:function BH(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
a4Q:function a4Q(d,e,f,g,h,i,j,k,l,m){var _=this
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
GE:function GE(d,e,f,g,h,i,j,k,l,m){var _=this
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
nt:function nt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rw:function rw(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBI:function aBI(){}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
D=c[161]
E=c[67]
B.xp.prototype={}
B.xq.prototype={}
B.oF.prototype={}
B.BG.prototype={}
B.a4P.prototype={}
B.aBc.prototype={}
B.nu.prototype={}
B.a4N.prototype={}
B.a4M.prototype={}
B.a4O.prototype={}
B.BH.prototype={}
B.a4Q.prototype={}
B.GE.prototype={}
B.nt.prototype={}
B.rw.prototype={}
B.aBI.prototype={
JQ(d,e){return this.aUQ(d,e)},
aUQ(d,e){var x=0,w=A.t(y.Z),v,u,t,s,r
var $async$JQ=A.o(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:s=A.a([],y.L)
r=J
x=3
return A.h(C.T.cX("/home-delivery/customers?q="+A.en(1,d,C.aB,!0),e),$async$JQ)
case 3:u=r.a1(g),t=y.P
case 4:if(!u.n()){x=5
break}s.push(B.c4i(t.a(u.gB(u))))
x=4
break
case 5:v=s
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$JQ,w)},
Is(d,e,f,g){return this.aQe(d,e,f,g)},
aQe(d,e,f,g){var x=0,w=A.t(y.E),v,u
var $async$Is=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.T.br("/home-delivery/customers",A.au(["phone",f,"name",e,"address",d],y.N,y.z),g),$async$Is)
case 3:v=u.c4i(i)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Is,w)},
MG(d,e){return this.b3u(d,e)},
b3u(d,e){var x=0,w=A.t(y.W),v,u,t,s,r,q,p,o,n,m,l
var $async$MG=A.o(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:m=A.a([],y.j)
l=J
x=3
return A.h(C.T.cX("/home-delivery/products?q="+A.en(1,d,C.aB,!0),e),$async$MG)
case 3:u=l.a1(g),t=y.P
case 4:if(!u.n()){x=5
break}s=t.a(u.gB(u))
r=J.Z(s)
q=A.M(r.h(s,"id"))
p=A.E(r.h(s,"code"))
if(p==null)p=""
o=A.E(r.h(s,"name"))
if(o==null)o=""
n=A.aG(r.h(s,"price"))
if(n==null)n=null
if(n==null)n=0
s=A.aG(r.h(s,"mrp"))
if(s==null)s=null
m.push(new B.oF(q,p,o,n,s==null?0:s))
x=4
break
case 5:v=m
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$MG,w)},
Mv(d,e,f){return this.b37(d,e,f)},
b37(d,e,f){var x=0,w=A.t(y.b),v,u,t,s,r,q
var $async$Mv=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:r=A.a([],y.s)
if(e.length!==0)r.push("status="+e)
if(d.length!==0)r.push("slot="+d)
u=C.e.aw(r,"&")
r=A.a([],y.I)
q=J
x=3
return A.h(C.T.cX("/home-delivery/plans"+(u.length===0?"":"?"+u),f),$async$Mv)
case 3:t=q.a1(h)
s=y.P
while(t.n())r.push(B.GD(s.a(t.gB(t))))
v=r
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Mv,w)},
DK(d,e,f){return this.b2G(d,e,f)},
b2F(d,e){return this.DK(d,"",e)},
b2G(d,e,f){var x=0,w=A.t(y.o),v,u,t
var $async$DK=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:u=e.length===0?"":"&slot="+e
t=B
x=3
return A.h(C.T.bZ(0,"/home-delivery/packing?date="+d+u,f),$async$DK)
case 3:v=t.cl4(h)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$DK,w)},
Mu(d,e){return this.b36(d,e)},
b36(d,e){var x=0,w=A.t(y.d),v,u
var $async$Mu=A.o(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.T.bZ(0,"/home-delivery/plans/"+d,e),$async$Mu)
case 3:v=u.GD(g)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Mu,w)},
JB(d,e){return this.aUv(d,e)},
aUv(d,e){var x=0,w=A.t(y.d),v,u
var $async$JB=A.o(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.T.br("/home-delivery/plans",d,e),$async$JB)
case 3:v=u.GD(g)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$JB,w)},
NP(d,e,f){return this.b5K(d,e,f)},
b5K(d,e,f){var x=0,w=A.t(y.d),v,u
var $async$NP=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.T.fX(0,"/home-delivery/plans/"+d,e,f),$async$NP)
case 3:v=u.GD(h)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$NP,w)},
Mn(d,e,f,g,h,i){return this.b2Z(0,e,f,g,h,i)},
b2Z(d,e,f,g,h,i){var x=0,w=A.t(y.d),v,u
var $async$Mn=A.o(function(j,k){if(j===1)return A.p(k,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.T.br("/home-delivery/plans/"+e+"/pause",A.au(["date_from",f,"date_to",h,"pause",g],y.N,y.z),i),$async$Mn)
case 3:v=u.GD(k)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Mn,w)},
JT(d,e,f,g,h){return this.aUV(d,e,f,g,h)},
aUV(d,e,f,g,h){var x=0,w=A.t(y.d),v,u
var $async$JT=A.o(function(i,j){if(i===1)return A.p(j,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.T.br("/home-delivery/plans/"+d+"/day-change",A.au(["day",e,"item_id",f,"qty",g],y.N,y.z),h),$async$JT)
case 3:v=u.GD(j)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$JT,w)},
w5(d,e,f){return this.amW(d,e,f)},
amW(d,e,f){var x=0,w=A.t(y.d),v,u
var $async$w5=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.T.br("/home-delivery/plans/"+d+"/status",A.au(["status",e],y.N,y.z),f),$async$w5)
case 3:v=u.GD(h)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$w5,w)},
Nc(d,e,f){return this.b4O(d,e,f)},
b4O(d,e,f){var x=0,w=A.t(y.C),v,u
var $async$Nc=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.T.bZ(0,"/home-delivery/runs?date="+d+"&slot="+e,f),$async$Nc)
case 3:v=u.bYm(h)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Nc,w)},
UG(d,e,f,g,h){return this.aQV(0,e,f,g,h)},
aQV(d,e,f,g,h){var x=0,w=A.t(y.H),v,u
var $async$UG=A.o(function(i,j){if(i===1)return A.p(j,w)
for(;;)switch(x){case 0:u=A.z(y.N,y.z)
u.k(0,"order_ids",e)
u.k(0,"boy_id",f)
if(g!=null)u.k(0,"ice_box",g)
v=C.T.br("/home-delivery/runs/assign",u,h)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$UG,w)},
Kf(d,e,f){return this.aVz(d,e,f)},
aVz(d,e,f){var x=0,w=A.t(y.C),v,u
var $async$Kf=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.T.br("/home-delivery/runs/"+d+"/dispatch",A.au(["warehouse_id",e],y.N,y.z),f),$async$Kf)
case 3:v=u.bYm(h)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Kf,w)},
Jb(d,e,f,g){return this.aS9(0,e,f,g)},
aS9(d,e,f,g){var x=0,w=A.t(y.C),v,u
var $async$Jb=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.T.br("/home-delivery/runs/"+e+"/close",A.au(["boys",f],y.N,y.z),g),$async$Jb)
case 3:v=u.bYm(i)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Jb,w)},
VO(d,e,f,g){return this.aVj(d,e,f,g)},
aVj(d,e,f,g){var x=0,w=A.t(y.H),v
var $async$VO=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:v=C.T.br("/home-delivery/orders/"+d+"/delivered",A.au(["collected_by",f,"amount",e],y.N,y.z),g)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$VO,w)},
XY(d,e,f){return this.b1n(d,e,f)},
b1n(d,e,f){var x=0,w=A.t(y.H),v
var $async$XY=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:v=C.T.br("/home-delivery/orders/"+d+"/not-delivered",A.au(["reason",e],y.N,y.z),f)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$XY,w)},
C2(d){return this.aRn(d)},
aRn(d){var x=0,w=A.t(y.g),v,u,t,s,r
var $async$C2=A.o(function(e,f){if(e===1)return A.p(f,w)
for(;;)switch(x){case 0:s=A.a([],y.a)
r=J
x=3
return A.h(C.T.cX("/home-delivery/boys",d),$async$C2)
case 3:u=r.a1(f),t=y.P
case 4:if(!u.n()){x=5
break}s.push(B.c4h(t.a(u.gB(u))))
x=4
break
case 5:v=s
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$C2,w)},
zt(d,e,f,g,h){return this.am1(d,e,f,g,h)},
am1(d,e,f,g,h){var x=0,w=A.t(y.g),v,u,t,s,r,q
var $async$zt=A.o(function(i,j){if(i===1)return A.p(j,w)
for(;;)switch(x){case 0:s=A.au(["name",f,"mobile",e,"pin",g,"is_active",!0],y.N,y.X)
x=d==null?3:5
break
case 3:x=6
return A.h(C.T.Mz("/home-delivery/boys",s,h),$async$zt)
case 6:x=4
break
case 5:x=7
return A.h(C.T.MH("/home-delivery/boys/"+d,s,h),$async$zt)
case 7:case 4:r=j
q=A.a([],y.a)
for(u=J.a1(r),t=y.P;u.n();)q.push(B.c4h(t.a(u.gB(u))))
v=q
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$zt,w)},
Lj(d,e){return this.aZl(d,e)},
aZl(d,e){var x=0,w=A.t(y.R),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Lj=A.o(function(f,a0){if(f===1)return A.p(a0,w)
for(;;)switch(x){case 0:j=A.a([],y.i)
g=J
x=3
return A.h(C.T.cX("/home-delivery/invoices"+("?month="+d),e),$async$Lj)
case 3:i=g.a1(a0)
h=y.P
while(i.n()){u=h.a(i.gB(i))
t=J.Z(u)
s=A.M(t.h(u,"id"))
r=A.E(t.h(u,"invoice_no"))
if(r==null)r=""
q=A.E(t.h(u,"customer"))
if(q==null)q=""
p=A.E(t.h(u,"phone"))
if(p==null)p=""
o=A.E(t.h(u,"kind"))
if(o==null)o=""
n=A.E(t.h(u,"period_from"))
if(n==null)n=""
m=A.E(t.h(u,"period_to"))
if(m==null)m=""
l=A.aG(t.h(u,"total"))
if(l==null)l=null
if(l==null)l=0
k=A.E(t.h(u,"status"))
if(k==null)k=""
j.push(new B.rw(s,r,q,p,o,n,m,l,k,B.wo(t.h(u,"lines"))))}v=j
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Lj,w)},
XV(d,e){return this.b1b(d,e)},
b1b(d,e){var x=0,w=A.t(y.P),v
var $async$XV=A.o(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:v=C.T.br("/home-delivery/invoices/monthly",A.au(["month",d],y.N,y.z),e)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$XV,w)},
Xc(d,e,f,g){return this.aZk(d,e,f,g)},
aZk(d,e,f,g){var x=0,w=A.t(y.H),v
var $async$Xc=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:v=C.T.br("/home-delivery/invoices/"+d+"/paid",A.au(["mode",e,"reference",f],y.N,y.z),g)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Xc,w)}}
var z=a.updateTypes([])
B.aBb.prototype={
$1(d){var x=y.h.a(J.ac(this.a,d))
return x==null?C.ey:x},
$S:1114};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.P,[B.xp,B.xq,B.oF,B.BG,B.a4P,B.aBc,B.nu,B.a4N,B.a4M,B.a4O,B.BH,B.a4Q,B.GE,B.nt,B.rw,B.aBI])
w(B.aBb,A.bO)})()
var y=(function rtii(){var x=A.G
return{E:x("xq"),o:x("a4O"),d:x("nu"),C:x("GE"),Q:x("l<xp>"),a:x("l<nt>"),L:x("l<xq>"),i:x("l<rw>"),T:x("l<a4M>"),U:x("l<a4N>"),I:x("l<nu>"),S:x("l<a4P>"),u:x("l<BG>"),j:x("l<oF>"),w:x("l<a4Q>"),_:x("l<BH>"),t:x("l<aA<c,@>>"),e:x("l<+item,qty(c,v)>"),Y:x("l<+itemId,name,packets(c,c,v)>"),s:x("l<c>"),g:x("i<nt>"),Z:x("i<xq>"),R:x("i<rw>"),b:x("i<nu>"),W:x("i<oF>"),P:x("aA<c,@>"),N:x("c"),z:x("@"),M:x("i<@>?"),h:x("aA<c,@>?"),X:x("P?"),H:x("~")}})();(function constants(){D.ck=new B.aBI()
D.Tn=new E.cB("Packets",2,!0)
D.Tk=new E.cB("Delivered",2,!0)
D.qL=new E.cB("Customer",4,!1)
D.Tm=new E.cB("Items",5,!1)})()};
(a=>{a["LzbNOZug12MRxd3DZeTlaWgqDFQ="]=a.current})($__dart_deferred_initializers__);