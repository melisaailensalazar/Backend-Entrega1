import ProductManager from "./ProductManager.js";

const manager = new ProductManager();

console.log("Lista de Productos");
manager.getProducts();
console.log("-----------------");

console.log("Agregando");
manager.addProduct("Test1", "Prueba1", 9500, "Sin imagen", "...", 25);
manager.addProduct("Test2", "Prueba2", 500, "Sin imagen", "...", 35);
console.log("-----------------");

console.log("Lista de Productos");
manager.getProducts();
console.log("-----------------");

console.log("Producto existente");
manager.addProduct("Test1", "Prueba1", 9500, "Sin imagen", "...", 25);
console.log("-----------------");

console.log("Producto Null");
manager.addProduct("Test", "Prueba", 7000, null, "700", 20);
console.log("Producto Undefined");
manager.addProduct("Test", undefined, 5000, "Sin imagen", "...", 500);
console.log("-----------------");

// Mostrar Productos
console.log("Lista de Productos");
manager.getProducts();
console.log("-----------------");

// Caso Existente
console.log("Buscando");
manager.getProductById(1);
console.log("-----------------");
// Caso no Existente
console.log("--------Buscando Producto--------");
manager.getProductById(3);
console.log("-----------------");
