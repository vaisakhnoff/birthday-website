navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        document.querySelector("video").srcObject = stream;
    })
    .catch(err => {
        alert("Oops! Your magic mirror is broken! 🪞💔");
    });
