var request = new XMLHttpRequest();

request.open('GET', '/projects/frontendMentor/time-tracking-dashboard-main/data.json', true);

request.onload = function() {

    var data = JSON.parse(request.responseText);
    console.log(data);
  
    const dailyButton = document.getElementById("daily");
    const weeklyButton = document.getElementById("weekly");
    const monthlyButton = document.getElementById("monthly");
  
    // Fonction pour filtrer par période
    function filterByPeriod(period) {

        // Récupérer le current number de work selon le filtre
        var workCurrentNumber = document.getElementById('work-current-number');
        const workData = data.find(item => item.title === "Work");
        const workCurrent = workData.timeframes[period].current;
        workCurrentNumber.textContent = workCurrent;

        // Récupérer le current number de work selon le filtre
        var workPreviousNumber = document.getElementById('work-previous-number');
        const workPrevious = workData.timeframes[period].previous;
        workPreviousNumber.textContent = workPrevious;







        // Récupérer le previous time de work selon le filtre
        var PreviousTime = document.querySelector('.previous-time');
        let previousTime;

        switch (period) {
        case "daily":
            previousTime = "day";
            break;
        case "weekly":
            previousTime = "week";
            break;
        case "monthly":
            previousTime = "month";
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
