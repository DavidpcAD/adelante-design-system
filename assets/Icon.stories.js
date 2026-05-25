import{n as e}from"./chunk.js";import{M as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{n as r,t as i}from"./Icon.js";var a,o,s,c,l,u,d;e((()=>{t(),r(),a=n(),o=`home.filter.user.close.folder.edit.open.info.arrow-right.plus.back.minus.search.delete.go.place.good.alert.list.remove.boleta.calculator.traslado.cuadrillas.entrega.rol.sin-stock.options.completado.menu.incompleto.pendiente.sin-autorizar`.split(`.`),s={home:`Home`,filter:`Filter`,user:`User`,close:`Close`,folder:`Folder`,edit:`Edit`,open:`Open`,info:`Info`,"arrow-right":`Arrow`,plus:`Add`,back:`Back`,minus:`Minus`,search:`Lens`,delete:`Delete`,go:`Go`,place:`place`,good:`Good`,alert:`Warning`,list:`List`,remove:`Remove`,boleta:`Boleta`,calculator:`Calculator`,traslado:`Traslado`,cuadrillas:`Cuadrillas`,entrega:`Entrega`,rol:`Rol`,"sin-stock":`Sin stock`,options:`options`,completado:`Completado`,menu:`menu`,incompleto:`Incompleto`,pendiente:`Pendiente`,"sin-autorizar":`Sin autorizar`},c={title:`Icons/Icon`,component:i,tags:[`autodocs`],argTypes:{name:{control:`select`,options:o},size:{control:`select`,options:[`sm`,`md`,`lg`]}},args:{name:`home`,size:`md`}},l={},u={name:`Catálogo completo (Figma)`,render:()=>(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 1fr)`,gap:16,padding:16,background:`var(--ds-color-surface)`},children:o.map(e=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8,padding:12,background:`white`,border:`1px solid var(--ds-color-gray-100)`,borderRadius:8},children:[(0,a.jsx)(i,{name:e,size:`lg`}),(0,a.jsx)(`code`,{style:{fontSize:11,color:`var(--ds-color-gray-500)`},children:s[e]??e})]},e))})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Gallery`]}))();export{l as Default,u as Gallery,d as __namedExportsOrder,c as default};