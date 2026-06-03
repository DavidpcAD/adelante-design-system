import{n as e,o as t}from"./chunk.js";import{N as n}from"./iframe.js";import{t as r}from"./jsx-runtime.js";import{n as i,t as a}from"./SelectionDropdown.js";var o,s,c,l,u,d,f;e((()=>{o=t(n()),i(),s=r(),c={title:`Nav/SelectionDropdown`,component:a,parameters:{layout:`centered`},decorators:[e=>(0,s.jsx)(`div`,{style:{width:400,padding:24,background:`#f3f3f3`},children:(0,s.jsx)(e,{})})]},l=[{label:`LADRILLO`,onClick:()=>console.log(`Ladrillo`)},{label:`CEMENTO`,onClick:()=>console.log(`Cemento`)},{label:`VARILLA`,onClick:()=>console.log(`Varilla`)},{label:`ARENA`,onClick:()=>console.log(`Arena`)}],u={render:e=>{let[t,n]=(0,o.useState)(!1);return(0,s.jsx)(a,{...e,isOpen:t,onToggle:()=>n(!t)})},args:{label:`Tipo de material`,items:l}},d={render:e=>{let[t,n]=(0,o.useState)(!0);return(0,s.jsx)(a,{...e,isOpen:t,onToggle:()=>n(!t)})},args:{label:`Tipo de material`,items:l}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <SelectionDropdown {...args} isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />;
  },
  args: {
    label: "Tipo de material",
    items: SAMPLE_ITEMS
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <SelectionDropdown {...args} isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />;
  },
  args: {
    label: "Tipo de material",
    items: SAMPLE_ITEMS
  }
}`,...d.parameters?.docs?.source}}},f=[`Compressed`,`Expanded`]}))();export{u as Compressed,d as Expanded,f as __namedExportsOrder,c as default};