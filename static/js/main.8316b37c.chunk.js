(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__235E8",Modal:"Modal_Modal__3f179"}},13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__Xl2eF",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2MrlX"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3HVnB"}},25:function(e,t,a){e.exports={Button:"Button_Button__22l64"}},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(10),c=a.n(o),l=a(14),s=a(4),i=a(5),u=a(7),h=a(6),g=a(23),m=a.n(g);function d(e){var t=e.searchQuery,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r,o=e.perPage,c=void 0===o?12:o;return m.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(n,"&key=").concat("20073570-94be55d6c10f1ac23fcd8c784","&image_type=photo&orientation=horizontal&per_page=").concat(c)).then((function(e){return e.data.hits}))}var f=a(12),y=a.n(f),j=a(0),b=document.getElementById("modal-root"),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!1},e.handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e.handleLoad=function(){e.setState({isLoading:!0})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.handleBackdropClick,t=this.props.largeImgUrl;return Object(o.createPortal)(Object(j.jsx)("div",{className:y.a.Overlay,onClick:e,children:Object(j.jsx)("div",{className:y.a.Modal,children:Object(j.jsx)("img",{src:t,alt:"Gallery item",onLoad:this.handleLoad})})}),b)}}]),a}(r.Component),O=a(13),v=a.n(O),I=function(e){var t=e.gallery,a=e.setLargeImg,r=e.toggleModal;return t.map((function(e){var t=e.webformatURL,n=e.tags,o=e.id;return Object(j.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(j.jsx)("img",{onClick:function(){return a(e)},src:t,alt:n,className:v.a.ImageGalleryItemImage,onClose:r})},o)}))},_=a(24),S=a.n(_),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.gallery,a=e.setLargeImg,r=e.toggleModal;return Object(j.jsx)("ul",{className:S.a.ImageGallery,children:Object(j.jsx)(I,{gallery:t,setLargeImg:a,toggleModal:r})})}}]),a}(r.Component),L=a(8),w=a.n(L),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:w.a.Searchbar,children:Object(j.jsxs)("form",{className:w.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:w.a.SearchFormButton,children:Object(j.jsx)("span",{className:w.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:w.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,value:this.state.query,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(r.Component),C=a(25),M=a.n(C),B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("button",{type:"button",className:M.a.Button,onClick:this.props.onClick,children:"Load more"})}}]),a}(r.Component),F=a(26),N=a.n(F),G=a(9),Q=a.n(G),P=function(e){var t=e.fetchLength,a=e.galleryLength,r=e.searchQuery,n=e.error;if(n)return Object(j.jsx)("p",{className:Q.a.error,children:"Oops! Something wrong! Request error!"});if(!n){if(!r)return Object(j.jsx)("p",{className:Q.a.error,children:"Please enter image name!"});if(r){if(!t&&!a)return Object(j.jsx)("p",{className:Q.a.error,children:"Image not found. Please check your request and try again!"});if(t<12&&a>0)return Object(j.jsx)("p",{className:Q.a.error,children:"These are all the images we found!"})}}return Object(j.jsx)("p",{})};P.defaultProps={fetchLength:0,galleryLength:0,searchQuery:"",error:!1};var q=P,E=(a(70),a(71),a(72),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={gallery:[],currentPage:1,searchQuery:"",isLoading:!1,error:!1,selectedImg:"",showModal:!1,fetchLength:null},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,gallery:[],error:!1,selectedImg:"",showModal:!1,fetchLength:0})},e.getImages=function(){var t=e.state,a={currentPage:t.currentPage,searchQuery:t.searchQuery};e.setState({isLoading:!0}),d(a).then((function(t){e.setState((function(e){return{gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(t)),currentPage:e.currentPage+1,fetchLength:t.length}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.setLargeImg=function(t){e.toggleModal(),e.setState({selectedImg:t.largeImageURL})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.getImages()}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.gallery,r=e.isLoading,n=e.error,o=e.selectedImg,c=e.fetchLength,l=e.searchQuery,s=a.length>0&&!r;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(k,{onSubmit:this.onChangeQuery}),Object(j.jsx)(x,{gallery:a,setLargeImg:this.setLargeImg}),n&&Object(j.jsx)(q,{message:n.message}),r&&Object(j.jsx)(N.a,{type:"Puff",color:"#00BFFF",height:50,width:50,timeout:3e3,className:"loader"}),s&&Object(j.jsx)(B,{onClick:this.getImages}),t&&Object(j.jsx)(p,{largeImgUrl:o,onClose:this.toggleModal}),Object(j.jsx)(q,{fetchLength:c,galleryLength:a.length,searchQuery:l,error:n})]})}}]),a}(r.Component));a(73);c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3HKGh",SearchForm:"Searchbar_SearchForm__1IaLM",SearchFormButton:"Searchbar_SearchFormButton__1tb_s",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1Q_gT",SearchFormInput:"Searchbar_SearchFormInput__2_XHt"}},9:function(e,t,a){e.exports={error:"Error_error__1vvBx"}}},[[74,1,2]]]);
//# sourceMappingURL=main.8316b37c.chunk.js.map