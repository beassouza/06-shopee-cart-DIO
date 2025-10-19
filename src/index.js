import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";
import * as listService from "./services/list.js";


const myCart = [];
const myWishlist = []; 
const myFavorites = []; //podemos colocar favoritos ✅


//podemos colocar a opção de filtragem para pegar apenas livros e etc.


console.log("Welcome to the your Shopee Cart!");

//sem await não funciona. O JavaScript por padrão tenta fazer tudo ao mesmo tempo. Por isso, você tem que pedir para o JavaScript esperar.
//criando dois itens
const item1 = await createItem("Jogos Vorazes", 241.72, "livro", 2);
const item2 = await createItem("Jane Austen - Box com 3 Livros", 129.9, "livro", 3);
const item3 = await createItem("Anna Karenina", 89.9, "livro", 1);
const item4 = await createItem("NEWJEANS - Bluebook Ver.", 193.00, "álbum", 1);
const item5 = await createItem("Calça social feminina", 35.80, "roupa",4);
const item6 = await createItem("Lightstick BLACKPINK", 77.66, "bastão-de-luz-para-show", 2);
const item7 = await createItem("Kit Body Splash", 27.99, "perfume corporal", 3);

//adicionei itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
await cartService.addItem(myCart, item5);
await cartService.addItem(myCart, item7);


await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item5);


//deletei um item no carrinho
await cartService.deleteItem(myCart, item4.name);

//adiciono itens na minha carta de desejos
await listService.addItem(myWishlist, item1);
await listService.addItem(myWishlist, item2);
await listService.addItem(myWishlist, item3);
await listService.addItem(myWishlist, item4);
await listService.addItem(myWishlist, item6);

//deletar itens da carta de desejos
await listService.deleteItem(myWishlist, item1.name);
await listService.deleteItem(myWishlist, item2.name);
await listService.deleteItem(myWishlist, item3.name);

//adicionar itens na lista de favoritos
await listService.addItem(myFavorites, item7);

//mostro itens no carrinho
await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);

//mostro itens na lista de desejos
await listService.displayList(myWishlist, "Wishlist");
await listService.displayList(myWishlist, "Wishlist", "livro");

//mostro itens na lista de favoritos
await listService.displayList(myFavorites, "Favorites");
await listService.displayList(myFavorites, "Favorites", "roupa");

