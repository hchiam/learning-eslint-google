let didShowMessage = false;

function showMessage() {
    const message = 'logging logging log';

    for (let i = 0; i < 5; i++) {
        console.log(message);
    }
}

showMessage();
