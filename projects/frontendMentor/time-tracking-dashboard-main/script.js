var request = new XMLHttpRequest();

request.open('GET', '/projects/frontendMentor/time-tracking-dashboard-main/data.json', true);

request.onload = function() {

    var data = JSON.parse(request.responseText);
    console.log(data);
  
    const dailyButton = document.getElementById("daily");
    const weeklyButton = document.getElementById("weekly");
    const monthlyButton = document.getElementById("monthly");
  
    function filterByPeriod(period) {

		//WORK
		// Récupérer le current number de work selon le filtre
		var workCurrentNumber = document.getElementById('work-current-number');
		const workData = data.find(item => item.title === "Work");
		const workCurrent = workData.timeframes[period].current;
		workCurrentNumber.textContent = workCurrent;
	  
		// Récupérer le current number de work selon le filtre
		var workPreviousNumber = document.getElementById('work-previous-number');
		const workPrevious = workData.timeframes[period].previous;
		workPreviousNumber.textContent = workPrevious;
	  
		//PLAY
		// Récupérer le current number de play selon le filtre
		var playCurrentNumber = document.getElementById('play-current-number');
		const playData = data.find(item => item.title === "Play");
		const playCurrent = playData.timeframes[period].current;
		playCurrentNumber.textContent = playCurrent;
	  
		// Récupérer le current number de play selon le filtre
		var playPreviousNumber = document.getElementById('play-previous-number');
		const playPrevious = playData.timeframes[period].previous;
		playPreviousNumber.textContent = playPrevious;
	  
		//STUDY
		// Récupérer le current number de study selon le filtre
		var studyCurrentNumber = document.getElementById('study-current-number');
		const studyData = data.find(item => item.title === "Study");
		const studyCurrent = studyData.timeframes[period].current;
		studyCurrentNumber.textContent = studyCurrent;
	  
		// Récupérer le current number de study selon le filtre
		var studyPreviousNumber = document.getElementById('study-previous-number');
		const studyPrevious = studyData.timeframes[period].previous;
		studyPreviousNumber.textContent = studyPrevious;
	  
		//EXERCICE
		// Récupérer le current number de exercice selon le filtre
		var exerciceCurrentNumber = document.getElementById('exercice-current-number');
		const exerciceData = data.find(item => item.title === "Exercise");
		const exerciceCurrent = exerciceData.timeframes[period].current;
		exerciceCurrentNumber.textContent = exerciceCurrent;
	  
		// Récupérer le current number de exercice selon le filtre
		var exercicePreviousNumber = document.getElementById('exercice-previous-number');
		const exercicePrevious = exerciceData.timeframes[period].previous;
		exercicePreviousNumber.textContent = exercicePrevious;
	  
		//SOCIAL
		// Récupérer le current number de social selon le filtre
		var socialCurrentNumber = document.getElementById('social-current-number');
		const socialData = data.find(item => item.title === "Social");
		const socialCurrent = socialData.timeframes[period].current;
		socialCurrentNumber.textContent = socialCurrent;
	  
		// Récupérer le current number de exercice selon le filtre
		var socialPreviousNumber = document.getElementById('social-previous-number');
		const socialPrevious = socialData.timeframes[period].previous;
		socialPreviousNumber.textContent = socialPrevious;
	  
		//SELF CARE
		// Récupérer le current number de social selon le filtre
		var selcareCurrentNumber = document.getElementById('selcare-current-number');
		const selcareData = data.find(item => item.title === "Self Care");
		const selcareCurrent = selcareData.timeframes[period].current;
		selcareCurrentNumber.textContent = selcareCurrent;
	  
		// Récupérer le current number de exercice selon le filtre
		var selcarePreviousNumber = document.getElementById('selcare-previous-number');
		const selcarePrevious = selcareData.timeframes[period].previous;
		selcarePreviousNumber.textContent = selcarePrevious;
	  
		// Récupérer le previous time de work selon le filtre
		var PreviousTime = document.querySelector('.previous-time');
		var dailyElement = document.getElementById('daily');
		var weeklyElement = document.getElementById('weekly');
		var monthlyElement = document.getElementById('monthly');
		let previousTime;
	  
		switch (period) {
		  case "daily":
			previousTime = "day";
			dailyElement.classList.add('active');
			weeklyElement.classList.remove('active');
			break;
		  case "weekly":
			previousTime = "week";
			dailyElement.classList.remove('active');
			weeklyElement.classList.add('active');
			break;
		  case "monthly":
			previousTime = "month";
			dailyElement.classList.remove('active');
			weeklyElement.classList.remove('active');
			break;
		  default:
			previousTime = "";
		}
	  
		PreviousTime.textContent = previousTime;
	  }
	 
  
    // Ajouter des écouteurs d'événements pour les boutons
    dailyButton.addEventListener("click", () => {
      filterByPeriod("daily");
    });
  
    weeklyButton.addEventListener("click", () => {
      filterByPeriod("weekly");
    });
  
    monthlyButton.addEventListener("click", () => {
      filterByPeriod("monthly");
    });

};
  
request.send();
