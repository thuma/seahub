(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[16],{1573:function(e,t,n){n(54),e.exports=n(1689)},1574:function(e,t,n){},1689:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(7),s=n(9),i=n(8),o=n(2),r=n.n(o),l=n(25),b=n.n(l),d=n(17),h=n(5),u=n(1),j=n(10),m=n(11),O=n(51),f=n(0),p=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("ul",{className:"nav flex-column user-setting-nav",children:this.props.data.map((function(t,n){return t.show?Object(f.jsx)("li",{className:"nav-item ".concat(e.props.curItemID==t.href.substr(1)&&"active"),children:Object(f.jsx)("a",{className:"nav-link",href:t.href,children:t.text})},n):null}))})}}]),n}(r.a.Component),g=window.app.pageOptions,x=g.avatarURL,v=g.csrfToken,w=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).fileInputChange=function(){if(c.fileInput.current.files.length){var e=c.fileInput.current.files[0],t=e.name;if(-1==t.lastIndexOf("."))return m.a.danger(Object(u.nb)("Please choose an image file."),{duration:5}),!1;var n=t.substr(t.lastIndexOf(".")+1).toLowerCase(),a=["jpg","jpeg","png","gif"];if(-1==a.indexOf(n)){var s=Object(u.nb)("File extensions can only be {placeholder}.").replace("{placeholder}",a.join(", "));return m.a.danger(s,{duration:5}),!1}if(e.size>1048576){var i=Object(u.nb)("The file is too large. Allowed maximum size is 1MB.");return m.a.danger(i,{duration:5}),!1}j.a.updateUserAvatar(e,160).then((function(e){c.setState({avatarSrc:e.data.avatar_url}),m.a.success(Object(u.nb)("Success"))})).catch((function(e){var t=h.a.getErrorMsg(e);m.a.danger(t)}))}},c.openFileInput=function(){c.fileInput.current.click()},c.handleMouseOver=function(){c.setState({isEditShown:!0})},c.handleMouseOut=function(){c.setState({isEditShown:!1})},c.fileInput=r.a.createRef(),c.form=r.a.createRef(),c.state={avatarSrc:x,isEditShown:!1},c}return Object(c.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{ref:this.form,className:"form-group row",encType:"multipart/form-data",method:"post",action:"".concat(u.lc,"avatar/add/"),children:[Object(f.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:v}),Object(f.jsx)("label",{className:"col-sm-1 col-form-label",children:Object(u.nb)("Avatar:")}),Object(f.jsxs)("div",{className:"col-auto position-relative",onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,children:[Object(f.jsx)("img",{src:this.state.avatarSrc,width:"80",height:"80",alt:"",className:"user-avatar"}),Object(f.jsx)("input",{type:"file",name:"avatar",className:"d-none",onChange:this.fileInputChange,ref:this.fileInput}),Object(f.jsx)("span",{className:"avatar-edit fas fa-edit ".concat(!this.state.isEditShown&&"d-none"),onClick:this.openFileInput})]})]})}}]),n}(r.a.Component),k=window.app.pageOptions,N=k.nameLabel,y=k.enableUpdateUserInfo,C=k.enableUserSetContactEmail,I=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;Object(a.a)(this,n),(c=t.call(this,e)).handleNameInputChange=function(e){c.setState({name:e.target.value})},c.handleContactEmailInputChange=function(e){c.setState({contactEmail:e.target.value})},c.handleSubmit=function(e){e.preventDefault();var t={name:c.state.name};C&&(t.contact_email=c.state.contactEmail),c.props.updateUserInfo(t)};var s=c.props.userInfo,i=s.contact_email,o=s.login_id,r=s.name;return c.state={contactEmail:i,loginID:o,name:r},c}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contactEmail,n=e.loginID,a=e.name;return Object(f.jsxs)("form",{action:"",method:"post",onSubmit:this.handleSubmit,children:[Object(f.jsxs)("div",{className:"form-group row",children:[Object(f.jsx)("label",{className:"col-sm-1 col-form-label",htmlFor:"name",children:N}),Object(f.jsx)("div",{className:"col-sm-5",children:Object(f.jsx)("input",{className:"form-control",id:"name",type:"text",name:"nickname",value:a,disabled:!y,onChange:this.handleNameInputChange})})]}),n&&Object(f.jsxs)("div",{className:"form-group row",children:[Object(f.jsx)("label",{className:"col-sm-1 col-form-label",htmlFor:"user-name",children:Object(u.nb)("Username:")}),Object(f.jsx)("div",{className:"col-sm-5",children:Object(f.jsx)("input",{className:"form-control",id:"user-name",type:"text",name:"username",value:n,disabled:!0,readOnly:!0})}),Object(f.jsx)("p",{className:"col-sm-5 m-0 input-tip",children:Object(u.nb)("You can use this field at login.")})]}),(t||C)&&Object(f.jsxs)("div",{className:"form-group row",children:[Object(f.jsx)("label",{className:"col-sm-1 col-form-label",htmlFor:"contact-email",children:Object(u.nb)("Contact Email:")}),Object(f.jsx)("div",{className:"col-sm-5",children:Object(f.jsx)("input",{className:"form-control",id:"contact-email",type:"text",name:"contact_email",value:t,disabled:!C,readOnly:!C,onChange:this.handleContactEmailInputChange})}),Object(f.jsx)("p",{className:"col-sm-5 m-0 input-tip",children:Object(u.nb)("Your notifications will be sent to this email.")})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-outline-primary offset-sm-1",disabled:!y,children:Object(u.nb)("Submit")})]})}}]),n}(r.a.Component),D=n(20),S=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).getAuthToken=function(){j.a.getAuthTokenBySession().then((function(e){c.setState({authToken:e.data.token})})).catch((function(e){var t=h.a.getErrorMsg(e);m.a.danger(t)}))},c.createAuthToken=function(){j.a.createAuthTokenBySession().then((function(e){c.setState({authToken:e.data.token,isAuthTokenVisible:!1}),m.a.success(Object(u.nb)("Success"))})).catch((function(e){var t=h.a.getErrorMsg(e);m.a.danger(t)}))},c.deleteAuthToken=function(){j.a.deleteAuthTokenBySession().then((function(e){c.setState({authToken:"",isAuthTokenVisible:!1}),m.a.success(Object(u.nb)("Success"))})).catch((function(e){var t=h.a.getErrorMsg(e);m.a.danger(t)}))},c.toggleAuthTokenVisible=function(){c.setState({isAuthTokenVisible:!c.state.isAuthTokenVisible})},c.state={authToken:"",isAuthTokenVisible:!1},c}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.getAuthToken()}},{key:"render",value:function(){var e=this.state,t=e.authToken,n=e.isAuthTokenVisible;return Object(f.jsx)(r.a.Fragment,{children:Object(f.jsxs)("div",{id:"get-auth-token",className:"setting-item",children:[Object(f.jsx)("h3",{className:"setting-item-heading",children:Object(u.nb)("Web API Auth Token")}),t?Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsxs)("div",{className:"d-flex align-items-center",children:[Object(f.jsx)("label",{className:"m-0 mr-2",children:Object(u.nb)("Token:")}),Object(f.jsx)("input",{className:"border-0 mr-1",type:"text",value:n?t:"****************************************",readOnly:!0,size:Math.max(t.length,10)}),Object(f.jsx)("span",{onClick:this.toggleAuthTokenVisible,className:"eye-icon fas ".concat(this.state.isAuthTokenVisible?"fa-eye":"fa-eye-slash")})]}),Object(f.jsx)("button",{className:"btn btn-outline-primary mt-2",onClick:this.deleteAuthToken,children:Object(u.nb)("Delete")})]}):Object(f.jsx)("button",{className:"btn btn-outline-primary",onClick:this.createAuthToken,children:Object(u.nb)("Generate")})]})})}}]),n}(r.a.Component),A=n(4),T=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).submit=function(){c.setState({btnDisabled:!0}),c.props.updatePassword(c.state.password)},c.handleInputChange=function(e){var t=e.target.value.trim();c.setState({password:t})},c.togglePasswordVisible=function(){c.setState({isPasswordVisible:!c.state.isPasswordVisible})},c.generatePassword=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<8;n++)e+=t.charAt(Math.floor(Math.random()*t.length));c.setState({password:e,isPasswordVisible:!0})},c.state={password:c.props.password,isPasswordVisible:!1,btnDisabled:!1},c}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.toggle;return Object(f.jsxs)(A.x,{centered:!0,isOpen:!0,toggle:e,children:[Object(f.jsx)(A.A,{toggle:e,children:Object(u.nb)("WebDav Password")}),Object(f.jsx)(A.y,{children:Object(f.jsxs)(A.t,{className:"",children:[Object(f.jsx)(A.s,{type:this.state.isPasswordVisible?"text":"password",value:this.state.password,onChange:this.handleInputChange,autoComplete:"new-password"}),Object(f.jsxs)(A.u,{addonType:"append",children:[Object(f.jsx)(A.c,{onClick:this.togglePasswordVisible,children:Object(f.jsx)("i",{className:"fas ".concat(this.state.isPasswordVisible?"fa-eye":"fa-eye-slash")})}),Object(f.jsx)(A.c,{onClick:this.generatePassword,children:Object(f.jsx)("i",{className:"fas fa-magic"})})]})]})}),Object(f.jsxs)(A.z,{children:[Object(f.jsx)(A.c,{color:"secondary",onClick:e,children:Object(u.nb)("Cancel")}),Object(f.jsx)(A.c,{color:"primary",onClick:this.submit,disabled:this.state.btnDisabled,children:Object(u.nb)("Submit")})]})]})}}]),n}(o.Component),E=window.app.pageOptions.webdavPasswd,P=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).togglePasswordVisible=function(){c.setState({isPasswordVisible:!c.state.isPasswordVisible})},c.updatePassword=function(e){j.a.updateWebdavSecret(e).then((function(t){c.toggleDialog(),c.setState({password:e}),m.a.success(Object(u.nb)("Success"))})).catch((function(e){var t=h.a.getErrorMsg(e);c.toggleDialog(),m.a.danger(t)}))},c.toggleDialog=function(){c.setState({isDialogOpen:!c.state.isDialogOpen})},c.state={password:E,isPasswordVisible:!1,isDialogOpen:!1},c}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.password,n=e.isPasswordVisible;return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsxs)("div",{id:"update-webdav-passwd",className:"setting-item",children:[Object(f.jsx)("h3",{className:"setting-item-heading",children:Object(u.nb)("WebDav Password")}),t?Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsxs)("div",{className:"d-flex align-items-center",children:[Object(f.jsx)("label",{className:"m-0 mr-2",children:Object(u.nb)("Password:")}),Object(f.jsx)("input",{className:"border-0 mr-1",type:"text",value:n?t:"**********",readOnly:!0,size:Math.max(t.length,10)}),Object(f.jsx)("span",{onClick:this.togglePasswordVisible,className:"eye-icon fas ".concat(this.state.isPasswordVisible?"fa-eye":"fa-eye-slash")})]}),Object(f.jsx)("button",{className:"btn btn-outline-primary mt-2",onClick:this.toggleDialog,children:Object(u.nb)("Update")})]}):Object(f.jsx)("button",{className:"btn btn-outline-primary",onClick:this.toggleDialog,children:Object(u.nb)("Set Password")})]}),this.state.isDialogOpen&&Object(f.jsx)(D.a,{children:Object(f.jsx)(T,{password:this.state.password,updatePassword:this.updatePassword,toggle:this.toggleDialog})})]})}}]),n}(r.a.Component),U=n(91),F=window.app.pageOptions,V=F.currentLang,_=F.langList,M=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).onSelectChange=function(e){location.href="".concat(u.lc,"i18n/?lang=").concat(e.value)},c}return Object(c.a)(n,[{key:"render",value:function(){var e=_.map((function(e,t){return{value:e.langCode,label:e.langName}}));return Object(f.jsxs)("div",{className:"setting-item",id:"lang-setting",children:[Object(f.jsx)("h3",{className:"setting-item-heading",children:Object(u.nb)("Language Setting")}),Object(f.jsx)(U.a,{className:"language-selector",defaultValue:{value:V.langCode,label:V.langName},options:e,onChange:this.onSelectChange})]})}}]),n}(r.a.Component),L=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;Object(a.a)(this,n),(c=t.call(this,e)).handleInputChange=function(e){var t=e.target.checked;c.setState({inputChecked:t}),c.props.updateUserInfo({list_in_address_book:t.toString()})};var s=c.props.userInfo.list_in_address_book;return c.state={inputChecked:s},c}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.inputChecked;return Object(f.jsxs)("div",{className:"setting-item",id:"list-in-address-book",children:[Object(f.jsx)("h3",{className:"setting-item-heading",children:Object(u.nb)("Global Address Book")}),Object(f.jsxs)("div",{className:"d-flex align-items-center",children:[Object(f.jsx)("input",{type:"checkbox",id:"list-in-address-book",name:"list_in_address_book",className:"mr-1",checked:e,onChange:this.handleInputChange}),Object(f.jsx)("label",{htmlFor:"list-in-address-book",className:"m-0",children:Object(u.nb)("List your account in global address book, so that others can find you by typing your name.")})]})]})}}]),n}(r.a.Component),R=window.app.pageOptions,W=R.fileUpdatesEmailInterval,z=R.collaborateEmailInterval,B=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).inputFileUpdatesEmailIntervalChange=function(e){e.target.checked&&c.setState({fileUpdatesEmailInterval:parseInt(e.target.value)})},c.inputCollaborateEmailIntervalChange=function(e){e.target.checked&&c.setState({collaborateEmailInterval:parseInt(e.target.value)})},c.formSubmit=function(e){e.preventDefault();var t=c.state,n=t.fileUpdatesEmailInterval,a=t.collaborateEmailInterval;j.a.updateEmailNotificationInterval(n,a).then((function(e){m.a.success(Object(u.nb)("Success"))})).catch((function(e){var t=h.a.getErrorMsg(e);m.a.danger(t)}))},c.fileUpdatesOptions=[{interval:0,text:Object(u.nb)("Don't send emails")},{interval:3600,text:Object(u.nb)("Per hour")},{interval:14400,text:Object(u.nb)("Per 4 hours")},{interval:86400,text:Object(u.nb)("Per day")},{interval:604800,text:Object(u.nb)("Per week")}],c.collaborateOptions=[{interval:0,text:Object(u.nb)("Don't send emails")},{interval:3600,text:Object(u.nb)("Per hour")+" ("+Object(u.nb)("If notifications have not been read within one hour, they will be sent to your mailbox.")+")"}],c.state={fileUpdatesEmailInterval:W,collaborateEmailInterval:z},c}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.fileUpdatesEmailInterval,a=t.collaborateEmailInterval;return Object(f.jsxs)("div",{className:"setting-item",id:"email-notice",children:[Object(f.jsx)("h3",{className:"setting-item-heading",children:Object(u.nb)("Email Notification")}),Object(f.jsx)("h6",{className:"",children:Object(u.nb)("Notifications of file changes")}),Object(f.jsx)("p",{className:"mb-1",children:Object(u.nb)("The list of added, deleted and modified files will be sent to your mailbox.")}),Object(f.jsx)("form",{method:"post",action:"",id:"set-email-notice-interval-form",onSubmit:this.formSubmit,children:this.fileUpdatesOptions.map((function(t,a){return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)("input",{type:"radio",name:"interval",value:t.interval,className:"align-middle",id:"file-updates-interval-option".concat(a+1),checked:n==t.interval,onChange:e.inputFileUpdatesEmailIntervalChange}),Object(f.jsx)("label",{className:"align-middle m-0 ml-2",htmlFor:"interval-option".concat(a+1),children:t.text}),Object(f.jsx)("br",{})]},"file-updates-".concat(a))}))}),Object(f.jsx)("h6",{className:"mt-4",children:Object(u.nb)("Notifications of collaboration")}),Object(f.jsx)("p",{className:"mb-1",children:Object(u.nb)("Whether the notifications of collaboration such as sharing library or joining group should be sent to your mailbox.")}),Object(f.jsx)("form",{method:"post",action:"",id:"set-email-notice-interval-form",onSubmit:this.formSubmit,children:this.collaborateOptions.map((function(t,n){return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)("input",{type:"radio",name:"interval",value:t.interval,className:"align-middle",id:"collaborate-interval-option".concat(n+1),checked:a==t.interval,onChange:e.inputCollaborateEmailIntervalChange}),Object(f.jsx)("label",{className:"align-middle m-0 ml-2",htmlFor:"interval-option".concat(n+1),children:t.text}),Object(f.jsx)("br",{})]},"collaborate-".concat(n))}))}),Object(f.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-2",onClick:this.formSubmit,children:Object(u.nb)("Submit")})]})}}]),n}(r.a.Component),G=window.app.pageOptions,Y=G.defaultDevice,J=G.backupTokens,H=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).renderEnabled=function(){return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)("p",{className:"mb-2",children:Object(u.nb)("Status: enabled")}),Object(f.jsx)("a",{className:"btn btn-outline-primary mb-4",href:"".concat(u.lc,"profile/two_factor_authentication/disable/"),children:Object(u.nb)("Disable Two-Factor Authentication")}),Object(f.jsxs)("p",{className:"mb-2",children:[Object(u.nb)("If you don't have any device with you, you can access your account using backup codes."),1==J?Object(u.nb)("You have only one backup code remaining."):Object(u.nb)("You have {num} backup codes remaining.").replace("{num}",J)]}),Object(f.jsx)("a",{href:"".concat(u.lc,"profile/two_factor_authentication/backup/tokens/"),className:"btn btn-outline-primary",children:Object(u.nb)("Show Codes")})]})},c.renderDisabled=function(){return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)("p",{className:"mb-2",children:Object(u.nb)("Two-factor authentication is not enabled for your account. Enable two-factor authentication for enhanced account security.")}),Object(f.jsx)("a",{href:"".concat(u.lc,"profile/two_factor_authentication/setup/"),className:"btn btn-outline-primary",children:Object(u.nb)("Enable Two-Factor Authentication")})]})},c}return Object(c.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"setting-item",id:"two-factor-auth",children:[Object(f.jsx)("h3",{className:"setting-item-heading",children:Object(u.nb)("Two-Factor Authentication")}),Y?this.renderEnabled():this.renderDisabled()]})}}]),n}(r.a.Component),q=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).disconnect=function(){c.form.current.submit()},c.form=r.a.createRef(),c}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.formActionURL,n=e.csrfToken,a=e.toggle;return Object(f.jsxs)(A.x,{centered:!0,isOpen:!0,toggle:a,children:[Object(f.jsx)(A.A,{toggle:a,children:Object(u.nb)("Disconnect")}),Object(f.jsxs)(A.y,{children:[Object(f.jsx)("p",{children:Object(u.nb)("Are you sure you want to disconnect?")}),Object(f.jsx)("form",{ref:this.form,className:"d-none",method:"post",action:t,children:Object(f.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:n})})]}),Object(f.jsxs)(A.z,{children:[Object(f.jsx)(A.c,{color:"secondary",onClick:a,children:Object(u.nb)("Cancel")}),Object(f.jsx)(A.c,{color:"primary",onClick:this.disconnect,children:Object(u.nb)("Disconnect")})]})]})}}]),n}(o.Component),K=window.app.pageOptions,Q=K.csrfToken,X=K.langCode,Z=K.socialConnected,$=K.socialNextPage,ee=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).confirmDisconnect=function(e){e.preventDefault(),c.setState({isConfirmDialogOpen:!0})},c.toggleDialog=function(){c.setState({isConfirmDialogOpen:!c.state.isConfirmDialogOpen})},c.state={isConfirmDialogOpen:!1},c}return Object(c.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsxs)("div",{className:"setting-item",id:"social-auth",children:[Object(f.jsx)("h3",{className:"setting-item-heading",children:Object(u.nb)("Social Login")}),Object(f.jsx)("p",{className:"mb-2",children:"zh-cn"==X?"\u4f01\u4e1a\u5fae\u4fe1":"WeChat Work"}),Z?Object(f.jsx)("a",{href:"#",className:"btn btn-outline-primary",onClick:this.confirmDisconnect,children:Object(u.nb)("Disconnect")}):Object(f.jsx)("a",{href:"".concat(u.lc,"work-weixin/oauth-connect/?next=").concat(encodeURIComponent($)),className:"btn btn-outline-primary",children:Object(u.nb)("Connect")})]}),this.state.isConfirmDialogOpen&&Object(f.jsx)(D.a,{children:Object(f.jsx)(q,{formActionURL:"".concat(u.lc,"work-weixin/oauth-disconnect/?next=").concat(encodeURIComponent($)),csrfToken:Q,toggle:this.toggleDialog})})]})}}]),n}(r.a.Component),te=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).disconnect=function(){c.form.current.submit()},c.form=r.a.createRef(),c}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.formActionURL,n=e.csrfToken,a=e.toggle;return Object(f.jsxs)(A.x,{centered:!0,isOpen:!0,toggle:a,children:[Object(f.jsx)(A.A,{toggle:a,children:Object(u.nb)("Disconnect")}),Object(f.jsxs)(A.y,{children:[Object(f.jsx)("p",{children:Object(u.nb)("Are you sure you want to disconnect?")}),Object(f.jsx)("form",{ref:this.form,className:"d-none",method:"post",action:t,children:Object(f.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:n})})]}),Object(f.jsxs)(A.z,{children:[Object(f.jsx)(A.c,{color:"secondary",onClick:a,children:Object(u.nb)("Cancel")}),Object(f.jsx)(A.c,{color:"primary",onClick:this.disconnect,children:Object(u.nb)("Disconnect")})]})]})}}]),n}(o.Component),ne=window.app.pageOptions,ae=ne.csrfToken,ce=ne.langCode,se=ne.socialConnectedDingtalk,ie=ne.socialNextPage,oe=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).confirmDisconnect=function(e){e.preventDefault(),c.setState({isConfirmDialogOpen:!0})},c.toggleDialog=function(){c.setState({isConfirmDialogOpen:!c.state.isConfirmDialogOpen})},c.state={isConfirmDialogOpen:!1},c}return Object(c.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsxs)("div",{className:"setting-item",id:"social-auth",children:[Object(f.jsx)("h3",{className:"setting-item-heading",children:Object(u.nb)("Social Login")}),Object(f.jsx)("p",{className:"mb-2",children:"zh-cn"==ce?"\u9489\u9489":"Dingtalk"}),se?Object(f.jsx)("a",{href:"#",className:"btn btn-outline-primary",onClick:this.confirmDisconnect,children:Object(u.nb)("Disconnect")}):Object(f.jsx)("a",{href:"".concat(u.lc,"dingtalk/connect/?next=").concat(encodeURIComponent(ie)),className:"btn btn-outline-primary",children:Object(u.nb)("Connect")})]}),this.state.isConfirmDialogOpen&&Object(f.jsx)(D.a,{children:Object(f.jsx)(te,{formActionURL:"".concat(u.lc,"dingtalk/disconnect/?next=").concat(encodeURIComponent(ie)),csrfToken:ae,toggle:this.toggleDialog})})]})}}]),n}(r.a.Component),re=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).action=function(){c.form.current.submit()},c.form=r.a.createRef(),c}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.formActionURL,n=e.csrfToken,a=e.toggle;return Object(f.jsxs)(A.x,{centered:!0,isOpen:!0,toggle:a,children:[Object(f.jsx)(A.A,{toggle:a,children:Object(u.nb)("Delete Account")}),Object(f.jsxs)(A.y,{children:[Object(f.jsx)("p",{children:Object(u.nb)("Really want to delete your account?")}),Object(f.jsx)("form",{ref:this.form,className:"d-none",method:"post",action:t,children:Object(f.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:n})})]}),Object(f.jsxs)(A.z,{children:[Object(f.jsx)(A.c,{color:"secondary",onClick:a,children:Object(u.nb)("Cancel")}),Object(f.jsx)(A.c,{color:"primary",onClick:this.action,children:Object(u.nb)("Delete")})]})]})}}]),n}(o.Component),le=window.app.pageOptions.csrfToken,be=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).confirmDelete=function(e){e.preventDefault(),c.setState({isConfirmDialogOpen:!0})},c.toggleDialog=function(){c.setState({isConfirmDialogOpen:!c.state.isConfirmDialogOpen})},c.state={isConfirmDialogOpen:!1},c}return Object(c.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsxs)("div",{className:"setting-item",id:"del-account",children:[Object(f.jsx)("h3",{className:"setting-item-heading",children:Object(u.nb)("Delete Account")}),Object(f.jsx)("p",{className:"mb-2",children:Object(u.nb)("This operation will not be reverted. Please think twice!")}),Object(f.jsx)("button",{className:"btn btn-outline-primary",onClick:this.confirmDelete,children:Object(u.nb)("Delete")})]}),this.state.isConfirmDialogOpen&&Object(f.jsx)(D.a,{children:Object(f.jsx)(re,{formActionURL:"".concat(u.lc,"profile/delete/"),csrfToken:le,toggle:this.toggleDialog})})]})}}]),n}(r.a.Component),de=(n(128),n(144),n(1574),window.app.pageOptions),he=de.canUpdatePassword,ue=de.passwordOperationText,je=de.enableGetAuthToken,me=de.enableWebdavSecret,Oe=de.enableAddressBook,fe=de.twoFactorAuthEnabled,pe=de.enableWechatWork,ge=de.enableDingtalk,xe=de.enableDeleteAccount,ve=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).updateUserInfo=function(e){j.a.updateUserInfo(e).then((function(e){c.setState({userInfo:e.data}),m.a.success(Object(u.nb)("Success"))})).catch((function(e){var t=h.a.getErrorMsg(e);m.a.danger(t)}))},c.onSearchedClick=function(e){if(!0===e.is_dir){var t=u.lc+"library/"+e.repo_id+"/"+e.repo_name+e.path;Object(d.c)(t,{repalce:!0})}else{var n=u.lc+"lib/"+e.repo_id+"/file"+h.a.encodePath(e.path);window.open("about:blank").location.href=n}},c.handleContentScroll=function(e){var t=e.target.scrollTop,n=c.sideNavItems.filter((function(e,n){return e.show&&document.getElementById(e.href.substr(1)).offsetTop-45<t}));n.length&&c.setState({curItemID:n[n.length-1].href.substr(1)})},c.sideNavItems=[{show:!0,href:"#user-basic-info",text:Object(u.nb)("Profile")},{show:he,href:"#update-user-passwd",text:Object(u.nb)("Password")},{show:je,href:"#get-auth-token",text:Object(u.nb)("Web API Auth Token")},{show:me,href:"#update-webdav-passwd",text:Object(u.nb)("WebDav Password")},{show:Oe,href:"#list-in-address-book",text:Object(u.nb)("Global Address Book")},{show:!0,href:"#lang-setting",text:Object(u.nb)("Language")},{show:u.yb,href:"#email-notice",text:Object(u.nb)("Email Notification")},{show:fe,href:"#two-factor-auth",text:Object(u.nb)("Two-Factor Authentication")},{show:pe,href:"#social-auth",text:Object(u.nb)("Social Login")},{show:ge,href:"#social-auth",text:Object(u.nb)("Social Login")},{show:xe,href:"#del-account",text:Object(u.nb)("Delete Account")}],c.state={curItemID:c.sideNavItems[0].href.substr(1)},c}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.getUserInfo().then((function(t){e.setState({userInfo:t.data})})).catch((function(e){var t=h.a.getErrorMsg(e);m.a.danger(t)}))}},{key:"render",value:function(){return Object(f.jsx)(r.a.Fragment,{children:Object(f.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(f.jsxs)("div",{className:"top-header d-flex justify-content-between",children:[Object(f.jsx)("a",{href:u.lc,children:Object(f.jsx)("img",{src:u.Mb+u.Gb,height:u.Fb,width:u.Hb,title:u.mc,alt:"logo"})}),Object(f.jsx)(O.a,{onSearchedClick:this.onSearchedClick})]}),Object(f.jsxs)("div",{className:"flex-auto d-flex o-hidden",children:[Object(f.jsx)("div",{className:"side-panel o-auto",children:Object(f.jsx)(p,{data:this.sideNavItems,curItemID:this.state.curItemID})}),Object(f.jsxs)("div",{className:"main-panel d-flex flex-column",children:[Object(f.jsx)("h2",{className:"heading",children:Object(u.nb)("Settings")}),Object(f.jsxs)("div",{className:"content position-relative",onScroll:this.handleContentScroll,children:[Object(f.jsxs)("div",{id:"user-basic-info",className:"setting-item",children:[Object(f.jsx)("h3",{className:"setting-item-heading",children:Object(u.nb)("Profile Setting")}),Object(f.jsx)(w,{}),this.state.userInfo&&Object(f.jsx)(I,{userInfo:this.state.userInfo,updateUserInfo:this.updateUserInfo})]}),he&&Object(f.jsxs)("div",{id:"update-user-passwd",className:"setting-item",children:[Object(f.jsx)("h3",{className:"setting-item-heading",children:Object(u.nb)("Password")}),Object(f.jsx)("a",{href:"".concat(u.lc,"accounts/password/change/"),className:"btn btn-outline-primary",children:ue})]}),je&&Object(f.jsx)(S,{}),me&&Object(f.jsx)(P,{}),Oe&&this.state.userInfo&&Object(f.jsx)(L,{userInfo:this.state.userInfo,updateUserInfo:this.updateUserInfo}),Object(f.jsx)(M,{}),u.yb&&Object(f.jsx)(B,{}),fe&&Object(f.jsx)(H,{}),pe&&Object(f.jsx)(ee,{}),ge&&Object(f.jsx)(oe,{}),xe&&Object(f.jsx)(be,{})]})]})]})]})})}}]),n}(r.a.Component);b.a.render(Object(f.jsx)(ve,{}),document.getElementById("wrapper"))}},[[1573,1,0]]]);
//# sourceMappingURL=settings.chunk.js.map