import{n as e}from"./chunk-jRWAZmH_.js";import{N as t}from"./iframe-B6xUrxNR.js";import{t as n}from"./jsx-runtime-DaLCRA3n.js";import{n as r,t as i}from"./Icon-DpiA1r-J.js";import{n as a,t as o}from"./QuantityStepper-CeQ1ZhAI.js";function s({title:e=`Solicitud #001`,subtitle:t=`Bodega A`,status:n=`Pendiente`,visibility:r=`open`,onClick:a,children:o}){return(0,d.jsxs)(`div`,{className:`ds-summary-card ds-summary-card--${r}`,onClick:a,role:a?`button`:void 0,tabIndex:a?0:void 0,children:[(0,d.jsxs)(`div`,{className:`ds-summary-card__header`,children:[(0,d.jsxs)(`div`,{className:`ds-summary-card__info`,children:[(0,d.jsx)(`span`,{className:`ds-summary-card__title`,children:e}),(0,d.jsx)(`span`,{className:`ds-summary-card__subtitle`,children:t})]}),(0,d.jsxs)(`div`,{className:`ds-summary-card__right`,children:[(0,d.jsx)(`span`,{className:`ds-summary-card__status`,children:n}),(0,d.jsx)(i,{name:r===`open`?`chevron-up`:`chevron-down`,size:`md`})]})]}),r===`open`&&o&&(0,d.jsx)(`div`,{className:`ds-summary-card__body`,children:o})]})}function c({description:e=`CONECTOR ADAPTADOR HEMBRA EAGLE 110V`,qtyState:t=`pendiente`,qty:n=1,onQtyChange:r}){return(0,d.jsxs)(`div`,{className:`ds-material-list`,children:[(0,d.jsx)(`p`,{className:`ds-material-list__desc`,children:e}),(0,d.jsx)(o,{state:t,qty:n,onQtyChange:r})]})}function l({title:e=`Solicitud #001`,subtitle:t=`Bodega A`,status:n=`Pendiente`,materials:r=[]}){return(0,d.jsxs)(`div`,{className:`ds-detail-card`,children:[(0,d.jsx)(s,{title:e,subtitle:t,status:n,visibility:`open`}),(0,d.jsx)(`div`,{className:`ds-detail-card__materials`,children:r.map((e,t)=>(0,d.jsx)(c,{...e},t))})]})}function u({title:e,description:t,variant:n=`default`,children:r}){return(0,d.jsxs)(`div`,{className:`ds-card ds-card--${n}`,children:[(0,d.jsxs)(`div`,{className:`ds-card__header`,children:[(0,d.jsx)(`h3`,{className:`ds-card__title`,children:e}),t&&(0,d.jsx)(`p`,{className:`ds-card__description`,children:t})]}),r&&(0,d.jsx)(`div`,{className:`ds-card__body`,children:r})]})}var d,f=e((()=>{t(),r(),a(),d=n(),s.__docgenInfo={description:``,methods:[],displayName:`SummaryCard`,props:{title:{required:!1,tsType:{name:`string`},description:`Card title / solicitud number`,defaultValue:{value:`"Solicitud #001"`,computed:!1}},subtitle:{required:!1,tsType:{name:`string`},description:`Subtitle / location`,defaultValue:{value:`"Bodega A"`,computed:!1}},status:{required:!1,tsType:{name:`string`},description:`Status label`,defaultValue:{value:`"Pendiente"`,computed:!1}},visibility:{required:!1,tsType:{name:`union`,raw:`"open" | "close"`,elements:[{name:`literal`,value:`"open"`},{name:`literal`,value:`"close"`}]},description:`open = expanded (shows chevron up), close = collapsed (shows chevron down)`,defaultValue:{value:`"open"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}},c.__docgenInfo={description:``,methods:[],displayName:`MaterialList`,props:{description:{required:!1,tsType:{name:`string`},description:`Material description`,defaultValue:{value:`"CONECTOR ADAPTADOR HEMBRA EAGLE 110V"`,computed:!1}},qtyState:{required:!1,tsType:{name:`union`,raw:`| "incompleto"
| "pendiente"
| "completo"
| "sin-stock"`,elements:[{name:`literal`,value:`"incompleto"`},{name:`literal`,value:`"pendiente"`},{name:`literal`,value:`"completo"`},{name:`literal`,value:`"sin-stock"`}]},description:`Quantity selector state`,defaultValue:{value:`"pendiente"`,computed:!1}},qty:{required:!1,tsType:{name:`number`},description:`Quantity value`,defaultValue:{value:`1`,computed:!1}},onQtyChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(qty: number) => void`,signature:{arguments:[{type:{name:`number`},name:`qty`}],return:{name:`void`}}},description:``}}},l.__docgenInfo={description:``,methods:[],displayName:`DetailCard`,props:{title:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Solicitud #001"`,computed:!1}},subtitle:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Bodega A"`,computed:!1}},status:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Pendiente"`,computed:!1}},materials:{required:!1,tsType:{name:`Array`,elements:[{name:`MaterialListProps`}],raw:`MaterialListProps[]`},description:``,defaultValue:{value:`[]`,computed:!1}}}},u.__docgenInfo={description:`@deprecated Use SummaryCard, MaterialList, or DetailCard`,methods:[],displayName:`Card`,props:{title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "outlined" | "filled"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"outlined"`},{name:`literal`,value:`"filled"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),p,m,h,g,_,v,y,b;e((()=>{t(),f(),p=n(),m={title:`Core/Card/SummaryCard`,component:s,tags:[`autodocs`],argTypes:{visibility:{control:`select`,options:[`open`,`close`]}},args:{title:`Solicitud #001`,subtitle:`Bodega A`,status:`Pendiente`,visibility:`open`}},h={args:{visibility:`open`}},g={args:{visibility:`close`}},_={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,padding:16},children:[(0,p.jsx)(s,{visibility:`open`,title:`Solicitud #001`,subtitle:`Bodega A`,status:`Pendiente`}),(0,p.jsx)(s,{visibility:`close`,title:`Solicitud #002`,subtitle:`Bodega B`,status:`Completo`})]})},v={name:`MaterialList`,render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,p.jsx)(c,{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V`,qtyState:`completo`,qty:5}),(0,p.jsx)(c,{description:`CABLE THHN #12 ROJO 100M`,qtyState:`pendiente`,qty:2}),(0,p.jsx)(c,{description:`TUBO PVC 1/2 PULGADA`,qtyState:`incompleto`,qty:1}),(0,p.jsx)(c,{description:`BREAKER 20A SCHNEIDER`,qtyState:`sin-stock`,qty:0})]})},y={name:`DetailCard`,render:()=>(0,p.jsx)(l,{title:`Solicitud #042`,subtitle:`Proyecto Losa Flotante`,status:`En curso`,materials:[{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V`,qtyState:`completo`,qty:4},{description:`CABLE THHN #12 ROJO 100M`,qtyState:`pendiente`,qty:2},{description:`TUBO PVC 1/2 PULGADA`,qtyState:`incompleto`,qty:1}]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    visibility: "open"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    visibility: "close"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: 16
  }}>
      <SummaryCard visibility="open" title="Solicitud #001" subtitle="Bodega A" status="Pendiente" />
      <SummaryCard visibility="close" title="Solicitud #002" subtitle="Bodega B" status="Completo" />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "MaterialList",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 16
  }}>
      <MaterialList description="CONECTOR ADAPTADOR HEMBRA EAGLE 110V" qtyState="completo" qty={5} />
      <MaterialList description="CABLE THHN #12 ROJO 100M" qtyState="pendiente" qty={2} />
      <MaterialList description="TUBO PVC 1/2 PULGADA" qtyState="incompleto" qty={1} />
      <MaterialList description="BREAKER 20A SCHNEIDER" qtyState="sin-stock" qty={0} />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "DetailCard",
  render: () => <DetailCard title="Solicitud #042" subtitle="Proyecto Losa Flotante" status="En curso" materials={[{
    description: "CONECTOR ADAPTADOR HEMBRA EAGLE 110V",
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
}`,...y.parameters?.docs?.source}}},b=[`Open`,`Close`,`BothStates`,`MaterialListExample`,`DetailCardExample`]}))();export{_ as BothStates,g as Close,y as DetailCardExample,v as MaterialListExample,h as Open,b as __namedExportsOrder,m as default};