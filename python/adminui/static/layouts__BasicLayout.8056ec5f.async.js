(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{CWS2:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var r=n(a("W9HT"));a("Telt");var u=n(a("Tckk"));a("Pwec");var o=n(a("CtXQ"));a("lUTK");var l=n(a("BvKs")),d=n(a("2Taf")),c=n(a("vZ4D")),s=n(a("l4Ni")),f=n(a("ujKo")),i=n(a("MhPg")),m=a("Y2fQ"),p=n(a("q1tI")),g=a("Hg0r"),v=n(a("3a4m")),h=n(a("uZXw")),b=n(a("h3zL")),y=function(e){function t(){var e;return(0,d.default)(this,t),e=(0,s.default)(this,(0,f.default)(t).apply(this,arguments)),e.onMenuClick=function(t){var a=t.key;if("logout"!==a)v.default.push("/account/".concat(a));else{var n=e.props.dispatch;n&&n({type:"login/logout"})}},e}return(0,i.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.currentUser,a=void 0===t?{avatar:"",name:""}:t,n=(e.menu,p.default.createElement(l.default,{className:b.default.menu,selectedKeys:[],onClick:this.onMenuClick},p.default.createElement(l.default.Item,{key:"logout"},p.default.createElement(o.default,{type:"logout"}),p.default.createElement(m.FormattedMessage,{id:"menu.account.logout",defaultMessage:"logout"}))));return a&&a.name?p.default.createElement(h.default,{overlay:n},p.default.createElement("span",{className:"".concat(b.default.action," ").concat(b.default.account)},p.default.createElement(u.default,{size:"small",className:b.default.avatar,src:a.avatar,alt:"avatar"}),p.default.createElement("span",{className:b.default.name},a.name))):p.default.createElement(r.default,{size:"small",style:{marginLeft:8,marginRight:8}})}}]),t}(p.default.Component),E=(0,g.connect)(function(e){var t=e.user;return{currentUser:t.currentUser}})(y);t.default=E},QyDn:function(e,t,a){e.exports={container:"antd-pro-components-header-dropdown-index-container"}},bx7e:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(a("gWZ8")),o=r(a("qIgq"));r(a("p0pE"));a("+L6B");var l=r(a("2/Rp"));a("J+/v");var d=r(a("MoRW")),c=n(a("Hx5s")),s=n(a("q1tI")),f=r(a("wY1l")),i=a("Hg0r"),m=a("Y2fQ"),p=r(a("sgkG")),g=a("xKgJ"),v=r(a("mxmt")),h=(s.default.createElement(d.default,{status:"403",title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:s.default.createElement(l.default,{type:"primary"},s.default.createElement(f.default,{to:"/user/login"},"Go Login"))}),function(e){var t=e.dispatch,a=e.children,n=e.user,r=e.settings,l=(e.location,(0,s.useState)([])),d=(0,o.default)(l,2),i=d[0],h=d[1],b=function(){return s.default.createElement(c.DefaultFooter,{copyright:!!r.copyrightText&&r.copyrightText,links:Object.entries(r.footerLinks).map(function(e){var t=(0,o.default)(e,2),a=t[0],n=t[1];return{key:a,title:a,href:n,blankTarget:!0}})})};(0,s.useEffect)(function(){var e=(0,g.getCurrentUser)(),a=e.token?{headers:{Authorization:e.token}}:{};fetch("/api/main_menu",a).then(function(e){return e.json()}).then(function(e){h(e.menu||[])}),t&&(t({type:"user/fetchCurrent"}),t({type:"settings/fetchSettings"}))},[]);var y=function(e){t&&t({type:"global/changeLayoutCollapsed",payload:e})};return s.default.createElement(c.default,Object.assign({logo:r.appLogo||v.default,menuHeaderRender:function(e,t){return s.default.createElement(f.default,{to:"/"},e,t)},headerRender:!(!n.currentUser||!n.currentUser.name)&&void 0,onCollapse:y,menuItemRender:function(e,t){return e.isUrl||e.children?t:s.default.createElement(f.default,{to:e.path},t)},breadcrumbRender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{path:"/",breadcrumbName:(0,m.formatMessage)({id:"menu.home",defaultMessage:"Home"})}].concat((0,u.default)(e))},itemRender:function(e,t,a,n){var r=0===a.indexOf(e);return r?s.default.createElement(f.default,{to:n.join("/")},e.breadcrumbName):s.default.createElement("span",null,e.breadcrumbName)},footerRender:b,menuDataRender:function(){return i},menuRender:i.length>0&&void 0,formatMessage:m.formatMessage,rightContentRender:function(e){return s.default.createElement(p.default,Object.assign({},e))}},e,r),a)}),b=(0,i.connect)(function(e){var t=e.global,a=e.settings,n=e.user;return{collapsed:t.collapsed,settings:a,user:n}})(h);t.default=b},h3zL:function(e,t,a){e.exports={menu:"antd-pro-components-global-header-index-menu",right:"antd-pro-components-global-header-index-right",action:"antd-pro-components-global-header-index-action",search:"antd-pro-components-global-header-index-search",account:"antd-pro-components-global-header-index-account",avatar:"antd-pro-components-global-header-index-avatar",dark:"antd-pro-components-global-header-index-dark",name:"antd-pro-components-global-header-index-name"}},sgkG:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),u=a("Hg0r"),o=n(a("CWS2")),l=n(a("h3zL")),d=function(e){var t=e.theme,a=e.layout,n=l.default.right;return"dark"===t&&"topmenu"===a&&(n="".concat(l.default.right,"  ").concat(l.default.dark)),r.default.createElement("div",{className:n},r.default.createElement(o.default,null))},c=(0,u.connect)(function(e){var t=e.settings;return{theme:t.navTheme,layout:t.layout}})(d);t.default=c},uZXw:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("qVdP");var r=n(a("jsC+")),u=n(a("Y/ft")),o=n(a("q1tI")),l=n(a("TSYQ")),d=n(a("QyDn")),c=function(e){var t=e.overlayClassName,a=(0,u.default)(e,["overlayClassName"]);return o.default.createElement(r.default,Object.assign({overlayClassName:(0,l.default)(d.default.container,t)},a))},s=c;t.default=s}}]);