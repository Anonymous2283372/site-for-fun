let cartBody = document.getElementById('cart')

window.addEventListener('click',(event) => {
	console.log('click');
	if(event.target.classList.contains('button-buy')){
		console.log('клик на кнопочку');
		addItems(event.target);
	}
});
function addItems(element){
	console.log('додавання тавара');
	let li = document.createElement('li');
	li.innerHTML = element.dataset.img
	 			+ element.dataset.name
	 			+ element.dataset.price
	 			+ '<div class="delete-items"> X </div>';

	 			cartBody.appendChild(li);
}