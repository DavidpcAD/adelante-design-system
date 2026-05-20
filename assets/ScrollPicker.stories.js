import{n as e,o as t}from"./chunk.js";import{F as n}from"./iframe.js";import{t as r}from"./jsx-runtime.js";import{n as i,t as a}from"./ScrollPicker.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{o=t(n()),i(),s=r(),c={title:`Sistema de Diseño/ScrollPicker`,component:a,parameters:{layout:`fullscreen`}},l=e=>{let[t,n]=(0,o.useState)(e.open),[r,i]=(0,o.useState)(e.initialValue);return(0,s.jsxs)(`div`,{style:{height:600,padding:24,background:`#f3f3f3`},children:[(0,s.jsxs)(`button`,{onClick:()=>n(!0),style:{padding:12},children:[`Abrir picker (valor actual: `,r,`)`]}),(0,s.jsx)(a,{...e,open:t,initialValue:r,onClose:()=>n(!1),onConfirm:e=>{i(e),n(!1)}})]})},u={name:`Default (incompleto)`,args:{open:!1,initialValue:3,contextLabel:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V`,variant:`default`},render:e=>(0,s.jsx)(l,{...e})},d={args:{open:!1,initialValue:0,contextLabel:`TUBO PVC 4 PULGADAS`,variant:`pendiente`},render:e=>(0,s.jsx)(l,{...e})},f={name:`Completo (ok)`,args:{open:!1,initialValue:10,contextLabel:`CEMENTO PORTLAND 50KG`,variant:`ok`},render:e=>(0,s.jsx)(l,{...e})},p={name:`Sin stock (alert)`,args:{open:!1,initialValue:25,contextLabel:`VARILLA DE HIERRO 12MM`,variant:`alert`},render:e=>(0,s.jsx)(l,{...e})},m={name:`Value: 0 (mínimo)`,args:{open:!1,initialValue:0,contextLabel:`ARENA LAVADA M3`,variant:`pendiente`,min:0,max:50},render:e=>(0,s.jsx)(l,{...e})},h={name:`Value: 999 (máximo)`,args:{open:!1,initialValue:999,contextLabel:`CLAVOS 2 PULGADAS`,variant:`sin-stock`,min:0,max:999},render:e=>(0,s.jsx)(l,{...e})},g={name:`Abierto por defecto`,args:{open:!0,initialValue:5,contextLabel:`BLOCK 15CM x 20CM x 40CM`,variant:`completo`},render:e=>{let[t,n]=(0,o.useState)(!0),[r,i]=(0,o.useState)(e.initialValue);return(0,s.jsxs)(`div`,{style:{height:600,padding:24,background:`#f3f3f3`},children:[(0,s.jsxs)(`button`,{onClick:()=>n(!0),style:{padding:12},children:[`Abrir picker (valor actual: `,r,`)`]}),(0,s.jsx)(a,{...e,open:t,initialValue:r,onClose:()=>n(!1),onConfirm:e=>{i(e),n(!1)}})]})}},_={name:`Rango personalizado (1-20)`,args:{open:!1,initialValue:10,contextLabel:`LÁMINA ZINC 12 PIES`,variant:`incompleto`,min:1,max:20},render:e=>(0,s.jsx)(l,{...e})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Default (incompleto)",
  args: {
    open: false,
    initialValue: 3,
    contextLabel: "CONECTOR ADAPTADOR HEMBRA EAGLE 110V",
    variant: "default"
  },
  render: args => <Demo {...args} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    initialValue: 0,
    contextLabel: "TUBO PVC 4 PULGADAS",
    variant: "pendiente"
  },
  render: args => <Demo {...args} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Completo (ok)",
  args: {
    open: false,
    initialValue: 10,
    contextLabel: "CEMENTO PORTLAND 50KG",
    variant: "ok"
  },
  render: args => <Demo {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Sin stock (alert)",
  args: {
    open: false,
    initialValue: 25,
    contextLabel: "VARILLA DE HIERRO 12MM",
    variant: "alert"
  },
  render: args => <Demo {...args} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Value: 0 (mínimo)",
  args: {
    open: false,
    initialValue: 0,
    contextLabel: "ARENA LAVADA M3",
    variant: "pendiente",
    min: 0,
    max: 50
  },
  render: args => <Demo {...args} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Value: 999 (máximo)",
  args: {
    open: false,
    initialValue: 999,
    contextLabel: "CLAVOS 2 PULGADAS",
    variant: "sin-stock",
    min: 0,
    max: 999
  },
  render: args => <Demo {...args} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Abierto por defecto",
  args: {
    open: true,
    initialValue: 5,
    contextLabel: "BLOCK 15CM x 20CM x 40CM",
    variant: "completo"
  },
  render: args => {
    const [open, setOpen] = useState(true);
    const [value, setValue] = useState(args.initialValue);
    return <div style={{
      height: 600,
      padding: 24,
      background: "#f3f3f3"
    }}>
        <button onClick={() => setOpen(true)} style={{
        padding: 12
      }}>
          Abrir picker (valor actual: {value})
        </button>
        <ScrollPicker {...args} open={open} initialValue={value} onClose={() => setOpen(false)} onConfirm={v => {
        setValue(v);
        setOpen(false);
      }} />
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Rango personalizado (1-20)",
  args: {
    open: false,
    initialValue: 10,
    contextLabel: "LÁMINA ZINC 12 PIES",
    variant: "incompleto",
    min: 1,
    max: 20
  },
  render: args => <Demo {...args} />
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Pendiente`,`Ok`,`Alert`,`ValueMinimum`,`ValueMaximum`,`OpenByDefault`,`CustomRange`]}))();export{p as Alert,_ as CustomRange,u as Default,f as Ok,g as OpenByDefault,d as Pendiente,h as ValueMaximum,m as ValueMinimum,v as __namedExportsOrder,c as default};