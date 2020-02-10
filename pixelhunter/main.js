!function(t){var e={};function s(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=1)}([function(t,e,s){},function(t,e,s){"use strict";s.r(e);var n={};s.r(n),s.d(n,"askQuestion",(function(){return o}));var r={};s.r(r),s.d(r,"askQuestion",(function(){return l}));var i={};s.r(i),s.d(i,"askQuestion",(function(){return a}));const o=t=>`\n  <form class="game__content">\n    ${t.map((t,e)=>`\n      <div class="game__option">\n        <img src="${t}" alt="Option ${e+1}" width="468" height="458">\n        <label class="game__answer game__answer--photo">\n          <input name="question${e+1}" type="radio" value="photo">\n          <span>Фото</span>\n        </label>\n        <label class="game__answer game__answer--paint">\n          <input name="question${e+1}" type="radio" value="paint">\n         <span>Рисунок</span>\n        </label>\n      </div>`).join("")}\n    </form>`,l=t=>`\n    <form class="game__content  game__content--triple">\n  ${t.map(t=>`\n    <div class="game__option">\n      <img src="${t}" alt="Option 1" width="304" height="455">\n    </div>`).join("")}\n    </form>`,a=t=>`\n    <form class="game__content  game__content--wide">\n      ${t.map(t=>`\n        <div class="game__option">\n          <img src="${t}" alt="Option 1" width="705" height="455">\n          <label class="game__answer  game__answer--photo">\n            <input name="question1" type="radio" value="photo">\n            <span>Фото</span>\n          </label>\n          <label class="game__answer  game__answer--wide  game__answer--paint">\n            <input name="question1" type="radio" value="paint">\n            <span>Рисунок</span>\n          </label>\n        </div>\n        `).join("\n  ")}\n    </form>`,c={chooseType:"chooseType",findPic:"findPic",photoOrPic:"photoOrPic"},p={[c.chooseType]:n,[c.findPic]:r,[c.photoOrPic]:i},h={[c.chooseType]:"Угадайте для каждого изображения фото или рисунок?",[c.photoOrPic]:"Угадай, фото или рисунок?",[c.findPic]:"Найдите рисунок среди изображений"},m={photo:"photo",paint:"paint"},u={correct:"correct",wrong:"wrong",fast:"fast",slow:"slow"},g={[u.correct]:100,[u.wrong]:0,[u.fast]:50,[u.slow]:-50,lives:50};var d=[{type:c.chooseType,images:["https://k42.kn3.net/CF42609C8.jpg","http://i.imgur.com/1KegWPz.jpg"],correctAnswer:[m.paint,m.photo]},{type:c.photoOrPic,images:["https://k42.kn3.net/D2F0370D6.jpg"],correctAnswer:m.paint},{type:c.findPic,images:["https://k32.kn3.net/5C7060EC5.jpg","https://i.imgur.com/DiHM5Zb.jpg","http://i.imgur.com/DKR1HtB.jpg"],correctAnswer:1},{type:c.chooseType,images:["https://k42.kn3.net/CF42609C8.jpg","http://i.imgur.com/1KegWPz.jpg"],correctAnswer:[m.paint,m.photo]},{type:c.photoOrPic,images:["https://k42.kn3.net/D2F0370D6.jpg"],correctAnswer:m.paint},{type:c.findPic,images:["https://k32.kn3.net/5C7060EC5.jpg","https://i.imgur.com/DiHM5Zb.jpg","http://i.imgur.com/DKR1HtB.jpg"],correctAnswer:1},{type:c.chooseType,images:["https://k42.kn3.net/CF42609C8.jpg","http://i.imgur.com/1KegWPz.jpg"],correctAnswer:[m.paint,m.photo]},{type:c.photoOrPic,images:["https://k42.kn3.net/D2F0370D6.jpg"],correctAnswer:m.paint},{type:c.findPic,images:["https://k32.kn3.net/5C7060EC5.jpg","https://i.imgur.com/DiHM5Zb.jpg","http://i.imgur.com/DKR1HtB.jpg"],correctAnswer:1},{type:c.chooseType,images:["https://k42.kn3.net/CF42609C8.jpg","http://i.imgur.com/1KegWPz.jpg"],correctAnswer:[m.paint,m.photo]}];class _{constructor(t){this.state=Object.assign({},t)}setLevel(t){return this.state.level<0||this.state.level>10?null:(this.state.level=t,this.state)}setLives(t){return t>10?null:(this.state.lives=t,this.state)}addAnswer(t,e){this.state.answers.push(this.getAnswerValue(t,e))}getLevel(){return d[this.state.level]}getTime(){return this.state.timer}getAnswers(){return this.state.answers}getAnswerValue(t,e){return t?e>=21?u.fast:e<=9?u.slow:u.correct:u.wrong}goToNextLevel(t){const e=this.state.level+1;t||this.setLives(this.state.lives-1),this.setLevel(e),console.log(this.state)}}var v=function(t){let e=document.createElement("div");return e.innerHTML=t,e};class w{constructor(){if(new.target===w)throw new Error("Can't create AbstractView directly")}get template(){}render(){return v(this.template)}bind(){}get element(){return this._elem||(this._elem=this.render(),this.bind()),this._elem}}s.p,s.p,s.p,s.p;var f=t=>`\n    <div class="header__back">\n\n  <button class="back">\n    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">\n    <img src="img/logo_small.svg" width="101" height="44">\n  </button>\n    </div>\n\n    ${`\n      <div class="game__lives">\n      ${new Array(t.lives).fill('<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32"></img>').join("")}\n      ${new Array(3-t.lives).fill('<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">').join("")}\n\n      </div>`}\n    \n    <h1 class="game__timer"></h1>\n    </header>`;let y=t=>`\n<ul class="stats">\n  ${[...t].map(t=>` <li class="stats__result stats__result--${t}"></li>`).join("\n  ")}\n\n  ${new Array(10-t.length).fill('<li class="stats__result stats__result--unknown"></li>').join("")}\n</ul>`;class b extends w{constructor(t){super(),this.state=t}get template(){const{askQuestion:t}=p[d[this.state.level].type];return`\n    ${f(this.state)}\n      <div class="game">\n      <p class="game__task">${h[d[this.state.level].type]}</p>\n      ${t(d[this.state.level].images)}\n      <div class="stats">\n      ${y(this.state.answers)}\n      `}bind(){let t=d[this.state.level].type;if("chooseType"===t||"photoOrPic"===t){this._elem.querySelector(".game__content").addEventListener("change",()=>{this.onAnswerGiven()})}if("findPic"===t){this._elem.querySelectorAll(".game__option").forEach((t,e)=>{t.addEventListener("click",()=>{console.log("событие"),this.onAnswerGiven(e)})})}}onAnswerGiven(){}}const A=document.querySelector(".central");var j=t=>{A.innerHTML="",A.appendChild(t)};let k;var $={startTimer:function t(e){e.timer||(e.timer=30),e.timer--;let s=document.querySelector(".game__timer");s.style.color="blue",s.innerHTML=e.timer,k=setTimeout(t,1e3,e)},stopTimer(t){clearTimeout(k),t.timer=0}};class P{constructor(t){this.model=t,this.levels=t.getLevel()}startGame(){if(this.model.state.level<10&&this.model.state.lives>=0){const t=new b(this.model.state);j(t.element),$.stopTimer(this.model.state),$.startTimer(this.model.state),t.onAnswerGiven=e=>{let s=!1;if("chooseType"===this.model.getLevel().type){let e=t.element.querySelectorAll(".game__option"),n=t.element.querySelectorAll('input[type="radio"]:checked');if(e.length===n.length)return s=this.levels.correctAnswer[0]===n[0].value&&this.levels.correctAnswer[1]===n[1].value,this.model.addAnswer(s,this.model.state.timer),this.model.goToNextLevel(s),void this.startGame()}if("photoOrPic"===this.model.getLevel().type){let e=t.element.querySelectorAll('input[type="radio"]:checked');if(e)return s=this.levels.correctAnswer[0]===e[0].value,this.model.addAnswer(s,this.model.state.timer),this.model.goToNextLevel(s),void this.startGame()}if("findPic"===this.model.getLevel().type)return console.log(this.model.getLevel().type),console.log(this.levels),s=this.model.getLevel().correctAnswer===e,this.model.addAnswer(s,this.model.state.timer),this.model.goToNextLevel(s),void this.startGame()}}else O.showStats(this.model)}}class T extends w{constructor(t){super(),this.model=t}get template(){const t=(t=>{if(t.getAnswers().length<10)return{answers:t.getAnswers(),bonuses:[],totalPoints:0,totalResult:{success:!1}};let e=t.getAnswers().filter(t=>t===u.fast).length,s=t.getAnswers().filter(t=>t===u.slow).length,n=e+s+t.getAnswers().filter(t=>t===u.correct).length,r=t.state.lives,i=n*g[u.correct];const o=e*g[u.fast],l=s*g[u.slow],a=r*g.lives;let c=[];e&&c.push({title:"Бонус за скорость",icon:"fast",count:e,points:g[u.fast],total:o}),s&&c.push({title:"Штраф за медлительность",icon:"slow",count:s,points:g[u.slow],total:l}),r&&c.push({title:"Бонус за жизни",icon:"alive",count:r,points:g.lives,total:a});const p=i+a+o+l;return{answers:t.getAnswers(),bonuses:c,regularPoints:i,totalResult:{success:!0,score:p}}})(this.model);return`\n\n    <div class="result">\n      <h1>${t.totalResult.success?"Победа!":"Вы проиграли"}</h1>\n      ${[t].map((t,e)=>(({answers:t,bonuses:e,regularPoints:s,totalResult:{success:n,score:r}},i)=>`\n      <table class="result__table">\n        <tr>\n          <td class="result__number">${i+1}.</td>\n          <td colspan="2">${y(t)}</td>\n          <td class="result__points">×&nbsp;100</td>\n          <td class="result__total">${s||0}</td>\n        </tr>\n        ${[...e].map(({title:t,icon:e,count:s,points:n,total:r})=>`\n        <tr>\n          <td></td>\n          <td class="result__extra">${t}</td>\n          <td class="result__extra">${s}&nbsp;<span class="stats__result stats__result--${e}"></span></td>\n          <td class="result__points">x&nbsp;${n}</td>\n          <td class="result__total">x&nbsp;${r}</td>\n        </tr>`).join("")}\n        <tr>\n          <td colspan="5" class="result__total  result__total--final">${n?r:"FAIL"}</td>\n        </tr>\n      </table>`)(t,e)).join("")}\n    </div>`}bind(){}}class L{showStats(t){let e=new T(t);j(e.element)}}class O{static showGame(t){const e=new _(t);return{model:e,screen:new P(e).startGame()}}static showStats(t){(new L).showStats(t)}}const C=Object.freeze({level:0,lives:3,timer:null,answers:[]});s(0),s.p;O.showGame(C)}]);