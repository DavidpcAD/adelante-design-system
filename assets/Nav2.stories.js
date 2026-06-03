import{n as e}from"./chunk.js";import{N as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{n as r,t as i}from"./ToggleCards.js";import{i as a,n as o,r as s,t as c}from"./Nav.js";import{n as l,t as u}from"./SearchBar.js";import{n as d,t as f}from"./SelectionDropdown.js";import{i as p,n as m,r as h,t as g}from"./TabsMenu.js";import{i as _,n as v,r as y}from"./helpers.js";var b,x,S,C;e((()=>{t(),l(),p(),r(),d(),a(),_(),b=n(),x={title:`Nav`,parameters:{layout:`padded`}},S={name:`Overview`,parameters:{layout:`fullscreen`},render:()=>(0,b.jsxs)(`div`,{style:{background:`var(--ds-color-surface)`,padding:`54px 48px 120px`,fontFamily:`var(--ds-font-family)`,minHeight:`100vh`,position:`relative`,boxSizing:`border-box`},children:[(0,b.jsx)(`div`,{style:{position:`absolute`,top:20,right:20,writingMode:`vertical-rl`,textOrientation:`mixed`,transform:`rotate(180deg)`,fontSize:10,fontWeight:600,letterSpacing:`0.4px`,lineHeight:1.4,textAlign:`center`,color:`var(--ds-color-black)`},children:`01.00
version`}),(0,b.jsx)(`h1`,{style:{fontSize:32,fontWeight:600,lineHeight:`40px`,letterSpacing:`0.4px`,margin:`0 0 72px 0`,color:`var(--ds-color-black)`},children:`NAVIGATION`}),(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:72},children:[(0,b.jsxs)(v,{name:`searchBar`,desc:`This is search bar`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(u,{layout:`label`,value:`LADRILLO`}),(0,b.jsx)(y,{text:`layout: label / state: standard`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(u,{layout:`normal`}),(0,b.jsx)(y,{text:`layout: normal / state: standard`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(u,{layout:`icon`}),(0,b.jsx)(y,{text:`layout: icon / state: standard`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(u,{layout:`icon`,state:`pressed`}),(0,b.jsx)(y,{text:`layout: icon / state: pressed`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(u,{layout:`expanded`,value:`LADRILLO`,suggestions:[{id:1,name:`LADRILLO TIPO A`},{id:2,name:`LADRILLO TIPO B`}]}),(0,b.jsx)(y,{text:`layout: expanded / state: standard`})]})]}),(0,b.jsxs)(v,{name:`tabsMenu`,desc:`This is a tabs`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,b.jsx)(h,{label:`Boleta`,layout:`label+icon`,icon:`boleta`,state:`standard`}),(0,b.jsx)(h,{label:`Traslado`,layout:`label+icon`,icon:`traslado`,state:`standard`}),(0,b.jsx)(h,{label:`Entrega`,layout:`label+icon`,icon:`entrega`,state:`standard`})]}),(0,b.jsx)(y,{text:`layout: label+icon / state: standard / mode: normal`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,b.jsx)(h,{label:`Boleta`,layout:`label+icon`,icon:`boleta`,state:`pressed`}),(0,b.jsx)(h,{label:`Traslado`,layout:`label+icon`,icon:`traslado`,state:`standard`}),(0,b.jsx)(h,{label:`Entrega`,layout:`label+icon`,icon:`entrega`,state:`standard`})]}),(0,b.jsx)(y,{text:`layout: label+icon / state: pressed / mode: normal`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,b.jsx)(h,{label:`Opción 1`,layout:`label`,state:`standard`}),(0,b.jsx)(h,{label:`Opción 2`,layout:`label`,state:`standard`}),(0,b.jsx)(h,{label:`Opción 3`,layout:`label`,state:`standard`})]}),(0,b.jsx)(y,{text:`layout: label / state: standard / mode: normal`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,b.jsx)(h,{label:`Opción 1`,layout:`label`,state:`pressed`}),(0,b.jsx)(h,{label:`Opción 2`,layout:`label`,state:`standard`}),(0,b.jsx)(h,{label:`Opción 3`,layout:`label`,state:`standard`})]}),(0,b.jsx)(y,{text:`layout: label / state: pressed / mode: normal`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`,opacity:.4},children:[(0,b.jsx)(h,{label:`Opción 1`,layout:`label`,state:`standard`}),(0,b.jsx)(h,{label:`Opción 2`,layout:`label`,state:`standard`}),(0,b.jsx)(h,{label:`Opción 3`,layout:`label`,state:`standard`})]}),(0,b.jsx)(y,{text:`layout: label / mode: disabled`})]})]}),(0,b.jsxs)(v,{name:`toggleCards`,desc:`This is a toggle cards`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,b.jsx)(i,{size:`big`,mode:`normal`,visibility:`open`}),(0,b.jsx)(i,{size:`big`,mode:`normal`,visibility:`open`}),(0,b.jsx)(i,{size:`big`,mode:`normal`,visibility:`open`}),(0,b.jsx)(i,{size:`big`,mode:`normal`,visibility:`open`})]}),(0,b.jsx)(y,{text:`size: big / mode: normal / visibility: open / state: standard`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,b.jsx)(i,{size:`big`,mode:`disabled`,visibility:`open`}),(0,b.jsx)(i,{size:`big`,mode:`disabled`,visibility:`open`}),(0,b.jsx)(i,{size:`big`,mode:`disabled`,visibility:`open`}),(0,b.jsx)(i,{size:`big`,mode:`disabled`,visibility:`open`})]}),(0,b.jsx)(y,{text:`size: big / mode: disabled / visibility: open`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,b.jsx)(i,{size:`small`,mode:`normal`,visibility:`open`}),(0,b.jsx)(i,{size:`small`,mode:`normal`,visibility:`open`}),(0,b.jsx)(i,{size:`small`,mode:`normal`,visibility:`open`}),(0,b.jsx)(i,{size:`small`,mode:`normal`,visibility:`open`})]}),(0,b.jsx)(y,{text:`size: small / mode: normal / state: standard`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,b.jsx)(i,{size:`small`,mode:`disabled`,visibility:`open`}),(0,b.jsx)(i,{size:`small`,mode:`disabled`,visibility:`open`}),(0,b.jsx)(i,{size:`small`,mode:`disabled`,visibility:`open`}),(0,b.jsx)(i,{size:`small`,mode:`disabled`,visibility:`open`})]}),(0,b.jsx)(y,{text:`size: small / mode: disabled`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,b.jsx)(i,{size:`big`,mode:`normal`,visibility:`close`}),(0,b.jsx)(i,{size:`big`,mode:`normal`,visibility:`close`})]}),(0,b.jsx)(y,{text:`size: big / visibility: close`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,b.jsx)(i,{size:`small`,mode:`normal`,visibility:`close`}),(0,b.jsx)(i,{size:`small`,mode:`normal`,visibility:`close`})]}),(0,b.jsx)(y,{text:`size: small / visibility: close`})]})]}),(0,b.jsxs)(v,{name:`toggleMenu`,desc:`This is a toggle menu`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(s,{mode:`open`,state:`standard`}),(0,b.jsx)(y,{text:`mode: open / state: standard`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(s,{mode:`open`,state:`pressed`}),(0,b.jsx)(y,{text:`mode: open / state: pressed`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(s,{mode:`close`,state:`standard`}),(0,b.jsx)(y,{text:`mode: close / state: standard`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(s,{mode:`close`,state:`pressed`}),(0,b.jsx)(y,{text:`mode: close / state: pressed`})]})]}),(0,b.jsxs)(v,{name:`navigationControls`,desc:`This is a navigation controls`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(o,{navigation:`back`,state:`standard`}),(0,b.jsx)(y,{text:`navigation: back / state: standard`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(o,{navigation:`back`,state:`pressed`}),(0,b.jsx)(y,{text:`navigation: back / state: pressed`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(o,{navigation:`go`,state:`standard`}),(0,b.jsx)(y,{text:`navigation: go / state: standard`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(o,{navigation:`go`,state:`pressed`}),(0,b.jsx)(y,{text:`navigation: go / state: pressed`})]})]}),(0,b.jsxs)(v,{name:`filterOptions`,desc:`This is a filter options`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(c,{mode:`normal`,state:`standard`}),(0,b.jsx)(y,{text:`mode: normal / state: standard`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(c,{mode:`normal`,state:`pressed`}),(0,b.jsx)(y,{text:`mode: normal / state: pressed`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(c,{mode:`close`,state:`standard`}),(0,b.jsx)(y,{text:`mode: close / state: standard`})]})]}),(0,b.jsxs)(v,{name:`tabFilterBar`,desc:`This is a tab filter bar`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(m,{label:`Aprobado`,state:`active`,icon:`completado`}),(0,b.jsx)(y,{text:`state: active`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(m,{label:`Pendiente`,state:`disabled`,icon:`sin-autorizar`}),(0,b.jsx)(y,{text:`state: disabled`})]})]}),(0,b.jsx)(v,{name:`filterBar`,desc:`This is a filter bar`,children:(0,b.jsxs)(`div`,{children:[(0,b.jsx)(g,{chips:[{label:`Aprobado`,state:`active`,icon:`completado`},{label:`Denegado`,state:`disabled`,icon:`sin-stock`},{label:`Pendiente`,state:`disabled`,icon:`sin-autorizar`}]}),(0,b.jsx)(y,{text:`state: standard`})]})}),(0,b.jsxs)(v,{name:`selectionDropdown`,desc:`This is a drop down`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(f,{label:`Tipo de material`}),(0,b.jsx)(y,{text:`state: compressed`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(f,{label:`Tipo de material`,isOpen:!0,items:[{label:`Ladrillo`},{label:`Bloque`},{label:`Cerámica`}]}),(0,b.jsx)(y,{text:`state: expanded`})]})]})]})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
        NAVIGATION
      </h1>

      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 72
    }}>

        {/* ── 1. searchBar ─────────────────────────────────────────────── */}
        <NavSection name="searchBar" desc="This is search bar">
          <div>
            <SearchBar layout="label" value="LADRILLO" />
            <NavStateLabel text="layout: label / state: standard" />
          </div>
          <div>
            <SearchBar layout="normal" />
            <NavStateLabel text="layout: normal / state: standard" />
          </div>
          <div>
            <SearchBar layout="icon" />
            <NavStateLabel text="layout: icon / state: standard" />
          </div>
          <div>
            <SearchBar layout="icon" state="pressed" />
            <NavStateLabel text="layout: icon / state: pressed" />
          </div>
          <div>
            <SearchBar layout="expanded" value="LADRILLO" suggestions={[{
            id: 1,
            name: "LADRILLO TIPO A"
          }, {
            id: 2,
            name: "LADRILLO TIPO B"
          }]} />
            <NavStateLabel text="layout: expanded / state: standard" />
          </div>
        </NavSection>

        {/* ── 2. tabsMenu ──────────────────────────────────────────────── */}
        <NavSection name="tabsMenu" desc="This is a tabs">
          <div>
            <div style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap"
          }}>
              <TabsMenu label="Boleta" layout="label+icon" icon="boleta" state="standard" />
              <TabsMenu label="Traslado" layout="label+icon" icon="traslado" state="standard" />
              <TabsMenu label="Entrega" layout="label+icon" icon="entrega" state="standard" />
            </div>
            <NavStateLabel text="layout: label+icon / state: standard / mode: normal" />
          </div>
          <div>
            <div style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap"
          }}>
              <TabsMenu label="Boleta" layout="label+icon" icon="boleta" state="pressed" />
              <TabsMenu label="Traslado" layout="label+icon" icon="traslado" state="standard" />
              <TabsMenu label="Entrega" layout="label+icon" icon="entrega" state="standard" />
            </div>
            <NavStateLabel text="layout: label+icon / state: pressed / mode: normal" />
          </div>
          <div>
            <div style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap"
          }}>
              <TabsMenu label="Opción 1" layout="label" state="standard" />
              <TabsMenu label="Opción 2" layout="label" state="standard" />
              <TabsMenu label="Opción 3" layout="label" state="standard" />
            </div>
            <NavStateLabel text="layout: label / state: standard / mode: normal" />
          </div>
          <div>
            <div style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap"
          }}>
              <TabsMenu label="Opción 1" layout="label" state="pressed" />
              <TabsMenu label="Opción 2" layout="label" state="standard" />
              <TabsMenu label="Opción 3" layout="label" state="standard" />
            </div>
            <NavStateLabel text="layout: label / state: pressed / mode: normal" />
          </div>
          <div>
            <div style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            opacity: 0.4
          }}>
              <TabsMenu label="Opción 1" layout="label" state="standard" />
              <TabsMenu label="Opción 2" layout="label" state="standard" />
              <TabsMenu label="Opción 3" layout="label" state="standard" />
            </div>
            <NavStateLabel text="layout: label / mode: disabled" />
          </div>
        </NavSection>

        {/* ── 3. toggleCards ───────────────────────────────────────────── */}
        <NavSection name="toggleCards" desc="This is a toggle cards">
          <div>
            <div style={{
            display: "flex",
            gap: 8
          }}>
              <ToggleCards size="big" mode="normal" visibility="open" />
              <ToggleCards size="big" mode="normal" visibility="open" />
              <ToggleCards size="big" mode="normal" visibility="open" />
              <ToggleCards size="big" mode="normal" visibility="open" />
            </div>
            <NavStateLabel text="size: big / mode: normal / visibility: open / state: standard" />
          </div>
          <div>
            <div style={{
            display: "flex",
            gap: 8
          }}>
              <ToggleCards size="big" mode="disabled" visibility="open" />
              <ToggleCards size="big" mode="disabled" visibility="open" />
              <ToggleCards size="big" mode="disabled" visibility="open" />
              <ToggleCards size="big" mode="disabled" visibility="open" />
            </div>
            <NavStateLabel text="size: big / mode: disabled / visibility: open" />
          </div>
          <div>
            <div style={{
            display: "flex",
            gap: 8
          }}>
              <ToggleCards size="small" mode="normal" visibility="open" />
              <ToggleCards size="small" mode="normal" visibility="open" />
              <ToggleCards size="small" mode="normal" visibility="open" />
              <ToggleCards size="small" mode="normal" visibility="open" />
            </div>
            <NavStateLabel text="size: small / mode: normal / state: standard" />
          </div>
          <div>
            <div style={{
            display: "flex",
            gap: 8
          }}>
              <ToggleCards size="small" mode="disabled" visibility="open" />
              <ToggleCards size="small" mode="disabled" visibility="open" />
              <ToggleCards size="small" mode="disabled" visibility="open" />
              <ToggleCards size="small" mode="disabled" visibility="open" />
            </div>
            <NavStateLabel text="size: small / mode: disabled" />
          </div>
          <div>
            <div style={{
            display: "flex",
            gap: 8
          }}>
              <ToggleCards size="big" mode="normal" visibility="close" />
              <ToggleCards size="big" mode="normal" visibility="close" />
            </div>
            <NavStateLabel text="size: big / visibility: close" />
          </div>
          <div>
            <div style={{
            display: "flex",
            gap: 8
          }}>
              <ToggleCards size="small" mode="normal" visibility="close" />
              <ToggleCards size="small" mode="normal" visibility="close" />
            </div>
            <NavStateLabel text="size: small / visibility: close" />
          </div>
        </NavSection>

        {/* ── 4. toggleMenu ────────────────────────────────────────────── */}
        <NavSection name="toggleMenu" desc="This is a toggle menu">
          <div>
            <ToggleMenu mode="open" state="standard" />
            <NavStateLabel text="mode: open / state: standard" />
          </div>
          <div>
            <ToggleMenu mode="open" state="pressed" />
            <NavStateLabel text="mode: open / state: pressed" />
          </div>
          <div>
            <ToggleMenu mode="close" state="standard" />
            <NavStateLabel text="mode: close / state: standard" />
          </div>
          <div>
            <ToggleMenu mode="close" state="pressed" />
            <NavStateLabel text="mode: close / state: pressed" />
          </div>
        </NavSection>

        {/* ── 5. navigationControls ────────────────────────────────────── */}
        <NavSection name="navigationControls" desc="This is a navigation controls">
          <div>
            <NavigationControls navigation="back" state="standard" />
            <NavStateLabel text="navigation: back / state: standard" />
          </div>
          <div>
            <NavigationControls navigation="back" state="pressed" />
            <NavStateLabel text="navigation: back / state: pressed" />
          </div>
          <div>
            <NavigationControls navigation="go" state="standard" />
            <NavStateLabel text="navigation: go / state: standard" />
          </div>
          <div>
            <NavigationControls navigation="go" state="pressed" />
            <NavStateLabel text="navigation: go / state: pressed" />
          </div>
        </NavSection>

        {/* ── 6. filterOptions ─────────────────────────────────────────── */}
        <NavSection name="filterOptions" desc="This is a filter options">
          <div>
            <FilterOptions mode="normal" state="standard" />
            <NavStateLabel text="mode: normal / state: standard" />
          </div>
          <div>
            <FilterOptions mode="normal" state="pressed" />
            <NavStateLabel text="mode: normal / state: pressed" />
          </div>
          <div>
            <FilterOptions mode="close" state="standard" />
            <NavStateLabel text="mode: close / state: standard" />
          </div>
        </NavSection>

        {/* ── 7. tabFilterBar ──────────────────────────────────────────── */}
        <NavSection name="tabFilterBar" desc="This is a tab filter bar">
          <div>
            <TabFilterChip label="Aprobado" state="active" icon="completado" />
            <NavStateLabel text="state: active" />
          </div>
          <div>
            <TabFilterChip label="Pendiente" state="disabled" icon="sin-autorizar" />
            <NavStateLabel text="state: disabled" />
          </div>
        </NavSection>

        {/* ── 8. filterBar ─────────────────────────────────────────────── */}
        <NavSection name="filterBar" desc="This is a filter bar">
          <div>
            <FilterBar chips={[{
            label: "Aprobado",
            state: "active",
            icon: "completado"
          }, {
            label: "Denegado",
            state: "disabled",
            icon: "sin-stock"
          }, {
            label: "Pendiente",
            state: "disabled",
            icon: "sin-autorizar"
          }]} />
            <NavStateLabel text="state: standard" />
          </div>
        </NavSection>

        {/* ── 9. selectionDropdown ─────────────────────────────────────── */}
        <NavSection name="selectionDropdown" desc="This is a drop down">
          <div>
            <SelectionDropdown label="Tipo de material" />
            <NavStateLabel text="state: compressed" />
          </div>
          <div>
            <SelectionDropdown label="Tipo de material" isOpen={true} items={[{
            label: "Ladrillo"
          }, {
            label: "Bloque"
          }, {
            label: "Cerámica"
          }]} />
            <NavStateLabel text="state: expanded" />
          </div>
        </NavSection>

      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C=[`Overview`]}))();export{S as Overview,C as __namedExportsOrder,x as default};