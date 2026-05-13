import{n as e}from"./chunk-jRWAZmH_.js";import{P as t}from"./iframe-DQCbzzk7.js";import{t as n}from"./jsx-runtime-DaLCRA3n.js";import{i as r,n as i,r as a,t as o}from"./TabsMenu-D3iuiz5d.js";var s,c,l,u,d,f,p,m,h;e((()=>{t(),r(),s=n(),c={title:`Sistema de Diseño/TabsMenu`,component:a,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`pressed`]},layout:{control:`select`,options:[`label`,`label+icon`]},icon:{control:`select`,options:[`home`,`check`,`stock`]}},args:{label:`Boleta`,state:`standard`,layout:`label+icon`,icon:`home`}},l={args:{layout:`label`}},u={args:{layout:`label+icon`}},d={args:{state:`pressed`}},f={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,s.jsx)(a,{label:`Boleta`,state:`standard`,layout:`label+icon`,icon:`home`}),(0,s.jsx)(a,{label:`Boleta`,state:`pressed`,layout:`label+icon`,icon:`home`}),(0,s.jsx)(a,{label:`Opciones`,state:`standard`,layout:`label`}),(0,s.jsx)(a,{label:`Opciones`,state:`pressed`,layout:`label`})]})},p={name:`TabFilterChip / All states`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,s.jsx)(i,{label:`Aprobado`,state:`active`,icon:`check`}),(0,s.jsx)(i,{label:`Denegado`,state:`disabled`,icon:`close`}),(0,s.jsx)(i,{label:`Pendiente`,state:`disabled`,icon:`alert`})]})},m={name:`FilterBar`,render:()=>(0,s.jsx)(o,{chips:[{label:`Aprobado`,state:`active`,icon:`check`},{label:`Denegado`,state:`disabled`,icon:`close`},{label:`Pendiente`,state:`disabled`,icon:`alert`}]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "label"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "label+icon"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pressed"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 16
  }}>
      <TabsMenu label="Boleta" state="standard" layout="label+icon" icon="home" />
      <TabsMenu label="Boleta" state="pressed" layout="label+icon" icon="home" />
      <TabsMenu label="Opciones" state="standard" layout="label" />
      <TabsMenu label="Opciones" state="pressed" layout="label" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "TabFilterChip / All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <TabFilterChip label="Aprobado" state="active" icon="check" />
      <TabFilterChip label="Denegado" state="disabled" icon="close" />
      <TabFilterChip label="Pendiente" state="disabled" icon="alert" />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "FilterBar",
  render: () => <FilterBar chips={[{
    label: "Aprobado",
    state: "active",
    icon: "check"
  }, {
    label: "Denegado",
    state: "disabled",
    icon: "close"
  }, {
    label: "Pendiente",
    state: "disabled",
    icon: "alert"
  }]} />
}`,...m.parameters?.docs?.source}}},h=[`Label`,`LabelWithIcon`,`Pressed`,`All`,`FilterChips`,`FilterBarExample`]}))();export{f as All,m as FilterBarExample,p as FilterChips,l as Label,u as LabelWithIcon,d as Pressed,h as __namedExportsOrder,c as default};