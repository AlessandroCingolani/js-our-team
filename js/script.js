const div = document.querySelector('.row')

// Create array with objects

const ourTeam = [
  {
    name:'Wayne Barnett',
    role:'Founder & CEO',
    imgProfile:'wayne-barnett-founder-ceo.jpg'
  },
  {
    name:'Angela Caroll',
    role:'Chief Editor',
    imgProfile:'angela-caroll-chief-editor.jpg'
  },
  {
    name:'Walter Gordon',
    role:'Office Manager',
    imgProfile:'walter-gordon-office-manager.jpg'
  },
  {
    name:'Angela Lopez',
    role:'Social Media Manager',
    imgProfile:'angela-lopez-social-media-manager.jpg'
  },
  {
    name:'Scott Estrada',
    role:'Developer',
    imgProfile:'scott-estrada-developer.jpg'
  },
  {
    name:'Barbara Ramos',
    role:'Graphic Designer',
    imgProfile:'barbara-ramos-graphic-designer.jpg'
  }
];

// cicle for of 
for(let member of ourTeam){
  console.log(member.name);
  console.log(member.role);
  console.log(member.imgProfile);
  console.log('================');
  div.innerHTML += `
  <div class ='col-4'>
    <div class ='card mb-4'>
      <img src="img/${member.imgProfile}"> 
      <h5 class ='pt-3'>${member.name}</h5> 
      <p>${member.role}</p> 
    </div>
  </div>`
}
