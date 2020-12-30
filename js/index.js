// valor inicial del contador
let contador = 0;

// seleccionamos el valor y el botón a ser usado
// seleccionamos el valor del id
const value = document.querySelector('#value');
// seleccionamos las clases de los botones  
const btns = document.querySelectorAll('.btn');
// imprimimos los valores para testear
// console.log(btns);
/* declaramos el ciclo foreach para recorrer los valores de los botones
lo que nos permitirá desplegar los botones para hacer la selección
*/
btns.forEach(function(btn){
/* agregamos los eventos del botón para seleccionar de acuerdo a sus
 funcionalidades disminuir, reiniciar, aumentar*/
 	btn.addEventListener("click", function(e){
 		const styles = e.currentTarget.classList;
/*declaramos el ciclo if que nos permitirá recorrer la lista de clases
asignada a los botones, para que cuando lo pulsemos podamos disminuir,
reiniciar o aumentar los valores del contador*/
 		if(styles.contains('decrease')){
 			contador--;
 		}
 		else if(styles.contains('increase')){
 			contador++;
 		}
 		else{
 			contador = 0;
 		}
// cambiaremos el color del botón de acuerdo a lo que se pulse
		if(contador > 0){
			value.style.color = 'green';
		}
		else if(contador < 0){
			value.style.color = 'red';
		}
		else{
			value.style.color = 'black';
		}
 		value.textContent = contador; 
 	});
});