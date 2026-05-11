import{n as e}from"./chunk-jRWAZmH_.js";import{N as t}from"./iframe-DEMm3koF.js";import{t as n}from"./jsx-runtime-DaLCRA3n.js";import{n as r,t as i}from"./Icon-Csw7hEx1.js";var a,o,s,c,l,u,d;e((()=>{t(),r(),a=n(),o=[`search`,`back`,`forward`,`close`,`filter`,`chevron-up`,`chevron-down`,`check`,`home`,`plus`,`minus`,`menu`,`alert`,`info`,`stock`,`arrow-right`],s={title:`Core/Icon`,component:i,tags:[`autodocs`],argTypes:{name:{control:`select`,options:o},size:{control:`select`,options:[`sm`,`md`,`lg`]}},args:{name:`home`,size:`md`}},c={},l={render:()=>(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 1fr)`,gap:16,padding:16},children:o.map(e=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8,padding:12,border:`1px solid var(--ds-color-gray-100)`,borderRadius:8},children:[(0,a.jsx)(i,{name:e,size:`lg`}),(0,a.jsx)(`code`,{style:{fontSize:12},children:e})]},e))})},u={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,a.jsx)(i,{name:`home`,size:`sm`}),(0,a.jsx)(i,{name:`home`,size:`md`}),(0,a.jsx)(i,{name:`home`,size:`lg`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
    padding: 16
  }}>
      {ALL_ICONS.map(name => <div key={name} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      padding: 12,
      border: "1px solid var(--ds-color-gray-100)",
      borderRadius: 8
    }}>
          <Icon name={name} size="lg" />
          <code style={{
        fontSize: 12
      }}>{name}</code>
        </div>)}
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 16
  }}>
      <Icon name="home" size="sm" />
      <Icon name="home" size="md" />
      <Icon name="home" size="lg" />
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Gallery`,`Sizes`]}))();export{c as Default,l as Gallery,u as Sizes,d as __namedExportsOrder,s as default};