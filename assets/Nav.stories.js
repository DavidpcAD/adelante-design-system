import{n as e}from"./chunk.js";import{F as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{n as r,t as i}from"./Icon.js";import{c as a,n as o,r as s,t as c}from"./springs.js";function l({state:e=`standard`,navigation:t=`back`,onClick:n}){let r=t===`back`?`chevron-left`:`chevron-right`;return(0,p.jsx)(a.button,{className:`ds-nav-ctrl ds-nav-ctrl--${e} ds-nav-ctrl--${t}`,onClick:n,type:`button`,"aria-label":t===`back`?`Atrás`:`Adelante`,whileTap:{scale:.94},transition:o.snappy,children:(0,p.jsx)(i,{name:r,size:`lg`,color:`var(--ds-color-black)`})})}function u({state:e=`standard`,mode:t=`normal`,onClick:n}){let r=t===`close`?`chevron-down`:`filter`,s=t===`close`?`var(--ds-color-white)`:`var(--ds-color-black)`;return(0,p.jsx)(a.button,{className:`ds-filter-opt ds-filter-opt--${e} ds-filter-opt--${t}`,onClick:n,type:`button`,"aria-label":t===`close`?`Cerrar filtros`:`Filtros`,whileTap:{scale:.94},transition:o.snappy,children:(0,p.jsx)(i,{name:r,size:`lg`,color:s})})}function d({state:e=`standard`,mode:t=`open`,onClick:n}){let r=t===`close`?`chevron-down`:`chevrons-up-down`,s=t===`close`?`var(--ds-color-white)`:`var(--ds-color-black)`;return(0,p.jsx)(a.button,{className:`ds-toggle-menu ds-toggle-menu--${e} ds-toggle-menu--${t}`,onClick:n,type:`button`,"aria-label":t===`open`?`Abrir menú`:`Cerrar menú`,"aria-expanded":t===`open`,whileTap:{scale:.94},transition:o.snappy,children:(0,p.jsx)(i,{name:r,size:`lg`,color:s})})}function f({items:e=[],variant:t=`sidebar`}){return(0,p.jsx)(`nav`,{className:`ds-nav ds-nav--${t}`,children:e.map((e,t)=>(0,p.jsxs)(`a`,{href:e.href??`#`,className:`ds-nav__item${e.active?` ds-nav__item--active`:``}`,onClick:t=>{(!e.href||e.href===`#`)&&t.preventDefault(),e.onClick?.()},children:[e.icon&&(0,p.jsx)(i,{name:e.icon,size:`md`}),(0,p.jsx)(`span`,{children:e.label})]},t))})}var p,m=e((()=>{t(),s(),r(),c(),p=n(),l.__docgenInfo={description:``,methods:[],displayName:`NavigationControls`,props:{state:{required:!1,tsType:{name:`union`,raw:`"standard" | "pressed"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"pressed"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},navigation:{required:!1,tsType:{name:`union`,raw:`"back" | "go"`,elements:[{name:`literal`,value:`"back"`},{name:`literal`,value:`"go"`}]},description:``,defaultValue:{value:`"back"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},u.__docgenInfo={description:``,methods:[],displayName:`FilterOptions`,props:{state:{required:!1,tsType:{name:`union`,raw:`"standard" | "pressed"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"pressed"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},mode:{required:!1,tsType:{name:`union`,raw:`"normal" | "close"`,elements:[{name:`literal`,value:`"normal"`},{name:`literal`,value:`"close"`}]},description:``,defaultValue:{value:`"normal"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},d.__docgenInfo={description:``,methods:[],displayName:`ToggleMenu`,props:{state:{required:!1,tsType:{name:`union`,raw:`"standard" | "pressed"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"pressed"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},mode:{required:!1,tsType:{name:`union`,raw:`"open" | "close"`,elements:[{name:`literal`,value:`"open"`},{name:`literal`,value:`"close"`}]},description:``,defaultValue:{value:`"open"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},f.__docgenInfo={description:``,methods:[],displayName:`Nav`,props:{items:{required:!1,tsType:{name:`Array`,elements:[{name:`NavItem`}],raw:`NavItem[]`},description:``,defaultValue:{value:`[]`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"sidebar" | "topbar"`,elements:[{name:`literal`,value:`"sidebar"`},{name:`literal`,value:`"topbar"`}]},description:``,defaultValue:{value:`"sidebar"`,computed:!1}}}}})),h,g,_,v,y,b,x,S,C;e((()=>{t(),m(),h=n(),g={title:`Sistema de Diseño/Nav`,component:l,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`pressed`]},navigation:{control:`select`,options:[`back`,`go`]}},args:{state:`standard`,navigation:`back`}},_={args:{navigation:`back`}},v={args:{navigation:`go`}},y={args:{navigation:`back`,state:`pressed`}},b={name:`Navigation / All states`,render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,h.jsx)(l,{navigation:`back`,state:`standard`}),(0,h.jsx)(l,{navigation:`back`,state:`pressed`}),(0,h.jsx)(l,{navigation:`go`,state:`standard`}),(0,h.jsx)(l,{navigation:`go`,state:`pressed`})]})},x={name:`FilterOptions / All states`,render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,h.jsx)(u,{mode:`normal`,state:`standard`}),(0,h.jsx)(u,{mode:`normal`,state:`pressed`}),(0,h.jsx)(u,{mode:`close`,state:`standard`})]})},S={name:`ToggleMenu / All states`,render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,h.jsx)(d,{mode:`open`,state:`standard`}),(0,h.jsx)(d,{mode:`open`,state:`pressed`}),(0,h.jsx)(d,{mode:`close`,state:`standard`}),(0,h.jsx)(d,{mode:`close`,state:`pressed`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: "back"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: "go"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: "back",
    state: "pressed"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Navigation / All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <NavigationControls navigation="back" state="standard" />
      <NavigationControls navigation="back" state="pressed" />
      <NavigationControls navigation="go" state="standard" />
      <NavigationControls navigation="go" state="pressed" />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "FilterOptions / All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <FilterOptions mode="normal" state="standard" />
      <FilterOptions mode="normal" state="pressed" />
      <FilterOptions mode="close" state="standard" />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "ToggleMenu / All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <ToggleMenu mode="open" state="standard" />
      <ToggleMenu mode="open" state="pressed" />
      <ToggleMenu mode="close" state="standard" />
      <ToggleMenu mode="close" state="pressed" />
    </div>
}`,...S.parameters?.docs?.source}}},C=[`Back`,`Go`,`Pressed`,`NavigationAll`,`FilterOptionsAll`,`ToggleMenuAll`]}))();export{_ as Back,x as FilterOptionsAll,v as Go,b as NavigationAll,y as Pressed,S as ToggleMenuAll,C as __namedExportsOrder,g as default};