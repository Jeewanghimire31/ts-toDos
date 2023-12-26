var E=Object.defineProperty;var v=(r,e,i)=>e in r?E(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i;var u=(r,e,i)=>(v(r,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();class g{constructor(e="",i="",c=!1){this._id=e,this._item=i,this._checked=c}get id(){return this._id}set id(e){this._id=e}get item(){return this._item}set item(e){this._item=e}get checked(){return this._checked}set checked(e){this._checked=e}}const m=class m{constructor(e=[]){this._list=e}get list(){return this._list}load(){const e=localStorage.getItem("myList");if(typeof e!="string")return;JSON.parse(e).forEach(c=>{const t=new g(c._id,c._item,c._checked);m.instance.addItem(t)})}save(){localStorage.setItem("myList",JSON.stringify(this._list))}clearList(){this._list=[],this.save()}addItem(e){this._list.push(e)}removeItem(e){this._list=this._list.filter(i=>i.id!==e),this.save()}};u(m,"instance",new m);let f=m;const h=class h{constructor(){u(this,"ul");this.ul=document.getElementById("list-item")}clear(){this.ul.innerHTML=""}render(e,i,c,t){this.clear();let n=i?e.list.filter(s=>s.item.toLowerCase().includes(i.toLowerCase())):e.list;c?n=n.filter(s=>s.checked):t&&(n=n.filter(s=>!s.checked)),n.forEach(s=>{const d=document.createElement("li");d.className="list-group-item d-flex align-items-center justify-content-between gap-1";const o=document.createElement("input");o.type="checkbox",o.id=s.id,o.checked=s.checked,d.append(o),o.addEventListener("change",()=>{s.checked=!s.checked,e.save()});const a=document.createElement("label");a.className="flex-grow-1 ml-2",a.htmlFor=s.id,a.textContent=s.item,d.append(a);const l=document.createElement("button");l.className="btn btn-danger",l.textContent="X",d.append(l),l.addEventListener("click",()=>{e.removeItem(s.id),this.render(e)}),this.ul.append(d)})}};u(h,"instance",new h);let p=h;const I=()=>{var t,n,s;const r=f.instance,e=p.instance,i=document.getElementById("searchKeyword");i.addEventListener("input",()=>{const d=i.value.trim();e.render(r,d)}),document.getElementById("addTaskForm").addEventListener("submit",d=>{d.preventDefault();const o=document.getElementById("taskDescription"),a=o.value.trim();if(!a.length)return;const l=r.list.length?parseInt(r.list[r.list.length-1].id)+1:1,y=new g(l.toString(),a);r.addItem(y),e.render(r),o.value=""}),(t=document.getElementById("allTasks"))==null||t.addEventListener("click",()=>{e.render(r)}),(n=document.getElementById("completedTasks"))==null||n.addEventListener("click",()=>{e.render(r,void 0,!0,!1)}),(s=document.getElementById("remainingTasks"))==null||s.addEventListener("click",()=>{e.render(r,void 0,!1,!0)}),r.load(),e.render(r)};document.addEventListener("DOMContentLoaded",I);