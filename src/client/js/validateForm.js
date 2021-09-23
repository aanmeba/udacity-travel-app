import { handleSubmit } from './inputHandler';
import { updateUI } from './updateUI';

const submitBtn = document.querySelector('#search');

submitBtn.addEventListener('click', e => {
    validateForm(e);
})

function validateForm(e) {
    e.preventDefault();
    let cityInput = document.querySelector('#city').value;
    let dateInput = document.querySelector('#arrival').value;

    let userInput = { city: cityInput, date: dateInput };

    cityInput === '' || dateInput === '' ? alert('Please enter a destination and a date!') : Client.handleSubmit(userInput)
        .then(res => {

            // response to send to UI
            Client.updateUI(res);
        })
}

export { validateForm }