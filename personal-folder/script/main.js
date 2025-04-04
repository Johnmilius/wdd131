//main.js
import {strengthStandards, liftingTips} from "./objectInformation.mjs";

function formHandler(){
    // initialize variables and grab values
    let personObj = {}
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let toneRating = document.querySelector("#muscle-tone-rating").value;
    let age = document.querySelector("#age").value;
    let gender = document.querySelector('#gender').value;
    
    personObj["height"] = parseInt(height);
    personObj["weight"] = parseInt(weight);
    personObj["toneRating"] = parseInt(toneRating);
    personObj["age"] = parseInt(age);
    personObj["gender"] = gender;

    personObj["BMI"] = calculateBMI(personObj);
    personObj["BFP"] = calculateBFP(personObj);

    personObj["heightModifier"] = calculateHeightModifier(personObj.height, personObj.gender);

    personObj["strengthStandards"] = getStrengthStandards(personObj, strengthStandards);

    displayResults(personObj);
}

function displayResults(personObj){
    let html = resultsTemplete(personObj);
    let resultsSection = document.querySelector('#childMain_results_container');

    resultsSection.innerHTML = html;
}

function resultsTemplete(personObj){
    const { gender, weight, BMI, BFP, strengthStandards} = personObj;
    const { squat, benchPress, deadlift } = strengthStandards;
    return(
    `
        <h2>For a <strong>${gender}</strong> weighing <strong>${weight}</strong> lbs</h2>
        <p>For the squat, the expected weights are:</p>
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
        <div>
            <h2>Here is some additional information</h2>
            <p>Your Body Mass Index is <strong>${BMI.toFixed(2)}</strong></p>
            <p>Your Body Fat Percentage is <strong>${BFP.toFixed(2)}</strong></p>
        </div>
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

function randomTipsHandler(){
    let shuffledTips = liftingTips.sort(() => Math.random() - 0.5); 
    let threeRandomTips = shuffledTips.splice(0,3);

    let htmlString = randomTipsTemplate(threeRandomTips)

    const exerciseTipsSection = document.querySelector('#homeMain_excerciseTips');
    exerciseTipsSection.insertAdjacentHTML('beforeend', htmlString);
}

function randomTipsTemplate(threeRandomTips){
    let htmlString = threeRandomTips.map(tip => `<p>${tip}</p>`) .join('');

    return(
    `         
    <div id="tipResults">
        ${htmlString}
    </div>
  `)
}

const physicalFormButton = document.querySelector('#formButton');
if (physicalFormButton) {
    physicalFormButton.addEventListener('click', formHandler);
}

const randomTipsButton = document.querySelector('#tipsButton');
if (randomTipsButton) {
    randomTipsButton.addEventListener('click', randomTipsHandler);
}
