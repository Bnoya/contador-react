if (navigator.serviceWorker) {
    console.log('Existe el serviceWorker');
    navigator.serviceWorker.register("./sw.js");
}

