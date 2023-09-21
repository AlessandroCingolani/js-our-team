const div = document.querySelector('.container')

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
  <div class ='card'>
  ${member.imgProfile} ${member.name} ${member.role}
  </div>`
}


console.log(ourTeam);