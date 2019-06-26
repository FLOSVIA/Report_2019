function handler(event) {
    phases = ['capturing', 'target', 'bubbling'];
    console.log(event.target.nodeName, this.nodeName, phases[event.eventPhase - 1]);
}

document.getElementById('target').addEventListener('click', handler, true);
document.querySelector('fieldset').addEventListener('click', handler, true);
document.querySelector('body').addEventListener('click', handler, true);
document.querySelector('html').addEventListener('click', handler, true);