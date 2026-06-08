import{n as e,o as t}from"./chunk.js";import{N as n}from"./iframe.js";import{t as r}from"./jsx-runtime.js";import{n as i,t as a}from"./Usuarios.js";import{n as o,t as s}from"./RolesV2.js";function c({initialScreen:e=`usuarios`,usuariosProps:t={},rolesProps:n={}}={}){let[r,i]=(0,l.useState)(e),[o,c]=(0,l.useState)(!1),d=()=>c(e=>!e);return r===`roles`?(0,u.jsx)(s,{...n,currentScreen:`roles`,onNavigate:i,sidebarOpen:o,onSidebarToggle:d}):(0,u.jsx)(a,{...t,currentScreen:`usuarios`,onNavigate:i,sidebarOpen:o,onSidebarToggle:d})}var l,u,d=e((()=>{l=t(n()),i(),o(),u=r(),c.__docgenInfo={description:`Prototipo unificado — combina Usuarios + RolesV2 en una sola experiencia
navegable. El sidebar de cada pantalla cambia entre ambas vía onNavigate.
Los roles asignados en Usuarios.UsuarioTab vienen de la lista compartida
(RolesV2/mock-data ROLE_GROUPS).`,methods:[],displayName:`Prototipo`}})),f,p,m,h,g,_;e((()=>{n(),d(),f=r(),p={title:`Screens/Prototipo`,component:c,parameters:{layout:`fullscreen`,backgrounds:{default:`light`,values:[{name:`light`,value:`#e5e5e5`}]}}},m=({children:e})=>(0,f.jsx)(`div`,{style:{width:`100vw`,minHeight:`100dvh`,background:`#e5e5e5`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:24},children:e}),h={name:`🧭 Prototipo — Usuarios + Roles`,render:()=>(0,f.jsx)(m,{children:(0,f.jsx)(c,{initialScreen:`usuarios`,usuariosProps:{initialCollapsed:!1,stepperFooter:!0}})})},g={name:`🪪 Arranca en Roles`,render:()=>(0,f.jsx)(m,{children:(0,f.jsx)(c,{initialScreen:`roles`,usuariosProps:{stepperFooter:!0}})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "🧭 Prototipo — Usuarios + Roles",
  render: () => <Frame>
      <Prototipo initialScreen="usuarios" usuariosProps={{
      initialCollapsed: false,
      stepperFooter: true
    }} />
    </Frame>
}`,...h.parameters?.docs?.source},description:{story:`🧭 Prototipo unificado — arranca en Usuarios.
 Click "ROLES" en el sidebar → navega a la pantalla RolesV2.
 Click "USUARIOS" en el sidebar de Roles → vuelve.
 Los chips de Roles en Usuarios.UsuarioTab vienen de RolesV2/ROLE_GROUPS.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "🪪 Arranca en Roles",
  render: () => <Frame>
      <Prototipo initialScreen="roles" usuariosProps={{
      stepperFooter: true
    }} />
    </Frame>
}`,...g.parameters?.docs?.source},description:{story:`🪪 Arranca en Roles. Click "USUARIOS" en el sidebar → navega a Usuarios.`,...g.parameters?.docs?.description}}},_=[`Default`,`StartOnRoles`]}))();export{h as Default,g as StartOnRoles,_ as __namedExportsOrder,p as default};