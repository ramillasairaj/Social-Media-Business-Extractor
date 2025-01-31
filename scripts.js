const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function (event) {
    const confirmation = confirm("Are you sure you want to navigate away?");
    if (!confirmation) {
      event.preventDefault();
    }
  });
});
