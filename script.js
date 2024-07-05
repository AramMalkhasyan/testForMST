const formRange = document.querySelector("#formRange");
const rangeValue = document.querySelector("#rangeValue");

function updateValue() {
    rangeValue.textContent = formRange.value + " " + "%";
    const value = ((formRange.value - formRange.min) / (formRange.max - formRange.min)) * 100;
    rangeValue.style.left = `calc(${value}% - ${rangeValue.offsetWidth / 2}px)`;
}


updateValue()


formRange.addEventListener('input', updateValue);
