import{_ as m}from"./index-28562d9d.js";const d=["element-loading-text"],V=["src"],v=Vue.defineComponent({name:"FrameView"}),p=Vue.defineComponent({...v,setup(g){var c,s,f;const{t:i}=VueI18n.useI18n(),o=Vue.ref(!0),t=VueRouter.useRoute(),r=Vue.ref(""),u=Vue.ref(null);(c=Vue.unref(t.meta))!=null&&c.frameSrc&&(r.value=(s=Vue.unref(t.meta))==null?void 0:s.frameSrc),((f=Vue.unref(t.meta))==null?void 0:f.frameLoading)===!1&&n();function n(){o.value=!1}function _(){Vue.nextTick(()=>{const e=Vue.unref(u);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",()=>{n()}):e.onload=()=>{n()}})}return Vue.onMounted(()=>{_()}),(e,a)=>{const l=Vue.resolveDirective("loading");return Vue.withDirectives((Vue.openBlock(),Vue.createElementBlock("div",{class:"frame","element-loading-text":Vue.unref(i)("status.hsLoad")},[Vue.createElementVNode("iframe",{src:r.value,class:"frame-iframe",ref_key:"frameRef",ref:u},null,8,V)],8,d)),[[l,o.value]])}}});const x=m(p,[["__scopeId","data-v-86233adc"]]);export{x as default};