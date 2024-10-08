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
            subjectName: "Programing 1",
            times:[{time:"Lun - 8:00am - 11:00am", isSelected: false}, {time:"Lun - 1:00pm - 5:00pm", isSelected: false}, {time:"Lun - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Intro to data bases",
            times:[{time:"Mar - 8:00am - 11:00am", isSelected: false}, {time:"Mar - 1:00pm - 5:00pm", isSelected: false}, {time:"Mar - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Intro to algorithms",
            times:[{time:"Mier - 8:00am - 11:00am", isSelected: false}, {time:"Mier - 1:00pm - 5:00pm", isSelected: false}, {time:"Mier - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Programing 2",
            times:[{time:"Ju - 8:00am - 11:00am", isSelected: false}, {time:"Ju - 1:00pm - 5:00pm", isSelected: false}, {time:"Ju - 6:00pm - 9:00pm", isSelected: false}]
        },
        {
            subjectName: "Advance data bases",
            times:[{time:"Vie - 8:00am - 11:00am", isSelected: false}, {time:"Vie - 1:00pm - 5:00pm", isSelected: false}, {time:"Vie - 6:00pm - 9:00pm", isSelected: false}]
        }
    ],
    2:[
        {
            subjectName: "Intro to html",
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
            subjectName: "Web programing 2",
            times:[{time:"Vie - 8:00am - 11:00am", isSelected: false}, {time:"Vie - 1:00pm - 5:00pm", isSelected: false}, {time:"Vie - 6:00pm - 9:00pm", isSelected: false}]
        }
    ],
    3:[
        {
            subjectName: "Intro to programing",
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
            times:[{time:"Vie - 8:00am - 11:00am", isSelected: false}, {time:"Vie - 1:00pm - 5:00pm", isSelected: false}, {time:"Vie - 6:00pm - 9:00pm", isSelected: false}]
        }
    ],
    4:[
        {
            subjectName: "Studio recording",
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
            times:[{time:"Vie - 8:00am - 11:00am", isSelected: false}, {time:"Vie - 1:00pm - 5:00pm", isSelected: false}, {time:"Vie - 6:00pm - 9:00pm", isSelected: false}]
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
            times:[{time:"Vie - 8:00am - 11:00am", isSelected: false}, {time:"Vie - 1:00pm - 5:00pm", isSelected: false}, {time:"Vie - 6:00pm - 9:00pm", isSelected: false}]
        }
    ],
};

const Degrees={
    1:"Software",
    2:"MultiMedia",
    3:"Mecatronics",
    4:"Sound",
    5:"Networking",
}

function GenerateFormView(FormData){
 
    const FormDataContainer = document.createElement("div");
    FormDataContainer.classList.add("form-data-container", "container", "container-fluid", "mt-5", "w-50");
    
    const form = document.createElement("form");
    form.className = "form-data";

    const div1 = document.createElement("div");
    div1.classList.add("form-div", "mb-3");

    const labelName = document.createElement("label");
    labelName.textContent = "Name: ";
    labelName.htmlFor = "name";
    labelName.classList.add("form-label");
    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.name = "name";
    inputName.id = "name";
    inputName.placeholder = "name";
    inputName.classList.add("form-control", "mb-2", "input-group");
    inputName.value = FormData.name;

    div1.appendChild(labelName);
    div1.appendChild(inputName);

    const div2 = document.createElement("div");
    div1.className = "form-div";

    const labelState = document.createElement("label");
    labelState.textContent = "State: ";
    labelState.htmlFor = "state";
    labelState.classList.add("form-label");
    const inputState = document.createElement("input");
    inputState.type = "text";
    inputState.name = "state";
    inputState.id = "state";
    inputState.placeholder = "state";
    inputState.classList.add("form-control", "mb-2", "input-group");
    inputState.value = FormData.state;

    div2.appendChild(labelState);
    div2.appendChild(inputState);

    const div3 = document.createElement("div");
    div1.className = "form-div";

    const labelCity = document.createElement("label");
    labelCity.textContent = "City: ";
    labelCity.htmlFor = "city";
    labelCity.classList.add("form-label");
    const inputCity = document.createElement("input");
    inputCity.type = "text";
    inputCity.name = "city";
    inputCity.id = "city";
    inputCity.placeholder = "city";
    inputCity.classList.add("form-control", "mb-2", "input-group");
    inputCity.value = FormData.city;
    
    div3.appendChild(labelCity);
    div3.appendChild(inputCity);

    const div4 = document.createElement("div");
    div1.className = "form-div";

    const labelSector = document.createElement("label");
    labelSector.textContent = "Sector: ";
    labelSector.htmlFor = "sector";
    labelSector.classList.add("form-label");
    const inputSector = document.createElement("input");
    inputSector.type = "text";
    inputSector.name = "sector";
    inputSector.id = "sector";
    inputSector.placeholder = "sector";
    inputSector.classList.add("form-control", "mb-2", "input-group");
    inputSector.value = FormData.sector;

    div4.appendChild(labelSector);
    div4.appendChild(inputSector);

    const div5 = document.createElement("div");
    div1.className = "form-div";

    const labelStreet = document.createElement("label");
    labelStreet.textContent = "Street: ";
    labelStreet.htmlFor = "street";
    labelStreet.classList.add("form-label");
    const inputStreet = document.createElement("input");
    inputStreet.type = "text";
    inputStreet.name = "street";
    inputStreet.id = "street";
    inputStreet.placeholder = "street";
    inputStreet.classList.add("form-control", "mb-2", "input-group");
    inputStreet.value = FormData.street;

    div5.appendChild(labelStreet);
    div5.appendChild(inputStreet);

    const div6 = document.createElement("div");
    div1.className = "form-div";

    const labelDegree = document.createElement("label");
    labelDegree.textContent = "Degree: ";
    labelDegree.htmlFor = "degree";
    labelDegree.classList.add("form-label");

    const select = document.createElement("select");
    select.id ="degree";
    select.name = "degree";
    select.classList.add("form-select", "mb-2", "input-group");
    
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.selected = FormData.degree === 0;
    select.appendChild(defaultOption);

    let count = 1;
    ["Software", "Multimedia", "Mecatronics", "Sound", "NetWorking"].forEach(op =>{
      const option = document.createElement("option");   
      option.value = count.toString();
      option.textContent = op;
      option.selected = FormData.degree == option.value;
      select.appendChild(option);
      count++;
    })

    div6.appendChild(labelDegree);
    div6.appendChild(select);

    const btnDiv = document.createElement("div");
    btnDiv.style.minWidth = "100%";

    const ClearBtn = document.createElement("button");
    ClearBtn.className = "clear"
    ClearBtn.textContent = "clear"
    ClearBtn.type = "button"
    ClearBtn.classList.add("btn", "btn-outline-info", "w-50")
    ClearBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        ["#name", "#state", "#city", "#sector", "#street", "#degree"].forEach(inputId =>{
            const input = document.querySelector(inputId);
            input.value = "";
            input.style.borderColor = "#dee2e6";
            input.style.borderWidth = "1px";
        })
    })

    const SubmitBtn = document.createElement("button");
    SubmitBtn.className = "submit";
    SubmitBtn.textContent = "submit";
    SubmitBtn.type = "submit";
    SubmitBtn.classList.add("btn", "btn-info", "w-50");
     
    btnDiv.appendChild(ClearBtn);
    btnDiv.appendChild(SubmitBtn);

    form.appendChild(div1);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(div4);
    form.appendChild(div5);
    form.appendChild(div6);
    form.appendChild(btnDiv);

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
    })
    
    FormDataContainer.appendChild(form);
    mainContainer.appendChild(FormDataContainer);

}

