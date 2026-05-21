import{n as e}from"./chunk.js";import{F as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{a as r,i,n as a,o,r as s,t as c}from"./Form.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{t(),o(),l=n(),u={title:`Sistema de Diseño/Form`,component:a,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`active`,`x`,`ayuda`,`advertencia`,`disabled`]}},args:{label:`Nombre`,placeholder:`Escribir aquí`,state:`standard`}},d={name:`state: standard`,args:{state:`standard`}},f={name:`state: active`,args:{state:`active`,value:`Texto activo`}},p={name:`state: x`,args:{state:`x`,value:`Texto borrable`}},m={name:`state: ayuda`,args:{state:`ayuda`,helperText:`Mensaje de ayuda`}},h={name:`state: advertencia`,args:{state:`advertencia`,helperText:`Mensaje de advertencia`}},g={name:`state: disabled`,args:{state:`disabled`,value:`No editable`}},_={name:`All states`,render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,padding:16},children:[(0,l.jsx)(a,{state:`ayuda`,label:`Nombre`,helperText:`Mensaje de ayuda`}),(0,l.jsx)(a,{state:`advertencia`,label:`Nombre`,helperText:`Mensaje de advertencia`}),(0,l.jsx)(a,{state:`standard`,label:`Nombre`}),(0,l.jsx)(a,{state:`active`,label:`Nombre`}),(0,l.jsx)(a,{state:`disabled`,label:`Nombre`}),(0,l.jsx)(a,{state:`x`,label:`Nombre`})]})},v={name:`checkBox / state: add`,render:()=>(0,l.jsx)(c,{state:`add`,label:`option label`})},y={name:`checkBox / state: remove`,render:()=>(0,l.jsx)(c,{state:`remove`,label:`option label`})},b={name:`checkBox / state: standard`,render:()=>(0,l.jsx)(c,{state:`standard`,label:`option label`})},x={name:`checkBox / state: disabled`,render:()=>(0,l.jsx)(c,{state:`disabled`,label:`option label`})},S={name:`checkBox / All states`,render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,l.jsx)(c,{state:`add`,label:`option label`}),(0,l.jsx)(c,{state:`remove`,label:`option label`}),(0,l.jsx)(c,{state:`standard`,label:`option label`}),(0,l.jsx)(c,{state:`disabled`,label:`option label`})]})},C={name:`selectors / state: active`,render:()=>(0,l.jsx)(r,{state:`active`,label:`Label`})},w={name:`selectors / state: standard`,render:()=>(0,l.jsx)(r,{state:`standard`,label:`Label`})},T={name:`selectors / All states`,render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,l.jsx)(r,{state:`active`,label:`Label`}),(0,l.jsx)(r,{state:`standard`,label:`Label`})]})},E={name:`progressBar / 0%`,render:()=>(0,l.jsx)(i,{progress:0,label:`0% completado`,description:`Faltan 4 materiales`})},D={name:`progressBar / 25%`,render:()=>(0,l.jsx)(i,{progress:25,label:`25% completado`,description:`Faltan 4 materiales`})},O={name:`progressBar / 50%`,render:()=>(0,l.jsx)(i,{progress:50,label:`50% completado`,description:`Faltan 4 materiales`})},k={name:`progressBar / 75%`,render:()=>(0,l.jsx)(i,{progress:75,label:`75% completado`,description:`Faltan 4 materiales`})},A={name:`progressBar / 100%`,render:()=>(0,l.jsx)(i,{progress:100,label:`100% completado`})},j={name:`progressBar / All steps`,render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,padding:24},children:[(0,l.jsx)(i,{progress:0,label:`0% completado`,description:`Faltan 4 materiales`}),(0,l.jsx)(i,{progress:25,label:`25% completado`,description:`Faltan 4 materiales`}),(0,l.jsx)(i,{progress:50,label:`50% completado`,description:`Faltan 4 materiales`}),(0,l.jsx)(i,{progress:75,label:`75% completado`,description:`Faltan 4 materiales`}),(0,l.jsx)(i,{progress:100,label:`100% completado`})]})},M={name:`optionLabel / state: active`,render:()=>(0,l.jsx)(s,{state:`active`,label:`option label`})},N={name:`optionLabel / state: standard`,render:()=>(0,l.jsx)(s,{state:`standard`,label:`option label`})},P={name:`optionLabel / state: disabled`,render:()=>(0,l.jsx)(s,{state:`disabled`,label:`option label`})},F={name:`optionLabel / All states`,render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,l.jsx)(s,{state:`active`,label:`option label`}),(0,l.jsx)(s,{state:`standard`,label:`option label`}),(0,l.jsx)(s,{state:`disabled`,label:`option label`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "state: standard",
  args: {
    state: "standard"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "state: active",
  args: {
    state: "active",
    value: "Texto activo"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "state: x",
  args: {
    state: "x",
    value: "Texto borrable"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "state: ayuda",
  args: {
    state: "ayuda",
    helperText: "Mensaje de ayuda"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "state: advertencia",
  args: {
    state: "advertencia",
    helperText: "Mensaje de advertencia"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "state: disabled",
  args: {
    state: "disabled",
    value: "No editable"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "All states",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: 16
  }}>
      <FormField state="ayuda" label="Nombre" helperText="Mensaje de ayuda" />
      <FormField state="advertencia" label="Nombre" helperText="Mensaje de advertencia" />
      <FormField state="standard" label="Nombre" />
      <FormField state="active" label="Nombre" />
      <FormField state="disabled" label="Nombre" />
      <FormField state="x" label="Nombre" />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "checkBox / state: add",
  render: () => <CheckBox state="add" label="option label" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "checkBox / state: remove",
  render: () => <CheckBox state="remove" label="option label" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "checkBox / state: standard",
  render: () => <CheckBox state="standard" label="option label" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "checkBox / state: disabled",
  render: () => <CheckBox state="disabled" label="option label" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "checkBox / All states",
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "selectors / state: active",
  render: () => <Tag state="active" label="Label" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "selectors / state: standard",
  render: () => <Tag state="standard" label="Label" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "selectors / All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <Tag state="active" label="Label" />
      <Tag state="standard" label="Label" />
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "progressBar / 0%",
  render: () => <ProgressBar progress={0} label="0% completado" description="Faltan 4 materiales" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "progressBar / 25%",
  render: () => <ProgressBar progress={25} label="25% completado" description="Faltan 4 materiales" />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "progressBar / 50%",
  render: () => <ProgressBar progress={50} label="50% completado" description="Faltan 4 materiales" />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "progressBar / 75%",
  render: () => <ProgressBar progress={75} label="75% completado" description="Faltan 4 materiales" />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "progressBar / 100%",
  render: () => <ProgressBar progress={100} label="100% completado" />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "progressBar / All steps",
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "optionLabel / state: active",
  render: () => <OptionLabel state="active" label="option label" />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "optionLabel / state: standard",
  render: () => <OptionLabel state="standard" label="option label" />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "optionLabel / state: disabled",
  render: () => <OptionLabel state="disabled" label="option label" />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "optionLabel / All states",
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
}`,...F.parameters?.docs?.source}}},I=[`Standard`,`Active`,`X`,`Ayuda`,`Advertencia`,`Disabled`,`AllStates`,`CheckBoxAdd`,`CheckBoxRemove`,`CheckBoxStandard`,`CheckBoxDisabled`,`CheckBoxAll`,`TagActive`,`TagStandard`,`TagAll`,`Progress0`,`Progress25`,`Progress50`,`Progress75`,`Progress100`,`ProgressAll`,`OptionLabelActive`,`OptionLabelStandard`,`OptionLabelDisabled`,`OptionLabelAll`]}))();export{f as Active,h as Advertencia,_ as AllStates,m as Ayuda,v as CheckBoxAdd,S as CheckBoxAll,x as CheckBoxDisabled,y as CheckBoxRemove,b as CheckBoxStandard,g as Disabled,M as OptionLabelActive,F as OptionLabelAll,P as OptionLabelDisabled,N as OptionLabelStandard,E as Progress0,A as Progress100,D as Progress25,O as Progress50,k as Progress75,j as ProgressAll,d as Standard,C as TagActive,T as TagAll,w as TagStandard,p as X,I as __namedExportsOrder,u as default};