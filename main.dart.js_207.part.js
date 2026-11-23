((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,L,M,E,H,F,N,O,G,P,A={zl:function zl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c9b(d){return new A.xN(d,null)},
cfz(d,e,f){var w=null,v=B.a([new E.bh(!1,"Date",H.fy,new A.byJ(),A.bY9(),w,w,w,x.U)],x.O),u=x.T,t=x.p
B.bS(d,B.Q(B.a([D.eo(!1,B.a([new D.K("Shift",new A.byK(),!1,w,0,w,u),new D.K("Cashier",new A.byL(),!1,w,0,w,u),new D.K("Date",new A.byO(),!1,w,0,w,u),new D.K("Start",new A.byP(),!1,w,0,w,u),new D.K("End",new A.byQ(),!1,w,0,w,u),new D.K("Total Hours",new A.byR(),!1,w,0,w,u),new D.K("Bills",new A.byS(),!0,w,0,w,u),new D.K("Total Sales",new A.byT(),!0,w,0,w,u),new D.K("Status",new A.byU(),!1,w,0,w,u)],x.R),w,y.a,"all-shifts-dialog",v,!1,w,w,w,new A.byV(d,f),w,w,8,w,e,new A.byM(),C.bb,!1,!0,!0,w,x.b)],t),C.E,w,C.r,C.N),B.a([B.Y(w,!1,w,w,w,w,w,"Close",new A.byN(d),C.M,C.ar)],t),"All Cashier Shifts & History",C.de,x.z)},
bx2(d,e,f){var w,v,u,t,s,r=B.pa(d.f)
if(r==null)return!0
if(e==="Select date range"&&f!=null){w=f.a
v=B.cK(B.bv(w),B.bq(w),B.dj(w),0,0,0,0)
w=f.b
u=B.cK(B.bv(w),B.bq(w),B.dj(w),23,59,59,0)
return r.nR(v.iS(-1e6))&&r.lU(u)}t=B.kX(B.eL())
s=C.t.bq(t.e2(r).a,864e8)
switch(e){case"This week":w=s>=0&&s<=7
break
case"This month":w=B.bq(r)===B.bq(t)&&B.bv(r)===B.bv(t)
break
default:w=!0
break}return w},
bLB(d){var w,v,u,t,s,r=d.r
if(r.length===0||r==="\u2014")return"\u2014"
w=new A.bvy()
v=w.$1(r)
if(v==null)return"\u2014"
r=d.w
if(r==="\u2014"||r.length===0)u=B.cK(2026,1,1,18,0,0,0)
else{t=w.$1(r)
if(t==null)return"\u2014"
u=t}s=C.t.bq(u.e2(v).a,6e7)
return C.q.ak((s<0?s+1440:s)/60,1)+"h"},
bWd(d,e,f){var w,v,u,t=null,s=x.p,r=B.a([new B.ep(B.a([new B.al("Cashier",e.b,!1),new B.al("Register",e.e+" \xb7 "+e.d,!1),new B.al("Date",F.dU(e.f),!1),new B.al("Window",e.r+" \u2192 "+e.w,!1),new B.al("Total Hours",A.bLB(e),!1),new B.al("Bills",""+e.ax,!1)],x.H),2,t),new B.af(R.mW,B.f("Tender-wise takings",t,t,t,t,t,B.o(t,t,t,t,16,C.R),t,t),t),new A.zl(C.aK,"Cash",B.J(e.z),t),new A.zl(C.a6,"Card",B.J(e.Q),t),new A.zl(C.fr,"UPI",B.J(e.as),t),new A.zl(C.eI,"Wallet",B.J(e.at),t),A.bWI("Total sales",B.J(e.y),t,!0)],s),q=e.ay
if(q==="Closed"){w=e.ch
v=w===0
if(v)w="Tallied \u2713"
else w=B.J(w==null?0:w)
r.push(A.bWI("Closing variance",w,v?C.aK:C.aI,!1))}u=B.Q(r,C.E,t,C.r,C.N)
s=B.a([],s)
if(q==="Open")s.push(B.Y(t,!1,t,t,t,O.qV,t,"Close this shift",new A.bAg(d,f),C.M,C.cx))
else s.push(B.Y(t,!1,t,t,t,B.bO("printer",$.d?C.x:C.v,14),t,"Print Z-report",new A.bAh(d),C.M,C.ar))
P.ms(d,u,s,"Cashier shift \xb7 "+e.c,e.a,x.z)},
bWI(d,e,f,g){var w,v,u,t,s=null,r=g?8:3
if(g)w=new B.a6(s,s,new B.c7(new B.aK($.d?C.a_:C.a0,1,C.O,-1),C.S,C.S,C.S),s,s,s,C.I)
else w=s
v=g?8:0
if(g)u=B.o($.d?C.x:C.v,s,s,s,17,C.bw)
else u=B.o($.d?C.X:C.Y,G.cr,s,s,13,C.p)
u=B.f(d,s,s,s,s,s,u,s,s)
if(g)t=B.o($.d?C.x:C.v,s,s,s,17,C.bw)
else t=B.o($.d?C.X:C.Y,G.cr,s,s,13,C.p)
return new B.af(new B.a7(0,r,0,3),B.a3(s,B.ac(B.a([u,B.f(e,s,s,s,s,s,t.mz(f,f!=null?C.ac:s),s,s)],x.p),C.F,C.bL,C.z,0),C.A,s,s,w,s,s,s,s,new B.a7(0,v,0,0),s,s,s),s)},
bBe:function bBe(){},
xN:function xN(d,e){this.d=d
this.a=e},
aiW:function aiW(){this.d=$
this.c=this.a=null},
bpw:function bpw(d){this.a=d},
bpa:function bpa(){},
bpb:function bpb(d){this.a=d},
bpc:function bpc(){},
bpd:function bpd(d){this.a=d},
bpo:function bpo(d){this.a=d},
bpp:function bpp(d){this.a=d},
bpq:function bpq(d){this.a=d},
bpr:function bpr(d,e,f){this.a=d
this.b=e
this.c=f},
bpn:function bpn(){},
bps:function bps(){},
bpt:function bpt(){},
bpu:function bpu(){},
bpm:function bpm(d,e){this.a=d
this.b=e},
bpv:function bpv(){},
bpe:function bpe(){},
bpf:function bpf(){},
bpg:function bpg(){},
bph:function bph(){},
bpi:function bpi(){},
bpj:function bpj(){},
bpk:function bpk(){},
bpl:function bpl(){},
byM:function byM(){},
byJ:function byJ(){},
byV:function byV(d,e){this.a=d
this.b=e},
byK:function byK(){},
byL:function byL(){},
byO:function byO(){},
byP:function byP(){},
byQ:function byQ(){},
byR:function byR(){},
byS:function byS(){},
byT:function byT(){},
byU:function byU(){},
byN:function byN(d){this.a=d},
bvy:function bvy(){},
bAg:function bAg(d,e){this.a=d
this.b=e},
bAh:function bAh(d){this.a=d}},Q,R,D,I,S,K
J=c[1]
B=c[0]
C=c[2]
L=c[63]
M=c[69]
E=c[87]
H=c[131]
F=c[92]
N=c[64]
O=c[169]
G=c[144]
P=c[85]
A=a.updateHolder(c[22],A)
Q=c[101]
R=c[166]
D=c[90]
I=c[89]
S=c[95]
K=c[51]
A.zl.prototype={
I(d){var w=null
return new B.af(C.f6,B.ac(B.a([B.a3(w,w,C.A,w,w,new B.a6(this.c,w,w,B.at(3),w,w,C.I),w,9,w,Q.zQ,w,w,w,9),B.aS(B.f(this.d,w,w,w,w,w,B.o(w,w,w,w,12.5,C.p),w,w),1),B.f(this.e,w,w,w,w,w,B.o(w,w,w,w,12.5,C.p).aOh(G.cr,C.ac),w,w)],x.p),C.F,C.r,C.z,0),w)},
gf5(d){return this.d}}
A.xN.prototype={
W(){return new A.aiW()}}
A.aiW.prototype={
ao(){this.az()
$.ap.rx$.push(new A.bpw(this))},
tw(){var w=0,v=B.v(x.n),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$tw=B.q(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:j=r.gN()
i=j.m(0,$.ai(),x.S)
h=i
g=h==null?null:h.Q
f=g==null?"":g
if(J.U(f)===0){w=1
break}t=4
h=$.cC()
w=7
return B.k(j.m(0,h.gJ(),x.V).bc(f),$async$tw)
case 7:if(r.c==null){w=1
break}q=j.m(0,h,x.B)
h=x.N
m=j.m(0,$.dV(),h)
l=i.r
p=M.Z5(J.b7(q,new A.bpa(),h).aE(0),m,l)
l=$.jv()
w=8
return B.k(j.m(0,l.gJ(),x.Z).el(f,p),$async$tw)
case 8:if(r.c==null){w=1
break}o=j.m(0,l,x.D)
w=9
return B.k(j.m(0,$.it().gJ(),x.h).h6(f,p,o),$async$tw)
case 9:t=2
w=6
break
case 4:t=3
e=s.pop()
j=B.S(e)
if(j instanceof B.aB){n=j
j=r.c
if(j==null){w=1
break}B.M(j,n.a,null)}else throw e
w=6
break
case 3:w=2
break
case 6:case 1:return B.t(u,v)
case 2:return B.r(s.at(-1),v)}})
return B.u($async$tw,v)},
I(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i={},h=k.gN()
h.eP($.dV(),new A.bpb(k))
w=h.T($.ai(),x.S)
v=w==null
u=v?j:w.b
t=(v?j:w.b)===C.bR
s=u===C.cn||t
r=h.T($.it(),x.P)
v=x.N
q=J.b7(h.T($.cC(),x.B),new A.bpc(),v).aE(0)
p=h.T($.bNF(),v)
if(s)o=r
else{h=J.bk(r,new A.bpd(w))
o=B.N(h,h.$ti.i("C.E"))}i.a=o
if(s&&p!=="All Stores"){h=J.bk(o,new A.bpo(p))
o=B.N(h,h.$ti.i("C.E"))
i.a=o}h=x.p
u=B.a([],h)
if(s){n=B.a(["All Stores"],x.s)
C.e.A(n,q)
u.push(B.ql(!0,!0,!1,!1,n,j,new A.bpp(k),j,new A.bpq(k),C.ck,j,j,p,v))}u.push(B.Y(j,!1,j,C.a6,j,B.bO("bars",$.d?C.x:C.v,13),j,"View all",new A.bpr(i,k,d),C.M,C.ar))
n=J.vJ(i.a,6).aE(0)
m=x.U
l=B.a([new E.bh(!1,"Date",H.fy,new A.bps(),A.bY9(),j,j,j,m)],x.O)
if(s){i=J.b7(i.a,new A.bpt(),v).eU(0)
i=B.N(i,B.w(i).c)
C.e.fK(i)
l.push(new E.bh(!1,"Employee",i,new A.bpu(),j,j,j,j,m))}i=x.T
return B.Q(B.a([new S.e2("Cashier Shifts","Login-to-logout sessions per register with tender-wise takings",u,j),D.eo(!1,B.a([new D.K("Shift",new A.bpv(),!1,j,0,j,i),new D.K("Cashier",new A.bpe(),!1,j,0,j,i),new D.K("Date",new A.bpf(),!1,j,0,j,i),new D.K("Start",new A.bpg(),!1,j,0,j,i),new D.K("End",new A.bph(),!1,j,0,j,i),new D.K("Total Hours",new A.bpi(),!1,j,0,j,i),new D.K("Bills",new A.bpj(),!0,j,0,j,i),new D.K("Total Sales",new A.bpk(),!0,j,0,j,i),new D.K("Status",new A.bpl(),!1,j,0,j,i)],x.R),j,y.a,"shifts",l,!1,j,j,j,new A.bpm(k,d),j,j,8,j,n,new A.bpn(),C.bb,!1,!1,!0,j,x.b)],h),C.E,j,C.r,C.z)}}
var z=a.updateTypes(["w_(dk)","bL(dk)","B(dk,c[fG<bE>?])"])
A.bBe.prototype={
$1(d){return"All Stores"},
$S:198}
A.bpw.prototype={
$1(d){return this.a.tw()},
$S:4}
A.bpa.prototype={
$1(d){return d.gaf(d)},
$S:15}
A.bpb.prototype={
$2(d,e){return this.a.tw()},
$S:27}
A.bpc.prototype={
$1(d){return d.gaf(d)},
$S:15}
A.bpd.prototype={
$1(d){return L.YY(d,this.a)},
$S:33}
A.bpo.prototype={
$1(d){return d.c===this.a},
$S:33}
A.bpp.prototype={
$1(d){return d==="All Stores"?"Store: All":"Store: "+N.rS(d,this.a.gN().T($.cC(),x.B))},
$S:7}
A.bpq.prototype={
$1(d){this.a.gN().m(0,$.bNF().gJ(),x.u).fY(0,d)
return d},
$S:1}
A.bpr.prototype={
$0(){return A.cfz(this.c,this.a.a,this.b.a.d)},
$S:0}
A.bpn.prototype={
$1(d){return B.a([d.a,d.b,d.d,d.e,d.ay,d.f],x.s)},
$S:360}
A.bps.prototype={
$2(d,e){return A.bx2(d,e,null)},
$S:181}
A.bpt.prototype={
$1(d){return d.b},
$S:920}
A.bpu.prototype={
$2(d,e){return C.m.q(d.b.toLowerCase(),e.toLowerCase())},
$S:181}
A.bpm.prototype={
$1(d){return A.bWd(this.b,d,this.a.a.d)},
$S:361}
A.bpv.prototype={
$1(d){var w=null
return B.f(d.a,w,w,w,w,w,B.o(w,w,w,w,11.8,C.R),w,w)},
$S:43}
A.bpe.prototype={
$1(d){return K.a_S(d.b,d.d+" \xb7 "+d.e)},
$S:z+0}
A.bpf.prototype={
$1(d){var w=null,v=F.dU(d.f)
return B.f(v,w,w,w,w,w,B.o($.d?C.x:C.v,w,w,w,13.5,C.p),w,w)},
$S:43}
A.bpg.prototype={
$1(d){var w=null
return B.f(d.r,w,w,w,w,w,B.o($.d?C.x:C.v,w,w,w,13.5,C.p),w,w)},
$S:43}
A.bph.prototype={
$1(d){var w=null
return B.f(d.w,w,w,w,w,w,B.o($.d?C.x:C.v,w,w,w,13.5,C.p),w,w)},
$S:43}
A.bpi.prototype={
$1(d){var w=null,v=A.bLB(d)
return B.f(v,w,w,w,w,w,B.o($.d?C.x:C.v,w,w,w,13.5,C.p),w,w)},
$S:43}
A.bpj.prototype={
$1(d){var w=null
return B.f(""+d.ax,w,w,w,w,w,B.o($.d?C.x:C.v,w,w,w,13.5,C.p),w,w)},
$S:43}
A.bpk.prototype={
$1(d){var w=null
return B.f(B.J(d.y),w,w,w,w,w,B.o(w,w,w,w,11.8,C.R),w,w)},
$S:43}
A.bpl.prototype={
$1(d){return I.ee(d.ay)},
$S:z+1}
A.byM.prototype={
$1(d){return B.a([d.a,d.b,d.d,d.e,d.ay,d.f],x.s)},
$S:360}
A.byJ.prototype={
$2(d,e){return A.bx2(d,e,null)},
$S:181}
A.byV.prototype={
$1(d){var w=this.a
B.ao(w,!0).X()
A.bWd(w,d,this.b)},
$S:361}
A.byK.prototype={
$1(d){var w=null
return B.f(d.a,w,w,w,w,w,B.o(w,w,w,w,11.8,C.R),w,w)},
$S:43}
A.byL.prototype={
$1(d){return K.a_S(d.b,d.d+" \xb7 "+d.e)},
$S:z+0}
A.byO.prototype={
$1(d){var w=null,v=F.dU(d.f)
return B.f(v,w,w,w,w,w,B.o($.d?C.x:C.v,w,w,w,13.5,C.p),w,w)},
$S:43}
A.byP.prototype={
$1(d){var w=null
return B.f(d.r,w,w,w,w,w,B.o($.d?C.x:C.v,w,w,w,13.5,C.p),w,w)},
$S:43}
A.byQ.prototype={
$1(d){var w=null
return B.f(d.w,w,w,w,w,w,B.o($.d?C.x:C.v,w,w,w,13.5,C.p),w,w)},
$S:43}
A.byR.prototype={
$1(d){var w=null,v=A.bLB(d)
return B.f(v,w,w,w,w,w,B.o($.d?C.x:C.v,w,w,w,13.5,C.p),w,w)},
$S:43}
A.byS.prototype={
$1(d){var w=null
return B.f(""+d.ax,w,w,w,w,w,B.o($.d?C.x:C.v,w,w,w,13.5,C.p),w,w)},
$S:43}
A.byT.prototype={
$1(d){var w=null
return B.f(B.J(d.y),w,w,w,w,w,B.o(w,w,w,w,11.8,C.R),w,w)},
$S:43}
A.byU.prototype={
$1(d){return I.ee(d.ay)},
$S:z+1}
A.byN.prototype={
$0(){return B.ao(this.a,!0).X()},
$S:0}
A.bvy.prototype={
$1(d){var w,v,u,t,s,r,q,p=null
try{r=x.s
w=B.a(C.m.R(d).split(" "),r)
if(J.U(w)<2)return p
v=B.a(J.aA(w,0).split(":"),r)
u=B.cT(J.aA(v,0),p)
t=B.cT(J.aA(v,1),p)
s=J.aA(w,1).toUpperCase()==="PM"
if(s&&u<12)u+=12
if(!s&&J.i(u,12))u=0
r=B.cK(2026,1,1,u,t,0,0)
return r}catch(q){return p}},
$S:923}
A.bAg.prototype={
$0(){B.ao(this.a,!0).X()
this.b.$1("shiftclose")},
$S:0}
A.bAh.prototype={
$0(){return B.M(this.a,"Shift report printed",null)},
$S:0};(function installTearOffs(){var w=a.installStaticTearOff
w(A,"bY9",2,function(){return[null]},["$3","$2"],["bx2",function(d,e){return A.bx2(d,e,null)}],2,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(A.zl,B.aw)
v(B.ck,[A.bBe,A.bpw,A.bpa,A.bpc,A.bpd,A.bpo,A.bpp,A.bpq,A.bpn,A.bpt,A.bpm,A.bpv,A.bpe,A.bpf,A.bpg,A.bph,A.bpi,A.bpj,A.bpk,A.bpl,A.byM,A.byV,A.byK,A.byL,A.byO,A.byP,A.byQ,A.byR,A.byS,A.byT,A.byU,A.bvy])
w(A.xN,B.e3)
w(A.aiW,B.dW)
v(B.dt,[A.bpb,A.bps,A.bpu,A.byJ])
v(B.cX,[A.bpr,A.byN,A.bAg,A.bAh])})()
B.cs(b.typeUniverse,JSON.parse('{"zl":{"aw":[],"e":[]},"xN":{"P":[],"e":[]},"aiW":{"ae":["xN"]}}'))
var y={a:"Nothing matches these filters. Clear the search or add a new record."}
var x=(function rtii(){var w=B.G
return{T:w("K<dk>"),U:w("bh<dk>"),Z:w("jZ"),R:w("m<K<dk>>"),O:w("m<bh<dk>>"),H:w("m<al>"),s:w("m<c>"),p:w("m<e>"),D:w("j<d9>"),P:w("j<dk>"),B:w("j<bt>"),b:w("dk"),h:w("m9"),u:w("iX<c>"),V:w("fr"),N:w("c"),z:w("@"),S:w("cg?"),n:w("~")}})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cqU","bNF",()=>B.uG(new A.bBe(),x.N))})()};
(a=>{a["IjqtXzV9ZvhracFnhpwyL0SIJuQ="]=a.current})($__dart_deferred_initializers__);