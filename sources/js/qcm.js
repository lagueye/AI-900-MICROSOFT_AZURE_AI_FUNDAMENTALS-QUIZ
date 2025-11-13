
/** Trie de la liste des elements du QCM **/
quizData.sort(() => Math.random() - 0.5);

/** initialisation des variables globales **/
let listCheckbox = [];
let listSuccess = [];
let listIncorrect = [];

/** jquery **/
$(document).ready(function(){
	generateQuiz(quizData);
	$('[data-toggle="popover"]').popover({ html: true });   
	setCookie('theme', 'dark', 365);
});

/** generation du QCM **/
function generateQuiz(quizData) {
	const quizContainer = document.getElementById('quiz-container');
	quizData.forEach(item => {
		const questionContainer = document.createElement('div');
		questionContainer.className = 'question-container';
		
		// balise numero question
		const questionNum = document.createElement('div');
		questionNum.className = 'question-num';
		questionNum.id = `q${item.id}`;
		questionNum.textContent = `Question ${item.id}`;
		questionContainer.appendChild(questionNum);

		// balise intitulé de la question
		const questionTitle = document.createElement('p');
		questionTitle.className = 'question-title';
		questionTitle.textContent = `${item.question.intitule}`;
		questionContainer.appendChild(questionTitle);
		
		// balise images de la question
		if (item.question.image) {
			if (typeof item.question.image === 'object') {
				for (const [key, value] of Object.entries(item.question.image)) {
				  const questionImage = document.createElement('div');
				  questionImage.className = 'image';
				  const img = document.createElement('img');
				  img.src = `${value}`;
				  questionImage.appendChild(img);
				  questionContainer.appendChild(questionImage);
				}
			  } else if (typeof item.question.image === 'string') {
				const questionImage = document.createElement('div');
				questionImage.className = 'image';
				const img = document.createElement('img');
				img.src = `${item.question.image}`;
				questionImage.appendChild(img);
				questionContainer.appendChild(questionImage);
			}
		}
		
		// balise checkbox des QCM
		if(item.checkbox){
			for (const [key, value] of Object.entries(item.checkbox)) {
				const answerOption = document.createElement('div');
				answerOption.className = 'answer-option';
				const radioInput = document.createElement('input');
				radioInput.id = `input-${item.id}-${key}`;
				
				if(item.reponse && typeof item.reponse === 'string' && item.reponse.split(',').length >1){
					radioInput.type = 'checkbox';
				} else{
					radioInput.type = 'radio';
				}
				radioInput.name = `q${item.id}`;
				radioInput.value = key;
				answerOption.appendChild(radioInput);

				const label = document.createElement('label');
				label.textContent = `${key} - ${value}`;
				//label.textContent = `${value}`;
				label.htmlFor = `input-${item.id}-${key}`;
				answerOption.appendChild(label);
				questionContainer.appendChild(answerOption);
			}
		}
		
		// button de validation
		const validateButton = document.createElement('button');
		validateButton.className = 'validate-button btn btn-primary';
		validateButton.textContent = 'Valider';
		validateButton.onclick = () => validateAnswer(item.id, item.reponse, questionContainer);
		questionContainer.appendChild(validateButton);

		// panel de resultat
		const result = document.createElement('div');
		result.className = 'result';
		questionContainer.appendChild(result);

		// resultat explication
		if (item.explanation) {
			const explanation = document.createElement('div');
			explanation.className = 'explanation';				
			if (item.explanation.image) {
				if (typeof item.explanation.image === 'object') {
					for (const [key, value] of Object.entries(item.explanation.image)) {
					  const explanationImage = document.createElement('div');
					  explanationImage.className = 'explanationImage';
					  const img = document.createElement('img');
					  img.src = `${value}`;
					  explanationImage.appendChild(img);
					  questionContainer.appendChild(explanationImage);
					}
				  } else if (typeof item.explanation.image === 'string') {
					const explanationImage = document.createElement('span');
					explanationImage.className = 'explanationImage';
					const img = document.createElement('img');
					img.src = `${item.explanation.image}`;
					explanationImage.appendChild(img);
					questionContainer.appendChild(explanationImage);
				}
			}
			if (item.explanation.text) {
				explanation.textContent = `Explanation: ${item.explanation.text}`;					
			}					
			questionContainer.appendChild(explanation);
		}

		// resultat reference
		if (item.reference) {
			const reference = document.createElement('div');
			reference.className = 'reference';
			const referenceLink = document.createElement('a');
			referenceLink.href = item.reference;
			referenceLink.textContent = `Reference: ${item.reference}`;
			referenceLink.target = '_blank';
			reference.appendChild(referenceLink);
			questionContainer.appendChild(reference);
		}

		quizContainer.appendChild(questionContainer);
	});
}

