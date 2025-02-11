function makeid(l) {
   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return [...Array(l)].map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
