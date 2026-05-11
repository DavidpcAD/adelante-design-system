import{n as e}from"./chunk-jRWAZmH_.js";import{O as t}from"./iframe-DYrDNQZ3.js";import{t as n}from"./jsx-runtime-DaLCRA3n.js";import{n as r,t as i}from"./ToggleCards-Ball4vW9.js";var a,o,s,c,l,u,d,f,p;e((()=>{t(),r(),a=n(),o={title:`Core/ToggleCards`,component:i,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`pressed`]},mode:{control:`select`,options:[`normal`,`disabled`]},visibility:{control:`select`,options:[`open`,`close`]},size:{control:`select`,options:[`big`,`small`]}},args:{state:`standard`,mode:`normal`,visibility:`open`,size:`small`}},s={args:{size:`small`,visibility:`open`}},c={args:{size:`small`,visibility:`close`}},l={args:{size:`big`,visibility:`open`}},u={args:{state:`pressed`}},d={args:{mode:`disabled`}},f={render:()=>(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, max-content)`,gap:12,padding:16},children:[`small`,`big`].flatMap(e=>[`open`,`close`].flatMap(t=>[`standard`,`pressed`].map(n=>(0,a.jsx)(i,{size:e,visibility:t,state:n},`${e}-${t}-${n}`))))})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "open"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "close"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "big",
    visibility: "open"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pressed"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "disabled"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, max-content)",
    gap: 12,
    padding: 16
  }}>
      {(["small", "big"] as const).flatMap(size => (["open", "close"] as const).flatMap(vis => (["standard", "pressed"] as const).map(state => <ToggleCards key={\`\${size}-\${vis}-\${state}\`} size={size} visibility={vis} state={state} />)))}
    </div>
}`,...f.parameters?.docs?.source}}},p=[`SmallOpen`,`SmallClose`,`BigOpen`,`Pressed`,`Disabled`,`AllVariants`]}))();export{f as AllVariants,l as BigOpen,d as Disabled,u as Pressed,c as SmallClose,s as SmallOpen,p as __namedExportsOrder,o as default};