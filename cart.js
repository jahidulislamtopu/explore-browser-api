const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    return inputValue;
}

const addProduct = () => {
    const product = document.getElementById('product-name-field');
    const quantity = document.getElementById('product-quantity-field');
    console.log(product, quantity);
    displayProduct(product, quantity);

    // set to local storage
    localStorage.setItem(product, quantity);

}

const displayProduct = (product, quantity) => {
    const container = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}