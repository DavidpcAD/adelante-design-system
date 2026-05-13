import{n as e}from"./chunk-jRWAZmH_.js";import{P as t}from"./iframe-DFWOD8j3.js";import{t as n}from"./jsx-runtime-DaLCRA3n.js";import{n as r,t as i}from"./Icon-DIENrMoM.js";var a,o,s,c,l,u,d,f;e((()=>{t(),r(),a=n(),o=`home.user.folder.open.arrow-right.back.search.go.check.list.boleta.traslado.entrega.sin-stock.completado.incompleto.pendiente.sin-autorizar.filter.close.edit.info.plus.minus.delete.place.alert.remove.calculator.cuadrillas.rol`.split(`.`),s={home:`Home`,user:`User`,folder:`Folder`,open:`Open`,"arrow-right":`Arrow`,back:`Back`,search:`Lens`,go:`Go`,check:`Good`,list:`List`,boleta:`Boleta`,traslado:`Traslado`,entrega:`Entrega`,"sin-stock":`Sin stock`,completado:`Completado`,incompleto:`Incompleto`,pendiente:`Pendiente`,"sin-autorizar":`Sin autorizar`,filter:`Filter`,close:`Close`,edit:`Edit`,info:`Info`,plus:`Add`,minus:`Minus`,delete:`Delete`,place:`Place`,alert:`Warning`,remove:`Remove`,calculator:`Calculator`,cuadrillas:`Cuadrillas`,rol:`Rol`},c={title:`Sistema de Diseño/Icon`,component:i,tags:[`autodocs`],argTypes:{name:{control:`select`,options:o},size:{control:`select`,options:[`sm`,`md`,`lg`]}},args:{name:`home`,size:`md`}},l={},u={name:`Catálogo completo (Figma)`,render:()=>(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 1fr)`,gap:16,padding:16,background:`var(--ds-color-surface)`},children:o.map(e=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8,padding:12,background:`white`,border:`1px solid var(--ds-color-gray-100)`,borderRadius:8},children:[(0,a.jsx)(i,{name:e,size:`lg`}),(0,a.jsx)(`code`,{style:{fontSize:11,color:`var(--ds-color-gray-500)`},children:s[e]??e})]},e))})},d={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:24,padding:16},children:[(0,a.jsx)(i,{name:`home`,size:`sm`}),(0,a.jsx)(i,{name:`home`,size:`md`}),(0,a.jsx)(i,{name:`home`,size:`lg`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Catálogo completo (Figma)",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
    padding: 16,
    background: "var(--ds-color-surface)"
  }}>
      {ALL_ICONS.map(name => <div key={name} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      padding: 12,
      background: "white",
      border: "1px solid var(--ds-color-gray-100)",
      borderRadius: 8
    }}>
          <Icon name={name} size="lg" />
          <code style={{
        fontSize: 11,
        color: "var(--ds-color-gray-500)"
      }}>
            {ICON_LABELS[name] ?? name}
          </code>
        </div>)}
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 24,
    padding: 16
  }}>
      <Icon name="home" size="sm" />
      <Icon name="home" size="md" />
      <Icon name="home" size="lg" />
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Gallery`,`Sizes`]}))();export{l as Default,u as Gallery,d as Sizes,f as __namedExportsOrder,c as default};