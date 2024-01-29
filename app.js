function vote(counterElement) {
    let counter = 0;

    counterElement.parentNode.onclick = function() {
      counter++;
      updateCounter(counterElement, counter);
    };
}

function updateCounter(counterElement, counter) {
    counterElement.textContent = counter;
}

const counterElements = document.querySelectorAll('.counter');

counterElements.forEach(counterElement => {
    vote(counterElement);
});