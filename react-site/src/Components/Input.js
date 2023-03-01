import React from 'react';

let formResponses = [];

export default function Input(){
    return(
        <main>
            <h1 className = "main-title">Input</h1>
            <ul className = "main-container">
                <h3 className = "main-h3">This questionnaire is designed to be completed alongside a clinician interview. For each of the following, select the scale that best represents the patient's feelings:</h3>
                <Question 
                index = "1" 
                question = "Depressed Mood (sadness, hopeless, helpless, worthless)"
                answers = {["Absent", "These feeling states indicated only on questioning.", "These feeling states spontaneously reported verbally.", "Communicates feeling states non-verbally, i.e. through facial expression, posture, voice, and tendency to weep.", "Patient reports virtually only these feeling states in his/her spontaneous verbal and non-verbal communication."]}/>
                <Question 
                index = "2" 
                question = "Feelings of Guilt"
                answers = {["Absent", "Self reproach, feels he/she has let people down.", "Ideas of guilt or rumination over past errors or sinful deeds.", "Present illness is a punishment. Delusions of guilt.", "Hears accusatory or denunciatory voices and/or experiences threatening visual hallucinatons."]}/>
                <Question 
                index = "3" 
                question = "Suicide"
                answers = {["Absent", "Feels life is not worth living.", "Wishes they were dead or any thoughts of possible death to self.", "Ideas or gestures of suicide.", "Attemps at suicide (any serious attempt rate 4)."]}/>
                <Question 
                index = "4" 
                question = "Insomnia: Early in the Night"
                answers = {["No difficulty falling asleep.", "Occasional difficulty falling asleep, i.e. more than 1/2 hour.", "Nightly difficulty falling asleep."]}/>
                <Question 
                index = "5" 
                question = "Insomnia: Middle of the Night"
                answers = {["No difficulty.","Restless and disturbed during the night.", "Waking during the night - getting out of bed (except for urination)."]}/>
                <Question 
                index = "6" 
                question = "Insomnia: Early Hours of the Morning"
                answers = {["No difficulty.","Waking in the early hours of the morning but goes back to sleep.", "Unable to fall asleep again if he/she gets out of bed."]}/>
                <Question 
                index = "7" 
                question = "Work and Activities"
                answers = {["No difficulty.","Thoughts and feelings of incapacity, fatigue, or weakness.", "Loss of interest in activities, hobbies, or work (feels they have to push themselves).", "Decrease in actual time spent or decrease in productivity. Less than 3 hours a day doing work or hobbies.", "Stopped working because of illness, engages in no activities."]}/>
                <Question 
                index = "8" 
                question = "Mental Abilities (thought and speech, concentration, motor activity)"
                answers = {["Normal speech and thought.","Slight decrease in function during interview.", "Obvious decrease in function during interview.", "Interview difficult.", "Complete stupor."]}/>           
                <Question 
                index = "9" 
                question = "Agitation"
                answers = {["None.","Fidgetiness.", "Playing with hands, hair, etc.", "Moving about, can't sit still.", "Hand-wringing, nail biting, hair-pulling, biting of lips."]}/>
                <Question 
                index = "10" 
                question = "Psychic Anxiety"
                answers = {["No difficulty.","Subjective tension and irritability.", "Worrying about minor matters.", "Apprehensive attitude apparent in face or speech.", "Fears expressed without questioning."]}/>
                <Question 
                index = "11" 
                question = "Somatic Anxiety (physological: gastro-intestinal, cardio-vascular, respiratory, sweating)"
                answers = {["Absent","Mild.", "Moderate.", "Severe.", "Incapacitating."]}/>
                <Question 
                index = "12" 
                question = "Somatic Symptoms: Gastro-intestinal"
                answers = {["None.","Loss of appetite but eats without encouragement. Heavy feeling in abdomen.", "Difficulty eating without urging, requests medication for gastro-intestinal symptoms."]}/>
                <Question 
                index = "12" 
                question = "Somatic Symptoms: Gastro-intestinal"
                answers = {["None.","Loss of appetite but eats without encouragement. Heavy feeling in abdomen.", "Difficulty eating without urging, requests medication for gastro-intestinal symptoms."]}/>
            </ul>
        </main>
    )
}

function Question(props)
{
    return(
        <div>
            <h2>{props.index}. {props.question}</h2>
            <div className = "input-list">
                <UserInput index = {props.index} answers = {props.answers}/>
            </div>
        </div>
    )
}

function UserInput(props){
    const handleClick = (event, i) =>{
        const clickedButton = event.target;

        formResponses[props.index - 1] = i
        console.log(formResponses);

        const buttonsInGroup = Array.from(clickedButton.parentNode.parentNode.querySelectorAll("button"));
        buttonsInGroup.forEach(button => {
            console.log("Button found!");
            if (button !== clickedButton) {
              button.classList.remove('form-button-selected');
              button.classList.add('form-button-unselected');
            }
            else{
                button.classList.remove('form-button-unselected');
                button.classList.add('form-button-selected');
            }
          });

          
    }
    return(
        <div className = "input-container">
            {
                props.answers.map((answer, i) => (
                    <div key = {i} className = "button-container">
                        <button className = "form-button-unselected" onClick={(event) => {handleClick(event, i)}}>{i}</button>
                        <h4>{answer}</h4>
                    </div>
                ))
            }
        </div>
    )
}