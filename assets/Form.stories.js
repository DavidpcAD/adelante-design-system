import{n as e,o as t}from"./chunk.js";import{F as n}from"./iframe.js";import{t as r}from"./jsx-runtime.js";import{n as i,r as a,s as o,t as s}from"./springs.js";import{n as c,t as l}from"./Icon.js";function u({label:e=`Nombre`,placeholder:t=`Escribir aquí`,type:n=`text`,state:r=`standard`,helperText:i,value:a,onChange:o,onClear:s}){let c=r===`disabled`,u={ayuda:i??`Texto de ayuda`,advertencia:i??`Campo requerido`}[r]??i;return(0,h.jsxs)(`div`,{className:`ds-form-field ds-form-field--${r}`,children:[(0,h.jsx)(`label`,{className:`ds-form-field__label`,children:e}),(0,h.jsxs)(`div`,{className:`ds-form-field__input-wrap`,children:[(0,h.jsx)(`input`,{className:`ds-form-field__input`,type:n,placeholder:t,disabled:c,value:a,onChange:o,"aria-invalid":r===`advertencia`}),r===`x`&&!c&&(0,h.jsx)(`button`,{className:`ds-form-field__clear`,onClick:s,"aria-label":`Limpiar`,type:`button`,children:(0,h.jsx)(l,{name:`close`,size:`sm`})}),r===`ayuda`&&(0,h.jsx)(l,{name:`info`,size:`sm`,className:`ds-form-field__icon`}),r===`advertencia`&&(0,h.jsx)(l,{name:`alert`,size:`sm`,className:`ds-form-field__icon ds-form-field__icon--warn`})]}),u&&(0,h.jsx)(`span`,{className:`ds-form-field__helper${r===`advertencia`?` ds-form-field__helper--warn`:``}`,children:u})]})}function d({label:e=`Opción`,state:t=`standard`,checked:n=!1,onChange:r}){let i=t===`disabled`,a=()=>{!i&&r&&r(!n)};return(0,h.jsxs)(`label`,{className:`ds-checkbox ds-checkbox--${t}`,children:[(0,h.jsxs)(`span`,{className:`ds-checkbox__box${n||t===`add`?` ds-checkbox__box--checked`:``}`,onClick:a,role:`checkbox`,"aria-checked":n,tabIndex:i?-1:0,onKeyDown:e=>e.key===` `&&a(),children:[(n||t===`add`)&&(0,h.jsx)(l,{name:`check`,size:`sm`,color:`var(--ds-color-white)`}),t===`remove`&&(0,h.jsx)(l,{name:`minus`,size:`sm`,color:`var(--ds-color-white)`})]}),(0,h.jsx)(`span`,{className:`ds-checkbox__label`,children:e})]})}function f({label:e=`Tag`,state:t=`standard`,onClick:n}){return(0,h.jsx)(o.button,{className:`ds-tag ds-tag--${t}`,onClick:n,type:`button`,whileTap:{scale:.95},transition:i.snappy,children:e})}function p({progress:e=0,label:t}){let n=Math.min(100,Math.max(0,e));return(0,h.jsxs)(`div`,{className:`ds-progress`,children:[t&&(0,h.jsx)(`span`,{className:`ds-progress__label`,children:t}),(0,h.jsx)(`div`,{className:`ds-progress__track`,children:(0,h.jsx)(`div`,{className:`ds-progress__fill`,style:{width:`${n}%`},role:`progressbar`,"aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100})}),(0,h.jsxs)(`span`,{className:`ds-progress__pct`,children:[n,`%`]})]})}function m({label:e=`Opción`,state:t=`standard`,onClick:n}){return(0,h.jsxs)(o.button,{className:`ds-option-label ds-option-label--${t}`,disabled:t===`disabled`,onClick:n,type:`button`,whileTap:t===`disabled`?void 0:{scale:.97},transition:i.snappy,children:[(0,h.jsx)(`span`,{className:`ds-option-label__dot`,"aria-hidden":`true`}),(0,h.jsx)(`span`,{className:`ds-option-label__text`,children:e})]})}var h,g=e((()=>{n(),a(),c(),s(),h=r(),u.__docgenInfo={description:``,methods:[],displayName:`FormField`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Nombre"`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Escribir aquí"`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`"text" | "email" | "password" | "number" | "tel"`,elements:[{name:`literal`,value:`"text"`},{name:`literal`,value:`"email"`},{name:`literal`,value:`"password"`},{name:`literal`,value:`"number"`},{name:`literal`,value:`"tel"`}]},description:``,defaultValue:{value:`"text"`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`| "standard"
| "active"
| "x"
| "ayuda"
| "advertencia"
| "disabled"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"active"`},{name:`literal`,value:`"x"`},{name:`literal`,value:`"ayuda"`},{name:`literal`,value:`"advertencia"`},{name:`literal`,value:`"disabled"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},helperText:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`e`}],return:{name:`void`}}},description:``},onClear:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},d.__docgenInfo={description:``,methods:[],displayName:`CheckBox`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Opción"`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`"add" | "remove" | "standard" | "disabled"`,elements:[{name:`literal`,value:`"add"`},{name:`literal`,value:`"remove"`},{name:`literal`,value:`"standard"`},{name:`literal`,value:`"disabled"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},checked:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``}}},f.__docgenInfo={description:``,methods:[],displayName:`Tag`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Tag"`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`"active" | "standard"`,elements:[{name:`literal`,value:`"active"`},{name:`literal`,value:`"standard"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},p.__docgenInfo={description:``,methods:[],displayName:`ProgressBar`,props:{progress:{required:!1,tsType:{name:`number`},description:`Progress percentage`,defaultValue:{value:`0`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Optional label`}}},m.__docgenInfo={description:``,methods:[],displayName:`OptionLabel`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Opción"`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`"active" | "standard" | "disabled"`,elements:[{name:`literal`,value:`"active"`},{name:`literal`,value:`"standard"`},{name:`literal`,value:`"disabled"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{_=t(n()),g(),v=r(),y={title:`Sistema de Diseño/Form`,component:u,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`active`,`x`,`ayuda`,`advertencia`,`disabled`]}},args:{label:`Nombre`,placeholder:`Escribir aquí`,state:`standard`}},b={args:{state:`standard`}},x={args:{state:`active`,value:`Texto activo`}},S={args:{state:`x`,value:`Texto borrable`}},C={args:{state:`ayuda`,helperText:`Este es un texto de ayuda`}},w={args:{state:`advertencia`,helperText:`Este campo es obligatorio`}},T={args:{state:`disabled`,value:`No editable`}},E={render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,padding:16},children:[(0,v.jsx)(u,{state:`standard`,label:`standard`}),(0,v.jsx)(u,{state:`active`,label:`active`,value:`Texto activo`}),(0,v.jsx)(u,{state:`x`,label:`x`,value:`Texto borrable`}),(0,v.jsx)(u,{state:`ayuda`,label:`ayuda`}),(0,v.jsx)(u,{state:`advertencia`,label:`advertencia`}),(0,v.jsx)(u,{state:`disabled`,label:`disabled`,value:`No editable`})]})},D={name:`CheckBox / All states`,render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,v.jsx)(d,{state:`add`,label:`Agregar opción`}),(0,v.jsx)(d,{state:`remove`,label:`Remover opción`}),(0,v.jsx)(d,{state:`standard`,label:`Opción estándar`}),(0,v.jsx)(d,{state:`disabled`,label:`Opción deshabilitada`})]})},O={name:`CheckBox / Interactive`,render:()=>{let[e,t]=(0,_.useState)(!1);return(0,v.jsx)(d,{label:`Acepto los términos`,checked:e,onChange:t})}},k={name:`Tag / All states`,render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,v.jsx)(f,{state:`active`,label:`Activo`}),(0,v.jsx)(f,{state:`standard`,label:`Estándar`})]})},A={name:`ProgressBar / All steps`,render:()=>(0,v.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,padding:16},children:[0,25,50,75,100].map(e=>(0,v.jsx)(p,{progress:e,label:`Paso ${e/25+1}`},e))})},j={name:`OptionLabel / All states`,render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,v.jsx)(m,{state:`active`,label:`Opción activa`}),(0,v.jsx)(m,{state:`standard`,label:`Opción estándar`}),(0,v.jsx)(m,{state:`disabled`,label:`Opción deshabilitada`})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    state: "standard"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    state: "active",
    value: "Texto activo"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    state: "x",
    value: "Texto borrable"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    state: "ayuda",
    helperText: "Este es un texto de ayuda"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    state: "advertencia",
    helperText: "Este campo es obligatorio"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    value: "No editable"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "CheckBox / Interactive",
  render: () => {
    const [c, setC] = useState(false);
    return <CheckBox label="Acepto los términos" checked={c} onChange={setC} />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Tag / All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <Tag state="active" label="Activo" />
      <Tag state="standard" label="Estándar" />
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "ProgressBar / All steps",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: 16
  }}>
      {[0, 25, 50, 75, 100].map(p => <ProgressBar key={p} progress={p} label={\`Paso \${p / 25 + 1}\`} />)}
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`Standard`,`Active`,`WithClear`,`Ayuda`,`Advertencia`,`Disabled`,`AllStates`,`CheckBoxAll`,`CheckBoxInteractive`,`TagAll`,`ProgressAll`,`OptionLabelAll`]}))();export{x as Active,w as Advertencia,E as AllStates,C as Ayuda,D as CheckBoxAll,O as CheckBoxInteractive,T as Disabled,j as OptionLabelAll,A as ProgressAll,b as Standard,k as TagAll,S as WithClear,M as __namedExportsOrder,y as default};