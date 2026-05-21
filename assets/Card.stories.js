import{n as e,o as t}from"./chunk.js";import{F as n,s as r}from"./iframe.js";import{t as i}from"./jsx-runtime.js";import{n as a,t as o}from"./Icon.js";import{c as s,n as c,r as l,t as u}from"./springs.js";import{n as d,t as f}from"./QuantitySelector.js";import{n as p,t as m}from"./ToggleCards.js";function h(e){return S[(S.indexOf(e)+1)%S.length]}function g({company:e=`NOVARUM`,code:t=`C.01`,orderNumber:n=`BS000095`,timestamp:r=`Ayer 10:25 am`,statusState:i=`completo`,visibility:a=`open`,onClick:l}){return(0,x.jsxs)(s.div,{className:`ds-summary-card ds-summary-card--${a}`,onClick:l,role:l?`button`:void 0,tabIndex:l?0:void 0,whileTap:l?{scale:.98}:void 0,transition:c.snappy,children:[(0,x.jsxs)(`div`,{className:`ds-summary-card__info`,children:[(0,x.jsxs)(`div`,{className:`ds-summary-card__company-block`,children:[(0,x.jsx)(`span`,{className:`ds-summary-card__company`,children:e}),(0,x.jsx)(`span`,{className:`ds-summary-card__code`,children:t})]}),(0,x.jsx)(`span`,{className:`ds-summary-card__order`,children:n}),(0,x.jsxs)(`div`,{className:`ds-summary-card__timestamp`,children:[(0,x.jsx)(o,{name:`info`,size:`sm`,color:`var(--ds-color-gray-500)`}),(0,x.jsx)(`span`,{className:`ds-summary-card__time`,children:r})]})]}),(0,x.jsxs)(`div`,{className:`ds-summary-card__actions`,children:[(0,x.jsx)(o,{name:i===`completo`?`completado`:i===`sin-stock`?`sin-stock`:i===`incompleto`?`incompleto`:`pendiente`,size:`lg`}),(0,x.jsx)(m,{size:a===`open`?`big`:`small`,visibility:a===`open`?`open`:`close`,onClick:l})]})]})}function _({description:e=`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:t=`pendiente`,qty:n=1,onQtyChange:r,onStateChange:i}){let[a,o]=(0,b.useState)(t),s=i!==void 0,c=s?t:a;return(0,x.jsxs)(`div`,{className:`ds-material-list`,children:[(0,x.jsx)(`p`,{className:`ds-material-list__desc`,children:e}),(0,x.jsx)(f,{value:n,state:c,size:`sm`,onTap:()=>{r&&r(n);let e=h(c);s?i(e):o(e)}})]})}function v({company:e=`NOVARUM`,code:t=`C.01`,orderNumber:n=`BS000095`,timestamp:r=`Ayer 10:25 am`,statusState:i=`completo`,materials:a=[]}){return(0,x.jsxs)(`div`,{className:`ds-detail-card`,children:[(0,x.jsx)(g,{company:e,code:t,orderNumber:n,timestamp:r,statusState:i,visibility:`open`}),(0,x.jsx)(`div`,{className:`ds-detail-card__materials`,children:a.map((e,t)=>(0,x.jsx)(_,{...e},t))})]})}function y({title:e,description:t,variant:n=`default`,children:r}){return(0,x.jsxs)(`div`,{className:`ds-card ds-card--${n}`,children:[(0,x.jsxs)(`div`,{className:`ds-card__header`,children:[(0,x.jsx)(`h3`,{className:`ds-card__title`,children:e}),t&&(0,x.jsx)(`p`,{className:`ds-card__description`,children:t})]}),r&&(0,x.jsx)(`div`,{className:`ds-card__body`,children:r})]})}var b,x,S,C=e((()=>{b=t(n()),l(),a(),d(),p(),u(),r(),x=i(),S=[`pendiente`,`incompleto`,`completo`,`sin-stock`],g.__docgenInfo={description:``,methods:[],displayName:`SummaryCard`,props:{company:{required:!1,tsType:{name:`string`},description:`Nombre de la empresa — e.g. "NOVARUM"`,defaultValue:{value:`"NOVARUM"`,computed:!1}},code:{required:!1,tsType:{name:`string`},description:`Código de obra/centro — e.g. "C.01"`,defaultValue:{value:`"C.01"`,computed:!1}},orderNumber:{required:!1,tsType:{name:`string`},description:`Número de orden — e.g. "BS000095"`,defaultValue:{value:`"BS000095"`,computed:!1}},timestamp:{required:!1,tsType:{name:`string`},description:`Timestamp legible — e.g. "Ayer 10:25 am"`,defaultValue:{value:`"Ayer 10:25 am"`,computed:!1}},statusState:{required:!1,tsType:{name:`union`,raw:`| "pendiente"
| "incompleto"
| "completo"
| "sin-stock"
| "default"
| "ok"
| "alert"`,elements:[{name:`literal`,value:`"pendiente"`},{name:`literal`,value:`"incompleto"`},{name:`literal`,value:`"completo"`},{name:`literal`,value:`"sin-stock"`},{name:`literal`,value:`"default"`},{name:`literal`,value:`"ok"`},{name:`literal`,value:`"alert"`}]},description:`Estado visual del ícono de status (completado / incompleto / pendiente / sin-stock)`,defaultValue:{value:`"completo"`,computed:!1}},visibility:{required:!1,tsType:{name:`union`,raw:`"open" | "close"`,elements:[{name:`literal`,value:`"open"`},{name:`literal`,value:`"close"`}]},description:`open = card expandida (ToggleCards con chevrons), close = card colapsada (arrow down)`,defaultValue:{value:`"open"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},_.__docgenInfo={description:``,methods:[],displayName:`MaterialList`,props:{description:{required:!1,tsType:{name:`string`},description:`Descripción del material`,defaultValue:{value:`"CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V"`,computed:!1}},qtyState:{required:!1,tsType:{name:`union`,raw:`| "pendiente"
| "incompleto"
| "completo"
| "sin-stock"
| "default"
| "ok"
| "alert"`,elements:[{name:`literal`,value:`"pendiente"`},{name:`literal`,value:`"incompleto"`},{name:`literal`,value:`"completo"`},{name:`literal`,value:`"sin-stock"`},{name:`literal`,value:`"default"`},{name:`literal`,value:`"ok"`},{name:`literal`,value:`"alert"`}]},description:`Estado visual del QuantitySelector circular`,defaultValue:{value:`"pendiente"`,computed:!1}},qty:{required:!1,tsType:{name:`number`},description:`Cantidad`,defaultValue:{value:`1`,computed:!1}},onQtyChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(qty: number) => void`,signature:{arguments:[{type:{name:`number`},name:`qty`}],return:{name:`void`}}},description:`Callback opcional cuando se toca el QuantitySelector. Si no se pasa, cicla el estado internamente.`},onStateChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(state: QuantitySelectorState) => void`,signature:{arguments:[{type:{name:`union`,raw:`| "pendiente"
| "incompleto"
| "completo"
| "sin-stock"
| "default"
| "ok"
| "alert"`,elements:[{name:`literal`,value:`"pendiente"`},{name:`literal`,value:`"incompleto"`},{name:`literal`,value:`"completo"`},{name:`literal`,value:`"sin-stock"`},{name:`literal`,value:`"default"`},{name:`literal`,value:`"ok"`},{name:`literal`,value:`"alert"`}]},name:`state`}],return:{name:`void`}}},description:``}}},v.__docgenInfo={description:``,methods:[],displayName:`DetailCard`,props:{company:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"NOVARUM"`,computed:!1}},code:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"C.01"`,computed:!1}},orderNumber:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"BS000095"`,computed:!1}},timestamp:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Ayer 10:25 am"`,computed:!1}},statusState:{required:!1,tsType:{name:`union`,raw:`| "pendiente"
| "incompleto"
| "completo"
| "sin-stock"
| "default"
| "ok"
| "alert"`,elements:[{name:`literal`,value:`"pendiente"`},{name:`literal`,value:`"incompleto"`},{name:`literal`,value:`"completo"`},{name:`literal`,value:`"sin-stock"`},{name:`literal`,value:`"default"`},{name:`literal`,value:`"ok"`},{name:`literal`,value:`"alert"`}]},description:``,defaultValue:{value:`"completo"`,computed:!1}},materials:{required:!1,tsType:{name:`Array`,elements:[{name:`MaterialListProps`}],raw:`MaterialListProps[]`},description:``,defaultValue:{value:`[]`,computed:!1}}}},y.__docgenInfo={description:`@deprecated Use SummaryCard, MaterialList, or DetailCard`,methods:[],displayName:`Card`,props:{title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "outlined" | "filled"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"outlined"`},{name:`literal`,value:`"filled"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),w,T,E,D,O,k,A;e((()=>{n(),C(),w=i(),T={title:`Sistema de Diseño/Card`,component:g,tags:[`autodocs`],argTypes:{visibility:{control:`select`,options:[`open`,`close`]}},args:{company:`NOVARUM`,code:`C.01`,orderNumber:`BS000095`,timestamp:`Ayer 10:25 am`,statusState:`completo`,visibility:`open`}},E={args:{visibility:`open`}},D={args:{visibility:`close`}},O={name:`MaterialList`,render:()=>(0,w.jsx)(`div`,{style:{padding:16,background:`var(--ds-color-surface)`},children:(0,w.jsx)(_,{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3})})},k={name:`DetailCard`,render:()=>(0,w.jsx)(`div`,{style:{padding:16,background:`var(--ds-color-surface)`},children:(0,w.jsx)(v,{company:`NOVARUM`,code:`C.01`,orderNumber:`BS000095`,timestamp:`Ayer 10:25 am`,statusState:`completo`,materials:[{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3},{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3},{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3}]})})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    visibility: "open"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    visibility: "close"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "MaterialList",
  render: () => <div style={{
    padding: 16,
    background: "var(--ds-color-surface)"
  }}>
      <MaterialList description="CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V" qtyState="incompleto" qty={3} />
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "DetailCard",
  render: () => <div style={{
    padding: 16,
    background: "var(--ds-color-surface)"
  }}>
      <DetailCard company="NOVARUM" code="C.01" orderNumber="BS000095" timestamp="Ayer 10:25 am" statusState="completo" materials={[{
      description: "CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V",
      qtyState: "incompleto",
      qty: 3
    }, {
      description: "CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V",
      qtyState: "incompleto",
      qty: 3
    }, {
      description: "CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V",
      qtyState: "incompleto",
      qty: 3
    }]} />
    </div>
}`,...k.parameters?.docs?.source}}},A=[`Open`,`Close`,`MaterialListExample`,`DetailCardExample`]}))();export{D as Close,k as DetailCardExample,O as MaterialListExample,E as Open,A as __namedExportsOrder,T as default};