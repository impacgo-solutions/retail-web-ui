((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cqh(d){var x=J.X(d),w=A.M(x.h(d,"role_id")),v=A.M(x.h(d,"role")),u=J.ba(y.i.a(x.h(d,"vals")),new B.aNV(),y.w).aF(0),t=J.m(x.h(d,"locked"),!0),s=x.h(d,"blurb")
return new B.o_(w,v,u,t,A.M(s==null?"":s),J.m(x.h(d,"custom"),!0))},
aNS(d){var x,w,v,u,t=J.X(d),s=y.i,r=y.w,q=J.ba(s.a(t.h(d,"columns")),new B.aNT(),r).aF(0)
s=J.ba(s.a(t.h(d,"rows")),new B.aNU(),y.D).aF(0)
x=A.A(r,r)
w=t.h(d,"legend")
if(w==null)w=C.lY
v=y.B
w=J.AB(v.a(w))
w=w.gW(w)
while(w.n()){u=w.gB(w)
x.l(0,A.j(u.a),A.j(u.b))}r=A.A(r,r)
x=t.h(d,"max_levels")
x=J.AB(v.a(x==null?C.lY:x))
x=x.gW(x)
while(x.n()){w=x.gB(x)
r.l(0,A.j(w.a),A.j(w.b))}J.m(t.h(d,"actor_super_admin"),!0)
return new B.RM(q,s,r)},
bZY(d){var x,w,v=J.X(d),u=A.M(v.h(d,"id")),t=v.h(d,"name")
t=A.M(t==null?"":t)
x=v.h(d,"email")
x=A.M(x==null?"":x)
w=v.h(d,"role")
return new B.no(u,t,x,A.M(w==null?"":w),A.B(v.h(d,"store")),!J.m(v.h(d,"active"),!1),A.B(v.h(d,"role_id")),!J.m(v.h(d,"retail_role"),!1),A.B(v.h(d,"store_id")),A.B(v.h(d,"phone")))},
o_:function o_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNV:function aNV(){},
RM:function RM(d,e,f){this.b=d
this.c=e
this.e=f},
aNT:function aNT(){},
aNU:function aNU(){},
no:function no(d,e,f,g,h,i,j,k,l,m){var _=this
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
arA:function arA(){},
arB:function arB(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[46],B)
D=c[129]
B.o_.prototype={}
B.RM.prototype={}
B.no.prototype={}
B.arA.prototype={
yV(d){return this.b4d(d)},
b4d(d){var x=0,w=A.t(y.E),v,u
var $async$yV=A.o(function(e,f){if(e===1)return A.p(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.bK(0,"/admin/role-matrix",d),$async$yV)
case 3:v=u.aNS(f)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$yV,w)},
EX(d,e,f){return this.aly(d,e,f)},
aly(d,e,f){var x=0,w=A.t(y.E),v,u
var $async$EX=A.o(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:u=B
x=3
return A.h(C.S.fW(0,"/admin/role-matrix/"+e,A.av(["levels",f],y.w,y.b),d),$async$EX)
case 3:v=u.aNS(h)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$EX,w)},
JS(d,e,f,g){return this.aUa(d,e,f,g)},
aUa(d,e,f,g){var x=0,w=A.t(y.E),v,u,t
var $async$JS=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:u=A.A(y.w,y.b)
u.l(0,"name",e)
if(g.length!==0)u.l(0,"description",g)
if(f!=null)u.l(0,"copy_from_role_id",f)
t=B
x=3
return A.h(C.S.bs("/admin/roles",u,d),$async$JS)
case 3:v=t.aNS(i)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$JS,w)},
O6(d,e,f,g){return this.b5n(d,e,f,g)},
b5n(d,e,f,g){var x=0,w=A.t(y.E),v,u,t
var $async$O6=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:u=A.A(y.w,y.b)
if(g!=null)u.l(0,"name",g)
if(f!=null)u.l(0,"description",f)
t=B
x=3
return A.h(C.S.hJ("/admin/roles/"+e,u,d),$async$O6)
case 3:v=t.aNS(i)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$O6,w)},
Oe(d){return this.b5F(d)},
b5F(d){var x=0,w=A.t(y.n),v,u
var $async$Oe=A.o(function(e,f){if(e===1)return A.p(f,w)
for(;;)switch(x){case 0:u=J
x=3
return A.h(C.S.cQ("/admin/users",d),$async$Oe)
case 3:v=u.ba(f,new B.arB(),y.m).aF(0)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Oe,w)},
K0(d,e,f,g,h,i,j){return this.aUi(d,e,f,g,h,i,j)},
aUi(d,e,f,g,h,i,j){var x=0,w=A.t(y.m),v,u,t
var $async$K0=A.o(function(k,l){if(k===1)return A.p(l,w)
for(;;)switch(x){case 0:u=A.A(y.w,y.b)
u.l(0,"full_name",f)
u.l(0,"email",e)
u.l(0,"password",g)
u.l(0,"role_id",i)
if(h.length!==0)u.l(0,"phone",h)
if(j!=null)u.l(0,"store_id",j)
t=B
x=3
return A.h(C.S.bs("/admin/users",u,d),$async$K0)
case 3:v=t.bZY(l)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$K0,w)},
Ew(d,e,f,g,h,i,j,k){return this.b5y(d,e,f,g,h,i,j,k)},
b5x(d,e,f,g,h,i,j){return this.Ew(d,e,null,f,g,h,i,j)},
b5w(d,e,f){var x=null
return this.Ew(d,e,f,!1,x,x,x,x)},
b5y(d,e,f,g,h,i,j,k){var x=0,w=A.t(y.m),v,u,t
var $async$Ew=A.o(function(l,m){if(l===1)return A.p(m,w)
for(;;)switch(x){case 0:u=A.A(y.w,y.b)
if(h!=null)u.l(0,"full_name",h)
if(i!=null)u.l(0,"phone",i)
if(g)u.l(0,"store_id",null)
else if(k!=null)u.l(0,"store_id",k)
if(j!=null)u.l(0,"role_id",j)
if(f!=null)u.l(0,"active",f)
t=B
x=3
return A.h(C.S.hJ("/admin/users/"+e,u,d),$async$Ew)
case 3:v=t.bZY(m)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Ew,w)}}
var z=a.updateTypes(["o_(@)","no(@)"])
B.aNV.prototype={
$1(d){return A.j(d)},
$S:129}
B.aNT.prototype={
$1(d){return A.j(d)},
$S:129}
B.aNU.prototype={
$1(d){return B.cqh(y.y.a(d))},
$S:z+0}
B.arB.prototype={
$1(d){return B.bZY(y.y.a(d))},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.P,[B.o_,B.RM,B.no,B.arA])
x(A.bN,[B.aNV,B.aNT,B.aNU,B.arB])})()
var y={m:A.H("no"),n:A.H("i<no>"),i:A.H("i<@>"),y:A.H("aA<c,@>"),B:A.H("aA<@,@>"),E:A.H("RM"),D:A.H("o_"),w:A.H("c"),b:A.H("@")};(function constants(){D.fi=new B.arA()})()};
(a=>{a["bZcWqSIlq1FChXfKfrUNgAyh81w="]=a.current})($__dart_deferred_initializers__);