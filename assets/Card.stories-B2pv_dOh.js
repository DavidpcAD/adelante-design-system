import{n as e}from"./chunk-jRWAZmH_.js";import{P as t,o as n}from"./iframe-BPqpetuR.js";import{t as r}from"./jsx-runtime-DaLCRA3n.js";import{n as i,t as a}from"./Icon-DKEUeUuu.js";import{n as o,t as s}from"./QuantitySelector-Q7JgD--v.js";import{n as c,t as l}from"./ToggleCards-CjWhsnqX.js";function u({company:e=`NOVARUM`,code:t=`C.01`,orderNumber:n=`BS000095`,timestamp:r=`Ayer 10:25 am`,statusState:i=`completo`,visibility:o=`open`,onClick:s}){return(0,m.jsxs)(`div`,{className:`ds-summary-card ds-summary-card--${o}`,onClick:s,role:s?`button`:void 0,tabIndex:s?0:void 0,children:[(0,m.jsxs)(`div`,{className:`ds-summary-card__info`,children:[(0,m.jsxs)(`div`,{className:`ds-summary-card__company-block`,children:[(0,m.jsx)(`span`,{className:`ds-summary-card__company`,children:e}),(0,m.jsx)(`span`,{className:`ds-summary-card__code`,children:t})]}),(0,m.jsx)(`span`,{className:`ds-summary-card__order`,children:n}),(0,m.jsxs)(`div`,{className:`ds-summary-card__timestamp`,children:[(0,m.jsx)(a,{name:`sin-autorizar`,size:`sm`,color:`var(--ds-color-gray-500)`}),(0,m.jsx)(`span`,{className:`ds-summary-card__time`,children:r})]})]}),(0,m.jsxs)(`div`,{className:`ds-summary-card__actions`,children:[(0,m.jsx)(a,{name:i===`completo`?`completado`:i===`sin-stock`?`sin-stock`:i===`incompleto`?`incompleto`:`pendiente`,size:`lg`,color:i===`completo`?`var(--ds-color-green-100)`:i===`sin-stock`?`var(--ds-color-red-100)`:i===`incompleto`?`var(--ds-color-yellow)`:`var(--ds-color-gray-300)`}),(0,m.jsx)(l,{size:o===`open`?`big`:`small`,visibility:o===`open`?`open`:`close`,onClick:s})]})]})}function d({description:e=`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:t=`pendiente`,qty:n=1,onQtyChange:r}){return(0,m.jsxs)(`div`,{className:`ds-material-list`,children:[(0,m.jsx)(`p`,{className:`ds-material-list__desc`,children:e}),(0,m.jsx)(s,{value:n,state:t,size:`sm`,onTap:r?()=>r(n):void 0})]})}function f({company:e=`NOVARUM`,code:t=`C.01`,orderNumber:n=`BS000095`,timestamp:r=`Ayer 10:25 am`,statusState:i=`completo`,materials:a=[]}){return(0,m.jsxs)(`div`,{className:`ds-detail-card`,children:[(0,m.jsx)(u,{company:e,code:t,orderNumber:n,timestamp:r,statusState:i,visibility:`open`}),(0,m.jsx)(`div`,{className:`ds-detail-card__materials`,children:a.map((e,t)=>(0,m.jsx)(d,{...e},t))})]})}function p({title:e,description:t,variant:n=`default`,children:r}){return(0,m.jsxs)(`div`,{className:`ds-card ds-card--${n}`,children:[(0,m.jsxs)(`div`,{className:`ds-card__header`,children:[(0,m.jsx)(`h3`,{className:`ds-card__title`,children:e}),t&&(0,m.jsx)(`p`,{className:`ds-card__description`,children:t})]}),r&&(0,m.jsx)(`div`,{className:`ds-card__body`,children:r})]})}var m,h=e((()=>{t(),i(),o(),c(),n(),m=r(),u.__docgenInfo={description:``,methods:[],displayName:`SummaryCard`,props:{company:{required:!1,tsType:{name:`string`},description:`Nombre de la empresa — e.g. "NOVARUM"`,defaultValue:{value:`"NOVARUM"`,computed:!1}},code:{required:!1,tsType:{name:`string`},description:`Código de obra/centro — e.g. "C.01"`,defaultValue:{value:`"C.01"`,computed:!1}},orderNumber:{required:!1,tsType:{name:`string`},description:`Número de orden — e.g. "BS000095"`,defaultValue:{value:`"BS000095"`,computed:!1}},timestamp:{required:!1,tsType:{name:`string`},description:`Timestamp legible — e.g. "Ayer 10:25 am"`,defaultValue:{value:`"Ayer 10:25 am"`,computed:!1}},statusState:{required:!1,tsType:{name:`union`,raw:`| "pendiente"
| "incompleto"
| "completo"
| "sin-stock"
| "default"
| "ok"
| "alert"`,elements:[{name:`literal`,value:`"pendiente"`},{name:`literal`,value:`"incompleto"`},{name:`literal`,value:`"completo"`},{name:`literal`,value:`"sin-stock"`},{name:`literal`,value:`"default"`},{name:`literal`,value:`"ok"`},{name:`literal`,value:`"alert"`}]},description:`Estado visual del ícono de status (completado / incompleto / pendiente / sin-stock)`,defaultValue:{value:`"completo"`,computed:!1}},visibility:{required:!1,tsType:{name:`union`,raw:`"open" | "close"`,elements:[{name:`literal`,value:`"open"`},{name:`literal`,value:`"close"`}]},description:`open = card expandida (ToggleCards con chevrons), close = card colapsada (arrow down)`,defaultValue:{value:`"open"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},d.__docgenInfo={description:``,methods:[],displayName:`MaterialList`,props:{description:{required:!1,tsType:{name:`string`},description:`Descripción del material`,defaultValue:{value:`"CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V"`,computed:!1}},qtyState:{required:!1,tsType:{name:`union`,raw:`| "pendiente"
| "incompleto"
| "completo"
| "sin-stock"
| "default"
| "ok"
| "alert"`,elements:[{name:`literal`,value:`"pendiente"`},{name:`literal`,value:`"incompleto"`},{name:`literal`,value:`"completo"`},{name:`literal`,value:`"sin-stock"`},{name:`literal`,value:`"default"`},{name:`literal`,value:`"ok"`},{name:`literal`,value:`"alert"`}]},description:`Estado visual del QuantitySelector circular`,defaultValue:{value:`"pendiente"`,computed:!1}},qty:{required:!1,tsType:{name:`number`},description:`Cantidad`,defaultValue:{value:`1`,computed:!1}},onQtyChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(qty: number) => void`,signature:{arguments:[{type:{name:`number`},name:`qty`}],return:{name:`void`}}},description:``}}},f.__docgenInfo={description:``,methods:[],displayName:`DetailCard`,props:{company:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"NOVARUM"`,computed:!1}},code:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"C.01"`,computed:!1}},orderNumber:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"BS000095"`,computed:!1}},timestamp:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Ayer 10:25 am"`,computed:!1}},statusState:{required:!1,tsType:{name:`union`,raw:`| "pendiente"
| "incompleto"
| "completo"
| "sin-stock"
| "default"
| "ok"
| "alert"`,elements:[{name:`literal`,value:`"pendiente"`},{name:`literal`,value:`"incompleto"`},{name:`literal`,value:`"completo"`},{name:`literal`,value:`"sin-stock"`},{name:`literal`,value:`"default"`},{name:`literal`,value:`"ok"`},{name:`literal`,value:`"alert"`}]},description:``,defaultValue:{value:`"completo"`,computed:!1}},materials:{required:!1,tsType:{name:`Array`,elements:[{name:`MaterialListProps`}],raw:`MaterialListProps[]`},description:``,defaultValue:{value:`[]`,computed:!1}}}},p.__docgenInfo={description:`@deprecated Use SummaryCard, MaterialList, or DetailCard`,methods:[],displayName:`Card`,props:{title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "outlined" | "filled"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"outlined"`},{name:`literal`,value:`"filled"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),g,_,v,y,b,x,S,C;e((()=>{t(),h(),g=r(),_={title:`Sistema de Diseño/Card`,component:u,tags:[`autodocs`],argTypes:{visibility:{control:`select`,options:[`open`,`close`]},statusState:{control:`select`,options:[`completo`,`incompleto`,`pendiente`,`sin-stock`]}},args:{company:`NOVARUM`,code:`C.01`,orderNumber:`BS000095`,timestamp:`Ayer 10:25 am`,statusState:`completo`,visibility:`open`}},v={args:{visibility:`open`}},y={args:{visibility:`close`}},b={name:`Todos los estados`,render:()=>(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,padding:16,background:`var(--ds-color-surface)`},children:[(0,g.jsx)(u,{visibility:`open`,statusState:`completo`}),(0,g.jsx)(u,{visibility:`close`,statusState:`incompleto`}),(0,g.jsx)(u,{visibility:`open`,statusState:`pendiente`}),(0,g.jsx)(u,{visibility:`close`,statusState:`sin-stock`})]})},x={name:`MaterialList`,render:()=>(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16,background:`var(--ds-color-surface)`},children:[(0,g.jsx)(d,{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`completo`,qty:5}),(0,g.jsx)(d,{description:`CABLE THHN #12 ROJO 100M`,qtyState:`pendiente`,qty:2}),(0,g.jsx)(d,{description:`TUBO PVC 1/2 PULGADA`,qtyState:`incompleto`,qty:1}),(0,g.jsx)(d,{description:`BREAKER 20A SCHNEIDER`,qtyState:`sin-stock`,qty:0})]})},S={name:`DetailCard`,render:()=>(0,g.jsx)(`div`,{style:{padding:16,background:`var(--ds-color-surface)`},children:(0,g.jsx)(f,{company:`NOVARUM`,code:`C.01`,orderNumber:`BS000095`,timestamp:`Ayer 10:25 am`,statusState:`completo`,materials:[{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`completo`,qty:4},{description:`CABLE THHN #12 ROJO 100M`,qtyState:`pendiente`,qty:2},{description:`TUBO PVC 1/2 PULGADA`,qtyState:`incompleto`,qty:1}]})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    visibility: "open"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    visibility: "close"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Todos los estados",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: 16,
    background: "var(--ds-color-surface)"
  }}>
      <SummaryCard visibility="open" statusState="completo" />
      <SummaryCard visibility="close" statusState="incompleto" />
      <SummaryCard visibility="open" statusState="pendiente" />
      <SummaryCard visibility="close" statusState="sin-stock" />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "MaterialList",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 16,
    background: "var(--ds-color-surface)"
  }}>
      <MaterialList description="CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V" qtyState="completo" qty={5} />
      <MaterialList description="CABLE THHN #12 ROJO 100M" qtyState="pendiente" qty={2} />
      <MaterialList description="TUBO PVC 1/2 PULGADA" qtyState="incompleto" qty={1} />
      <MaterialList description="BREAKER 20A SCHNEIDER" qtyState="sin-stock" qty={0} />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "DetailCard",
  render: () => <div style={{
    padding: 16,
    background: "var(--ds-color-surface)"
  }}>
      <DetailCard company="NOVARUM" code="C.01" orderNumber="BS000095" timestamp="Ayer 10:25 am" statusState="completo" materials={[{
      description: "CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V",
      qtyState: "completo",
      qty: 4
    }, {
      description: "CABLE THHN #12 ROJO 100M",
      qtyState: "pendiente",
      qty: 2
    }, {
      description: "TUBO PVC 1/2 PULGADA",
      qtyState: "incompleto",
      qty: 1
    }]} />
    </div>
}`,...S.parameters?.docs?.source}}},C=[`Open`,`Close`,`AllStates`,`MaterialListExample`,`DetailCardExample`]}))();export{b as AllStates,y as Close,S as DetailCardExample,x as MaterialListExample,v as Open,C as __namedExportsOrder,_ as default};