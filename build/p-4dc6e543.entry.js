import{r as e,h as o}from"./p-ddbaf027.js";const t=class{constructor(o){e(this,o),this.selection=""}handleSelectRole(e,o){this.selection=o}render(){return o("div",{class:"app-home"},o("app-dialog",null,o("select",{onChange:e=>this.handleSelectRole(e,name)},o("option",{value:"",selected:""==this.selection,disabled:!0,hidden:!0},"Roles"),o("optgroup",{label:"Roles"},o("option",{value:"admin",selected:"admin"==this.selection},"admin"),o("option",{value:"user",selected:"user"==this.selection},"user")))))}};t.style=".app-home{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);outline:0;letter-spacing:0.04em;transition:all 0.15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);transform:translateY(1px)}";export{t as app_home}