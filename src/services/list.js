//CASOS DE USO
// ✅-> adicionar item na lista
async function addItem(userList, item){
    userList.push(item);
}

// ✅-> deletar item da lista
async function deleteItem(userList, name){
    const index = userList.findIndex(item => item.name === name);
    
    if(index !== -1){
        userList.splice(index, 1);
    }
}

async function displayList(userList, namelist, filterByType) {
    const listTitle = `\nShopee ${namelist} list${filterByType ? ` (Filtered by: ${filterByType})` : ''}:`;
    console.log(listTitle);

    // Determine which items to display
    const itemsToProcess = filterByType
        ? userList.filter(item => item.type === filterByType)
        : [...userList]; // Use a shallow copy to avoid modifying the original list array directly

    // Sort the processed items
    itemsToProcess.sort((a, b) => a.price - b.price);

    // Display the items or a message if empty
    if (itemsToProcess.length === 0) {
        console.log(filterByType ? "No items found with this filter." : "The List is empty.");
        return;
    }

    itemsToProcess.forEach((item, index) => {
        // Consistently display the type if it exists
        const typeInfo = item.type ? ` (${item.type})` : '';
        console.log(`${index + 1}. ${item.name}${typeInfo} - R$ ${item.price}`);
    });
}

export {
    addItem,
    deleteItem,
    displayList
}