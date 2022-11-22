const saveButton = document.querySelector("#save-button");

saveButton.addEventListener("click", function() {
    let nameInput = document.querySelector("#input-name").value;
    let birthdateInput = document.querySelector("#input-birthdate").value;
    console.log(nameInput);
    console.log(birthdateInput);
    dateToChange = new Date(birthdateInput);
    dateFormatted = dateToChange.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    console.log(dateFormatted);
});