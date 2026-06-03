import{n as e}from"./chunk.js";import{N as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{i as r,n as i,t as a}from"./TabsMenu.js";var o,s,c,l,u,d,f;e((()=>{t(),r(),o=n(),s={title:`Nav/FilterBar`,component:a,tags:[`autodocs`]},c={args:{chips:[{label:`Aprobado`,state:`active`,icon:`completado`},{label:`Denegado`,state:`disabled`,icon:`sin-stock`},{label:`Pendiente`,state:`disabled`,icon:`sin-autorizar`}]}},l={name:`TabFilterBar / active`,render:()=>(0,o.jsx)(i,{label:`Aprobado`,state:`active`,icon:`completado`})},u={name:`TabFilterBar / disabled`,render:()=>(0,o.jsx)(i,{label:`Pendiente`,state:`disabled`,icon:`sin-autorizar`})},d={name:`TabFilterBar / all states`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:8,padding:16},children:[(0,o.jsx)(i,{label:`Aprobado`,state:`active`,icon:`completado`}),(0,o.jsx)(i,{label:`Denegado`,state:`disabled`,icon:`sin-stock`}),(0,o.jsx)(i,{label:`Pendiente`,state:`disabled`,icon:`sin-autorizar`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    chips: [{
      label: "Aprobado",
      state: "active",
      icon: "completado"
    }, {
      label: "Denegado",
      state: "disabled",
      icon: "sin-stock"
    }, {
      label: "Pendiente",
      state: "disabled",
      icon: "sin-autorizar"
    }]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "TabFilterBar / active",
  render: () => <TabFilterChip label="Aprobado" state="active" icon="completado" />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "TabFilterBar / disabled",
  render: () => <TabFilterChip label="Pendiente" state="disabled" icon="sin-autorizar" />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "TabFilterBar / all states",
  render: () => <div style={{
    display: "flex",
    gap: 8,
    padding: 16
  }}>
      <TabFilterChip label="Aprobado" state="active" icon="completado" />
      <TabFilterChip label="Denegado" state="disabled" icon="sin-stock" />
      <TabFilterChip label="Pendiente" state="disabled" icon="sin-autorizar" />
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Default`,`TabFilterBarActive`,`TabFilterBarDisabled`,`AllStates`]}))();export{d as AllStates,c as Default,l as TabFilterBarActive,u as TabFilterBarDisabled,f as __namedExportsOrder,s as default};