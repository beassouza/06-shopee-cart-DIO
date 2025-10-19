//CASOS DE USO DOS ITENS

// -> criar item com subtotal certo
async function createItem(name, price, type, quantity){
    return{
        name, 
        price, 
        type,
        quantity, 
        subtotal: function() { return this.price * this.quantity },
    };
}

export default createItem;
