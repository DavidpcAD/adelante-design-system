import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{N as n}from"./iframe-BHOH12iU.js";import{t as r}from"./jsx-runtime-DaLCRA3n.js";import{n as i,t as a}from"./QuantityStepper-ZCddLlXO.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{o=t(n()),i(),s=r(),c={title:`Core/Button/QuantityStepper`,component:a,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`incompleto`,`pendiente`,`completo`,`sin-stock`]},mode:{control:`select`,options:[`standard`,`pressed`]}},args:{state:`pendiente`,qty:1}},l={args:{state:`incompleto`,qty:2}},u={args:{state:`pendiente`,qty:0}},d={args:{state:`completo`,qty:5}},f={args:{state:`sin-stock`,qty:0}},p={render:()=>{let[e,t]=(0,o.useState)(2);return(0,s.jsx)(a,{qty:e,onQtyChange:t,state:e===0?`sin-stock`:e<3?`incompleto`:e<5?`pendiente`:`completo`})}},m={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:16,padding:16},children:[(0,s.jsx)(a,{state:`incompleto`,qty:2}),(0,s.jsx)(a,{state:`pendiente`,qty:0}),(0,s.jsx)(a,{state:`completo`,qty:5}),(0,s.jsx)(a,{state:`sin-stock`,qty:0})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: "incompleto",
    qty: 2
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pendiente",
    qty: 0
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: "completo",
    qty: 5
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    state: "sin-stock",
    qty: 0
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [qty, setQty] = useState(2);
    const state = qty === 0 ? "sin-stock" : qty < 3 ? "incompleto" : qty < 5 ? "pendiente" : "completo";
    return <QuantityStepper qty={qty} onQtyChange={setQty} state={state} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Incompleto`,`Pendiente`,`Completo`,`SinStock`,`Interactive`,`AllStates`]}))();export{m as AllStates,d as Completo,l as Incompleto,p as Interactive,u as Pendiente,f as SinStock,h as __namedExportsOrder,c as default};