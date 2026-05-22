import{n as e}from"./chunk.js";import{M as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";function r({layer:e}){return(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2,minWidth:140},children:[(0,i.jsxs)(`p`,{style:o,children:[`x: `,e.x]}),(0,i.jsxs)(`p`,{style:o,children:[`y: `,e.y]}),(0,i.jsxs)(`p`,{style:o,children:[`blur: `,e.blur]}),(0,i.jsxs)(`p`,{style:o,children:[`spread: `,e.spread]}),(0,i.jsxs)(`p`,{style:o,children:[`color: `,e.color]})]})}var i,a,o,s,c,l,u,d,f;e((()=>{t(),i=n(),a={title:`Shadow`,parameters:{layout:`padded`}},o={fontSize:12,fontWeight:400,lineHeight:`16px`,color:`var(--ds-color-black)`,margin:0},s=[{name:`shadow 01`,css:`0px 4px 8px 0px #AAAFB640`,layers:[{x:0,y:4,blur:8,spread:0,color:`gray 300 al 25%`}]},{name:`shadow 02_soft`,css:`0px 6px 0px 0px #00000029`,layers:[{x:0,y:6,blur:0,spread:0,color:`black al 16%`}]},{name:`shadow 03_big`,css:`0px 6px 0px 0px #00000029, 0px 2px 4px 0px #00000029`,layers:[{x:0,y:6,blur:0,spread:0,color:`black al 16%`},{x:0,y:2,blur:4,spread:0,color:`black al 16%`}]}],c={name:`Overview`,parameters:{layout:`fullscreen`},render:()=>(0,i.jsxs)(`div`,{style:{background:`var(--ds-color-surface)`,padding:`54px 40px 60px`,fontFamily:`var(--ds-font-family)`,minHeight:`100vh`,position:`relative`,boxSizing:`border-box`},children:[(0,i.jsx)(`div`,{style:{position:`absolute`,top:20,right:20,writingMode:`vertical-rl`,textOrientation:`mixed`,transform:`rotate(180deg)`,fontSize:10,fontWeight:600,letterSpacing:`0.4px`,lineHeight:1.4,textAlign:`center`,color:`var(--ds-color-black)`,whiteSpace:`pre`},children:`01.00
version`}),(0,i.jsx)(`h1`,{style:{fontSize:32,fontWeight:600,lineHeight:`40px`,letterSpacing:`0.4px`,margin:`0 0 40px 0`,color:`var(--ds-color-black)`},children:`shadow`}),(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,maxWidth:520},children:s.map(e=>(0,i.jsxs)(`div`,{style:{background:`var(--ds-color-white)`,border:`1px solid #e8eaed`,borderRadius:16,padding:`20px 24px`,display:`flex`,alignItems:`flex-start`,gap:24},children:[(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10,flexShrink:0},children:[(0,i.jsx)(`p`,{style:{fontSize:12,fontWeight:600,lineHeight:`16px`,color:`var(--ds-color-black)`,margin:0},children:e.name}),(0,i.jsx)(`div`,{style:{width:52,height:44,background:`var(--ds-color-white)`,borderRadius:8,boxShadow:e.css}})]}),(0,i.jsx)(`div`,{style:{display:`flex`,gap:24,paddingTop:20},children:e.layers.map((e,t)=>(0,i.jsx)(r,{layer:e},t))})]},e.name))})]})},l={name:`shadow 01`,parameters:{layout:`centered`},render:()=>(0,i.jsx)(`div`,{style:{padding:32},children:(0,i.jsx)(`div`,{style:{width:120,height:80,background:`var(--ds-color-white)`,borderRadius:12,boxShadow:`0px 4px 8px 0px #AAAFB640`}})})},u={name:`shadow 02_soft`,parameters:{layout:`centered`},render:()=>(0,i.jsx)(`div`,{style:{padding:32},children:(0,i.jsx)(`div`,{style:{width:120,height:80,background:`var(--ds-color-white)`,borderRadius:12,boxShadow:`0px 6px 0px 0px #00000029`}})})},d={name:`shadow 03_big`,parameters:{layout:`centered`},render:()=>(0,i.jsx)(`div`,{style:{padding:32},children:(0,i.jsx)(`div`,{style:{width:120,height:80,background:`var(--ds-color-white)`,borderRadius:12,boxShadow:`0px 6px 0px 0px #00000029, 0px 2px 4px 0px #00000029`}})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      gap: 16,
      maxWidth: 520
    }}>
        {SHADOWS.map(s => <div key={s.name} style={{
        background: "var(--ds-color-white)",
        border: "1px solid #e8eaed",
        borderRadius: 16,
        padding: "20px 24px",
        display: "flex",
        alignItems: "flex-start",
        gap: 24
      }}>
            {/* Left: name + preview */}
            <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flexShrink: 0
        }}>
              <p style={{
            fontSize: 12,
            fontWeight: 600,
            lineHeight: "16px",
            color: "var(--ds-color-black)",
            margin: 0
          }}>
                {s.name}
              </p>
              <div style={{
            width: 52,
            height: 44,
            background: "var(--ds-color-white)",
            borderRadius: 8,
            boxShadow: s.css
          }} />
            </div>

            {/* Right: spec columns */}
            <div style={{
          display: "flex",
          gap: 24,
          paddingTop: 20
        }}>
              {s.layers.map((layer, i) => <SpecCol key={i} layer={layer} />)}
            </div>
          </div>)}
      </div>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "shadow 01",
  parameters: {
    layout: "centered"
  },
  render: () => <div style={{
    padding: 32
  }}>
      <div style={{
      width: 120,
      height: 80,
      background: "var(--ds-color-white)",
      borderRadius: 12,
      boxShadow: "0px 4px 8px 0px #AAAFB640"
    }} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "shadow 02_soft",
  parameters: {
    layout: "centered"
  },
  render: () => <div style={{
    padding: 32
  }}>
      <div style={{
      width: 120,
      height: 80,
      background: "var(--ds-color-white)",
      borderRadius: 12,
      boxShadow: "0px 6px 0px 0px #00000029"
    }} />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "shadow 03_big",
  parameters: {
    layout: "centered"
  },
  render: () => <div style={{
    padding: 32
  }}>
      <div style={{
      width: 120,
      height: 80,
      background: "var(--ds-color-white)",
      borderRadius: 12,
      boxShadow: "0px 6px 0px 0px #00000029, 0px 2px 4px 0px #00000029"
    }} />
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Overview`,`Shadow01`,`Shadow02Soft`,`Shadow03Big`]}))();export{c as Overview,l as Shadow01,u as Shadow02Soft,d as Shadow03Big,f as __namedExportsOrder,a as default};