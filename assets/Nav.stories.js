import{n as e}from"./chunk.js";import{F as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{n as r,t as i}from"./Icon.js";function a({state:e=`standard`,navigation:t=`back`,onClick:n}){let r=t===`back`?`chevron-left`:`chevron-right`,a=e===`pressed`?`var(--ds-color-white)`:`var(--ds-color-black)`;return(0,l.jsx)(`button`,{className:`ds-nav-ctrl ds-nav-ctrl--${e} ds-nav-ctrl--${t}`,onClick:n,type:`button`,"aria-label":t===`back`?`Atrás`:`Adelante`,children:(0,l.jsx)(i,{name:r,size:`lg`,color:a})})}function o({state:e=`standard`,mode:t=`normal`,onClick:n}){let r=t===`close`?`chevron-down`:`filter`,a=t===`close`?`var(--ds-color-white)`:`var(--ds-color-black)`;return(0,l.jsx)(`button`,{className:`ds-filter-opt ds-filter-opt--${e} ds-filter-opt--${t}`,onClick:n,type:`button`,"aria-label":t===`close`?`Cerrar filtros`:`Filtros`,children:(0,l.jsx)(i,{name:r,size:`lg`,color:a})})}function s({state:e=`standard`,mode:t=`open`,onClick:n}){let r=t===`close`?`chevron-down`:`chevrons-up-down`,a=t===`close`?`var(--ds-color-white)`:`var(--ds-color-black)`;return(0,l.jsx)(`button`,{className:`ds-toggle-menu ds-toggle-menu--${e} ds-toggle-menu--${t}`,onClick:n,type:`button`,"aria-label":t===`open`?`Abrir menú`:`Cerrar menú`,"aria-expanded":t===`open`,children:(0,l.jsx)(i,{name:r,size:`lg`,color:a})})}function c({items:e=[],variant:t=`sidebar`}){return(0,l.jsx)(`nav`,{className:`ds-nav ds-nav--${t}`,children:e.map((e,t)=>(0,l.jsxs)(`a`,{href:e.href??`#`,className:`ds-nav__item${e.active?` ds-nav__item--active`:``}`,onClick:t=>{(!e.href||e.href===`#`)&&t.preventDefault(),e.onClick?.()},children:[e.icon&&(0,l.jsx)(i,{name:e.icon,size:`md`}),(0,l.jsx)(`span`,{children:e.label})]},t))})}var l,u=e((()=>{t(),r(),l=n(),a.__docgenInfo={description:``,methods:[],displayName:`NavigationControls`,props:{state:{required:!1,tsType:{name:`union`,raw:`"standard" | "pressed"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"pressed"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},navigation:{required:!1,tsType:{name:`union`,raw:`"back" | "go"`,elements:[{name:`literal`,value:`"back"`},{name:`literal`,value:`"go"`}]},description:``,defaultValue:{value:`"back"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},o.__docgenInfo={description:``,methods:[],displayName:`FilterOptions`,props:{state:{required:!1,tsType:{name:`union`,raw:`"standard" | "pressed"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"pressed"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},mode:{required:!1,tsType:{name:`union`,raw:`"normal" | "close"`,elements:[{name:`literal`,value:`"normal"`},{name:`literal`,value:`"close"`}]},description:``,defaultValue:{value:`"normal"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},s.__docgenInfo={description:``,methods:[],displayName:`ToggleMenu`,props:{state:{required:!1,tsType:{name:`union`,raw:`"standard" | "pressed"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"pressed"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},mode:{required:!1,tsType:{name:`union`,raw:`"open" | "close"`,elements:[{name:`literal`,value:`"open"`},{name:`literal`,value:`"close"`}]},description:``,defaultValue:{value:`"open"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},c.__docgenInfo={description:``,methods:[],displayName:`Nav`,props:{items:{required:!1,tsType:{name:`Array`,elements:[{name:`NavItem`}],raw:`NavItem[]`},description:``,defaultValue:{value:`[]`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"sidebar" | "topbar"`,elements:[{name:`literal`,value:`"sidebar"`},{name:`literal`,value:`"topbar"`}]},description:``,defaultValue:{value:`"sidebar"`,computed:!1}}}}})),d,f,p,m,h,g,_,v,y;e((()=>{t(),u(),d=n(),f={title:`Sistema de Diseño/Nav`,component:a,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`pressed`]},navigation:{control:`select`,options:[`back`,`go`]}},args:{state:`standard`,navigation:`back`}},p={args:{navigation:`back`}},m={args:{navigation:`go`}},h={args:{navigation:`back`,state:`pressed`}},g={name:`Navigation / All states`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,d.jsx)(a,{navigation:`back`,state:`standard`}),(0,d.jsx)(a,{navigation:`back`,state:`pressed`}),(0,d.jsx)(a,{navigation:`go`,state:`standard`}),(0,d.jsx)(a,{navigation:`go`,state:`pressed`})]})},_={name:`FilterOptions / All states`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,d.jsx)(o,{mode:`normal`,state:`standard`}),(0,d.jsx)(o,{mode:`normal`,state:`pressed`}),(0,d.jsx)(o,{mode:`close`,state:`standard`})]})},v={name:`ToggleMenu / All states`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,d.jsx)(s,{mode:`open`,state:`standard`}),(0,d.jsx)(s,{mode:`open`,state:`pressed`}),(0,d.jsx)(s,{mode:`close`,state:`standard`}),(0,d.jsx)(s,{mode:`close`,state:`pressed`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: "back"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: "go"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: "back",
    state: "pressed"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Back`,`Go`,`Pressed`,`NavigationAll`,`FilterOptionsAll`,`ToggleMenuAll`]}))();export{p as Back,_ as FilterOptionsAll,m as Go,g as NavigationAll,h as Pressed,v as ToggleMenuAll,y as __namedExportsOrder,f as default};