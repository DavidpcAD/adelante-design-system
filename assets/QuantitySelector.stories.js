import{n as e}from"./chunk.js";import{n as t,t as n}from"./QuantitySelector.js";var r,i,a,o,s,c,l,u,d,f;e((()=>{t(),r={title:`Sistema de Diseño/QuantitySelector`,component:n,parameters:{layout:`centered`},argTypes:{state:{control:{type:`inline-radio`},options:[`pendiente`,`incompleto`,`completo`,`sin-stock`]},mode:{control:{type:`inline-radio`},options:[`standard`,`pressed`]},size:{control:{type:`inline-radio`},options:[`sm`,`md`,`lg`]},value:{control:{type:`number`,min:0,max:999}}}},i={args:{value:3,state:`pendiente`,size:`sm`}},a={args:{value:3,state:`incompleto`,size:`sm`}},o={args:{value:3,state:`completo`,size:`sm`}},s={args:{value:3,state:`sin-stock`,size:`sm`}},c={args:{value:3,state:`pendiente`,mode:`pressed`,size:`sm`}},l={args:{value:3,state:`incompleto`,mode:`pressed`,size:`sm`}},u={args:{value:3,state:`completo`,mode:`pressed`,size:`sm`}},d={args:{value:3,state:`sin-stock`,mode:`pressed`,size:`sm`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "pendiente",
    size: "sm"
  }
}`,...i.parameters?.docs?.source},description:{story:`Pendiente — gris, sin anillo. No se ha registrado.`,...i.parameters?.docs?.description}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "incompleto",
    size: "sm"
  }
}`,...a.parameters?.docs?.source},description:{story:`Incompleto — anillo amarillo a la mitad derecha. Faltan materiales.`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "completo",
    size: "sm"
  }
}`,...o.parameters?.docs?.source},description:{story:`Completo — anillo verde completo. Están todos.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "sin-stock",
    size: "sm"
  }
}`,...s.parameters?.docs?.source},description:{story:`Sin stock — anillo rojo completo. No hay disponible.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "pendiente",
    mode: "pressed",
    size: "sm"
  }
}`,...c.parameters?.docs?.source},description:{story:`Pressed (estado fijo) — halo shadow alrededor. También se aplica auto al :active de un Tappable.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "incompleto",
    mode: "pressed",
    size: "sm"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "completo",
    mode: "pressed",
    size: "sm"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "sin-stock",
    mode: "pressed",
    size: "sm"
  }
}`,...d.parameters?.docs?.source}}},f=[`Pendiente`,`Incompleto`,`Completo`,`SinStock`,`PendientePressed`,`IncompletoPressed`,`CompletoPressed`,`SinStockPressed`]}))();export{o as Completo,u as CompletoPressed,a as Incompleto,l as IncompletoPressed,i as Pendiente,c as PendientePressed,s as SinStock,d as SinStockPressed,f as __namedExportsOrder,r as default};