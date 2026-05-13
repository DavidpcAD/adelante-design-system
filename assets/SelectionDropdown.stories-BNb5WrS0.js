import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-DaLCRA3n.js";import{n,t as r}from"./SelectionDropdown-D4wm0YOy.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`Sistema de Diseño/SelectionDropdown`,component:r,parameters:{layout:`centered`},decorators:[e=>(0,i.jsx)(`div`,{style:{width:360,paddingTop:320},children:(0,i.jsx)(e,{})})]},o=[{code:`CON-110-220`,name:`CONECTOR ADAPTADOR HEMBRA EAGLE 110V SALIDA MACHO EAGLE 220V`},{code:`LAD-COMUN`,name:`LADRILLO COMÚN`},{code:`LAD-PERFO`,name:`LADRILLO PERFORADO`},{code:`CEM-50KG`,name:`CEMENTO PORTLAND 50KG`},{code:`VAR-12MM`,name:`VARILLA DE HIERRO 12MM`}],s={args:{items:o,onSelect:e=>console.log(`selected`,e)}},c={args:{items:o,triggerLabel:`Agregar material`,searchPlaceholder:`Buscar material…`,onSelect:e=>console.log(`selected`,e)}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_CATALOG,
    onSelect: item => console.log("selected", item)
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_CATALOG,
    triggerLabel: "Agregar material",
    searchPlaceholder: "Buscar material…",
    onSelect: item => console.log("selected", item)
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`CustomLabel`]}))();export{c as CustomLabel,s as Default,l as __namedExportsOrder,a as default};