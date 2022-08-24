let eleves = []
let listEleves = JSON.parse(localStorage.getItem('eleves')) 



function rest() {
    event.preventDefault();
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;
    let lieu = document.getElementById("lieu").value;
    let classe = document.getElementById("classe").value;
    let genre = document.getElementById("genre").value;
    let tnom = document.getElementById("tnom").value;
    let tprenom = document.getElementById("tprenom").value;
    let tprofession = document.getElementById("tprofession").value;
    let contact = document.getElementById("tel").value;
    let email = document.getElementById("mail").value;

    let eleve = {
        nom :nom ,
        prenom : prenom,
        age: age,
        lieu:lieu,
        classe:classe,
        genre: genre,
        tnom :tnom,
        tprenom:tprenom,
        tprofession:tprofession,
        contact:contact,
        email:email,
    };
    eleves.push(eleve);

    // localStorage.listEleves = ('eleves', JSON.stringify(eleves));
    localStorage.setItem('eleves', JSON.stringify(eleves))
    
    let tableEleve = document.getElementById("eleve");
    tableEleve.innerHTML += `
    <tr>
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${age}</td>
        <td>${lieu}</td>
        <td>${classe}</td>
        <td>${genre}</td>
        <td>${tnom}</td>
        <td>${tprenom}</td>
        <td>${tprofession}</td>
        <td>${contact}</td>
        <td>${email}</td>
        
    </tr>`;
    
}


function init (){
  for (let index = 0; index < listEleves.length; index++) {
    let tableau = document.getElementById('eleve')

 
tableau.innerHTML += `
<tr>
   <td>${listEleves[index].nom}</td>
   <td>${listEleves[index].prenom}</td>
   <td>${listEleves[index].age}</td>
    <td>${listEleves[index].lieu}</td>
   <td>${listEleves[index].classe}</td>
   <td>${listEleves[index].genre}</td>
  <td>${listEleves[index].tnom}</td>
   <td>${listEleves[index].tprenom}</td>
   <td>${listEleves[index].tprofession}</td>
   <td>${listEleves[index].contact}</td>
   <td>${listEleves[index].email}</td>
</tr>
`
   
}}


init ()
