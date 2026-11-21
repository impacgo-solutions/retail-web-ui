((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,M,N,E,H,F,O,P,G,Q,A={zh:function zh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7s(d){return new A.xI(d,null)},
cdO(d,e,f){var w=null,v=B.a([new E.bg(!1,"Date",H.fx,new A.bxE(),A.bWw(),w,w,w,x.U)],x.O),u=x.T,t=x.p
B.c0(d,B.S(B.a([D.es(!1,B.a([new D.L("Shift",new A.bxF(),!1,w,0,w,u),new D.L("Cashier",new A.bxG(),!1,w,0,w,u),new D.L("Date",new A.bxJ(),!1,w,0,w,u),new D.L("Start",new A.bxK(),!1,w,0,w,u),new D.L("End",new A.bxL(),!1,w,0,w,u),new D.L("Total Hours",new A.bxM(),!1,w,0,w,u),new D.L("Bills",new A.bxN(),!0,w,0,w,u),new D.L("Total Sales",new A.bxO(),!0,w,0,w,u),new D.L("Status",new A.bxP(),!1,w,0,w,u)],x.R),w,y.a,"all-shifts-dialog",v,!1,w,w,w,new A.bxQ(d,f),w,w,8,w,e,new A.bxH(),C.ba,!1,!0,!0,w,x.b)],t),C.H,w,C.r,C.M),B.a([B.a0(w,!1,w,w,w,w,w,"Close",new A.bxI(d),C.N,C.at)],t),"All Cashier Shifts & History",C.dc,x.z)},
bvY(d,e,f){var w,v,u,t,s,r=B.p9(d.f)
if(r==null)return!0
if(e==="Select date range"&&f!=null){w=f.a
v=B.cI(B.bt(w),B.bq(w),B.dh(w),0,0,0,0)
w=f.b
u=B.cI(B.bt(w),B.bq(w),B.dh(w),23,59,59,0)
return r.nR(v.iR(-1e6))&&r.lU(u)}t=B.kU(B.eK())
s=C.t.bq(t.e1(r).a,864e8)
switch(e){case"This week":w=s>=0&&s<=7
break
case"This month":w=B.bq(r)===B.bq(t)&&B.bt(r)===B.bt(t)
break
default:w=!0
break}return w},
bK0(d){var w,v,u,t,s,r=d.r
if(r.length===0||r==="\u2014")return"\u2014"
w=new A.but()
v=w.$1(r)
if(v==null)return"\u2014"
r=d.w
if(r==="\u2014"||r.length===0)u=B.cI(2026,1,1,18,0,0,0)
else{t=w.$1(r)
if(t==null)return"\u2014"
u=t}s=C.t.bq(u.e1(v).a,6e7)
return C.q.ak((s<0?s+1440:s)/60,1)+"h"},
bUC(d,e,f){var w,v,u,t=null,s=x.p,r=B.a([new B.et(B.a([new B.am("Cashier",e.b,!1),new B.am("Register",e.e+" \xb7 "+e.d,!1),new B.am("Date",F.ee(e.f),!1),new B.am("Window",e.r+" \u2192 "+e.w,!1),new B.am("Total Hours",A.bK0(e),!1),new B.am("Bills",""+e.ax,!1)],x.H),2,t),new B.ah(R.mT,B.h("Tender-wise takings",t,t,t,t,B.p(t,t,t,t,16,C.R),t,t),t),new A.zh(C.aK,"Cash",B.J(e.z),t),new A.zh(C.a6,"Card",B.J(e.Q),t),new A.zh(C.fq,"UPI",B.J(e.as),t),new A.zh(C.eI,"Wallet",B.J(e.at),t),A.bV6("Total sales",B.J(e.y),t,!0)],s),q=e.ay
if(q==="Closed"){w=e.ch
v=w===0
if(v)w="Tallied \u2713"
else w=B.J(w==null?0:w)
r.push(A.bV6("Closing variance",w,v?C.aK:C.aJ,!1))}u=B.S(r,C.H,t,C.r,C.M)
s=B.a([],s)
if(q==="Open")s.push(B.a0(t,!1,t,t,t,P.qS,t,"Close this shift",new A.bzb(d,f),C.N,C.cE))
else s.push(B.a0(t,!1,t,t,t,B.bU("printer",$.d?C.y:C.w,14),t,"Print Z-report",new A.bzc(d),C.N,C.at))
Q.nA(d,u,s,"Cashier shift \xb7 "+e.c,e.a,x.z)},
bV6(d,e,f,g){var w,v,u,t,s=null,r=g?8:3
if(g)w=new B.a6(s,s,new B.ce(new B.aK($.d?C.Y:C.Z,1,C.O,-1),C.U,C.U,C.U),s,s,s,C.J)
else w=s
v=g?8:0
if(g)u=B.p($.d?C.y:C.w,s,s,s,17,C.bz)
else u=B.p($.d?C.a_:C.a0,G.cq,s,s,13,C.p)
u=B.h(d,s,s,s,s,u,s,s)
if(g)t=B.p($.d?C.y:C.w,s,s,s,17,C.bz)
else t=B.p($.d?C.a_:C.a0,G.cq,s,s,13,C.p)
return new B.ah(new B.a7(0,r,0,3),B.a5(s,B.ae(B.a([u,B.h(e,s,s,s,s,t.mz(f,f!=null?C.ac:s),s,s)],x.p),C.E,C.bM,C.z,0),C.A,s,s,w,s,s,s,s,new B.a7(0,v,0,0),s,s,s),s)},
bA9:function bA9(){},
xI:function xI(d,e){this.d=d
this.a=e},
aiH:function aiH(){this.d=$
this.c=this.a=null},
bor:function bor(d){this.a=d},
bo5:function bo5(){},
bo6:function bo6(d){this.a=d},
bo7:function bo7(){},
bo8:function bo8(d){this.a=d},
boj:function boj(d){this.a=d},
bok:function bok(d){this.a=d},
bol:function bol(d){this.a=d},
bom:function bom(d,e,f){this.a=d
this.b=e
this.c=f},
boi:function boi(){},
bon:function bon(){},
boo:function boo(){},
bop:function bop(){},
boh:function boh(d,e){this.a=d
this.b=e},
boq:function boq(){},
bo9:function bo9(){},
boa:function boa(){},
bob:function bob(){},
boc:function boc(){},
bod:function bod(){},
boe:function boe(){},
bof:function bof(){},
bog:function bog(){},
bxH:function bxH(){},
bxE:function bxE(){},
bxQ:function bxQ(d,e){this.a=d
this.b=e},
bxF:function bxF(){},
bxG:function bxG(){},
bxJ:function bxJ(){},
bxK:function bxK(){},
bxL:function bxL(){},
bxM:function bxM(){},
bxN:function bxN(){},
bxO:function bxO(){},
bxP:function bxP(){},
bxI:function bxI(d){this.a=d},
but:function but(){},
bzb:function bzb(d,e){this.a=d
this.b=e},
bzc:function bzc(d){this.a=d}},I,R,D,K,S,L
J=c[1]
B=c[0]
C=c[2]
M=c[60]
N=c[66]
E=c[84]
H=c[122]
F=c[89]
O=c[61]
P=c[161]
G=c[134]
Q=c[82]
A=a.updateHolder(c[22],A)
I=c[160]
R=c[157]
D=c[87]
K=c[86]
S=c[92]
L=c[48]
A.zh.prototype={
I(d){var w=null
return new B.ah(C.f6,B.ae(B.a([B.a5(w,w,C.A,w,w,new B.a6(this.c,w,w,B.at(3),w,w,C.J),w,9,w,I.a2H,w,w,w,9),B.aS(B.h(this.d,w,w,w,w,B.p(w,w,w,w,12.5,C.p),w,w),1),B.h(this.e,w,w,w,w,B.p(w,w,w,w,12.5,C.p).aNz(G.cq,C.ac),w,w)],x.p),C.E,C.r,C.z,0),w)},
gf5(d){return this.d}}
A.xI.prototype={
W(){return new A.aiH()}}
A.aiH.prototype={
ap(){this.aB()
$.aq.rx$.push(new A.bor(this))},
tr(){var w=0,v=B.v(x.n),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$tr=B.q(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:j=r.gO()
i=j.m(0,$.af(),x.S)
h=i
g=h==null?null:h.y
f=g==null?"":g
if(J.W(f)===0){w=1
break}t=4
h=$.cB()
w=7
return B.l(j.m(0,h.gJ(),x.V).bc(f),$async$tr)
case 7:if(r.c==null){w=1
break}q=j.m(0,h,x.B)
h=x.N
m=j.m(0,$.dT(),h)
l=i.r
p=N.YS(J.bc(q,new A.bo5(),h).aG(0),m,l)
l=$.jt()
w=8
return B.l(j.m(0,l.gJ(),x.Z).ej(f,p),$async$tr)
case 8:if(r.c==null){w=1
break}o=j.m(0,l,x.D)
w=9
return B.l(j.m(0,$.is().gJ(),x.h).h6(f,p,o),$async$tr)
case 9:t=2
w=6
break
case 4:t=3
e=s.pop()
j=B.T(e)
if(j instanceof B.aC){n=j
j=r.c
if(j==null){w=1
break}B.M(j,n.a,null)}else throw e
w=6
break
case 3:w=2
break
case 6:case 1:return B.t(u,v)
case 2:return B.r(s.at(-1),v)}})
return B.u($async$tr,v)},
I(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i={},h=k.gO()
h.eO($.dT(),new A.bo6(k))
w=h.T($.af(),x.S)
v=w==null
u=v?j:w.b
t=(v?j:w.b)===C.bJ
s=u===C.c6||t
r=h.T($.is(),x.P)
v=x.N
q=J.bc(h.T($.cB(),x.B),new A.bo7(),v).aG(0)
p=h.T($.bM3(),v)
if(s)o=r
else{h=J.bj(r,new A.bo8(w))
o=B.N(h,h.$ti.i("A.E"))}i.a=o
if(s&&p!=="All Stores"){h=J.bj(o,new A.boj(p))
o=B.N(h,h.$ti.i("A.E"))
i.a=o}h=x.p
u=B.a([],h)
if(s){n=B.a(["All Stores"],x.s)
C.e.A(n,q)
u.push(B.vL(!0,!0,!1,!1,n,new A.bok(k),j,new A.bol(k),C.cz,j,j,p,v))}u.push(B.a0(j,!1,j,C.a6,j,B.bU("bars",$.d?C.y:C.w,13),j,"View all",new A.bom(i,k,d),C.N,C.at))
n=J.vF(i.a,6).aG(0)
m=x.U
l=B.a([new E.bg(!1,"Date",H.fx,new A.bon(),A.bWw(),j,j,j,m)],x.O)
if(s){i=J.bc(i.a,new A.boo(),v).eT(0)
i=B.N(i,B.w(i).c)
C.e.fK(i)
l.push(new E.bg(!1,"Employee",i,new A.bop(),j,j,j,j,m))}i=x.T
return B.S(B.a([new S.eg("Cashier Shifts","Login-to-logout sessions per register with tender-wise takings",u,j),D.es(!1,B.a([new D.L("Shift",new A.boq(),!1,j,0,j,i),new D.L("Cashier",new A.bo9(),!1,j,0,j,i),new D.L("Date",new A.boa(),!1,j,0,j,i),new D.L("Start",new A.bob(),!1,j,0,j,i),new D.L("End",new A.boc(),!1,j,0,j,i),new D.L("Total Hours",new A.bod(),!1,j,0,j,i),new D.L("Bills",new A.boe(),!0,j,0,j,i),new D.L("Total Sales",new A.bof(),!0,j,0,j,i),new D.L("Status",new A.bog(),!1,j,0,j,i)],x.R),j,y.a,"shifts",l,!1,j,j,j,new A.boh(k,d),j,j,8,j,n,new A.boi(),C.ba,!1,!1,!0,j,x.b)],h),C.H,j,C.r,C.z)}}
var z=a.updateTypes(["vV(di)","bX(di)","D(di,c[fF<bE>?])"])
A.bA9.prototype={
$1(d){return"All Stores"},
$S:205}
A.bor.prototype={
$1(d){return this.a.tr()},
$S:4}
A.bo5.prototype={
$1(d){return d.gaf(d)},
$S:15}
A.bo6.prototype={
$2(d,e){return this.a.tr()},
$S:27}
A.bo7.prototype={
$1(d){return d.gaf(d)},
$S:15}
A.bo8.prototype={
$1(d){return M.YK(d,this.a)},
$S:34}
A.boj.prototype={
$1(d){return d.c===this.a},
$S:34}
A.bok.prototype={
$1(d){return d==="All Stores"?"Store: All":"Store: "+O.rP(d,this.a.gO().T($.cB(),x.B))},
$S:7}
A.bol.prototype={
$1(d){this.a.gO().m(0,$.bM3().gJ(),x.u).fY(0,d)
return d},
$S:1}
A.bom.prototype={
$0(){return A.cdO(this.c,this.a.a,this.b.a.d)},
$S:0}
A.boi.prototype={
$1(d){return B.a([d.a,d.b,d.d,d.e,d.ay,d.f],x.s)},
$S:259}
A.bon.prototype={
$2(d,e){return A.bvY(d,e,null)},
$S:218}
A.boo.prototype={
$1(d){return d.b},
$S:916}
A.bop.prototype={
$2(d,e){return C.m.q(d.b.toLowerCase(),e.toLowerCase())},
$S:218}
A.boh.prototype={
$1(d){return A.bUC(this.b,d,this.a.a.d)},
$S:293}
A.boq.prototype={
$1(d){var w=null
return B.h(d.a,w,w,w,w,B.p(w,w,w,w,11.8,C.R),w,w)},
$S:43}
A.bo9.prototype={
$1(d){return L.a_E(d.b,d.d+" \xb7 "+d.e)},
$S:z+0}
A.boa.prototype={
$1(d){var w=null,v=F.ee(d.f)
return B.h(v,w,w,w,w,B.p($.d?C.y:C.w,w,w,w,13.5,C.p),w,w)},
$S:43}
A.bob.prototype={
$1(d){var w=null
return B.h(d.r,w,w,w,w,B.p($.d?C.y:C.w,w,w,w,13.5,C.p),w,w)},
$S:43}
A.boc.prototype={
$1(d){var w=null
return B.h(d.w,w,w,w,w,B.p($.d?C.y:C.w,w,w,w,13.5,C.p),w,w)},
$S:43}
A.bod.prototype={
$1(d){var w=null,v=A.bK0(d)
return B.h(v,w,w,w,w,B.p($.d?C.y:C.w,w,w,w,13.5,C.p),w,w)},
$S:43}
A.boe.prototype={
$1(d){var w=null
return B.h(""+d.ax,w,w,w,w,B.p($.d?C.y:C.w,w,w,w,13.5,C.p),w,w)},
$S:43}
A.bof.prototype={
$1(d){var w=null
return B.h(B.J(d.y),w,w,w,w,B.p(w,w,w,w,11.8,C.R),w,w)},
$S:43}
A.bog.prototype={
$1(d){return K.ef(d.ay)},
$S:z+1}
A.bxH.prototype={
$1(d){return B.a([d.a,d.b,d.d,d.e,d.ay,d.f],x.s)},
$S:259}
A.bxE.prototype={
$2(d,e){return A.bvY(d,e,null)},
$S:218}
A.bxQ.prototype={
$1(d){var w=this.a
B.ap(w,!0).Y()
A.bUC(w,d,this.b)},
$S:293}
A.bxF.prototype={
$1(d){var w=null
return B.h(d.a,w,w,w,w,B.p(w,w,w,w,11.8,C.R),w,w)},
$S:43}
A.bxG.prototype={
$1(d){return L.a_E(d.b,d.d+" \xb7 "+d.e)},
$S:z+0}
A.bxJ.prototype={
$1(d){var w=null,v=F.ee(d.f)
return B.h(v,w,w,w,w,B.p($.d?C.y:C.w,w,w,w,13.5,C.p),w,w)},
$S:43}
A.bxK.prototype={
$1(d){var w=null
return B.h(d.r,w,w,w,w,B.p($.d?C.y:C.w,w,w,w,13.5,C.p),w,w)},
$S:43}
A.bxL.prototype={
$1(d){var w=null
return B.h(d.w,w,w,w,w,B.p($.d?C.y:C.w,w,w,w,13.5,C.p),w,w)},
$S:43}
A.bxM.prototype={
$1(d){var w=null,v=A.bK0(d)
return B.h(v,w,w,w,w,B.p($.d?C.y:C.w,w,w,w,13.5,C.p),w,w)},
$S:43}
A.bxN.prototype={
$1(d){var w=null
return B.h(""+d.ax,w,w,w,w,B.p($.d?C.y:C.w,w,w,w,13.5,C.p),w,w)},
$S:43}
A.bxO.prototype={
$1(d){var w=null
return B.h(B.J(d.y),w,w,w,w,B.p(w,w,w,w,11.8,C.R),w,w)},
$S:43}
A.bxP.prototype={
$1(d){return K.ef(d.ay)},
$S:z+1}
A.bxI.prototype={
$0(){return B.ap(this.a,!0).Y()},
$S:0}
A.but.prototype={
$1(d){var w,v,u,t,s,r,q,p=null
try{r=x.s
w=B.a(C.m.S(d).split(" "),r)
if(J.W(w)<2)return p
v=B.a(J.aM(w,0).split(":"),r)
u=B.cR(J.aM(v,0),p)
t=B.cR(J.aM(v,1),p)
s=J.aM(w,1).toUpperCase()==="PM"
if(s&&u<12)u+=12
if(!s&&J.i(u,12))u=0
r=B.cI(2026,1,1,u,t,0,0)
return r}catch(q){return p}},
$S:919}
A.bzb.prototype={
$0(){B.ap(this.a,!0).Y()
this.b.$1("shiftclose")},
$S:0}
A.bzc.prototype={
$0(){return B.M(this.a,"Shift report printed",null)},
$S:0};(function installTearOffs(){var w=a.installStaticTearOff
w(A,"bWw",2,function(){return[null]},["$3","$2"],["bvY",function(d,e){return A.bvY(d,e,null)}],2,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(A.zh,B.ax)
v(B.cm,[A.bA9,A.bor,A.bo5,A.bo7,A.bo8,A.boj,A.bok,A.bol,A.boi,A.boo,A.boh,A.boq,A.bo9,A.boa,A.bob,A.boc,A.bod,A.boe,A.bof,A.bog,A.bxH,A.bxQ,A.bxF,A.bxG,A.bxJ,A.bxK,A.bxL,A.bxM,A.bxN,A.bxO,A.bxP,A.but])
w(A.xI,B.eh)
w(A.aiH,B.e9)
v(B.dB,[A.bo6,A.bon,A.bop,A.bxE])
v(B.d2,[A.bom,A.bxI,A.bzb,A.bzc])})()
B.cy(b.typeUniverse,JSON.parse('{"zh":{"ax":[],"e":[]},"xI":{"P":[],"e":[]},"aiH":{"ad":["xI"]}}'))
var y={a:"Nothing matches these filters. Clear the search or add a new record."}
var x=(function rtii(){var w=B.G
return{T:w("L<di>"),U:w("bg<di>"),Z:w("jW"),R:w("m<L<di>>"),O:w("m<bg<di>>"),H:w("m<am>"),s:w("m<c>"),p:w("m<e>"),D:w("j<d6>"),P:w("j<di>"),B:w("j<br>"),b:w("di"),h:w("m7"),u:w("iX<c>"),V:w("fr"),N:w("c"),z:w("@"),S:w("ci?"),n:w("~")}})();(function constants(){I.a2H=new B.a7(0,0,8,0)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cp3","bM3",()=>B.uC(new A.bA9(),x.N))})()};
(a=>{a["LKSdc0Gh8P04hsKn2vUUf/bJWrc="]=a.current})($__dart_deferred_initializers__);