import ProductManager from "./ProductManager.js";

const manager = new ProductManager();
console.log("Lista de productos");
manager.getProducts();
console.log("-----------------");
manager.addProduct("Test", "Prueba", 1000, "Sin imagen", "...", 100);

console.log("Lista de Productos");
manager.getProducts();
console.log("-----------------");
manager.addProduct("Test", "Prueba", 1000, "Sin imagen", "...", 100);

console.log("Buscando...");
manager.getProductById(1);
console.log("-----------------");

console.log("Buscando...");
manager.getProductById(3);
console.log("-----------------");
