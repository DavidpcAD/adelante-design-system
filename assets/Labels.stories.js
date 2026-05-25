import{n as e}from"./chunk.js";import{M as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{n as r,t as i}from"./Button.js";var a,o,s,c,l,u,d;e((()=>{t(),r(),a=n(),o={title:`Button/Labels`,parameters:{layout:`centered`}},s={name:`label`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16,background:`black`,borderRadius:16},children:[(0,a.jsx)(i,{color:`black`,layout:`label`,label:`label`,state:`standard`}),(0,a.jsx)(i,{color:`black`,layout:`icon-right`,label:`label`,icon:`forward`,state:`standard`}),(0,a.jsx)(i,{color:`black`,layout:`icon-left`,label:`label`,icon:`forward`,state:`standard`})]})},c={name:`label only`,render:()=>(0,a.jsx)(i,{color:`black`,layout:`label`,label:`label`,state:`standard`})},l={name:`label + icon right`,render:()=>(0,a.jsx)(i,{color:`black`,layout:`icon-right`,label:`label`,icon:`forward`,state:`standard`})},u={name:`icon left + label`,render:()=>(0,a.jsx)(i,{color:`black`,layout:`icon-left`,label:`label`,icon:`forward`,state:`standard`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "label",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 16,
    background: "black",
    borderRadius: 16
  }}>
      <Button color="black" layout="label" label="label" state="standard" />
      <Button color="black" layout="icon-right" label="label" icon="forward" state="standard" />
      <Button color="black" layout="icon-left" label="label" icon="forward" state="standard" />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "label only",
  render: () => <Button color="black" layout="label" label="label" state="standard" />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "label + icon right",
  render: () => <Button color="black" layout="icon-right" label="label" icon="forward" state="standard" />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "icon left + label",
  render: () => <Button color="black" layout="icon-left" label="label" icon="forward" state="standard" />
}`,...u.parameters?.docs?.source}}},d=[`LabelOnly`,`Label`,`LabelIconRight`,`IconLeftLabel`]}))();export{u as IconLeftLabel,c as Label,l as LabelIconRight,s as LabelOnly,d as __namedExportsOrder,o as default};