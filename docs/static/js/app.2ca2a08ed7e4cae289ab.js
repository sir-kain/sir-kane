webpackJsonp([0],{"8CXP":function(t,e){},"9+kh":function(t,e){},BYNo:function(t,e){},Drsw:function(t,e){},L1Ci:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},o,!1,function(t){s("xT50")},null,null).exports,a=s("/ocq"),c={props:{msg:String}},r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"head"},[s("div",{staticClass:"menu"},[s("a",{staticClass:"logo",attrs:{href:"#"}},[s("span",[t._v("SK")]),t._v(" _sir_kane ")]),t._v(" "),s("ul",[s("li",{staticClass:"mr"},[s("a",{attrs:{href:"#competences"}},[t._v("Skills")])]),t._v(" "),s("li",{staticClass:"mr"},[s("a",{attrs:{href:"#realisations"}},[t._v("Projects")])]),t._v(" "),s("li",{staticClass:"mr"},[s("a",{attrs:{href:"#"}},[t._v("Blog")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Contact")])])])])])}]};var l=s("VU/8")(c,r,!1,function(t){s("Drsw")},"data-v-d6feaf02",null).exports,p=s("C/JF"),d=s("DfMW"),u=s("1e6/");p.c.add(d.d,d.b,d.c,d.e,d.a);var m={props:{msg:String},data:function(){return{twitterIcon:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1545589417/portfolio/icons/twitter.svg",stackOverflowIcon:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1545589417/portfolio/icons/so.svg",githubIcon:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1545589417/portfolio/icons/github.png",linkedInIcon:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1545589417/portfolio/icons/linkedin.svg",gmailIcon:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1545589417/portfolio/icons/gmail.svg",devToIcon:"https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"}},methods:{liRef:function(t){window.open(t,"_blank")}},components:{FontAwesomeIcon:u.a}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hero"},[t._m(0),t._v(" "),s("div",{staticClass:"presentation"},[t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("\n      You can also find me here:\n    ")]),t._v(" "),s("ul",[s("li",{on:{click:function(e){return t.liRef("https://github.com/sir-kain")}}},[s("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg"}})],1),t._v(" "),s("li",{on:{click:function(e){return t.liRef("https://www.linkedin.com/in/ndiaye-ahmadou-waly-a61056ba/")}}},[s("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"],size:"lg"}})],1),t._v(" "),s("li",{on:{click:function(e){return t.liRef("https://stackoverflow.com/users/8319507/sir-kane")}}},[s("font-awesome-icon",{attrs:{icon:["fab","stack-overflow"],size:"lg"}})],1),t._v(" "),s("li",{on:{click:function(e){return t.liRef("https://twitter.com/_sir_kane")}}},[s("font-awesome-icon",{attrs:{icon:["fab","twitter"],size:"lg"}})],1),t._v(" "),s("li",{on:{click:function(e){return t.liRef("https://dev.to/sir_kane")}}},[s("font-awesome-icon",{attrs:{icon:["fab","dev"],size:"lg"}})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-hero"},[e("img",{staticStyle:{filter:"grayscale(0)"},attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538255702/sir_kane.jpg",alt:"image sir_kane"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h1",[this._v("Web developer")]),this._v(" "),e("img",{attrs:{src:"https://www.countryflags.io/sn/flat/24.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      Hello, I'm Ahmadou Waly Ndiaye. I'm a web developer working for "),e("a",{attrs:{href:"https://sn.coinafrique.com",target:"__blank"}},[this._v("CoinAfrique")]),this._v(" and I love the Web!\n    ")])}]};var h=s("VU/8")(m,v,!1,function(t){s("sler")},"data-v-e8b940fe",null).exports;p.c.add(d.d,d.b,d.c,d.e);var _={props:{msg:String},components:{FontAwesomeIcon:u.a}},g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-content"},[this._v("\n      © sir_kane\n    ")])])}]};var f=s("VU/8")(_,g,!1,function(t){s("9+kh")},"data-v-69fb1f55",null).exports,b=s("fhbW");p.c.add(b.a,b.b,b.c,b.e,b.d);var y={props:{msg:String,title:String,link:Boolean},data:function(){return{selectedCompetenceType:{langages:!0,outils:!1,contributions:!1},sectionStatus:!1}},methods:{showItem:function(t){"langages"===t?(this.selectedCompetenceType={langages:!0,outils:!1,contributions:!1},this.sectionStatus=!0,this.$emit("langages-clicked",this.selectedCompetenceType)):"outils"===t?(this.selectedCompetenceType={langages:!1,outils:!0,contributions:!1},this.sectionStatus=!0,this.$emit("langages-clicked",this.selectedCompetenceType)):(this.selectedCompetenceType={langages:!1,outils:!1,contributions:!0},this.sectionStatus=!0,this.$emit("langages-clicked",this.selectedCompetenceType))},togglesection:function(){this.sectionStatus=!this.sectionStatus,this.$emit("section-clicked",this.sectionStatus)}},components:{FontAwesomeIcon:u.a}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"separator",attrs:{id:"separator"}},[s("div",{staticClass:"separator__title",on:{click:function(e){return t.togglesection()}}},[s("font-awesome-icon",{attrs:{size:"xs",icon:t.sectionStatus?"chevron-down":"chevron-right"}}),t._v(" "),s("h2",[t._v(t._s(t.title))])],1),t._v(" "),t.link?s("ul",{staticClass:"separator__menu-s"},[s("li",[s("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.showItem("langages")}}},[s("font-awesome-icon",{attrs:{icon:"code"}}),t._v(" "),s("span",[t._v("Langages & Frameworks")])],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.showItem("outils")}}},[s("font-awesome-icon",{attrs:{icon:"wrench"}}),t._v(" "),s("span",[t._v("Tools")])],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.showItem("contributions")}}},[s("font-awesome-icon",{attrs:{icon:"code-branch"}}),t._v(" "),s("span",[t._v("Contributions")])],1)])]):t._e()])},staticRenderFns:[]};var w=s("VU/8")(y,C,!1,function(t){s("L1Ci")},"data-v-f6265a56",null).exports,k={props:{msg:String},data:function(){return{langages:!0,outils:!1,contributions:!1,sectionStatus:!1}},components:{Separator:w},methods:{clickedLangages:function(t){t.langages?(this.langages=!0,this.outils=!1,this.contributions=!1,this.sectionStatus=!0):t.outils?(this.langages=!1,this.outils=!0,this.contributions=!1,this.sectionStatus=!0):t.contributions&&(this.langages=!1,this.outils=!1,this.contributions=!0,this.sectionStatus=!0)},clickedSection:function(t){this.sectionStatus=t}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"competences",attrs:{id:"competences"}},[s("Separator",{attrs:{title:"Skills",link:!0},on:{"langages-clicked":t.clickedLangages,"section-clicked":t.clickedSection}}),t._v(" "),t.langages&&t.sectionStatus?s("div",{staticClass:"line"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)]):t._e(),t._v(" "),t.outils&&t.sectionStatus?s("div",{staticClass:"line"},[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)]):t._e(),t._v(" "),t.contributions&&t.sectionStatus?s("div",{staticClass:"line-v2"},[t._m(9),t._v(" "),t._m(10)]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box v-span"},[e("div",{staticClass:"competence"},[e("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/html5.png",alt:""}}),this._v(" "),e("span",[this._v("Html5")])]),this._v(" "),e("div",{staticClass:"competence"},[e("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/css.png",alt:""}}),this._v(" "),e("span",[this._v(" CSS ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box h-span"},[e("div",{staticClass:"competence"},[e("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/phplang.png",alt:""}}),this._v(" "),e("span",[this._v("Php")])]),this._v(" "),e("div",{staticClass:"competence"},[e("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/symfony.png",alt:""}}),this._v(" "),e("span",[this._v("Symfony")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("div",{staticClass:"competence"},[e("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/wordpress.png",alt:""}}),this._v(" "),e("span",[this._v("Wordpress")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("div",{staticClass:"competence"},[e("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/laravel.png",alt:""}}),this._v(" "),e("span",[this._v("Laravel")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box h-span v-span"},[s("div",{staticClass:"competence"},[s("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/js.png",alt:""}}),t._v(" "),s("span",[t._v("Javascript")])]),t._v(" "),s("div",{staticClass:"competence"},[s("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/vuejs.png",alt:""}}),t._v(" "),s("span",[t._v("Vue.js")])]),t._v(" "),s("div",{staticClass:"competence"},[s("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/angular.png",alt:""}}),t._v(" "),s("span",[t._v("Angular")])]),t._v(" "),s("div",{staticClass:"competence"},[s("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1563917471/portfolio/competences/nodejs.svg",alt:""}}),t._v(" "),s("span",[t._v("Nodejs")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("div",{staticClass:"competence"},[e("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/tools/git.png",alt:""}}),this._v(" "),e("span",[this._v("Git")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box h-span"},[e("div",{staticClass:"competence"},[e("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/tools/webpack.png",alt:""}}),this._v(" "),e("span",[this._v("Webpack")])]),this._v(" "),e("div",{staticClass:"competence"},[e("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/tools/gulp.png",alt:""}}),this._v(" "),e("span",[this._v("Gulp")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box h-span"},[e("div",{staticClass:"competence"},[e("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/tools/linux.png",alt:""}}),this._v(" "),e("span",[this._v("Linux")])]),this._v(" "),e("div",{staticClass:"competence"},[e("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/tools/intellij.png",alt:""}}),this._v(" "),e("span",[this._v("Intellij")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("div",{staticClass:"competence"},[e("img",{attrs:{src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1577050169/portfolio/competences/tools/firebase.svg",alt:""}}),this._v(" "),e("span",[this._v(" Firebase ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-contribution"},[e("div",{staticClass:"contribution"},[e("img",{attrs:{width:"25px",src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/symfony.png",alt:"Symfony icon"}}),this._v(" "),e("a",{attrs:{target:"__blank",href:"https://github.com/symfony/symfony/commits?author=sir-kain"}},[this._v("symfony/symfony/commits?author=sir-kain")])]),this._v(" "),e("div",{staticClass:"contribution"},[e("img",{attrs:{width:"25px",src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1540145019/sonataicon.png",alt:"Sonata icon"}}),this._v(" "),e("a",{attrs:{target:"__blank",href:"https://github.com/sonata-project/SonataAdminBundle/commits?author=sir-kain"}},[this._v("SonataAdminBundle/commits?author=sir-kain")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-contribution"},[e("div",{staticClass:"contribution"},[e("img",{attrs:{width:"25px",src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/symfony.png",alt:"symfony icon"}}),this._v(" "),e("a",{attrs:{target:"__blank",href:"https://github.com/symfony/symfony-docs/commits?author=sir-kain"}},[this._v("symfony/symfony-docs/commits?author=sir-kain")])]),this._v(" "),e("div",{staticClass:"contribution"},[e("img",{attrs:{width:"25px",src:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/vuejs.png",alt:"vuejs icon"}}),this._v(" "),e("a",{attrs:{target:"__blank",href:"https://github.com/vuejs-fr/vuejs.org/commits?author=sir-kain"}},[this._v("vuejs-fr/vuejs.org/commits?author=sir-kain")])])])}]};var q=s("VU/8")(k,S,!1,function(t){s("eNsl")},"data-v-a1290c20",null).exports,j=(s("Oc0C"),{props:{msg:String},data:function(){return{realisations:[{id:4545,image:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1580824158/portfolio/projects/vscmp.png",title:"MediaPlayer for VsCoode",body_title:"MediaPlayer for VsCode",libelle:"Extension VsCode permettant de streamer du sons (Youtube, Podcast)",description:"",link:"https://marketplace.visualstudio.com/items?itemName=sirkane.vscode-mediaplayer"},{id:0,image:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1580823466/portfolio/projects/coinafrique.png",title:"CoinAfrique",body_title:"CoinAfrique",libelle:"Site de mise en relation entre clients et vendeurs",description:"",link:"https://web.coinafrique.com/"},{id:1,image:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1525458858/portfolio/projects/logo.png",title:"PGDE",body_title:"PGDE",libelle:"Plateforme de Gestion des Demandes d'Emploi",description:"",link:"https://emploi-fpublique.sec.gouv.sn/"},{id:2,image:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538313076/portfolio/projects/cmsfp.png",title:"CMSFP",body_title:"CMSFP",libelle:"Centre Médico-Social de la Fonction Publique SN",link:""},{id:3,image:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538259814/portfolio/projects/cg.png",title:"Cellule Genre",body_title:"Cellule Genre",libelle:"Cellule Genre du Ministère de la Santé et de l'Action Sociale du Sénégal",link:"https://cellulegenre-sante.herokuapp.com/"},{id:4,image:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538259110/portfolio/projects/ng5.png",title:"Discovering angular 5",body_title:"Discovering angular 5",libelle:"Little todoList app to learn angular 5.",description:"Little todoList app to learn angular 5.",link:"https://ng5experience.herokuapp.com/"},{id:5,image:"https://res.cloudinary.com/dpdwdstqt/image/upload/v1538260086/portfolio/projects/lsr.png",title:"Les Specialistes en Réseaux (LSR)",body_title:"LSR website",libelle:"Les Specialistes en Réseaux (LSR)",description:"WordPress website during my internship at LSR. I no longer manage his administration.",link:"http://lsreseaux.com/"}],sectionStatus:!1}},components:{Separator:w},methods:{clickproject:function(t){Array.prototype.slice.call(document.querySelectorAll(".project__body-current")).map(function(t){t.remove()});var e=t.target.closest(".project"),s=e.querySelector(".project__body").cloneNode(!0);s.classList.add("project__body-current"),e.after(s),window.scrollTo({behavior:"smooth",left:0,top:e.offsetTop})},clickedSection:function(t){this.sectionStatus=t}}}),x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"realisations",attrs:{id:"realisations"}},[s("Separator",{attrs:{title:"Projects"},on:{"section-clicked":t.clickedSection}}),t._v(" "),t.sectionStatus?s("div",{staticClass:"projects"},t._l(t.realisations,function(e){return s("div",{key:e.id,staticClass:"project",on:{click:function(e){return e.preventDefault(),t.clickproject(e)}}},[s("img",{staticClass:"project__image",attrs:{src:e.image,alt:"logo"}}),t._v(" "),s("h2",{staticClass:"project__title"},[t._v(" "+t._s(e.title)+" ")]),t._v(" "),s("p",{staticClass:"project__libelle"},[t._v(" "+t._s(e.libelle)+" ")]),t._v(" "),s("div",{staticClass:"project__body"},[s("h2",{staticClass:"project__body-title"},[t._v(" "+t._s(e.body_title)+" ")]),t._v(" "),s("p",[t._v("\n          "+t._s(e.description)+"\n        ")]),t._v(" "),s("a",{attrs:{href:e.link,target:"_blank"}},[t._v("Link")])])])}),0):t._e()],1)},staticRenderFns:[]};var E={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},components:{Head:l,Hero:h,Competences:q,Realisations:s("VU/8")(j,x,!1,function(t){s("BYNo")},"data-v-74c84add",null).exports,Footer:f}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("Head"),this._v(" "),e("Hero"),this._v(" "),e("Competences"),this._v(" "),e("Realisations")],1)},staticRenderFns:[]};var R=s("VU/8")(E,$,!1,function(t){s("8CXP")},"data-v-68b1440e",null).exports;i.a.use(a.a);var I=new a.a({routes:[{path:"/",name:"Home",component:R}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:I,components:{App:n},template:"<App/>"})},Oc0C:function(t,e,s){t.exports=s.p+"static/img/ng5.3fb08c8.png"},eNsl:function(t,e){},sler:function(t,e){},xT50:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2ca2a08ed7e4cae289ab.js.map