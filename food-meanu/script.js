const menuData = {
    starters: {
        icon: '🥗',
        items: [
            {
                name: 'French Fries',
                description: 'Classic crisp fries with sea salt.',
                howMade: 'Fresh-cut potatoes fried until golden.',
                tasteProfile: 'Crispy, salty, and satisfying.',
                price: 100,
                emoji: '🍟',
                image: 'img/french_fries.jpg'
            },
            {
                name: 'Loaded Fries',
                description: 'Fries topped with cheese and sauces.',
                howMade: 'Crispy fries piled with cheddar and herbs.',
                tasteProfile: 'Cheesy, rich, and indulgent.',
                price: 160,
                emoji: '🧀',
                image: 'img/loaded_fries.jpg'
            },
            {
                name: 'Peri Peri Fries',
                description: 'Spicy peri peri seasoned fries.',
                howMade: 'Tossed in house-made peri peri spice.',
                tasteProfile: 'Spicy, smoky, and bold.',
                price: 130,
                emoji: '🌶️',
                image: 'img/peri_peri_fries.jpg'
            },
            {
                name: 'Cheese Balls',
                description: 'Golden fried cheese bites.',
                howMade: 'Crispy breadcrumb shell with molten cheese.',
                tasteProfile: 'Creamy and crunchy.',
                price: 150,
                emoji: '🧀',
                image: 'img/cheese_balls.jpg'
            },
            {
                name: 'Carribean Chicken Strips',
                description: 'Jerk-seasoned chicken strips with dip.',
                howMade: 'Marinated in Caribbean spices and grilled.',
                tasteProfile: 'Smoky, tangy, and vibrant.',
                price: 170,
                emoji: '🍗',
                image: 'img/Carribean_Chicken_Strips.jpg'
            },
            {
                name: 'Loaded Nachos',
                description: 'Tortilla chips with cheese and toppings.',
                howMade: 'Baked nachos loaded with salsa and cheese.',
                tasteProfile: 'Crunchy, cheesy, and zesty.',
                price: 150,
                emoji: '🌽',
                image: 'img/Loaded_Nachos.jpg'
            },
            {
                name: 'Chicken Nachos',
                description: 'Nachos topped with seasoned chicken.',
                howMade: 'Layered with chicken, cheese, and jalapeños.',
                tasteProfile: 'Spicy and savory.',
                price: 180,
                emoji: '🍗',
                image: 'img/Chicken_Nachos.jpg'
            },
            {
                name: 'Fish & Chips',
                description: 'Crispy battered fish with fries.',
                howMade: 'Beer-battered fish fried to golden perfection.',
                tasteProfile: 'Light, crunchy, and classic.',
                price: 170,
                emoji: '🐟',
                image: 'img/Fish_&_Chips.jpg'
            }
        ]
    },

    mexican: {
        icon: '🌮',
        items: [
            {
                name: 'Mexican Chicken Tacos',
                description: 'Soft tacos with chicken and salsa.',
                howMade: 'Grilled chicken stuffed in soft taco shells.',
                tasteProfile: 'Juicy and tangy.',
                price: 200,
                image: 'img/Mexican_Chicken_Tacos.jpg'
            },
            {
                name: 'Pepper Chicken Tacos',
                description: 'Peppery chicken with fresh veggies.',
                howMade: 'Pan-seared chicken with bell peppers.',
                tasteProfile: 'Spicy and aromatic.',
                price: 210,
                image: 'img/Pepper_Chicken_Tacos.jpg'
            },
            {
                name: 'Paneer Tacos',
                description: 'Grilled paneer with Mexican spices.',
                howMade: 'Paneer marinated in chili and herbs.',
                tasteProfile: 'Smoky and cheesy.',
                price: 180,
                image: 'img/Paneer_Tacos.jpg'
            },
            {
                name: 'Peri Peri Chicken Tacos',
                description: 'Tacos with spicy peri peri chicken.',
                howMade: 'Chicken tossed in peri peri sauce.',
                tasteProfile: 'Hot, tangy, and bold.',
                price: 190,
                image: 'img/Peri_Peri_Chicken_Tacos.jpg'
            }
        ]
    },

    bowls: {
        icon: '🥣',
        items: [
            {
                name: 'Chicken Burrito Bowl',
                description: 'Rice bowl with seasoned chicken and salsa.',
                howMade: 'Layered with rice, beans, chicken, and toppings.',
                tasteProfile: 'Filling and savory.',
                price: 300,
                image: 'img/Chicken_Burrito_Bowl.jpg'
            },
            {
                name: 'Prawn Burrito Bowl',
                description: 'Seafood bowl with prawns and rice.',
                howMade: 'Prawns sautéed with garlic and herbs.',
                tasteProfile: 'Fresh and zesty.',
                price: 320,
                image: 'img/Prawn_Burrito_Bowl.jpg'
            },
            {
                name: 'Kataifi Prawn',
                description: 'Crunchy prawns wrapped in kataifi pastry.',
                howMade: 'Fried kataifi-wrapped prawns with dip.',
                tasteProfile: 'Crispy and aromatic.',
                price: 320,
                image: 'img/Kataifi_Prawn.jpg'
            },
            {
                name: 'Paneer Burrito Bowl',
                description: 'Rice bowl with spiced paneer and veggies.',
                howMade: 'Paneer served over seasoned rice.',
                tasteProfile: 'Creamy and satisfying.',
                price: 280,
                image: 'img/Paneer_Burrito_Bowl.jpg'
            }
        ]
    },

    sandwich: {
        icon: '🥪',
        items: [
            {
                name: 'Chicken Club Sandwich',
                description: 'Triple-decker sandwich with chicken and bacon.',
                howMade: 'Grilled chicken stacked with fresh veggies.',
                tasteProfile: 'Savory and hearty.',
                price: 200,
                image: 'img/Chicken_Club_Sandwich.jpg'
            },
            {
                name: 'Veg Club Sandwich',
                description: 'Layered sandwich loaded with vegetables.',
                howMade: 'Fresh veggies layered with sauces.',
                tasteProfile: 'Crunchy and light.',
                price: 160,
                image: 'img/Veg_Club_Sandwich.jpg'
            },
            {
                name: 'Paneer Club Sandwich',
                description: 'Paneer sandwich with fries or mashed potato.',
                howMade: 'Grilled paneer with fresh greens.',
                tasteProfile: 'Creamy and spicy.',
                price: 180,
                image: 'img/Paneer_Club_Sandwich.jpg'
            },
            {
                name: 'Paneer Steak',
                description: 'Spiced paneer steak with sides.',
                howMade: 'Paneer seared with herbs and spices.',
                tasteProfile: 'Smoky and rich.',
                price: 280,
                image: 'img/Paneer_Steak.jpg'
            },
            {
                name: 'Nutella Sandwich',
                description: 'Sweet chocolate hazelnut sandwich.',
                howMade: 'Toasted bread filled with Nutella.',
                tasteProfile: 'Sweet and indulgent.',
                price: 80,
                image: 'img/Nutella_Sandwich.jpg'
            }
        ]
    },

    momos: {
        icon: '🥟',
        items: [
            {
                name: 'Veg Momos - stream/fried/saucy',
                description: 'Steamed, fried, or saucy vegetable momos.',
                howMade: 'Soft dumplings served with chutney.',
                tasteProfile: 'Tender and savory.',
                price: '120/140/160',
                image: 'img/Veg_Momos.jpg'
            },
            {
                name: 'Chicken Momos - stream/fried/saucy',
                description: 'Steamed, fried, or saucy chicken momos.',
                howMade: 'Juicy chicken-filled dumplings.',
                tasteProfile: 'Spicy and succulent.',
                price: '150/160/180',
                image: 'img/Chicken_Momos.jpg'
            },
            {
                name: 'Paneer Momos',
                description: 'Dumplings stuffed with paneer.',
                howMade: 'Soft dumplings with spiced paneer.',
                tasteProfile: 'Creamy and light.',
                price: 150,
                image: 'img/Paneer_Momos.jpg'
            }
        ]
    },

    ramen: {
        icon: '🍜',
        items: [
            {
                name: 'Veg Ramen',
                description: 'Noodle soup with vegetables.',
                howMade: 'Broth simmered with vegetables and spices.',
                tasteProfile: 'Comforting and umami.',
                price: 240,
                image: 'img/Veg_Ramen.jpg'
            },
            {
                name: 'Chicken Ramen',
                description: 'Noodle soup with chicken.',
                howMade: 'Hearty chicken broth with noodles.',
                tasteProfile: 'Rich and savory.',
                price: 280,
                image: 'img/Chicken_Ramen.jpg'
            },
            {
                name: 'Veg Stir Fried Ramen',
                description: 'Pan-fried noodles with veggies.',
                howMade: 'Stir-fried noodles tossed with vegetables.',
                tasteProfile: 'Wok-charred and aromatic.',
                price: 180,
                image: 'img/Veg_Stir_Fried_Ramen.jpg'
            },
            {
                name: 'Chicken Stir Fried Ramen',
                description: 'Stir-fried noodles with chicken.',
                howMade: 'Noodles seared with chicken and sauces.',
                tasteProfile: 'Savory and satisfying.',
                price: 220,
                image: 'img/Chicken_Stir_Fried_Ramen.jpg'
            },
            {
                name: 'Miso Chicken Ramen',
                description: 'Miso-flavored ramen with chicken.',
                howMade: 'Miso broth simmered with chicken.',
                tasteProfile: 'Umami-rich and comforting.',
                price: 280,
                image: 'img/Miso_Chicken_Ramen.jpg'
            },
            {
                name: 'Creamy Ramen',
                description: 'Creamy broth ramen with soft noodles.',
                howMade: 'Rich, creamy broth poured over noodles.',
                tasteProfile: 'Velvety and indulgent.',
                price: 290,
                image: 'img/Creamy_Ramen.jpg'
            },
            {
                name: 'Tantanmen Ramen',
                description: 'Spicy sesame ramen with minced meat.',
                howMade: 'Noodles served in spicy sesame broth.',
                tasteProfile: 'Spicy and nutty.',
                price: 280,
                image: 'img/Tantanmen_Ramen.jpg'
            }
        ]
    },

    pasta: {
        icon: '🍝',
        items: [
            {
                name: 'Alfredo Pasta',
                description: 'Creamy Alfredo with veg or chicken.',
                howMade: 'Pasta tossed in rich cream sauce.',
                tasteProfile: 'Creamy and cheesy.',
                price: '200/250',
                image: 'img/Alfredo_Pasta.jpg'
            },
            {
                name: 'Arrabiata Pasta',
                description: 'Spicy tomato pasta with veg or chicken.',
                howMade: 'Pasta served in fiery tomato sauce.',
                tasteProfile: 'Spicy and tangy.',
                price: '200/250',
                image: 'img/Arrabiata_Pasta.jpg'
            },
            {
                name: 'Pesto Pasta',
                description: 'Basil pesto pasta with veg or chicken.',
                howMade: 'Pasta tossed in fresh pesto sauce.',
                tasteProfile: 'Herbaceous and bright.',
                price: '200/250',
                image: 'img/Pesto_Pasta.jpg'
            },
            {
                name: 'Mac & Cheese',
                description: 'Classic macaroni and cheese with add-on.',
                howMade: 'Baked macaroni in creamy cheese sauce.',
                tasteProfile: 'Rich and comforting.',
                price: '220/250',
                image: 'img/Mac_&_Cheese.jpg'
            }
        ]
    },

    wraps: {
        icon: '🌯',
        items: [
            {
                name: 'Paneer Wrap',
                description: 'Grilled paneer wrapped with veggies.',
                howMade: 'Paneer rolled in warm flatbread.',
                tasteProfile: 'Spicy and fresh.',
                price: 160,
                image: 'img/Paneer_Wrap.jpg'
            },
            {
                name: 'Chicken Wrap',
                description: 'Seasoned chicken wrapped with salad.',
                howMade: 'Chicken and greens wrapped in tortilla.',
                tasteProfile: 'Juicy and zesty.',
                price: 180,
                image: 'img/Chicken_Wrap.jpg'
            }
        ]
    }
    ,
    pizza: {
        icon: '🍕',
        items: [
            { name: 'Fried Chicken Pizza', price: 230, description: 'Crispy fried chicken pieces, mozzarella and tangy sauce on a golden crust.', howMade: 'Hand-stretched dough topped with tomato sauce, mozzarella and crispy fried chicken, baked until golden.', image: 'img/Fried_Chicken_Pizza.jpg' },
            { name: 'Chicken Tikka Pizza', price: 200, description: 'Marinated chicken tikka with spices, onions and cheese.', howMade: 'Tikka-spiced chicken pieces layered over tomato base and cheese, then oven-baked to meld flavors.', image: 'img/Chicken_Tikka_Pizza.jpg' },
            { name: 'Paneer Pizza', price: 180, description: 'Grilled paneer cubes with peppers and rich cheese.', howMade: 'Fresh paneer marinated and seared, added on a cheese-topped base and baked until bubbly.', image: 'img/Paneer_Pizza.jpg' },
            { name: 'Margarita Pizza', price: 160, description: 'Classic Margherita with fresh tomato, basil and mozzarella.', howMade: 'Simple tomato sauce, slices of fresh tomato and mozzarella baked on a thin crust and finished with basil.', image: 'img/Margarita_Pizza.jpg' },
            { name: 'Pepperoni Pizza', price: 230, description: 'Classic pepperoni with melted cheese and savory tomato sauce.', howMade: 'Tomato base layered with mozzarella and pepperoni slices, baked until the edges crisp.', image: 'img/Pepperoni_Pizza.jpg' },
            { name: "Meat Lover's Pizza", price: 250, description: 'Loaded with assorted meats, cheese and a hearty sauce.', howMade: 'A mix of sausage, ham, pepperoni and chicken layered over sauce and cheese, baked until deeply browned.', image: 'img/Meat_Lovers_Pizza.jpg' },
            { name: 'BBQ Chicken Pizza', price: 200, description: 'Smoky BBQ chicken with onions and sweet barbecue glaze.', howMade: 'Grilled chicken tossed in BBQ sauce layered on cheese and baked, finished with a drizzle of extra BBQ.', image: 'img/BBQ_Chicken_Pizza.jpg' },
            { name: 'Buffalo Chicken Pizza', price: 230, description: 'Spicy buffalo-style chicken with cooling ranch or blue cheese.', howMade: 'Shredded chicken tossed in buffalo sauce, baked on a cheesy base and served with a cool dip.', image: 'img/Buffalo_Chicken_Pizza.jpg' },
            { name: 'Pesto Chicken Pizza', price: 200, description: 'Aromatic basil pesto, chicken and melted cheese.', howMade: 'Pesto spread replaces tomato base, topped with chicken and cheese, then baked until fragrant.', image: 'img/Pesto_Chicken_Pizza.jpg' }
        ]
    },
    thick_shakes: {
        icon: '🥤',
        items: [
            { name: 'Cold Chocolate', price: 140, description: 'Rich chocolate milkshake topped with cream and chocolate shavings.', howMade: 'Blended cold milk, ice cream and chocolate syrup until smooth and creamy.', image: 'img/Cold_Chocolate.jpg' },
            { name: 'Belgium Chocolate', price: 160, description: 'Luxurious Belgian chocolate shake with deep cocoa flavor.', howMade: 'High-quality Belgian chocolate melted into milk and ice cream, then blended until silky.', image: 'img/Belgium_Chocolate.jpg' },
            { name: 'Oreo', price: 140, description: 'Creamy Oreo shake with crunchy cookie bits.', howMade: 'Vanilla ice cream, milk and crushed Oreo cookies blended to a smooth, textured shake.', image: 'img/Oreo.jpg' },
            { name: 'Nutella', price: 140, description: 'Chocolate-hazelnut Nutella shake, sweet and indulgent.', howMade: 'Nutella, ice cream and milk blended until smooth and topped with a Nutella drizzle.', image: 'img/Nutella.jpg' },
            { name: 'Black Currant', price: 140, description: 'Fruity black currant shake with tangy-sweet notes.', howMade: 'Black currant syrup or puree blended with ice cream and milk for a refreshing shake.', image: 'img/Black_Currant.jpg' },
            { name: 'Cold Boost', price: 140, description: 'Energy-boosting cold shake with chocolate and malted flavors.', howMade: 'Blend of milk, chocolate, malt powder and ice cream for a revitalizing treat.', image: 'img/Cold_Boost.jpg' },
            { name: 'Cold Coffee', price: 140, description: 'Chilled coffee shake with a creamy finish.', howMade: 'Cold brewed or chilled coffee blended with ice cream and milk, served cold.', image: 'img/Cold_Coffee.jpg' },
            { name: 'Cold Horlicks', price: 140, description: 'Malted Horlicks shake, warm-tasting chilled treat.', howMade: 'Horlicks malt powder combined with milk and ice cream, blended until smooth.', image: 'img/Cold_Horlicks.jpg' }
        ]
    },
    fresh_drinks: {
        icon: '🥤',
        items: [
            { name: 'Watermelon', price: 100, description: 'Refreshing chilled watermelon juice.', howMade: 'Fresh watermelon blended and strained over ice for a hydrating drink.', image: 'img/Watermelon.jpg' },
            { name: 'Pineapple', price: 100, description: 'Sweet and tangy pineapple juice.', howMade: 'Fresh pineapple pulped and strained, served chilled with a touch of lime.', image: 'img/Pineapple.jpg' },
            { name: 'Orange', price: 120, description: 'Freshly squeezed orange juice, bright and zesty.', howMade: 'Ripe oranges juiced and served immediately over ice.', image: 'img/Orange.jpg' },
            { name: 'Lemon Mint', price: 80, description: 'Citrusy lemonade with cooling mint.', howMade: 'Fresh lemon juice mixed with simple syrup, muddled mint and chilled water.', image: 'img/Lemon_Mint.jpg' },
            { name: 'Lemon Soda', price: 100, description: 'Fizzy lemon soda with a sharp citrus kick.', howMade: 'Fresh lemon juice combined with soda water and sugar, served with ice.', image: 'img/Lemon_Soda.jpg' },
            { name: 'Lemon Juice', price: 80, description: 'Classic lemon juice, tangy and refreshing.', howMade: 'Squeezed lemon mixed with water and sweetener to taste, served chilled.', image: 'img/Lemon_Juice.jpg' }
        ]
    },
    desserts: {
        icon: '🍰',
        items: [
            { name: 'Brownie', price: 150, description: 'Warm, fudgy chocolate brownie served with optional ice cream.', howMade: 'Baked rich chocolate batter into a dense brownie, served warm with a scoop of ice cream if desired.', image: 'img/Brownie.jpg' },
            { name: 'Nutella Waffle', price: 170, description: 'Crispy waffle topped with warm Nutella and fresh fruit.', howMade: 'Belgian-style waffle toasted and generously spread with Nutella, garnished with berries.', image: 'img/Nutella_Waffle.jpg' },
            { name: 'Fried Ice Cream', price: 130, description: 'Crunchy-coated, quick-fried ice cream with a cold center.', howMade: 'Scoops of ice cream coated in crumbs, flash-fried briefly and served immediately.', image: 'img/Fried_Ice_Cream.jpg' }
        ]
    },
    refreshers: {
        icon: '☕',
        items: [
            { name: 'Coffee', price: 40, description: 'Freshly brewed coffee — simple and energizing.', howMade: 'Fresh ground coffee brewed and served hot or black as requested.', image: 'img/Coffee.jpg' },
            { name: 'Ice Tea', price: 80, description: 'Chilled iced tea, lightly sweetened and refreshing.', howMade: 'Black tea brewed, chilled and served over ice with lemon.', image: 'img/Ice_Tea.jpg' },
            { name: 'Lemon Tea', price: 60, description: 'Warm lemon-infused tea, soothing and bright.', howMade: 'Black tea brewed with fresh lemon juice and sweetener to taste.', image: 'img/Lemon_Tea.jpg' },
            { name: 'Strawberry Mojito', price: 150, description: 'Fruity mojito with fresh strawberries and mint.', howMade: 'Muddled strawberries and mint with lime and soda, lightly sweetened and served over ice.', image: 'img/Strawberry_Mojito.jpg' },
            { name: 'Blueberry Mojito', price: 150, description: 'Blueberry twist on a classic mojito with fresh mint.', howMade: 'Muddled blueberries and mint with lime, simple syrup and soda water.', image: 'img/Blueberry_Mojito.jpg' },
            { name: 'Blue Curacao', price: 150, description: 'Vibrant, sweet blue citrus refresher.', howMade: 'A mix of blue curaçao syrup, citrus juices and soda for a bright, tropical drink.', image: 'img/Blue_Curacao.jpg' },
            { name: 'Hot Chocolate', price: 180, description: 'Rich hot chocolate topped with cream and cocoa.', howMade: 'Creamy milk heated with high-quality cocoa and sugar, whisked until smooth.', image: 'img/Hot_Chocolate.jpg' }
        ]
    }
};

