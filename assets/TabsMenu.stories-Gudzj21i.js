import{n as e}from"./chunk-DnJy8xQt.js";import{O as t}from"./iframe-C-IoLm7i.js";import{t as n}from"./jsx-runtime-BGU0mfus.js";import{n as r,t as i}from"./Icon-Bo-n3Wqe.js";function a({label:e=`Tab`,state:t=`standard`,layout:n=`label`,icon:r=`home`,onClick:a}){let o=n===`label+icon`;return(0,c.jsxs)(`button`,{className:`ds-tabs-menu ds-tabs-menu--${t} ds-tabs-menu--${n.replace(`+`,`-`)}`,onClick:a,type:`button`,"aria-pressed":t===`pressed`,children:[o&&(0,c.jsx)(`span`,{className:`ds-tabs-menu__icon`,children:(0,c.jsx)(i,{name:r,size:`md`,color:`var(--ds-color-white)`})}),(0,c.jsx)(`span`,{className:`ds-tabs-menu__label`,children:e})]})}function o({label:e=`Filtro`,state:t=`active`,icon:n=`check`,onClick:r}){return(0,c.jsxs)(`button`,{className:`ds-filter-chip ds-filter-chip--${t}`,onClick:r,type:`button`,disabled:t===`disabled`,children:[(0,c.jsx)(i,{name:n,size:`sm`,color:t===`active`?`var(--ds-color-white)`:`var(--ds-color-gray-300)`}),(0,c.jsx)(`span`,{className:`ds-filter-chip__label`,children:e})]})}function s({chips:e=[]}){return(0,c.jsx)(`div`,{className:`ds-filter-bar`,children:e.map((e,t)=>(0,c.jsx)(o,{...e},t))})}var c,l=e((()=>{t(),r(),c=n(),a.__docgenInfo={description:``,methods:[],displayName:`TabsMenu`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Tab"`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`"standard" | "pressed"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"pressed"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},layout:{required:!1,tsType:{name:`union`,raw:`"label" | "label+icon"`,elements:[{name:`literal`,value:`"label"`},{name:`literal`,value:`"label+icon"`}]},description:``,defaultValue:{value:`"label"`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`| "search"
| "back"
| "forward"
| "close"
| "filter"
| "chevron-up"
| "chevron-down"
| "check"
| "home"
| "plus"
| "minus"
| "menu"
| "alert"
| "info"
| "stock"
| "arrow-right"`,elements:[{name:`literal`,value:`"search"`},{name:`literal`,value:`"back"`},{name:`literal`,value:`"forward"`},{name:`literal`,value:`"close"`},{name:`literal`,value:`"filter"`},{name:`literal`,value:`"chevron-up"`},{name:`literal`,value:`"chevron-down"`},{name:`literal`,value:`"check"`},{name:`literal`,value:`"home"`},{name:`literal`,value:`"plus"`},{name:`literal`,value:`"minus"`},{name:`literal`,value:`"menu"`},{name:`literal`,value:`"alert"`},{name:`literal`,value:`"info"`},{name:`literal`,value:`"stock"`},{name:`literal`,value:`"arrow-right"`}]},description:`Icon to show (layout must include icon)`,defaultValue:{value:`"home"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},o.__docgenInfo={description:``,methods:[],displayName:`TabFilterChip`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Filtro"`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`"active" | "disabled"`,elements:[{name:`literal`,value:`"active"`},{name:`literal`,value:`"disabled"`}]},description:``,defaultValue:{value:`"active"`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`| "search"
| "back"
| "forward"
| "close"
| "filter"
| "chevron-up"
| "chevron-down"
| "check"
| "home"
| "plus"
| "minus"
| "menu"
| "alert"
| "info"
| "stock"
| "arrow-right"`,elements:[{name:`literal`,value:`"search"`},{name:`literal`,value:`"back"`},{name:`literal`,value:`"forward"`},{name:`literal`,value:`"close"`},{name:`literal`,value:`"filter"`},{name:`literal`,value:`"chevron-up"`},{name:`literal`,value:`"chevron-down"`},{name:`literal`,value:`"check"`},{name:`literal`,value:`"home"`},{name:`literal`,value:`"plus"`},{name:`literal`,value:`"minus"`},{name:`literal`,value:`"menu"`},{name:`literal`,value:`"alert"`},{name:`literal`,value:`"info"`},{name:`literal`,value:`"stock"`},{name:`literal`,value:`"arrow-right"`}]},description:``,defaultValue:{value:`"check"`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},s.__docgenInfo={description:``,methods:[],displayName:`FilterBar`,props:{chips:{required:!1,tsType:{name:`Array`,elements:[{name:`TabFilterChipProps`}],raw:`TabFilterChipProps[]`},description:``,defaultValue:{value:`[]`,computed:!1}}}}})),u,d,f,p,m,h,g,_,v;e((()=>{t(),l(),u=n(),d={title:`Core/TabsMenu`,component:a,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`pressed`]},layout:{control:`select`,options:[`label`,`label+icon`]},icon:{control:`select`,options:[`home`,`check`,`stock`]}},args:{label:`Boleta`,state:`standard`,layout:`label+icon`,icon:`home`}},f={args:{layout:`label`}},p={args:{layout:`label+icon`}},m={args:{state:`pressed`}},h={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:16},children:[(0,u.jsx)(a,{label:`Boleta`,state:`standard`,layout:`label+icon`,icon:`home`}),(0,u.jsx)(a,{label:`Boleta`,state:`pressed`,layout:`label+icon`,icon:`home`}),(0,u.jsx)(a,{label:`Opciones`,state:`standard`,layout:`label`}),(0,u.jsx)(a,{label:`Opciones`,state:`pressed`,layout:`label`})]})},g={name:`TabFilterChip / All states`,render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12,padding:16},children:[(0,u.jsx)(o,{label:`Aprobado`,state:`active`,icon:`check`}),(0,u.jsx)(o,{label:`Denegado`,state:`disabled`,icon:`close`}),(0,u.jsx)(o,{label:`Pendiente`,state:`disabled`,icon:`alert`})]})},_={name:`FilterBar`,render:()=>(0,u.jsx)(s,{chips:[{label:`Aprobado`,state:`active`,icon:`check`},{label:`Denegado`,state:`disabled`,icon:`close`},{label:`Pendiente`,state:`disabled`,icon:`alert`}]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "label"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "label+icon"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pressed"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 16
  }}>
      <TabsMenu label="Boleta" state="standard" layout="label+icon" icon="home" />
      <TabsMenu label="Boleta" state="pressed" layout="label+icon" icon="home" />
      <TabsMenu label="Opciones" state="standard" layout="label" />
      <TabsMenu label="Opciones" state="pressed" layout="label" />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "TabFilterChip / All states",
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16
  }}>
      <TabFilterChip label="Aprobado" state="active" icon="check" />
      <TabFilterChip label="Denegado" state="disabled" icon="close" />
      <TabFilterChip label="Pendiente" state="disabled" icon="alert" />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "FilterBar",
  render: () => <FilterBar chips={[{
    label: "Aprobado",
    state: "active",
    icon: "check"
  }, {
    label: "Denegado",
    state: "disabled",
    icon: "close"
  }, {
    label: "Pendiente",
    state: "disabled",
    icon: "alert"
  }]} />
}`,..._.parameters?.docs?.source}}},v=[`Label`,`LabelWithIcon`,`Pressed`,`All`,`FilterChips`,`FilterBarExample`]}))();export{h as All,_ as FilterBarExample,g as FilterChips,f as Label,p as LabelWithIcon,m as Pressed,v as __namedExportsOrder,d as default};