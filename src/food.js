
const calorieData = {
    protein: {   "Chicken Breast (Cooked, Skinless) ": 165 ,  "Chicken Thigh (Cooked, Skinless)": 209 , "Chicken Wing (Cooked, Skinless)": 203 
        ," Chicken Liver (Cooked)": 165 
        ,  "Turkey Breast": 120 ," Eggs": 155  , "Egg whites" : 52 , "Beef (Ground, Cooked)": 250   ,"Shrimp (Cooked)": 99 ,"Salmon (Cooked)": 206 , "Tuna (Cooked)": 132 , "Mackerel (Cooked)": 305 , "Sardines (Cooked)": 208 , "Tilapia (Cooked)": 96 , "Crab (Cooked)": 87 ,
         "Beef liver (cooked)": 175 ,"Cottage cheese": 98 ," Rabbit meat (cooked)" : 173},
    Legumes: {
        "Lentils (Cooked)": 116, "Chickpeas (Cooked)": 164 , "Kidney Beans (Cooked)": 127 , "Lima beans (cooked)" : 113   , "Soybeans (Cooked)": 173 , "Peas (Cooked)": 81,"brown beans" : 127,
        "Lupine beans": 120 , 
    },     
    carbohydrates: { "Oats (Cooked)": 71, "White Rice (Cooked)": 130 ,  "Pasta (Cooked)": 124 ," Quinoa (Cooked)": 120 ,"Sweet Potatoes (Cooked)": 90 ," Potatoes (Boiled)": 87 ,  "popcorn" :387 , "Corn flakes":357 , 
        "Taro (cooked)":142 ,"Grilled corn ":150 ,"Brown taost": 282 , "white taost": 263 , "Tortilla Bread": 345 , "Baladi Bread": 282 , "Shami Bread":266},
    fats: { butter: 717," olive Oil": 884 ,Avocado: 160 , Almonds: 579 , Hazelnuts: 628 , Cashews: 553, Pistachios: 562 , Peanuts : 588,"Chia Seeds": 486  , "Peanut Butter": 588 , "Almond Butter": 614  , Pecans: 691, },
    vegetables: { carrot: 41, "Broccoli (Raw)": 34 , "Spinach (Raw)": 23 , "Bell Peppers (Raw)": 31 , "Tomatoes (Raw)": 18 , "Cucumbers (Raw)": 16 ,"Green Beans (Raw)": 31 ,"Potatoes (Raw)": 77 , "Sweet Potatoes (Raw)": 86, "Onions (Raw)": 40,
        "Mushrooms (Raw)": 22, "Eggplant (Raw)": 25,"Pumpkin (Raw)": 26 ,"Celery (Raw)": 16 ,
    },
    fruits: { apple: 52, orange: 47, Banana: 89  , Grapes: 69,Strawberries: 32 , Blueberries: 57 ,Pineapple: 50 ,Mango: 60  ,Peach: 39  , Pear: 39, Watermelon: 30 , Kiwi: 61 ,Cherries: 50  ,Avocado: 160  ,Pomegranate: 83, 
        Raspberry: 52, Blackberries: 43,"Cantaloupe (Melon)": 34 ,  Fig: 74 ,Dates: 282 ,Guava: 68  ,"Passion Fruit": 97 ,Nectarine: 44  , Tangerine: 53 ,"Coconut (Fresh)": 354 , Lychee: 66 },
    milks: { "Whole Milk": 61 , "Skim Milk (Non-fat)": 34 ,"Almond Milk (Unsweetened)": 13 , "Soy Milk (Unsweetened)": 33 , "Oat Milk (Unsweetened)": 40,"Rice Milk (Unsweetened)": 47,"Coconut Milk (Unsweetened, from carton)": 13 ,
        "Goat Milk": 69 ,"Buffalo Milk": 97 ,  "Lactose-Free Milk":65   }
};

let currentCategory = 'protein'; 

function populateOptions() {
    const foodSelect = document.getElementById('food-type');
    const alternativeSelect = document.getElementById('alternative-food');

    foodSelect.innerHTML = '';
    alternativeSelect.innerHTML = '';

    const foods = calorieData[currentCategory];
    for (const [key, value] of Object.entries(foods)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        foodSelect.appendChild(option);

        const altOption = document.createElement('option');
        altOption.value = key;
        altOption.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        alternativeSelect.appendChild(altOption);
    }
}

document.querySelectorAll('.food-type-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        currentCategory = e.target.getAttribute('data-type');
        populateOptions();
    });
});

document.getElementById('calculate-btn').addEventListener('click', () => {
    const foodType = document.getElementById('food-type').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const alternativeFood = document.getElementById('alternative-food').value;

    if (!amount || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const foodCalories = calorieData[currentCategory][foodType];
    const alternativeCalories = calorieData[currentCategory][alternativeFood];

    const foodTotalCalories = (foodCalories * amount) / 100;
    const alternativeAmount = (foodTotalCalories / (alternativeCalories / 100)).toFixed(2);

    document.getElementById('original-food').innerText = `Original Food: ${foodType.charAt(0).toUpperCase() + foodType.slice(1)} - ${amount} grams = ${foodTotalCalories.toFixed(2)} calories`;
    document.getElementById('alternative-food-result').innerText = `Alternative Food: ${alternativeFood.charAt(0).toUpperCase() + alternativeFood.slice(1)} - ${alternativeAmount} grams = ${foodTotalCalories.toFixed(2)} calories`;

    document.getElementById('result').classList.remove('hidden');
});

populateOptions();

