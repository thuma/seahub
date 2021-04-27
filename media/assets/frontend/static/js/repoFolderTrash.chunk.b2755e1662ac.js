(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[12],{1173:function(e,t,n){e.exports=n(1294)},1174:function(e,t,n){},1294:function(e,t,n){"use strict";n.r(t);var r=n(6),s=n(7),a=n(27),c=n(9),o=n(8),i=n(2),l=n.n(i),d=n(24),h=n.n(d),b=n(17),j=n(13),u=n.n(j),O=n(5),m=n(1),p=n(10),f=n(16),g=n(20),x=n(11),v=n(46),D=n(4),M=n(191),S=n.n(M),I=n(0),k=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).handleInputChange=function(e){s.setState({inputValue:e})},s.formSubmit=function(){var e=s.state.inputValue,t=s.props.repoID;s.setState({submitBtnDisabled:!0}),p.a.deleteRepoTrash(t,e.value).then((function(e){x.a.success(Object(m.nb)("Clean succeeded.")),s.props.refreshTrash(),s.props.toggleDialog()})).catch((function(e){var t=O.a.getErrorMsg(e);s.setState({formErrorMsg:t,submitBtnDisabled:!1})}))},s.options=[{label:Object(m.nb)("3 days ago"),value:3},{label:Object(m.nb)("1 week ago"),value:7},{label:Object(m.nb)("1 month ago"),value:30},{label:Object(m.nb)("all"),value:0}],s.state={inputValue:s.options[0],submitBtnDisabled:!1},s}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.formErrorMsg;return Object(I.jsxs)(D.x,{isOpen:!0,centered:!0,toggle:this.props.toggleDialog,children:[Object(I.jsx)(D.A,{toggle:this.props.toggleDialog,children:Object(m.nb)("Clean")}),Object(I.jsx)(D.y,{children:Object(I.jsxs)(l.a.Fragment,{children:[Object(I.jsx)("p",{children:Object(m.nb)("Clear files in trash and history\uff1a")}),Object(I.jsx)(S.a,{defaultValue:this.options[0],options:this.options,autoFocus:!1,onChange:this.handleInputChange,placeholder:""}),e&&Object(I.jsx)("p",{className:"error m-0 mt-2",children:e})]})}),Object(I.jsx)(D.z,{children:Object(I.jsx)("button",{className:"btn btn-primary",disabled:this.state.submitBtnDisabled,onClick:this.formSubmit,children:Object(m.nb)("Submit")})})]})}}]),n}(l.a.Component),w=(n(99),n(112),n(1174),window.app.pageOptions),C=w.repoID,F=w.repoFolderName,_=w.path,y=w.enableClean,N=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).getItems=function(e){p.a.getRepoFolderTrash(C,_,e).then((function(e){var t=e.data,n=t.data,r=t.more,a=t.scan_stat;!n.length&&r?s.getItems(a):s.setState({isLoading:!1,items:s.state.items.concat(n),more:r,scanStat:a})})).catch((function(e){s.setState({isLoading:!1,errorMsg:O.a.getErrorMsg(e,!0)})}))},s.getMore=function(){s.setState({isLoading:!0}),s.getItems(s.state.scanStat)},s.onSearchedClick=function(e){if(!0===e.is_dir){var t=m.lc+"library/"+e.repo_id+"/"+e.repo_name+e.path;Object(b.c)(t,{repalce:!0})}else{var n=m.lc+"lib/"+e.repo_id+"/file"+O.a.encodePath(e.path);window.open("about:blank").location.href=n}},s.goBack=function(e){e.preventDefault(),window.history.back()},s.cleanTrash=function(){s.toggleCleanTrashDialog()},s.toggleCleanTrashDialog=function(){s.setState({isCleanTrashDialogOpen:!s.state.isCleanTrashDialogOpen})},s.refreshTrash=function(){s.setState({isLoading:!0,errorMsg:"",items:[],scanStat:null,more:!1,showFolder:!1}),s.getItems()},s.renderFolder=function(e,t,n){s.setState({showFolder:!0,commitID:e,baseDir:t,folderPath:n,folderItems:[],isLoading:!0}),p.a.listCommitDir(C,e,"".concat(t.substr(0,t.length-1)).concat(n)).then((function(e){s.setState({isLoading:!1,folderItems:e.data.dirent_list})})).catch((function(e){e.response?403==e.response.status?s.setState({isLoading:!1,errorMsg:Object(m.nb)("Permission denied")}):s.setState({isLoading:!1,errorMsg:Object(m.nb)("Error")}):s.setState({isLoading:!1,errorMsg:Object(m.nb)("Please check the network.")})}))},s.clickRoot=function(e){e.preventDefault(),s.refreshTrash()},s.clickFolderPath=function(e,t){t.preventDefault();var n=s.state,r=n.commitID,a=n.baseDir;s.renderFolder(r,a,e)},s.renderFolderPath=function(){var e=s.state.folderPath.split("/");return Object(I.jsxs)(l.a.Fragment,{children:[Object(I.jsx)("a",{href:"#",onClick:s.clickRoot,children:F}),Object(I.jsx)("span",{children:" / "}),e.map((function(t,n){if(n>0&&n!=e.length-1)return Object(I.jsxs)(l.a.Fragment,{children:[Object(I.jsx)("a",{href:"#",onClick:s.clickFolderPath.bind(Object(a.a)(s),e.slice(0,n+1).join("/")),children:e[n]}),Object(I.jsx)("span",{children:" / "})]},n)})),e[e.length-1]]})},s.state={isLoading:!0,errorMsg:"",items:[],scanStat:null,more:!1,isCleanTrashDialogOpen:!1},s}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){var e=this.state,t=e.isCleanTrashDialogOpen,n=e.showFolder;return Object(I.jsxs)(l.a.Fragment,{children:[Object(I.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(I.jsxs)("div",{className:"top-header d-flex justify-content-between",children:[Object(I.jsx)("a",{href:m.lc,children:Object(I.jsx)("img",{src:m.Mb+m.Gb,height:m.Fb,width:m.Hb,title:m.mc,alt:"logo"})}),Object(I.jsx)(v.a,{onSearchedClick:this.onSearchedClick})]}),Object(I.jsx)("div",{className:"flex-auto container-fluid pt-4 pb-6 o-auto",children:Object(I.jsx)("div",{className:"row",children:Object(I.jsxs)("div",{className:"col-md-10 offset-md-1",children:[Object(I.jsx)("h2",{dangerouslySetInnerHTML:{__html:O.a.generateDialogTitle(Object(m.nb)("{placeholder} Trash"),F)}}),Object(I.jsx)("a",{href:"#",className:"go-back",title:Object(m.nb)("Back"),onClick:this.goBack,children:Object(I.jsx)("span",{className:"fas fa-chevron-left"})}),Object(I.jsxs)("div",{className:"d-flex justify-content-between align-items-center op-bar",children:[Object(I.jsxs)("p",{className:"m-0",children:[Object(m.nb)("Current path: "),n?this.renderFolderPath():F]}),"/"==_&&y&&!n&&Object(I.jsx)("button",{className:"btn btn-secondary clean",onClick:this.cleanTrash,children:Object(m.nb)("Clean")})]}),Object(I.jsx)(T,{data:this.state,getMore:this.getMore,renderFolder:this.renderFolder})]})})})]}),t&&Object(I.jsx)(g.a,{children:Object(I.jsx)(k,{repoID:C,refreshTrash:this.refreshTrash,toggleDialog:this.toggleCleanTrashDialog})})]})}}]),n}(l.a.Component),T=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).theadData=[{width:"5%",text:""},{width:"45%",text:Object(m.nb)("Name")},{width:"20%",text:Object(m.nb)("Delete Time")},{width:"15%",text:Object(m.nb)("Size")},{width:"15%",text:""}],s}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.data,n=t.isLoading,r=t.errorMsg,s=t.items,a=t.more,c=t.showFolder,o=t.commitID,i=t.baseDir,d=t.folderPath,h=t.folderItems;return Object(I.jsxs)(l.a.Fragment,{children:[Object(I.jsxs)("table",{className:"table-hover",children:[Object(I.jsx)("thead",{children:Object(I.jsx)("tr",{children:this.theadData.map((function(e,t){return Object(I.jsx)("th",{width:e.width,children:e.text},t)}))})}),Object(I.jsx)("tbody",{children:c?h.map((function(t,n){return Object(I.jsx)(P,{item:t,commitID:o,baseDir:i,folderPath:d,renderFolder:e.props.renderFolder},n)})):s.map((function(t,n){return Object(I.jsx)(L,{item:t,renderFolder:e.props.renderFolder},n)}))})]}),n&&Object(I.jsx)(f.a,{}),r&&Object(I.jsx)("p",{className:"error mt-6 text-center",children:r}),a&&!n&&!c&&Object(I.jsx)("button",{className:"btn btn-block more mt-6",onClick:this.props.getMore,children:Object(m.nb)("More")})]})}}]),n}(l.a.Component),L=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).handleMouseOver=function(){s.setState({isIconShown:!0})},s.handleMouseOut=function(){s.setState({isIconShown:!1})},s.restoreItem=function(e){e.preventDefault();var t=s.props.item,n=t.commit_id,r=t.parent_dir+t.obj_name;(t.is_dir?p.a.restoreFolder(C,n,r):p.a.restoreFile(C,n,r)).then((function(e){s.setState({restored:!0}),x.a.success(Object(m.nb)("Successfully restored 1 item."))})).catch((function(e){var t="";t=e.response?e.response.data.error_msg||Object(m.nb)("Error"):Object(m.nb)("Please check the network."),x.a.danger(t)}))},s.renderFolder=function(e){e.preventDefault();var t=s.props.item;s.props.renderFolder(t.commit_id,t.parent_dir,O.a.joinPath("/",t.obj_name))},s.state={restored:!1,isIconShown:!1},s}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.item,t=this.state,n=t.restored,r=t.isIconShown;return n?null:e.is_dir?Object(I.jsxs)("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,children:[Object(I.jsx)("td",{className:"text-center",children:Object(I.jsx)("img",{src:O.a.getFolderIconUrl(),alt:Object(m.nb)("Directory"),width:"24"})}),Object(I.jsx)("td",{children:Object(I.jsx)("a",{href:"#",onClick:this.renderFolder,children:e.obj_name})}),Object(I.jsx)("td",{title:u()(e.deleted_time).format("LLLL"),children:u()(e.deleted_time).format("YYYY-MM-DD")}),Object(I.jsx)("td",{}),Object(I.jsx)("td",{children:Object(I.jsx)("a",{href:"#",className:r?"":"invisible",onClick:this.restoreItem,children:Object(m.nb)("Restore")})})]}):Object(I.jsxs)("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,children:[Object(I.jsx)("td",{className:"text-center",children:Object(I.jsx)("img",{src:O.a.getFileIconUrl(e.obj_name),alt:Object(m.nb)("File"),width:"24"})}),Object(I.jsx)("td",{children:Object(I.jsx)("a",{href:"".concat(m.lc,"repo/").concat(C,"/trash/files/?obj_id=").concat(e.obj_id,"&commit_id=").concat(e.commit_id,"&base=").concat(encodeURIComponent(e.parent_dir),"&p=").concat(encodeURIComponent("/"+e.obj_name)),target:"_blank",children:e.obj_name})}),Object(I.jsx)("td",{title:u()(e.deleted_time).format("LLLL"),children:u()(e.deleted_time).format("YYYY-MM-DD")}),Object(I.jsx)("td",{children:O.a.bytesToSize(e.size)}),Object(I.jsx)("td",{children:Object(I.jsx)("a",{href:"#",className:r?"":"invisible",onClick:this.restoreItem,children:Object(m.nb)("Restore")})})]})}}]),n}(l.a.Component),P=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).handleMouseOver=function(){s.setState({isIconShown:!0})},s.handleMouseOut=function(){s.setState({isIconShown:!1})},s.renderFolder=function(e){e.preventDefault();var t=s.props.item,n=s.props,r=n.commitID,a=n.baseDir,c=n.folderPath;s.props.renderFolder(r,a,O.a.joinPath(c,t.name))},s.state={isIconShown:!1},s}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.item,t=(this.state.isIconShown,this.props),n=t.commitID,r=t.baseDir,s=t.folderPath;return"dir"==e.type?Object(I.jsxs)("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,children:[Object(I.jsx)("td",{className:"text-center",children:Object(I.jsx)("img",{src:O.a.getFolderIconUrl(),alt:Object(m.nb)("Directory"),width:"24"})}),Object(I.jsx)("td",{children:Object(I.jsx)("a",{href:"#",onClick:this.renderFolder,children:e.name})}),Object(I.jsx)("td",{}),Object(I.jsx)("td",{}),Object(I.jsx)("td",{})]}):Object(I.jsxs)("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,children:[Object(I.jsx)("td",{className:"text-center",children:Object(I.jsx)("img",{src:O.a.getFileIconUrl(e.name),alt:Object(m.nb)("File"),width:"24"})}),Object(I.jsx)("td",{children:Object(I.jsx)("a",{href:"".concat(m.lc,"repo/").concat(C,"/trash/files/?obj_id=").concat(e.obj_id,"&commit_id=").concat(n,"&base=").concat(encodeURIComponent(r),"&p=").concat(encodeURIComponent(O.a.joinPath(s,e.name))),target:"_blank",children:e.name})}),Object(I.jsx)("td",{}),Object(I.jsx)("td",{children:O.a.bytesToSize(e.size)}),Object(I.jsx)("td",{})]})}}]),n}(l.a.Component);h.a.render(Object(I.jsx)(N,{}),document.getElementById("wrapper"))}},[[1173,1,0]]]);
//# sourceMappingURL=repoFolderTrash.chunk.js.map