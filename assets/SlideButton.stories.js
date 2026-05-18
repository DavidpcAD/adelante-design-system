import{n as e}from"./chunk.js";import{F as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{n as r,t as i}from"./SlideButton.js";var a,o,s,c,l,u;e((()=>{t(),r(),a=n(),o={title:`Sistema de Diseño/SlideButton`,component:i,tags:[`autodocs`],parameters:{layout:`centered`},args:{label:`Pedir`,confirmedLabel:`Confirmado`,onConfirm:()=>console.log(`confirmed`)}},s={},c={args:{disabled:!0,disabledLabel:`No disponible`}},l={name:`SlideButton / All states`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,padding:24},children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{margin:`0 0 8px`,fontSize:12,color:`#5d636c`},children:`Standard`}),(0,a.jsx)(i,{label:`Pedir`,onConfirm:()=>console.log(`confirmed`)})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{margin:`0 0 8px`,fontSize:12,color:`#5d636c`},children:`Disabled`}),(0,a.jsx)(i,{label:`Pedir`,onConfirm:()=>{},disabled:!0})]})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    disabledLabel: "No disponible"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "SlideButton / All states",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32,
    padding: 24
  }}>
      <div>
        <p style={{
        margin: "0 0 8px",
        fontSize: 12,
        color: "#5d636c"
      }}>Standard</p>
        <SlideButton label="Pedir" onConfirm={() => console.log("confirmed")} />
      </div>
      <div>
        <p style={{
        margin: "0 0 8px",
        fontSize: 12,
        color: "#5d636c"
      }}>Disabled</p>
        <SlideButton label="Pedir" onConfirm={() => {}} disabled />
      </div>
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Disabled`,`AllStates`]}))();export{l as AllStates,s as Default,c as Disabled,u as __namedExportsOrder,o as default};