import{n as e}from"./chunk.js";import{n as t,t as n}from"./ToggleCards.js";var r,i,a,o,s,c,l,u,d;e((()=>{t(),r={title:`Sistema de Diseño/ToggleCards`,component:n,parameters:{layout:`centered`},argTypes:{size:{control:{type:`inline-radio`},options:[`big`,`small`]},visibility:{control:{type:`inline-radio`},options:[`open`,`close`]},state:{control:{type:`inline-radio`},options:[`standard`,`pressed`]},mode:{control:{type:`inline-radio`},options:[`normal`,`disabled`]}}},i={args:{size:`big`,visibility:`open`}},a={args:{size:`big`,visibility:`open`,state:`pressed`}},o={args:{size:`big`,visibility:`close`}},s={args:{size:`small`,visibility:`open`}},c={args:{size:`small`,visibility:`open`,state:`pressed`}},l={args:{size:`small`,visibility:`close`}},u={args:{size:`small`,visibility:`close`,state:`pressed`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "big",
    visibility: "open"
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "big",
    visibility: "open",
    state: "pressed"
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "big",
    visibility: "close"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "open"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "open",
    state: "pressed"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "close"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "close",
    state: "pressed"
  }
}`,...u.parameters?.docs?.source}}},d=[`BigOpen`,`BigOpenPressed`,`BigClose`,`SmallOpen`,`SmallOpenPressed`,`SmallClose`,`SmallClosePressed`]}))();export{o as BigClose,i as BigOpen,a as BigOpenPressed,l as SmallClose,u as SmallClosePressed,s as SmallOpen,c as SmallOpenPressed,d as __namedExportsOrder,r as default};