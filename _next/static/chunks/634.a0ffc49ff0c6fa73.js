"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{85565:function(r,e,n){n.d(e,{dy:function(){return P},DQ:function(){return _}});n(99021);var t=n(52322),o=n(50184),a=n(68683),i=n(45482),l=n(82735),u=n(63035),c=n(54503),f=n(92682),s=n(56695),d=n(23917),p=n(2784);function b(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function m(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function h(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),t.forEach((function(e){m(r,e,n[e])}))}return r}function g(r,e){if(null==r)return{};var n,t,o=function(r,e){if(null==r)return{};var n,t,o={},a=Object.keys(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||(o[n]=r[n]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(o[n]=r[n])}return o}function y(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,o,a=[],i=!0,l=!1;try{for(n=n.call(r);!(i=(t=n.next()).done)&&(a.push(t.value),!e||a.length!==e);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return b(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=o.rJ,w="Drawer",v=(0,i.z)(s.sL,{name:"DrawerHandle",height:8,borderRadius:100,backgroundColor:"$backgroundHover",position:"absolute",pointerEvents:"auto",zIndex:10,y:-20,top:0,left:"30%",right:"30%",opacity:.5,hoverStyle:{opacity:.7}}),j=y((0,f.b)(w),2),x=j[0],O=(j[1],y(x(w,{}),2)),k=O[0],C=(O[1],(0,i.z)(s.FA,{name:"DrawerBackdrop",backgroundColor:"$color",fullscreen:!0,opacity:.2})),S=(0,i.z)(s.FA,{name:"DrawerFrame",flex:1,backgroundColor:"$background",borderTopLeftRadius:"$4",borderTopRightRadius:"$4",padding:"$4"}),P=(0,l.$)((0,u.Y)((0,p.forwardRef)((function(r,e){var n=r.__scopeDrawer,i=r.children,l=r.open,u=r.defaultOpen,f=r.onChangeOpen,s=g(r,["__scopeDrawer","children","open","defaultOpen","onChangeOpen"]),b=y((0,d.T)({prop:l,defaultProp:u||!1,onChange:f,strategy:"most-recent-wins"}),2),m=b[0],_=b[1],w=(0,p.useRef)(null);(0,c.LI)((function(){var r;if(!m){var e=setTimeout((function(){var r;null==(r=w.current)||r.dismiss()}));return function(){clearTimeout(e)}}null==(r=w.current)||r.present()}),[m]);var v=null,j=null,x=null;return p.Children.forEach(i,(function(r){var e;if((0,p.isValidElement)(r))switch(null==(e=r.type)?void 0:e.staticConfig.componentName){case"DrawerHandle":v=r;break;case"DrawerFrame":x=r;break;case"DrawerBackdrop":j=r;break;default:console.warn("Warning: passed invalid child to Drawer",r)}})),(0,t.jsx)(k,{scope:n,open:m,onChangeOpen:_,children:(0,t.jsx)(o.WN,h({handleComponent:function(){return v},backdropComponent:function(){return j},snapPoints:["80%"],ref:(0,a.F)(e,w),onChange:function(r){_(r>=0)},backgroundStyle:{backgroundColor:"transparent"}},s,{children:x}))})})),{componentName:"Drawer"}),{Provider:_,Handle:v,Frame:S,Backdrop:C,ScrollView:o.vM,get FlatList(){return o.dm},get VirtualizedList(){return o.Hs},get SectionList(){return o.jP}})},99634:function(r,e,n){n.r(e),n.d(e,{default:function(){return y}});var t=n(52322),o=n(50711),a=(n(99021),n(82735)),i=n(92890),l=n(85565),u=n(23917),c=n(2784),f=n(78842);function s(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function d(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function p(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,o,a=[],i=!0,l=!1;try{for(n=n.call(r);!(i=(t=n.next()).done)&&(a.push(t.value),!e||a.length!==e);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return s(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=Object.defineProperty,m=function(r,e){return b(r,"name",{value:e,configurable:!0})}((function(r){return r.children}),"MenuItem"),h=(0,a.$)((function(r){var e=r.children,n=r.open,o=r.defaultOpen,a=r.trigger,s=r.onChangeOpen,b=(0,i.GS)(),m=p((0,u.T)({prop:n,defaultProp:o||!1,onChange:function(r){null==s||s(r)}}),2),h=m[0],g=m[1],y=(0,c.useMemo)((function(){return{onPress:function(){g((function(r){return!r}))}}}),[]);return b.sm?(0,t.jsxs)(t.Fragment,{children:[(0,c.cloneElement)(a,y),(0,t.jsx)(l.dy,{open:h,onDismiss:function(){return g(!1)},children:e})]}):(0,t.jsx)(f.J2,{trigger:function(r){return(0,c.cloneElement)(a,function(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),t.forEach((function(e){d(r,e,n[e])}))}return r}({},r,y))},open:h,onChangeOpen:g,children:(0,t.jsxs)(f.J2.Content,{children:[(0,t.jsx)(f.J2.Arrow,{}),(0,t.jsx)("div",{className:" _ai-1oszu61 _bc-vcw901 _bblr-16of09f _bbrr-1lf30or _btlr-9bfr1a _btrr-h7h2ax _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-eqz5dr _fs-1q142lx ",children:e})]})})}),{Item:m,Provider:l.DQ}),g=n(34891);function y(){var r=(0,c.useState)(!1),e=r[0],n=r[1];return(0,t.jsx)(h.Provider,{children:(0,t.jsx)(h,{open:e,onChangeOpen:n,trigger:(0,t.jsx)(g.z,{tag:"button",size:"$6",icon:o.v,theme:e?"active":null,circular:!0,borderBottomLeftRadius:"_bblr-wy88pt",borderBottomRightRadius:"_bbrr-3djova",borderTopLeftRadius:"_btlr-1de1axg",borderTopRightRadius:"_btrr-dtk0zj",height:"_h-1mwlp6a",maxHeight:"_mah-ormnx7",maxWidth:"_maw-afd8ay",minHeight:"_mih-10gryf7",minWidth:"_miw-s8bhmr",paddingBottom:"_pb-1mdbw0j",paddingLeft:"_pl-gy4na3",paddingRight:"_pr-9aemit",paddingTop:"_pt-wk8lta",width:"_w-18tzken",onPress:function(){return n((function(r){return!r}))}}),children:(0,t.jsx)(h.Item,{children:(0,t.jsxs)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-eqz5dr _fs-1q142lx _pb-2yw0hm _pl-1kgwf29 _pr-xz40gk _pt-av4gtc ",children:[(0,t.jsx)("h4",{accessibilityRole:"header",className:" _boxs-deolkf _col-1gcmrwd _cur-1dqbpge _disp-1471scf _fofam-1f1w1o8 _fos-adyw6z _fow-b88u0q _letsp-oxtfae _lh-17rnw9f _mb-p1pxzi _ml-11wrixw _mr-61z16t _mt-1mnahxq _textTransform-3twk1y _ussel-1xnzce8 _ww-qvutc0 ",children:"Menu contents"}),(0,t.jsx)("p",{className:" _boxs-deolkf _col-1gcmrwd _cur-1dqbpge _disp-1471scf _fofam-1f1w1o8 _fos-a023e6 _fow-1od2jal _letsp-oxtfae _lh-1kt6imw _ussel-1xnzce8 _ww-qvutc0 ",children:"Lorem ipsum dolor sit amet."})]})})})})}}}]);