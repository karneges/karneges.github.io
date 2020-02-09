'use strict';

const askQuestion = (imgs) =>{
  return `
  <form class="game__content">
    ${imgs.map((img, ind) => {
    return `
      <div class="game__option">
        <img src="${img}" alt="Option ${ind + 1}" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question${ind + 1}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${ind + 1}" type="radio" value="paint">
         <span>Рисунок</span>
        </label>
      </div>`;
  }).join(``)}
    </form>`;
};

var questionChooseType = /*#__PURE__*/Object.freeze({
  __proto__: null,
  askQuestion: askQuestion
});

const askQuestion$1 = (imgs) => {
  return `
    <form class="game__content  game__content--triple">
  ${imgs.map((img) => {
    return `
    <div class="game__option">
      <img src="${img}" alt="Option 1" width="304" height="455">
    </div>`;
  }).join(``)}
    </form>`;
};

var questionFindPic = /*#__PURE__*/Object.freeze({
  __proto__: null,
  askQuestion: askQuestion$1
});

const askQuestion$2 = (imgs) => {
  return `
    <form class="game__content  game__content--wide">
      ${imgs.map((img) => {
      return `
        <div class="game__option">
          <img src="${img}" alt="Option 1" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        `;
    }).join(`
  `)}
    </form>`;
};

var questionPhotoOrPic = /*#__PURE__*/Object.freeze({
  __proto__: null,
  askQuestion: askQuestion$2
});

const LEVELS_COUNT = 10;
const LIVES_COUNT = 3;
const FAST_ANSWER = 9;
const SLOW_ANSWER = 21;
const TIME_TO_GAME = 30;

const QUESTION_TYPES = {
  chooseType: `chooseType`,
  findPic: `findPic`,
  photoOrPic: `photoOrPic`
};

const QUESTION_ACTIONS = {
  [QUESTION_TYPES.chooseType]: questionChooseType,
  [QUESTION_TYPES.findPic]: questionFindPic,
  [QUESTION_TYPES.photoOrPic]: questionPhotoOrPic
};

const QUESTION_TITLES = {
  [QUESTION_TYPES.chooseType]: `Угадайте для каждого изображения фото или рисунок?`,
  [QUESTION_TYPES.photoOrPic]: `Угадай, фото или рисунок?`,
  [QUESTION_TYPES.findPic]: `Найдите рисунок среди изображений`
};

const ANSWER_TYPES = {
  photo: `photo`,
  paint: `paint`
};

const ANSWER_VALUES = {
  correct: `correct`,
  wrong: `wrong`,
  fast: `fast`,
  slow: `slow`
};

const POINTS = {
  [ANSWER_VALUES.correct]: 100,
  [ANSWER_VALUES.wrong]: 0,
  [ANSWER_VALUES.fast]: 50,
  [ANSWER_VALUES.slow]: -50,
  lives: 50
};

let questions = [
  {
    type: QUESTION_TYPES.chooseType,
    images: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],
    correctAnswer: [ANSWER_TYPES.paint, ANSWER_TYPES.photo]
  },
  {
    type: QUESTION_TYPES.photoOrPic,
    images: [`https://k42.kn3.net/D2F0370D6.jpg`],
    correctAnswer: ANSWER_TYPES.paint
  },
  {
    type: QUESTION_TYPES.findPic,
    images: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.chooseType,
    images: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],
    correctAnswer: [ANSWER_TYPES.paint, ANSWER_TYPES.photo]
  },
  {
    type: QUESTION_TYPES.photoOrPic,
    images: [`https://k42.kn3.net/D2F0370D6.jpg`],
    correctAnswer: ANSWER_TYPES.paint
  },
  {
    type: QUESTION_TYPES.findPic,
    images: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.chooseType,
    images: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],
    correctAnswer: [ANSWER_TYPES.paint, ANSWER_TYPES.photo]
  },
  {
    type: QUESTION_TYPES.photoOrPic,
    images: [`https://k42.kn3.net/D2F0370D6.jpg`],
    correctAnswer: ANSWER_TYPES.paint
  },
  {
    type: QUESTION_TYPES.findPic,
    images: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.chooseType,
    images: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],
    correctAnswer: [ANSWER_TYPES.paint, ANSWER_TYPES.photo]
  }
];

// const getLevel = (state) => questions[state.level];

class GameModel {
  constructor(state) {
    this.state = Object.assign({}, state);
  }
  setLevel(nextLevel) {
    if (this.state.level < 0 || this.state.level > LEVELS_COUNT) {
      return null;
    }
    this.state.level = nextLevel;
    return this.state;
  }

  setLives(lives) {
    if (lives > LEVELS_COUNT) {
      return null;
    }
    this.state.lives = lives;
    return this.state;
  }
  addAnswer(answer, time) {

    this.state.answers.push(
      this.getAnswerValue(answer, time));


  }

