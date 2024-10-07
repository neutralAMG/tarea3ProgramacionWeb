const mainContainer = document.querySelector(".main-container");
const form = document.querySelector(".form-data");
const FormData ={
    name: "",
    state:"",
    city:"",
    sector:"",
    street:"",
    degree:0,
};

const DegreeSections ={
    1:[
        {
            subjectName: "programing 1",
            times:[{time:"Lun - 8:00am - 11:00am", isSelected: false}, {time:"Lun - 1:00pm - 5:00pm", isSelected: false}, {time:"Lun - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "intro to data bases",
            times:[{time:"Mar - 8:00am - 11:00am", isSelected: false}, {time:"Mar - 1:00pm - 5:00pm", isSelected: false}, {time:"Mar - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "intro to algorithms",
            times:[{time:"Mier - 8:00am - 11:00am", isSelected: false}, {time:"Mier - 1:00pm - 5:00pm", isSelected: false}, {time:"Mier - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Programing 2",
            times:[{time:"Ju - 8:00am - 11:00am", isSelected: false}, {time:"Ju - 1:00pm - 5:00pm", isSelected: false}, {time:"Ju - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Advance data bases",
            times:[{time:"vie - 8:00am - 11:00am", isSelected: false}, {time:"vie - 1:00pm - 5:00pm", isSelected: false}, {time:"vie - 6:00pm - 9:00pm", isSelected: false}]
        }
    ],
    2:[
        {
            subjectName: "intro to html",
            times:[{time:"Lun - 8:00am - 11:00am", isSelected: false}, {time:"Lun - 1:00pm - 5:00pm", isSelected: false}, {time:"Lun - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Drawing",
            times:[{time:"Mar - 8:00am - 11:00am", isSelected: false}, {time:"Mar - 1:00pm - 5:00pm", isSelected: false}, {time:"Mar - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Web programing",
            times:[{time:"Mier - 8:00am - 11:00am", isSelected: false}, {time:"Mier - 1:00pm - 5:00pm", isSelected: false}, {time:"Mier - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Marketing",
            times:[{time:"Ju - 8:00am - 11:00am", isSelected: false}, {time:"Ju - 1:00pm - 5:00pm", isSelected: false}, {time:"Ju - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "web programing 2",
            times:[{time:"vie - 8:00am - 11:00am", isSelected: false}, {time:"vie - 1:00pm - 5:00pm", isSelected: false}, {time:"vie - 6:00pm - 9:00pm", isSelected: false}]
        }
    ],
    3:[
        {
            subjectName: "intro to programing",
            times:[{time:"Lun - 8:00am - 11:00am", isSelected: false}, {time:"Lun - 1:00pm - 5:00pm", isSelected: false}, {time:"Lun - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Circuits",
            times:[{time:"Mar - 8:00am - 11:00am", isSelected: false}, {time:"Mar - 1:00pm - 5:00pm", isSelected: false}, {time:"Mar - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Mecatronics fisics",
            times:[{time:"Mier - 8:00am - 11:00am", isSelected: false}, {time:"Mier - 1:00pm - 5:00pm", isSelected: false}, {time:"Mier - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Advance CAD",
            times:[{time:"Ju - 8:00am - 11:00am", isSelected: false}, {time:"Ju - 1:00pm - 5:00pm", isSelected: false}, {time:"Ju - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Digital systems",
            times:[{time:"vie - 8:00am - 11:00am", isSelected: false}, {time:"vie - 1:00pm - 5:00pm", isSelected: false}, {time:"vie - 6:00pm - 9:00pm", isSelected: false}]
        }
    ],
    4:[
        {
            subjectName: "studio recording",
            times:[{time:"Lun - 8:00am - 11:00am", isSelected: false}, {time:"Lun - 1:00pm - 5:00pm", isSelected: false}, {time:"Lun - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Advance DAW",
            times:[{time:"Mar - 8:00am - 11:00am", isSelected: false}, {time:"Mar - 1:00pm - 5:00pm", isSelected: false}, {time:"Mar - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "MIDI",
            times:[{time:"Mier - 8:00am - 11:00am", isSelected: false}, {time:"Mier - 1:00pm - 5:00pm", isSelected: false}, {time:"Mier - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Live Sound",
            times:[{time:"Ju - 8:00am - 11:00am", isSelected: false}, {time:"Ju - 1:00pm - 5:00pm", isSelected: false}, {time:"Ju - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Surround sound",
            times:[{time:"vie - 8:00am - 11:00am", isSelected: false}, {time:"vie - 1:00pm - 5:00pm", isSelected: false}, {time:"vie - 6:00pm - 9:00pm", isSelected: false}]
        }
    ],
    5:[
        {
            subjectName: "Operative systems",
            times:[{time:"Lun - 8:00am - 11:00am", isSelected: false}, {time:"Lun - 1:00pm - 5:00pm", isSelected: false}, {time:"Lun - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "WAN tecnologies",
            times:[{time:"Mar - 8:00am - 11:00am", isSelected: false}, {time:"Mar - 1:00pm - 5:00pm", isSelected: false}, {time:"Mar - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Programing fundamentals",
            times:[{time:"Mier - 8:00am - 11:00am", isSelected: false}, {time:"Mier - 1:00pm - 5:00pm", isSelected: false}, {time:"Mier - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Electronics fundamentals",
            times:[{time:"Ju - 8:00am - 11:00am", isSelected: false}, {time:"Ju - 1:00pm - 5:00pm", isSelected: false}, {time:"Ju - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Advance routing",
            times:[{time:"vie - 8:00am - 11:00am", isSelected: false}, {time:"vie - 1:00pm - 5:00pm", isSelected: false}, {time:"vie - 6:00pm - 9:00pm", isSelected: false}]
        }
    ],
};



function GenerateFormView(FormData){
 
    const FormDataContainer = document.createElement("div");
    FormDataContainer.className = "form-data-container";
    
    const form = document.createElement("form");
    form.className = "form-data";

    const div1 = document.createElement("div");
    div1.className = "form-div";

    const labelName = document.createElement("label");
    labelName.textContent = "Name: ";
    labelName.htmlFor = "name"
    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.name = "name";
    inputName.id = "name"
    inputName.placeholder = "name";
    inputName.value = FormData.name;

    div1.appendChild(labelName);
    div1.appendChild(inputName);

    const div2 = document.createElement("div");
    div1.className = "form-div";

    const labelState = document.createElement("label");
    labelState.textContent = "State: ";
    labelState.htmlFor = "state"
    const inputState = document.createElement("input");
    inputState.type = "text";
    inputState.name = "state";
    inputState.id = "state"
    inputState.placeholder = "state";
    inputState.value = FormData.state;

    div2.appendChild(labelState);
    div2.appendChild(inputState);

    const div3 = document.createElement("div");
    div1.className = "form-div";

    const labelCity = document.createElement("label");
    labelCity.textContent = "City: ";
    labelCity.htmlFor = "city"
    const inputCity = document.createElement("input");
    inputCity.type = "text";
    inputCity.name = "city";
    inputCity.id = "city"
    inputCity.placeholder = "city";
    inputCity.value = FormData.city;
    
    div3.appendChild(labelCity);
    div3.appendChild(inputCity);


    const div4 = document.createElement("div");
    div1.className = "form-div";

    const labelSector = document.createElement("label");
    labelSector.textContent = "Sector: ";
    labelSector.htmlFor = "sector"
    const inputSector = document.createElement("input");
    inputSector.type = "text";
    inputSector.name = "sector";
    inputSector.id = "sector"
    inputSector.placeholder = "sector";
    inputSector.value = FormData.sector;

    div4.appendChild(labelSector)
    div4.appendChild(inputSector)

    const div5 = document.createElement("div");
    div1.className = "form-div";

    const labelStreet = document.createElement("label");
    labelStreet.textContent = "Street: ";
    labelStreet.htmlFor = "street"
    const inputStreet = document.createElement("input");
    inputStreet.type = "text";
    inputStreet.name = "street";
    inputStreet.id = "street"
    inputStreet.placeholder = "street";
    inputStreet.value = FormData.street;

    div5.appendChild(labelStreet);
    div5.appendChild(inputStreet);

    const div6 = document.createElement("div");
    div1.className = "form-div";

    const labelDegree = document.createElement("label");
    labelDegree.textContent = "Degree: ";
    labelDegree.htmlFor = "degree"

    const select = document.createElement("select");
    select.id ="degree";
    select.name = "degree";
    
    const defaultOption = document.createElement("option")
    defaultOption.value = ""
    defaultOption.selected = FormData.degree === 0;

    const option1 = document.createElement("option")
    option1.value = "1";
    option1.textContent = "Software";
    option1.selected = FormData.degree == option1.value;

    const option2 = document.createElement("option")
    option2.value = "2";
    option2.textContent = "Multimedia";
    option2.selected = FormData.degree == option2.value;

    const option3 = document.createElement("option")
    option3.value = "3";
    option3.textContent = "Mecatronics";
    option3.selected = FormData.degree == option3.value;

    const option4 = document.createElement("option")
    option4.value = "4";
    option4.textContent = "Sound";
    option4.selected = FormData.degree == option4.value;

    const option5 = document.createElement("option")
    option5.value = "5";
    option5.textContent = "NetWorking";
    option5.selected = FormData.degree == option5.value;
 
    const ClearBtn = document.createElement("button");
    ClearBtn.className = "clear"
    ClearBtn.textContent = "clear"
    ClearBtn.type = "button"
    ClearBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        document.querySelector("#name").value ="";
        document.querySelector("#state").value ="";
        document.querySelector("#city").value ="";
        document.querySelector("#sector").value ="";
        document.querySelector("#street").value ="";
        document.querySelector("#degree").value ="";
    })

    const SubmitBtn = document.createElement("button");
    SubmitBtn.className = "submit";
    SubmitBtn.textContent = "submit";
    SubmitBtn.type = "submit"



    select.appendChild(defaultOption);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    div6.appendChild(labelDegree);
    div6.appendChild(select);

    form.appendChild(div1);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(div4);
    form.appendChild(div5);
    form.appendChild(div6);
    form.appendChild(ClearBtn);
    form.appendChild(SubmitBtn);

    form.addEventListener("submit",  (e)=>{
        e.preventDefault();
        const validationsResults = [];
        let isValid = true;
        const nameInput = document.querySelector("#name");
        const stateInput = document.querySelector("#state");
        const cityInput = document.querySelector("#city");
        const sectorInput = document.querySelector("#sector");
        const streetInput = document.querySelector("#street");
        const degreeInput = document.querySelector("#degree");
    
        validationsResults.push(validate(nameInput)); 
        validationsResults.push(validate(stateInput)); 
        validationsResults.push(validate(cityInput));
        validationsResults.push(validate(sectorInput)); 
        validationsResults.push(validate(streetInput)); 
        validationsResults.push(validate(degreeInput));
    
        for(let i = 0; i< validationsResults.length; i++){
            if(validationsResults[i] === false){   
                isValid = false;
                break;
            }
            isValid = true;
        }
    
        if (isValid === false) return;
    
        
        FormData.name = nameInput.value;
        FormData.state = stateInput.value;
        FormData.city = cityInput.value;
        FormData.sector = sectorInput.value;
        FormData.street = streetInput.value;
        FormData.degree = degreeInput.value;
    
        GenerateSubjectSelectionView(FormData.degree);
    
        console.log(FormData);
    })
    
    FormDataContainer.appendChild(form);
    mainContainer.appendChild(FormDataContainer)

}

  function GenerateSubjectSelectionView(degreeSelected){
   document.querySelector(".form-data-container").remove();
    const subjects =  DegreeSections[degreeSelected];
    console.log(subjects)

    const newInnerDiv = document.createElement("div");
    newInnerDiv.className = "SubjectSelection";

    const goBackToFirstBtn = document.createElement("p");
    goBackToFirstBtn.textContent = "Go back to registration";
    goBackToFirstBtn.style.color = "blue";
    goBackToFirstBtn.style.textDecoration = "underline";
    goBackToFirstBtn.style.cursor = "pointer";

    goBackToFirstBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        newInnerDiv.remove();
        GenerateFormView(FormData);
        console.log(FormData);
    });

    newInnerDiv.appendChild(goBackToFirstBtn)
    const form = document.createElement("form")
    form.className = "subjectForm"

    for(let i = 0; i < subjects.length; i++){
        const para = document.createElement("p");
        para.textContent = subjects[i].subjectName;
        form.appendChild(para);
        for(let j = 0; j < subjects[i].times.length; j++){
            const radioInput = document.createElement("input")
            radioInput.type = "radio";
            radioInput.value = subjects[i].times[j].time;
            radioInput.name = subjects[i].subjectName;
            radioInput.id = subjects[i].subjectName + subjects[i].times[j];
            radioInput.select = subjects[i].times[j].isSelected
            form.appendChild(radioInput)
            const label = document.createElement("label")
            label.textContent = subjects[i].times[j].time
            label.htmlFor = subjects[i].subjectName
            form.appendChild(label)

            form.appendChild(document.createElement("br"))
        }
    }

    const buttonToSubmit = document.createElement("button");
    buttonToSubmit.type ="submit";
    buttonToSubmit.textContent = "submit";

    form.appendChild(buttonToSubmit);
    newInnerDiv.appendChild(form)

    mainContainer.appendChild(newInnerDiv);
}

GenerateFormView(FormData);

function validate(input){
    if(input.value === "" || input.value === null || input.value === " "){
        input.style.borderColor = "red";
        input.style.borderWidth = "5px";
        return false;
    }
    input.style.borderColor = "green";
    input.style.borderWidth = "5px";
    return true;
}