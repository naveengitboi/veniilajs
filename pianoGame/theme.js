const root = document.documentElement;

const themes = [
  {
    '--bgColor': "red",
    '--boardColor': '#001C30',
    '--keyColor': "gray",
    "--activeKeyColor":'#E1E1E1',
  }
]

const color = getComputedStyle(root)
console.log(color);

console.log(themes);
for(let key of themes[0]){
  console.log(key);
  root.style.setProperty(key, themes[0].key);
}
