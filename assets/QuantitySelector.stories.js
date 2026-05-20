import{n as e,o as t}from"./chunk.js";import{F as n}from"./iframe.js";import{t as r}from"./jsx-runtime.js";import{n as i,t as a}from"./QuantitySelector.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{o=t(n()),i(),s=r(),c={title:`Sistema de Diseño/QuantitySelector`,component:a,parameters:{layout:`centered`},argTypes:{state:{control:{type:`inline-radio`},options:[`pendiente`,`incompleto`,`completo`,`sin-stock`]},mode:{control:{type:`inline-radio`},options:[`standard`,`pressed`]},size:{control:{type:`inline-radio`},options:[`sm`,`md`,`lg`]},value:{control:{type:`number`,min:0,max:999}}}},l={args:{value:3,state:`pendiente`,size:`sm`}},u={args:{value:3,state:`incompleto`,size:`sm`}},d={args:{value:3,state:`completo`,size:`sm`}},f={args:{value:3,state:`sin-stock`,size:`sm`}},p={args:{value:3,state:`pendiente`,mode:`pressed`,size:`sm`}},m={args:{value:3,state:`incompleto`,mode:`pressed`,size:`sm`}},h={args:{value:3,state:`completo`,mode:`pressed`,size:`sm`}},g={args:{value:3,state:`sin-stock`,mode:`pressed`,size:`sm`}},_={name:`Size: sm (49px)`,args:{value:5,state:`completo`,size:`sm`}},v={name:`Size: md (64px)`,args:{value:5,state:`completo`,size:`md`}},y={name:`Size: lg (96px)`,args:{value:5,state:`completo`,size:`lg`}},b={name:`Value: 0 (mínimo)`,args:{value:0,state:`pendiente`,size:`sm`}},x={name:`Value: 999 (máximo)`,args:{value:999,state:`sin-stock`,size:`sm`}},S={name:`Grid: todos los estados`,render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, auto)`,gap:24,alignItems:`center`},children:[[`pendiente`,`incompleto`,`completo`,`sin-stock`].map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,s.jsx)(a,{value:3,state:e,size:`sm`}),(0,s.jsx)(`span`,{style:{fontSize:11,color:`#5d636c`},children:e})]},e)),[`pendiente`,`incompleto`,`completo`,`sin-stock`].map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,s.jsx)(a,{value:3,state:e,mode:`pressed`,size:`sm`}),(0,s.jsxs)(`span`,{style:{fontSize:11,color:`#5d636c`},children:[e,` pressed`]})]},`${e}-p`))]})},C={name:`Grid: todos los tamaños`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,gap:32,alignItems:`center`},children:[`sm`,`md`,`lg`].map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,s.jsx)(a,{value:7,state:`completo`,size:e}),(0,s.jsx)(`span`,{style:{fontSize:11,color:`#5d636c`},children:e})]},e))})},w={name:`Interactive / Tap to increment`,render:()=>{let[e,t]=(0,o.useState)(0);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:16},children:[(0,s.jsx)(a,{value:e,state:(e=>e===0?`pendiente`:e<3?`incompleto`:e>=5?`sin-stock`:`completo`)(e),onTap:()=>t(e=>e>=6?0:e+1)}),(0,s.jsx)(`p`,{style:{margin:0,fontSize:12,color:`#5d636c`},children:`Tap para incrementar (reset a 0 en 7)`})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "pendiente",
    size: "sm"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "incompleto",
    size: "sm"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "completo",
    size: "sm"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "sin-stock",
    size: "sm"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    state: "pendiente",
    mode: "pressed",
    size: "sm"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  name: "Size: sm (49px)",
  args: {
    value: 5,
    state: "completo",
    size: "sm"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Size: md (64px)",
  args: {
    value: 5,
    state: "completo",
    size: "md"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Size: lg (96px)",
  args: {
    value: 5,
    state: "completo",
    size: "lg"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Value: 0 (mínimo)",
  args: {
    value: 0,
    state: "pendiente",
    size: "sm"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Value: 999 (máximo)",
  args: {
    value: 999,
    state: "sin-stock",
    size: "sm"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Grid: todos los estados",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    gap: 24,
    alignItems: "center"
  }}>
      {(["pendiente", "incompleto", "completo", "sin-stock"] as const).map(s => <div key={s} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }}>
          <QuantitySelector value={3} state={s} size="sm" />
          <span style={{
        fontSize: 11,
        color: "#5d636c"
      }}>{s}</span>
        </div>)}
      {(["pendiente", "incompleto", "completo", "sin-stock"] as const).map(s => <div key={\`\${s}-p\`} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }}>
          <QuantitySelector value={3} state={s} mode="pressed" size="sm" />
          <span style={{
        fontSize: 11,
        color: "#5d636c"
      }}>{s} pressed</span>
        </div>)}
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Grid: todos los tamaños",
  render: () => <div style={{
    display: "flex",
    gap: 32,
    alignItems: "center"
  }}>
      {(["sm", "md", "lg"] as const).map(sz => <div key={sz} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }}>
          <QuantitySelector value={7} state="completo" size={sz} />
          <span style={{
        fontSize: 11,
        color: "#5d636c"
      }}>{sz}</span>
        </div>)}
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Pendiente`,`Incompleto`,`Completo`,`SinStock`,`PendientePressed`,`IncompletoPressed`,`CompletoPressed`,`SinStockPressed`,`SizeSmall`,`SizeMedium`,`SizeLarge`,`ValueZero`,`ValueMax`,`AllStates`,`AllSizes`,`Interactive`]}))();export{C as AllSizes,S as AllStates,d as Completo,h as CompletoPressed,u as Incompleto,m as IncompletoPressed,w as Interactive,l as Pendiente,p as PendientePressed,f as SinStock,g as SinStockPressed,y as SizeLarge,v as SizeMedium,_ as SizeSmall,x as ValueMax,b as ValueZero,T as __namedExportsOrder,c as default};