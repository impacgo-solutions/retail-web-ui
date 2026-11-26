((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bZd(d){var x=J.Z(d)
return new B.vj(A.M(x.h(d,"id")),A.M(x.h(d,"invoice")),A.M(x.h(d,"store")),A.E(x.h(d,"cust")),A.M(x.h(d,"time")),A.M(x.h(d,"item")),A.b5(x.h(d,"qty")),A.b5(x.h(d,"amount")),A.M(x.h(d,"reason")),A.M(x.h(d,"refund_mode")),A.M(x.h(d,"status")),A.M(x.h(d,"by")))},
vj:function vj(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aNB:function aNB(){},
aND:function aND(){},
aNC:function aNC(){},
Jy:function Jy(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cw8(d){var x,w,v,u=d.e,t=A.jX(u)
u=t==null?u:A.Ls(t.ka())+" "+A.Ln(t.ka())
x=C.r.an(d.r)
w=d.z
v=D.b2w.h(0,w)
w=v==null?w:v
return new B.Jy(d.a,d.b,d.c,d.d,u,d.f,x,d.w,d.x,d.y,w,d.Q)},
p2:function p2(d,e){this.r=!1
this.a=d
this.f=e},
bQZ:function bQZ(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[90],B)
D=c[255]
B.vj.prototype={}
B.aNB.prototype={
Dn(d,e){return this.b_t(d,e)},
b_t(d,e){var x=0,w=A.t(y.x),v,u
var $async$Dn=A.o(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:u=J
x=3
return A.h(C.T.cX("/pos/returns?"+(d.length===0?"":"store_id="+d+"&")+"limit=500&offset=0",e),$async$Dn)
case 3:v=u.b7(g,new B.aND(),y.o).aF(0)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Dn,w)},
Do(d,e,f,g,h,i,j){return this.b_w(d,e,f,g,h,i,j)},
b_v(d,e,f,g,h,i){return this.Do(d,e,0,f,g,h,i)},
b_u(d,e,f,g,h,i){return this.Do(d,e,f,null,g,h,i)},
b_w(d,e,f,g,h,i,j){var x=0,w=A.t(y.x),v,u,t,s,r,q,p,o
var $async$Do=A.o(function(k,l){if(k===1)return A.p(l,w)
for(;;)switch(x){case 0:r=i.length===0?"":"store_id="+i+"&"
q=C.h.G(h)
p=q.length===0?"":"&search="+A.en(1,q,C.aB,!0)
q=A.a([],y.s)
for(u=new A.d9(d,A.w(d).i("d9<1,2>")).gW(0);u.n();){t=u.d
s=t.b
if(s.length!==0)q.push("&"+t.a+"="+A.en(1,s,C.aB,!0))}o=J
x=3
return A.h(C.T.hM("/pos/returns?"+r+"limit="+e+"&offset="+f+p+C.e.il(q),g,j),$async$Do)
case 3:v=o.b7(l,new B.aNC(),y.o).aF(0)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Do,w)},
JC(d,e,f,g,h,i,j){return this.aUz(d,e,f,g,h,i,j)},
aUz(d,e,f,g,h,i,j){var x=0,w=A.t(y.o),v,u,t,s,r,q
var $async$JC=A.o(function(k,l){if(k===1)return A.p(l,w)
for(;;)switch(x){case 0:r=A.z(y.N,y.z)
r.k(0,"original_sale_id",e)
r.k(0,"reason",g)
if(h!=null)r.k(0,"refund_payment_method_id",h)
r.k(0,"processed_by",f)
r.k(0,"status",i)
u=A.a([],y.t)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.y)(d),++s)u.push(d[s].cA())
r.k(0,"items",u)
q=B
x=3
return A.h(C.T.br("/pos/returns",r,j),$async$JC)
case 3:v=q.bZd(l)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$JC,w)}}
B.Jy.prototype={
j(d){var x=this
return"SaleReturn(id: "+x.a+", invoice: "+x.b+", store: "+x.c+", cust: "+A.j(x.d)+", time: "+x.e+", item: "+x.f+", qty: "+x.r+", amount: "+A.j(x.w)+", reason: "+x.x+", refundMode: "+x.y+", status: "+x.z+", by: "+x.Q+")"},
l(d,e){var x,w,v=this
if(e==null)return!1
if(v!==e){x=!1
if(J.aB(e)===A.O(v))if(e instanceof B.Jy){w=e.a===v.a
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
gE(d){var x=this
return A.aa(A.O(x),x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,x.z,x.Q,C.b,C.b,C.b,C.b,C.b,C.b,C.b)},
cA(){var x=this
return A.au(["id",x.a,"invoice",x.b,"store",x.c,"cust",x.d,"time",x.e,"item",x.f,"qty",x.r,"amount",x.w,"reason",x.x,"refundMode",x.y,"status",x.z,"by",x.Q],y.N,y.z)},
$idn:1}
B.p2.prototype={
eo(d,e){return this.b0n(d,e)},
b0n(d,e){var x=0,w=A.t(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$eo=A.o(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(d.length===0||e.length===0||r.r){x=1
break}r.r=!0
u=3
q=A.a([],y.P)
m=e.length
x=m>1?6:8
break
case 6:x=9
return A.h(D.kC.Dn("",d),$async$eo)
case 9:p=g
J.hu(q,J.b7(p,B.bR2(),y.E))
x=7
break
case 8:l=y.E,k=0
case 10:if(!(k<e.length)){x=12
break}o=e[k]
x=13
return A.h(D.kC.Dn(o,d),$async$eo)
case 13:n=g
J.hu(q,J.b7(n,B.bR2(),l))
case 11:e.length===m||(0,A.y)(e),++k
x=10
break
case 12:case 7:r.saD(0,q)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
r.r=!1
x=s.pop()
break
case 5:case 1:return A.q(v,w)
case 2:return A.p(t.at(-1),w)}})
return A.r($async$eo,w)}}
var z=a.updateTypes(["vj(@)","p2(c4<p2,i<dn>>)","dn(vj)"])
B.aND.prototype={
$1(d){return B.bZd(y.a.a(d))},
$S:z+0}
B.aNC.prototype={
$1(d){return B.bZd(y.a.a(d))},
$S:z+0}
B.bQZ.prototype={
$1(d){return new B.p2(new A.bK(y.I),D.HV)},
$S:z+1};(function installTearOffs(){var x=a._static_1
x(B,"bR2","cw8",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.P,[B.vj,B.aNB,B.Jy])
x(A.bO,[B.aND,B.aNC,B.bQZ])
w(B.p2,A.bm)})()
A.bQ(b.typeUniverse,JSON.parse('{"Jy":{"dn":[]},"p2":{"bm":["i<dn>"],"bm.T":"i<dn>"}}'))
var y=(function rtii(){var x=A.G
return{t:x("l<aA<c,@>>"),P:x("l<dn>"),s:x("l<c>"),I:x("bK<dS<i<dn>>>"),x:x("i<vj>"),a:x("aA<c,@>"),o:x("vj"),E:x("dn"),N:x("c"),z:x("@"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.kC=new B.aNB()
D.HV=x([],y.P)
D.b4K={refunded:0,exchanged:1,completed:2}
D.b2w=new A.bt(D.b4K,["Refunded","Exchanged","Completed"],A.G("bt<c,c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cJx","LK",()=>A.ev(new B.bQZ(),A.G("p2"),A.G("i<dn>")))})()};
(a=>{a["krozGPvGku1MsUPvtwpTfSRpBuI="]=a.current})($__dart_deferred_initializers__);