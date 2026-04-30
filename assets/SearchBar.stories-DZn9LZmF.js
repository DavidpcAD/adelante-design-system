import{n as e}from"./chunk-DnJy8xQt.js";import{O as t}from"./iframe-D0hs_zaM.js";import{t as n}from"./jsx-runtime-BGU0mfus.js";function r({placeholder:e=`Buscar...`,state:t=`standard`,layout:n=`label`,value:r,onChange:a}){return(0,i.jsxs)(`div`,{className:`search-bar search-bar--${t} search-bar--${n}`,children:[(0,i.jsx)(`span`,{className:`search-bar__icon`,children:`🔍`}),n!==`icon`&&(0,i.jsx)(`input`,{className:`search-bar__input`,type:`text`,placeholder:e,value:r,onChange:a})]})}var i,a=e((()=>{t(),i=n(),r.__docgenInfo={description:``,methods:[],displayName:`SearchBar`,props:{placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Buscar..."`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`"standard" | "pressed"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"pressed"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}},layout:{required:!1,tsType:{name:`union`,raw:`"label" | "normal" | "icon"`,elements:[{name:`literal`,value:`"label"`},{name:`literal`,value:`"normal"`},{name:`literal`,value:`"icon"`}]},description:``,defaultValue:{value:`"label"`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`e`}],return:{name:`void`}}},description:``}}}})),o,s,c,l,u,d;e((()=>{a(),o={title:`Core/SearchBar`,component:r,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`standard`,`pressed`]},layout:{control:`select`,options:[`label`,`normal`,`icon`]}},args:{placeholder:`Buscar...`,state:`standard`,layout:`label`}},s={args:{layout:`label`}},c={args:{layout:`normal`}},l={args:{layout:`icon`}},u={args:{state:`pressed`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "label"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "normal"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "icon"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pressed"
  }
}`,...u.parameters?.docs?.source}}},d=[`Label`,`Normal`,`IconOnly`,`Pressed`]}))();export{l as IconOnly,s as Label,c as Normal,u as Pressed,d as __namedExportsOrder,o as default};