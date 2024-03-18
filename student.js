const fs = require('fs');

function renderPage(studentData) {
    const { code, name, lastName, gender, age, studyField } = studentData;

    const profileData = `
        <h1>Student profile</h1>
        <p>Number: ${code}</p>
        <p>First Name: ${name}</p>
        <p>Last Name: ${lastName}</p>
        <p>Gender: ${gender}</p>
        <p>Age: ${age}</p>
        <p>Study Field: ${studyField}</p>
    `;

    // Zapis danych do pliku
    fs.writeFile(`${code}.txt`, profileData, (err) => {
        if (err) {
            console.error('Error saving data to file:', err);
        } else {
            console.log('Data saved to file successfully!');
        }
    });

    return profileData;
}