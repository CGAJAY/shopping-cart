const items = document.querySelector('.items');

let products = [{
		id: 1,
		name: 'Fashion Unisex Military Arab Tactical Desert Shemagh KeffIyeh Scarf Shawl Neck Head Wrap Black White',
		image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/647569/1.jpg?0630',
		price: 5,
		quantity: 1
	},
	{
		id: 2,
		name: 'Annov 2 Slice Bread Toaster - 700W - White',
		image: 'https://ke.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/09/7687951/1.jpg?0941',
		price: 150,
		quantity: 1
	},
	{
		id: 3,
		name: 'NIVEA Perfect & Radiant Even Tone Day And Night Cream For Women - 50ml',
		image: 'https://ke.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/03/082586/1.jpg?3405',
		price: 10,
		quantity: 2
	},
];





products.forEach(product => {
	let total = 0;
	total += product.price;
	let fullAmount = document.querySelector('.full-amount')
	fullAmount.textContent = `$ ${total}`;
	const productDiv = document.createElement('div');
	productDiv.classList.add('item');
	const row1 = document.createElement('div');
	row1.classList.add('row1');
	const productImage = document.createElement('img');
	const productName = document.createElement('p');
	productName.classList.add('item-name')
	const productCost = document.createElement('span');
	productCost.classList.add('amount');
	const row2 = document.createElement('div');
	row2.classList.add('row2');
	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('remove-btn');
	deleteBtn.textContent = 'Remove';
	const deleteIcon = document.createElement('i');
	deleteIcon.classList.add('fa-solid', 'fa-trash');
	const btnCont = document.createElement('div');
	const addBtn = document.createElement('button');
	addBtn.classList.add('btn');
	addBtn.textContent = '+'
	const productQuantity = document.createElement('span');
	productQuantity.textContent = product.quantity;
	productQuantity.classList.add('quantity');
	const removeBtn = document.createElement('button');
	removeBtn.classList.add('btn');
	removeBtn.textContent = '-'


	productCost.textContent = `$ ${product.price}`;
	productName.textContent = product.name;
	productImage.src = product.image;
	row1.appendChild(productImage);
	row1.appendChild(productName);
	row1.appendChild(productCost);
	productDiv.appendChild(row1);
	items.appendChild(productDiv);
	btnCont.appendChild(addBtn);
	btnCont.appendChild(productQuantity);
	btnCont.appendChild(removeBtn);
	deleteBtn.appendChild(deleteIcon);
	row2.appendChild(deleteBtn);
	row2.appendChild(btnCont);
	productDiv.appendChild(row2);

	addBtn.addEventListener('click',() => {
		product.quantity++;
		productQuantity.textContent = product.quantity;
		total = product.price * product.quantity;
		fullAmount.textContent = `$ ${total}`;
		
	});

	removeBtn.addEventListener('click',() => {
		if(product.quantity > 1){
			product.quantity--;
			productQuantity.textContent = product.quantity;
			total = product.price * product.quantity;
			fullAmount.textContent = `$ ${total}`;
		}
	});
	
	// productQuantity.textContent = product.quantity;
	
});


