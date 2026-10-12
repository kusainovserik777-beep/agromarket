async function loadProducts() {
    try {
        const response = await fetch('http://localhost:3001/products');
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error('Ошибка загрузки:', error);
        document.querySelector('.catalog').innerHTML = '<p>Не удалось загрузить товары. Проверьте сервер!</p>';
    }
}

function renderProducts(products) {
    const catalog = document.querySelector('.catalog');
    
    products.forEach((product) => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} тг</p>
            <button>В корзину</button>
        `;

        // Обработчик клика на кнопку «В корзину» (доп. задание из лабы)
        const button = card.querySelector('button');
        button.addEventListener('click', () => {
            const counter = document.getElementById('cart-count');
            counter.textContent = Number(counter.textContent) + 1;
        });

        catalog.appendChild(card);
    });
}

loadProducts();