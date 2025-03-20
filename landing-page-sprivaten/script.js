// const button = document.getElementById('submit-appointmen');

//     const handleClick = () => {
//         console.log('button clicked');
//     }

//     button.addEventListener('click', handleClick);

// // function handleClick (){
// //     console.log('button clicked');
// // }

// const nameInput = document.getElementById('nameInput');
// const form = document.getElementById('appointment-form')[0];
// const handleSubmit = (event) => { 
//     //Prevent form submission
//     event.preventDefault();

// //aici putem scrie orice js care convine
// //     const name = nameInput.value.trim();
// //     if (name === ""){
// //         alert('Empty input');
// //     }
// //     if (name.length < 20){
// //          nameInput.style.borderColor = 'red';
// //      }
//  }

// form.addEventListener('submit', handleSubmit);
const loadLanguage = async (lang) => {
    // fetch("languages.json")
    // .then(res => res.json)
    // .then(data => console.log)
    const response = await fetch("languages.json");
    const data = await response.json();
    console.log(data[lang])
    return data[lang]; 
}

const switchLanguage = (lang) =>{
    // ternary operator
    //const selectedLanguage = 'english' ? 'english' : 'romanian'
    loadLanguage(lang)
    // .then(langData => updateContent(langData))
}

switchLanguage('english');