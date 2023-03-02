import React, {useState, useContext} from 'react';
import MyContext from './MyContext';
export let formResponses = [];

export default function Input(){

    return(
        <main>
            <h1 className = "main-title">Input</h1>
            <ul className = "main-container">
                <h2 className = "main-h2">This questionnaire is designed to be completed alongside a clinician interview. For each of the following, select the scale that best represents the patient's feelings:</h2>
                <h1 className = "main-h1">Hamilton Depression Rating Scale (17 Questions)</h1>
                <hr className = "main-divider"/>
                <h3 className = "main-h3">This section contains the HDRS-17, a widely used clincian administered depression assessment scale.</h3>
                <Question
                index = "1" 
                question = "Depressed Mood (sadness, hopeless, helpless, worthless)"
                answers = {["Absent", "These feelings indicated only on questioning.", "These feelings spontaneously reported verbally.", "Communicates feelings non-verbally, i.e. through facial expression, posture, voice, and tendency to weep.", "Patient reports virtually only these feeling states in his/her spontaneous verbal and non-verbal communication."]}/>
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
                answers = {["No difficulty.","Thoughts and feelings of incapacity, fatigue, or weakness.", "Loss of interest in activities, hobbies, or work (feels they have to push themselves).", "Decrease in actual time spent or decrease in productivity. Less than 3 hours a day doing work or hobbies.", "Stopped working because of illness, little to no activities."]}/>
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
                index = "13" 
                question = "Somatic Symptoms: General"
                answers = {["None.","Heaviness in limbs, back, or head. Backaches, headaches, muscle aches. Lack of energy.", "Any distinct symptom."]}/>
                <Question 
                index = "14" 
                question = "Genital Symptoms (loss of libido, menstrual disturbances, etc.)"
                answers = {["Absent.","Mild.", "Severe."]}/>
                <Question 
                index = "15" 
                question = "Hypochondriasis"
                answers = {["Absent.","Self-absorption (bodily).", "Preoccupation with health.", "Frequent complaints, requests for help, etc.", "Hypochondrial delusions."]}/>
                <Question 
                index = "16" 
                question = "Weight Loss"
                answers = {["No weight loss.","Probable weight loss associated with illness.", "Definite weight loss.", "Not assessed."]}/>
                <Question 
                index = "17" 
                question = "Insight"
                answers = {["Acknowledges being depressed and ill.","Acknowledges illness but attributes to bad food, climate, overwork, virus, etc.", "Denies being ill."]}/>
                <h1 className = "main-h1">Miscellaneous Clinical Factors (4 Questions):</h1>
                <hr className = "main-divider"/>
                <Question 
                index = "18" 
                question = "Changes in Sleep (Beck Depression Inventory)"
                answers = {["I can sleep as well as usual.","I don't sleep as well as I used to.", "I wake up 1-2 hours earlier than usual, find it hard to get back to sleep.", "I wake up several hours earlier and can't get back to sleep."]}/>
                <Question 
                index = "19" 
                question = "Fatigability (Schedules for Clincal Assessment in Neuropsychiatry)"
                answers = {["No fatigability.","Minor.","Present", "Severe."]}/>
                <NumberInput 
                index = "20"
                question = "Enter your interest-activity dimension score from: "/>
                <NumberInput 
                index = "21"
                question = "Enter your 'appetite' dimension score from: "/>
                <h1 className = "main-h1">Genetic Factors (11 Questions)</h1>
                <hr className = "main-divider"/>
                <h3 className = "main-h3">Select your single nucleotide polymorphism variants for the following:</h3>
                <Question 
                index = "22" 
                question = "rs1392611"
                answers = {["Homozygous for minor allele.","Heterozygous.", "Homozygous for major allele."]}/>
                <Question 
                index = "23" 
                question = "rs10812099"
                answers = {["Homozygous for minor allele.","Heterozygous.", "Homozygous for major allele."]}/>
                <Question 
                index = "24" 
                question = "rs1891943"
                answers = {["Homozygous for minor allele.","Heterozygous.", "Homozygous for major allele."]}/>
                <Question 
                index = "25" 
                question = "rs151139256"
                answers = {["Homozygous for minor allele.","Heterozygous.", "Homozygous for major allele."]}/>
                <Question 
                index = "26" 
                question = "rs11002001"
                answers = {["Homozygous for minor allele.","Heterozygous.", "Homozygous for major allele."]}/>
                <Question 
                index = "27" 
                question = "rs62182022"
                answers = {["Homozygous for minor allele.","Heterozygous.", "Homozygous for major allele."]}/>
                <Question 
                index = "28" 
                question = "rs28373080"
                answers = {["Homozygous for minor allele.","Heterozygous.", "Homozygous for major allele."]}/>
                <Question 
                index = "29" 
                question = "rs7757702"
                answers = {["Homozygous for minor allele.","Heterozygous.", "Homozygous for major allele."]}/>
                <Question 
                index = "30" 
                question = "rs76557116"
                answers = {["Homozygous for minor allele.","Heterozygous.", "Homozygous for major allele."]}/>
                <Question 
                index = "31" 
                question = "rs9557363"
                answers = {["Homozygous for minor allele.","Heterozygous.", "Homozygous for major allele."]}/>
                <Question 
                index = "32" 
                question = "rs2704022"
                answers = {["Homozygous for minor allele.","Heterozygous.", "Homozygous for major allele."]}/>
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

function isFormComplete(){
    for(let i = 0; i < formResponses.length; i++){
        if(formResponses[i] == null){
            return false;
        }
    }
    return(formResponses.length >= 32);
}


function NumberInput(props)
{
    const {buttonsActive, handleButtonsActive} = useContext(MyContext);
    const [numberValue, setNumberValue] = useState(0);

    const handleNumberChange = (event) =>{
        setNumberValue(event.target.value);
        formResponses[props.index - 1] = event.target.value;
        if(isFormComplete()){
            handleButtonsActive();
        }
    }
    return(
        <div>
            <h2>{props.index}. {props.question} <a href="https://pubmed.ncbi.nlm.nih.gov/21929846/">Link to Study</a></h2>
            <div className = "input-list">
                <input className = "input-number" type = "number" value={numberValue} onChange={handleNumberChange}/>
            </div>
        </div>
    )
}


function UserInput(props){
    const {buttonsActive, handleButtonsActive} = useContext(MyContext);

    const handleClick = (event, i) =>{
        
        formResponses[props.index - 1] = i; 
        if(isFormComplete()){
            handleButtonsActive();
        }
        const clickedButton = event.target;
        const buttonsInGroup = Array.from(clickedButton.parentNode.parentNode.querySelectorAll("button"));
        buttonsInGroup.forEach(button => {
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