import{b,s as h,l as g,p as t,e as m,f as o,x as p,i as r,F as k,k as e,g as i,h as c,K as n}from"./vendor-3bd669b1.js";import{u as z,a as V}from"./index-ac97dbd4.js";const w=["href"],y=["href"],v=["href"],x=e("p",null,[e("a",{href:"https://github.com/xingrz/zmk-config_helloword_hw-75/issues",target:"_blank"},"固件问题反馈")],-1),S=e("p",null,[e("a",{href:"https://github.com/xingrz/zmk-config_helloword_hw-75/releases",target:"_blank"},"获取最新固件版本")],-1),$=b({__name:"About",setup(C){const u=z(),f=V(),{device:l}=h(u),{version:s}=h(f);return(B,I)=>{const a=i("a-descriptions-item"),d=i("a-descriptions"),_=i("a-divider");return c(),g(k,null,[t(l)?(c(),m(d,{key:0,title:"设备",column:1,"label-style":{width:"8em"}},{default:o(()=>[r(a,{label:"设备"},{default:o(()=>[e("code",null,n(t(l).productName),1)]),_:1}),r(a,{label:"VID"},{default:o(()=>[e("code",null,n(t(l).vendorId.toString(16).padStart(4,"0")),1)]),_:1}),r(a,{label:"PID"},{default:o(()=>[e("code",null,n(t(l).productId.toString(16).padStart(4,"0")),1)]),_:1})]),_:1})):p("",!0),r(_),t(s)?(c(),m(d,{key:1,title:"固件",column:1,"label-style":{width:"8em"}},{default:o(()=>[r(a,{label:"固件版本"},{default:o(()=>[e("a",{href:`https://github.com/xingrz/zmk-config_helloword_hw-75/tree/${t(s).appVersion}`,target:"_blank",noreferred:""},[e("code",null,n(t(s).appVersion),1)],8,w)]),_:1}),r(a,{label:"ZMK 版本"},{default:o(()=>[e("a",{href:`https://github.com/zmkfirmware/zmk/tree/${t(s).zmkVersion}`,target:"_blank",noreferred:""},[e("code",null,n(t(s).zmkVersion),1)],8,y)]),_:1}),r(a,{label:"Zephyr 版本"},{default:o(()=>[e("a",{href:`https://github.com/zephyrproject-rtos/zephyr/tree/${t(s).zephyrVersion}`,target:"_blank",noreferred:""},[e("code",null,n(t(s).zephyrVersion),1)],8,v)]),_:1})]),_:1})):p("",!0),r(_),x,S],64)}}});export{$ as default};