class Product {
	constructor(id, name, image, price) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.price = price;
	}
}

class ShoppingCartItem {
	constructor(product, quantity) {
		this.product = product;
		this.quantity = quantity;
	}

	getTotalPrice() {
		return this.product.price * this.quantity;
	}
}

class ShoppingCart {
	constructor() {
		this.items = [];
	}

	addItem(product) {
		const existingItem = this.items.find(
			(item) => item.product.id === product.id
		);
		if (existingItem) {
			existingItem.quantity++;
		} else {
			this.items.push(new ShoppingCartItem(product, 1));
		}
	}

	removeItem(productId) {
		this.items = this.items.filter(
			(item) => item.product.id !== productId
		);
	}

	decreaseItem(productId) {
		const existingItem = this.items.find(
			(item) => item.product.id === productId
		);
		if (existingItem) {
			existingItem.quantity--;
			if (existingItem.quantity <= 0) {
				this.removeItem(productId);
			}
		}
	}

	getTotal() {
		return this.items.reduce(
			(total, item) => total + item.getTotalPrice(),
			0
		);
	}

	displayItems() {
		const itemsContainer = document.querySelector(".items");
		itemsContainer.innerHTML = "";
		this.items.forEach((item) => {
			const productDiv = document.createElement("div");
			productDiv.classList.add("item");
			productDiv.innerHTML = `
                <div class="row1">
                    <img src="${item.product.image}" alt="${item.product.name}">
                    <div class="item-details">
                        <p class="item-name">${item.product.name}</p>
                        <span class="item-price">$${item.product.price}</span>
                    </div>
                </div>
                <div class="row2">
                    <span>Quantity: <span class="quantity">${item.quantity}</span></span>
                    <button class="remove-btn">Remove</button>
                    <button class="decrease-btn">-</button>
                    <button class="increase-btn">+</button>
                </div>
            `;
			itemsContainer.appendChild(productDiv);

			// Add event listeners for buttons
			productDiv
				.querySelector(".remove-btn")
				.addEventListener("click", () => {
					this.removeItem(item.product.id);
					this.updateDisplay();
				});

			productDiv
				.querySelector(".decrease-btn")
				.addEventListener("click", () => {
					this.decreaseItem(item.product.id);
					this.updateDisplay();
				});

			productDiv
				.querySelector(".increase-btn")
				.addEventListener("click", () => {
					this.addItem(item.product);
					this.updateDisplay();
				});
		});

		document.querySelector(
			".full-amount"
		).textContent = `Total: $${this.getTotal()}`;
	}

	updateDisplay() {
		this.displayItems();
	}
}

// Sample Products
const products = [
	new Product(
		1,
		"Fashion Unisex Military Arab Tactical Desert Shemagh KeffIyeh Scarf Shawl Neck Head Wrap Black White",
		"https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/647569/1.jpg?0630",
		5
	),
	new Product(
		2,
		"Annov 2 Slice Bread Toaster - 700W - White",
		"https://ke.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/09/7687951/1.jpg?0941",
		150
	),
	new Product(
		3,
		"NIVEA Perfect & Radiant Even Tone Day And Night Cream For Women - 50ml",
		"https://ke.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/03/082586/1.jpg?3405",
		10
	),
];

// Create a shopping cart instance
const cart = new ShoppingCart();

// Function to add sample products to the cart for demonstration
products.forEach((product) => cart.addItem(product));

// Display initial items in the cart
cart.displayItems();
