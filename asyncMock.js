const products = [
    {id: 1, category: 'computers', name: 'TYRION LANNISTER', img:'img/pcArmadas/pcArmada01.jpg', description: 'Intel Core i5 12400F - MSI PRO Z690-A - XFX Radeon RX 6600 8GB GDDR6 - Kingston DDR4 16GB 3600MHz - SSD M.2 WD 2TB Black SN750 - Cooler Master Mastercase H500 - AEROCOOL CYLON 500W RGB CON 80 PLUS BRONZE', price: 206555},
    {id: 2, category: 'computers', name: 'Computadora Dell', img:'img/pcArmadas/pcArmada02.jpg', price: 2000},
    {id: 3, category: 'computers', name: 'Monitor Samsung', img:'img/pcArmadas/pcArmada03.jpg', price: 1000},
    {id: 4, category: 'computers', name: 'Combo HP', img:'img/pcArmadas/pcArmada04.jpg', price: 2500},
    {id: 5, category: 'computers', name: 'Auriculares Sony', img:'img/pcArmadas/pcArmada04.jpg', price: 500},
    {id: 6, category: 'monitors', name: 'Monitor 1', img:'img/monitores/monitor1.jpg', price: 1200},
    {id: 7, category: 'monitors', name: 'Monitor 1', img:'img/monitores/monitor2.jpg', price: 1200},
    {id: 8, category: 'monitors', name: 'Monitor 1', img:'img/monitores/monitor3.jpg', price: 1200},
    {id: 9, category: 'monitors', name: 'Monitor 1', img:'img/monitores/monitor4.jpg', price: 1200},
    {id: 10, category: 'monitors', name: 'Monitor 1', img:'img/monitores/monitor5.jpg', price: 1200},
    {id: 11, category: 'notebooks', name: 'Notebook 1', img:'img/notebooks/notebook1.jpg', price: 1500},
    {id: 12, category: 'notebooks', name: 'Notebook 2', img:'img/notebooks/notebook2.jpg', price: 1500},
    {id: 13, category: 'notebooks', name: 'Notebook 3', img:'img/notebooks/notebook3.jpg', price: 1500},
    {id: 14, category: 'notebooks', name: 'Notebook 4', img:'img/notebooks/notebook4.jpg', price: 1500},
    {id: 15, category: 'notebooks', name: 'Notebook 5', img:'img/notebooks/notebook5.jpg', price: 1500},
    {id: 16, category:'chairs', name: 'Silla 1', img:'img/sillas/silla1.jpg', price: 500},
    {id: 17, category:'chairs', name: 'Silla 2', img:'img/sillas/silla2.jpg', price: 500},
    {id: 18, category:'chairs', name: 'Silla 3', img:'img/sillas/silla3.jpg', price: 500},
    {id: 19, category:'chairs', name: 'Silla 4', img:'img/sillas/silla4.jpg', price: 500},
    {id: 20, category:'chairs', name: 'Silla 5', img:'img/sillas/silla5.jpg', price: 500},
    {id: 21, category:'combos', name: 'Combos 1', img:'img/combo/combo1.jpg', price: 500},
    {id: 22, category:'combos', name: 'Combos 2', img:'img/combo/combo2.jpg', price: 500},
    {id: 23, category:'combos', name: 'Combos 3', img:'img/combo/combo3.jpg', price: 500},
    {id: 24, category:'combos', name: 'Combos 4', img:'img/combo/combo4.jpg', price: 500},
    {id: 25, category:'combos', name: 'Combos 5', img:'img/combo/combo5.jpg', price: 500},
    {id: 26, category:'headphones', name: 'Auriculares', img:'img/auriculares/auriculares1.jpg', price: 500},
    {id: 27, category:'headphones', name: 'Auriculares', img:'img/auriculares/auriculares2.jpg', price: 500},
    {id: 28, category:'headphones', name: 'Auriculares', img:'img/auriculares/auriculares3.jpg', price: 500},
    {id: 29, category:'headphones', name: 'Auriculares', img:'img/auriculares/auriculares4.jpg', price: 500},
    {id: 30, category:'headphones', name: 'Auriculares', img:'img/auriculares/auriculares5.jpg', price: 500},
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === category));
        }, 2000);
    })
};