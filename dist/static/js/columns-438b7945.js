import{u as t,w as u}from"./xlsx-e927f539.js";import{a as m}from"./data-9777cb37.js";import{J as i}from"./index-28562d9d.js";import{m as f}from"./message-9ac44594.js";function w(){const r=Vue.ref(i(m,!0)),e=[{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}];return{columns:e,dataList:r,exportExcel:()=>{const s=r.value.map(o=>{const n=[];return e.forEach(c=>{n.push(o[c.prop])}),n}),a=[];e.forEach(o=>{a.push(o.label)}),s.unshift(a);const l=t.aoa_to_sheet(s),p=t.book_new();t.book_append_sheet(p,l,"数据报表"),u(p,"pure-admin-table.xlsx"),f("导出成功",{type:"success"})}}}export{w as useColumns};