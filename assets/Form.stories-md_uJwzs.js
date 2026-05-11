import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{N as n}from"./iframe-B6xUrxNR.js";import{t as r}from"./jsx-runtime-DaLCRA3n.js";import{n as i,t as a}from"./Icon-DpiA1r-J.js";function o({label:e=`Nombre`,placeholder:t=`Escribir aquí`,type:n=`text`,state:r=`standard`,helperText:i,value:o,onChange:s,onClear:c}){let l=r===`disabled`,u={ayuda:i??`Texto de ayuda`,advertencia:i??`Campo requerido`}[r]??i;return(0,d.jsxs)(`div`,{className:`ds-form-field ds-form-field--${r}`,children:[(0,d.jsx)(`label`,{className:`ds-form-field__label`,children:e}),(0,d.jsxs)(`div`,{className:`ds-form-field__input-wrap`,children:[(0,d.jsx)(`input`,{className:`ds-form-field__input`,type:n,placeholder:t,disabled:l,value:o,onChange:s,"aria-invalid":r===`advertencia`}),r===`x`&&!l&&(0,d.jsx)(`button`,{className:`ds-form-field__clear`,onClick:c,"aria-label":`Limpiar`,type:`button`,children:(0,d.jsx)(a,{name:`close`,size:`sm`})}),r===`ayuda`&&(0,d.jsx)(a,{name:`info`,size:`sm`,className:`ds-form-field__icon`}),r===`advertencia`&&(0,d.jsx)(a,{name:`alert`,size:`sm`,className:`ds-form-field__icon ds-form-field__icon--warn`})]}),u&&(0,d.jsx)(`span`,{className:`ds-form-field__helper${r===`advertencia`?` ds-form-field__helper--warn`:``}`,children:u})]})}function s({label:e=`Opción`,state:t=`standard`,checked:n=!1,onChange:r}){let i=t===`disabled`,o=()=>{!i&&r&&r(!n)};return(0,d.jsxs)(`label`,{className:`ds-checkbox ds-checkbox--${t}`,children:[(0,d.jsxs)(`span`,{className:`ds-checkbox__box${n||t===`add`?` ds-checkbox__box--checked`:``}`,onClick:o,role:`checkbox`,"aria-checked":n,tabIndex:i?-1:0,onKeyDown:e=>e.key===` `&&o(),children:[(n||t===`add`)&&(0,d.jsx)(a,{name:`check`,size:`sm`,color:`var(--ds-color-white)`}),t===`remove`&&(0,d.jsx)(a,{name:`minus`,size:`sm`,color:`var(--ds-color-black)`})]}),(0,d.jsx)(`span`,{className:`ds-checkbox__label`,children:e})]})}function c({label:e=`Tag`,state:t=`standard`,onClick:n}){return(0,d.jsx)(`button`,{className:`ds-tag ds-tag--${t}`,onClick:n,type:`button`,children:e})}function l({progress:e=0,label:t}){let n=Math.min(100,Math.max(0,e));return(0,d.jsxs)(`div`,{className:`ds-progress`,children:[t&&(0,d.jsx)(`span`,{className:`ds-progress__label`,children:t}),(0,d.jsx)(`div`,{className:`ds-progress__track`,children:(0,d.jsx)(`div`,{className:`ds-progress__fill`,style:{width:`${n}%`},role:`progressbar`,"aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100})}),(0,d.jsxs)(`span`,{className:`ds-progress__pct`,children:[n,`%`]})]})}function u({label:e=`Opción`,state:t=`standard`,onClick:n}){return(0,d.jsxs)(`button`,{className:`ds-option-label ds-option-label--${t}`,disabled:t===`disabled`,onClick:n,type:`button`,children:[(0,d.jsx)(a,{name:`home`,size:`md`}),(0,d.jsx)(`span`,{className:`ds-option-label__text`,children:e})]})}var d,f=e((()=>{n(),i(),d=r(),o.__docgenInfo={description:``,methods:[],displayName:`FormField`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Nombre"`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Escribir aquí"`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`"text" | "email" | "password" | "number" | "tel"`,elements:[{name:`literal`,value:`"text"`},{name:`literal`,value:`"email"`},{name:`literal`,value:`"password"`},{name:`literal`,value:`"number"`},{name:`literal`,value:`"tel"`}]},description:``,defaultValue:{value:`"text"`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`| "standard"
| "active"
| "x"
| "ayuda"
| "advertencia"
| "disabled"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"active"`},{name:`literal`,value:`"x"`},{name:`literal`,value:`"ayuda"`},{name:`literal`,value:`"advertencia"`},{name:`literal`,value:`"disabled"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},helperText:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`e`}],return:{name:`void`}}},description:``},onClear:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},s.__docgenInfo={description:``,methods:[],displayName:`CheckBox`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Opción"`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`"add" | "remove" | "standard" | "disabled"`,elements:[{name:`literal`,value:`"add"`},{name:`literal`,value:`"remove"`},{name:`literal`,value:`"standard"`},{name:`literal`,value:`"disabled"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},checked:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``}}},c.__docgenInfo={description:``,methods:[],displayName:`Tag`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Tag"`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`"active" | "standard"`,elements:[{name:`literal`,value:`"active"`},{name:`literal`,value:`"standard"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},l.__docgenInfo={description:``,methods:[],displayName:`ProgressBar`,props:{progress:{required:!1,tsType:{name:`number`},description:`Progress percentage`,defaultValue:{value:`0`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Optional label`}}},u.__docgenInfo={description:``,methods:[],displayName:`OptionLabel`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Opción"`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`"active" | "standard" | "disabled"`,elements:[{name:`literal`,value:`"active"`},{name:`literal`,value:`"standard"`},{name:`literal`,value:`"disabled"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{p=t(n()),f(),m=r(),h={title:`Core/Form/FormField`,component:o,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`active`,`x`,`ayuda`,`advertencia`,`disabled`]}},args:{label:`Nombre`,placeholder:`Escribir aquí`,state:`standard`}},g={args:{state:`standard`}},_={args:{state:`active`,value:`Texto activo`}},v={args:{state:`x`,value:`Texto borrable`}},y={args:{state:`ayuda`,helperText:`Este es un texto de ayuda`}},b={args:{state:`advertencia`,helperText:`Este campo es obligatorio`}},x={args:{state:`disabled`,value:`No editable`}},S={render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,padding:16},children:[(0,m.jsx)(o,{state:`standard`,label:`standard`}),(0,m.jsx)(o,{state:`active`,label:`active`,value:`Texto activo`}),(0,m.jsx)(o,{state:`x`,label:`x`,value:`Texto borrable`}),(0,m.jsx)(o,{state:`ayuda`,label:`ayuda`}),(0,m.jsx)(o,{state:`advertencia`,label:`advertencia`}),(0,m.jsx)(o,{state:`disabled`,label:`disabled`,value:`No editable`})]})},C={name:`CheckBox / All states`,render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,m.jsx)(s,{state:`add`,label:`Agregar opción`}),(0,m.jsx)(s,{state:`remove`,label:`Remover opción`}),(0,m.jsx)(s,{state:`standard`,label:`Opción estándar`}),(0,m.jsx)(s,{state:`disabled`,label:`Opción deshabilitada`})]})},w={name:`CheckBox / Interactive`,render:()=>{let[e,t]=(0,p.useState)(!1);return(0,m.jsx)(s,{label:`Acepto los términos`,checked:e,onChange:t})}},T={name:`Tag / All states`,render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,m.jsx)(c,{state:`active`,label:`Activo`}),(0,m.jsx)(c,{state:`standard`,label:`Estándar`})]})},E={name:`ProgressBar / All steps`,render:()=>(0,m.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,padding:16},children:[0,25,50,75,100].map(e=>(0,m.jsx)(l,{progress:e,label:`Paso ${e/25+1}`},e))})},D={name:`OptionLabel / All states`,render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,m.jsx)(u,{state:`active`,label:`Opción activa`}),(0,m.jsx)(u,{state:`standard`,label:`Opción estándar`}),(0,m.jsx)(u,{state:`disabled`,label:`Opción deshabilitada`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: "standard"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    state: "active",
    value: "Texto activo"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    state: "x",
    value: "Texto borrable"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    state: "ayuda",
    helperText: "Este es un texto de ayuda"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    state: "advertencia",
    helperText: "Este campo es obligatorio"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    value: "No editable"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "CheckBox / Interactive",
  render: () => {
    const [c, setC] = useState(false);
    return <CheckBox label="Acepto los términos" checked={c} onChange={setC} />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Tag / All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <Tag state="active" label="Activo" />
      <Tag state="standard" label="Estándar" />
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "ProgressBar / All steps",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: 16
  }}>
      {[0, 25, 50, 75, 100].map(p => <ProgressBar key={p} progress={p} label={\`Paso \${p / 25 + 1}\`} />)}
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Standard`,`Active`,`WithClear`,`Ayuda`,`Advertencia`,`Disabled`,`AllStates`,`CheckBoxAll`,`CheckBoxInteractive`,`TagAll`,`ProgressAll`,`OptionLabelAll`]}))();export{_ as Active,b as Advertencia,S as AllStates,y as Ayuda,C as CheckBoxAll,w as CheckBoxInteractive,x as Disabled,D as OptionLabelAll,E as ProgressAll,g as Standard,T as TagAll,v as WithClear,O as __namedExportsOrder,h as default};