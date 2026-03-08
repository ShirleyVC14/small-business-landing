const cta = document.getElementById('cta');
const input = document.getElementById('ctaInput');
const button = document.getElementById('updateBtn');

button.addEventListener('click', () => {
    const newText = input.value.trim();
    if (newText !== '') {
        cta.textContent = newText; // update the CTA headline
        input.value = '';           
    }
});

const originalText = cta.textContent;

//reset button
const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
    cta.textContent = originalText; // reset to original
});