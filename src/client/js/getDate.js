function today() {

    let today = new Date();

    // make today's date a string
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    return today

}

const arrivalDate = document.querySelector('#arrival');

arrivalDate.addEventListener('focus', e => {
    e.preventDefault();

    // set a range for the date
    let dateRange = document.querySelector('input[type="date"]');
    dateRange.setAttribute('min', today());
    dateRange.setAttribute('max', '2099-01-01')
    dateRange.value = today();
})

export { 
    today, 
    arrivalDate
}