/** button valider function **/
function validateAnswer(questionId, correctAnswer, container) {
	const selectedAnswers = document.querySelectorAll(`input[name='q${questionId}']:checked`);
	//const selectedAnswer = document.querySelector(`input[name='q${questionId}']:checked`);
	const resultDiv = container.querySelector('.result');
	const explanation = container.querySelector('.explanation');
	const explanationImage = container.querySelectorAll('.explanationImage');
	const reference = container.querySelector('.reference');
	const button = container.querySelector('.validate-button');

	if (selectedAnswers) {				
		const selectedAnswersValues = Array.from(selectedAnswers).map(answer => answer.value).join(',');
		if (selectedAnswersValues === correctAnswer) {
			resultDiv.textContent = 'Correct!';
			container.style.backgroundColor = '#d4edda'; // Vert clair
			container.style.color = 'black'; // Vert clair
			container.querySelectorAll('.answer-option').forEach(answer => {answer.style.color = 'black';answer.style.backgroundColor = 'MediumSeaGreen';});
			addItemOnListIfNotPresent(listSuccess, `q${questionId}`);
		} else {
			resultDiv.textContent = 'Incorrect. Please try again.';
			container.style.backgroundColor = '#f8d7da'; // Rouge clair
			container.style.color = 'black'; // Vert clair
			container.querySelectorAll('.answer-option').forEach(answer => {answer.style.color = 'black';answer.style.backgroundColor = 'Tomato';});
			addItemOnListIfNotPresent(listIncorrect, `q${questionId}`);
		}
		
		if (explanation) explanation.classList.add('show');
		if (explanationImage) explanationImage.forEach(image => {image.classList.add('show');});				
		if (reference) reference.classList.add('show');
		
		addItemOnListIfNotPresent(listCheckbox, `q${questionId}`);
		calculStatistique();
		button.disabled='disabled';
	} else {
		resultDiv.textContent = 'Please select an answer.';
	}
}

/** ajout d'un element dans une liste si element pas deja present **/
function addItemOnListIfNotPresent(list, item) {
	if (!list.includes(item)) {
		list.push(item);
	}
}

/** Statistique calcul **/
function calculStatistique(){
	const numberOfElements = quizData.length;
	const numberOfElementsChecked = listCheckbox.length;
	const progress=Math.round((numberOfElementsChecked*100)/numberOfElements);
	const score=Math.round((listSuccess.length*100)/(listSuccess.length+listIncorrect.length));
	$('#progressNum').text(`${numberOfElementsChecked}/${numberOfElements}`);
	$('.progress-bar').attr('style',`width:${progress}%`);
	$('.progress-bar').text(`${progress}%`);
	$('#score').text(`${score}%`);
	$('#goodAnswers').text(listSuccess.length);
	$('#incorrectAnswers').text(listIncorrect.length);
}

/** popover incorrect answers **/
function listIncorrectAnswers(){
	listIncorrect.sort((a, b) => {return parseInt(a.substring(1)) - parseInt(b.substring(1));});
	var incorrectHtml = '<ul class="list-group">';
	listIncorrect.forEach(answer => {incorrectHtml+= '<a href="#'+answer+'"><li class="list-group-item list-group-item-action ">'+answer.replace('q','Question ')+'</li></a>';});
	incorrectHtml += '</ul>';
	$('#incorrectAnswersList').attr('data-content',incorrectHtml);
}

/** cookies */
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function deleteCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}
