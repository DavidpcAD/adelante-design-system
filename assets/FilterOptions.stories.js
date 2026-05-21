import{n as e}from"./chunk.js";import{F as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{i as r,t as i}from"./Nav.js";var a,o,s,c,l,u,d;e((()=>{t(),r(),a=n(),o={title:`Nav/FilterOptions`,component:i,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`pressed`]},mode:{control:`select`,options:[`normal`,`close`]}},args:{state:`standard`,mode:`normal`}},s={args:{mode:`normal`,state:`standard`}},c={args:{mode:`normal`,state:`pressed`}},l={args:{mode:`close`,state:`standard`}},u={name:`All states`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,a.jsx)(i,{mode:`normal`,state:`standard`}),(0,a.jsx)(i,{mode:`normal`,state:`pressed`}),(0,a.jsx)(i,{mode:`close`,state:`standard`})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "normal",
    state: "standard"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "normal",
    state: "pressed"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "close",
    state: "standard"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <FilterOptions mode="normal" state="standard" />
      <FilterOptions mode="normal" state="pressed" />
      <FilterOptions mode="close" state="standard" />
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Normal`,`NormalPressed`,`Close`,`AllStates`]}))();export{u as AllStates,l as Close,s as Normal,c as NormalPressed,d as __namedExportsOrder,o as default};