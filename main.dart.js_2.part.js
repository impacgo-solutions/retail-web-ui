((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
c0K(d){var x=J.X(d)
return new B.vr(A.M(x.h(d,"id")),A.M(x.h(d,"invoice")),A.M(x.h(d,"store")),A.B(x.h(d,"cust")),A.M(x.h(d,"time")),A.M(x.h(d,"item")),A.b9(x.h(d,"qty")),A.b9(x.h(d,"amount")),A.M(x.h(d,"reason")),A.M(x.h(d,"refund_mode")),A.M(x.h(d,"status")),A.M(x.h(d,"by")))},
vr:function vr(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aNJ:function aNJ(){},
aNL:function aNL(){},
aNK:function aNK(){},
JH:function JH(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cyg(d){var x,w,v,u=d.e,t=A.k4(u)
u=t==null?u:A.LE(t.kf())+" "+A.Lz(t.kf())
x=C.q.al(d.r)
w=d.z
v=D.b2c.h(0,w)
w=v==null?w:v
return new B.JH(d.a,d.b,d.c,d.d,u,d.f,x,d.w,d.x,d.y,w,d.Q)},
p1:function p1(d,e){this.r=!1
this.a=d
this.f=e},
bTD:function bTD(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[94],B)
D=c[270]
B.vr.prototype={}
B.aNJ.prototype={
Dq(d,e){return this.b_3(d,e)},
b_3(d,e){var x=0,w=A.t(y.x),v,u
var $async$Dq=A.o(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:u=J
x=3
return A.h(C.S.cQ("/pos/returns?"+(d.length===0?"":"store_id="+d+"&")+"limit=500&offset=0",e),$async$Dq)
case 3:v=u.ba(g,new B.aNL(),y.o).aF(0)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Dq,w)},
Dr(d,e,f,g,h,i,j){return this.b_6(d,e,f,g,h,i,j)},
b_5(d,e,f,g,h,i){return this.Dr(d,e,0,f,g,h,i)},
b_4(d,e,f,g,h,i){return this.Dr(d,e,f,null,g,h,i)},
b_6(d,e,f,g,h,i,j){var x=0,w=A.t(y.x),v,u,t,s,r,q,p,o
var $async$Dr=A.o(function(k,l){if(k===1)return A.p(l,w)
for(;;)switch(x){case 0:r=i.length===0?"":"store_id="+i+"&"
q=C.h.F(h)
p=q.length===0?"":"&search="+A.eS(1,q,C.aK,!0)
q=A.a([],y.s)
for(u=new A.da(d,A.w(d).i("da<1,2>")).gW(0);u.n();){t=u.d
s=t.b
if(s.length!==0)q.push("&"+t.a+"="+A.eS(1,s,C.aK,!0))}o=J
x=3
return A.h(C.S.hO("/pos/returns?"+r+"limit="+e+"&offset="+f+p+C.e.il(q),g,j),$async$Dr)
case 3:v=o.ba(l,new B.aNK(),y.o).aF(0)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Dr,w)},
JR(d,e,f,g,h,i,j){return this.aU9(d,e,f,g,h,i,j)},
aU9(d,e,f,g,h,i,j){var x=0,w=A.t(y.o),v,u,t,s,r,q
var $async$JR=A.o(function(k,l){if(k===1)return A.p(l,w)
for(;;)switch(x){case 0:r=A.A(y.N,y.z)
r.l(0,"original_sale_id",e)
r.l(0,"reason",g)
if(h!=null)r.l(0,"refund_payment_method_id",h)
r.l(0,"processed_by",f)
r.l(0,"status",i)
u=A.a([],y.t)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.y)(d),++s)u.push(d[s].cE())
r.l(0,"items",u)
q=B
x=3
return A.h(C.S.bs("/pos/returns",r,j),$async$JR)
case 3:v=q.c0K(l)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$JR,w)}}
B.JH.prototype={
j(d){var x=this
return"SaleReturn(id: "+x.a+", invoice: "+x.b+", store: "+x.c+", cust: "+A.j(x.d)+", time: "+x.e+", item: "+x.f+", qty: "+x.r+", amount: "+A.j(x.w)+", reason: "+x.x+", refundMode: "+x.y+", status: "+x.z+", by: "+x.Q+")"},
k(d,e){var x,w,v=this
if(e==null)return!1
if(v!==e){x=!1
if(J.az(e)===A.O(v))if(e instanceof B.JH){w=e.a===v.a
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
return A.ab(A.O(x),x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,x.z,x.Q,C.b,C.b,C.b,C.b,C.b,C.b,C.b)},
cE(){var x=this
return A.av(["id",x.a,"invoice",x.b,"store",x.c,"cust",x.d,"time",x.e,"item",x.f,"qty",x.r,"amount",x.w,"reason",x.x,"refundMode",x.y,"status",x.z,"by",x.Q],y.N,y.z)},
$idr:1}
B.p1.prototype={
em(d,e){return this.b_Z(d,e)},
b_Z(d,e){var x=0,w=A.t(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$em=A.o(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(d.length===0||e.length===0||r.r){x=1
break}r.r=!0
u=3
q=A.a([],y.P)
m=e.length
x=m>1?6:8
break
case 6:x=9
return A.h(D.kL.Dq("",d),$async$em)
case 9:p=g
J.hq(q,J.ba(p,B.bTH(),y.E))
x=7
break
case 8:l=y.E,k=0
case 10:if(!(k<e.length)){x=12
break}o=e[k]
x=13
return A.h(D.kL.Dq(o,d),$async$em)
case 13:n=g
J.hq(q,J.ba(n,B.bTH(),l))
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
return A.r($async$em,w)}}
var z=a.updateTypes(["vr(@)","p1(c6<p1,i<dr>>)","dr(vr)"])
B.aNL.prototype={
$1(d){return B.c0K(y.a.a(d))},
$S:z+0}
B.aNK.prototype={
$1(d){return B.c0K(y.a.a(d))},
$S:z+0}
B.bTD.prototype={
$1(d){return new B.p1(new A.bO(y.I),D.HQ)},
$S:z+1};(function installTearOffs(){var x=a._static_1
x(B,"bTH","cyg",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.P,[B.vr,B.aNJ,B.JH])
x(A.bN,[B.aNL,B.aNK,B.bTD])
w(B.p1,A.bo)})()
A.bJ(b.typeUniverse,JSON.parse('{"JH":{"dr":[]},"p1":{"bo":["i<dr>"],"bo.T":"i<dr>"}}'))
var y=(function rtii(){var x=A.H
return{t:x("l<aA<c,@>>"),P:x("l<dr>"),s:x("l<c>"),I:x("bO<dR<i<dr>>>"),x:x("i<vr>"),a:x("aA<c,@>"),o:x("vr"),E:x("dr"),N:x("c"),z:x("@"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.kL=new B.aNJ()
D.HQ=x([],y.P)
D.b4o={refunded:0,exchanged:1,completed:2}
D.b2c=new A.bw(D.b4o,["Refunded","Exchanged","Completed"],A.H("bw<c,c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cLt","LW",()=>A.ew(new B.bTD(),A.H("p1"),A.H("i<dr>")))})()};
(a=>{a["kFwbF06vJr+brbLtMw5otWLGCTM="]=a.current})($__dart_deferred_initializers__);