  getLevel() {
    return questions[this.state.level];
  }
  getTime() {
    return this.state.timer;
  }
  getAnswers() {
    return this.state.answers;
  }
  getAnswerValue(isCorrectAnswer, levelTime) {

    if (!isCorrectAnswer) {
      return ANSWER_VALUES.wrong;
    }
    if (levelTime >= TIME_TO_GAME - FAST_ANSWER) {
      return ANSWER_VALUES.fast;
    }
    return levelTime <= (TIME_TO_GAME - SLOW_ANSWER) ? ANSWER_VALUES.slow : ANSWER_VALUES.correct;
  }

  goToNextLevel(isCorrectAnswer) {
    const nextLevel = this.state.level + 1;
    if (!isCorrectAnswer) {
      this.setLives(this.state.lives - 1);
    }
    this.setLevel(nextLevel);
    console.log(this.state);


  }
}

function getElementFromTemplate(inner) {
  let myDiv = document.createElement(`div`);
  myDiv.innerHTML = inner;
  return myDiv;
}

class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't create AbstractView directly`);
    }
  }

  get template() {

  }

  render() {
    return getElementFromTemplate(this.template);
  }

  bind() {

  }

  get element() {
    if (!this._elem) {
      this._elem = this.render();
      this.bind();
    }

    return this._elem;
  }

}

let interval;
function time(state){
  if(!state.timer){
    state.timer = TIME_TO_GAME;
  }
  state.timer--;
  let gameTimer = document.querySelector(`.game__timer`);
  gameTimer.style.color = `blue`;
  gameTimer.innerHTML = state.timer;

  interval = setTimeout(time, 1000,state);
}

let timer = {
  startTimer: time,
  stopTimer(state) {
    clearTimeout(interval);
    state.timer = 0;

  }

};

