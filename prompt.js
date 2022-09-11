const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        alert('Ki khbr dst');
    }

}
const askSomething = () => {
    const decision = confirm('Are you comming to the Picnic');
    console.log(decision);
    if (decision === true) {
        alert('Salami Patha');

    }
    else {
        console.log('you are not allow');
    }
}

const getUserInfo = () => {
    const name = prompt('Tell ur name');
    console.log(name);
    if (!!name) {
        console.log(' Wllcome here', name);
    }
}

