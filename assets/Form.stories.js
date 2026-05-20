import{n as e}from"./chunk.js";import{F as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{a as r,i,n as a,o,r as s,t as c}from"./Form.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{t(),o(),l=n(),u={title:`Sistema de Diseño/Form`,component:a,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`active`,`x`,`ayuda`,`advertencia`,`disabled`]}},args:{label:`Nombre`,placeholder:`Escribir aquí`,state:`standard`}},d={args:{state:`standard`}},f={args:{state:`active`,value:`Texto activo`}},p={args:{state:`x`,value:`Texto borrable`}},m={args:{state:`ayuda`,helperText:`Este es un texto de ayuda`}},h={args:{state:`advertencia`,helperText:`Este campo es obligatorio`}},g={args:{state:`disabled`,value:`No editable`}},_={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,padding:16},children:[(0,l.jsx)(a,{state:`standard`,label:`standard`}),(0,l.jsx)(a,{state:`active`,label:`active`,value:`Texto activo`}),(0,l.jsx)(a,{state:`x`,label:`x`,value:`Texto borrable`}),(0,l.jsx)(a,{state:`ayuda`,label:`ayuda`}),(0,l.jsx)(a,{state:`advertencia`,label:`advertencia`}),(0,l.jsx)(a,{state:`disabled`,label:`disabled`,value:`No editable`})]})},v={name:`CheckBox / All states`,render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,l.jsx)(c,{state:`add`,label:`option label`}),(0,l.jsx)(c,{state:`remove`,label:`option label`}),(0,l.jsx)(c,{state:`standard`,label:`option label`}),(0,l.jsx)(c,{state:`disabled`,label:`option label`})]})},y={name:`Tag / All states`,render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,l.jsx)(r,{state:`active`,label:`Label`}),(0,l.jsx)(r,{state:`standard`,label:`Label`})]})},b={name:`ProgressBar / All steps`,render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,padding:24},children:[(0,l.jsx)(i,{progress:0,label:`0% completado`,description:`Faltan 4 materiales`}),(0,l.jsx)(i,{progress:25,label:`25% completado`,description:`Faltan 4 materiales`}),(0,l.jsx)(i,{progress:50,label:`50% completado`,description:`Faltan 4 materiales`}),(0,l.jsx)(i,{progress:75,label:`75% completado`,description:`Faltan 4 materiales`}),(0,l.jsx)(i,{progress:100,label:`100% completado`})]})},x={name:`OptionLabel / All states`,render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,l.jsx)(s,{state:`active`,label:`option label`}),(0,l.jsx)(s,{state:`standard`,label:`option label`}),(0,l.jsx)(s,{state:`disabled`,label:`option label`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: "standard"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    state: "active",
    value: "Texto activo"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    state: "x",
    value: "Texto borrable"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: "ayuda",
    helperText: "Este es un texto de ayuda"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: "advertencia",
    helperText: "Este campo es obligatorio"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    value: "No editable"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: 16
  }}>
      <FormField state="standard" label="standard" />
      <FormField state="active" label="active" value="Texto activo" />
      <FormField state="x" label="x" value="Texto borrable" />
      <FormField state="ayuda" label="ayuda" />
      <FormField state="advertencia" label="advertencia" />
      <FormField state="disabled" label="disabled" value="No editable" />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "CheckBox / All states",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 16
  }}>
      <CheckBox state="add" label="option label" />
      <CheckBox state="remove" label="option label" />
      <CheckBox state="standard" label="option label" />
      <CheckBox state="disabled" label="option label" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Tag / All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <Tag state="active" label="Label" />
      <Tag state="standard" label="Label" />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "ProgressBar / All steps",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32,
    padding: 24
  }}>
      <ProgressBar progress={0} label="0% completado" description="Faltan 4 materiales" />
      <ProgressBar progress={25} label="25% completado" description="Faltan 4 materiales" />
      <ProgressBar progress={50} label="50% completado" description="Faltan 4 materiales" />
      <ProgressBar progress={75} label="75% completado" description="Faltan 4 materiales" />
      <ProgressBar progress={100} label="100% completado" />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "OptionLabel / All states",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 16
  }}>
      <OptionLabel state="active" label="option label" />
      <OptionLabel state="standard" label="option label" />
      <OptionLabel state="disabled" label="option label" />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Standard`,`Active`,`WithClear`,`Ayuda`,`Advertencia`,`Disabled`,`AllStates`,`CheckBoxAll`,`TagAll`,`ProgressAll`,`OptionLabelAll`]}))();export{f as Active,h as Advertencia,_ as AllStates,m as Ayuda,v as CheckBoxAll,g as Disabled,x as OptionLabelAll,b as ProgressAll,d as Standard,y as TagAll,p as WithClear,S as __namedExportsOrder,u as default};