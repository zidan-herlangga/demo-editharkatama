// == Set Cookies ==
document.addEventListener("DOMContentLoaded", function () {
  const cookiesNotice = document.getElementById("cookies-notice");
  const acceptButton = document.getElementById("accept-button");
  const declineButton = document.getElementById("decline-button");

  // Function to set a cookie with a name, value, and expiration days
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Function to get a cookie by name
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
  }

  // Function to check if the cookies have been accepted
  function checkCookies() {
    return getCookie("cookiesAccepted") === "true";
  }

  // Show the cookies notice if not accepted
  if (!checkCookies()) {
    cookiesNotice.classList.add("show");
  }

  // Handle accept button click
  acceptButton.addEventListener("click", function () {
    setCookie("cookiesAccepted", "true", 365); // Cookie expires in 365 days
    cookiesNotice.classList.remove("show");
  });

  // Handle decline button click
  declineButton.addEventListener("click", function () {
    cookiesNotice.classList.remove("show");
  });
});
