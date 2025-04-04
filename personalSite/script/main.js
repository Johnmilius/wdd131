//main.js
import {heightModifiers, strengthStandards} from "./arrayInformation.mjs";

function formHandler(){
    // initialize variables and grab values
    let personObj = {}
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let toneRating = document.querySelector("#muscle-tone-rating").value;
    let age = document.querySelector("#age").value;
    let gender = document.querySelector('#gender').value;
    
    // debugging
    // console.log("Height: ", height);
    // console.log("Weight: ", weight);
    // console.log("Muscle Tone Rating: ", toneRating);
    // console.log("Gender: ", gender)

    // create object
    personObj["height"] = parseInt(height);
    personObj["weight"] = parseInt(weight);
    personObj["toneRating"] = parseInt(toneRating);
    personObj["age"] = parseInt(age);
    personObj["gender"] = gender;
   
    // debugging statement
    console.log(personObj);

    personObj["BMI"] = calculateBMI(personObj);
    personObj["BFP"] = calculateBFP(personObj);

    // debugging statement
    console.log(personObj);

    personObj["heightModifier"] = calculateHeightModifier(personObj.height, personObj.gender);

    // debugging statement
    console.log(personObj);

    personObj["strengthStandards"] = getStrengthStandards(personObj, strengthStandards);

    // debugging statement
    console.log(personObj);

    // personObj["strengthStandards"] = applyStrengthStandardsModifier(personObj, heightModifiers);

    displayResults(personObj);
}

function displayResults(personObj){
}

function resultsTemplete(){
    return(
    `
        <p>For a ${gender} weighing ${weight} lbs, the expected squat weights based on your experience level are:</p>
        <ul>
            <li><strong>Beginner:</strong> ${squat.beginner} lbs</li>
            <li><strong>Novice:</strong> ${squat.novice} lbs</li>
            <li><strong>Intermediate:</strong> ${squat.intermediate} lbs</li>
            <li><strong>Advanced:</strong> ${squat.advanced} lbs</li>
            <li><strong>Elite:</strong> ${squat.elite} lbs</li>
        </ul>

        <p>For the bench press, the expected weights are:</p>
        <ul>
            <li><strong>Beginner:</strong> ${benchPress.beginner} lbs</li>
            <li><strong>Novice:</strong> ${benchPress.novice} lbs</li>
            <li><strong>Intermediate:</strong> ${benchPress.intermediate} lbs</li>
            <li><strong>Advanced:</strong> ${benchPress.advanced} lbs</li>
            <li><strong>Elite:</strong> ${benchPress.elite} lbs</li>
        </ul>

        <p>For deadlifts, the expected weights are:</p>
        <ul>
            <li><strong>Beginner:</strong> ${deadlift.beginner} lbs</li>
            <li><strong>Novice:</strong> ${deadlift.novice} lbs</li>
            <li><strong>Intermediate:</strong> ${deadlift.intermediate} lbs</li>
            <li><strong>Advanced:</strong> ${deadlift.advanced} lbs</li>
            <li><strong>Elite:</strong> ${deadlift.elite} lbs</li>
        </ul>
    `
    )
}

function calculateBMI(personObj){
    let BMI = (personObj['weight'] / (personObj['height']) ** 2) * 703;
    return BMI
}

function calculateBFP(personObj){
    let BFP = 0;
    if (personObj["gender"] === 'male') {
        BFP = 1.20 * personObj["BMI"] + 0.23 * personObj["age"] - 16.2;
    } else if (personObj["gender"] === 'female') {
        BFP = 1.20 * personObj["BMI"] + 0.23 * personObj["age"] - 5.4;
    }

    let toneRating = personObj['toneRating'];
    let toneAdjustment = 0;

    if (toneRating === 10) {
        toneAdjustment = 4; //fatter
    } else if (toneRating === 9) {
        toneAdjustment = 3;
    } else if (toneRating === 8) {
        toneAdjustment = 2;
    } else if (toneRating === 7) {
        toneAdjustment = 0;
    } else if (toneRating === 6) {
        toneAdjustment = -2;
    } else if (toneRating === 5) {
        toneAdjustment = -3; //lean
    } else if (toneRating === 4) {
        toneAdjustment = -1.5;
    } else if (toneRating === 3) {
        toneAdjustment = -.5;
    } else if (toneRating === 2) {
        toneAdjustment = 0;
    } else if (toneRating === 1) {
        toneAdjustment = 0; //skinny
    }
    
    // Apply the tone adjustment to BFP
    BFP += toneAdjustment;
    
    return BFP
}

function calculateHeightModifier(height, gender){
    let heightModifier = '';
    
    if (gender == 'male') {
        if (height < 66) {
            heightModifier = 'short';
        } else if (height >= 66 && height <= 72) {
            heightModifier = 'average';
        } else {
            heightModifier = 'tall';
        }
    } else if (gender == 'female') {
        if (height < 62) {
            heightModifier = 'short';
        } else if (height >= 62 && height <= 67) {
            heightModifier = 'average';
        } else {
            heightModifier = 'tall';
        }
    }

    return heightModifier
}

function getStrengthStandards(personObj, strengthStandards){
    let weightKEY = ''
    let personsStrengthStandard = {}

    let roundedWeight = Math.round(personObj.weight / 10) * 10;
    
    if (personObj.gender == 'male'){
        if (roundedWeight < 100) roundedWeight = 100;
        if (roundedWeight > 250) roundedWeight = 250; 
    }
    else if (personObj.gender == 'female'){
        if (roundedWeight < 80) roundedWeight = 80;
        if (roundedWeight > 180) roundedWeight = 180;       
    }

    weightKEY = `${roundedWeight}lbs`;
    if (personObj.gender == 'male') personsStrengthStandard = strengthStandards.male[weightKEY];
    else if (personObj.gender == 'female') personsStrengthStandard = strengthStandards.female[weightKEY];
    
    return personsStrengthStandard
}

function applyStrengthStandardsModifier(personObj, heightModifier){

}

const formButton = document.querySelector('#formButton');
formButton.addEventListener('click', formHandler);