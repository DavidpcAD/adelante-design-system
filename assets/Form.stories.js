import{n as e,o as t}from"./chunk.js";import{F as n}from"./iframe.js";import{t as r}from"./jsx-runtime.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./Form.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{u=t(n()),s(),d=r(),f={title:`Sistema de Diseño/Form`,component:o,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`active`,`x`,`ayuda`,`advertencia`,`disabled`]}},args:{label:`Nombre`,placeholder:`Escribir aquí`,state:`standard`}},p={args:{state:`standard`}},m={args:{state:`active`,value:`Texto activo`}},h={args:{state:`x`,value:`Texto borrable`}},g={args:{state:`ayuda`,helperText:`Este es un texto de ayuda`}},_={args:{state:`advertencia`,helperText:`Este campo es obligatorio`}},v={args:{state:`disabled`,value:`No editable`}},y={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,padding:16},children:[(0,d.jsx)(o,{state:`standard`,label:`standard`}),(0,d.jsx)(o,{state:`active`,label:`active`,value:`Texto activo`}),(0,d.jsx)(o,{state:`x`,label:`x`,value:`Texto borrable`}),(0,d.jsx)(o,{state:`ayuda`,label:`ayuda`}),(0,d.jsx)(o,{state:`advertencia`,label:`advertencia`}),(0,d.jsx)(o,{state:`disabled`,label:`disabled`,value:`No editable`})]})},b={name:`CheckBox / All states`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,d.jsx)(l,{state:`add`,label:`Agregar opción`}),(0,d.jsx)(l,{state:`remove`,label:`Remover opción`}),(0,d.jsx)(l,{state:`standard`,label:`Opción estándar`}),(0,d.jsx)(l,{state:`disabled`,label:`Opción deshabilitada`})]})},x={name:`CheckBox / Interactive`,render:()=>{let[e,t]=(0,u.useState)(!1);return(0,d.jsx)(l,{label:`Acepto los términos`,checked:e,onChange:t})}},S={name:`Tag / All states`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,d.jsx)(i,{state:`active`,label:`Activo`}),(0,d.jsx)(i,{state:`standard`,label:`Estándar`})]})},C={name:`ProgressBar / All steps`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,padding:24},children:[(0,d.jsx)(a,{progress:0,label:`0% completado`,description:`Faltan 4 materiales`}),(0,d.jsx)(a,{progress:25,label:`25% completado`,description:`Faltan 3 materiales`}),(0,d.jsx)(a,{progress:50,label:`50% completado`,description:`Faltan 2 materiales`}),(0,d.jsx)(a,{progress:75,label:`75% completado`,description:`Falta 1 material`}),(0,d.jsx)(a,{progress:100,label:`100% completado`,description:`Todos los materiales listos`})]})},w={name:`OptionLabel / All states`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,d.jsx)(c,{state:`active`,label:`Opción activa`}),(0,d.jsx)(c,{state:`standard`,label:`Opción estándar`}),(0,d.jsx)(c,{state:`disabled`,label:`Opción deshabilitada`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    state: "standard"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: "active",
    value: "Texto activo"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: "x",
    value: "Texto borrable"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: "ayuda",
    helperText: "Este es un texto de ayuda"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    state: "advertencia",
    helperText: "Este campo es obligatorio"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    value: "No editable"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "CheckBox / All states",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 16
  }}>
      <CheckBox state="add" label="Agregar opción" />
      <CheckBox state="remove" label="Remover opción" />
      <CheckBox state="standard" label="Opción estándar" />
      <CheckBox state="disabled" label="Opción deshabilitada" />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "CheckBox / Interactive",
  render: () => {
    const [c, setC] = useState(false);
    return <CheckBox label="Acepto los términos" checked={c} onChange={setC} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Tag / All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <Tag state="active" label="Activo" />
      <Tag state="standard" label="Estándar" />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "ProgressBar / All steps",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32,
    padding: 24
  }}>
      <ProgressBar progress={0} label="0% completado" description="Faltan 4 materiales" />
      <ProgressBar progress={25} label="25% completado" description="Faltan 3 materiales" />
      <ProgressBar progress={50} label="50% completado" description="Faltan 2 materiales" />
      <ProgressBar progress={75} label="75% completado" description="Falta 1 material" />
      <ProgressBar progress={100} label="100% completado" description="Todos los materiales listos" />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "OptionLabel / All states",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 16
  }}>
      <OptionLabel state="active" label="Opción activa" />
      <OptionLabel state="standard" label="Opción estándar" />
      <OptionLabel state="disabled" label="Opción deshabilitada" />
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Standard`,`Active`,`WithClear`,`Ayuda`,`Advertencia`,`Disabled`,`AllStates`,`CheckBoxAll`,`CheckBoxInteractive`,`TagAll`,`ProgressAll`,`OptionLabelAll`]}))();export{m as Active,_ as Advertencia,y as AllStates,g as Ayuda,b as CheckBoxAll,x as CheckBoxInteractive,v as Disabled,w as OptionLabelAll,C as ProgressAll,p as Standard,S as TagAll,h as WithClear,T as __namedExportsOrder,f as default};