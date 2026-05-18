import{n as e,o as t}from"./chunk.js";import{F as n}from"./iframe.js";import{t as r}from"./jsx-runtime.js";import{n as i,t as a}from"./SlideButton.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(n()),i(),s=r(),c={title:`Sistema de Diseño/SlideButton`,component:a,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"**Gestures**\n\n- **Drag** ≥ `threshold` (default 0.72) → `onConfirm` fires, success state holds for `confirmedHoldMs`, then auto-resets.\n- **Drag** below threshold → snap-back via `springs.snappy`.\n- **Tap** (no meaningful drag) → nudge: bouncy kick to the right + spring back. Hints at slide-ability without committing.\n\n**Haptics**\n\n- `select` on touchdown (earlier than drag-start, feels instant).\n- `drag` on snap-back (failed drag).\n- `complete` on successful slide.\n\n**Figma:** node [997-3096](https://www.figma.com/design/oRDLRL9OUNcTQ0k6G5MBPS/Losa-Flotante?node-id=997-3096)."}}},args:{label:`Pedir`,confirmedLabel:`Confirmado`,onConfirm:()=>console.log(`confirmed`)}},l={},u={args:{disabled:!0,disabledLabel:`No disponible`}},d={name:`Tap → nudge`,render:()=>{let[e,t]=(0,o.useState)(0);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:16},children:[(0,s.jsx)(a,{label:`Pedir`,onConfirm:()=>t(e=>e+1)}),(0,s.jsxs)(`p`,{style:{margin:0,fontSize:12,color:`#5d636c`},children:[`Tap the knob (don't drag) — it kicks right and returns. Confirmed `,e,`×.`]})]})}},f={name:`SlideButton / All states`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,padding:24},children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{margin:`0 0 8px`,fontSize:12,color:`#5d636c`},children:`Standard`}),(0,s.jsx)(a,{label:`Pedir`,onConfirm:()=>console.log(`confirmed`)})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{margin:`0 0 8px`,fontSize:12,color:`#5d636c`},children:`Disabled`}),(0,s.jsx)(a,{label:`Pedir`,onConfirm:()=>{},disabled:!0})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    disabledLabel: "No disponible"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Tap → nudge",
  render: () => {
    const [count, setCount] = useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16
    }}>
        <SlideButton label="Pedir" onConfirm={() => setCount(c => c + 1)} />
        <p style={{
        margin: 0,
        fontSize: 12,
        color: "#5d636c"
      }}>
          Tap the knob (don&apos;t drag) — it kicks right and returns. Confirmed {count}×.
        </p>
      </div>;
  }
}`,...d.parameters?.docs?.source},description:{story:`Tap the knob without dragging — the knob springs to the right and back
to hint at slide-ability. Useful for first-time users.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Disabled`,`TapForNudge`,`AllStates`]}))();export{f as AllStates,l as Default,u as Disabled,d as TapForNudge,p as __namedExportsOrder,c as default};