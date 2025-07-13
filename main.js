const db = firebase.database();
const counterRef = db.ref('counter');

const counterDisplay = document.getElementById('counterDisplay');
const countSpan = document.getElementById('countSpan');

counterRef.on('value', (snapshot) => {
    const count = snapshot.val() || 0;
    counterDisplay.innerText = convertToBangla(count);
    countSpan.innerText = convertToBangla(count);
});

function incrementCounter() {
    // Increment counter in Firebase
    counterRef.transaction((currentValue) => {
        return (currentValue || 0) + 1;
    });

    // Slap animation trigger
    const slipper = document.getElementById('shoeSeal');
    slipper.classList.remove('slap'); // Reset in case it's still animating
    void slipper.offsetWidth; // Force reflow
    slipper.classList.add('slap');    // Re-add animation
}
function convertToBangla(num) {
    const banglaDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
    return num.toString().split('').map(d => banglaDigits[d] || d).join('');
}
