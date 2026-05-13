import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{P as n}from"./iframe-BNgIaAyT.js";import{t as r}from"./jsx-runtime-DaLCRA3n.js";function i({state:e=`pendiente`,mode:t=`standard`,qty:n=0,onQtyChange:r,readOnly:i=!1}){let s=o[e];return(0,a.jsxs)(`div`,{className:`ds-qty ds-qty--${e} ds-qty--${t}`,style:{"--qty-bg":s},children:[!i&&(0,a.jsx)(`button`,{className:`ds-qty__btn`,onClick:()=>r&&r(Math.max(0,n-1)),"aria-label":`Decrease`,children:(0,a.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:(0,a.jsx)(`path`,{d:`M5 12h14`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`})})}),(0,a.jsx)(`span`,{className:`ds-qty__value`,children:n}),!i&&(0,a.jsx)(`button`,{className:`ds-qty__btn`,onClick:()=>r&&r(n+1),"aria-label":`Increase`,children:(0,a.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:(0,a.jsx)(`path`,{d:`M12 5v14M5 12h14`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`})})})]})}var a,o,s=e((()=>{n(),a=r(),o={incompleto:`var(--ds-color-yellow)`,pendiente:`var(--ds-color-gray-200)`,completo:`var(--ds-color-green-100)`,"sin-stock":`var(--ds-color-red-100)`},i.__docgenInfo={description:``,methods:[],displayName:`QuantityStepper`,props:{state:{required:!1,tsType:{name:`union`,raw:`| "incompleto"
| "pendiente"
| "completo"
| "sin-stock"`,elements:[{name:`literal`,value:`"incompleto"`},{name:`literal`,value:`"pendiente"`},{name:`literal`,value:`"completo"`},{name:`literal`,value:`"sin-stock"`}]},description:`Stock / completion state — controls background color`,defaultValue:{value:`"pendiente"`,computed:!1}},mode:{required:!1,tsType:{name:`union`,raw:`"standard" | "pressed"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"pressed"`}]},description:`Interaction mode`,defaultValue:{value:`"standard"`,computed:!1}},qty:{required:!1,tsType:{name:`number`},description:`Current quantity`,defaultValue:{value:`0`,computed:!1}},onQtyChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(qty: number) => void`,signature:{arguments:[{type:{name:`number`},name:`qty`}],return:{name:`void`}}},description:``},readOnly:{required:!1,tsType:{name:`boolean`},description:`Read-only: just show the number, no +/- buttons`,defaultValue:{value:`false`,computed:!1}}}}})),c,l,u,d,f,p,m,h,g,_;e((()=>{c=t(n()),s(),l=r(),u={title:`Sistema de Diseño/Button/QuantityStepper`,component:i,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`incompleto`,`pendiente`,`completo`,`sin-stock`]},mode:{control:`select`,options:[`standard`,`pressed`]}},args:{state:`pendiente`,qty:1}},d={args:{state:`incompleto`,qty:2}},f={args:{state:`pendiente`,qty:0}},p={args:{state:`completo`,qty:5}},m={args:{state:`sin-stock`,qty:0}},h={render:()=>{let[e,t]=(0,c.useState)(2);return(0,l.jsx)(i,{qty:e,onQtyChange:t,state:e===0?`sin-stock`:e<3?`incompleto`:e<5?`pendiente`:`completo`})}},g={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:16,padding:16},children:[(0,l.jsx)(i,{state:`incompleto`,qty:2}),(0,l.jsx)(i,{state:`pendiente`,qty:0}),(0,l.jsx)(i,{state:`completo`,qty:5}),(0,l.jsx)(i,{state:`sin-stock`,qty:0})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: "incompleto",
    qty: 2
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pendiente",
    qty: 0
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    state: "completo",
    qty: 5
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: "sin-stock",
    qty: 0
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [qty, setQty] = useState(2);
    const state = qty === 0 ? "sin-stock" : qty < 3 ? "incompleto" : qty < 5 ? "pendiente" : "completo";
    return <QuantityStepper qty={qty} onQtyChange={setQty} state={state} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    padding: 16
  }}>
      <QuantityStepper state="incompleto" qty={2} />
      <QuantityStepper state="pendiente" qty={0} />
      <QuantityStepper state="completo" qty={5} />
      <QuantityStepper state="sin-stock" qty={0} />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Incompleto`,`Pendiente`,`Completo`,`SinStock`,`Interactive`,`AllStates`]}))();export{g as AllStates,p as Completo,d as Incompleto,h as Interactive,f as Pendiente,m as SinStock,_ as __namedExportsOrder,u as default};