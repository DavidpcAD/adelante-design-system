import{n as e}from"./chunk.js";import{N as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{i as r,n as i}from"./TabsMenu.js";var a,o,s,c,l,u;e((()=>{t(),r(),a=n(),o={title:`Nav/TabFilterBar`,component:i,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`active`,`disabled`]},label:{control:`text`},icon:{control:`select`,options:[`completado`,`sin-stock`,`sin-autorizar`]}},args:{state:`active`,label:`Aprobado`,icon:`completado`}},s={args:{state:`active`,label:`Aprobado`,icon:`completado`}},c={args:{state:`disabled`,label:`Pendiente`,icon:`sin-autorizar`}},l={name:`All states`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:8,padding:16},children:[(0,a.jsx)(i,{label:`Aprobado`,state:`active`,icon:`completado`}),(0,a.jsx)(i,{label:`Denegado`,state:`disabled`,icon:`sin-stock`}),(0,a.jsx)(i,{label:`Pendiente`,state:`disabled`,icon:`sin-autorizar`})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: "active",
    label: "Aprobado",
    icon: "completado"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    label: "Pendiente",
    icon: "sin-autorizar"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "All states",
  render: () => <div style={{
    display: "flex",
    gap: 8,
    padding: 16
  }}>
      <TabFilterChip label="Aprobado" state="active" icon="completado" />
      <TabFilterChip label="Denegado" state="disabled" icon="sin-stock" />
      <TabFilterChip label="Pendiente" state="disabled" icon="sin-autorizar" />
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Active`,`Disabled`,`AllStates`]}))();export{s as Active,l as AllStates,c as Disabled,u as __namedExportsOrder,o as default};