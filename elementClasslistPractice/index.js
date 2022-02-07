const myPara = document.getElementById('myPara');

myPara.classList.add('bold', 'bigFont');
myPara.classList.remove('bold');
myPara.classList.replace('bigFont','redBg');

console.log(myPara.classList);
