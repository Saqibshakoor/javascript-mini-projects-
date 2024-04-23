const btn=document.getElementById("btn")
const main=document.getElementById("main")
btn.addEventListener("click",function()
{
      addNode()
})


const addNode=()=>
{
  const note=document.createElement("div")
  note.classList.add("note")
  note.innerHTML=`
  <div class="notes">

  <div class="tool">
   
   <i class="fa-solid fa-trash"></i>
   <i class="fas fa-save"></i>

  </div>
  <textarea name="" id="" >ww</textarea>
</div>
  
  `;
  main.appendChild(note)
}
