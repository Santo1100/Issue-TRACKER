
let allIssues= [];




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
        const card=document.createElement('div')

        card.innerHTML=`
        
         <div id="card" class="card border border-black p-6 h-full">

            <div class="flex justify-between mb-4">
                <img src="./assets/Open-Status.png" alt="">

                <h2 id="priority" >${issue.priority}</h2>
            </div>

            <div class="mb-4">
                <h2  class="cart-title text-xl font-bold">${issue.title}</h2>


                <p class="card-discription text-gray-400 line-clamp-3">${issue.description}</p>
            </div>

            <div id="Level" class="flex  gap-4">
                <p class="bg-red-400">BUG</p>
                <p class="bg-yellow-200">help wanted</p>
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
    else if (status=== 'closed') {
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