const categoryOrder = [
    'all',
    'starters',
    'mexican',
    'bowls',
    'sandwich',
    'momos',
    'ramen',
    'pasta',
    'wraps'
    , 'pizza', 'thick_shakes', 'fresh_drinks', 'desserts', 'refreshers'
];

const categoryLabels = {
    all: 'All',
    starters: 'Starters',
    mexican: 'Mexican',
    bowls: 'Burrito Bowls',
    sandwich: 'Sandwiches',
    momos: 'Momos',
    ramen: 'Ramen',
    pasta: 'Pasta',
    wraps: 'Wraps'
    , pizza: 'Pizza', thick_shakes: 'Thick Shakes', fresh_drinks: 'Fresh Drinks', desserts: 'Desserts', refreshers: 'Refreshers'
};

const categoryIcons = {
    all: '🍽️',
    starters: '🥗',
    mexican: '🌮',
    bowls: '🥣',
    sandwich: '🥪',
    momos: '🥟',
    ramen: '🍜',
    pasta: '🍝',
    wraps: '🌯'
    , pizza: '🍕', thick_shakes: '🥤', fresh_drinks: '🧃', desserts: '🍰', refreshers: '☕'
};

let currentCategory = 'all';

const backgroundMusic = document.getElementById('backgroundMusic');

