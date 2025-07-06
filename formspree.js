const scriptURL = "https://formspree.io/f/xqabodad";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
    mode: "no-cors",
  })
    .then((response) => {
      Toastify({
        text: `🎉 Success! You're one step closer to a 90X website.`,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#FFFFFF",
          color: "#4ADE80",
          border: "1px solid #4ADE80",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    })
    .then(() => {
      form.reset();
    })
    .catch((error) => {
      Toastify({
        text: `h-oh! Something went wrong. 
        😕 Please try again.`,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#FEE2E2",
          color: "#EF4444",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    });
});
