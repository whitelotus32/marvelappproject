<<<<<<< HEAD
var questionIndex = 0;
var questionCreate = document.createElement("ul");
var start = document.getElementById("startQuiz");
var quizQuestions = document.getElementById("quizQuestions");
var questions;
var score = 0;

fetch("https://www.superheroapi.com/api.php/10110052087058874/620")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.biography["full-name"]);
    buildQuestions(data);
  });

function buildQuestions(spiderman) {
  questions = [
    {
      title: "What is Spider-Man's name?",
      choices: [
        spiderman.biography["full-name"],
        "Otto Octavius",
        "Harry Osborn",
        "Eddie Brock",
      ],
      answer: spiderman.biography["full-name"],
    },
    {
      title: "What color is Spider-Man's hair?",
      choices: [spiderman.appearance["hair-color"], "Blonde", "Red", "Green"],
      answer: spiderman.appearance["hair-color"],
    },
  ];

  console.log(questions);
}

function render(questionIndex) {
  quizQuestions.innerHTML = questions[questionIndex].title;
  quizAnswers.innerHTML = "";
  // for (var i = 0; i < questions.length; i++) {
  //   var playerQuestion = questions[questionIndex].title;
  var playerChoices = questions[questionIndex].choices;
  //   quizQuestions.textContent = playerQuestion;
  // }
  playerChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    quizAnswers.appendChild(listItem);

    listItem.addEventListener("click", compare);
  });
}

function compare(event) {
  var element = event.target;

  if (element.matches("li")) {
    if (element.textContent == questions[questionIndex].answer) {
      score++;
    }
  }

  questionIndex++;

  if (questionIndex >= questions.length) {
    quizDone();
  } else {
    render(questionIndex);
  }
}

function quizDone() {
  quizQuestions.innerHTML = "Quiz done!";
  quizAnswers.innerHTML = "";
  var description = document.getElementById("description");
  description.innerHTML =
    "End of quiz! " + "You got " + score + " out of " + questions.length + "!";
  description.style.display = "block";

  fetch(
    "https://api.giphy.com/v1/gifs/oXnN2TNSgfJQI?api_key=fc1UmnBJUGYxagBcip3pbDVfhaGv4AbF"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var responseContainerEl = document.getElementById("response-container");
      responseContainerEl.innerHTML = "";
      var gifImg = document.createElement("img");
      gifImg.setAttribute("src", data.data.images.fixed_height.url);
      responseContainerEl.appendChild(gifImg);
    });
}

start.addEventListener("click", function () {
  var removeSub = document.getElementById("description");
  removeSub.style.display = "none";
  var removeButton = document.getElementById("startQuiz");
  removeButton.style.display = "none";
  render(questionIndex);
});
=======
var spiderman

function testFetch() {
    fetch("https://www.superheroapi.com/api.php/10110052087058874/620")
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    console.log(data);
    });
}

spiderman = testFetch()
console.log("spiderman" + spiderman)


// fetch(
//     'https://api.giphy.com/v1/gifs/oXnN2TNSgfJQI?api_key=fc1UmnBJUGYxagBcip3pbDVfhaGv4AbF'
//   )
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       console.log(data);
//     });

>>>>>>> 22800708986ae75d244e6b8c089ceb85d58b1134
