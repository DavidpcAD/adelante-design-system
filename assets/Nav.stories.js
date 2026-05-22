import{n as e}from"./chunk.js";import{M as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{i as r,n as i}from"./Nav.js";var a,o,s,c,l,u,d;e((()=>{t(),r(),a=n(),o={title:`Nav/NavigationControls`,component:i,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`pressed`]},navigation:{control:`select`,options:[`back`,`go`]}},args:{state:`standard`,navigation:`back`}},s={args:{navigation:`back`}},c={args:{navigation:`go`}},l={args:{navigation:`back`,state:`pressed`}},u={name:`All states`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,a.jsx)(i,{navigation:`back`,state:`standard`}),(0,a.jsx)(i,{navigation:`back`,state:`pressed`}),(0,a.jsx)(i,{navigation:`go`,state:`standard`}),(0,a.jsx)(i,{navigation:`go`,state:`pressed`})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: "back"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: "go"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: "back",
    state: "pressed"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "All states",
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
}`,...u.parameters?.docs?.source}}},d=[`Back`,`Go`,`Pressed`,`AllStates`]}))();export{u as AllStates,s as Back,c as Go,l as Pressed,d as __namedExportsOrder,o as default};