import{n as e}from"./chunk.js";import{M as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{n as r,t as i}from"./SlideToConfirm.js";var a,o,s,c,l,u,d;e((()=>{t(),r(),a=n(),o={title:`Nuevos/SlideToConfirm`,component:i,parameters:{layout:`centered`,docs:{description:{component:`Slide-to-confirm donde la perilla verde crece con el drag (no es un knob fijo). El track negro muestra un chevron-hint trailing que se desvanece a medida que se avanza. Pasa el umbral (default 0.72), se commit con un slight overshoot via springs.completing y auto-resetea via springs.settling después de successHoldMs. Si el usuario solo tap-ea sin arrastrar, hace un nudge de +52px para invitar al drag. Port fiel de P2/Components/SlideToConfirm.swift.`}}},argTypes:{label:{control:`text`},knobWidth:{control:{type:`range`,min:80,max:280,step:8}},threshold:{control:{type:`range`,min:.4,max:.95,step:.01}},height:{control:{type:`range`,min:56,max:96,step:4}},cornerRadius:{control:{type:`range`,min:0,max:40,step:2}},successHoldMs:{control:{type:`range`,min:200,max:3e3,step:100}},enabled:{control:`boolean`}}},s=e=>(0,a.jsx)(`div`,{style:{width:360,padding:24,background:`var(--ds-color-surface)`},children:e}),c={args:{label:`PEDIR`,onConfirm:()=>console.log(`confirmed`)},render:e=>s((0,a.jsx)(i,{...e}))},l={args:{label:`CREAR USUARIO`,knobWidth:200,onConfirm:()=>console.log(`usuario creado`)},render:e=>s((0,a.jsx)(i,{...e}))},u={args:{label:`PEDIR`,enabled:!1,onConfirm:()=>console.log(`never`)},render:e=>s((0,a.jsx)(i,{...e}))},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "PEDIR",
    onConfirm: () => console.log("confirmed")
  },
  render: args => wrap(<SlideToConfirm {...args} />)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "CREAR USUARIO",
    knobWidth: 200,
    onConfirm: () => console.log("usuario creado")
  },
  render: args => wrap(<SlideToConfirm {...args} />)
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "PEDIR",
    enabled: false,
    onConfirm: () => console.log("never")
  },
  render: args => wrap(<SlideToConfirm {...args} />)
}`,...u.parameters?.docs?.source}}},d=[`Default`,`CrearUsuario`,`Disabled`]}))();export{l as CrearUsuario,c as Default,u as Disabled,d as __namedExportsOrder,o as default};