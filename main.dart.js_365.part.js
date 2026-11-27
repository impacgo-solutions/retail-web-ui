((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
clc(d){var x=J.a_(d),w=A.L(x.h(d,"role_id")),v=A.L(x.h(d,"role")),u=J.b9(y.i.a(x.h(d,"vals")),new B.aMA(),y.w).aF(0),t=J.m(x.h(d,"locked"),!0),s=x.h(d,"blurb")
return new B.nH(w,v,u,t,A.L(s==null?"":s),J.m(x.h(d,"custom"),!0))},
aMx(d){var x,w,v,u,t=J.a_(d),s=y.i,r=y.w,q=J.b9(s.a(t.h(d,"columns")),new B.aMy(),r).aF(0)
s=J.b9(s.a(t.h(d,"rows")),new B.aMz(),y.D).aF(0)
x=A.B(r,r)
w=t.h(d,"legend")
if(w==null)w=C.lK
v=y.B
w=J.A4(v.a(w))
w=w.gW(w)
while(w.p()){u=w.gB(w)
x.l(0,A.j(u.a),A.j(u.b))}r=A.B(r,r)
t=t.h(d,"max_levels")
t=J.A4(v.a(t==null?C.lK:t))
t=t.gW(t)
while(t.p()){x=t.gB(t)
r.l(0,A.j(x.a),A.j(x.b))}return new B.Ra(q,s,r)},
bV2(d){var x,w,v=J.a_(d),u=A.L(v.h(d,"id")),t=v.h(d,"name")
t=A.L(t==null?"":t)
x=v.h(d,"email")
x=A.L(x==null?"":x)
w=v.h(d,"role")
return new B.n4(u,t,x,A.L(w==null?"":w),A.E(v.h(d,"store")),!J.m(v.h(d,"active"),!1),A.E(v.h(d,"role_id")),!J.m(v.h(d,"retail_role"),!1),A.E(v.h(d,"store_id")),A.E(v.h(d,"phone")))},
nH:function nH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aMA:function aMA(){},
Ra:function Ra(d,e,f){this.a=d
this.b=e
this.d=f},
aMy:function aMy(){},
aMz:function aMz(){},
n4:function n4(d,e,f,g,h,i,j,k,l,m){var _=this
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
aqx:function aqx(){},
aqy:function aqy(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[45],B)
D=c[118]
B.nH.prototype={}
B.Ra.prototype={}
B.n4.prototype={}
B.aqx.prototype={
yF(d){return this.b2J(d)},
b2J(d){var x=0,w=A.u(y.E),v,u
var $async$yF=A.p(function(e,f){if(e===1)return A.q(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.c0(0,"/admin/role-matrix",d),$async$yF)
case 3:v=u.aMx(f)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$yF,w)},
Er(d,e,f){return this.aku(d,e,f)},
aku(d,e,f){var x=0,w=A.u(y.E),v,u
var $async$Er=A.p(function(g,h){if(g===1)return A.q(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.h6(0,"/admin/role-matrix/"+e,A.aw(["levels",f],y.w,y.b),d),$async$Er)
case 3:v=u.aMx(h)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Er,w)},
Jd(d,e,f,g){return this.aSQ(d,e,f,g)},
aSQ(d,e,f,g){var x=0,w=A.u(y.E),v,u,t
var $async$Jd=A.p(function(h,i){if(h===1)return A.q(i,w)
for(;;)switch(x){case 0:u=A.B(y.w,y.b)
u.l(0,"name",e)
if(g.length!==0)u.l(0,"description",g)
if(f!=null)u.l(0,"copy_from_role_id",f)
t=B
x=3
return A.h(C.S.bt("/admin/roles",u,d),$async$Jd)
case 3:v=t.aMx(i)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Jd,w)},
No(d,e,f,g){return this.b3R(d,e,f,g)},
b3R(d,e,f,g){var x=0,w=A.u(y.E),v,u,t
var $async$No=A.p(function(h,i){if(h===1)return A.q(i,w)
for(;;)switch(x){case 0:u=A.B(y.w,y.b)
if(g!=null)u.l(0,"name",g)
if(f!=null)u.l(0,"description",f)
t=B
x=3
return A.h(C.S.hI("/admin/roles/"+e,u,d),$async$No)
case 3:v=t.aMx(i)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$No,w)},
Nv(d){return this.b47(d)},
b47(d){var x=0,w=A.u(y.n),v,u
var $async$Nv=A.p(function(e,f){if(e===1)return A.q(f,w)
for(;;)switch(x){case 0:u=J
x=3
return A.h(C.S.d_("/admin/users",d),$async$Nv)
case 3:v=u.b9(f,new B.aqy(),y.m).aF(0)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Nv,w)},
Jm(d,e,f,g,h,i,j){return this.aSY(d,e,f,g,h,i,j)},
aSY(d,e,f,g,h,i,j){var x=0,w=A.u(y.m),v,u,t
var $async$Jm=A.p(function(k,l){if(k===1)return A.q(l,w)
for(;;)switch(x){case 0:u=A.B(y.w,y.b)
u.l(0,"full_name",f)
u.l(0,"email",e)
u.l(0,"password",g)
u.l(0,"role_id",i)
if(h.length!==0)u.l(0,"phone",h)
if(j!=null)u.l(0,"store_id",j)
t=B
x=3
return A.h(C.S.bt("/admin/users",u,d),$async$Jm)
case 3:v=t.bV2(l)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Jm,w)},
E1(d,e,f,g,h,i,j,k){return this.b41(d,e,f,g,h,i,j,k)},
b40(d,e,f,g,h,i,j){return this.E1(d,e,null,f,g,h,i,j)},
b4_(d,e,f){var x=null
return this.E1(d,e,f,!1,x,x,x,x)},
b41(d,e,f,g,h,i,j,k){var x=0,w=A.u(y.m),v,u,t
var $async$E1=A.p(function(l,m){if(l===1)return A.q(m,w)
for(;;)switch(x){case 0:u=A.B(y.w,y.b)
if(h!=null)u.l(0,"full_name",h)
if(i!=null)u.l(0,"phone",i)
if(g)u.l(0,"store_id",null)
else if(k!=null)u.l(0,"store_id",k)
if(j!=null)u.l(0,"role_id",j)
if(f!=null)u.l(0,"active",f)
t=B
x=3
return A.h(C.S.hI("/admin/users/"+e,u,d),$async$E1)
case 3:v=t.bV2(m)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$E1,w)}}
var z=a.updateTypes(["nH(@)","n4(@)"])
B.aMA.prototype={
$1(d){return A.j(d)},
$S:139}
B.aMy.prototype={
$1(d){return A.j(d)},
$S:139}
B.aMz.prototype={
$1(d){return B.clc(y.y.a(d))},
$S:z+0}
B.aqy.prototype={
$1(d){return B.bV2(y.y.a(d))},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.P,[B.nH,B.Ra,B.n4,B.aqx])
x(A.bQ,[B.aMA,B.aMy,B.aMz,B.aqy])})()
var y={m:A.G("n4"),n:A.G("i<n4>"),i:A.G("i<@>"),y:A.G("aA<c,@>"),B:A.G("aA<@,@>"),E:A.G("Ra"),D:A.G("nH"),w:A.G("c"),b:A.G("@")};(function constants(){D.fd=new B.aqx()})()};
(a=>{a["Dm0StOF6noVlRiRWKzUiMiNrUUw="]=a.current})($__dart_deferred_initializers__);