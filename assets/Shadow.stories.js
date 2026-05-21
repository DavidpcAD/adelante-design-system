import{n as e}from"./chunk.js";import{F as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";var r,i,a,o,s;e((()=>{t(),r=n(),i={title:`Shadow`,parameters:{layout:`padded`}},a=[{name:`shadow 01`,token:`--ds-shadow-01`,value:`0px 4px 8px rgba(170, 175, 182, 0.25)`,usage:`Cards, panels, elevated surfaces`}],o={name:`Overview`,parameters:{layout:`fullscreen`},render:()=>(0,r.jsxs)(`div`,{style:{background:`var(--ds-color-surface)`,padding:`54px 40px 60px`,fontFamily:`var(--ds-font-family)`,minHeight:`100vh`,position:`relative`,boxSizing:`border-box`},children:[(0,r.jsx)(`div`,{style:{position:`absolute`,top:20,right:20,writingMode:`vertical-rl`,textOrientation:`mixed`,transform:`rotate(180deg)`,fontSize:10,fontWeight:600,letterSpacing:`0.4px`,lineHeight:1.4,textAlign:`center`,color:`var(--ds-color-black)`,whiteSpace:`pre`},children:`01.00
version`}),(0,r.jsx)(`h1`,{style:{fontSize:32,fontWeight:600,lineHeight:`40px`,letterSpacing:`0.4px`,margin:`0 0 40px 0`,color:`var(--ds-color-black)`},children:`shadow`}),(0,r.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:a.map(e=>(0,r.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:32},children:[(0,r.jsx)(`div`,{style:{width:120,height:80,background:`var(--ds-color-white)`,borderRadius:`var(--ds-radius-lg)`,boxShadow:`var(${e.token})`,flexShrink:0}}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{style:{fontSize:`var(--ds-font-size-body-md)`,fontWeight:`var(--ds-font-weight-semibold)`,lineHeight:`var(--ds-line-height-body-md)`,color:`var(--ds-color-black)`,margin:`0 0 4px 0`},children:e.name}),(0,r.jsx)(`p`,{style:{fontSize:`var(--ds-font-size-body-sm)`,fontWeight:`var(--ds-font-weight-regular)`,lineHeight:`var(--ds-line-height-body-sm)`,color:`var(--ds-color-gray-500)`,margin:`0 0 2px 0`,fontFamily:`monospace`},children:`var(${e.token})`}),(0,r.jsx)(`p`,{style:{fontSize:`var(--ds-font-size-body-sm)`,fontWeight:`var(--ds-font-weight-regular)`,lineHeight:`var(--ds-line-height-body-sm)`,color:`var(--ds-color-gray-400)`,margin:0},children:e.value}),(0,r.jsx)(`p`,{style:{fontSize:`var(--ds-font-size-body-sm)`,fontWeight:`var(--ds-font-weight-regular)`,lineHeight:`var(--ds-line-height-body-sm)`,color:`var(--ds-color-gray-300)`,margin:`4px 0 0`},children:e.usage})]})]},e.name))})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Overview",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    background: "var(--ds-color-surface)",
    padding: "54px 40px 60px",
    fontFamily: "var(--ds-font-family)",
    minHeight: "100vh",
    position: "relative",
    boxSizing: "border-box"
  }}>
      <div style={{
      position: "absolute",
      top: 20,
      right: 20,
      writingMode: "vertical-rl",
      textOrientation: "mixed",
      transform: "rotate(180deg)",
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.4px",
      lineHeight: 1.4,
      textAlign: "center",
      color: "var(--ds-color-black)",
      whiteSpace: "pre"
    }}>
        {"01.00\\nversion"}
      </div>

      <h1 style={{
      fontSize: 32,
      fontWeight: 600,
      lineHeight: "40px",
      letterSpacing: "0.4px",
      margin: "0 0 40px 0",
      color: "var(--ds-color-black)"
    }}>
        shadow
      </h1>

      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 32
    }}>
        {SHADOW_TOKENS.map(s => <div key={s.name} style={{
        display: "flex",
        alignItems: "center",
        gap: 32
      }}>
            {/* Preview box */}
            <div style={{
          width: 120,
          height: 80,
          background: "var(--ds-color-white)",
          borderRadius: "var(--ds-radius-lg)",
          boxShadow: \`var(\${s.token})\`,
          flexShrink: 0
        }} />

            {/* Info */}
            <div>
              <p style={{
            fontSize: "var(--ds-font-size-body-md)",
            fontWeight: "var(--ds-font-weight-semibold)",
            lineHeight: "var(--ds-line-height-body-md)",
            color: "var(--ds-color-black)",
            margin: "0 0 4px 0"
          }}>
                {s.name}
              </p>
              <p style={{
            fontSize: "var(--ds-font-size-body-sm)",
            fontWeight: "var(--ds-font-weight-regular)",
            lineHeight: "var(--ds-line-height-body-sm)",
            color: "var(--ds-color-gray-500)",
            margin: "0 0 2px 0",
            fontFamily: "monospace"
          }}>
                {\`var(\${s.token})\`}
              </p>
              <p style={{
            fontSize: "var(--ds-font-size-body-sm)",
            fontWeight: "var(--ds-font-weight-regular)",
            lineHeight: "var(--ds-line-height-body-sm)",
            color: "var(--ds-color-gray-400)",
            margin: 0
          }}>
                {s.value}
              </p>
              <p style={{
            fontSize: "var(--ds-font-size-body-sm)",
            fontWeight: "var(--ds-font-weight-regular)",
            lineHeight: "var(--ds-line-height-body-sm)",
            color: "var(--ds-color-gray-300)",
            margin: "4px 0 0"
          }}>
                {s.usage}
              </p>
            </div>
          </div>)}
      </div>
    </div>
}`,...o.parameters?.docs?.source}}},s=[`Overview`]}))();export{o as Overview,s as __namedExportsOrder,i as default};