((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bWR(d){var x=J.a_(d)
return new B.v3(A.L(x.h(d,"id")),A.L(x.h(d,"invoice")),A.L(x.h(d,"store")),A.D(x.h(d,"cust")),A.L(x.h(d,"time")),A.L(x.h(d,"item")),A.b5(x.h(d,"qty")),A.b5(x.h(d,"amount")),A.L(x.h(d,"reason")),A.L(x.h(d,"refund_mode")),A.L(x.h(d,"status")),A.L(x.h(d,"by")))},
v3:function v3(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.Q=o},
aMn:function aMn(){},
aMp:function aMp(){},
aMo:function aMo(){},
J7:function J7(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.Q=o},
cte(d){var x,w,v,u=d.e,t=A.kq(u)
u=t==null?u:A.L5(t.kN())+" "+A.L0(t.kN())
x=C.q.am(d.r)
w=d.z
v=D.b1G.h(0,w)
w=v==null?w:v
return new B.J7(d.a,d.b,d.c,d.d,u,d.f,x,d.w,d.x,d.y,w,d.Q)},
oM:function oM(d,e){this.r=!1
this.a=d
this.f=e},
bOO:function bOO(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[88],B)
D=c[249]
B.v3.prototype={}
B.aMn.prototype={
D_(d,e){return this.aYI(d,e)},
aYI(d,e){var x=0,w=A.u(y.x),v,u
var $async$D_=A.p(function(f,g){if(f===1)return A.q(g,w)
for(;;)switch(x){case 0:u=J
x=3
return A.h(C.S.d_("/pos/returns?"+(d.length===0?"":"store_id="+d+"&")+"limit=500&offset=0",e),$async$D_)
case 3:v=u.ba(g,new B.aMp(),y.o).aF(0)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$D_,w)},
D0(d,e,f,g,h,i,j){return this.aYL(d,e,f,g,h,i,j)},
aYK(d,e,f,g,h,i){return this.D0(d,e,0,f,g,h,i)},
aYJ(d,e,f,g,h,i){return this.D0(d,e,f,null,g,h,i)},
aYL(d,e,f,g,h,i,j){var x=0,w=A.u(y.x),v,u,t,s,r,q,p,o
var $async$D0=A.p(function(k,l){if(k===1)return A.q(l,w)
for(;;)switch(x){case 0:r=i.length===0?"":"store_id="+i+"&"
q=C.h.G(h)
p=q.length===0?"":"&search="+A.fh(1,q,C.aM,!0)
q=A.a([],y.s)
for(u=new A.dh(d,A.w(d).i("dh<1,2>")).gW(0);u.p();){t=u.d
s=t.b
if(s.length!==0)q.push("&"+t.a+"="+A.fh(1,s,C.aM,!0))}o=J
x=3
return A.h(C.S.i_("/pos/returns?"+r+"limit="+e+"&offset="+f+p+C.e.ij(q),g,j),$async$D0)
case 3:v=o.ba(l,new B.aMo(),y.o).aF(0)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$D0,w)},
Jd(d,e,f,g,h,i,j){return this.aSR(d,e,f,g,h,i,j)},
aSR(d,e,f,g,h,i,j){var x=0,w=A.u(y.o),v,u,t,s,r,q
var $async$Jd=A.p(function(k,l){if(k===1)return A.q(l,w)
for(;;)switch(x){case 0:r=A.B(y.N,y.z)
r.l(0,"original_sale_id",e)
r.l(0,"reason",g)
if(h!=null)r.l(0,"refund_payment_method_id",h)
r.l(0,"processed_by",f)
r.l(0,"status",i)
u=A.a([],y.t)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.y)(d),++s)u.push(d[s].cC())
r.l(0,"items",u)
q=B
x=3
return A.h(C.S.bt("/pos/returns",r,j),$async$Jd)
case 3:v=q.bWR(l)
x=1
break
case 1:return A.r(v,w)}})
return A.t($async$Jd,w)}}
B.J7.prototype={
j(d){var x=this
return"SaleReturn(id: "+x.a+", invoice: "+x.b+", store: "+x.c+", cust: "+A.j(x.d)+", time: "+x.e+", item: "+x.f+", qty: "+x.r+", amount: "+A.j(x.w)+", reason: "+x.x+", refundMode: "+x.y+", status: "+x.z+", by: "+x.Q+")"},
k(d,e){var x,w,v=this
if(e==null)return!1
if(v!==e){x=!1
if(J.ay(e)===A.N(v))if(e instanceof B.J7){w=e.a===v.a
if(w||w){w=e.b===v.b
if(w||w){w=e.c===v.c
if(w||w){w=e.d==v.d
if(w||w){w=e.e===v.e
if(w||w){w=e.f===v.f
if(w||w){w=e.r===v.r
if(w||w){w=e.w===v.w
if(w||w){w=e.x===v.x
if(w||w){w=e.y===v.y
if(w||w){w=e.z===v.z
if(w||w){x=e.Q===v.Q
x=x||x}}}}}}}}}}}}}else x=!0
return x},
gD(d){var x=this
return A.ab(A.N(x),x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,x.z,x.Q,C.b,C.b,C.b,C.b,C.b,C.b,C.b)},
cC(){var x=this
return A.av(["id",x.a,"invoice",x.b,"store",x.c,"cust",x.d,"time",x.e,"item",x.f,"qty",x.r,"amount",x.w,"reason",x.x,"refundMode",x.y,"status",x.z,"by",x.Q],y.N,y.z)},
$idl:1}
B.oM.prototype={
eg(d,e){return this.aZA(d,e)},
aZA(d,e){var x=0,w=A.u(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$eg=A.p(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(d.length===0||e.length===0||r.r){x=1
break}r.r=!0
u=3
q=A.a([],y.P)
m=e.length
x=m>1?6:8
break
case 6:x=9
return A.h(D.kx.D_("",d),$async$eg)
case 9:p=g
J.hj(q,J.ba(p,B.bOR(),y.E))
x=7
break
case 8:l=y.E,k=0
case 10:if(!(k<e.length)){x=12
break}o=e[k]
x=13
return A.h(D.kx.D_(o,d),$async$eg)
case 13:n=g
J.hj(q,J.ba(n,B.bOR(),l))
case 11:e.length===m||(0,A.y)(e),++k
x=10
break
case 12:case 7:r.saw(0,q)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
r.r=!1
x=s.pop()
break
case 5:case 1:return A.r(v,w)
case 2:return A.q(t.at(-1),w)}})
return A.t($async$eg,w)}}
var z=a.updateTypes(["v3(@)","oM(ci<oM,i<dl>>)","dl(v3)"])
B.aMp.prototype={
$1(d){return B.bWR(y.a.a(d))},
$S:z+0}
B.aMo.prototype={
$1(d){return B.bWR(y.a.a(d))},
$S:z+0}
B.bOO.prototype={
$1(d){return new B.oM(new A.bU(y.I),D.HA)},
$S:z+1};(function installTearOffs(){var x=a._static_1
x(B,"bOR","cte",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.P,[B.v3,B.aMn,B.J7])
x(A.bQ,[B.aMp,B.aMo,B.bOO])
w(B.oM,A.bn)})()
A.bP(b.typeUniverse,JSON.parse('{"J7":{"dl":[]},"oM":{"bn":["i<dl>"],"bn.T":"i<dl>"}}'))
var y=(function rtii(){var x=A.G
return{t:x("l<aA<c,@>>"),P:x("l<dl>"),s:x("l<c>"),I:x("bU<dU<i<dl>>>"),x:x("i<v3>"),a:x("aA<c,@>"),o:x("v3"),E:x("dl"),N:x("c"),z:x("@"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.kx=new B.aMn()
D.HA=x([],y.P)
D.b3Q={refunded:0,exchanged:1,completed:2}
D.b1G=new A.bw(D.b3Q,["Refunded","Exchanged","Completed"],A.G("bw<c,c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cGe","Ln",()=>A.eI(new B.bOO(),A.G("oM"),A.G("i<dl>")))})()};
(a=>{a["4cVfa+CfKtXzTk72g+Bmj9YDtiM="]=a.current})($__dart_deferred_initializers__);