function GenerateSubjectSelectionView(degreeSelected){
   if(document.querySelector(".form-data-container") != null) document.querySelector(".form-data-container").remove();
    let subjects = {...DegreeSections};
    subjects = subjects[degreeSelected];

    const newInnerDiv = document.createElement("div");
    newInnerDiv.classList.add("SubjectSelection", "container", "container-fluid", "mt-5", "w-50");

    const goBackToFirstViewLink = document.createElement("p");
    goBackToFirstViewLink.textContent = "Go back to registration";
    goBackToFirstViewLink.style.color = "blue";
    goBackToFirstViewLink.style.textDecoration = "underline";
    goBackToFirstViewLink.style.cursor = "pointer";

    goBackToFirstViewLink.addEventListener("click", (e) =>{
        e.preventDefault();
        newInnerDiv.remove();
        GenerateFormView(FormData);
    });

    newInnerDiv.appendChild(goBackToFirstViewLink);
    const form = document.createElement("form");
    form.classList.add("subjectForm");

    for(let i = 0; i < subjects.length; i++){
        const subjectTitle = document.createElement("p");
        subjectTitle.classList.add("fw-bold","mt-3","text-center");
        subjectTitle.textContent = subjects[i].subjectName;
        form.appendChild(subjectTitle);

        for(let j = 0; j < subjects[i].times.length; j++){
            const radioInputContainer = document.createElement("div");
            radioInputContainer.classList.add("d-flex", "aling-items-center", "justify-content-center", "me-3", "mb-2", "w-100");

            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.value = subjects[i].times[j].time;
            radioInput.name = subjects[i].subjectName;
            radioInput.classList.add("btn-check","text-center");
            radioInput.setAttribute("data-index", j);
            radioInput.id = subjects[i].subjectName + subjects[i].times[j].time;
            radioInput.checked = subjects[i].times[j].isSelected;
            radioInputContainer.appendChild(radioInput);

            const radioLabel = document.createElement("label");
            radioLabel.textContent = subjects[i].times[j].time;
            radioLabel.htmlFor = radioInput.id;
            radioLabel.classList.add("btn", "btn-outline-secondary", "ms-1","text-center", "w-100");
            radioInputContainer.appendChild(radioLabel);
            
            form.appendChild(radioInputContainer);
        }
    }

    const buttonToSubmit = document.createElement("button");
    buttonToSubmit.type ="submit";
    buttonToSubmit.textContent = "Submit";
    buttonToSubmit.classList.add("btn", "btn-primary", "w-100","text-center", "mb-1", "mt-1");

    form.appendChild(buttonToSubmit);
    form.addEventListener("submit", (e) =>{
        let AmountOfSubjectSectionSelected = 0;
        const MinimunAmountOfSectionToBeSelected = 5;
        e.preventDefault();

        for(let i = 0; i< subjects.length; i++){
           const radios = document.getElementsByName(subjects[i].subjectName);

           for(let j = 0; j < radios.length; j++){

            if(!radios[j].checked === true){
                DegreeSections[degreeSelected][i].times[j].isSelected = false; 
                continue;
            }  
            AmountOfSubjectSectionSelected++;
            const selectedIndex = radios[j].getAttribute("data-index");
            DegreeSections[degreeSelected][i].times[selectedIndex].isSelected = true; 
           }
        }
        if(AmountOfSubjectSectionSelected != MinimunAmountOfSectionToBeSelected) {
            alert("All fields are required.");
            return;
        }
        GenerateConfirmView(FormData, subjects);
    })
    newInnerDiv.appendChild(form);

    mainContainer.appendChild(newInnerDiv);
}

