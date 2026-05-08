import{n as e}from"./chunk-DnJy8xQt.js";import{O as t}from"./iframe-C-IoLm7i.js";import{t as n}from"./jsx-runtime-BGU0mfus.js";import{n as r,t as i}from"./Icon-Bo-n3Wqe.js";function a({state:e=`standard`,mode:t=`normal`,visibility:n=`open`,size:r=`small`,onClick:a}){let s=t===`disabled`;return(0,o.jsx)(`button`,{className:[`ds-toggle-cards`,`ds-toggle-cards--${e}`,`ds-toggle-cards--${t}`,`ds-toggle-cards--${n}`,`ds-toggle-cards--${r}`].join(` `),disabled:s,onClick:s?void 0:a,type:`button`,"aria-label":n===`open`?`Colapsar`:`Expandir`,"aria-expanded":n===`open`,children:(0,o.jsx)(i,{name:n===`open`?`chevron-up`:`chevron-down`,size:`lg`,color:`var(--ds-color-white)`})})}var o,s=e((()=>{t(),r(),o=n(),a.__docgenInfo={description:``,methods:[],displayName:`ToggleCards`,props:{state:{required:!1,tsType:{name:`union`,raw:`"standard" | "pressed"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"pressed"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},mode:{required:!1,tsType:{name:`union`,raw:`"normal" | "disabled"`,elements:[{name:`literal`,value:`"normal"`},{name:`literal`,value:`"disabled"`}]},description:``,defaultValue:{value:`"normal"`,computed:!1}},visibility:{required:!1,tsType:{name:`union`,raw:`"open" | "close"`,elements:[{name:`literal`,value:`"open"`},{name:`literal`,value:`"close"`}]},description:`open = chevron up (expanded), close = chevron down (collapsed)`,defaultValue:{value:`"open"`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"big" | "small"`,elements:[{name:`literal`,value:`"big"`},{name:`literal`,value:`"small"`}]},description:`big = taller button (112px), small = 74px`,defaultValue:{value:`"small"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),c,l,u,d,f,p,m,h,g;e((()=>{t(),s(),c=n(),l={title:`Core/ToggleCards`,component:a,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`pressed`]},mode:{control:`select`,options:[`normal`,`disabled`]},visibility:{control:`select`,options:[`open`,`close`]},size:{control:`select`,options:[`big`,`small`]}},args:{state:`standard`,mode:`normal`,visibility:`open`,size:`small`}},u={args:{size:`small`,visibility:`open`}},d={args:{size:`small`,visibility:`close`}},f={args:{size:`big`,visibility:`open`}},p={args:{state:`pressed`}},m={args:{mode:`disabled`}},h={render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, max-content)`,gap:12,padding:16},children:[`small`,`big`].flatMap(e=>[`open`,`close`].flatMap(t=>[`standard`,`pressed`].map(n=>(0,c.jsx)(a,{size:e,visibility:t,state:n},`${e}-${t}-${n}`))))})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "open"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "close"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: "big",
    visibility: "open"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pressed"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "disabled"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, max-content)",
    gap: 12,
    padding: 16
  }}>
      {(["small", "big"] as const).flatMap(size => (["open", "close"] as const).flatMap(vis => (["standard", "pressed"] as const).map(state => <ToggleCards key={\`\${size}-\${vis}-\${state}\`} size={size} visibility={vis} state={state} />)))}
    </div>
}`,...h.parameters?.docs?.source}}},g=[`SmallOpen`,`SmallClose`,`BigOpen`,`Pressed`,`Disabled`,`AllVariants`]}))();export{h as AllVariants,f as BigOpen,m as Disabled,p as Pressed,d as SmallClose,u as SmallOpen,g as __namedExportsOrder,l as default};