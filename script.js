const items = document.querySelector('.items');

let products = [{
		id: 1,
		name: 'Fashion Unisex Military Arab Tactical Desert Shemagh KeffIyeh Scarf Shawl Neck Head Wrap Black White',
		image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/647569/1.jpg?0630',
		price: 50,
		quantity: 1
	},
	{
		id: 2,
		name: 'Annov 2 Slice Bread Toaster - 700W - White',
		image: 'https://ke.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/09/7687951/1.jpg?0941',
		price: 5500,
		quantity: 1
	},
	{
		id: 3,
		name: 'NIVEA Perfect & Radiant Even Tone Day And Night Cream For Women - 50ml',
		image: 'https://ke.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/03/082586/1.jpg?3405',
		price: 100,
		quantity: 1
	},
];

const productDiv = document.createElement('div');
productDiv.classList.add('item');
const row1 = document.createElement('div');
row1.classList.add('row1');
const productImage = document.createElement('img');
const productName = document.createElement('p');
productName.classList.add('item-name')
const productCost = document.createElement('span');
productCost.classList.add('amount');
// const row2 = document.createElement('div');

products.forEach(product => {
	productCost.textContent = `$ ${product.price}`;
	productName.textContent = `${product.name}`;
	productImage.src = `${product.image}`;
	row1.appendChild(productImage);
	row1.appendChild(productName);
	row1.appendChild(productCost);
	productDiv.appendChild(row1);
	items.appendChild(productDiv);
});