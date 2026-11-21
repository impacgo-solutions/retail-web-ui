((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bJ6(d){var x=J.ah(d)
return new B.uo(A.I(x.h(d,"id")),A.I(x.h(d,"invoice")),A.I(x.h(d,"store")),A.af(x.h(d,"cust")),A.I(x.h(d,"time")),A.I(x.h(d,"item")),A.aZ(x.h(d,"qty")),A.aZ(x.h(d,"amount")),A.I(x.h(d,"reason")),A.I(x.h(d,"refund_mode")),A.I(x.h(d,"status")),A.I(x.h(d,"by")))},
uo:function uo(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aJA:function aJA(){},
aJC:function aJC(){},
aJB:function aJB(){},
HW:function HW(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ceO(d){var x,w,v,u=d.e,t=A.p9(u)
u=t==null?u:A.JO(t.mc())+" "+A.JK(t.mc())
x=C.q.aq(d.r)
w=d.z
v=D.aYb.h(0,w)
w=v==null?w:v
return new B.HW(d.a,d.b,d.c,d.d,u,d.f,x,d.w,d.x,d.y,w,d.Q)},
ol:function ol(d,e){this.r=!1
this.a=d
this.f=e},
bEN:function bEN(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[70],B)
D=c[186]
B.uo.prototype={}
B.aJA.prototype={
C_(d,e){return this.aUl(d,e)},
aUl(d,e){var x=0,w=A.v(y.x),v,u
var $async$C_=A.q(function(f,g){if(f===1)return A.r(g,w)
for(;;)switch(x){case 0:u=J
x=3
return A.l(C.a3.ek("/pos/returns?"+(d.length===0?"":"store_id="+d+"&")+"limit=500&offset=0",e),$async$C_)
case 3:v=u.bc(g,new B.aJC(),y.o).aG(0)
x=1
break
case 1:return A.t(v,w)}})
return A.u($async$C_,w)},
C0(d,e,f,g,h,i,j){return this.aUo(d,e,f,g,h,i,j)},
aUn(d,e,f,g,h,i){return this.C0(d,e,0,f,g,h,i)},
aUm(d,e,f,g,h,i){return this.C0(d,e,f,null,g,h,i)},
aUo(d,e,f,g,h,i,j){var x=0,w=A.v(y.x),v,u,t,s,r,q,p,o
var $async$C0=A.q(function(k,l){if(k===1)return A.r(l,w)
for(;;)switch(x){case 0:r=i.length===0?"":"store_id="+i+"&"
q=C.m.S(h)
p=q.length===0?"":"&search="+A.eO(1,q,C.aA,!0)
q=A.a([],y.s)
for(u=new A.d0(d,A.w(d).i("d0<1,2>")).gU(0);u.p();){t=u.d
s=t.b
if(s.length!==0)q.push("&"+t.a+"="+A.eO(1,s,C.aA,!0))}o=J
x=3
return A.l(C.a3.hJ("/pos/returns?"+r+"limit="+e+"&offset="+f+p+C.e.i1(q),g,j),$async$C0)
case 3:v=o.bc(l,new B.aJB(),y.o).aG(0)
x=1
break
case 1:return A.t(v,w)}})
return A.u($async$C0,w)},
HD(d,e,f,g,h,i,j){return this.aOz(d,e,f,g,h,i,j)},
aOz(d,e,f,g,h,i,j){var x=0,w=A.v(y.o),v,u,t,s,r,q
var $async$HD=A.q(function(k,l){if(k===1)return A.r(l,w)
for(;;)switch(x){case 0:r=A.z(y.N,y.z)
r.l(0,"original_sale_id",e)
r.l(0,"reason",g)
if(h!=null)r.l(0,"refund_payment_method_id",h)
r.l(0,"processed_by",f)
r.l(0,"status",i)
u=A.a([],y.t)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.B)(d),++s)u.push(d[s].cs())
r.l(0,"items",u)
q=B
x=3
return A.l(C.a3.cz("/pos/returns",r,j),$async$HD)
case 3:v=q.bJ6(l)
x=1
break
case 1:return A.t(v,w)}})
return A.u($async$HD,w)}}
B.HW.prototype={
j(d){var x=this
return"SaleReturn(id: "+x.a+", invoice: "+x.b+", store: "+x.c+", cust: "+A.o(x.d)+", time: "+x.e+", item: "+x.f+", qty: "+x.r+", amount: "+A.o(x.w)+", reason: "+x.x+", refundMode: "+x.y+", status: "+x.z+", by: "+x.Q+")"},
k(d,e){var x,w,v=this
if(e==null)return!1
if(v!==e){x=!1
if(J.ao(e)===A.H(v))if(e instanceof B.HW){w=e.a===v.a
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
gB(d){var x=this
return A.a_(A.H(x),x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,x.z,x.Q,C.b,C.b,C.b,C.b,C.b,C.b,C.b)},
cs(){var x=this
return A.av(["id",x.a,"invoice",x.b,"store",x.c,"cust",x.d,"time",x.e,"item",x.f,"qty",x.r,"amount",x.w,"reason",x.x,"refundMode",x.y,"status",x.z,"by",x.Q],y.N,y.z)},
$id4:1}
B.ol.prototype={
ej(d,e){return this.aVc(d,e)},
aVc(d,e){var x=0,w=A.v(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$ej=A.q(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(d.length===0||e.length===0||r.r){x=1
break}r.r=!0
u=3
q=A.a([],y.P)
m=e.length
x=m>1?6:8
break
case 6:x=9
return A.l(D.jX.C_("",d),$async$ej)
case 9:p=g
J.hl(q,J.bc(p,B.bEP(),y.E))
x=7
break
case 8:l=y.E,k=0
case 10:if(!(k<e.length)){x=12
break}o=e[k]
x=13
return A.l(D.jX.C_(o,d),$async$ej)
case 13:n=g
J.hl(q,J.bc(n,B.bEP(),l))
case 11:e.length===m||(0,A.B)(e),++k
x=10
break
case 12:case 7:r.sau(0,q)
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
return A.u($async$ej,w)}}
var z=a.updateTypes(["uo(@)","ol(c8<ol,j<d4>>)","d4(uo)"])
B.aJC.prototype={
$1(d){return B.bJ6(y.a.a(d))},
$S:z+0}
B.aJB.prototype={
$1(d){return B.bJ6(y.a.a(d))},
$S:z+0}
B.bEN.prototype={
$1(d){return new B.ol(new A.bK(y.I),D.GP)},
$S:z+1};(function installTearOffs(){var x=a._static_1
x(B,"bEP","ceO",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[B.uo,B.aJA,B.HW])
x(A.cl,[B.aJC,B.aJB,B.bEN])
w(B.ol,A.ba)})()
A.cy(b.typeUniverse,JSON.parse('{"HW":{"d4":[]},"ol":{"ba":["j<d4>"],"ba.T":"j<d4>"}}'))
var y=(function rtii(){var x=A.G
return{t:x("m<aG<c,@>>"),P:x("m<d4>"),s:x("m<c>"),I:x("bK<dD<j<d4>>>"),x:x("j<uo>"),a:x("aG<c,@>"),o:x("uo"),E:x("d4"),N:x("c"),z:x("@"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.jX=new B.aJA()
D.GP=x([],y.P)
D.b_5={refunded:0,exchanged:1,completed:2}
D.aYb=new A.br(D.b_5,["Refunded","Exchanged","Completed"],A.G("br<c,c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"crw","K4",()=>A.ev(new B.bEN(),A.G("ol"),A.G("j<d4>")))})()};
(a=>{a["Si81WQJGAOby7TbXWOf23MFLgSo="]=a.current})($__dart_deferred_initializers__);