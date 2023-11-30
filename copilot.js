
const form = document.createElement('form');
const textField = document.createElement('input');
textField.type = 'text';
const button = document.createElement('button');
button.textContent = 'Submit';

form.appendChild(textField);
form.appendChild(button);

document.body.appendChild(form);

button.addEventListener('click', async () => {
    const inputValue = textField.value;
    const response = await fetch('/generate', {
        method: 'POST',
        body: JSON.stringify({ input: inputValue }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = data.response;
});
