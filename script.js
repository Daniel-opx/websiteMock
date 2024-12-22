


let navButtons = document.querySelectorAll("div>.nav_items")
            let navigationBar = document.querySelector(".nav");
            function ChooseButton(e){
                for(let i = 0; i < navButtons.length; i++)
            {
                navButtons[i].classList.remove("active");
            }
                e.currentTarget.classList.add("active");
            }
            
            navButtons.forEach((arg) => arg.addEventListener("click", ChooseButton))

let gridContainer = document.querySelector(".grid_container");

let numOfGridElements = document.querySelectorAll(".grid_container>*").length;

function AddGridElement()
{
    
    console.log(gridContainer)
    numOfGridElements = numOfGridElements +1
    let txt=prompt("enter text for grid element");
    let newGridChild = document.createElement("div");
    newGridChild.innerHTML = txt;
    newGridChild.classList.add("grid_element");
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${numOfGridElements}, 1fr)`)
    gridContainer.appendChild(newGridChild);
}
function RemoveGridElement()
{

    numOfGridElements =numOfGridElements != 0? numOfGridElements - 1:numOfGridElements;
    console.log(gridContainer.lastChild)
    let lastGridChild = document.querySelector(".grid_container>.grid_element:last-child")
    if(lastGridChild != "" && lastGridChild != null)
    {
        gridContainer.removeChild(lastGridChild)
    }
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${numOfGridElements}, 1fr)`)
}

            