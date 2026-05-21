import{n as e}from"./chunk.js";import{F as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{i as r,n as i,r as a,t as o}from"./Card.js";import{i as s,n as c,r as l}from"./helpers.js";var u,d,f,p,m;e((()=>{t(),r(),s(),u=n(),d={title:`Cards`,parameters:{layout:`padded`}},f=[{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3},{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3},{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3}],p={name:`Overview`,parameters:{layout:`fullscreen`},render:()=>(0,u.jsxs)(`div`,{style:{background:`var(--ds-color-surface)`,padding:`54px 48px 120px`,fontFamily:`var(--ds-font-family)`,minHeight:`100vh`,position:`relative`,boxSizing:`border-box`},children:[(0,u.jsx)(`div`,{style:{position:`absolute`,top:20,right:20,writingMode:`vertical-rl`,textOrientation:`mixed`,transform:`rotate(180deg)`,fontSize:10,fontWeight:600,letterSpacing:`0.4px`,lineHeight:1.4,textAlign:`center`,color:`var(--ds-color-black)`},children:`01.00
version`}),(0,u.jsx)(`h1`,{style:{fontSize:32,fontWeight:600,lineHeight:`40px`,letterSpacing:`0.4px`,margin:`0 0 72px 0`,color:`var(--ds-color-black)`},children:`cards`}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:72},children:[(0,u.jsx)(c,{name:`summaryCard`,desc:`This is a summary card`,children:(0,u.jsxs)(`div`,{style:{border:`1px dashed var(--ds-color-gray-300)`,borderRadius:16,padding:24,display:`flex`,flexDirection:`column`,gap:24},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(a,{visibility:`open`,statusState:`completo`}),(0,u.jsx)(l,{text:`state: open`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(a,{visibility:`close`,statusState:`completo`}),(0,u.jsx)(l,{text:`state: close`})]})]})}),(0,u.jsx)(c,{name:`materialList`,desc:`This is a material list`,children:(0,u.jsx)(i,{description:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`,qtyState:`incompleto`,qty:3})}),(0,u.jsx)(c,{name:`detailCard`,desc:`This is a material detail card`,children:(0,u.jsx)(o,{statusState:`completo`,materials:f})})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Overview",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    background: "var(--ds-color-surface)",
    padding: "54px 48px 120px",
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
      color: "var(--ds-color-black)"
    }}>
        {"01.00\\nversion"}
      </div>

      <h1 style={{
      fontSize: 32,
      fontWeight: 600,
      lineHeight: "40px",
      letterSpacing: "0.4px",
      margin: "0 0 72px 0",
      color: "var(--ds-color-black)"
    }}>
        cards
      </h1>

      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 72
    }}>

        {/* ── 1. summaryCard ─────────────────────────────────────────────── */}
        <NavSection name="summaryCard" desc="This is a summary card">
          <div style={{
          border: "1px dashed var(--ds-color-gray-300)",
          borderRadius: 16,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 24
        }}>
            <div>
              <SummaryCard visibility="open" statusState="completo" />
              <NavStateLabel text="state: open" />
            </div>
            <div>
              <SummaryCard visibility="close" statusState="completo" />
              <NavStateLabel text="state: close" />
            </div>
          </div>
        </NavSection>

        {/* ── 2. materialList ────────────────────────────────────────────── */}
        <NavSection name="materialList" desc="This is a material list">
          <MaterialList description="CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V" qtyState="incompleto" qty={3} />
        </NavSection>

        {/* ── 3. detailCard ──────────────────────────────────────────────── */}
        <NavSection name="detailCard" desc="This is a material detail card">
          <DetailCard statusState="completo" materials={SAMPLE_MATERIALS} />
        </NavSection>

      </div>
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Overview`]}))();export{p as Overview,m as __namedExportsOrder,d as default};