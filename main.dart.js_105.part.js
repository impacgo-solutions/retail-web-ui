((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
coC(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.a([],y.B),m=J.X(d),l=y.d.a(m.h(d,"stores"))
l=J.a0(l==null?C.ah:l)
x=y.y
while(l.n()){w=x.a(l.gB(l))
v=J.X(w)
u=A.B(v.h(w,"store_id"))
if(u==null)u=""
t=A.B(v.h(w,"code"))
if(t==null)t=""
s=A.B(v.h(w,"name"))
if(s==null)s=""
r=A.aH(v.h(w,"sales_total"))
if(r==null)r=0
q=A.aH(v.h(w,"bills_count"))
q=q==null?o:C.q.aO(q)
if(q==null)q=0
p=A.aH(v.h(w,"pending_requests"))
p=p==null?o:C.q.aO(p)
if(p==null)p=0
w=A.aH(v.h(w,"low_stock_items"))
w=w==null?o:C.q.aO(w)
n.push(new B.a6Q(u,t,s,r,q,p,w==null?0:w))}m=A.aH(m.h(d,"central_warehouse_low_stock"))
m=m==null?o:C.q.aO(m)
return new B.a6R(n,m==null?0:m)},
RA(d){return C.h.b2(C.t.j(A.b6(d)),4,"0")+"-"+C.h.b2(C.t.j(A.b4(d)),2,"0")+"-"+C.h.b2(C.t.j(A.cC(d)),2,"0")},
v6:function v6(d,e){this.a=d
this.d=e},
abg:function abg(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.r=h
_.x=i},
a6Q:function a6Q(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
a6R:function a6R(d,e){this.a=d
this.b=e},
aNn:function aNn(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[79],B)
D=c[202]
B.v6.prototype={}
B.abg.prototype={}
B.a6Q.prototype={}
B.a6R.prototype={}
B.aNn.prototype={
MG(d,e,f,g){return this.b2A(d,e,f,g)},
b2A(d,e,f,g){var x=0,w=A.t(y.A),v,u,t,s,r,q,p,o,n
var $async$MG=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:n=y.w
n=A.A(n,n)
n.l(0,"from_date",B.RA(d))
n.l(0,"to_date",B.RA(f))
if(e.length!==0)n.l(0,"store_id",e)
if(n.a===0)n=""
else{n=A.eN(null,null,null,null,n,null).f
n="?"+(n==null?"":n)}x=3
return A.h(C.S.cQ("/reports/payment-mix"+n,g),$async$MG)
case 3:u=i
n=A.a([],y.x)
for(t=J.a0(u),s=y.y;t.n();){r=s.a(t.gB(t))
q=J.X(r)
p=A.B(q.h(r,"name"))
if(p==null)p=""
A.B(q.h(r,"method_type"))
o=A.aH(q.h(r,"txn_count"))
if(o!=null)C.q.aO(o)
r=A.aH(q.h(r,"total_amount"))
n.push(new B.v6(p,r==null?0:r))}v=n
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$MG,w)},
Ef(d,e,f,g,h){return this.b4m(d,e,f,g,h)},
b4m(d,e,f,g,h){var x=0,w=A.t(y.v),v,u,t,s,r,q,p,o,n
var $async$Ef=A.o(function(i,j){if(i===1)return A.p(j,w)
for(;;)switch(x){case 0:n=y.w
n=A.A(n,n)
n.l(0,"from_date",B.RA(e))
n.l(0,"to_date",B.RA(g))
if(f.length!==0)n.l(0,"store_id",f)
if(d.length!==0)n.l(0,"cashier_employee_id",d)
n=A.eN(null,null,null,null,n,null).f
x=3
return A.h(C.S.bK(0,"/reports/tender-summary?"+(n==null?"":n),h),$async$Ef)
case 3:u=j
n=J.X(u)
t=A.aH(n.h(u,"bill_count"))
if(t!=null)C.q.aO(t)
t=A.aH(n.h(u,"total_sales"))
if(t==null)t=0
s=A.aH(n.h(u,"cash_sales"))
if(s==null)s=0
r=A.aH(n.h(u,"cash_refunds"))
if(r==null)r=0
q=A.aH(n.h(u,"card_sales"))
if(q==null)q=0
A.aH(n.h(u,"card_refunds"))
p=A.aH(n.h(u,"upi_sales"))
if(p==null)p=0
A.aH(n.h(u,"upi_refunds"))
o=A.aH(n.h(u,"wallet_sales"))
if(o==null)o=0
A.aH(n.h(u,"wallet_refunds"))
v=new B.abg(t,s,r,q,p,o)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Ef,w)},
Md(d,e,f,g){return this.b0Y(d,e,f,g)},
b0Y(d,e,f,g){var x=0,w=A.t(y.E),v,u,t
var $async$Md=A.o(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:u=y.w
u=A.A(u,u)
u.l(0,"from_date",B.RA(d))
u.l(0,"to_date",B.RA(f))
if(e.length!==0)u.l(0,"store_id",e)
u=A.eN(null,null,null,null,u,null).f
t=B
x=3
return A.h(C.S.bK(0,"/reports/network-summary?"+(u==null?"":u),g),$async$Md)
case 3:v=t.coC(i)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Md,w)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.P,[B.v6,B.abg,B.a6Q,B.a6R,B.aNn])})()
var y={B:A.H("l<a6Q>"),x:A.H("l<v6>"),A:A.H("i<v6>"),y:A.H("aA<c,@>"),E:A.H("a6R"),w:A.H("c"),v:A.H("abg"),d:A.H("i<@>?")};(function constants(){D.n0=new B.aNn()})()};
(a=>{a["jt8YuyJ0jAyFUpnVM0M6853o0lY="]=a.current})($__dart_deferred_initializers__);