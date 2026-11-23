((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bKk(d){var x=J.ah(d)
return new B.us(A.H(x.h(d,"id")),A.H(x.h(d,"invoice")),A.H(x.h(d,"store")),A.ag(x.h(d,"cust")),A.H(x.h(d,"time")),A.H(x.h(d,"item")),A.aZ(x.h(d,"qty")),A.aZ(x.h(d,"amount")),A.H(x.h(d,"reason")),A.H(x.h(d,"refund_mode")),A.H(x.h(d,"status")),A.H(x.h(d,"by")))},
us:function us(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aJN:function aJN(){},
aJP:function aJP(){},
aJO:function aJO(){},
HZ:function HZ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cg9(d){var x,w,v,u=d.e,t=A.pa(u)
u=t==null?u:A.JS(t.mc())+" "+A.JN(t.mc())
x=C.q.ar(d.r)
w=d.z
v=D.aYk.h(0,w)
w=v==null?w:v
return new B.HZ(d.a,d.b,d.c,d.d,u,d.f,x,d.w,d.x,d.y,w,d.Q)},
om:function om(d,e){this.r=!1
this.a=d
this.f=e},
bFw:function bFw(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[72],B)
D=c[192]
B.us.prototype={}
B.aJN.prototype={
C7(d,e){return this.aUX(d,e)},
aUX(d,e){var x=0,w=A.v(y.x),v,u
var $async$C7=A.q(function(f,g){if(f===1)return A.r(g,w)
for(;;)switch(x){case 0:u=J
x=3
return A.k(C.a2.ea("/pos/returns?"+(d.length===0?"":"store_id="+d+"&")+"limit=500&offset=0",e),$async$C7)
case 3:v=u.b7(g,new B.aJP(),y.o).aE(0)
x=1
break
case 1:return A.t(v,w)}})
return A.u($async$C7,w)},
C8(d,e,f,g,h,i,j){return this.aV_(d,e,f,g,h,i,j)},
aUZ(d,e,f,g,h,i){return this.C8(d,e,0,f,g,h,i)},
aUY(d,e,f,g,h,i){return this.C8(d,e,f,null,g,h,i)},
aV_(d,e,f,g,h,i,j){var x=0,w=A.v(y.x),v,u,t,s,r,q,p,o
var $async$C8=A.q(function(k,l){if(k===1)return A.r(l,w)
for(;;)switch(x){case 0:r=i.length===0?"":"store_id="+i+"&"
q=C.m.R(h)
p=q.length===0?"":"&search="+A.eP(1,q,C.aA,!0)
q=A.a([],y.s)
for(u=new A.d1(d,A.w(d).i("d1<1,2>")).gU(0);u.p();){t=u.d
s=t.b
if(s.length!==0)q.push("&"+t.a+"="+A.eP(1,s,C.aA,!0))}o=J
x=3
return A.k(C.a2.hM("/pos/returns?"+r+"limit="+e+"&offset="+f+p+C.e.i3(q),g,j),$async$C8)
case 3:v=o.b7(l,new B.aJO(),y.o).aE(0)
x=1
break
case 1:return A.t(v,w)}})
return A.u($async$C8,w)},
HQ(d,e,f,g,h,i,j){return this.aP9(d,e,f,g,h,i,j)},
aP9(d,e,f,g,h,i,j){var x=0,w=A.v(y.o),v,u,t,s,r,q
var $async$HQ=A.q(function(k,l){if(k===1)return A.r(l,w)
for(;;)switch(x){case 0:r=A.x(y.N,y.z)
r.l(0,"original_sale_id",e)
r.l(0,"reason",g)
if(h!=null)r.l(0,"refund_payment_method_id",h)
r.l(0,"processed_by",f)
r.l(0,"status",i)
u=A.a([],y.t)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.A)(d),++s)u.push(d[s].cs())
r.l(0,"items",u)
q=B
x=3
return A.k(C.a2.cv("/pos/returns",r,j),$async$HQ)
case 3:v=q.bKk(l)
x=1
break
case 1:return A.t(v,w)}})
return A.u($async$HQ,w)}}
B.HZ.prototype={
j(d){var x=this
return"SaleReturn(id: "+x.a+", invoice: "+x.b+", store: "+x.c+", cust: "+A.n(x.d)+", time: "+x.e+", item: "+x.f+", qty: "+x.r+", amount: "+A.n(x.w)+", reason: "+x.x+", refundMode: "+x.y+", status: "+x.z+", by: "+x.Q+")"},
k(d,e){var x,w,v=this
if(e==null)return!1
if(v!==e){x=!1
if(J.aq(e)===A.I(v))if(e instanceof B.HZ){w=e.a===v.a
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
gC(d){var x=this
return A.a0(A.I(x),x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,x.z,x.Q,C.b,C.b,C.b,C.b,C.b,C.b,C.b)},
cs(){var x=this
return A.av(["id",x.a,"invoice",x.b,"store",x.c,"cust",x.d,"time",x.e,"item",x.f,"qty",x.r,"amount",x.w,"reason",x.x,"refundMode",x.y,"status",x.z,"by",x.Q],y.N,y.z)},
$id5:1}
B.om.prototype={
el(d,e){return this.aVO(d,e)},
aVO(d,e){var x=0,w=A.v(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$el=A.q(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(d.length===0||e.length===0||r.r){x=1
break}r.r=!0
u=3
q=A.a([],y.P)
m=e.length
x=m>1?6:8
break
case 6:x=9
return A.k(D.jZ.C7("",d),$async$el)
case 9:p=g
J.hl(q,J.b7(p,B.bFy(),y.E))
x=7
break
case 8:l=y.E,k=0
case 10:if(!(k<e.length)){x=12
break}o=e[k]
x=13
return A.k(D.jZ.C7(o,d),$async$el)
case 13:n=g
J.hl(q,J.b7(n,B.bFy(),l))
case 11:e.length===m||(0,A.A)(e),++k
x=10
break
case 12:case 7:r.sav(0,q)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
r.r=!1
x=s.pop()
break
case 5:case 1:return A.t(v,w)
case 2:return A.r(t.at(-1),w)}})
return A.u($async$el,w)}}
var z=a.updateTypes(["us(@)","om(c9<om,j<d5>>)","d5(us)"])
B.aJP.prototype={
$1(d){return B.bKk(y.a.a(d))},
$S:z+0}
B.aJO.prototype={
$1(d){return B.bKk(y.a.a(d))},
$S:z+0}
B.bFw.prototype={
$1(d){return new B.om(new A.bK(y.I),D.GW)},
$S:z+1};(function installTearOffs(){var x=a._static_1
x(B,"bFy","cg9",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[B.us,B.aJN,B.HZ])
x(A.ck,[B.aJP,B.aJO,B.bFw])
w(B.om,A.bc)})()
A.cs(b.typeUniverse,JSON.parse('{"HZ":{"d5":[]},"om":{"bc":["j<d5>"],"bc.T":"j<d5>"}}'))
var y=(function rtii(){var x=A.G
return{t:x("m<aF<c,@>>"),P:x("m<d5>"),s:x("m<c>"),I:x("bK<dE<j<d5>>>"),x:x("j<us>"),a:x("aF<c,@>"),o:x("us"),E:x("d5"),N:x("c"),z:x("@"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.jZ=new B.aJN()
D.GW=x([],y.P)
D.b_f={refunded:0,exchanged:1,completed:2}
D.aYk=new A.br(D.b_f,["Refunded","Exchanged","Completed"],A.G("br<c,c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"csX","K8",()=>A.ev(new B.bFw(),A.G("om"),A.G("j<d5>")))})()};
(a=>{a["d1r2+0RqupLePnGqSxFqzfZj/zQ="]=a.current})($__dart_deferred_initializers__);