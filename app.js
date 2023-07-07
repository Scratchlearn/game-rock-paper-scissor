// Prevent animation on load
setTimeout(() => {
    document.body.classList.remove("preload");
  }, 500);
  
  // DOM
  const btnRules = document.querySelector(".rules-btn");
  const btnClose = document.querySelector(".close-btn");
  const modalRules = document.querySelector(".modal");
  const redirectButton = document.getElementById('redirect-button');
  
  
  const CHOICES = [
    {
      name: "paper",
      beats: "rock",
    },
    {
      name: "scissors",
      beats: "paper",
    },
    {
      name: "rock",
      beats: "scissors",
    },
  ];
  const choiceButtons = document.querySelectorAll(".choice-btn");
  const gameDiv = document.querySelector(".game");
  const resultsDiv = document.querySelector(".results");
  const resultDivs = document.querySelectorAll(".results__result");
  
  const resultWinner = document.querySelector(".results__winner");
  const resultText = document.querySelector(".results__text");
  
  const playAgainBtn = document.querySelector(".play-again");
  
  const score_number2 = document.querySelector(".score_number2");
  const score_number1 = document.querySelector(".score_number1");
  let score2 = 0;
  let score1=0;
  
  // Game Logic
  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choiceName = button.dataset.choice;
      const choice = CHOICES.find((choice) => choice.name === choiceName);
      choose(choice);
    });
  });
  
  function choose(choice) {
    const aichoice = aiChoose();
    displayResults([choice, aichoice]);
    displayWinner([choice, aichoice]);
  }
  
  function aiChoose() {
    const rand = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[rand];
  }
  
  function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
      setTimeout(() => {
        resultDiv.innerHTML = `
          <div class="choice ${results[idx].name}">
            <img src="images/icon-${results[idx].name}.svg" alt="${results[idx].name}" />
          </div>
        `;
      }, idx * 1000);
    });
  
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
  }
  let resultDiv1 = document.getElementById('result1');
  function displayWinner(results) {
    setTimeout(() => {
      const userWins = isWinner(results);
      const aiWins = isWinner(results.reverse());
  
      if (userWins) {
        resultText.innerText = "you win";
        
        resultDivs[0].classList.toggle("winner");
        keepScore2(1);
        keepScore1(-1);
        redirectButton.style.display = 'block';
        // window.location.href = 'win.html';
      } else if (aiWins) {
        resultText.innerText = "you lose";
        resultDivs[1].classList.toggle("winner");
        keepScore1(1);
        keepScore2(-1);
      } else {
        resultText.innerText = "draw";
      }
      resultWinner.classList.toggle("hidden");
      resultsDiv.classList.toggle("show-winner");
    }, 1000);
  }
  
  function isWinner(results) {
    return results[0].beats === results[1].name;
  }
  
  function keepScore2(point) {
    score2 += point;
    score_number2.innerText = score2;
  }

  function keepScore1(point) {
    score1 += point;
    score_number1.innerText = score1;
  }
  
  // Play Again
  playAgainBtn.addEventListener("click", () => {
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
  
    resultDivs.forEach((resultDiv) => {
      resultDiv.innerHTML = "";
      resultDiv.classList.remove("winner");
    });
  
    resultText.innerText = "";
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
  });
  
  // Show/Hide Rules
  // btnClose.addEventListener("click", () => {
  //   modalRules.classList.toggle("show-modal");
  // });


  

    redirectButton.addEventListener('click', function() {
      window.location.href = 'win.html';
    });



    var mainButton = document.getElementById('mainButt');
    var popupContent = document.querySelector('.popupContent');
    var closeButton = document.getElementById('closeButton');

mainButton.addEventListener('click', function() {
  popupContent.classList.add('show');
});

closeButton.addEventListener('click', function() {
  popupContent.classList.remove('show');
});

  