import{n as e}from"./chunk.js";import{n as t,t as n}from"./SlideButton.js";var r,i,a,o,s,c;e((()=>{t(),r={title:`Button/SlideButton`,component:n,parameters:{layout:`centered`},args:{label:`Pedir`,confirmedLabel:`Confirmado`,onConfirm:()=>console.log(`confirmed`)}},i={name:`mode: guardar / state: standard`,args:{mode:`guardar`,state:`standard`}},a={name:`mode: guardar / state: pressed`,args:{mode:`guardar`,state:`pressed`}},o={name:`mode: eliminar / state: standard`,args:{mode:`eliminar`,state:`standard`,label:`Eliminar`}},s={name:`mode: eliminar / state: pressed`,args:{mode:`eliminar`,state:`pressed`,label:`Eliminar`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "mode: guardar / state: standard",
  args: {
    mode: "guardar",
    state: "standard"
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "mode: guardar / state: pressed",
  args: {
    mode: "guardar",
    state: "pressed"
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "mode: eliminar / state: standard",
  args: {
    mode: "eliminar",
    state: "standard",
    label: "Eliminar"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "mode: eliminar / state: pressed",
  args: {
    mode: "eliminar",
    state: "pressed",
    label: "Eliminar"
  }
}`,...s.parameters?.docs?.source}}},c=[`GuardarStandard`,`GuardarPressed`,`EliminarStandard`,`EliminarPressed`]}))();export{s as EliminarPressed,o as EliminarStandard,a as GuardarPressed,i as GuardarStandard,c as __namedExportsOrder,r as default};