
const calorieData = {
    protein: {   "صدور دجاج (مستوي)": 165 ,  "فخذ دجاج (مستوي، من غير جلد)": 209 , "جناح دجاج (مستوي، من غير جلد)": 203 
        ," كبد دجاج (مستوي)": 165 
        ,  "صدر ديك رومي": 120 ,"بيض": 155  , "بياض البيض" : 52 , "لحم بقر (مفروم، مستوي)": 250   ,"جمبرى (مستوي)": 99 ,"سلمون (مستوي)": 206 , "تونة (مستوية)": 132 , "ماكريل (مستوي)": 305 , "سردين (مستوي)": 208 , "بلطي (مستوي)": 96 , "كابوريا (مستوي)": 87 ,
        "كبد بقرى (مستوي)": 175 ,"جبن قريش": 98 ,"لحم أرنب (مستوي)" : 173},
    Legumes: {
        "عدس (مستوي)": 116, "حمص (مستوي)": 164 , "فاصوليا حمراء (مستوية)": 127 , "فاصوليا ليمة (مستوية)" : 113   , "فول الصويا (مستوي)": 173 , "بازلاء (مستوية)": 81,"فول " : 127,
        "Lupine beans": 120 , 
    },     
    carbohydrates: { "شوفان (مستوي)": 71, "أرز أبيض (مستوي)": 130 ,  "مكرونة (مستوية)": 124 ,"كينيوا (مستوية)": 120 ,"بطاطا حلوة (مستوية)": 90 ,"بطاطس (مسلوقة)": 87 ,  "فشار" :387 , "كورن فليكس":357 , 
         "ذرة مشوى ":150 ,"توست بنى": 282 , "توست ابيض": 263 , "عيش تورتيلا": 345 , "عيش بلدى": 282 , "عيش شامى":266},
    fats: { زبدة: 717," زيت زيتون": 884 ,افوكادو: 160 , لوز: 579 , بندق: 628 , كاجو: 553, فسدق: 562 , سودانى : 588,"شيا": 486  , "زبدة فول سودانى": 588 , "زبدة لوز": 614  , بيكان: 691, },
    vegetables: { جزر: 41, "بروكلى ": 34 , "سبانخ ": 23 , "فلفل رومي": 31 , "طماطم ": 18 , "خيار ": 16 ,"فاصوليا خضراء": 31 ,"بطاطس ": 77 , "بطاطا ": 86, "بصل ": 40,
        "Mushrooms ": 22, "Eggplant ": 25,"Pumpkin ": 26 ,"Celery ": 16 ,
    },
    fruits: { تفاح: 52, برتقال: 47, موز: 89  , عنب: 69,فراولة: 32 , بلوبيرى : 57 ,اناناس: 50 ,مانجا: 60  ,خوخ: 39  , كمثرى: 39, بطيخ: 30 , كيوى: 61 ,كريز: 50  ,افوكادو: 160  ,رمان: 83, 
        راسبيرى: 52, بلاكبيرى: 43,"كانتالوب": 34 ,  تين: 74 ,تمر: 282 ,جوافة: 68  ,"باشون فروت": 97 ,نيكتارين: 44  , تانجرين: 53 ,"جوز هند": 354 , ليتشى: 66 },
    milks: { "لبن كامل الدسم": 61 , "لبن خالى الدسم": 34 ,"لبن لوز": 13 , "لبن صويا": 33 , "لبن شوفان": 40,"لبن رز": 47,"لبن جوز هند": 13 ,
        "لبن ماعز": 69 ,"لبن جاموس": 97 ,  "لبن خالى من اللاكتوز":65   }
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

    document.getElementById('original-food').innerText = `الاكل الاصلى: ${foodType.charAt(0).toUpperCase() + foodType.slice(1)} - ${amount} جرام = ${foodTotalCalories.toFixed(2)} كالورى`;
    document.getElementById('alternative-food-result').innerText = `الاكل المختار: ${alternativeFood.charAt(0).toUpperCase() + alternativeFood.slice(1)} - ${alternativeAmount} جرام = ${foodTotalCalories.toFixed(2)} كالورى`;

    document.getElementById('result').classList.remove('hidden');
});

populateOptions();