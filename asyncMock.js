const products = [
    {id: 1, category: 'computers', name: 'TYRION LANNISTER', slug:'/tyrion-lannister', img:'img/pcArmadas/pcArmada01.jpg', description: 'Intel Core i5 12400F - MSI PRO Z690-A - XFX Radeon RX 6600 8GB GDDR6 - Kingston DDR4 16GB 3600MHz - SSD M.2 WD 2TB Black SN750 - Cooler Master Mastercase H500 - AEROCOOL CYLON 500W RGB CON 80 PLUS BRONZE', price: 206555},
    {id: 2, category: 'computers', name: 'WALTER WHITE', slug: '/walter-white', img:'img/pcArmadas/pcArmada02.jpg', description: 'Intel Core i5 12400F - MSI PRO Z690-A - XFX Radeon RX 6600 8GB GDDR6 - Kingston DDR4 16GB 3600MHz - SSD M.2 WD 2TB Black SN750 - Cooler Master Mastercase H500 - AEROCOOL CYLON 500W RGB CON 80 PLUS BRONZE', price: 2000},
    {id: 3, category: 'computers', name: 'LUKE SKYWALKER', slug: '/luke-skywalker', img:'img/pcArmadas/pcArmada03.jpg', description: 'Intel Core i5 12400F - MSI PRO Z690-A - XFX Radeon RX 6600 8GB GDDR6 - Kingston DDR4 16GB 3600MHz - SSD M.2 WD 2TB Black SN750 - Cooler Master Mastercase H500 - AEROCOOL CYLON 500W RGB CON 80 PLUS BRONZE', price: 1000},
    {id: 4, category: 'computers', name: 'MARTY MCFLY', slug: '/marty-mcfly', img:'img/pcArmadas/pcArmada04.jpg', description: 'Intel Core i5 12400F - MSI PRO Z690-A - XFX Radeon RX 6600 8GB GDDR6 - Kingston DDR4 16GB 3600MHz - SSD M.2 WD 2TB Black SN750 - Cooler Master Mastercase H500 - AEROCOOL CYLON 500W RGB CON 80 PLUS BRONZE', price: 2500},
    {id: 5, category: 'computers', name: 'DOMINIC TORETTO', slug: '/dominic-toretto', img:'img/pcArmadas/pcArmada05.jpg', description: 'Intel Core i5 12400F - MSI PRO Z690-A - XFX Radeon RX 6600 8GB GDDR6 - Kingston DDR4 16GB 3600MHz - SSD M.2 WD 2TB Black SN750 - Cooler Master Mastercase H500 - AEROCOOL CYLON 500W RGB CON 80 PLUS BRONZE', price: 500},
    {id: 6, category: 'notebooks', name: 'Notebook Gamer I5 Msi', slug: '/notebook-gamer-i5-msi', img:'img/notebooks/notebook1.jpg', description:'Notebook Gamer I5 Msi Laptop 16gb Ram 256gb Ssd Gtx1650', price: 1500},
    {id: 7, category: 'notebooks', name: 'Notebook Gamer Acer Nitro 5', slug: '/notebook-gamer-acer-nitro-5', img:'img/notebooks/notebook2.jpg', description:'Notebook Gamer Acer Nitro 5 AN515-46-R8RX-1 AMD Ryzen 7 16GB RAM 512GB SSD RTX 3050', price: 1500},
    {id: 8, category: 'notebooks', name: 'Notebook Gamer HP 15-CE006LA', slug: '/notebook-gamer-hp-15-ce006la', img:'img/notebooks/notebook3.jpg', description:'Notebook Gamer HP 15.6" Core i7 RAM 12GB Omen 15-CE006LA', price: 1500},
    {id: 9, category: 'notebooks', name: 'Bangho GAMER GM-15Z12', slug: '/bangho-gamer-gm-15z12', img:'img/notebooks/notebook4.jpg', description:'Ntbk. Bangho GAMER GM-15Z12 GF1650 / Core i5-12500H / 15,6 " / GeForce 1650 /16 Gb / SSD M2 1TB', price: 1500},
    {id: 10, category: 'notebooks', name: 'Notebook Gamer Asus', slug: '/notebook-gamer-asus', img:'img/notebooks/notebook5.jpg', description: 'Notebook Gamer Asus 15.6" Intel i5 + 16GB + RTX 3050', price: 1500},
    {id: 11, category: 'monitors', name: 'Monitor 1', slug: 'monitor-1', img:'img/monitores/monitor1.jpg', price: 1200},
    {id: 12, category: 'monitors', name: 'Monitor 2', slug: 'monitor-2', img:'img/monitores/monitor2.jpg', price: 1200},
    {id: 13, category: 'monitors', name: 'Monitor 3', slug: 'monitor-3', img:'img/monitores/monitor3.jpg', price: 1200},
    {id: 14, category: 'monitors', name: 'Monitor 4', slug: 'monitor-4', img:'img/monitores/monitor4.jpg', price: 1200},
    {id: 15, category: 'monitors', name: 'Monitor 5', slug: 'monitor-5', img:'img/monitores/monitor5.jpg', price: 1200},
    {id: 16, category:'chairs', name: 'Silla 1', slug: '', img:'img/sillas/silla1.jpg', price: 500},
    {id: 17, category:'chairs', name: 'Silla 2', slug: '', img:'img/sillas/silla2.jpg', price: 500},
    {id: 18, category:'chairs', name: 'Silla 3', slug: '', img:'img/sillas/silla3.jpg', price: 500},
    {id: 19, category:'chairs', name: 'Silla 4', slug: '', img:'img/sillas/silla4.jpg', price: 500},
    {id: 20, category:'chairs', name: 'Silla 5', slug: '', img:'img/sillas/silla5.jpg', price: 500},
    {id: 21, category:'combos', name: 'Combos 1', slug: '', img:'img/combo/combo1.jpg', price: 500},
    {id: 22, category:'combos', name: 'Combos 2', slug: '', img:'img/combo/combo2.jpg', price: 500},
    {id: 23, category:'combos', name: 'Combos 3', slug: '', img:'img/combo/combo3.jpg', price: 500},
    {id: 24, category:'combos', name: 'Combos 4', slug: '', img:'img/combo/combo4.jpg', price: 500},
    {id: 25, category:'combos', name: 'Combos 5', slug: '', img:'img/combo/combo5.jpg', price: 500},
    {id: 26, category:'headphones', name: 'Auriculares', slug: '', img:'img/auriculares/auriculares1.jpg', price: 500},
    {id: 27, category:'headphones', name: 'Auriculares', slug: '', img:'img/auriculares/auriculares2.jpg', price: 500},
    {id: 28, category:'headphones', name: 'Auriculares', slug: '', img:'img/auriculares/auriculares3.jpg', price: 500},
    {id: 29, category:'headphones', name: 'Auriculares', slug: '', img:'img/auriculares/auriculares4.jpg', price: 500},
    {id: 30, category:'headphones', name: 'Auriculares', slug: '', img:'img/auriculares/auriculares5.jpg', price: 500},
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

export const getProductBySlug = (slug) => {

    const formattedSlug = slug.startsWith('/') ? slug : `/${slug}`;
 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.slug === formattedSlug));
        }, 2000);
    });
};