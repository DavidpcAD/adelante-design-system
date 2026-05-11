import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-DaLCRA3n.js";import{n,t as r}from"./SearchBar-B-xWjClQ.js";var i,a,o,s,c,l,u,d,f;e((()=>{n(),i=t(),a={title:`Components/SearchBar`,component:r,parameters:{layout:`centered`},argTypes:{layout:{control:{type:`inline-radio`},options:[`icon`,`normal`,`label`,`expanded`]},state:{control:{type:`inline-radio`},options:[`standard`,`pressed`]}}},o=e=>(0,i.jsx)(`div`,{style:{width:360},children:(0,i.jsx)(e,{})}),s={args:{layout:`icon`,state:`standard`,onClick:()=>console.log(`tap`)}},c={args:{layout:`icon`,state:`pressed`,onClick:()=>console.log(`tap`)}},l={args:{layout:`normal`,state:`standard`,placeholder:`Buscar`},decorators:[o]},u={args:{layout:`label`,state:`standard`,value:`LADRILLO`,onChange:()=>{},onClose:()=>console.log(`close`)},decorators:[o]},d={args:{layout:`expanded`,state:`standard`,value:`LADRILLO`,onChange:()=>{},onClose:()=>console.log(`close`),suggestions:[{id:`1`,name:`LADRILLO`},{id:`2`,name:`LADRILLO LABEL`},{id:`3`,name:`LABEL LADRILLO`},{id:`4`,name:`LABEL LADRILLO`}],onPick:e=>console.log(`pick`,e)},decorators:[o]},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "icon",
    state: "standard",
    onClick: () => console.log("tap")
  }
}`,...s.parameters?.docs?.source},description:{story:`layout=icon, state=standard`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "icon",
    state: "pressed",
    onClick: () => console.log("tap")
  }
}`,...c.parameters?.docs?.source},description:{story:`layout=icon, state=pressed (también se aplica auto al :active)`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "normal",
    state: "standard",
    placeholder: "Buscar"
  },
  decorators: [wrap]
}`,...l.parameters?.docs?.source},description:{story:`layout=normal: pill vacío sin texto ni close`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "label",
    state: "standard",
    value: "LADRILLO",
    onChange: () => {},
    onClose: () => console.log("close")
  },
  decorators: [wrap]
}`,...u.parameters?.docs?.source},description:{story:`layout=label: pill con valor + close X`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "expanded",
    state: "standard",
    value: "LADRILLO",
    onChange: () => {},
    onClose: () => console.log("close"),
    suggestions: [{
      id: "1",
      name: "LADRILLO"
    }, {
      id: "2",
      name: "LADRILLO LABEL"
    }, {
      id: "3",
      name: "LABEL LADRILLO"
    }, {
      id: "4",
      name: "LABEL LADRILLO"
    }],
    onPick: s => console.log("pick", s)
  },
  decorators: [wrap]
}`,...d.parameters?.docs?.source},description:{story:`layout=expanded: pill + panel de sugerencias debajo, con highlight semibold del match`,...d.parameters?.docs?.description}}},f=[`IconStandard`,`IconPressed`,`Normal`,`Label`,`Expanded`]}))();export{d as Expanded,c as IconPressed,s as IconStandard,u as Label,l as Normal,f as __namedExportsOrder,a as default};