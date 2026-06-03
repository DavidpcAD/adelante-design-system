import{n as e}from"./chunk.js";import{N as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{a as r,i,n as a,o,r as s,s as c,t as l}from"./Form.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{t(),c(),u=n(),d={title:`Form/Form`,component:a,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`active`,`x`,`ayuda`,`advertencia`,`disabled`]}},args:{label:`Nombre`,placeholder:`Escribir aquí`,state:`standard`}},f={name:`formField / state: standard`,args:{state:`standard`}},p={name:`formField / state: active`,args:{state:`active`,value:`Texto activo`}},m={name:`formField / state: x`,args:{state:`x`}},h={name:`formField / state: ayuda`,args:{state:`ayuda`,helperText:`Mensaje de ayuda`}},g={name:`formField / state: advertencia`,args:{state:`advertencia`,helperText:`Mensaje de advertencia`}},_={name:`formField / state: disabled`,args:{state:`disabled`,value:`No editable`}},v={name:`formField / All states`,render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,padding:16},children:[(0,u.jsx)(a,{state:`ayuda`,label:`Nombre`,helperText:`Mensaje de ayuda`}),(0,u.jsx)(a,{state:`advertencia`,label:`Nombre`,helperText:`Mensaje de advertencia`}),(0,u.jsx)(a,{state:`standard`,label:`Nombre`}),(0,u.jsx)(a,{state:`active`,label:`Nombre`}),(0,u.jsx)(a,{state:`disabled`,label:`Nombre`}),(0,u.jsx)(a,{state:`x`,label:`Nombre`})]})},y={name:`checkBox / state: disabled`,render:()=>(0,u.jsx)(l,{state:`disabled`,label:`option label`})},b={name:`checkBox / state: checked`,render:()=>(0,u.jsx)(l,{state:`checked`,label:`option label`})},x={name:`checkBox / state: hover`,render:()=>(0,u.jsx)(l,{state:`hover`,label:`option label`})},S={name:`checkBox / state: standard`,render:()=>(0,u.jsx)(l,{state:`standard`,label:`option label`})},C={name:`checkBox / All states`,render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,u.jsx)(l,{state:`disabled`,label:`option label`}),(0,u.jsx)(l,{state:`checked`,label:`option label`}),(0,u.jsx)(l,{state:`hover`,label:`option label`}),(0,u.jsx)(l,{state:`standard`,label:`option label`})]})},w={name:`optionsExtra / state: add`,render:()=>(0,u.jsx)(i,{state:`add`,label:`option label`})},T={name:`optionsExtra / state: remove`,render:()=>(0,u.jsx)(i,{state:`remove`,label:`option label`})},E={name:`optionsExtra / state: standard`,render:()=>(0,u.jsx)(i,{state:`standard`,label:`option label`})},D={name:`optionsExtra / state: disabled`,render:()=>(0,u.jsx)(i,{state:`disabled`,label:`option label`})},O={name:`optionsExtra / All states`,render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,u.jsx)(i,{state:`add`,label:`option label`}),(0,u.jsx)(i,{state:`remove`,label:`option label`}),(0,u.jsx)(i,{state:`standard`,label:`option label`}),(0,u.jsx)(i,{state:`disabled`,label:`option label`})]})},k={name:`selectors / state: active`,render:()=>(0,u.jsx)(o,{state:`active`,label:`Label`})},A={name:`selectors / state: disabled`,render:()=>(0,u.jsx)(o,{state:`disabled`,label:`Label`})},j={name:`selectors / state: standard`,render:()=>(0,u.jsx)(o,{state:`standard`,label:`Label`})},M={name:`selectors / state: label+icon`,render:()=>(0,u.jsx)(o,{state:`active`,layout:`label+icon`,icon:`info`,label:`Label`})},N={name:`selectors / state: label`,render:()=>(0,u.jsx)(o,{layout:`label`,label:`Label`})},P={name:`selectors / All states`,render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,u.jsx)(o,{state:`active`,label:`Label`}),(0,u.jsx)(o,{state:`standard`,label:`Label`}),(0,u.jsx)(o,{state:`disabled`,label:`Label`})]})},F={name:`progressBar / 0%`,render:()=>(0,u.jsx)(r,{progress:0,label:`0% completado`,description:`Faltan 4 materiales`})},I={name:`progressBar / 25%`,render:()=>(0,u.jsx)(r,{progress:25,label:`25% completado`,description:`Faltan 4 materiales`})},L={name:`progressBar / 50%`,render:()=>(0,u.jsx)(r,{progress:50,label:`50% completado`,description:`Faltan 4 materiales`})},R={name:`progressBar / 75%`,render:()=>(0,u.jsx)(r,{progress:75,label:`75% completado`,description:`Faltan 4 materiales`})},z={name:`progressBar / 100%`,render:()=>(0,u.jsx)(r,{progress:100,label:`100% completado`})},B={name:`progressBar / All steps`,render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,padding:24},children:[(0,u.jsx)(r,{progress:0,label:`0% completado`,description:`Faltan 4 materiales`}),(0,u.jsx)(r,{progress:25,label:`25% completado`,description:`Faltan 4 materiales`}),(0,u.jsx)(r,{progress:50,label:`50% completado`,description:`Faltan 4 materiales`}),(0,u.jsx)(r,{progress:75,label:`75% completado`,description:`Faltan 4 materiales`}),(0,u.jsx)(r,{progress:100,label:`100% completado`})]})},V={name:`optionLabel / state: active`,render:()=>(0,u.jsx)(s,{state:`active`,label:`option label`})},H={name:`optionLabel / state: standard`,render:()=>(0,u.jsx)(s,{state:`standard`,label:`option label`})},U={name:`optionLabel / state: disabled`,render:()=>(0,u.jsx)(s,{state:`disabled`,label:`option label`})},W={name:`optionLabel / All states`,render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,u.jsx)(s,{state:`active`,label:`option label`}),(0,u.jsx)(s,{state:`standard`,label:`option label`}),(0,u.jsx)(s,{state:`disabled`,label:`option label`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "formField / state: standard",
  args: {
    state: "standard"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "formField / state: active",
  args: {
    state: "active",
    value: "Texto activo"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "formField / state: x",
  args: {
    state: "x"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "formField / state: ayuda",
  args: {
    state: "ayuda",
    helperText: "Mensaje de ayuda"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "formField / state: advertencia",
  args: {
    state: "advertencia",
    helperText: "Mensaje de advertencia"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "formField / state: disabled",
  args: {
    state: "disabled",
    value: "No editable"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "formField / All states",
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "checkBox / state: disabled",
  render: () => <CheckBox state="disabled" label="option label" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "checkBox / state: checked",
  render: () => <CheckBox state="checked" label="option label" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "checkBox / state: hover",
  render: () => <CheckBox state="hover" label="option label" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "checkBox / state: standard",
  render: () => <CheckBox state="standard" label="option label" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "checkBox / All states",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 16
  }}>
      <CheckBox state="disabled" label="option label" />
      <CheckBox state="checked" label="option label" />
      <CheckBox state="hover" label="option label" />
      <CheckBox state="standard" label="option label" />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "optionsExtra / state: add",
  render: () => <OptionsExtra state="add" label="option label" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "optionsExtra / state: remove",
  render: () => <OptionsExtra state="remove" label="option label" />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "optionsExtra / state: standard",
  render: () => <OptionsExtra state="standard" label="option label" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "optionsExtra / state: disabled",
  render: () => <OptionsExtra state="disabled" label="option label" />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "optionsExtra / All states",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 16
  }}>
      <OptionsExtra state="add" label="option label" />
      <OptionsExtra state="remove" label="option label" />
      <OptionsExtra state="standard" label="option label" />
      <OptionsExtra state="disabled" label="option label" />
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "selectors / state: active",
  render: () => <Tag state="active" label="Label" />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "selectors / state: disabled",
  render: () => <Tag state="disabled" label="Label" />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "selectors / state: standard",
  render: () => <Tag state="standard" label="Label" />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "selectors / state: label+icon",
  render: () => <Tag state="active" layout="label+icon" icon="info" label="Label" />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "selectors / state: label",
  render: () => <Tag layout="label" label="Label" />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "selectors / All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <Tag state="active" label="Label" />
      <Tag state="standard" label="Label" />
      <Tag state="disabled" label="Label" />
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "progressBar / 0%",
  render: () => <ProgressBar progress={0} label="0% completado" description="Faltan 4 materiales" />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "progressBar / 25%",
  render: () => <ProgressBar progress={25} label="25% completado" description="Faltan 4 materiales" />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "progressBar / 50%",
  render: () => <ProgressBar progress={50} label="50% completado" description="Faltan 4 materiales" />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "progressBar / 75%",
  render: () => <ProgressBar progress={75} label="75% completado" description="Faltan 4 materiales" />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "progressBar / 100%",
  render: () => <ProgressBar progress={100} label="100% completado" />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "optionLabel / state: active",
  render: () => <OptionLabel state="active" label="option label" />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "optionLabel / state: standard",
  render: () => <OptionLabel state="standard" label="option label" />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "optionLabel / state: disabled",
  render: () => <OptionLabel state="disabled" label="option label" />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G=`Standard.Active.X.Ayuda.Advertencia.Disabled.AllStates.CheckBoxDisabled.CheckBoxChecked.CheckBoxHover.CheckBoxStandard.CheckBoxAll.OptionsExtraAdd.OptionsExtraRemove.OptionsExtraStandard.OptionsExtraDisabled.OptionsExtraAll.TagActive.TagDisabled.TagStandard.TagLabelIcon.TagLabel.TagAll.Progress0.Progress25.Progress50.Progress75.Progress100.ProgressAll.OptionLabelActive.OptionLabelStandard.OptionLabelDisabled.OptionLabelAll`.split(`.`)}))();export{p as Active,g as Advertencia,v as AllStates,h as Ayuda,C as CheckBoxAll,b as CheckBoxChecked,y as CheckBoxDisabled,x as CheckBoxHover,S as CheckBoxStandard,_ as Disabled,V as OptionLabelActive,W as OptionLabelAll,U as OptionLabelDisabled,H as OptionLabelStandard,w as OptionsExtraAdd,O as OptionsExtraAll,D as OptionsExtraDisabled,T as OptionsExtraRemove,E as OptionsExtraStandard,F as Progress0,z as Progress100,I as Progress25,L as Progress50,R as Progress75,B as ProgressAll,f as Standard,k as TagActive,P as TagAll,A as TagDisabled,N as TagLabel,M as TagLabelIcon,j as TagStandard,m as X,G as __namedExportsOrder,d as default};