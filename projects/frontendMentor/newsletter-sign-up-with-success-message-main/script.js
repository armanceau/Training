function testMail() {
  var inputMail = document.getElementById('inputMail').value;
  var regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (inputMail.match(regexMail)) {
    var inputMailElement = document.getElementById('inputMail');
    inputMailElement.style.backgroundColor = "hsla(120,100%,25%, 0.2)";
    inputMailElement.style.borderColor = "#006600";
    inputMailElement.style.color = "hsl(120,100%,25%)";
    var divMessageInvalid = document.getElementById('left-footer-email-message-invalid');
    divMessageInvalid.style.display = "none";
    var btnSubscribe = document.getElementById('subscribeBtn');
    btnSubscribe.disabled = false;

    const subscribeBtn = document.getElementById("subscribeBtn");

    subscribeBtn.addEventListener("click", function () {
      window.location.href = "succes.html";
    });
  } else {
    var inputMailElement = document.getElementById('inputMail');
    inputMailElement.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
    inputMailElement.style.borderColor = "hsl(4, 100%, 67%)";
    inputMailElement.style.color = "hsl(4, 100%, 67%)";
    var divMessageInvalid = document.getElementById('left-footer-email-message-invalid');
    divMessageInvalid.style.display = "flex";
  }
}

const dismissBtn = document.getElementById("dismissBtn");

dismissBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