let header = (state) => {
  const timeHtml = () => {
    return `

    <h1 class="game__timer" style="font-size:30px; left:950px; top:55px"></h1>

`;
  };
  let livesHtml = () => {
    return `
      <div class="game__lives">
      ${new Array(state.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32"></img>`)
      .join(``)}
      ${new Array(3 - state.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}

      </div>`;
  };

  let el = `
    <div class="header__back">
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
    </div>
    ${timeHtml()}
    ${livesHtml()}
    </header>`;

  return el;
};

const unknownProgress = `<li class="stats__result stats__result--unknown"></li>`;

let gameStatsHtml = (answers) => {
  return `
<ul class="stats">
  ${[...answers].map((result)=>{
    return ` <li class="stats__result stats__result--${result}"></li>`;
  }).join(`
  `)}

  ${new Array(LEVELS_COUNT - answers.length).fill(unknownProgress).join(``)}
</ul>`;
};

class GameView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }
  get template() {
    const {askQuestion} = QUESTION_ACTIONS[questions[this.state.level].type];
    return `
    ${header(this.state)}
      <div class="game">
      <p class="game__task">${QUESTION_TITLES[questions[this.state.level].type]}</p>
      ${askQuestion(questions[this.state.level].images)}
      <div class="stats">
      ${gameStatsHtml(this.state.answers)}
      `;
  }


  bind() {
    let questionsType = questions[this.state.level].type;


    if (questionsType === `chooseType` || questionsType === `photoOrPic`) {

      let trigger = this._elem.querySelector(`.game__content`);
      trigger.addEventListener(`change`, ()=>{

        this.onAnswerGiven();
      });
    }
    if (questionsType === `findPic`) {

      let trigger = this._elem.querySelectorAll(`.game__option`);
      trigger.forEach((elem, index)=>{
        elem.addEventListener(`click`, ()=>{
          console.log(`событие`);
          this.onAnswerGiven(index);
        });
      });
    }
  }

  onAnswerGiven() {
  }
}

const mainContainer = document.querySelector(`.central`);

const showDisplay = (element) => {
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(element);
};

class GameScreen {
  constructor(model) {
    this.model = model;
    this.levels = model.getLevel();
  }


  startGame() {
    if (this.model.state.level < LEVELS_COUNT && this.model.state.lives >= 0) {
      const screen = new GameView(this.model.state);

      showDisplay(screen.element);
      timer.stopTimer(this.model.state);
      timer.startTimer(this.model.state);

      screen.onAnswerGiven = (index) => {
        let isCorrectAnswer = false;

        if (this.model.getLevel().type === `chooseType`) {
          let gameOption = screen.element.querySelectorAll(`.game__option`);
          let chekedInputs = screen.element.querySelectorAll(`input[type="radio"]:checked`);

          if (gameOption.length === chekedInputs.length) {

            isCorrectAnswer = this.levels.correctAnswer[0] === chekedInputs[0].value &&
              this.levels.correctAnswer[1] === chekedInputs[1].value;

            this.model.addAnswer(isCorrectAnswer, this.model.state.timer);
            this.model.goToNextLevel(isCorrectAnswer);
            this.startGame();

            return
          }
        }
        if (this.model.getLevel().type === `photoOrPic`) {
          let chekedInputs = screen.element.querySelectorAll(`input[type="radio"]:checked`);
          if (chekedInputs) {
            isCorrectAnswer = this.levels.correctAnswer[0] === chekedInputs[0].value;
            this.model.addAnswer(isCorrectAnswer, this.model.state.timer);
            this.model.goToNextLevel(isCorrectAnswer);
            this.startGame();
            return
          }
        }
        if (this.model.getLevel().type === `findPic`) {
          console.log(this.model.getLevel().type);
          console.log(this.levels);


          isCorrectAnswer = this.model.getLevel().correctAnswer === index;
          this.model.addAnswer(isCorrectAnswer, this.model.state.timer);
          this.model.goToNextLevel(isCorrectAnswer);

          this.startGame();

          return
        }


      };
    }
     else {

      Application.showStats(this.model);
    }




  };

}

const calculateStats = (model) => {
  if (model.getAnswers().length < LEVELS_COUNT) {
    return {
      answers: model.getAnswers(),
      bonuses: [],
      totalPoints: 0,
      totalResult: {
        success: false
      }
    };
  }

  let totalFastAnsvers = model.getAnswers().filter((answers) => answers === ANSWER_VALUES.fast).length;
  let totalSlowAnswers = model.getAnswers().filter((answers) => answers === ANSWER_VALUES.slow).length;
  let totalCorrectAnswers1 = model.getAnswers().filter((answers) => answers === ANSWER_VALUES.correct).length;
  let totalCorrectAnswers = totalFastAnsvers + totalSlowAnswers + totalCorrectAnswers1;
  let totalLivesRemained = model.state.lives;

  let regularPoints = totalCorrectAnswers * POINTS[ANSWER_VALUES.correct];
  const fastBonus = totalFastAnsvers * POINTS[ANSWER_VALUES.fast];
  const slowBonus = totalSlowAnswers * POINTS[ANSWER_VALUES.slow];
  const livesBonus = totalLivesRemained * POINTS.lives;

  let bonuses = [];

  if (totalFastAnsvers) {
    bonuses.push({
      title: `Бонус за скорость`,
      icon: `fast`,
      count: totalFastAnsvers,
      points: POINTS[ANSWER_VALUES.fast],
      total: fastBonus
    });
  }
  if (totalSlowAnswers) {
    bonuses.push({
      title: `Штраф за медлительность`,
      icon: `slow`,
      count: totalSlowAnswers,
      points: POINTS[ANSWER_VALUES.slow],
      total: slowBonus
    });
  }

  if (totalLivesRemained) {


    bonuses.push({
      title: `Бонус за жизни`,
      icon: `alive`,
      count: totalLivesRemained,
      points: POINTS.lives,
      total: livesBonus
    });
  }

  const score = regularPoints + livesBonus + fastBonus + slowBonus;

  return {

    answers: model.getAnswers(),
    bonuses,
    regularPoints,
    totalResult: {
      success: true,
      score
    }
  };

};

class StatsView extends AbstractView {
  constructor(model){
    super();
    this.model = model;
  }
  get template() {
    debugger;
    const statsHtml = ({answers, bonuses, regularPoints, totalResult: {success, score}}, index) => {
      return `
      <table class="result__table">
        <tr>
          <td class="result__number">${index + 1}.</td>
          <td colspan="2">${gameStatsHtml(answers)}</td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${regularPoints ? regularPoints : 0}</td>
        </tr>
        ${[...bonuses].map(({title, icon, count, points, total}) => {
    return `
        <tr>
          <td></td>
          <td class="result__extra">${title}</td>
          <td class="result__extra">${count}&nbsp;<span class="stats__result stats__result--${icon}"></span></td>
          <td class="result__points">x&nbsp;${points}</td>
          <td class="result__total">x&nbsp;${total}</td>
        </tr>`;
  }).join(``)}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${success ? score : `FAIL`}</td>
        </tr>
      </table>`;
    };

    const statsObj = calculateStats(this.model);

    return `

    <div class="result">
      <h1>${statsObj.totalResult.success ? `Победа!` : `Вы проиграли`}</h1>
      ${[statsObj].map((stats, index) => {
    return statsHtml(stats, index);
  }).join(``)}
    </div>`;
  }

  bind() {
  }
}

class StatsScreen{
  showStats(model){
    let screen = new StatsView(model);
    showDisplay(screen.element);
  }
}

class Application {

  static showGame(state) {
    const model = new GameModel(state);
    const gameScreen = new GameScreen(model);
    const screen = gameScreen.startGame();

    let modelScreen = {
      model,
      screen
    };

    return modelScreen;
  }

  static showStats(state) {
    const statistics = new StatsScreen();
    statistics.showStats(state);
  }

}

const defaultState = Object.freeze({
  level: 0,
  lives: LIVES_COUNT,
  timer: null,
  answers: []
});

Application.showGame(defaultState);

//# sourceMappingURL=main.js.map
