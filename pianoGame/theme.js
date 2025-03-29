const root = document.documentElement;
const themesInputEle = document.querySelectorAll(
  ".themeSelection .themeCode input",
);
const themesSelectionEle = document.querySelector(".themeSelection");
const colorControlEle = document.querySelector(".colorControls .circle");

colorControlEle.addEventListener("click", () => {
  colorSwitch = true;
  colorControlEle.classList.add("circleActive");
  themesSelectionEle.classList.add("themeSelectionActive");
});

const themes = [
  {
    "--bgColor": "black",
    "--boardColor": "#001C30",
    "--fontColor": "gray",
    "--pianoKeyColor": "white",
  },
];

const color = getComputedStyle(root);
console.log(color);

console.log(themes);

for (let i = 0; i < themes.length; i++) {
  for (let theme in themes[i]) {
    root.style.setProperty(theme, themes[i][theme]);
  }
}

themesInputEle.forEach((input) => {
  input.addEventListener("change", (e) => {
    root.style.setProperty(e.target.name, e.target.value);
  });
});
