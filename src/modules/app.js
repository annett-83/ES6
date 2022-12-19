import { getRandomColor } from "./utils";
function initApp() {
  const createButtonHtml = (text) => {
    return `<button class="button">${text}</button>`;
  };
  createButtonHtml("Изменить цвет страницы");

  const createButton = () => {
    const html = createButtonHtml("Изменить цвет страницы");

    document.body.insertAdjacentHTML("afterBegin", html);
  };
  createButton();
  const newButton = document.querySelector('button')
  newButton.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor();
  });
}

export default initApp;
