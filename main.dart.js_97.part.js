((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cmo(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.a([],y.B),m=J.Z(d),l=y.d.a(m.h(d,"stores"))
l=J.a1(l==null?C.ai:l)
x=y.y
while(l.n()){w=x.a(l.gB(l))
v=J.Z(w)
u=A.E(v.h(w,"store_id"))
if(u==null)u=""
t=A.E(v.h(w,"code"))
if(t==null)t=""
s=A.E(v.h(w,"name"))
if(s==null)s=""
r=A.aG(v.h(w,"sales_total"))
if(r==null)r=0
q=A.aG(v.h(w,"bills_count"))
q=q==null?o:C.r.aU(q)
if(q==null)q=0
p=A.aG(v.h(w,"pending_requests"))
p=p==null?o:C.r.aU(p)
if(p==null)p=0
w=A.aG(v.h(w,"low_stock_items"))
w=w==null?o:C.r.aU(w)
n.push(new B.a6H(u,t,s,r,q,p,w==null?0:w))}m=A.aG(m.h(d,"central_warehouse_low_stock"))
m=m==null?o:C.r.aU(m)
return new B.a6I(n,m==null?0:m)},
Rn(d){return C.h.bb(C.t.j(A.bi(d)),4,"0")+"-"+C.h.bb(C.t.j(A.bb(d)),2,"0")+"-"+C.h.bb(C.t.j(A.cQ(d)),2,"0")},
v_:function v_(d,e){this.a=d
this.d=e},
ab3:function ab3(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.r=h
_.x=i},
a6H:function a6H(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
a6I:function a6I(d,e){this.a=d
this.b=e},
aNe:function aNe(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[76],B)
D=c[197]
B.v_.prototype={}
B.ab3.prototype={}
B.a6H.prototype={}
B.a6I.prototype={}
B.aNe.prototype={
Mp(d,e,f,g){return this.b3_(d,e,f,g)},
b3_(d,e,f,g){var x=0,w=A.t(y.A),v,u,t,s,r,q,p,o,n
var $async$Mp=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:n=y.w
n=A.z(n,n)
n.k(0,"from_date",B.Rn(d))
n.k(0,"to_date",B.Rn(f))
if(e.length!==0)n.k(0,"store_id",e)
if(n.a===0)n=""
else{n=A.eF(null,null,null,null,n,null).f
n="?"+(n==null?"":n)}x=3
return A.h(C.T.cX("/reports/payment-mix"+n,g),$async$Mp)
case 3:u=i
n=A.a([],y.x)
for(t=J.a1(u),s=y.y;t.n();){r=s.a(t.gB(t))
q=J.Z(r)
p=A.E(q.h(r,"name"))
if(p==null)p=""
A.E(q.h(r,"method_type"))
o=A.aG(q.h(r,"txn_count"))
if(o!=null)C.r.aU(o)
r=A.aG(q.h(r,"total_amount"))
n.push(new B.v_(p,r==null?0:r))}v=n
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Mp,w)},
E9(d,e,f,g,h){return this.b4S(d,e,f,g,h)},
b4S(d,e,f,g,h){var x=0,w=A.t(y.v),v,u,t,s,r,q,p,o,n
var $async$E9=A.o(function(i,j){if(i===1)return A.p(j,w)
for(;;)switch(x){case 0:n=y.w
n=A.z(n,n)
n.k(0,"from_date",B.Rn(e))
n.k(0,"to_date",B.Rn(g))
if(f.length!==0)n.k(0,"store_id",f)
if(d.length!==0)n.k(0,"cashier_employee_id",d)
n=A.eF(null,null,null,null,n,null).f
x=3
return A.h(C.T.bZ(0,"/reports/tender-summary?"+(n==null?"":n),h),$async$E9)
case 3:u=j
n=J.Z(u)
t=A.aG(n.h(u,"bill_count"))
if(t!=null)C.r.aU(t)
t=A.aG(n.h(u,"total_sales"))
if(t==null)t=0
s=A.aG(n.h(u,"cash_sales"))
if(s==null)s=0
r=A.aG(n.h(u,"cash_refunds"))
if(r==null)r=0
q=A.aG(n.h(u,"card_sales"))
if(q==null)q=0
A.aG(n.h(u,"card_refunds"))
p=A.aG(n.h(u,"upi_sales"))
if(p==null)p=0
A.aG(n.h(u,"upi_refunds"))
o=A.aG(n.h(u,"wallet_sales"))
if(o==null)o=0
A.aG(n.h(u,"wallet_refunds"))
v=new B.ab3(t,s,r,q,p,o)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$E9,w)},
LX(d,e,f,g){return this.b1l(d,e,f,g)},
b1l(d,e,f,g){var x=0,w=A.t(y.E),v,u,t
var $async$LX=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:u=y.w
u=A.z(u,u)
u.k(0,"from_date",B.Rn(d))
u.k(0,"to_date",B.Rn(f))
if(e.length!==0)u.k(0,"store_id",e)
u=A.eF(null,null,null,null,u,null).f
t=B
x=3
return A.h(C.T.bZ(0,"/reports/network-summary?"+(u==null?"":u),g),$async$LX)
case 3:v=t.cmo(i)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$LX,w)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.P,[B.v_,B.ab3,B.a6H,B.a6I,B.aNe])})()
var y={B:A.G("l<a6H>"),x:A.G("l<v_>"),A:A.G("i<v_>"),y:A.G("aA<c,@>"),E:A.G("a6I"),w:A.G("c"),v:A.G("ab3"),d:A.G("i<@>?")};(function constants(){D.mX=new B.aNe()})()};
(a=>{a["+WSQFwlczRwU9olWF+iSyH5IJbc="]=a.current})($__dart_deferred_initializers__);