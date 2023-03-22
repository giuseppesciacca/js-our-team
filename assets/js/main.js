/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
nome, ruolo, foto
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede */

//array di oggetti per rappresentare i membri del team.
const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    }
];

const rowEl = document.querySelector('.row');

/* Stampare su console per ogni membro del team le informazioni */
for (let i = 0; i < ourTeam.length; i++) {  //scorro attraverso l'array
    const member = ourTeam[i];
    //Stampare le informazioni su DOM in card
    const cardMarkup = `
                <div class="col">
                    <div class="card">
                        <img src="./assets/img/${member.photo}" alt="${member.name}">
                        <div class="card-body">
                            <h5 class="card-title">${member.name}</h5>
                            <p class="card-text">${member.role}</p>
                        </div>
                    </div>
                </div>`;
    rowEl.innerHTML += cardMarkup;

    for (const key in member) { //per ogni membro del Team mostro le proprietà
        console.log(key, member[key]); //stampo in console
    }
}