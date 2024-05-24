document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Previene la recarga de la página

    var formData = new FormData(this);

    fetch('https://script.google.com/macros/s/AKfycbx12E6t8D_xvFy_FJFaLD64EVPtEornkBmgRnwbBrlSKUDl5KRctIHB4HdeIxCdGMHv/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())  // Asegúrate de que la respuesta sea tratada como JSON
    .then(data => {
        if (data.result === "success") {
            alert('¡Thanks for subscribing!');
        } else {
            throw new Error(data.error);
        }
    })
    .catch(error => alert('Error: ' + error));
});
 

