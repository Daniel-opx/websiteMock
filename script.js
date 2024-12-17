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
            