const playlist = [
    'kuruvi.mp3',
    'ghilli.mp3'
];

let currentSongIndex = 0;

document.addEventListener('DOMContentLoaded', () => {

    initializeMenu();
    setupModal();
    setupSearch();
    setupFullMenuButton();

    // START MUSIC IMMEDIATELY
    backgroundMusic.src = playlist[0];
    backgroundMusic.volume = 0.25;

    // Browser allows ONLY muted autoplay
    backgroundMusic.muted = true;

    backgroundMusic.play().then(() => {
        console.log("Autoplay started");
    }).catch(err => {
        console.log("Autoplay blocked", err);
    });

    // First touch/click -> unmute automatically
    const enableSound = () => {
        backgroundMusic.muted = false;

        backgroundMusic.play();

        document.removeEventListener('click', enableSound);
        document.removeEventListener('touchstart', enableSound);
    };

    document.addEventListener('click', enableSound);
    document.addEventListener('touchstart', enableSound);

    setupAudio();
});
function initializeMenu() {
    const categoriesContainer = document.getElementById('menuCategories');

    categoryOrder.forEach((category, index) => {
        const card = document.createElement('button');
        card.className = 'category-card' + (index === 0 ? ' active' : '');

        card.innerHTML = `
            <div class="category-icon">${categoryIcons[category]}</div>
            <span>${categoryLabels[category]}</span>
        `;

        card.addEventListener('click', () => selectCategory(category, card));
        categoriesContainer.appendChild(card);
    });

    renderMenuItems();
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.classList.add('search-input');

    searchInput.addEventListener('input', () => {
        renderMenuItems();
    });
}

