import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{n,t as r}from"./SlideToConfirm.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Buttons/SlideToConfirm`,component:r,parameters:{layout:`centered`,docs:{description:{component:`Slide-to-confirm donde la perilla verde crece con el drag (no es un knob fijo). El track negro muestra un chevron-hint trailing que se desvanece a medida que se avanza. Pasa el umbral (default 0.72), se commit con un slight overshoot via springs.completing y auto-resetea via springs.settling después de successHoldMs. Si el usuario solo tap-ea sin arrastrar, hace un nudge de +52px para invitar al drag. Port fiel de P2/Components/SlideToConfirm.swift.`}}},argTypes:{label:{control:`text`},knobWidth:{control:{type:`range`,min:80,max:280,step:8}},threshold:{control:{type:`range`,min:.4,max:.95,step:.01}},height:{control:{type:`range`,min:56,max:96,step:4}},cornerRadius:{control:{type:`range`,min:0,max:40,step:2}},successHoldMs:{control:{type:`range`,min:200,max:3e3,step:100}},enabled:{control:`boolean`}}},o=e=>(0,i.jsx)(`div`,{style:{width:360,padding:24,background:`var(--ds-color-surface)`},children:e}),s={args:{label:`PEDIR`,onConfirm:()=>console.log(`confirmed`)},render:e=>o((0,i.jsx)(r,{...e}))},c={args:{label:`CREAR USUARIO`,knobWidth:200,onConfirm:()=>console.log(`usuario creado`)},render:e=>o((0,i.jsx)(r,{...e}))},l={args:{label:`PEDIR`,enabled:!1,onConfirm:()=>console.log(`never`)},render:e=>o((0,i.jsx)(r,{...e}))},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "PEDIR",
    onConfirm: () => console.log("confirmed")
  },
  render: args => wrap(<SlideToConfirm {...args} />)
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "CREAR USUARIO",
    knobWidth: 200,
    onConfirm: () => console.log("usuario creado")
  },
  render: args => wrap(<SlideToConfirm {...args} />)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "PEDIR",
    enabled: false,
    onConfirm: () => console.log("never")
  },
  render: args => wrap(<SlideToConfirm {...args} />)
}`,...l.parameters?.docs?.source}}},u=[`Default`,`CrearUsuario`,`Disabled`]}))();export{c as CrearUsuario,s as Default,l as Disabled,u as __namedExportsOrder,a as default};