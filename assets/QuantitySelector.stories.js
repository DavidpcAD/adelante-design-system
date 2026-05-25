import{n as e}from"./chunk.js";import{n as t,t as n}from"./QuantitySelector.js";var r,i,a,o,s,c,l,u,d,f;e((()=>{t(),r={title:`Button/QuantitySelector`,component:n,parameters:{layout:`centered`},argTypes:{state:{control:{type:`inline-radio`},options:[`pendiente`,`incompleto`,`completo`,`sin-stock`]},mode:{control:{type:`inline-radio`},options:[`standard`,`pressed`]},size:{control:{type:`inline-radio`},options:[`sm`,`md`,`lg`]},value:{control:{type:`number`,min:0,max:999}}},args:{value:3,onTap:()=>{}}},i={args:{value:3,state:`pendiente`}},a={args:{value:3,state:`incompleto`}},o={args:{value:3,state:`completo`}},s={args:{value:3,state:`sin-stock`}},c={args:{value:3,state:`pendiente`,mode:`pressed`}},l={args:{value:3,state:`incompleto`,mode:`pressed`}},u={args:{value:3,state:`completo`,mode:`pressed`}},d={args:{value:3,state:`sin-stock`,mode:`pressed`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "pendiente"
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "incompleto"
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "completo"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "sin-stock"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "pendiente",
    mode: "pressed"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "incompleto",
    mode: "pressed"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "completo",
    mode: "pressed"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "sin-stock",
    mode: "pressed"
  }
}`,...d.parameters?.docs?.source}}},f=[`Pendiente`,`Incompleto`,`Completo`,`SinStock`,`PendientePressed`,`IncompletoPressed`,`CompletoPressed`,`SinStockPressed`]}))();export{o as Completo,u as CompletoPressed,a as Incompleto,l as IncompletoPressed,i as Pendiente,c as PendientePressed,s as SinStock,d as SinStockPressed,f as __namedExportsOrder,r as default};