function getSearchQuery() {
    return document.getElementById('searchInput').value.trim().toLowerCase();
}

function getFilteredItems() {
    const query = getSearchQuery();

    const allItems = categoryOrder
        .filter(category => category !== 'all')
        .flatMap(category => menuData[category].items);

    const items = currentCategory === 'all'
        ? allItems
        : menuData[currentCategory].items;

    if (!query) {
        return items;
    }

    return items.filter(item => {
        const searchable = `${item.name} ${item.description} ${item.howMade} ${item.tasteProfile}`.toLowerCase();
        return searchable.includes(query);
    });
}

function renderMenuItems() {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => {
        card.classList.toggle('active', card.textContent.trim() === categoryLabels[currentCategory]);
    });

    const container = document.getElementById('menuItemsContainer');
    container.innerHTML = '';

    const filteredItems = getFilteredItems();

    if (filteredItems.length === 0) {
        container.innerHTML = '<p class="no-results">No dishes match your search. Try another keyword.</p>';
        return;
    }

    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-item-card';

        const imageMarkup = item.image
            ? `<img src="${item.image}" alt="${item.name}" />`
            : `<span>${item.emoji}</span>`;

        card.innerHTML = `
            <div class="menu-item-image">${imageMarkup}</div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                  <h3>${item.name}</h3>
                  ${item.price ? `<div class="menu-item-price">₹${item.price}</div>` : ''}
                </div>
                <p>${item.description}</p>
                <button class="view-btn">View Details</button>
            </div>
        `;

        card.querySelector('.view-btn').addEventListener('click', () => showDetails(item));
        container.appendChild(card);
    });
}

