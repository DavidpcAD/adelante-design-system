import{n as e}from"./chunk.js";import{M as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";function r(e){return(0,i.jsx)(`svg`,{viewBox:`0 0 163 71`,fill:`currentColor`,role:`img`,"aria-label":`Adelante`,...e,children:(0,i.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M0 0H45.645L87.8835 70.7845H41.4411L0 0ZM72.5219 20.6455H118.403L133.203 45.715H162.804L148.004 70.7845H102.257L72.5219 20.6455Z`})})}var i,a=e((()=>{i=n(),r.__docgenInfo={description:`AdelanteMark — the canonical Adelante mark, as a single 2-path SVG.

Fill is \`currentColor\` so the mark recolors via the parent's \`color\`
CSS property. No inline hex, no \`<defs>\`, no \`<style>\` — recoloring is
the consumer's job (see \`~/Desktop/ICON.md\` §2 for the three
appearance-mode recipes: Light / Dark / Tinted).

One mark, every project, every size, every appearance mode:

  • Default (light)  →  green-100 on white / page bg
  • Dark             →  black on green-100
  • Tinted           →  #111 on #F3F3F3

Source artwork: \`~/Desktop/adelante-icon.svg\` (currentColor-fill).
iOS parity: the same path coordinates render the AppIcon at 60% canvas
width (see ICON.md §4).

**Don't** override the \`fill\` attribute inline — recolor by setting
\`color:\` on the parent. Otherwise every appearance mode needs its own
copy of the SVG.`,methods:[],displayName:`AdelanteMark`}})),o,s,c,l,u,d,f;e((()=>{t(),a(),o=n(),s={title:`Nuevos/AdelanteMark`,component:r,parameters:{layout:`centered`,docs:{description:{component:"AdelanteMark — the canonical brand mark, a 2-path SVG with `fill='currentColor'`. Recolor via the parent's `color` CSS property; never override the fill attribute. Three appearance modes (Light / Dark / Tinted) compose the mark with different backgrounds; the mark itself is the same path coords in every case. Spec: `~/Desktop/ICON.md`."}}}},c=({bg:e,color:t,label:n,children:r})=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,o.jsx)(`div`,{style:{background:e,color:t,padding:`20% 16%`,borderRadius:24,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:128,height:128,boxSizing:`border-box`},children:r}),(0,o.jsx)(`span`,{style:{fontSize:12,color:`var(--ds-color-gray-500)`,fontFamily:`var(--ds-font-family)`},children:n})]}),l={render:()=>(0,o.jsx)(`div`,{style:{padding:32},children:(0,o.jsx)(r,{style:{color:`var(--ds-color-green-100)`,width:160}})})},u={name:`Three appearance modes`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:32,padding:32},children:[(0,o.jsx)(c,{bg:`#FFFFFF`,color:`var(--ds-color-green-100)`,label:`Light`,children:(0,o.jsx)(r,{style:{width:96}})}),(0,o.jsx)(c,{bg:`var(--ds-color-green-100)`,color:`#000000`,label:`Dark`,children:(0,o.jsx)(r,{style:{width:96}})}),(0,o.jsx)(c,{bg:`#F3F3F3`,color:`#111111`,label:`Tinted`,children:(0,o.jsx)(r,{style:{width:96}})})]})},d={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-end`,gap:24,padding:32,color:`var(--ds-color-green-100)`},children:[(0,o.jsx)(r,{style:{width:32}}),(0,o.jsx)(r,{style:{width:64}}),(0,o.jsx)(r,{style:{width:128}}),(0,o.jsx)(r,{style:{width:256}})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32
  }}>
      <AdelanteMark style={{
      color: "var(--ds-color-green-100)",
      width: 160
    }} />
    </div>
}`,...l.parameters?.docs?.source},description:{story:`Default in-app brand mark — green on whatever surface.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Three appearance modes",
  render: () => <div style={{
    display: "flex",
    gap: 32,
    padding: 32
  }}>
      <Frame bg="#FFFFFF" color="var(--ds-color-green-100)" label="Light">
        <AdelanteMark style={{
        width: 96
      }} />
      </Frame>
      <Frame bg="var(--ds-color-green-100)" color="#000000" label="Dark">
        <AdelanteMark style={{
        width: 96
      }} />
      </Frame>
      <Frame bg="#F3F3F3" color="#111111" label="Tinted">
        <AdelanteMark style={{
        width: 96
      }} />
      </Frame>
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Three appearance modes side-by-side. The padding ratios (20% vertical /
16% horizontal) match the iOS AppIcon's safe-zone proportions so the
web and native marks stay in sync.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "flex-end",
    gap: 24,
    padding: 32,
    color: "var(--ds-color-green-100)"
  }}>
      <AdelanteMark style={{
      width: 32
    }} />
      <AdelanteMark style={{
      width: 64
    }} />
      <AdelanteMark style={{
      width: 128
    }} />
      <AdelanteMark style={{
      width: 256
    }} />
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Scale showcase — same mark at favicon, in-app, and hero sizes. The
SVG path is identical in every case; only the wrapper width changes.`,...d.parameters?.docs?.description}}},f=[`Default`,`AppearanceModes`,`Scale`]}))();export{u as AppearanceModes,l as Default,d as Scale,f as __namedExportsOrder,s as default};