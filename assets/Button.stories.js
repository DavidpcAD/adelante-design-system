import{n as e,o as t}from"./chunk.js";import{N as n}from"./iframe.js";import{t as r}from"./jsx-runtime.js";import{n as i,t as a}from"./Button.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{o=t(n()),i(),s=r(),c={title:`Button/Button`,component:a,tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`green`,`red`,`white`,`black`,`gray`]},layout:{control:`select`,options:[`label`,`icon-left`,`icon-right`,`icon`]},state:{control:`select`,options:[`standard`,`pressed`,`disabled`]},icon:{control:`select`,options:[`home`,`check`,`plus`,`back`,`forward`,`search`,`filter`]}},args:{label:`Confirmar`,color:`green`,layout:`label`,state:`standard`}},l={args:{color:`green`,label:`Confirmar`}},u={args:{color:`red`,label:`Cancelar`}},d={args:{color:`white`,label:`Volver`}},f={args:{color:`black`,label:`Continuar`}},p={args:{color:`gray`,label:`No disponible`}},m={args:{color:`green`,state:`pressed`,label:`Pressed`}},h={args:{state:`disabled`,label:`Disabled`}},g={args:{layout:`icon-left`,icon:`back`,label:`Volver`}},_={args:{layout:`icon-right`,icon:`arrow-right`,label:`Siguiente`}},v={args:{layout:`icon`,icon:`plus`}},y={render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, max-content)`,gap:16,padding:16},children:[`green`,`red`,`white`,`black`,`gray`].map(e=>(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(a,{color:e,label:`${e} standard`,state:`standard`}),(0,s.jsx)(a,{color:e,label:`${e} pressed`,state:`pressed`})]},e))})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: "green",
    label: "Confirmar"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    color: "red",
    label: "Cancelar"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: "white",
    label: "Volver"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    color: "black",
    label: "Continuar"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: "gray",
    label: "No disponible"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: "green",
    state: "pressed",
    label: "Pressed"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    label: "Disabled"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "icon-left",
    icon: "back",
    label: "Volver"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "icon-right",
    icon: "arrow-right",
    label: "Siguiente"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "icon",
    icon: "plus"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, max-content)",
    gap: 16,
    padding: 16
  }}>
      {(["green", "red", "white", "black", "gray"] as const).map(c => <React.Fragment key={c}>
          <Button color={c} label={\`\${c} standard\`} state="standard" />
          <Button color={c} label={\`\${c} pressed\`} state="pressed" />
        </React.Fragment>)}
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Green`,`Red`,`White`,`Black`,`Gray`,`Pressed`,`Disabled`,`IconLeft`,`IconRight`,`IconOnly`,`AllVariants`]}))();export{y as AllVariants,f as Black,h as Disabled,p as Gray,l as Green,g as IconLeft,v as IconOnly,_ as IconRight,m as Pressed,u as Red,d as White,b as __namedExportsOrder,c as default};