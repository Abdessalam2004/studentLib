// Global Variables

const listCours = document.querySelector('.listCours');
const listTd = document.querySelector('.listTd');
const CoursSelector = document.querySelector('.CoursSelector');
const TdSelector = document.querySelector('.TdSelector');


document.addEventListener('click',()=>{
    listTd.style.display = 'none';
    listCours.style.display = 'none';
})

CoursSelector.addEventListener('click',(event)=>{
    event.stopPropagation();
    listCours.style.display = listCours.style.display == 'block'?'none':'block';
})

TdSelector.addEventListener('click',(event)=>{
    event.stopPropagation();
    listTd.style.display = listTd.style.display == 'block'?'none':'block';
})