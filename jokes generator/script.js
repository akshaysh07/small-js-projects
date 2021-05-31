const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  // call the api
  const jokeApi = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const joke = await jokeApi.json();
  console.log(joke);

  //set the new joke

  jokeEl.innerHTML = joke.joke;
}
