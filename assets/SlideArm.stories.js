import{n as e}from"./chunk.js";import{F as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{n as r,t as i}from"./SlideArm.js";var a,o,s,c,l,u;e((()=>{t(),r(),a=n(),o={title:`Nuevos/SlideArm`,component:i,parameters:{layout:`centered`,docs:{description:{component:"SlideArm — la perilla colapsada es un botón verde compacto al borde trailing. Tap → la barra crece con springs.expanding hacia un SlideToConfirm full-width y aparece un cancel X arriba (springs.popping, anchor bottom-right). Tap cancel o drag-to-confirm desarma con springs.shrinking. El SlideToConfirm queda SIEMPRE montado, solo se gatea su gesture con `enabled` para evitar crossfade glitch. Port fiel de P2/Components/PedirBar.swift."}}},argTypes:{label:{control:`text`},collapsedWidth:{control:{type:`range`,min:80,max:280,step:8}},height:{control:{type:`range`,min:56,max:96,step:4}},cornerRadius:{control:{type:`range`,min:0,max:40,step:2}},successHoldMs:{control:{type:`range`,min:200,max:3e3,step:100}}}},s=e=>(0,a.jsx)(`div`,{style:{width:360,padding:24,background:`var(--ds-color-surface)`},children:e}),c={args:{label:`PEDIR`,onConfirm:()=>console.log(`confirmed`)},render:e=>s((0,a.jsx)(i,{...e}))},l={args:{label:`CREAR USUARIO`,collapsedWidth:200,onConfirm:()=>console.log(`usuario creado`)},render:e=>s((0,a.jsx)(i,{...e}))},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "PEDIR",
    onConfirm: () => console.log("confirmed")
  },
  render: args => wrap(<SlideArm {...args} />)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "CREAR USUARIO",
    collapsedWidth: 200,
    onConfirm: () => console.log("usuario creado")
  },
  render: args => wrap(<SlideArm {...args} />)
}`,...l.parameters?.docs?.source}}},u=[`Default`,`CrearUsuario`]}))();export{l as CrearUsuario,c as Default,u as __namedExportsOrder,o as default};