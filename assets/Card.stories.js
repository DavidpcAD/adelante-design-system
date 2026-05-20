import{n as e}from"./chunk.js";import{F as t,s as n}from"./iframe.js";import{t as r}from"./jsx-runtime.js";import{n as i,t as a}from"./Icon.js";import{c as o,n as s,r as c,t as l}from"./springs.js";import{n as u,t as d}from"./QuantitySelector.js";import{n as f,t as p}from"./ToggleCards.js";function m({company:e=`NOVARUM`,code:t=`C.01`,orderNumber:n=`BS000095`,timestamp:r=`Ayer 10:25 am`,statusState:i=`completo`,visibility:c=`open`,onClick:l}){return(0,v.jsxs)(o.div,{className:`ds-summary-card ds-summary-card--${c}`,onClick:l,role:l?`button`:void 0,tabIndex:l?0:void 0,whileTap:l?{scale:.98}:void 0,transition:s.snappy,children:[(0,v.jsxs)(`div`,{className:`ds-summary-card__info`,children:[(0,v.jsxs)(`div`,{className:`ds-summary-card__company-block`,children:[(0,v.jsx)(`span`,{className:`ds-summary-card__company`,children:e}),(0,v.jsx)(`span`,{className:`ds-summary-card__code`,children:t})]}),(0,v.jsx)(`span`,{className:`ds-summary-card__order`,children:n}),(0,v.jsxs)(`div`,{className:`ds-summary-card__timestamp`,children:[(0,v.jsx)(a,{name:`info`,size:`sm`,color:`var(--ds-color-gray-500)`}),(0,v.jsx)(`span`,{className:`ds-summary-card__time`,children:r})]})]}),(0,v.jsxs)(`div`,{className:`ds-summary-card__actions`,children:[(0,v.jsx)(a,{name:i===`completo`?`completado`:i===`sin-stock`?`sin-stock`:i===`incompleto`?`incompleto`:`pendiente`,size:`lg`}),(0,v.jsx)(p,{size:c===`open`?`big`:`small`,visibility:c===`open`?`open`:`close`,onClick:l})]})]})}function h({description:e=`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:t=`pendiente`,qty:n=1,onQtyChange:r}){return(0,v.jsxs)(`div`,{className:`ds-material-list`,children:[(0,v.jsx)(`p`,{className:`ds-material-list__desc`,children:e}),(0,v.jsx)(d,{value:n,state:t,size:`sm`,onTap:r?()=>r(n):void 0})]})}function g({company:e=`NOVARUM`,code:t=`C.01`,orderNumber:n=`BS000095`,timestamp:r=`Ayer 10:25 am`,statusState:i=`completo`,materials:a=[]}){return(0,v.jsxs)(`div`,{className:`ds-detail-card`,children:[(0,v.jsx)(m,{company:e,code:t,orderNumber:n,timestamp:r,statusState:i,visibility:`open`}),(0,v.jsx)(`div`,{className:`ds-detail-card__materials`,children:a.map((e,t)=>(0,v.jsx)(h,{...e},t))})]})}function _({title:e,description:t,variant:n=`default`,children:r}){return(0,v.jsxs)(`div`,{className:`ds-card ds-card--${n}`,children:[(0,v.jsxs)(`div`,{className:`ds-card__header`,children:[(0,v.jsx)(`h3`,{className:`ds-card__title`,children:e}),t&&(0,v.jsx)(`p`,{className:`ds-card__description`,children:t})]}),r&&(0,v.jsx)(`div`,{className:`ds-card__body`,children:r})]})}var v,y=e((()=>{t(),c(),i(),u(),f(),l(),n(),v=r(),m.__docgenInfo={description:``,methods:[],displayName:`SummaryCard`,props:{company:{required:!1,tsType:{name:`string`},description:`Nombre de la empresa — e.g. "NOVARUM"`,defaultValue:{value:`"NOVARUM"`,computed:!1}},code:{required:!1,tsType:{name:`string`},description:`Código de obra/centro — e.g. "C.01"`,defaultValue:{value:`"C.01"`,computed:!1}},orderNumber:{required:!1,tsType:{name:`string`},description:`Número de orden — e.g. "BS000095"`,defaultValue:{value:`"BS000095"`,computed:!1}},timestamp:{required:!1,tsType:{name:`string`},description:`Timestamp legible — e.g. "Ayer 10:25 am"`,defaultValue:{value:`"Ayer 10:25 am"`,computed:!1}},statusState:{required:!1,tsType:{name:`union`,raw:`| "pendiente"
| "incompleto"
| "completo"
| "sin-stock"
| "default"
| "ok"
| "alert"`,elements:[{name:`literal`,value:`"pendiente"`},{name:`literal`,value:`"incompleto"`},{name:`literal`,value:`"completo"`},{name:`literal`,value:`"sin-stock"`},{name:`literal`,value:`"default"`},{name:`literal`,value:`"ok"`},{name:`literal`,value:`"alert"`}]},description:`Estado visual del ícono de status (completado / incompleto / pendiente / sin-stock)`,defaultValue:{value:`"completo"`,computed:!1}},visibility:{required:!1,tsType:{name:`union`,raw:`"open" | "close"`,elements:[{name:`literal`,value:`"open"`},{name:`literal`,value:`"close"`}]},description:`open = card expandida (ToggleCards con chevrons), close = card colapsada (arrow down)`,defaultValue:{value:`"open"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},h.__docgenInfo={description:``,methods:[],displayName:`MaterialList`,props:{description:{required:!1,tsType:{name:`string`},description:`Descripción del material`,defaultValue:{value:`"CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V"`,computed:!1}},qtyState:{required:!1,tsType:{name:`union`,raw:`| "pendiente"
| "incompleto"
| "completo"
| "sin-stock"
| "default"
| "ok"
| "alert"`,elements:[{name:`literal`,value:`"pendiente"`},{name:`literal`,value:`"incompleto"`},{name:`literal`,value:`"completo"`},{name:`literal`,value:`"sin-stock"`},{name:`literal`,value:`"default"`},{name:`literal`,value:`"ok"`},{name:`literal`,value:`"alert"`}]},description:`Estado visual del QuantitySelector circular`,defaultValue:{value:`"pendiente"`,computed:!1}},qty:{required:!1,tsType:{name:`number`},description:`Cantidad`,defaultValue:{value:`1`,computed:!1}},onQtyChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(qty: number) => void`,signature:{arguments:[{type:{name:`number`},name:`qty`}],return:{name:`void`}}},description:``}}},g.__docgenInfo={description:``,methods:[],displayName:`DetailCard`,props:{company:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"NOVARUM"`,computed:!1}},code:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"C.01"`,computed:!1}},orderNumber:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"BS000095"`,computed:!1}},timestamp:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Ayer 10:25 am"`,computed:!1}},statusState:{required:!1,tsType:{name:`union`,raw:`| "pendiente"
| "incompleto"
| "completo"
| "sin-stock"
| "default"
| "ok"
| "alert"`,elements:[{name:`literal`,value:`"pendiente"`},{name:`literal`,value:`"incompleto"`},{name:`literal`,value:`"completo"`},{name:`literal`,value:`"sin-stock"`},{name:`literal`,value:`"default"`},{name:`literal`,value:`"ok"`},{name:`literal`,value:`"alert"`}]},description:``,defaultValue:{value:`"completo"`,computed:!1}},materials:{required:!1,tsType:{name:`Array`,elements:[{name:`MaterialListProps`}],raw:`MaterialListProps[]`},description:``,defaultValue:{value:`[]`,computed:!1}}}},_.__docgenInfo={description:`@deprecated Use SummaryCard, MaterialList, or DetailCard`,methods:[],displayName:`Card`,props:{title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "outlined" | "filled"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"outlined"`},{name:`literal`,value:`"filled"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),b,x,S,C,w,T,E;e((()=>{t(),y(),b=r(),x={title:`Sistema de Diseño/Card`,component:m,tags:[`autodocs`],argTypes:{visibility:{control:`select`,options:[`open`,`close`]}},args:{company:`NOVARUM`,code:`C.01`,orderNumber:`BS000095`,timestamp:`Ayer 10:25 am`,statusState:`completo`,visibility:`open`}},S={args:{visibility:`open`}},C={args:{visibility:`close`}},w={name:`MaterialList`,render:()=>(0,b.jsx)(`div`,{style:{padding:16,background:`var(--ds-color-surface)`},children:(0,b.jsx)(h,{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3})})},T={name:`DetailCard`,render:()=>(0,b.jsx)(`div`,{style:{padding:16,background:`var(--ds-color-surface)`},children:(0,b.jsx)(g,{company:`NOVARUM`,code:`C.01`,orderNumber:`BS000095`,timestamp:`Ayer 10:25 am`,statusState:`completo`,materials:[{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3},{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3},{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3}]})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    visibility: "open"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    visibility: "close"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "MaterialList",
  render: () => <div style={{
    padding: 16,
    background: "var(--ds-color-surface)"
  }}>
      <MaterialList description="CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V" qtyState="incompleto" qty={3} />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Open`,`Close`,`MaterialListExample`,`DetailCardExample`]}))();export{C as Close,T as DetailCardExample,w as MaterialListExample,S as Open,E as __namedExportsOrder,x as default};