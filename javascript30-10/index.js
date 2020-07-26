const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(event) {
    let inBetween = false;

    if (event.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {

            if (checkbox === lastChecked || checkbox === this) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));