import{n as e}from"./chunk.js";import{N as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{n as r,t as i}from"./RolesV2.js";var a,o,s,c,l,u,d,f,p,m,h,g;e((()=>{t(),r(),a=n(),o={title:`Screens/RolesV02`,component:i,parameters:{layout:`fullscreen`,backgrounds:{default:`light`,values:[{name:`light`,value:`#e5e5e5`}]}}},s=({children:e})=>(0,a.jsx)(`div`,{style:{width:`100vw`,minHeight:`100dvh`,background:`#e5e5e5`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:24},children:e}),c={name:`🖥 R01 — Base`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{})})},l={name:`⋮ R02 — Opciones de rol`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{initialKebabOpen:!0})})},u={name:`🔎 R03.1 — Search cerrado`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{})})},d={name:`🔍 R03.2 — Búsqueda expandida`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{initialSearchOpen:!0})})},f={name:`✏️ R04 — Editar rol`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{initialModal:`edit`})})},p={name:`➕ R05 — Nuevo rol`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{initialModal:`create`})})},m={name:`🟢 R06 — Agregar permiso (pill)`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{initialAddPermStage:`pill`,initialActiveRoleId:`lider-muros`})})},h={name:`📝 R07 — Agregar permiso (popover)`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{initialAddPermStage:`popover`,initialActiveRoleId:`lider-muros`})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "🖥 R01 — Base",
  render: () => <Frame>
      <RolesV2 />
    </Frame>
}`,...c.parameters?.docs?.source},description:{story:`🖥 R01 — Base. Sidebar colapsado, grupo "Líder/Losa" activo, search cerrado.
 · Click kebab → popover R02
 · Click search icon → expande a R03
 · Click FAB list → morph a pill R06 → click pill → popover R07
 · Click + topbar → modal NUEVO ROL (R05)`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "⋮ R02 — Opciones de rol",
  render: () => <Frame>
      <RolesV2 initialKebabOpen />
    </Frame>
}`,...l.parameters?.docs?.source},description:{story:`⋮ R02 — Kebab abierto (Editar / Duplicar / Eliminar disabled).`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "🔎 R03.1 — Search cerrado",
  render: () => <Frame>
      <RolesV2 />
    </Frame>
}`,...u.parameters?.docs?.source},description:{story:`🔎 R03.1 — Search cerrado (icono DS).
 Estado idéntico a R01: SearchBar layout="icon" en la esquina superior
 derecha del card. Click sobre el icono → expande a R03.2.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "🔍 R03.2 — Búsqueda expandida",
  render: () => <Frame>
      <RolesV2 initialSearchOpen />
    </Frame>
}`,...d.parameters?.docs?.source},description:{story:`🔍 R03.2 — Search expandido full-width (DS SearchBar layout="label").
 La pill ocupa el ancho del body del card; el header "Boletas de salida"
 y la lista de permisos se desplazan hacia abajo ~90px (motion spring).`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "✏️ R04 — Editar rol",
  render: () => <Frame>
      <RolesV2 initialModal="edit" />
    </Frame>
}`,...f.parameters?.docs?.source},description:{story:`✏️ R04 — Modal "Líder de losa" (edit), Apps + Nombre + Área prellenados.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "➕ R05 — Nuevo rol",
  render: () => <Frame>
      <RolesV2 initialModal="create" />
    </Frame>
}`,...p.parameters?.docs?.source},description:{story:`➕ R05 — Modal "NUEVO ROL" (create), placeholders vacíos.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "🟢 R06 — Agregar permiso (pill)",
  render: () => <Frame>
      <RolesV2 initialAddPermStage="pill" initialActiveRoleId="lider-muros" />
    </Frame>
}`,...m.parameters?.docs?.source},description:{story:`🟢 R06 — FAB inferior morphed a "+ Agregar permiso" pill negra.
 Grupo "Muros" activo (Maestro de obras / Líder).`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "📝 R07 — Agregar permiso (popover)",
  render: () => <Frame>
      <RolesV2 initialAddPermStage="popover" initialActiveRoleId="lider-muros" />
    </Frame>
}`,...h.parameters?.docs?.source},description:{story:`📝 R07 — Popover "Agregar permiso" abierto sobre la pill.`,...h.parameters?.docs?.description}}},g=[`Desktop`,`KebabOpen`,`SearchClosed`,`SearchOpen`,`EditRole`,`CreateRole`,`AddPermPill`,`AddPermPopover`]}))();export{m as AddPermPill,h as AddPermPopover,p as CreateRole,c as Desktop,f as EditRole,l as KebabOpen,u as SearchClosed,d as SearchOpen,g as __namedExportsOrder,o as default};