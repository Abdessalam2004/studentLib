// Global Variables

const listCours = document.querySelector('.listCours');
const listTd = document.querySelector('.listTd');
const coursSelector = document.querySelector('.CoursSelector');
const tdSelector = document.querySelector('.TdSelector');
const singupForm = document.getElementById('singupForm');

let Users = localStorage.getItem("Users");
if (!Users) {
    Users = {};
} else {
    Users = JSON.parse(Users);
}


document.addEventListener('click',()=>{
    listTd.style.display = 'none';
    listCours.style.display = 'none';
})

coursSelector.addEventListener('click',(event)=>{
    event.stopPropagation();
    listCours.style.display = listCours.style.display == 'block'?'none':'block';
})

tdSelector.addEventListener('click',(event)=>{
    event.stopPropagation();
    listTd.style.display = listTd.style.display == 'block'?'none':'block';
})

singupForm.onsubmit = function (event){
    event.preventDefault();
    let form = new FormData(singupForm);
    Name = form.get('Nom');
    FamilyName = form.get('Prénom');
    Email = form.get('Email');
    Password = form.get('Password');
    Confirm = form.get('Confirm');
    if(Password === Confirm){
        Users[Email] = {
            'Name':Name,
            'FamilyName':FamilyName,
            'Password':Password
        }
        localStorage.setItem("Users",JSON.stringify(Users));
        alert('Votre Compte à été creer avec succés');
        location.href = 'login.html';
    }
    else
        alert("Veuillez entrer le même mot de passe");
};


function changefavori(){ 
    if (document.getElementById("favori").getAttribute('src') == "../images/exmaplePage/yellowStar.png"){
        document.getElementById("favori").setAttribute('src',"../images/exmaplePage/yellowStar_filled.png");
    }
    else{
        document.getElementById("favori").setAttribute('src',"../images/exmaplePage/yellowStar.png");
    }   
}
