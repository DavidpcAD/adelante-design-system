import{n as e}from"./chunk-DnJy8xQt.js";import{O as t}from"./iframe-D0hs_zaM.js";import{t as n}from"./jsx-runtime-BGU0mfus.js";function r({label:e,variant:t=`primary`,state:n=`standard`,onClick:r}){return(0,i.jsx)(`button`,{className:`btn btn--${t} btn--${n}`,disabled:n===`disabled`||t===`disabled`,onClick:r,children:e})}var i,a=e((()=>{t(),i=n(),r.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{label:{required:!0,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"primary" | "secondary" | "disabled"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"disabled"`}]},description:``,defaultValue:{value:`"primary"`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`"standard" | "pressed" | "disabled"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"pressed"`},{name:`literal`,value:`"disabled"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),o,s,c,l,u,d;e((()=>{a(),o={title:`Core/Button`,component:r,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`disabled`]},state:{control:`select`,options:[`standard`,`pressed`,`disabled`]}},args:{label:`label`,variant:`primary`,state:`standard`}},s={},c={args:{variant:`secondary`}},l={args:{state:`pressed`}},u={args:{state:`disabled`,variant:`disabled`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pressed"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    variant: "disabled"
  }
}`,...u.parameters?.docs?.source}}},d=[`Primary`,`Secondary`,`Pressed`,`Disabled`]}))();export{u as Disabled,l as Pressed,s as Primary,c as Secondary,d as __namedExportsOrder,o as default};