function selectCategory(category, cardElement) {
    currentCategory = category;
    renderMenuItems();
}

function showDetails(item) {
    document.getElementById('modalTitle').textContent = item.name;
    const modalPriceEl = document.getElementById('modalPrice');
    if (modalPriceEl) modalPriceEl.textContent = item.price ? `₹${item.price}` : '';
    document.getElementById('modalHowMade').textContent = item.howMade;
    document.getElementById('modalTasteProfile').textContent = item.tasteProfile;

    const modalImage = document.getElementById('modalImage');
    modalImage.innerHTML = item.image
        ? `<img src="${item.image}" alt="${item.name}" />`
        : `<span>${item.emoji}</span>`;

    document.getElementById('detailModal').classList.add('show');
    // mark body so headers can be hidden while modal is open
    document.body.classList.add('modal-open');
}

function setupModal() {
    const modal = document.getElementById('detailModal');

    document.getElementById('modalClose').addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
        }
    });

    // close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
        }
    });
}

function setupAudio() {
    const toggle = document.getElementById('audioToggle');

    backgroundMusic.volume = 0.25;
    backgroundMusic.autoplay = true;
    backgroundMusic.loop = true;
    backgroundMusic.playsInline = true;

    // Load first song
    backgroundMusic.src = playlist[0];

    // Try autoplay immediately
    const playPromise = backgroundMusic.play();

    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                // Autoplay worked
                backgroundMusic.muted = false;
                toggle.textContent = 'Pause Background Music';
            })
            .catch(() => {
                // Browser blocked autoplay
                backgroundMusic.muted = true;

                // Start automatically after first interaction
                const startAudio = () => {
                    backgroundMusic.muted = false;
                    backgroundMusic.play();

                    toggle.textContent = 'Pause Background Music';

                    document.removeEventListener('click', startAudio);
                    document.removeEventListener('touchstart', startAudio);
                };

                document.addEventListener('click', startAudio);
                document.addEventListener('touchstart', startAudio);
            });
    }

    toggle.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            toggle.textContent = 'Pause Background Music';
        } else {
            backgroundMusic.pause();
            toggle.textContent = 'Play Background Music';
        }
    });

    backgroundMusic.addEventListener('ended', () => {
        playNextSong();
    });
}

