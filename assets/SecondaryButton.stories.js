import{n as e}from"./chunk.js";import{M as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{n as r,t as i}from"./Button.js";var a,o,s,c,l,u,d,f;e((()=>{t(),r(),a=n(),o={title:`Button/SecondaryButton`,component:i,tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`black`,`white`]},layout:{control:`select`,options:[`label`,`icon-left`,`icon-right`,`icon`]},state:{control:`select`,options:[`standard`,`pressed`]},icon:{control:`select`,options:[`home`,`check`,`plus`,`back`,`forward`,`search`,`filter`]}},args:{label:`label`,color:`black`,layout:`label`,state:`standard`}},s={name:`black / standard`,args:{color:`black`,state:`standard`}},c={name:`black / pressed`,args:{color:`black`,state:`pressed`}},l={name:`white / standard`,args:{color:`white`,state:`standard`}},u={name:`white / pressed`,args:{color:`white`,state:`pressed`}},d={name:`All variants`,render:()=>(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[`black`,`white`].map(e=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,a.jsx)(i,{color:e,label:`label`,layout:`label`,state:`standard`}),(0,a.jsx)(i,{color:e,label:`label`,layout:`icon-right`,icon:`forward`,state:`standard`}),(0,a.jsx)(i,{color:e,label:`label`,layout:`icon-left`,icon:`forward`,state:`standard`}),(0,a.jsx)(i,{color:e,layout:`icon`,icon:`plus`,state:`standard`})]},e))})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "black / standard",
  args: {
    color: "black",
    state: "standard"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "black / pressed",
  args: {
    color: "black",
    state: "pressed"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "white / standard",
  args: {
    color: "white",
    state: "standard"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "white / pressed",
  args: {
    color: "white",
    state: "pressed"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "All variants",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 16
  }}>
      {(["black", "white"] as const).map(c => <div key={c} style={{
      display: "flex",
      gap: 12
    }}>
          <Button color={c} label="label" layout="label" state="standard" />
          <Button color={c} label="label" layout="icon-right" icon="forward" state="standard" />
          <Button color={c} label="label" layout="icon-left" icon="forward" state="standard" />
          <Button color={c} layout="icon" icon="plus" state="standard" />
        </div>)}
    </div>
}`,...d.parameters?.docs?.source}}},f=[`BlackStandard`,`BlackPressed`,`WhiteStandard`,`WhitePressed`,`AllVariants`]}))();export{d as AllVariants,c as BlackPressed,s as BlackStandard,u as WhitePressed,l as WhiteStandard,f as __namedExportsOrder,o as default};