import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{O as n}from"./iframe-C-IoLm7i.js";import{t as r}from"./jsx-runtime-BGU0mfus.js";import{n as i,t as a}from"./Icon-Bo-n3Wqe.js";function o({label:e=`Button`,color:t,layout:n=`label`,icon:r,state:i=`standard`,variant:o,onClick:l,fullWidth:u=!1,type:d=`button`}){let f=t??(o?c[o]:`green`),p=i===`disabled`||f===`gray`,m=[`ds-btn`,`ds-btn--${f}`,`ds-btn--${i}`,n===`label`?``:`ds-btn--layout-${n}`,u?`ds-btn--full`:``].filter(Boolean).join(` `),h=r?(0,s.jsx)(a,{name:r,size:`md`,color:`currentColor`}):null;return(0,s.jsxs)(`button`,{type:d,className:m,disabled:p,onClick:p?void 0:l,"aria-disabled":p,children:[(n===`icon-left`||n===`icon`)&&h,n!==`icon`&&e&&(0,s.jsx)(`span`,{className:`ds-btn__label`,children:e}),n===`icon-right`&&h]})}var s,c,l=t((()=>{n(),i(),s=r(),c={primary:`green`,secondary:`black`,disabled:`gray`},o.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{label:{required:!1,tsType:{name:`string`},description:`Button label text`,defaultValue:{value:`"Button"`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`"green" | "red" | "white" | "black" | "gray"`,elements:[{name:`literal`,value:`"green"`},{name:`literal`,value:`"red"`},{name:`literal`,value:`"white"`},{name:`literal`,value:`"black"`},{name:`literal`,value:`"gray"`}]},description:`Background color — maps directly to Figma Color prop`},layout:{required:!1,tsType:{name:`union`,raw:`"label" | "icon-left" | "icon-right" | "icon"`,elements:[{name:`literal`,value:`"label"`},{name:`literal`,value:`"icon-left"`},{name:`literal`,value:`"icon-right"`},{name:`literal`,value:`"icon"`}]},description:`Icon placement`,defaultValue:{value:`"label"`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`| "search"
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
| "arrow-right"`,elements:[{name:`literal`,value:`"search"`},{name:`literal`,value:`"back"`},{name:`literal`,value:`"forward"`},{name:`literal`,value:`"close"`},{name:`literal`,value:`"filter"`},{name:`literal`,value:`"chevron-up"`},{name:`literal`,value:`"chevron-down"`},{name:`literal`,value:`"check"`},{name:`literal`,value:`"home"`},{name:`literal`,value:`"plus"`},{name:`literal`,value:`"minus"`},{name:`literal`,value:`"menu"`},{name:`literal`,value:`"alert"`},{name:`literal`,value:`"info"`},{name:`literal`,value:`"stock"`},{name:`literal`,value:`"arrow-right"`}]},description:`Icon name (from Icon component)`},state:{required:!1,tsType:{name:`union`,raw:`"standard" | "pressed" | "disabled"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"pressed"`},{name:`literal`,value:`"disabled"`}]},description:`Interaction state`,defaultValue:{value:`"standard"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"primary" | "secondary" | "disabled"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"disabled"`}]},description:`@deprecated Use color instead`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:`Full-width block`,defaultValue:{value:`false`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`"button" | "submit" | "reset"`,elements:[{name:`literal`,value:`"button"`},{name:`literal`,value:`"submit"`},{name:`literal`,value:`"reset"`}]},description:``,defaultValue:{value:`"button"`,computed:!1}}}}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;t((()=>{u=e(n()),l(),d=r(),f={title:`Core/Button`,component:o,tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`green`,`red`,`white`,`black`,`gray`]},layout:{control:`select`,options:[`label`,`icon-left`,`icon-right`,`icon`]},state:{control:`select`,options:[`standard`,`pressed`,`disabled`]},icon:{control:`select`,options:[`home`,`check`,`plus`,`back`,`forward`,`search`,`filter`]}},args:{label:`Confirmar`,color:`green`,layout:`label`,state:`standard`}},p={args:{color:`green`,label:`Confirmar`}},m={args:{color:`red`,label:`Cancelar`}},h={args:{color:`white`,label:`Volver`}},g={args:{color:`black`,label:`Continuar`}},_={args:{color:`gray`,label:`No disponible`}},v={args:{color:`green`,state:`pressed`,label:`Pressed`}},y={args:{state:`disabled`,label:`Disabled`}},b={args:{layout:`icon-left`,icon:`back`,label:`Volver`}},x={args:{layout:`icon-right`,icon:`forward`,label:`Siguiente`}},S={args:{layout:`icon`,icon:`plus`}},C={render:()=>(0,d.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, max-content)`,gap:16,padding:16},children:[`green`,`red`,`white`,`black`,`gray`].map(e=>(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(o,{color:e,label:`${e} standard`,state:`standard`}),(0,d.jsx)(o,{color:e,label:`${e} pressed`,state:`pressed`})]},e))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: "green",
    label: "Confirmar"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: "red",
    label: "Cancelar"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    color: "white",
    label: "Volver"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    color: "black",
    label: "Continuar"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    color: "gray",
    label: "No disponible"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    color: "green",
    state: "pressed",
    label: "Pressed"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    label: "Disabled"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "icon-left",
    icon: "back",
    label: "Volver"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "icon-right",
    icon: "forward",
    label: "Siguiente"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "icon",
    icon: "plus"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, max-content)",
    gap: 16,
    padding: 16
  }}>
      {(["green", "red", "white", "black", "gray"] as const).map(c => <React.Fragment key={c}>
          <Button color={c} label={\`\${c} standard\`} state="standard" />
          <Button color={c} label={\`\${c} pressed\`} state="pressed" />
        </React.Fragment>)}
    </div>
}`,...C.parameters?.docs?.source}}},w=[`Green`,`Red`,`White`,`Black`,`Gray`,`Pressed`,`Disabled`,`IconLeft`,`IconRight`,`IconOnly`,`AllVariants`]}))();export{C as AllVariants,g as Black,y as Disabled,_ as Gray,p as Green,b as IconLeft,S as IconOnly,x as IconRight,v as Pressed,m as Red,h as White,w as __namedExportsOrder,f as default};