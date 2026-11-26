((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
co5(d){var x=J.Z(d),w=A.M(x.h(d,"role_id")),v=A.M(x.h(d,"role")),u=J.b7(y.i.a(x.h(d,"vals")),new B.aNM(),y.w).aF(0),t=J.m(x.h(d,"locked"),!0),s=x.h(d,"blurb")
return new B.nS(w,v,u,t,A.M(s==null?"":s),J.m(x.h(d,"custom"),!0))},
aNJ(d){var x,w,v,u,t=J.Z(d),s=y.i,r=y.w,q=J.b7(s.a(t.h(d,"columns")),new B.aNK(),r).aF(0)
s=J.b7(s.a(t.h(d,"rows")),new B.aNL(),y.D).aF(0)
x=A.z(r,r)
w=t.h(d,"legend")
if(w==null)w=C.lR
v=y.B
w=J.tQ(v.a(w))
w=w.gW(w)
while(w.n()){u=w.gB(w)
x.k(0,A.j(u.a),A.j(u.b))}r=A.z(r,r)
x=t.h(d,"max_levels")
x=J.tQ(v.a(x==null?C.lR:x))
x=x.gW(x)
while(x.n()){w=x.gB(x)
r.k(0,A.j(w.a),A.j(w.b))}return new B.Rz(J.m(t.h(d,"actor_super_admin"),!0),q,s,r)},
bXl(d){var x,w,v=J.Z(d),u=A.M(v.h(d,"id")),t=v.h(d,"name")
t=A.M(t==null?"":t)
x=v.h(d,"email")
x=A.M(x==null?"":x)
w=v.h(d,"role")
return new B.ne(u,t,x,A.M(w==null?"":w),A.E(v.h(d,"store")),!J.m(v.h(d,"active"),!1),A.E(v.h(d,"role_id")),!J.m(v.h(d,"retail_role"),!1),A.E(v.h(d,"store_id")),A.E(v.h(d,"phone")))},
nS:function nS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNM:function aNM(){},
Rz:function Rz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=g},
aNK:function aNK(){},
aNL:function aNL(){},
ne:function ne(d,e,f,g,h,i,j,k,l,m){var _=this
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
arg:function arg(){},
arh:function arh(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[45],B)
D=c[120]
B.nS.prototype={}
B.Rz.prototype={}
B.ne.prototype={}
B.arg.prototype={
yX(d){return this.b4K(d)},
b4K(d){var x=0,w=A.t(y.E),v,u
var $async$yX=A.o(function(e,f){if(e===1)return A.p(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.T.bZ(0,"/admin/role-matrix",d),$async$yX)
case 3:v=u.aNJ(f)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$yX,w)},
EO(d,e,f){return this.am3(d,e,f)},
am3(d,e,f){var x=0,w=A.t(y.E),v,u
var $async$EO=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.T.fX(0,"/admin/role-matrix/"+e,A.au(["levels",f],y.w,y.b),d),$async$EO)
case 3:v=u.aNJ(h)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$EO,w)},
JD(d,e,f,g){return this.aUA(d,e,f,g)},
aUA(d,e,f,g){var x=0,w=A.t(y.E),v,u,t
var $async$JD=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:u=A.z(y.w,y.b)
u.k(0,"name",e)
if(g.length!==0)u.k(0,"description",g)
if(f!=null)u.k(0,"copy_from_role_id",f)
t=B
x=3
return A.h(C.T.br("/admin/roles",u,d),$async$JD)
case 3:v=t.aNJ(i)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$JD,w)},
NS(d,e,f,g){return this.b5S(d,e,f,g)},
b5S(d,e,f,g){var x=0,w=A.t(y.E),v,u,t
var $async$NS=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:u=A.z(y.w,y.b)
if(g!=null)u.k(0,"name",g)
if(f!=null)u.k(0,"description",f)
t=B
x=3
return A.h(C.T.hG("/admin/roles/"+e,u,d),$async$NS)
case 3:v=t.aNJ(i)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$NS,w)},
NZ(d){return this.b6a(d)},
b6a(d){var x=0,w=A.t(y.n),v,u
var $async$NZ=A.o(function(e,f){if(e===1)return A.p(f,w)
for(;;)switch(x){case 0:u=J
x=3
return A.h(C.T.cX("/admin/users",d),$async$NZ)
case 3:v=u.b7(f,new B.arh(),y.m).aF(0)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$NZ,w)},
JM(d,e,f,g,h,i,j){return this.aUI(d,e,f,g,h,i,j)},
aUI(d,e,f,g,h,i,j){var x=0,w=A.t(y.m),v,u,t
var $async$JM=A.o(function(k,l){if(k===1)return A.p(l,w)
for(;;)switch(x){case 0:u=A.z(y.w,y.b)
u.k(0,"full_name",f)
u.k(0,"email",e)
u.k(0,"password",g)
u.k(0,"role_id",i)
if(h.length!==0)u.k(0,"phone",h)
if(j!=null)u.k(0,"store_id",j)
t=B
x=3
return A.h(C.T.br("/admin/users",u,d),$async$JM)
case 3:v=t.bXl(l)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$JM,w)},
Eq(d,e,f,g,h,i,j,k){return this.b63(d,e,f,g,h,i,j,k)},
b62(d,e,f,g,h,i,j){return this.Eq(d,e,null,f,g,h,i,j)},
b61(d,e,f){var x=null
return this.Eq(d,e,f,!1,x,x,x,x)},
b63(d,e,f,g,h,i,j,k){var x=0,w=A.t(y.m),v,u,t
var $async$Eq=A.o(function(l,m){if(l===1)return A.p(m,w)
for(;;)switch(x){case 0:u=A.z(y.w,y.b)
if(h!=null)u.k(0,"full_name",h)
if(i!=null)u.k(0,"phone",i)
if(g)u.k(0,"store_id",null)
else if(k!=null)u.k(0,"store_id",k)
if(j!=null)u.k(0,"role_id",j)
if(f!=null)u.k(0,"active",f)
t=B
x=3
return A.h(C.T.hG("/admin/users/"+e,u,d),$async$Eq)
case 3:v=t.bXl(m)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Eq,w)}}
var z=a.updateTypes(["nS(@)","ne(@)"])
B.aNM.prototype={
$1(d){return A.j(d)},
$S:139}
B.aNK.prototype={
$1(d){return A.j(d)},
$S:139}
B.aNL.prototype={
$1(d){return B.co5(y.y.a(d))},
$S:z+0}
B.arh.prototype={
$1(d){return B.bXl(y.y.a(d))},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.P,[B.nS,B.Rz,B.ne,B.arg])
x(A.bO,[B.aNM,B.aNK,B.aNL,B.arh])})()
var y={m:A.G("ne"),n:A.G("i<ne>"),i:A.G("i<@>"),y:A.G("aA<c,@>"),B:A.G("aA<@,@>"),E:A.G("Rz"),D:A.G("nS"),w:A.G("c"),b:A.G("@")};(function constants(){D.fh=new B.arg()})()};
(a=>{a["/dIpvUzBL7suirqJ2j3K7ZOdRg0="]=a.current})($__dart_deferred_initializers__);