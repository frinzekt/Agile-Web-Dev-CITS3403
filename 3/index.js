// Browser Name
console.log(navigator.geolocation.getCurrentPosition(position => console.log(position)));
console.log(window.navigator.appName);
console.log(window.navigator.userAgent);
console.log(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

let deviceSpecification = navigator.userAgent;
deviceSpecification = deviceSpecification.substring(deviceSpecification.indexOf('(') + 1, deviceSpecification.indexOf(')') - 1);
console.log(deviceSpecification);

// Open new Window
// const w2 = window.open('http://www.google.com');
