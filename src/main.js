const TASK_COUNT = 3;

import {createSiteMenuTemplate} from "./components/site-menu-template.js";
import {createFilterTemplate} from "./components/filter-template.js";
import {createBoardTemplate} from "./components/board-template.js";
import {createTaskTemplate} from "./components/task-template.js";
import {createTaskEditTemplate} from "./components/task-edit-template.js";
import {createLoadMoreButtonTemplate} from "./components/load-more-button-template.js";


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(taskListElement, createTaskEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeend`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
