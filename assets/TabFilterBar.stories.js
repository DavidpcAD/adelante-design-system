import{n as e}from"./chunk.js";import{N as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{i as r,n as i}from"./TabsMenu.js";var a,o,s,c,l,u,d;e((()=>{t(),r(),a=n(),o={title:`Nav/TabFilterBar`,component:i,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`active`,`disabled`]},label:{control:`text`},icon:{control:`select`,options:[`completado`,`sin-stock`,`sin-autorizar`]},showIcon:{control:`boolean`}},args:{state:`active`,label:`Aprobado`,icon:`completado`,showIcon:!0}},s={args:{state:`active`,label:`Aprobado`,icon:`completado`,showIcon:!0}},c={args:{state:`disabled`,label:`Pendiente`,icon:`sin-autorizar`,showIcon:!0}},l={args:{state:`active`,label:`Aprobado`,showIcon:!1}},u={name:`All states`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:8,padding:16,flexWrap:`wrap`},children:[(0,a.jsx)(i,{label:`Aprobado`,state:`active`,icon:`completado`}),(0,a.jsx)(i,{label:`Denegado`,state:`disabled`,icon:`sin-stock`}),(0,a.jsx)(i,{label:`Pendiente`,state:`disabled`,icon:`sin-autorizar`}),(0,a.jsx)(i,{label:`Sin icono`,state:`active`,showIcon:!1}),(0,a.jsx)(i,{label:`Sin icono`,state:`disabled`,showIcon:!1})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: "active",
    label: "Aprobado",
    icon: "completado",
    showIcon: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    label: "Pendiente",
    icon: "sin-autorizar",
    showIcon: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: "active",
    label: "Aprobado",
    showIcon: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "All states",
  render: () => <div style={{
    display: "flex",
    gap: 8,
    padding: 16,
    flexWrap: "wrap"
  }}>
      <TabFilterChip label="Aprobado" state="active" icon="completado" />
      <TabFilterChip label="Denegado" state="disabled" icon="sin-stock" />
      <TabFilterChip label="Pendiente" state="disabled" icon="sin-autorizar" />
      <TabFilterChip label="Sin icono" state="active" showIcon={false} />
      <TabFilterChip label="Sin icono" state="disabled" showIcon={false} />
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Active`,`Disabled`,`NoIcon`,`AllStates`]}))();export{s as Active,u as AllStates,c as Disabled,l as NoIcon,d as __namedExportsOrder,o as default};