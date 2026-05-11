import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{O as n}from"./iframe-DYrDNQZ3.js";import{t as r}from"./jsx-runtime-DaLCRA3n.js";import{n as i,t as a}from"./Icon-lskuy1Kj.js";function o({placeholder:e=`Buscar`,state:t=`standard`,layout:n=`label`,label:r=`LADRILLO`,value:i,onChange:o,options:l=[`Bodega A`,`Bodega B`,`Bodega C`],onOptionSelect:u}){let[d,f]=(0,s.useState)(n===`expanded`);return(0,c.jsxs)(`div`,{className:[`ds-search-bar`,`ds-search-bar--${n}`,`ds-search-bar--${t}`,d&&n===`expanded`?`ds-search-bar--open`:``].filter(Boolean).join(` `),children:[(0,c.jsxs)(`div`,{className:`ds-search-bar__inner`,children:[(0,c.jsx)(`span`,{className:`ds-search-bar__icon-wrap`,children:(0,c.jsx)(a,{name:`search`,size:`md`,color:`var(--ds-color-gray-400)`})}),n===`label`&&(0,c.jsxs)(`button`,{className:`ds-search-bar__label`,onClick:()=>f(e=>!e),type:`button`,children:[r,(0,c.jsx)(a,{name:`chevron-down`,size:`sm`})]}),n!==`icon`&&(0,c.jsx)(`input`,{className:`ds-search-bar__input`,type:`search`,placeholder:e,value:i,onChange:o}),n===`icon`&&(0,c.jsx)(`span`,{className:`ds-search-bar__icon-label`,children:r})]}),(n===`expanded`||n===`label`&&d)&&(0,c.jsx)(`div`,{className:`ds-search-bar__dropdown`,children:l.map(e=>(0,c.jsx)(`button`,{className:`ds-search-bar__option`,onClick:()=>{u?.(e),f(!1)},type:`button`,children:e},e))})]})}var s,c,l=e((()=>{s=t(n()),i(),c=r(),o.__docgenInfo={description:``,methods:[],displayName:`SearchBar`,props:{placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Buscar"`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`"standard" | "pressed"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"pressed"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},layout:{required:!1,tsType:{name:`union`,raw:`"label" | "normal" | "icon" | "expanded"`,elements:[{name:`literal`,value:`"label"`},{name:`literal`,value:`"normal"`},{name:`literal`,value:`"icon"`},{name:`literal`,value:`"expanded"`}]},description:``,defaultValue:{value:`"label"`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Label shown next to icon (e.g. warehouse name). layout=label required.`,defaultValue:{value:`"LADRILLO"`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`e`}],return:{name:`void`}}},description:``},options:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Expanded options list (for layout=expanded)`,defaultValue:{value:`["Bodega A", "Bodega B", "Bodega C"]`,computed:!1}},onOptionSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(option: string) => void`,signature:{arguments:[{type:{name:`string`},name:`option`}],return:{name:`void`}}},description:``}}}})),u,d,f,p,m,h,g,_,v;e((()=>{n(),l(),u=r(),d={title:`Core/SearchBar`,component:o,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`pressed`]},layout:{control:`select`,options:[`label`,`normal`,`icon`,`expanded`]}},args:{placeholder:`Buscar`,state:`standard`,layout:`label`,label:`LADRILLO`}},f={args:{layout:`label`}},p={args:{layout:`normal`}},m={args:{layout:`icon`}},h={args:{layout:`expanded`}},g={args:{state:`pressed`}},_={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,padding:16,background:`var(--ds-color-surface)`},children:[(0,u.jsx)(o,{layout:`label`,label:`LADRILLO`}),(0,u.jsx)(o,{layout:`normal`,placeholder:`Buscar producto...`}),(0,u.jsx)(o,{layout:`icon`,label:`Buscar`}),(0,u.jsx)(o,{layout:`expanded`,label:`Bodegas`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "label"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "normal"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "icon"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "expanded"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pressed"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: 16,
    background: "var(--ds-color-surface)"
  }}>
      <SearchBar layout="label" label="LADRILLO" />
      <SearchBar layout="normal" placeholder="Buscar producto..." />
      <SearchBar layout="icon" label="Buscar" />
      <SearchBar layout="expanded" label="Bodegas" />
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Label`,`Normal`,`IconOnly`,`Expanded`,`Pressed`,`AllLayouts`]}))();export{_ as AllLayouts,h as Expanded,m as IconOnly,f as Label,p as Normal,g as Pressed,v as __namedExportsOrder,d as default};