((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
c7g(d){var x
A.aM(d)
x=d==null?null:d
return x==null?0:x},
a_n(d){var x
A.aM(d)
x=d==null?null:C.q.aZ(d)
return x==null?0:x},
w3(d){var x,w,v=A.a([],y.t)
y.M.a(d)
x=J.a3(d==null?C.ai:d)
w=y.P
while(x.p())v.push(w.a(x.gB(x)))
return v},
c1S(d){var x,w,v,u,t,s,r,q,p,o,n=J.a_(d),m=A.L(n.h(d,"id")),l=A.D(n.h(d,"name"))
if(l==null)l=""
x=A.D(n.h(d,"phone"))
if(x==null)x=""
w=A.a([],y.Q)
for(v=B.w3(n.h(d,"addresses")),u=v.length,t=0;t<v.length;v.length===u||(0,A.y)(v),++t){s=v[t]
r=J.a_(s)
q=A.L(r.h(s,"id"))
p=A.D(r.h(s,"label"))
if(p==null)p=""
o=A.D(r.h(s,"text"))
if(o==null)o=""
A.iB(r.h(s,"is_default"))
w.push(new B.x2(q,p,o))}n=A.iB(n.h(d,"has_plan"))
return new B.x3(m,l,x,w,n===!0)},
Ga(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5="delivery_boy",a6=J.a_(a8),a7=A.L(a6.h(a8,"id"))
A.L(a6.h(a8,"customer_id"))
x=A.D(a6.h(a8,"customer"))
if(x==null)x=""
w=A.D(a6.h(a8,"phone"))
if(w==null)w=""
v=A.L(a6.h(a8,"address_id"))
u=A.D(a6.h(a8,"address"))
if(u==null)u=""
t=A.D(a6.h(a8,"slot"))
if(t==null)t=""
s=A.D(a6.h(a8,"start_date"))
if(s==null)s=""
r=A.D(a6.h(a8,"status"))
if(r==null)r=""
q=A.D(a6.h(a8,"warehouse_id"))
p=A.D(a6.h(a8,"created_via"))
if(p==null)p=""
o=A.D(a6.h(a8,"notes"))
if(o==null)o=""
n=A.a([],y.u)
for(m=B.w3(a6.h(a8,"lines")),l=m.length,k=0;k<m.length;m.length===l||(0,A.y)(m),++k){j=m[k]
i=J.a_(j)
h=A.L(i.h(j,"item_id"))
g=A.D(i.h(j,"name"))
if(g==null)g=""
f=A.aM(i.h(j,"qty_per_day"))
f=f==null?a4:C.q.aZ(f)
if(f==null)f=0
i=A.aM(i.h(j,"rate"))
if(i==null)i=a4
n.push(new B.Bh(h,g,f,i==null?0:i))}m=B.c7g(a6.h(a8,"per_day"))
l=B.a_n(a6.h(a8,"delivered_days"))
i=B.c7g(a6.h(a8,"bill_so_far"))
h=A.a([],y.S)
for(g=B.w3(a6.h(a8,"days")),f=g.length,k=0;k<g.length;g.length===f||(0,A.y)(g),++k){e=g[k]
d=J.a_(e)
a0=A.D(d.h(e,"day"))
if(a0==null)a0=""
a1=A.D(d.h(e,"state"))
if(a1==null)a1=""
a2=A.aM(d.h(e,"qty"))
a2=a2==null?a4:C.q.aZ(a2)
if(a2==null)a2=0
a3=A.aM(d.h(e,"amount"))
if(a3==null)a3=a4
if(a3==null)a3=0
A.D(d.h(e,"order_no"))
d=A.D(d.h(e,"note"))
h.push(new B.a4a(a0,a1,a2,a3,d==null?"":d))}g=A.D(a6.h(a8,"end_date"))
f=A.iB(a6.h(a8,"ended"))
if(a6.h(a8,a5)==null)a6=a4
else{a6=y.P.a(a6.h(a8,a5))
d=J.a_(a6)
a0=A.L(d.h(a6,"id"))
a1=A.D(d.h(a6,"name"))
if(a1==null)a1=""
a6=A.D(d.h(a6,"mobile"))
a6=new B.aA2(a0,a1,a6==null?"":a6)}return new B.nk(a7,x,w,v,u,t,s,r,q,p,o,n,m,l,i,h,g,f===!0,a6)},
cig(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3="packets",a4="plans",a5=J.a_(a8),a6=y.h.a(a5.h(a8,"slots")),a7=new B.aA1(a6==null?C.es:a6)
A.D(a5.h(a8,"date"))
x=A.a([],y.U)
for(w=B.w3(a5.h(a8,"totals")),v=w.length,u=0;u<w.length;w.length===v||(0,A.y)(w),++u){t=w[u]
s=J.a_(t)
r=A.D(s.h(t,"item_id"))
if(r==null)r=""
q=A.D(s.h(t,"item"))
if(q==null)q=""
s=A.aM(s.h(t,"qty"))
s=s==null?null:C.q.aZ(s)
x.push(new B.a48(r,q,s==null?0:s))}w=B.a_n(J.ae(a7.$1("AM"),a3))
v=B.a_n(J.ae(a7.$1("AM"),a4))
s=B.a_n(J.ae(a7.$1("PM"),a3))
r=B.a_n(J.ae(a7.$1("PM"),a4))
q=A.a([],y.T)
for(a5=B.w3(a5.h(a8,a4)),p=a5.length,o=y.e,u=0;u<a5.length;a5.length===p||(0,A.y)(a5),++u){n=a5[u]
m=J.a_(n)
A.D(m.h(n,"plan_id"))
l=A.D(m.h(n,"customer"))
if(l==null)l=""
k=A.D(m.h(n,"phone"))
if(k==null)k=""
j=A.D(m.h(n,"address"))
if(j==null)j=""
i=A.D(m.h(n,"slot"))
if(i==null)i=""
h=A.D(m.h(n,"delivery_boy"))
if(h==null)h=""
g=A.a([],o)
for(f=B.w3(m.h(n,"lines")),e=f.length,d=0;d<f.length;f.length===e||(0,A.y)(f),++d){a0=f[d]
a1=J.a_(a0)
a2=A.D(a1.h(a0,"item"))
if(a2==null)a2=""
a1=A.aM(a1.h(a0,"qty"))
a1=a1==null?null:C.q.aZ(a1)
g.push(new A.aj1(a2,a1==null?0:a1))}m=A.aM(m.h(n,a3))
m=m==null?null:C.q.aZ(m)
q.push(new B.a47(l,k,j,i,h,g,m==null?0:m))}return new B.a49(x,w,v,s,r,q)},
bW0(b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=J.a_(b1),a9=A.L(a8.h(b1,"id")),b0=A.D(a8.h(b1,"date"))
if(b0==null)b0=""
x=A.D(a8.h(b1,"slot"))
if(x==null)x=""
w=A.D(a8.h(b1,"slot_label"))
if(w==null)w=""
v=A.D(a8.h(b1,"status"))
if(v==null)v=""
u=A.D(a8.h(b1,"warehouse_id"))
t=B.a_n(a8.h(b1,"plan_orders_made"))
s=A.a([],y.Y)
for(r=B.w3(a8.h(b1,"packing")),q=r.length,p=0;p<r.length;r.length===q||(0,A.y)(r),++p){o=r[p]
n=J.a_(o)
m=A.L(n.h(o,"item_id"))
l=A.D(n.h(o,"name"))
if(l==null)l=""
n=A.aM(n.h(o,"packets"))
n=n==null?a7:C.q.aZ(n)
s.push(new A.aj9(m,l,n==null?0:n))}r=A.a([],y._)
for(q=B.w3(a8.h(b1,"orders")),n=q.length,p=0;p<q.length;q.length===n||(0,A.y)(q),++p){k=q[p]
m=J.a_(k)
l=A.L(m.h(k,"id"))
j=A.D(m.h(k,"order_no"))
if(j==null)j=""
i=A.D(m.h(k,"source"))
if(i==null)i=""
h=A.D(m.h(k,"customer"))
if(h==null)h=""
g=A.D(m.h(k,"phone"))
if(g==null)g=""
f=A.D(m.h(k,"address"))
if(f==null)f=""
e=A.D(m.h(k,"items"))
if(e==null)e=""
d=A.aM(m.h(k,"packets"))
if(d!=null)C.q.aZ(d)
d=A.aM(m.h(k,"total"))
if(d==null)d=a7
if(d==null)d=0
a0=A.D(m.h(k,"payment"))
if(a0==null)a0=""
a1=A.D(m.h(k,"status"))
if(a1==null)a1=""
a2=A.D(m.h(k,"boy_id"))
a3=A.D(m.h(k,"boy"))
if(a3==null)a3=""
a4=A.D(m.h(k,"ice_box"))
if(a4==null)a4=""
a5=A.D(m.h(k,"reason"))
if(a5==null)a5=""
m=A.D(m.h(k,"collected"))
r.push(new B.Bi(l,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,m==null?"":m))}q=A.a([],y.w)
for(a8=B.w3(a8.h(b1,"boys")),n=a8.length,p=0;p<a8.length;a8.length===n||(0,A.y)(a8),++p){a6=a8[p]
m=J.a_(a6)
l=A.L(m.h(a6,"boy_id"))
j=A.D(m.h(a6,"name"))
if(j==null)j=""
i=A.aM(m.h(a6,"drops"))
i=i==null?a7:C.q.aZ(i)
if(i==null)i=0
h=A.aM(m.h(a6,"delivered"))
h=h==null?a7:C.q.aZ(h)
if(h==null)h=0
g=A.aM(m.h(a6,"not_delivered"))
g=g==null?a7:C.q.aZ(g)
if(g==null)g=0
f=A.aM(m.h(a6,"pending"))
f=f==null?a7:C.q.aZ(f)
if(f==null)f=0
e=A.aM(m.h(a6,"cash"))
if(e==null)e=a7
if(e==null)e=0
d=A.aM(m.h(a6,"upi"))
if(d==null)d=a7
if(d==null)d=0
a0=A.aM(m.h(a6,"ice_boxes_out"))
a0=a0==null?a7:C.q.aZ(a0)
if(a0==null)a0=0
m=A.aM(m.h(a6,"ice_boxes_back"))
q.push(new B.a4b(l,j,i,h,g,f,e,d,a0,m==null?a7:C.q.aZ(m)))}return new B.Gb(a9,b0,x,w,v,u,t,s,r,q)},
c1R(d){var x,w,v=J.a_(d),u=A.L(v.h(d,"id")),t=A.D(v.h(d,"name"))
if(t==null)t=""
x=A.D(v.h(d,"mobile"))
if(x==null)x=""
w=A.iB(v.h(d,"is_active"))
v=A.iB(v.h(d,"has_pin"))
return new B.nj(u,t,x,w!==!1,v===!0)},
x2:function x2(d,e,f){this.a=d
this.b=e
this.c=f},
x3:function x3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ou:function ou(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Bh:function Bh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4a:function a4a(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h},
aA2:function aA2(d,e,f){this.a=d
this.b=e
this.c=f},
nk:function nk(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
a48:function a48(d,e,f){this.a=d
this.b=e
this.c=f},
a47:function a47(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j},
a49:function a49(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
aA1:function aA1(d){this.a=d},
Bi:function Bi(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
a4b:function a4b(d,e,f,g,h,i,j,k,l,m){var _=this
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
Gb:function Gb(d,e,f,g,h,i,j,k,l,m){var _=this
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
nj:function nj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rf:function rf(d,e,f,g,h,i,j,k,l,m){var _=this
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
aAy:function aAy(){}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
D=c[159]
E=c[67]
B.x2.prototype={}
B.x3.prototype={}
B.ou.prototype={}
B.Bh.prototype={}
B.a4a.prototype={}
B.aA2.prototype={}
B.nk.prototype={}
B.a48.prototype={}
B.a47.prototype={}
B.a49.prototype={}
B.Bi.prototype={}
B.a4b.prototype={}
B.Gb.prototype={}
B.nj.prototype={}
B.rf.prototype={}
B.aAy.prototype={
Jr(d,e){return this.aT7(d,e)},
aT7(d,e){var x=0,w=A.u(y.Z),v,u,t,s,r
var $async$Jr=A.p(function(f,g){if(f===1)return A.q(g,w)
for(;;)switch(x){case 0:s=A.a([],y.L)
r=J
x=3
return A.h(C.S.d_("/home-delivery/customers?q="+A.fh(1,d,C.aM,!0),e),$async$Jr)
case 3:u=r.a3(g),t=y.P
case 4:if(!u.p()){x=5
break}s.push(B.c1S(t.a(u.gB(u))))
x=4
break
case 5:v=s
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Jr,w)},
I3(d,e,f,g){return this.aOn(d,e,f,g)},
aOn(d,e,f,g){var x=0,w=A.u(y.E),v,u
var $async$I3=A.p(function(h,i){if(h===1)return A.q(i,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bt("/home-delivery/customers",A.av(["phone",f,"name",e,"address",d],y.N,y.z),g),$async$I3)
case 3:v=u.c1S(i)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$I3,w)},
Mj(d,e){return this.b1E(d,e)},
b1E(d,e){var x=0,w=A.u(y.W),v,u,t,s,r,q,p,o,n,m,l
var $async$Mj=A.p(function(f,g){if(f===1)return A.q(g,w)
for(;;)switch(x){case 0:m=A.a([],y.j)
l=J
x=3
return A.h(C.S.d_("/home-delivery/products?q="+A.fh(1,d,C.aM,!0),e),$async$Mj)
case 3:u=l.a3(g),t=y.P
case 4:if(!u.p()){x=5
break}s=t.a(u.gB(u))
r=J.a_(s)
q=A.L(r.h(s,"id"))
p=A.D(r.h(s,"code"))
if(p==null)p=""
o=A.D(r.h(s,"name"))
if(o==null)o=""
n=A.aM(r.h(s,"price"))
if(n==null)n=null
if(n==null)n=0
s=A.aM(r.h(s,"mrp"))
if(s==null)s=null
m.push(new B.ou(q,p,o,n,s==null?0:s))
x=4
break
case 5:v=m
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Mj,w)},
M8(d,e,f){return this.b1h(d,e,f)},
b1h(d,e,f){var x=0,w=A.u(y.b),v,u,t,s,r,q
var $async$M8=A.p(function(g,h){if(g===1)return A.q(h,w)
for(;;)switch(x){case 0:r=A.a([],y.s)
if(e.length!==0)r.push("status="+e)
if(d.length!==0)r.push("slot="+d)
u=C.e.aB(r,"&")
r=A.a([],y.I)
q=J
x=3
return A.h(C.S.d_("/home-delivery/plans"+(u.length===0?"":"?"+u),f),$async$M8)
case 3:t=q.a3(h)
s=y.P
while(t.p())r.push(B.Ga(s.a(t.gB(t))))
v=r
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$M8,w)},
Dn(d,e,f){return this.b0T(d,e,f)},
b0S(d,e){return this.Dn(d,"",e)},
b0T(d,e,f){var x=0,w=A.u(y.o),v,u,t
var $async$Dn=A.p(function(g,h){if(g===1)return A.q(h,w)
for(;;)switch(x){case 0:u=e.length===0?"":"&slot="+e
t=B
x=3
return A.h(C.S.c0(0,"/home-delivery/packing?date="+d+u,f),$async$Dn)
case 3:v=t.cig(h)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Dn,w)},
M7(d,e){return this.b1g(d,e)},
b1g(d,e){var x=0,w=A.u(y.d),v,u
var $async$M7=A.p(function(f,g){if(f===1)return A.q(g,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.c0(0,"/home-delivery/plans/"+d,e),$async$M7)
case 3:v=u.Ga(g)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$M7,w)},
Jc(d,e){return this.aSN(d,e)},
aSN(d,e){var x=0,w=A.u(y.d),v,u
var $async$Jc=A.p(function(f,g){if(f===1)return A.q(g,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bt("/home-delivery/plans",d,e),$async$Jc)
case 3:v=u.Ga(g)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Jc,w)},
Nm(d,e,f){return this.b3L(d,e,f)},
b3L(d,e,f){var x=0,w=A.u(y.d),v,u
var $async$Nm=A.p(function(g,h){if(g===1)return A.q(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.fQ(0,"/home-delivery/plans/"+d,e,f),$async$Nm)
case 3:v=u.Ga(h)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Nm,w)},
M1(d,e,f,g,h,i){return this.b19(0,e,f,g,h,i)},
b19(d,e,f,g,h,i){var x=0,w=A.u(y.d),v,u
var $async$M1=A.p(function(j,k){if(j===1)return A.q(k,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bt("/home-delivery/plans/"+e+"/pause",A.av(["date_from",f,"date_to",h,"pause",g],y.N,y.z),i),$async$M1)
case 3:v=u.Ga(k)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$M1,w)},
Ju(d,e,f,g,h){return this.aTc(d,e,f,g,h)},
aTc(d,e,f,g,h){var x=0,w=A.u(y.d),v,u
var $async$Ju=A.p(function(i,j){if(i===1)return A.q(j,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bt("/home-delivery/plans/"+d+"/day-change",A.av(["day",e,"item_id",f,"qty",g],y.N,y.z),h),$async$Ju)
case 3:v=u.Ga(j)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Ju,w)},
vN(d,e,f){return this.alp(d,e,f)},
alp(d,e,f){var x=0,w=A.u(y.d),v,u
var $async$vN=A.p(function(g,h){if(g===1)return A.q(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bt("/home-delivery/plans/"+d+"/status",A.av(["status",e],y.N,y.z),f),$async$vN)
case 3:v=u.Ga(h)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$vN,w)},
MK(d,e,f){return this.b2P(d,e,f)},
b2P(d,e,f){var x=0,w=A.u(y.C),v,u
var $async$MK=A.p(function(g,h){if(g===1)return A.q(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.c0(0,"/home-delivery/runs?date="+d+"&slot="+e,f),$async$MK)
case 3:v=u.bW0(h)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$MK,w)},
U2(d,e,f,g,h){return this.aP4(0,e,f,g,h)},
aP4(d,e,f,g,h){var x=0,w=A.u(y.H),v,u
var $async$U2=A.p(function(i,j){if(i===1)return A.q(j,w)
for(;;)switch(x){case 0:u=A.B(y.N,y.z)
u.l(0,"order_ids",e)
u.l(0,"boy_id",f)
if(g!=null)u.l(0,"ice_box",g)
v=C.S.bt("/home-delivery/runs/assign",u,h)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$U2,w)},
JS(d,e,f){return this.aTQ(d,e,f)},
aTQ(d,e,f){var x=0,w=A.u(y.C),v,u
var $async$JS=A.p(function(g,h){if(g===1)return A.q(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bt("/home-delivery/runs/"+d+"/dispatch",A.av(["warehouse_id",e],y.N,y.z),f),$async$JS)
case 3:v=u.bW0(h)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$JS,w)},
IL(d,e,f,g){return this.aQn(0,e,f,g)},
aQn(d,e,f,g){var x=0,w=A.u(y.C),v,u
var $async$IL=A.p(function(h,i){if(h===1)return A.q(i,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bt("/home-delivery/runs/"+e+"/close",A.av(["boys",f],y.N,y.z),g),$async$IL)
case 3:v=u.bW0(i)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$IL,w)},
Va(d,e,f,g){return this.aTB(d,e,f,g)},
aTB(d,e,f,g){var x=0,w=A.u(y.H),v
var $async$Va=A.p(function(h,i){if(h===1)return A.q(i,w)
for(;;)switch(x){case 0:v=C.S.bt("/home-delivery/orders/"+d+"/delivered",A.av(["collected_by",f,"amount",e],y.N,y.z),g)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Va,w)},
Xe(d,e,f){return this.b_A(d,e,f)},
b_A(d,e,f){var x=0,w=A.u(y.H),v
var $async$Xe=A.p(function(g,h){if(g===1)return A.q(h,w)
for(;;)switch(x){case 0:v=C.S.bt("/home-delivery/orders/"+d+"/not-delivered",A.av(["reason",e],y.N,y.z),f)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Xe,w)},
BG(d){return this.aPz(d)},
aPz(d){var x=0,w=A.u(y.g),v,u,t,s,r
var $async$BG=A.p(function(e,f){if(e===1)return A.q(f,w)
for(;;)switch(x){case 0:s=A.a([],y.a)
r=J
x=3
return A.h(C.S.d_("/home-delivery/boys",d),$async$BG)
case 3:u=r.a3(f),t=y.P
case 4:if(!u.p()){x=5
break}s.push(B.c1R(t.a(u.gB(u))))
x=4
break
case 5:v=s
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$BG,w)},
zd(d,e,f,g,h){return this.akv(d,e,f,g,h)},
akv(d,e,f,g,h){var x=0,w=A.u(y.g),v,u,t,s,r,q
var $async$zd=A.p(function(i,j){if(i===1)return A.q(j,w)
for(;;)switch(x){case 0:s=A.av(["name",f,"mobile",e,"pin",g,"is_active",!0],y.N,y.X)
x=d==null?3:5
break
case 3:x=6
return A.h(C.S.Mc("/home-delivery/boys",s,h),$async$zd)
case 6:x=4
break
case 5:x=7
return A.h(C.S.Mk("/home-delivery/boys/"+d,s,h),$async$zd)
case 7:case 4:r=j
q=A.a([],y.a)
for(u=J.a3(r),t=y.P;u.p();)q.push(B.c1R(t.a(u.gB(u))))
v=q
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$zd,w)},
KY(d,e){return this.aXx(d,e)},
aXx(d,e){var x=0,w=A.u(y.R),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$KY=A.p(function(f,a0){if(f===1)return A.q(a0,w)
for(;;)switch(x){case 0:j=A.a([],y.i)
g=J
x=3
return A.h(C.S.d_("/home-delivery/invoices"+("?month="+d),e),$async$KY)
case 3:i=g.a3(a0)
h=y.P
while(i.p()){u=h.a(i.gB(i))
t=J.a_(u)
s=A.L(t.h(u,"id"))
r=A.D(t.h(u,"invoice_no"))
if(r==null)r=""
q=A.D(t.h(u,"customer"))
if(q==null)q=""
p=A.D(t.h(u,"phone"))
if(p==null)p=""
o=A.D(t.h(u,"kind"))
if(o==null)o=""
n=A.D(t.h(u,"period_from"))
if(n==null)n=""
m=A.D(t.h(u,"period_to"))
if(m==null)m=""
l=A.aM(t.h(u,"total"))
if(l==null)l=null
if(l==null)l=0
k=A.D(t.h(u,"status"))
if(k==null)k=""
j.push(new B.rf(s,r,q,p,o,n,m,l,k,B.w3(t.h(u,"lines"))))}v=j
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$KY,w)},
Xb(d,e){return this.b_p(d,e)},
b_p(d,e){var x=0,w=A.u(y.P),v
var $async$Xb=A.p(function(f,g){if(f===1)return A.q(g,w)
for(;;)switch(x){case 0:v=C.S.bt("/home-delivery/invoices/monthly",A.av(["month",d],y.N,y.z),e)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Xb,w)},
Wy(d,e,f,g){return this.aXw(d,e,f,g)},
aXw(d,e,f,g){var x=0,w=A.u(y.H),v
var $async$Wy=A.p(function(h,i){if(h===1)return A.q(i,w)
for(;;)switch(x){case 0:v=C.S.bt("/home-delivery/invoices/"+d+"/paid",A.av(["mode",e,"reference",f],y.N,y.z),g)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Wy,w)}}
var z=a.updateTypes([])
B.aA1.prototype={
$1(d){var x=y.h.a(J.ae(this.a,d))
return x==null?C.es:x},
$S:1091};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.P,[B.x2,B.x3,B.ou,B.Bh,B.a4a,B.aA2,B.nk,B.a48,B.a47,B.a49,B.Bi,B.a4b,B.Gb,B.nj,B.rf,B.aAy])
w(B.aA1,A.bQ)})()
var y=(function rtii(){var x=A.G
return{E:x("x3"),o:x("a49"),d:x("nk"),C:x("Gb"),Q:x("l<x2>"),a:x("l<nj>"),L:x("l<x3>"),i:x("l<rf>"),T:x("l<a47>"),U:x("l<a48>"),I:x("l<nk>"),S:x("l<a4a>"),u:x("l<Bh>"),j:x("l<ou>"),w:x("l<a4b>"),_:x("l<Bi>"),t:x("l<aA<c,@>>"),e:x("l<+item,qty(c,v)>"),Y:x("l<+itemId,name,packets(c,c,v)>"),s:x("l<c>"),g:x("i<nj>"),Z:x("i<x3>"),R:x("i<rf>"),b:x("i<nk>"),W:x("i<ou>"),P:x("aA<c,@>"),N:x("c"),z:x("@"),M:x("i<@>?"),h:x("aA<c,@>?"),X:x("P?"),H:x("~")}})();(function constants(){D.cg=new B.aAy()
D.SQ=new E.cA("Packets",2,!0)
D.SN=new E.cA("Delivered",2,!0)
D.qE=new E.cA("Customer",4,!1)
D.SP=new E.cA("Items",5,!1)})()};
(a=>{a["hOqoyBHVvgED6gcTkCkUdOGkzrE="]=a.current})($__dart_deferred_initializers__);