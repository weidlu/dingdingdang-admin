var b=Object.defineProperty;var V=(u,t,s)=>t in u?b(u,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[t]=s;var i=(u,t,s)=>(V(u,typeof t!="symbol"?t+"":t,s),s);import{d as N,r as L,a as m,c as B,w,o as x,e as h,i as T,l as D,h as g,f as F,t as y,F as I}from"./index-037de6e8.js";class C{constructor(t,s=0){i(this,"depth",0);i(this,"key");i(this,"word",!1);i(this,"children",{});i(this,"fail");i(this,"count",0);this.key=t,this.depth=s}}class K{constructor(t,s){i(this,"root",new C("root"));i(this,"customCharacter");const e=t.length;this.customCharacter=(s==null?void 0:s.customCharacter)||"*";for(let n=0;n<e;n++)this.add(t[n],!1);this.build()}build(){const t=[];t.push(this.root);let s=0;for(;t.length>s;){const e=t[s],n=e.children;for(const l in e.children){const r=n[l];let o=e.fail;for(;o&&!o.children[l];)o=o.fail;r.fail=(o==null?void 0:o.children[l])||this.root,t.push(r)}s++}}search(t,s={replace:!0}){let e=this.root;const n=[],l=[],r=[],{replace:o=!0,verify:c=!1}=s,p=t.length;for(let a=0;a<p;a++){const d=t[a],_=d.toLowerCase();for(;e&&!(e!=null&&e.children[_]);)e=e==null?void 0:e.fail;if(e=(e==null?void 0:e.children[_])||this.root,n.push(d),l.push(d),e.word){let f=a+1-e.depth,v="";for(;f<=a;){const k=l[f];v+=k,o&&(n[f]=this.customCharacter),f++}if(r.push(v),c)break}}return{words:r,text:n.join("")}}filter(t,s){return this.search(t,s)}verify(t){const{words:s}=this.search(t,{verify:!0});return!s.length}delete(t){const s=this.pop(t.toLowerCase(),t.length,this.root);return this.build(),s}pop(t,s,e,n="delete",l=0){if(!e)return"delete";if(l===s){e.word=!1,e.count--;let r=!0;for(const o in e.children)if(o){r=!1;break}return r?n:"update"}else{const r=t[l],o=e.children[r],c=this.pop(t,s,o,e.word?"update":n,l+1);return e.count--,c==="delete"&&(o==null?void 0:o.count)===0&&delete e.children[r],c}}add(t,s=!0){const e=t.toLowerCase(),n=e.length;return this.put(e,n),s&&this.build(),!0}put(t,s){let e=this.root;const n=s-1;e.count++;for(let l=0;l<s;l++){const r=t[l],o=e.children[r];if(o)o.count++,e=o;else{const c=new C(r,l+1);c.count=1,e.children[r]=c,e=c}n===l&&e.depth&&(e.word=!0)}}}const M=K,S=h("div",{class:"card-header"},[h("span",{class:"font-medium"},"敏感词过滤")],-1),j={class:"flex flex-wrap gap-2 my-2"},q=h("span",null,"自定义敏感词",-1),E={class:"mt-2"},z=N({name:"Sensitive",__name:"sensitive",setup(u){const t=["脑残","废物","白痴","三八","智障"],s=L(),e=new M(t);function n(){s.value=e.filter(s.value).text}return(l,r)=>{const o=m("el-tag"),c=m("el-input"),p=m("el-card");return x(),B(p,{shadow:"never"},{header:w(()=>[S]),default:w(()=>[h("div",j,[q,(x(),T(I,null,D(t,(a,d)=>g(o,{key:d,type:"danger",class:"mx-1",effect:"dark",round:""},{default:w(()=>[F(y(a),1)]),_:2},1024)),64))]),g(c,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=a=>s.value=a),onInput:n},null,8,["modelValue"]),h("p",E,y(s.value),1)]),_:1})}}});export{z as default};
