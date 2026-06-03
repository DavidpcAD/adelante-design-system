import{n as e}from"./chunk.js";import{N as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{i as r,r as i}from"./Nav.js";var a,o,s,c,l,u,d,f;e((()=>{t(),r(),a=n(),o={title:`Nav/ToggleMenu`,component:i,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`pressed`]},mode:{control:`select`,options:[`open`,`close`]}},args:{state:`standard`,mode:`open`}},s={args:{mode:`open`,state:`standard`}},c={args:{mode:`open`,state:`pressed`}},l={args:{mode:`close`,state:`standard`}},u={args:{mode:`close`,state:`pressed`}},d={name:`All states`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,a.jsx)(i,{mode:`open`,state:`standard`}),(0,a.jsx)(i,{mode:`open`,state:`pressed`}),(0,a.jsx)(i,{mode:`close`,state:`standard`}),(0,a.jsx)(i,{mode:`close`,state:`pressed`})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "open",
    state: "standard"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "open",
    state: "pressed"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "close",
    state: "standard"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "close",
    state: "pressed"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "All states",
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
}`,...d.parameters?.docs?.source}}},f=[`Open`,`OpenPressed`,`Close`,`ClosePressed`,`AllStates`]}))();export{d as AllStates,l as Close,u as ClosePressed,s as Open,c as OpenPressed,f as __namedExportsOrder,o as default};