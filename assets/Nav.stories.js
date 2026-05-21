import{n as e}from"./chunk.js";import{F as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{i as r,n as i,r as a,t as o}from"./Nav.js";var s,c,l,u,d,f,p,m,h;e((()=>{t(),r(),s=n(),c={title:`Sistema de Diseño/Nav`,component:i,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`pressed`]},navigation:{control:`select`,options:[`back`,`go`]}},args:{state:`standard`,navigation:`back`}},l={args:{navigation:`back`}},u={args:{navigation:`go`}},d={args:{navigation:`back`,state:`pressed`}},f={name:`Navigation / All states`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,s.jsx)(i,{navigation:`back`,state:`standard`}),(0,s.jsx)(i,{navigation:`back`,state:`pressed`}),(0,s.jsx)(i,{navigation:`go`,state:`standard`}),(0,s.jsx)(i,{navigation:`go`,state:`pressed`})]})},p={name:`FilterOptions / All states`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,s.jsx)(o,{mode:`normal`,state:`standard`}),(0,s.jsx)(o,{mode:`normal`,state:`pressed`}),(0,s.jsx)(o,{mode:`close`,state:`standard`})]})},m={name:`ToggleMenu / All states`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,s.jsx)(a,{mode:`open`,state:`standard`}),(0,s.jsx)(a,{mode:`open`,state:`pressed`}),(0,s.jsx)(a,{mode:`close`,state:`standard`}),(0,s.jsx)(a,{mode:`close`,state:`pressed`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: "back"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: "go"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: "back",
    state: "pressed"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Navigation / All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <NavigationControls navigation="back" state="standard" />
      <NavigationControls navigation="back" state="pressed" />
      <NavigationControls navigation="go" state="standard" />
      <NavigationControls navigation="go" state="pressed" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "FilterOptions / All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <FilterOptions mode="normal" state="standard" />
      <FilterOptions mode="normal" state="pressed" />
      <FilterOptions mode="close" state="standard" />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "ToggleMenu / All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <ToggleMenu mode="open" state="standard" />
      <ToggleMenu mode="open" state="pressed" />
      <ToggleMenu mode="close" state="standard" />
      <ToggleMenu mode="close" state="pressed" />
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Back`,`Go`,`Pressed`,`NavigationAll`,`FilterOptionsAll`,`ToggleMenuAll`]}))();export{l as Back,p as FilterOptionsAll,u as Go,f as NavigationAll,d as Pressed,m as ToggleMenuAll,h as __namedExportsOrder,c as default};