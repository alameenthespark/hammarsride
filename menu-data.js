const HAMARS_RESTAURANT_DATABASE = {
    "chicken-republic": {
        name: "Chicken Republic (Offa)",
        categories: {
            "Mouth Watering Combos": [
                { id: "cr-refuel", name: "Refuel Meal", basePrice: 1800, desc: "1 piece of soulfully spiced chicken with a side and packaging", options: { side: ["Jollof Rice", "Fried Rice", "Spaghetti", "White Rice with Sauce", "Rice & Beans (+₦300)"], packaging: ["Take away pack (1000ml with lid) (+₦300)"] } },
                { id: "cr-refuel-max", name: "Refuel Max Meal", basePrice: 3500, desc: "1 piece of soulfully spiced chicken, a side meal, a side item, a PET drink, and packaging", options: { meal: ["Jollof Rice", "Fried Rice"], side: ["Coleslaw", "Moin moin", "Plantain"], drink: ["Coca Cola (35cl)", "Fanta (35cl)", "Sprite (35cl)"], packaging: ["Take away pack (1000ml with lid) (+₦300)"] } },
                { id: "cr-citizens", name: "Citizens Meal", basePrice: 5500, desc: "2 pieces of soulfully spiced chicken with a side meal, a PET drink, and packaging", options: { side: ["Jollof Rice", "Fried Rice", "Spaghetti", "White Rice with Sauce", "Rice & Beans (+₦300)"], drink: ["Coca Cola (50cl)", "Fanta (50cl)", "Sprite (50cl)"], packaging: ["Take away pack (1000ml with lid) (+₦300)"] } }
            ],
            "Burgers, Shawarma & Breakfast": [
                { id: "cr-pastry-bkfast", name: "Pastry Breakfast Combo", basePrice: 1800, desc: "Pastry + coffee/tea (Nescafé)", options: { pie: ["Meat pie", "Chicken pie"] } },
                { id: "cr-single-whizz", name: "Single Chickwhizz Sandwich", basePrice: 3000, desc: "Original ChickWhizz sandwich filled with spiced chicken, lettuce, and secret mayo" },
                { id: "cr-double-whizz", name: "Double Chickwhizz Sandwich", basePrice: 3500, desc: "Double layered signature chicken sandwich stack" },
                { id: "cr-double-whizz-meal", name: "Double Chickwhizz Meal", basePrice: 6000, desc: "Double Chickwhizz served with premium sides and refreshing beverage options" },
                { id: "cr-double-whizz-bkfast", name: "Double Chickwhizz Breakfast", basePrice: 4000, desc: "Morning variant setup optimized for prompt daily delivery splits" },
                { id: "cr-big-whizz-meal", name: "Big Whizz Meal", basePrice: 7500, desc: "Chickwhizz with 1 piece of fried chicken, a side option, and a beverage selection", options: { side: ["Regular Naija Jollof", "Regular Fried Rice"], size: ["Single ChickWhizz", "Double ChickWhizz (+₦500)"], drink: ["Coca Cola (35cl)", "Fanta Orange (35cl)", "Sprite (35cl)"] } },
                { id: "cr-chief-burger", name: "Chief Burger", basePrice: 5000, desc: "Spiced fried chicken, lettuce, cheese, and secret sauce on a fresh bun", options: { size: ["Chief Burger", "Double Chief Burger (+₦2,400)"] } },
                { id: "cr-chief-burger-meal", name: "Chief Burger Meal", basePrice: 7000, desc: "Chief Burger layout served with side assets and dynamic choices", options: { size: ["Chief Burger", "Double Chief Burger (+₦2,400)"] } },
                { id: "cr-big-boyz-combo", name: "Big Boyz Combo", basePrice: 8000, desc: "Chief Burger, 1 piece of chicken, a side, secondary assignment, a Monster energy drink, and packaging", options: { side1: ["Naija Jollof (Regular)", "Fried Rice (Regular)", "Spaghetti (Regular)", "Rice & Beans (Regular) (+₦400)"], side2: ["Chief Burger"], drink: ["Monster Energy - Regular", "Monster Energy - Fury", "Monster Energy - Ultra"], packaging: ["Take-away pack (1000ml with lid) (+₦400)"] } },
                { id: "cr-wrap-shawarma", name: "Chicken Wrap (Shawarma)", basePrice: 4000, desc: "Spiced fried chicken with lettuce and sauce wrapped in a tortilla" },
                { id: "cr-wrap-meal", name: "Chicken Wrap Meal", basePrice: 6600, desc: "Chicken wrap served with chips and a refreshing PET drink option", options: { chips: ["Chips (Regular)", "Chips (Large) (+₦1,200)", "Chips (Jumbo) (+₦2,200)"], drink: ["Coca Cola (35cl)", "Fanta Orange (35cl)", "Sprite (35cl)", "Mineral Water (75cl)"] } },
                { id: "cr-express-combo", name: "Express Combo (Chicken & Chips)", basePrice: 5000, desc: "1 piece of fried chicken with chips plus a refreshing PET drink", options: { chips: ["Chips (Regular)", "Chips (Large) (+₦1,200)", "Chips (Jumbo) (+₦2,200)"], drink: ["Coca Cola (35cl)", "Fanta Orange (35cl)", "Mineral Water (75cl)"] } }
            ],
            "Pot Meals (For Lovers)": [
                { id: "cr-maxi-pot", name: "Maxi Pot Lovers Meal", basePrice: 26800, desc: "8 pieces of chicken, 4 side portions, 2 side options, 4 packaging boxes, and 4 PET drinks", options: { side1: ["Naija Jollof (4x)", "Fried Rice (4x)", "Spaghetti (4x)", "Rice & Beans (+₦400)", "Chips (+₦800)"], side2: ["Coleslaw (2x)", "Dodo Cubes (2x)"], drinks: ["Coca Cola (4x)", "Fanta (4x)", "Sprite (4x)", "Water (4x)"], packaging: ["Take-away pack (4,000ml cumulative) (+₦400)"] } },
                { id: "cr-mini-pot", name: "Mini Pot Lovers Meal", basePrice: 13500, desc: "4 pieces of soulfully spiced fried chicken with your choices customized" },
                { id: "cr-mega-pot", name: "Mega Pot Lovers Meal", basePrice: 36050, desc: "10 pieces of chicken, 6 side portions, 4 secondary options, 6 pack systems, and 6 PET drinks", options: { side1: ["Naija Jollof (6x)", "Fried Rice (6x)", "Spaghetti (6x)", "Rice & Beans (+₦400)", "Chips (+₦800)"], side2: ["Coleslaw (4x)", "Dodo Cubes (4x)"], drinks: ["Coca Cola (6x)", "Fanta (6x)", "Sprite (6x)", "Water (6x)"], packaging: ["Take-away pack (6,000ml cumulative) (+₦400)"] } }
            ],
            "Tasty Sides": [
                { id: "cr-side-chicken", name: "Soulfully Spiced Fried Chicken (1pc)", basePrice: 2500, desc: "Available variant parameters: spicy fried or crunchy crisp" },
                { id: "cr-side-chips", name: "Golden Fried Chips (Portion)", basePrice: 2000, desc: "Freshly cut crisp potatoes prepared to operational standards" },
                { id: "cr-side-loaf", name: "Republic Loaf", basePrice: 1900, desc: "Hot, fresh, and exceptionally tasty distinctive signature bread loaf" },
                { id: "cr-side-coleslaw", name: "Coleslaw Portion", basePrice: 900 },
                { id: "cr-side-spag", name: "Spaghetti Portion", basePrice: 1800 },
                { id: "cr-side-jollof", name: "Naija Jollof Portion", basePrice: 1500 },
                { id: "cr-side-friedrice", name: "Fried Rice Portion", basePrice: 1600 },
                { id: "cr-side-dodo", name: "Dodo Cubes Portion", basePrice: 900 },
                { id: "cr-side-pastasalad", name: "Pasta Salad Portion", basePrice: 900 },
                { id: "cr-side-chickensalad", name: "Chicken Salad", basePrice: 2800 },
                { id: "cr-side-meatpie", name: "Gourmet Meatpie", basePrice: 1200 },
                { id: "cr-side-chickenpie", name: "Gourmet Chicken Pie", basePrice: 1200 },
                { id: "cr-side-moin", name: "Moin Moin Cup", basePrice: 1400 },
                { id: "cr-rotisserie-qtr", name: "Quarter Rotisserie Chicken", basePrice: 5000 },
                { id: "cr-rotisserie-half", name: "Half Rotisserie Chicken", basePrice: 9800 },
                { id: "cr-rotisserie-full", name: "Full Rotisserie Chicken", basePrice: 18500 }
            ]
        }
    },
    "item-7": {
        name: "Item 7 (Offa)",
        categories: {
            "Rice Plates": [
                { id: "it7-chicken", name: "A Plate of Rice & Chicken", basePrice: 3500, options: { rice: ["Jollof Rice", "Fried Rice", "Mixed Rice Combo"] } },
                { id: "it7-beef", name: "A Plate of Rice & Beef", basePrice: 2300, options: { rice: ["Jollof Rice", "Fried Rice", "Mixed Rice Combo"] } },
                { id: "it7-fish", name: "A Plate of Rice & Standard Fish", basePrice: 3200, options: { rice: ["Jollof Rice", "Fried Rice", "Mixed Rice Combo"] } },
                { id: "it7-croaker", name: "A Plate of Rice & Croaker Fish", basePrice: 4000, options: { rice: ["Jollof Rice", "Fried Rice", "Mixed Rice Combo"] } }
            ],
            "Extras & Sides": [
                { id: "it7-ex-beef", name: "Extra Beef Piece", basePrice: 300 },
                { id: "it7-ex-chicken", name: "Extra Chicken Piece", basePrice: 1800 },
                { id: "it7-ex-rice", name: "Extra Rice Scoop", basePrice: 800 },
                { id: "it7-ex-plantain", name: "Extra Plantain Portion", basePrice: 500 },
                { id: "it7-ex-fish", name: "Extra Standard Fish", basePrice: 1200 },
                { id: "it7-ex-croaker", name: "Extra Croaker Fish Piece", basePrice: 2000 }
            ],
            "Desserts & Rolled Wraps": [
                { id: "it7-beef-shw", name: "Item 7 Beef Shawarma", basePrice: 3200 },
                { id: "it7-chicken-shw", name: "Item 7 Chicken Shawarma", basePrice: 3500 }
            ]
        }
    },
    "williams-grill": {
        name: "Williams Grill Place",
        categories: {
            "Gourmet Shawarma Wrap Engine": [
                { id: "wg-chick-shw", name: "Chicken Shawarma Wrap", basePrice: 3500, options: { structure: ["Single Sausage Stack", "Double Sausage Stack (+₦500)"] } },
                { id: "wg-beef-shw", name: "Beef Shawarma Wrap", basePrice: 3500, options: { structure: ["Single Sausage Stack", "Double Sausage Stack (+₦500)"] } },
                { id: "wg-asun-shw", name: "Asun Spicy Shawarma Wrap", basePrice: 3500, options: { structure: ["Single Sausage Stack", "Double Sausage Stack (+₦500)"] } },
                { id: "wg-mixed-shw", name: "Mixed Protein Shawarma Wrap", basePrice: 4600, options: { structure: ["Single Sausage Stack", "Double Sausage Stack (+₦600)"] } }
            ],
            "Oven Baked Pizza Matrix": [
                { id: "wg-margherita", name: "Margherita Cheese Pizza", basePrice: 8000, options: { size: ["Medium Sized (10 inch)", "Large Sized (12 inch) (+₦2,000)"] } },
                { id: "wg-chick-suya", name: "Chicken Suya Infused Pizza", basePrice: 7000, options: { size: ["Small Sized (8 inch)", "Medium Sized (10 inch) (+₦2,000)", "Large Sized (12 inch) (+₦4,000)", "Xtra Large Sized (14 inch) (+₦6,500)"] } },
                { id: "wg-beef-suya", name: "Beef Suya Infused Pizza", basePrice: 9000, options: { size: ["Medium Sized (10 inch)", "Large Sized (12 inch) (+₦2,000)"] } },
                { id: "wg-asun-pizza", name: "Spicy Asun Shredded Pizza", basePrice: 8500, options: { size: ["Medium Sized (10 inch)", "Large Sized (12 inch) (+₦2,000)"] } },
                { id: "wg-shw-pizza", name: "Shawarma Style Drizzled Pizza", basePrice: 9000, options: { size: ["Medium Sized (10 inch)", "Large Sized (12 inch) (+₦2,000)"] } }
            ],
            "Barbecue pit & Charcoal Grill": [
                { id: "wg-bbq-catfish", name: "BBQ Smoked Catfish", basePrice: 6000, options: { size: ["Small Size Platter", "Big Size Platter (+₦3,000)"] } },
                { id: "wg-bbq-croaker", name: "BBQ Smoked Croaker Fish", basePrice: 10800, options: { size: ["Small Size Platter", "Big Size Platter (+₦7,200)"] } },
                { id: "wg-asun-plate", name: "Spicy Peppered Asun Meat", basePrice: 3500, options: { size: ["Small Plate Concept", "Medium Plate Concept (+₦1,000)", "Large Plate Concept (+₦4,500)"] } }
            ],
            "Database Add-Ons": [
                { id: "wg-ex-cheese", name: "Extra Mozzarella Cheese Layer", basePrice: 1000 },
                { id: "wg-ex-chicken", name: "Extra Shredded Chicken", basePrice: 500 },
                { id: "wg-ex-beef", name: "Extra Shredded Beef", basePrice: 500 },
                { id: "wg-ex-sausage", name: "Extra Grilled Sausage Link", basePrice: 500 },
                { id: "wg-ex-cream", name: "Extra Secret Dressing Cream", basePrice: 500 }
            ]
        }
    },
    "delight-restaurant": {
        name: "Delight Restaurant",
        categories: {
            "Staples & Bases": [
                { id: "dl-jollof", name: "Classic Jollof Rice Portion", basePrice: 600 },
                { id: "dl-fried", name: "Classic Fried Rice Portion", basePrice: 600 },
                { id: "dl-white", name: "Classic White Rice Portion", basePrice: 600 },
                { id: "dl-asunrice", name: "Spicy Peppered Asun Rice Mix", basePrice: 2000 },
                { id: "dl-jambalaya", name: "Loaded Jambalaya Rice Mix", basePrice: 1500 },
                { id: "dl-ofada", name: "Gourmet Ofada Rice Portion", basePrice: 3000 },
                { id: "dl-native", name: "Village / Native Palm-Oil Rice", basePrice: 1200 },
                { id: "dl-brown", name: "Dietary Brown Rice Base", basePrice: 1500 },
                { id: "dl-coconut", name: "Rich Shredded Coconut Rice", basePrice: 1500 },
                { id: "dl-wanche", name: "Traditional Waakye Base Mix", basePrice: 700 },
                { id: "dl-delightful", name: "Delightful Chef House Rice", basePrice: 1500 },
                { id: "dl-porridge", name: "Yam Porridge Pottage Block", basePrice: 600 },
                { id: "dl-yamarita", name: "Egg-Battered Fried Yamarita Plugs", basePrice: 800 },
                { id: "dl-beans", name: "Honey Beans Stewed Soft", basePrice: 550 },
                { id: "dl-ewa", name: "Ewa Agoyin Beans Core", basePrice: 700 },
                { id: "dl-spag", name: "Stir-Fried Spaghetti Noodles", basePrice: 800 },
                { id: "dl-moin", name: "Delight Steamed Moin Moin", basePrice: 1500 },
                { id: "dl-plantain", name: "Fried Dodo Plantain Slices", basePrice: 800 },
                { id: "dl-crumbs", name: "Crispy Breaded Fish Crumbs Blend", basePrice: 1500 },
                { id: "dl-coleslaw", name: "Creamy Coleslaw Cup", basePrice: 1000 }
            ],
            "Proteins Portfolio": [
                { id: "dl-beef", name: "Gourmet Fried Beef Chunk", basePrice: 1200 },
                { id: "dl-chicken", name: "Fried / Grilled Chicken Quarter", basePrice: 3500 },
                { id: "dl-turkey", name: "Jumbo Turkey Wing Part", basePrice: 7000, desc: "Pricing shifts from ₦6,000–₦8,000 scaling on dynamic size inventory metrics." },
                { id: "dl-titus", name: "Fried Titus Fish Steak", basePrice: 2800 },
                { id: "dl-croaker", name: "Fried Croaker Fish Body", basePrice: 3800 },
                { id: "dl-egg", name: "Boiled / Fried Hen Egg", basePrice: 550 },
                { id: "dl-assorted", name: "Peppered Assorted Mixed Meat", basePrice: 2200 },
                { id: "dl-bokoto", name: "Rich Cow Leg (Bokoto) Jelly", basePrice: 2500 },
                { id: "dl-hake", name: "Fried Pan-Seared Hake Fish", basePrice: 2800 },
                { id: "dl-gizzard", name: "Single Skewered Peppered Gizzard", basePrice: 500 },
                { id: "dl-buffalo", name: "Glazed Buffalo Chicken Wings (Pack)", basePrice: 1500 },
                { id: "dl-honey", name: "Sweet Honey Glazed Wings (Pack)", basePrice: 1400 },
                { id: "dl-ponmo", name: "Spicy Soft Peppered Ponmo Stripe", basePrice: 600 },
                { id: "dl-steak", name: "Seasoned Sliced Beef Steak Strip", basePrice: 1200 }
            ],
            "Soups & Swallows Local Hub": [
                { id: "dl-pounded", name: "Real Pounded Yam Swivel", basePrice: 1200 },
                { id: "dl-eba", name: "Fresh White Garri Eba Mound", basePrice: 400 },
                { id: "dl-amala", name: "Dark Yam Flour Amala Spheroid", basePrice: 400 },
                { id: "dl-semo", name: "Fine Semovita Swallow Portion", basePrice: 500 },
                { id: "dl-egusi", name: "Rich Melon Seed Egusi Soup Block", basePrice: 800 },
                { id: "dl-eforiro", name: "Vegetable Efo Riro Stew Pod", basePrice: 800 },
                { id: "dl-ila", name: "Plain Okra Soup (Ila Portion)", basePrice: 700 },
                { id: "dl-ewedu", name: "Traditional Ewedu Leaf Draw Pot", basePrice: 200 },
                { id: "dl-gbegiri", name: "Creamy Bean Gbegiri Broth Soup", basePrice: 0, desc: "Served completely free with complement protocols." },
                { id: "dl-edikankong", name: "Calabar Edikang Ikong Elite Soup", basePrice: 1800 },
                { id: "dl-ogbono", name: "Rich Draw Seed Ogbono Extract", basePrice: 800 },
                { id: "dl-ofadasauce", name: "Spicy Bleached-Oil Ofada Sauce Pot", basePrice: 1500 }
            ]
        }
    }
};