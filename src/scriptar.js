document.getElementById('calories-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const sex = document.getElementById('sex').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activityLevel = document.getElementById('activity-level').value;
    const dietTarget = document.getElementById('diet-target').value;

    let bmr;

    // Calculate BMR (Basal Metabolic Rate)
    if (sex === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Adjust BMR based on activity level
    const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        very_active: 1.9
    };

    const calorieNeeds = bmr * activityMultipliers[activityLevel];

    // Adjust calorie needs based on diet target
    let targetCalories;
    switch(dietTarget) {
        case 'maintain':
            targetCalories = calorieNeeds;
            break;
        case 'lose':
            targetCalories = calorieNeeds - 500; // Assume a 500 calorie deficit for weight loss
            break;
        case 'gain':
            targetCalories = calorieNeeds + 500; // Assume a 500 calorie surplus for weight gain
            break;
        case 'extreme-lose':
            targetCalories = calorieNeeds - 1000; // Assume a 1000 calorie deficit for extreme weight loss
            break;
        case 'extreme-gain':
            targetCalories = calorieNeeds + 1000; // Assume a 1000 calorie surplus for extreme weight gain
            break;
        default:
            targetCalories = calorieNeeds;
            break;
    }

    // Update result display
    document.getElementById('result-text').textContent = `السعرات المطلبه يوميا ${Math.round(targetCalories)} سعرة.`;
});
