const div = document.getElementsByTagName('div')[0];
const btn = document.getElementsByTagName('button')[0];

div.addEventListener('click', function(){
    alert('Hola! Soy el div')
});

// Equivalente al atributo 'onclick' del botón:
// btn.addEventListener('click', function(event)
//     alert('Hola!');
//     event.stopPropagation();
// });