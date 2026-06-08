import{n as e}from"./chunk.js";import{N as t}from"./iframe.js";import{t as n}from"./jsx-runtime.js";import{n as r,t as i}from"./Usuarios.js";var a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{t(),r(),a=n(),o={title:`Screens/Usuarios`,component:i,parameters:{layout:`fullscreen`,backgrounds:{default:`light`,values:[{name:`light`,value:`#e5e5e5`}]}}},s=({children:e})=>(0,a.jsx)(`div`,{style:{width:`100vw`,minHeight:`100dvh`,background:`#e5e5e5`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:24},children:e}),c={name:`🖥 U01 — Desktop`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{})})},l={name:`🗂 U02 — Sidebar colapsado`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{initialCollapsed:!0})})},u={name:`🔎 U03 — Filtro abierto`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{initialCollapsed:!0,initialFilter:`rol`})})},d={name:`📋 U04–U07 — Drawer abierto`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{initialCollapsed:!0,initialDrawer:!0})})},f={name:`✏️ U08–U011 — Drawer editar`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{initialCollapsed:!0,initialEditMode:!0})})},p={name:`➕ U012–U017 — Nuevo usuario`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{initialCollapsed:!0,initialCreateMode:!0})})},m={name:`usuariosV02`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{initialCollapsed:!0,initialCreateMode:!0,stepperFooter:!0})})},h={name:`drawerViewV02`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{initialCollapsed:!0,initialDrawer:!0,stepperFooter:!0})})},g={name:`editModeV02`,render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(i,{initialCollapsed:!0,initialEditMode:!0,stepperFooter:!0})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "🖥 U01 — Desktop",
  render: () => <Frame>
      <Usuarios />
    </Frame>
}`,...c.parameters?.docs?.source},description:{story:`🖥 U01 — Lista base, sidebar expandido.

 • Hover sobre badge verde → tooltip "Activo".
 • Hover sobre badge gris  → tooltip "Inactivo".
 • Hover sobre header de columna → pill negro (U02).
 • Click sobre header → popover de filtrado (U03).
 • Hover sobre kebab ⋮ → chip "Editar" (U02 fila 1).
 • Hover sobre fila → fondo gris (U02 fila 4).
 • Click sobre fila → drawer derecho (U04/U05/U06/U07).`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "🗂 U02 — Sidebar colapsado",
  render: () => <Frame>
      <Usuarios initialCollapsed />
    </Frame>
}`,...l.parameters?.docs?.source},description:{story:`🗂 U02 — Sidebar colapsado (icon-only).`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "🔎 U03 — Filtro abierto",
  render: () => <Frame>
      <Usuarios initialCollapsed initialFilter="rol" />
    </Frame>
}`,...u.parameters?.docs?.source},description:{story:`🔎 U03 — Popover de filtrado sobre columna "Rol".`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "📋 U04–U07 — Drawer abierto",
  render: () => <Frame>
      <Usuarios initialCollapsed initialDrawer />
    </Frame>
}`,...d.parameters?.docs?.source},description:{story:`📋 U04 — Drawer derecho abierto sobre detalle de Juan.
 Navegar entre tabs Personal / Puesto / Usuario con los chips
 o con los botones ◀ ▶ del footer.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "✏️ U08–U011 — Drawer editar",
  render: () => <Frame>
      <Usuarios initialCollapsed initialEditMode />
    </Frame>
}`,...f.parameters?.docs?.source},description:{story:`✏️ U08–U011 — Drawer en modo edición.
 Inputs editables, ToggleCards negros y footer Cancelar + Guardar.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "➕ U012–U017 — Nuevo usuario",
  render: () => <Frame>
      <Usuarios initialCollapsed initialCreateMode />
    </Frame>
}`,...p.parameters?.docs?.source},description:{story:`➕ U012–U017 — Drawer en modo creación.
 Header "NUEVO USUARIO", inputs vacíos con Placeholder/Label, CTA "Crear usuario".
 También accesible click → botón + arriba a la derecha en Usuarios.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "usuariosV02",
  render: () => <Frame>
      <Usuarios initialCollapsed initialCreateMode stepperFooter />
    </Frame>
}`,...m.parameters?.docs?.source},description:{story:`🧭 usuariosV02 — Copia de "Nuevo usuario" con footer stepper (U014–U017).
 Reemplaza el footer back/go por: ◀ back · ●○○○ stepper 4 dots · ▶ go.
 El dot activo indica el paso (Personal-Datos · Personal-Contacto · Puesto · Usuario).
 En el paso 4 (Usuario), ▶ envía el formulario (cierra el drawer).`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "drawerViewV02",
  render: () => <Frame>
      <Usuarios initialCollapsed initialDrawer stepperFooter />
    </Frame>
}`,...h.parameters?.docs?.source},description:{story:`👀 drawerViewV02 — Visualizar perfil (U04–U07) con footer stepper.
 Botón "Editar" permanece en el body; navegación entre páginas vía footer.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "editModeV02",
  render: () => <Frame>
      <Usuarios initialCollapsed initialEditMode stepperFooter />
    </Frame>
}`,...g.parameters?.docs?.source},description:{story:`✏️ editModeV02 — Editar perfil (U08–U011) con footer stepper.
 "Cancelar + Guardar" siguen en el body; stepper sólo indica posición.`,...g.parameters?.docs?.description}}},_=[`Desktop`,`Collapsed`,`FilterOpen`,`DrawerOpen`,`EditMode`,`CreateMode`,`UsuariosV02`,`DrawerViewV02`,`EditModeV02`]}))();export{l as Collapsed,p as CreateMode,c as Desktop,d as DrawerOpen,h as DrawerViewV02,f as EditMode,g as EditModeV02,u as FilterOpen,m as UsuariosV02,_ as __namedExportsOrder,o as default};