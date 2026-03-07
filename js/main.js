
let allIssues= []




const loadIssues=()=>{

    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then((res)=>res.json())
    .then((data)=> {

        allIssues = data.data || []
        displayIssues(allIssues)
    })
}

const displayIssues=(issues)=>{

    const cardSection=document.getElementById('card-section')

    

    cardSection.innerHTML='';

    const totalIssues=document.getElementById('total-issues')
    totalIssues.innerText=issues.length;

    for(const issue of issues  )
    {

        const statusImg= issue.status==='open'? './assets/Open-Status.png' : './assets/Closed- Status .png'


        let labelsTag=''

        if(issue.labels && issue.labels.length>0)
        {
            for(let label of issue.labels)
            {
                labelsTag+=`<p class="bg-gray-200 bg-yellow-200 rounded">${label}</p>`
            }
        }


        else{
            labelsTag='<p class="text-gray-400">No labels</p>'
        }

       
        const card=document.createElement('div')
const borderTop= issue.status== 'closed'?'border-t-2 border-t-purple-500' :'border-t-2 border-t-green-400'

        card.innerHTML=`
        
         <div id="card" class="card border border-black p-6 h-full ${borderTop }">

            <div class="flex justify-between mb-4">
                <img src="${statusImg}" alt="">

                <h2 id="priority" >${issue.priority}</h2>
            </div>

            <div class="mb-4">
                <h2  class="cart-title text-xl font-bold">${issue.title}</h2>


                <p class="card-discription text-gray-400 line-clamp-3">${issue.description}</p>
            </div>

            <div id="Labels" class="flex  gap-4">
               ${labelsTag}
            </div>

            <div class="text-gray-400 mt-2" >

                <p>#1 By ${issue.author}</p>
                <p id="date">${issue.createdAt}</p>

            </div>

        </div>
        
        
        
        `

        cardSection.append(card)
    }
}

const showFilteredIssues = (status) => {
    let filteredIssues = allIssues

    if (status==='open') {
        filteredIssues =allIssues.filter(issue => issue.status===  'open')
    }
    else if (status==='closed') {
        filteredIssues=allIssues.filter(issue => issue.status==='closed')
    }

    displayIssues(filteredIssues)
    
  
};

const activeBtn= (clickedBtn)=>{
   //button heilight

    const buttons= document.querySelectorAll('#btn-container button')

    buttons.forEach(btn=>{

        btn.classList.remove('btn-primary')
        btn.classList.add('btn-outline')
    })

    buttons[clickedBtn].classList.add('btn-primary')
    buttons[clickedBtn].classList.remove('btn-outline')

}


 const buttons= document.querySelectorAll('#btn-container button')

buttons[0].addEventListener('click', () => {

    showFilteredIssues('all')
    activeBtn(0)
});

buttons[1].addEventListener('click', ()=> {

 showFilteredIssues('open')
  activeBtn(1)

})
buttons[2].addEventListener('click',()=>{

showFilteredIssues('closed')

 activeBtn(2)

});

    

loadIssues();