import{n as e}from"./chunk.js";import{N as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{n as r,t as i}from"./Button.js";var a,o,s,c,l,u,d,f,p;e((()=>{t(),r(),a=n(),o={title:`Button/PrimaryButton`,component:i,tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`red`,`green`,`gray`]},layout:{control:`select`,options:[`label`,`icon-left`,`icon-right`,`icon`]},state:{control:`select`,options:[`standard`,`pressed`,`disabled`]},icon:{control:`select`,options:[`home`,`check`,`plus`,`back`,`forward`,`search`,`filter`]}},args:{label:`label`,color:`red`,layout:`label`,state:`standard`}},s={name:`red / standard`,args:{color:`red`,state:`standard`}},c={name:`red / pressed`,args:{color:`red`,state:`pressed`}},l={name:`green / standard`,args:{color:`green`,state:`standard`}},u={name:`green / pressed`,args:{color:`green`,state:`pressed`}},d={name:`gray / disabled`,args:{color:`gray`,state:`disabled`}},f={name:`All variants`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[[`red`,`green`].map(e=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,a.jsx)(i,{color:e,label:`label`,layout:`label`,state:`standard`}),(0,a.jsx)(i,{color:e,label:`label`,layout:`icon-right`,icon:`forward`,state:`standard`}),(0,a.jsx)(i,{color:e,label:`label`,layout:`icon-left`,icon:`forward`,state:`standard`}),(0,a.jsx)(i,{color:e,layout:`icon`,icon:`plus`,state:`standard`})]},e)),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,a.jsx)(i,{color:`gray`,label:`label`,layout:`label`,state:`disabled`}),(0,a.jsx)(i,{color:`gray`,label:`label`,layout:`icon-right`,icon:`forward`,state:`disabled`}),(0,a.jsx)(i,{color:`gray`,label:`label`,layout:`icon-left`,icon:`forward`,state:`disabled`}),(0,a.jsx)(i,{color:`gray`,layout:`icon`,icon:`plus`,state:`disabled`})]})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "red / standard",
  args: {
    color: "red",
    state: "standard"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "red / pressed",
  args: {
    color: "red",
    state: "pressed"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "green / standard",
  args: {
    color: "green",
    state: "standard"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "green / pressed",
  args: {
    color: "green",
    state: "pressed"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "gray / disabled",
  args: {
    color: "gray",
    state: "disabled"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "All variants",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 16
  }}>
      {(["red", "green"] as const).map(c => <div key={c} style={{
      display: "flex",
      gap: 12
    }}>
          <Button color={c} label="label" layout="label" state="standard" />
          <Button color={c} label="label" layout="icon-right" icon="forward" state="standard" />
          <Button color={c} label="label" layout="icon-left" icon="forward" state="standard" />
          <Button color={c} layout="icon" icon="plus" state="standard" />
        </div>)}
      <div style={{
      display: "flex",
      gap: 12
    }}>
        <Button color="gray" label="label" layout="label" state="disabled" />
        <Button color="gray" label="label" layout="icon-right" icon="forward" state="disabled" />
        <Button color="gray" label="label" layout="icon-left" icon="forward" state="disabled" />
        <Button color="gray" layout="icon" icon="plus" state="disabled" />
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p=[`RedStandard`,`RedPressed`,`GreenStandard`,`GreenPressed`,`GrayDisabled`,`AllVariants`]}))();export{f as AllVariants,d as GrayDisabled,u as GreenPressed,l as GreenStandard,c as RedPressed,s as RedStandard,p as __namedExportsOrder,o as default};