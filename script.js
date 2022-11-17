const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  const shiftKeyPressed = e.shiftKey;
  const targeting = e.target;
  if (shiftKeyPressed && targeting.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === targeting || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  } else if (shiftKeyPressed && !targeting.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === targeting || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = false;
      }
    });
  }
  lastChecked = targeting;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheck);
});
