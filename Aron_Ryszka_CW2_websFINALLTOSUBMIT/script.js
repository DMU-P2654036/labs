const title = document.getElementById("title");
const text = "The House";

for (let i = 0; i < text.length; i++) {
  //used to iterate over each character in the "text" with time delay.
  setTimeout(function () {
    title.innerHTML += text[i];
  }, 100 * i);
}
