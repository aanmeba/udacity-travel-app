async function handleSubmit(input) {

    const responseOptions = {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
    };

    const response = await fetch('http://localhost:8081/userText', responseOptions);
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log('Something went wrong!', error);
    }

}

export { handleSubmit }
