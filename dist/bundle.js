(()=>{"use strict";function e(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var i,s,l,a,c,u,d,f,h,p,m,y,v,b,S,w,g,x,k,A,E,_,C,T,q,L;L=document.querySelector(".clubs-list>ul"),document.querySelector(".head").addEventListener("click",(function(e){var t=e.target;t==t.closest(".clubs-list>p")?L.hasAttribute("style")?L.removeAttribute("style"):L.setAttribute("style","display:block"):t==t.closest(".open-popup")?(e.preventDefault(),document.querySelector("#free_visit_form").style.display="block"):t==t.closest(".callback-btn")&&(document.querySelector("#callback_form").style.display="block")})),document.querySelector("body").addEventListener("click",(function(e){var t=e.target;t==t.closest(".overlay")?t.parentNode.removeAttribute("style"):(t==t.closest(".close_icon")||t==t.closest(".close-btn"))&&t.parentNode.parentNode.parentNode.removeAttribute("style")})),q=document.querySelector(".fixed-gift>img"),"/index.html"!=window.location.pathname&&"/"!=window.location.pathname&&"/#"!=window.location.pathname||q.addEventListener("click",(function(){document.querySelector("#gift").style.display="block"})),document.querySelector(".top-menu").addEventListener("click",(function(e){var t=e.target;if(t==t.closest(".scroll>a")){e.preventDefault();var n=t.hash;document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}})),C=document.querySelector(".main-slider").querySelectorAll(".slide"),T=0,setInterval((function(){4==T?(C[T].style.display="none",C[0].removeAttribute("style"),T=0):(C[T].style.display="none",C[T+1].removeAttribute("style"),T++)}),4e3),new(function(){function o(e){var t=e.main,n=e.wrap,r=e.next,i=e.prev,s=e.infinity,l=void 0!==s&&s,a=e.position,c=void 0===a?0:a,u=e.slidesToShow,d=void 0===u?3:u,f=e.responsive,h=void 0===f?[{breakpoint:991,slideToShow:2},{breakpoint:766,slideToShow:1}]:f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.main=document.querySelector(t),this.wrap=document.querySelector(n),this.slides=document.querySelector(n).children,this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=d,this.options={position:c,infinity:l,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=h}var r,i;return r=o,(i=[{key:"init",value:function(){this.main||this.wrap||console.warn('slider-carousel: необходимо два свойства, "main" и "wrap"'),this.addClass(),this.addStyle(),this.responsive&&this.responseInit(),this.prev&&this.next||this.addArrow(),this.controlSlider()}},{key:"addClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var t,n=function(t,n){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=e(t))){o&&(t=o);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){a=!0,s=e},f:function(){try{l||null==o.return||o.return()}finally{if(a)throw s}}}}(this.slides);try{for(n.s();!(t=n.n()).done;)t.value.classList.add("glo-slider__item")}catch(e){n.e(e)}finally{n.f()}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarusel-style");e||((e=document.createElement("style")).id="sliderCarusel-style"),e.textContent="\n                .glo-slider{\n                    overflow: hidden;\n                }\n                .glo-slider__wrap {\n                    display: flex;\n                    transition: transform 0.5s;\n                    will-change: transform;\n                }\n                .glo-slider__item {\n                    flex: 0 0 ".concat(this.options.widthSlide,"%;\n                    margin: auto 0;\n                }\n            "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-"+this.options.widthSlide*this.options.position+"%)")}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-"+this.options.widthSlide*this.options.position+"%)")}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.textContent="\n            .glo-slider__next,\n            .glo-slider__prev{\n                margin: 0 10px;\n                border:20px solid transparent;\n                background: transparent;\n            }\n            .glo-slider__next{\n                border-left-color: #19bbff;\n            }\n            .glo-slider__prev{\n                border-right-color: #19bbff;\n            }\n\n            .glo-slider__prev:hover,\n            .glo-slider__next:hover,\n            .glo-slider__prev:focus,\n            .glo-slider__next:focus{\n                background:transporant;\n                outline:transporant;\n            }\n            ",document.head.appendChild(e)}},{key:"responseInit",value:function(){var n,o=this,r=this.slidesToShow,i=this.responsive.map((function(e){return e.breakpoint})),s=Math.max.apply(Math,function(e){if(Array.isArray(e))return t(e)}(n=i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(n)||e(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=function(){var e=document.documentElement.clientWidth;if(e<s)for(var t=0;t<i.length;t++)e<i[t]&&(o.slidesToShow=o.responsive[t].slideToShow,o.options.widthSlide=Math.floor(100/o.slidesToShow),o.options.maxPosition=o.slides.length-o.slidesToShow,o.addStyle());else o.slidesToShow=r,o.options.widthSlide=Math.floor(100/o.slidesToShow),o.options.maxPosition=o.slides.length-o.slidesToShow,o.addStyle()};l(),window.addEventListener("resize",l)}}])&&n(r.prototype,i),o}())({main:".carousel_wrap",wrap:".services-slider",prev:".car-slider-left",next:".car-slider-right",slidesToShow:4,infinity:!0,responsive:[{breakpoint:1337,slideToShow:3},{breakpoint:1161,slideToShow:2},{breakpoint:781,slideToShow:1}]}).init(),v=document.querySelectorAll(".gallery-slider>.slide"),b=document.querySelector(".gallery-slider"),S=document.querySelectorAll(".slider-dots>li"),w=0,g=function(e,t){e[t].style.display="none"},x=function(e,t,n){e[t].classList.remove(n)},k=function(e,t,n){e[t].classList.add(n)},A=function(e,t){e[t].removeAttribute("style")},E=function(){g(v,w),x(S,w,"slick-active"),++w>=v.length&&(w=0),A(v,w),k(S,w,"slick-active")},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;y=setInterval(E,e)},b.addEventListener("click",(function(e){e.preventDefault();var t=e.target;console.dir(t),t.matches(".slider-arrow,.dot,span")&&(g(v,w),x(S,w,"slick-active"),t.parentNode.matches(".next")?(console.dir(t),w++):t.parentNode.matches(".prev")?w--:t.matches(".dot")&&S.forEach((function(e,n){e===t.parentNode&&(w=n)})),w>=v.length&&(w=0),w<0&&(w=v.length-1),A(v,w),k(S,w,"slick-active"))})),b.addEventListener("mouseover",(function(e){(e.target.matches(".slider-arrow>span")||e.target.matches(".dot"))&&clearInterval(y)})),b.addEventListener("mouseout",(function(e){(e.target.matches(".slider-arrow>span")||e.target.matches(".dot"))&&_(1500)})),_(1500),function(){var e=document.querySelector("#banner-form"),t=e.querySelectorAll("input"),n=document.createElement("div");n.style.cssText="font-size: 2rem",e.addEventListener("submit",(function(i){if(i.preventDefault(),e.appendChild(n),t[1].value.length<2)n.textContent="Имя должно содержать минимум 2 символа",setTimeout((function(){n.textContent=""}),3e3);else if(t[2].value.length>12||t[2].value.length<8)n.textContent="Введите корректный телефон",setTimeout((function(){n.textContent=""}),3e3);else{n.textContent="Загрузка...";var s,l={},a=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){a=!0,s=e},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw s}}}}(new FormData(e).entries());try{for(a.s();!(s=a.n()).done;){var c=s.value;l[c[0]]=c[1]}}catch(e){a.e(e)}finally{a.f()}r(l).then((function(e){if(200!==e.status)throw new Error("status network not 200");document.querySelector("#thanks").style.display="block",setInterval((function(){n.textContent=""}),3e3)})).catch((function(e){n.textContent="Что то пошло не так...",console.error(e),setInterval((function(){n.textContent=""}),3e3)})),t.forEach((function(e){e.value=""}))}}));var r=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}}(),a=document.querySelector("#card_order"),c=a.querySelectorAll(".time>input"),u=a.querySelectorAll(".club>input"),d=a.querySelector("#price-total"),f=a.querySelector("#promo-input"),h="",p=0,m={0:{0:2999,1:14990,2:21990,3:24990},1:{0:1999,1:9900,2:13900,3:19900}},a.addEventListener("change",(function(e){var t=e.target;t==t.closest("input")&&(u.forEach((function(e,t){1==e.checked&&(h=m[t],c.forEach((function(e,t){1==e.checked&&(p=h[t],console.log(p))})))})),"тело2019"==f.value&&(p=Math.ceil(.8*p)),d.textContent=p)})),document.addEventListener("input",(function(e){var t=e.target;t.matches("#phone")||t.matches("#callback_form1-phone")||t.matches("#callback_form2-phone")?t.value=t.value.replace(/[^\d\+]/gi,""):t.matches("#name")&&(t.value=t.value.replace(/[^А-ЯЁ]/gi,""))})),function(){var e=document.querySelector("#footer_form"),t=e.querySelectorAll("input"),n=document.createElement("div");n.style.cssText="font-size: 2rem",e.addEventListener("submit",(function(i){if(i.preventDefault(),e.appendChild(n),0==t[1].checked&&0==t[0].checked)n.textContent="Выберете один из клубов",setTimeout((function(){n.textContent=""}),3e3);else if(t[2].value.length>12||t[2].value.length<8)n.textContent="Введите корректный телефон",setTimeout((function(){n.textContent=""}),3e3);else{n.textContent="Загрузка...";var s,l={},a=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){a=!0,s=e},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw s}}}}(new FormData(e).entries());try{for(a.s();!(s=a.n()).done;){var c=s.value;l[c[0]]=c[1]}}catch(e){a.e(e)}finally{a.f()}o(l).then((function(e){if(200!==e.status)throw new Error("status network ".concat(e.status));document.querySelector("#thanks").style.display="block",setInterval((function(){n.textContent=""}),3e3)})).catch((function(e){n.textContent="Что то пошло не так...",console.error(e),setInterval((function(){n.textContent=""}),3e3)})),t.forEach((function(e){e.value=""}))}}));var o=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}}(),l=document.querySelector("#totop"),window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&(l.style.display="block"),e<t&&(l.style.display="none")})),l.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-80),setTimeout(e,0))})),i=document.querySelector(".menu-button>img"),s=document.querySelector(".popup-menu"),i.addEventListener("click",(function(e){s.setAttribute("style","display:block;")})),s.addEventListener("click",(function(e){var t=e.target;t!=t.closest(".scroll>a")&&t!=t.closest(".close-menu-btn>img")||s.removeAttribute("style")}))})();