function GenerateConfirmView(FormData, subjects){
    document.querySelector(".SubjectSelection").remove();

    const confirmationDiv = document.createElement("div");
    confirmationDiv.classList.add("confirmationView", "container", "container-fluid","w-50", "mt-5");

    const linkContainer = document.createElement("span");
    linkContainer.style.display = "inline";

    const goBackToFirstViewLink = document.createElement("span");
    goBackToFirstViewLink.textContent = "Go back to registration";
    goBackToFirstViewLink.style.color = "blue";
    goBackToFirstViewLink.style.textDecoration = "underline";
    goBackToFirstViewLink.style.cursor = "pointer";
    goBackToFirstViewLink.style.display = "inline";
    goBackToFirstViewLink.style.margin = "0";

    goBackToFirstViewLink.addEventListener("click", (e) =>{
        e.preventDefault();
        confirmationDiv.remove();
        GenerateFormView(FormData);
    });

    linkContainer.appendChild(goBackToFirstViewLink)

    const spaceParragraf = document.createElement("span");
    spaceParragraf.textContent = " > ";
    linkContainer.appendChild(spaceParragraf);

    const goBackToSecondViewLink = document.createElement("span");
    goBackToSecondViewLink.textContent = "Go back to registration";
    goBackToSecondViewLink.style.color = "blue";
    goBackToSecondViewLink.style.textDecoration = "underline";
    goBackToSecondViewLink.style.cursor = "pointer";
    goBackToSecondViewLink.style.display = "inline";
    goBackToSecondViewLink.style.margin = "0";

    goBackToSecondViewLink.addEventListener("click", (e) =>{
        e.preventDefault();
        confirmationDiv.remove();
        GenerateSubjectSelectionView(FormData.degree);
    });
    linkContainer.appendChild(goBackToSecondViewLink);

    const firstViewDataList = document.createElement("ul");
    firstViewDataList.classList.add("list-group");

    for(let data in FormData){
        const firstViewDataListItem = document.createElement("li");
        firstViewDataListItem.classList.add("list-group-item");
        firstViewDataListItem.textContent = `${data.replace(data[0], data[0].toUpperCase())}: `;
        if(data === "degree"){
            firstViewDataListItem.textContent += `${Degrees[FormData[data]]}`;
            firstViewDataList.appendChild(firstViewDataListItem);
            continue;
        }
        firstViewDataListItem.textContent += `${FormData[data]}`;
        firstViewDataList.appendChild(firstViewDataListItem);
    }

    const table = document.createElement("table");
    table.classList.add("table", "table-bordered", "table-hover", "table-responsive", "mt-5") ;

    const thTitle = document.createElement("th");
    thTitle.textContent = "Subjects"
    thTitle.setAttribute("scope", "col")

    const th1 = document.createElement("th");
    th1.textContent = "Monday";
    th1.setAttribute("scope", "col")

    const th2 = document.createElement("th");
    th2.textContent = "Tuesday";
    th2.setAttribute("scope", "col")

    const th3 = document.createElement("th");
    th3.textContent = "Wednesday";
    th3.setAttribute("scope", "col")

    const th4 = document.createElement("th");
    th4.textContent = "Thursday";
    th4.setAttribute("scope", "col")

    const th5 = document.createElement("th");
    th5.textContent = "Friday";
    th5.setAttribute("scope", "col")

    const tHeader = document.createElement("tr");
   
    tHeader.appendChild(thTitle)
    tHeader.appendChild(th1)
    tHeader.appendChild(th2)
    tHeader.appendChild(th3)
    tHeader.appendChild(th4)
    tHeader.appendChild(th5)
    table.appendChild(tHeader);

    const days = {
        "Lun": 1,
        "Mar":2,
        "Mier": 3,
        "Ju":4,
        "Vie": 5
    }

    let selectedObjects = [];

    for(let i = 0; i<  subjects.length ; i++){
        for(let j = 0; j< subjects[i].times.length; j++){
            if (subjects[i].times[j].isSelected === true) {
                selectedObjects.push({name: subjects[i].subjectName, time: subjects[i].times[j].time})
            }
        }
    }

    for(let i = 0; i<  selectedObjects.length ; i++){
        const tSection = document.createElement("tr");

        const tdSubject = document.createElement("th");
        tdSubject.setAttribute("scope", "row")

        tdSubject.textContent = selectedObjects[i].name;

        tSection.appendChild(tdSubject);

        for(let j = 1; j <= 5; j++){
            
         if (days[selectedObjects[i].time.split(" - ")[0]] === j) {
            const tdTime = document.createElement("td");

            tdTime.textContent = selectedObjects[i].time;

            tSection.appendChild(tdTime);

            continue;

         }
         const tdEmpty = document.createElement("td");

         tSection.appendChild(tdEmpty);
            
        }

        table.appendChild(tSection);
    }

    const SubmitBtn = document.createElement("button");
    SubmitBtn.textContent = "Submit";
    SubmitBtn.classList.add("btn", "btn-primary", "w-100", "mt-1")
    SubmitBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        const AmountOfDegrees = ()=> {
            let count = 0;
            for( let degree in Degrees){
                count++;
            }
            return count;
        }
        if(!confirm("Are you sure you whant to save this info?")) return;
        confirmationDiv.remove();
    
        FormData.name = "";
        FormData.state = "";
        FormData.city = "";
        FormData.sector = "";
        FormData.street = "";
        FormData.degree = 0;
        
        for(let i = 1; i <= AmountOfDegrees(); i++){
            for(let j = 0; j< DegreeSections[i].length; j++){
                DegreeSections[i][j].times.forEach(element => {
                    element.isSelected = false;
                });
            } 
        }

        GenerateFormView(FormData);
    });
    
    confirmationDiv.appendChild(linkContainer);
    confirmationDiv.appendChild(firstViewDataList);
    confirmationDiv.appendChild(table);
    confirmationDiv.appendChild(SubmitBtn);
    mainContainer.appendChild(confirmationDiv);

}

GenerateFormView(FormData);

function validate(input){
    if(input.value === "" || input.value === null || input.value === " "){
        input.style.borderColor = "red";
        input.style.borderWidth = "2px";
        return false;
    }
    input.style.borderColor = "green";
    input.style.borderWidth = "2px";
    return true;
}