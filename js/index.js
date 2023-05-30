/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */
window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here


    },
    {
      q: 'Which is the largest ocean on Earth?',
<<<<<<< HEAD
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,// array index 3 -pacific ocean is the correct answer
    },
    {
      q: 'What is the capital of Australia',
=======
@@ -44,8 +46,20 @@ window.addEventListener('DOMContentLoaded', () => {
>>>>>>> 68c9725b2e2527f7aff033583cca0f92538bce42
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1, // array index 1 - canberra is the correct answer
    },
    {
<<<<<<< HEAD
      q: 'How many States are there in Australia?',
      o: ['4', '5', '3', '6'],
      a: 3, // aray index 3 - 6 is the correct answer
    },
    {
      q: 'What is the national animal of Australia?',
      o: ['Kangaroo', 'Emu', 'koala', 'Camel'],
      a: 0, // array index 0 - kangaroo is the correct answer
    },
      
=======
      q: 'What is the capital of France',
      o: ['Paris', 'Lyon', 'Marseille', 'Nice'],
      a: 0,
    },
    {
      q: 'What is the capital of Germany',
      o: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      a: 0,
    }
>>>>>>> 68c9725b2e2527f7aff033583cca0f92538bce42
  ];



  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };
  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          //change background color of li element here
          liElement.style.backgroundColor = "#00A600";
        }

        if (radioElement.checked) {
          // code for task 1 goes here
<<<<<<< HEAD
=======
          // code for task 1 goes here plus else statement just to be extra
>>>>>>> 68c9725b2e2527f7aff033583cca0f92538bce42
          if (quizItem.a == i) {
            score += 1;
          } else {

            liElement.style.backgroundColor = "#FF0000";
          }
        }
      }
    });
<<<<<<< HEAD
    const scoreDisplay = document.querySelector("#score");
        scoreDisplay.innerHTML = ` TOTAL SCORE: ${score} / ${quizArray.length}`;
  
        btnSubmit.style.display = "none";
  
=======
      const scoreDisplay = document.querySelector("#score");
      scoreDisplay.innerHTML = ` TOTAL SCORE: ${score} / ${quizArray.length}`;

      btnSubmit.style.display = "none";

    })

>>>>>>> 68c9725b2e2527f7aff033583cca0f92538bce42
  };
// countdown timer //
let sec = 300;
let timer = setInterval(myTimer, 1000);
function myTimer() {
    document.getElementById('time').innerHTML = sec + " sec";
    sec--;
    if (sec == -1) {
        clearInterval(timer);
        calculateScore();

        alert(`Times up!!`); 
    }
  };



// event listener  submit button
 const btnSubmit = document.querySelector("#btnSubmit");
 btnSubmit.addEventListener("click", () => {
   calculateScore();
 });

 // event listener reset button 
 const btnReset = document.querySelector("#btnReset");
 btnReset.addEventListener("click", () => {
   location.reload();
 });


 // countdown timer //
 let sec = 60;
 let timer = setInterval(myTimer, 1000);
 function myTimer() {
     document.getElementById('time').innerHTML = sec + " sec";
     sec--;
     if (sec == -1) {
         clearInterval(timer);
         calculateScore();

         alert(`Times up!!`); 
     }
   };



 // event listener  submit button
  const btnSubmit = document.querySelector("#btnSubmit");
  btnSubmit.addEventListener("click", () => {
    calculateScore();
  });

  // event listener reset button 
  const btnReset = document.querySelector("#btnReset");
  btnReset.addEventListener("click", () => {
    location.reload();
  });

  // call the displayQuiz function
  displayQuiz();
});
