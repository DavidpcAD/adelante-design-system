import{n as e}from"./chunk.js";import{t}from"./jsx-runtime.js";import{n,t as r}from"./SlideArm.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`Buttons/SlideArm`,component:r,parameters:{layout:`centered`,docs:{description:{component:"SlideArm — la perilla colapsada es un botón verde compacto al borde trailing. Tap → la barra crece con springs.expanding hacia un SlideToConfirm full-width y aparece un cancel X arriba (springs.popping, anchor bottom-right). Tap cancel o drag-to-confirm desarma con springs.shrinking. El SlideToConfirm queda SIEMPRE montado, solo se gatea su gesture con `enabled` para evitar crossfade glitch. Port fiel de P2/Components/PedirBar.swift."}}},argTypes:{label:{control:`text`},collapsedWidth:{control:{type:`range`,min:80,max:280,step:8}},height:{control:{type:`range`,min:56,max:96,step:4}},cornerRadius:{control:{type:`range`,min:0,max:40,step:2}},successHoldMs:{control:{type:`range`,min:200,max:3e3,step:100}}}},o=e=>(0,i.jsx)(`div`,{style:{width:360,padding:24,background:`var(--ds-color-surface)`},children:e}),s={args:{label:`PEDIR`,onConfirm:()=>console.log(`confirmed`)},render:e=>o((0,i.jsx)(r,{...e}))},c={args:{label:`CREAR USUARIO`,collapsedWidth:200,onConfirm:()=>console.log(`usuario creado`)},render:e=>o((0,i.jsx)(r,{...e}))},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "PEDIR",
    onConfirm: () => console.log("confirmed")
  },
  render: args => wrap(<SlideArm {...args} />)
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "CREAR USUARIO",
    collapsedWidth: 200,
    onConfirm: () => console.log("usuario creado")
  },
  render: args => wrap(<SlideArm {...args} />)
}`,...c.parameters?.docs?.source}}},l=[`Default`,`CrearUsuario`]}))();export{c as CrearUsuario,s as Default,l as __namedExportsOrder,a as default};