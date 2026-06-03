import{n as e,o as t}from"./chunk.js";import{N as n}from"./iframe.js";import{t as r}from"./jsx-runtime.js";import{n as i,t as a}from"./ToggleCards.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{o=t(n()),i(),s=r(),c={title:`Button/ToggleCards`,component:a,parameters:{layout:`centered`},argTypes:{size:{control:{type:`inline-radio`},options:[`big`,`small`]},visibility:{control:{type:`inline-radio`},options:[`open`,`close`]},state:{control:{type:`inline-radio`},options:[`standard`,`pressed`]},mode:{control:{type:`inline-radio`},options:[`normal`,`disabled`]}}},l={args:{size:`big`,visibility:`open`}},u={args:{size:`big`,visibility:`open`,state:`pressed`}},d={args:{size:`big`,visibility:`open`,mode:`disabled`}},f={args:{size:`big`,visibility:`open`,state:`pressed`,mode:`disabled`}},p={args:{size:`small`,visibility:`open`}},m={args:{size:`small`,visibility:`open`,state:`pressed`}},h={args:{size:`small`,visibility:`close`}},g={args:{size:`small`,visibility:`close`,state:`pressed`}},_={args:{size:`small`,visibility:`open`,mode:`disabled`}},v={args:{size:`small`,visibility:`open`,state:`pressed`,mode:`disabled`}},y={args:{size:`small`,visibility:`close`,mode:`disabled`}},b={args:{size:`small`,visibility:`close`,state:`pressed`,mode:`disabled`}},x={render:()=>{let[e,t]=(0,o.useState)(!0);return(0,s.jsx)(a,{size:`big`,visibility:e?`open`:`close`,onClick:()=>t(e=>!e)})}},S={render:()=>{let[e,t]=(0,o.useState)(!0);return(0,s.jsx)(a,{size:`small`,visibility:e?`open`:`close`,onClick:()=>t(e=>!e)})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "big",
    visibility: "open"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "big",
    visibility: "open",
    state: "pressed"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "big",
    visibility: "open",
    mode: "disabled"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: "big",
    visibility: "open",
    state: "pressed",
    mode: "disabled"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "open"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "open",
    state: "pressed"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "close"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "close",
    state: "pressed"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "open",
    mode: "disabled"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "open",
    state: "pressed",
    mode: "disabled"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "close",
    mode: "disabled"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    visibility: "close",
    state: "pressed",
    mode: "disabled"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <ToggleCards size="big" visibility={open ? "open" : "close"} onClick={() => setOpen(v => !v)} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <ToggleCards size="small" visibility={open ? "open" : "close"} onClick={() => setOpen(v => !v)} />;
  }
}`,...S.parameters?.docs?.source}}},C=[`BigOpen`,`BigOpenPressed`,`BigDisabled`,`BigDisabledPressed`,`SmallOpen`,`SmallOpenPressed`,`SmallClose`,`SmallClosePressed`,`SmallDisabled`,`SmallDisabledPressed`,`SmallDisabledClose`,`SmallDisabledClosePressed`,`InteractiveBig`,`InteractiveSmall`]}))();export{d as BigDisabled,f as BigDisabledPressed,l as BigOpen,u as BigOpenPressed,x as InteractiveBig,S as InteractiveSmall,h as SmallClose,g as SmallClosePressed,_ as SmallDisabled,y as SmallDisabledClose,b as SmallDisabledClosePressed,v as SmallDisabledPressed,p as SmallOpen,m as SmallOpenPressed,C as __namedExportsOrder,c as default};