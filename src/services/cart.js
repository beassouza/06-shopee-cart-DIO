//quais ações meu carrinho pode fazer

//CASOS DE USO
// ✅-> adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

// ✅-> calcular o total
async function calculateTotal(userCart){
    console.log("Shopee Cart TOTAL IS: ");
    let result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`🎁 Total: ${result}`);
}

// ✅-> deletar item do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex(item => item.name === name);
    
    if(index !== -1){
        userCart.splice(index, 1);
    }
}

// -> remover um item - diminuir um item
// async function removeItem(userCart, index){
//     //transforma o indice visual do usuário para o indice do backend
//     const deleteIndex = index - 1;

//     //se o index é maior do que zero e se é menor do que o tamanho do carrinho
//     if(deleteIndex >= 0 && deleteIndex < userCart.length){
//         userCart.splice(deleteIndex, 1);
//     }
// }

// ✅ -> remover um item - diminuir um item
async function removeItem(userCart, item) {

    //1. encontrar o índice do item
    const indexFound = userCart.findIndex( (p) => p.name === item.name);
    
    //2. Caso não encontre o item
    if (indexFound == -1) {
        console.log("item não encontrado")
        return;
    }
    
    //3. item > 1 subtrair um item, item = 1 deletar o item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity--;
        return;
    } 

    //4. Caso item = 1 deletar item
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }
}

async function displayCart(userCart, filterByType) {
    const listTitle = `\nShopee cart list${filterByType ? ` (Filtered by: ${filterByType})` : ''}:`;
    console.log(listTitle);

    // Determine which items to display
    const itemsToProcess = filterByType
        ? userCart.filter(item => item.type === filterByType)
        : [...userCart]; // Use a shallow copy to avoid modifying the original cart array directly

    // Sort the processed items
    itemsToProcess.sort((a, b) => a.subtotal() - b.subtotal());

    // Display the items or a message if empty
    if (itemsToProcess.length === 0) {
        console.log(filterByType ? "No items found with this filter." : "The cart is empty.");
        return;
    }

    itemsToProcess.forEach((item, index) => {
        // Consistently display the type if it exists
        const typeInfo = item.type ? ` (${item.type})` : '';
        console.log(`${index + 1}. ${item.name}${typeInfo} - R$ ${item.price} | ${item.quantity}X | Subtotal = R$ ${item.subtotal()}`);
    });
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}