(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[30],{1461:function(e,t,a){a(54),e.exports=a(1462)},1462:function(e,t,a){"use strict";a.r(t);var r=a(6),s=a(7),n=a(9),i=a(8),c=a(2),o=a.n(c),g=a(25),h=a.n(g),l=a(17),b=a(5),d=a(1),u=a(10),j=a(16),p=a(38),P=a(51),f=a(379),x=(a(128),a(144),a(1468),a(0)),m=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).getItems=function(e){var t=s.state.perPage;u.a.listNotifications(e,t).then((function(a){s.setState({isLoading:!1,items:a.data.notification_list,currentPage:e,hasNextPage:b.a.hasNextPage(e,t,a.data.count)})})).catch((function(e){s.setState({isLoading:!1,errorMsg:b.a.getErrorMsg(e,!0)})}))},s.resetPerPage=function(e){s.setState({perPage:e},(function(){s.getItems(1)}))},s.onSearchedClick=function(e){if(!0===e.is_dir){var t=d.lc+"library/"+e.repo_id+"/"+e.repo_name+e.path;Object(l.c)(t,{repalce:!0})}else{var a=d.lc+"lib/"+e.repo_id+"/file"+b.a.encodePath(e.path);window.open("about:blank").location.href=a}},s.markAllRead=function(){u.a.updateNotifications().then((function(e){s.setState({items:s.state.items.map((function(e){return e.seen=!0,e}))})})).catch((function(e){s.setState({isLoading:!1,errorMsg:b.a.getErrorMsg(e,!0)})}))},s.clearAll=function(){u.a.deleteNotifications().then((function(e){s.setState({items:[]})})).catch((function(e){s.setState({isLoading:!1,errorMsg:b.a.getErrorMsg(e,!0)})}))},s.state={isLoading:!0,errorMsg:"",currentPage:1,perPage:25,hasNextPage:!1,items:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new URL(window.location).searchParams,a=this.state,r=a.currentPage,s=a.perPage;this.setState({perPage:parseInt(t.get("per_page")||s),currentPage:parseInt(t.get("page")||r)},(function(){e.getItems(e.state.currentPage)}))}},{key:"render",value:function(){return Object(x.jsx)(o.a.Fragment,{children:Object(x.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(x.jsxs)("div",{className:"top-header d-flex justify-content-between",children:[Object(x.jsx)("a",{href:d.lc,children:Object(x.jsx)("img",{src:d.Mb+d.Gb,height:d.Fb,width:d.Hb,title:d.mc,alt:"logo"})}),Object(x.jsx)(P.a,{onSearchedClick:this.onSearchedClick})]}),Object(x.jsx)("div",{className:"flex-auto container-fluid pt-4 pb-6 o-auto",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-md-10 offset-md-1",children:[Object(x.jsxs)("div",{className:"d-flex justify-content-between align-items-center flex-wrap op-bar",children:[Object(x.jsx)("h2",{className:"h4 m-0 my-1",children:Object(d.nb)("Notifications")}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{className:"btn btn-secondary op-bar-btn",onClick:this.markAllRead,children:Object(d.nb)("Mark all read")}),Object(x.jsx)("button",{className:"btn btn-secondary op-bar-btn ml-2",onClick:this.clearAll,children:Object(d.nb)("Clear")})]})]}),Object(x.jsx)(O,{isLoading:this.state.isLoading,errorMsg:this.state.errorMsg,items:this.state.items,currentPage:this.state.currentPage,hasNextPage:this.state.hasNextPage,curPerPage:this.state.perPage,resetPerPage:this.resetPerPage,getListByPage:this.getItems})]})})})]})})}}]),a}(o.a.Component),O=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).getPreviousPage=function(){s.props.getListByPage(s.props.currentPage-1)},s.getNextPage=function(){s.props.getListByPage(s.props.currentPage+1)},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.errorMsg,r=e.items,s=e.curPerPage,n=e.currentPage,i=e.hasNextPage;if(t)return Object(x.jsx)(j.a,{});if(a)return Object(x.jsx)("p",{className:"error mt-6 text-center",children:a});var c=b.a.isDesktop()?[{width:"7%",text:""},{width:"73%",text:Object(d.nb)("Message")},{width:"20%",text:Object(d.nb)("Time")}]:[{width:"15%",text:""},{width:"52%",text:Object(d.nb)("Message")},{width:"33%",text:Object(d.nb)("Time")}];return Object(x.jsxs)(o.a.Fragment,{children:[Object(x.jsxs)("table",{className:"table-hover",children:[Object(x.jsx)("thead",{children:Object(x.jsx)("tr",{children:c.map((function(e,t){return Object(x.jsx)("th",{width:e.width,children:e.text},t)}))})}),Object(x.jsx)("tbody",{children:r.map((function(e,t){return Object(x.jsx)(f.a,{noticeItem:e,tr:!0},t)}))})]}),r.length>0&&Object(x.jsx)(p.a,{gotoPreviousPage:this.getPreviousPage,gotoNextPage:this.getNextPage,currentPage:n,hasNextPage:i,curPerPage:s,resetPerPage:this.props.resetPerPage})]})}}]),a}(o.a.Component);h.a.render(Object(x.jsx)(m,{}),document.getElementById("wrapper"))},1468:function(e,t,a){}},[[1461,1,0]]]);
//# sourceMappingURL=userNotifications.chunk.js.map