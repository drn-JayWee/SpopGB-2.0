let carts = document.querySelectorAll('.add-cart');

let products = [
	{
		name: 'Lorem, ipsum dolor.',
		tag: 'LoremIpsumDolor.',
		price: 99,
		inCart: 0
	},
]

for (let i=0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		cartNumbers();
	})
}

function onloadCartNumbers () {
	let productNumbers = localStorage.getItem ('cartNumbers');

	if(productNumbers) {
		document.querySelector('navbar__basket span').textContent = productNumbers;
	}
}


function cartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');

	productNumbers = parseInt(productNumbers);

	if( productNumbers ) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.navbar__basket span').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.navbar__basket span').textContent = 1;
	}
}

onloadCartNumbers()