function loadAndPlaySong(index) {
    backgroundMusic.src = playlist[index];
    backgroundMusic.load();
    backgroundMusic.play().catch(() => {
        // Autoplay may be blocked by browser policy; user click will resume playback.
    });
    currentSongIndex = index;
}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadAndPlaySong(currentSongIndex);
}

function setupFullMenuButton() {
    const btn = document.getElementById('viewFullMenuBtn');
    if (!btn) return;

    btn.addEventListener('click', () => {
        openFullMenu('img/full_menu.jpg');
    });
}

function openFullMenu(imagePath) {
    const modal = document.getElementById('detailModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalInfo = document.querySelector('.modal-info');

    if (!modal || !modalImage || !modalTitle) return;

    modalImage.innerHTML = '';
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = 'Full Menu';
    modalImage.appendChild(img);

    modalTitle.innerText = 'Full Menu';

    if (modalInfo) modalInfo.style.display = 'none';

    modal.classList.add('show');
    document.body.classList.add('modal-open');

    // when modal closes, restore modal info display
    const restore = () => {
        if (modalInfo) modalInfo.style.display = '';
        modal.classList.remove('show');
        document.body.classList.remove('modal-open');
        document.removeEventListener('keydown', onEsc);
    };

    const onEsc = (e) => {
        if (e.key === 'Escape') restore();
    };

    document.addEventListener('keydown', onEsc);

    // also ensure clicking the close button restores
    const closeBtn = document.getElementById('modalClose');
    if (closeBtn) {
        const onClick = () => {
            restore();
            closeBtn.removeEventListener('click', onClick);
        };
        closeBtn.addEventListener('click', onClick);
    }
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
