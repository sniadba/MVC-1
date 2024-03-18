function renderPage() {
    const form = document.createElement('form');


    const imieInput = document.createElement('input');
    imieInput.type = 'text';
    imieInput.name = 'name';
    imieInput.placeholder = 'Imię';
    form.appendChild(imieInput);

    const nazwiskoInput = document.createElement('input');
    nazwiskoInput.type = 'text';
    nazwiskoInput.name = 'lastname';
    nazwiskoInput.placeholder = 'Nazwisko';
    form.appendChild(nazwiskoInput);

    const wiekInput = document.createElement('input');
    wiekInput.type = 'number';
    wiekInput.name = 'age';
    wiekInput.placeholder = 'Wiek';
    form.appendChild(wiekInput);

    const plecSelect = document.createElement('select');
    plecSelect.name = 'gender';

    const options = ['male', 'female', 'other'];
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.text = option;
        plecSelect.appendChild(optionElement);
    });

    form.appendChild(plecSelect);

    const numerAlbumuInput = document.createElement('input');
    numerAlbumuInput.type = 'number';
    numerAlbumuInput.name = 'code';
    numerAlbumuInput.placeholder = 'Numer albumu';
    form.appendChild(numerAlbumuInput);

    const kierunekInput = document.createElement('input');
    kierunekInput.type = 'text';
    kierunekInput.name = 'studyField';
    kierunekInput.placeholder = 'Kierunek';
    form.appendChild(kierunekInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Wyślij';
    form.appendChild(submitButton);

    document.body.appendChild(form);
}

renderPage();