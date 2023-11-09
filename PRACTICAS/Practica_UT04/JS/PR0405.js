let elemento = document.getElementsByTagName('li');

let url = {
  Google: "https://www.google.com",
  DuckDuckGo: "https://duckduckgo.com",
  Bing: "https://www.bing.com",
  Ecosia: "https://www.ecosia.org/",
  WolframAlpha: "https://www.wolframalpha.com/"
};

Array.from(elemento).forEach(element => {
  let elementos = element.textContent;
  element.textContent = url[elementos];
  element.innerHTML = `<a href="${url[elementos]}">${elementos}</a>`;
});

console.log(elemento);





