const services=[
    {
        id:1,
        title:"Problemas digestivos",
        descripton:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."

    },
    {
        id:2,
        title:"Saúde Hormonal",
        descripton:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."

    },
    {
        id:3,
        title:"Bem-estar mental",
        descripton:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."

    },
    {
        id:4,
        title:"Cuidados Pediátricos",
        descripton:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."

    },
    {
        id:5,
        title:"Autoimune e Inflamação",
        descripton:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."

    },
    {
        id:6,
        title:"Saúde do Coração",
        descripton:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."

    },
]
// generate service card
function generateServiceHtml (service){
return `
<div class="bg-white shadow-lg hover:scale-105 transition   dura cursor rounded-lg overflow-hidden"> 
 <div class="p-6 text-left">
 <img src="./images/service-icon.png" alt="service icon">
 <h3 class="text-2xlfont-semibold my-4 "> ${service.title}</h3>
 <p class=" text-gray-700 mb-4"> ${service.descripton}</p>
 </div>
</div>`
}
const serviceContainer=document.getElementById('service-container');

serviceContainer.innerHTML=services.map((service)=>generateServiceHtml(service) ).join('')
