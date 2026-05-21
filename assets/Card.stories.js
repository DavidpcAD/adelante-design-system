import{n as e}from"./chunk.js";import{F as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{i as r,n as i,r as a,t as o}from"./Card.js";var s,c,l,u,d,f,p;e((()=>{t(),r(),s=n(),c={title:`Cards/Card`,component:a,tags:[`autodocs`],argTypes:{visibility:{control:`select`,options:[`open`,`close`]}},args:{company:`NOVARUM`,code:`C.01`,orderNumber:`BS000095`,timestamp:`Ayer 10:25 am`,statusState:`completo`,visibility:`open`}},l={args:{visibility:`open`}},u={args:{visibility:`close`}},d={name:`MaterialList`,render:()=>(0,s.jsx)(`div`,{style:{padding:16,background:`var(--ds-color-surface)`},children:(0,s.jsx)(i,{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3})})},f={name:`DetailCard`,render:()=>(0,s.jsx)(`div`,{style:{padding:16,background:`var(--ds-color-surface)`},children:(0,s.jsx)(o,{company:`NOVARUM`,code:`C.01`,orderNumber:`BS000095`,timestamp:`Ayer 10:25 am`,statusState:`completo`,materials:[{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3},{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3},{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3}]})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    visibility: "open"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    visibility: "close"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "MaterialList",
  render: () => <div style={{
    padding: 16,
    background: "var(--ds-color-surface)"
  }}>
      <MaterialList description="CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V" qtyState="incompleto" qty={3} />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Open`,`Close`,`MaterialListExample`,`DetailCardExample`]}))();export{u as Close,f as DetailCardExample,d as MaterialListExample,l as Open,p as __namedExportsOrder,c as default};