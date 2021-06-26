const ul = document.querySelector('.list')
document.addEventListener('keyup' , function(e) {
   let keys = e.key;
   let print = document.createElement('LI');
   print.innerText = `You Clicked:--${keys}`;
   ul.appendChild(print);
});
