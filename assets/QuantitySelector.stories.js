import{n as e,o as t}from"./chunk.js";import{F as n}from"./iframe.js";import{t as r}from"./jsx-runtime.js";import{n as i,t as a}from"./QuantitySelector.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{o=t(n()),i(),s=r(),c={title:`Sistema de Diseño/QuantitySelector`,component:a,parameters:{layout:`centered`},argTypes:{state:{control:{type:`inline-radio`},options:[`pendiente`,`incompleto`,`completo`,`sin-stock`]},mode:{control:{type:`inline-radio`},options:[`standard`,`pressed`]},size:{control:{type:`inline-radio`},options:[`sm`,`md`,`lg`]},value:{control:{type:`number`,min:0,max:999}}}},l={args:{value:3,state:`pendiente`,size:`sm`}},u={args:{value:3,state:`incompleto`,size:`sm`}},d={args:{value:3,state:`completo`,size:`sm`}},f={args:{value:3,state:`sin-stock`,size:`sm`}},p={args:{value:3,state:`pendiente`,mode:`pressed`,size:`sm`}},m={args:{value:3,state:`incompleto`,mode:`pressed`,size:`sm`}},h={args:{value:3,state:`completo`,mode:`pressed`,size:`sm`}},g={args:{value:3,state:`sin-stock`,mode:`pressed`,size:`sm`}},_={name:`Interactive / Tap to increment`,render:()=>{let[e,t]=(0,o.useState)(0);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:16},children:[(0,s.jsx)(a,{value:e,state:(e=>e===0?`pendiente`:e<3?`incompleto`:e>=5?`sin-stock`:`completo`)(e),onTap:()=>t(e=>e>=6?0:e+1)}),(0,s.jsx)(`p`,{style:{margin:0,fontSize:12,color:`#5d636c`},children:`Tap para incrementar (reset a 0 en 7)`})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "pendiente",
    size: "sm"
  }
}`,...l.parameters?.docs?.source},description:{story:`Pendiente — gris, sin anillo. No se ha registrado.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "incompleto",
    size: "sm"
  }
}`,...u.parameters?.docs?.source},description:{story:`Incompleto — anillo amarillo a la mitad derecha. Faltan materiales.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "completo",
    size: "sm"
  }
}`,...d.parameters?.docs?.source},description:{story:`Completo — anillo verde completo. Están todos.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "sin-stock",
    size: "sm"
  }
}`,...f.parameters?.docs?.source},description:{story:`Sin stock — anillo rojo completo. No hay disponible.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "pendiente",
    mode: "pressed",
    size: "sm"
  }
}`,...p.parameters?.docs?.source},description:{story:`Pressed (estado fijo) — halo shadow alrededor. También se aplica auto al :active de un Tappable.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "incompleto",
    mode: "pressed",
    size: "sm"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "completo",
    mode: "pressed",
    size: "sm"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "sin-stock",
    mode: "pressed",
    size: "sm"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Interactive / Tap to increment",
  render: () => {
    const [val, setVal] = useState(0);
    const getState = (v: number) => {
      if (v === 0) return "pendiente" as const;
      if (v < 3) return "incompleto" as const;
      if (v >= 5) return "sin-stock" as const;
      return "completo" as const;
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16
    }}>
        <QuantitySelector value={val} state={getState(val)} onTap={() => setVal(v => v >= 6 ? 0 : v + 1)} />
        <p style={{
        margin: 0,
        fontSize: 12,
        color: "#5d636c"
      }}>
          Tap para incrementar (reset a 0 en 7)
        </p>
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:`Interactive — tap para incrementar cantidad con animación.`,..._.parameters?.docs?.description}}},v=[`Pendiente`,`Incompleto`,`Completo`,`SinStock`,`PendientePressed`,`IncompletoPressed`,`CompletoPressed`,`SinStockPressed`,`Interactive`]}))();export{d as Completo,h as CompletoPressed,u as Incompleto,m as IncompletoPressed,_ as Interactive,l as Pendiente,p as PendientePressed,f as SinStock,g as SinStockPressed,v as __namedExportsOrder,c as default};