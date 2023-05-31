<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./assets/main.css">

  <title>Age calculator app</title>
</head>

<body>
  <div class="age-card">
    <div class="container">
      <form action="calculator.php">
        <div class="form-container">

          <div class="block">
            <label for="day">Day</label>
            <input type="number" id="day" name="day" placeholder="DD">
            <small></small>
          </div>
          <div class="block">

            <label for="month">Months</label>
            <input type="number" id="month" name="month" placeholder="MM">
            <small></small>
          </div>

          <div class="block">
            <label for="year">Year</label>
            <input type="number" id="year" name="year" placeholder="YY">
            <small></small>
          </div>

        </div>
        <div class="submit-">
          <hr>
          <button type="submit" class="submit-btn">
            <img class="arrow" src="assets/images/icon-arrow.svg" alt="icon" width="50">
          </button>
        </div>
      </form>
      <div class="output-content">
        <h1><span id="YY">--</span>year</h1>
        <h1><span id="MM">--</span>month</h1>
        <h1><span id="DD">--</span>days</h1>
      </div>
      <div>
        <p></p>
      </div>

    </div>
  </div>
</body>

</html>