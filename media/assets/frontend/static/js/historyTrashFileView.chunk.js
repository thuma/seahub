(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[9],{1563:function(e,t,n){n(54),e.exports=n(1693)},1564:function(e,t,n){},1693:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(7),i=n(9),r=n(8),o=n(2),s=n.n(o),l=n(25),j=n.n(l),u=n(248),p=n.n(u),b=n(1),d=n(0),f=window.app.pageOptions,O=f.fileName,h=f.repoID,v=f.objID,m=f.path;var x=function(){return Object(d.jsx)("a",{href:"".concat(b.lc,"repo/").concat(h,"/").concat(v,"/download/?file_name=").concat(encodeURIComponent(O),"&p=").concat(encodeURIComponent(m)),className:"btn btn-secondary",children:Object(b.nb)("Download")})},w=(n(765),window.app.pageOptions),y=w.fromTrash,g=w.fileName,k=w.commitTime,N=w.canDownloadFile,C=w.enableWatermark,F=w.userNickName,I=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(d.jsxs)("div",{className:"file-view-header d-flex justify-content-between align-items-center",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"file-title",children:g}),Object(d.jsx)("p",{className:"meta-info m-0",children:y?"".concat(Object(b.nb)("Current Path: ")).concat(Object(b.nb)("Trash")):k})]}),N&&Object(d.jsx)(x,{})]}),Object(d.jsx)("div",{className:"file-view-body flex-auto d-flex o-hidden",children:this.props.content})]})}}]),n}(s.a.Component);C&&p.a.init({watermark_txt:"".concat(b.kc," ").concat(F),watermark_alpha:.075});var P=I,D=window.app.pageOptions,T=D.canDownloadFile,E=D.err,S="File preview unsupported",L=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e;return e=E==S||this.props.err==S?Object(d.jsx)("p",{children:Object(b.nb)("Online view is not applicable to this file format")}):Object(d.jsx)("p",{className:"error",children:E}),Object(d.jsx)("div",{className:"file-view-content flex-1 o-auto",children:Object(d.jsxs)("div",{className:"file-view-tip",children:[e,T&&Object(d.jsx)(x,{})]})})}}]),n}(s.a.Component),M=n(252),R=n(316),U=n(317),W=n(5),_=n(249),B=n.n(_),J=(n(234),n(206),n(362),n(509),n(510),n(511),n(197),n(512),n(513),n(303),n(283),n(514),window.app.pageOptions),V=J.fileExt,z=J.fileContent,A={lineNumbers:!0,mode:W.a.chooseLanguage(V),extraKeys:{Ctrl:"autocomplete"},theme:"default",textWrapping:!0,lineWrapping:!0,readOnly:!0,cursorBlinkRate:-1},G=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"file-view-content flex-1 text-file-view",children:Object(d.jsx)(B.a,{ref:"code-mirror-editor",value:z,options:A})})}}]),n}(s.a.Component),K=n(117),q=(n(1564),window.app.pageOptions.fileContent),H=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"file-view-content flex-1 o-auto",children:Object(d.jsx)("div",{className:"md-content",children:Object(d.jsx)(K.a,{markdownContent:q,showTOC:!1,scriptSource:b.Mb+"js/mathjax/tex-svg.js"})})})}}]),n}(s.a.Component),Q=n(318),X=n(319),Y=window.app.pageOptions,Z=Y.fileType,$=Y.err,ee=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){if($)return Object(d.jsx)(P,{content:Object(d.jsx)(L,{})});var e;switch(Z){case"Image":e=Object(d.jsx)(M.a,{tip:Object(d.jsx)(L,{})});break;case"SVG":e=Object(d.jsx)(R.a,{});break;case"PDF":e=Object(d.jsx)(U.a,{});break;case"Text":e=Object(d.jsx)(G,{});break;case"Markdown":e=Object(d.jsx)(H,{});break;case"Video":e=Object(d.jsx)(Q.a,{});break;case"Audio":e=Object(d.jsx)(X.a,{});break;default:e=Object(d.jsx)(L,{err:"File preview unsupported"})}return Object(d.jsx)(P,{content:e})}}]),n}(s.a.Component);j.a.render(Object(d.jsx)(ee,{}),document.getElementById("wrapper"))},252:function(e,t,n){"use strict";var a,c,i=n(6),r=n(7),o=n(9),s=n(8),l=n(2),j=n.n(l),u=n(5),p=n(1),b=(n(515),n(0)),d=window.app.pageOptions,f=d.repoID,O=d.repoEncrypted,h=d.fileExt,v=d.filePath,m=d.fileName,x=d.thumbnailSizeForOriginal,w=d.previousImage,y=d.nextImage,g=d.rawPath,k=d.xmindImageSrc;w&&(a="".concat(p.lc,"lib/").concat(f,"/file").concat(u.a.encodePath(w))),y&&(c="".concat(p.lc,"lib/").concat(f,"/file").concat(u.a.encodePath(y)));var N=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleLoadFailure=function(){a.setState({loadFailed:!0})},a.state={loadFailed:!1},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",(function(e){w&&37==e.keyCode&&(location.href=a),y&&39==e.keyCode&&(location.href=c)}))}},{key:"render",value:function(){if(this.state.loadFailed)return this.props.tip;var e="";this.props.canUseThumbnail&&!O&&["tif","tiff","psd"].includes(h)&&(e="".concat(p.lc,"thumbnail/").concat(f,"/").concat(x).concat(u.a.encodePath(v)));var t=k?"".concat(p.lc).concat(k):"";return Object(b.jsxs)("div",{className:"file-view-content flex-1 image-file-view",children:[w&&Object(b.jsx)("a",{href:a,id:"img-prev",title:Object(p.nb)("you can also press \u2190 "),children:Object(b.jsx)("span",{className:"fas fa-chevron-left"})}),y&&Object(b.jsx)("a",{href:c,id:"img-next",title:Object(p.nb)("you can also press \u2192"),children:Object(b.jsx)("span",{className:"fas fa-chevron-right"})}),Object(b.jsx)("img",{src:t||e||g,alt:m,id:"image-view",onError:this.handleLoadFailure})]})}}]),n}(j.a.Component);t.a=N},316:function(e,t,n){"use strict";var a=n(6),c=n(7),i=n(9),r=n(8),o=n(2),s=n.n(o),l=(n(518),n(0)),j=window.app.pageOptions,u=j.fileName,p=j.rawPath,b=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"file-view-content flex-1 svg-file-view",children:Object(l.jsx)("img",{src:p,alt:u,id:"svg-view"})})}}]),n}(s.a.Component);t.a=b},317:function(e,t,n){"use strict";var a=n(6),c=n(7),i=n(9),r=n(8),o=n(2),s=n.n(o),l=n(154),j=(n(304),n(0)),u=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"file-view-content flex-1 pdf-file-view",children:Object(j.jsx)(l.a,{})})}}]),n}(s.a.Component);t.a=u},318:function(e,t,n){"use strict";var a=n(42),c=n(6),i=n(7),r=n(9),o=n(8),s=n(2),l=n.n(s),j=n(250),u=(n(517),n(0)),p=window.app.pageOptions.rawPath,b=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e={autoplay:!1,controls:!0,preload:"auto",sources:[{src:p}]};return Object(u.jsx)("div",{className:"file-view-content flex-1 video-file-view",children:Object(u.jsx)(j.a,Object(a.a)({},e))})}}]),n}(l.a.Component);t.a=b},319:function(e,t,n){"use strict";var a=n(42),c=n(6),i=n(7),r=n(9),o=n(8),s=n(2),l=n.n(s),j=n(251),u=(n(519),n(0)),p=window.app.pageOptions.rawPath,b=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e={autoplay:!1,controls:!0,preload:"auto",sources:[{src:p}]};return Object(u.jsx)("div",{className:"file-view-content flex-1 audio-file-view",children:Object(u.jsx)(j.a,Object(a.a)({},e))})}}]),n}(l.a.Component);t.a=b}},[[1563,1,0]]]);
//# sourceMappingURL=historyTrashFileView.chunk.js.map