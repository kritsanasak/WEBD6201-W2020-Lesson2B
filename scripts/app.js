"use strict";
// IIFE - Immediately Invoked Function Expression
// Mean? -> anonymous self-execute function
(function(){
    let h2;
    // event handler
    function MouseOver(){
        h2.style.color = "green";
        h2.style.fontSize = "48px";
    }
    function MouseOut(){
        h2.style.color = "black";
        h2.style.fontSize = "32px";
    }
    function start(){
        
        console.log("%cApp started...", "color:blue; font-size:20px");
        // get a reference to the content area
        let contentArea = document.getElementById('contentArea');

        // create a h2 element
        h2 = document.createElement("h2");

        // add a class attribute to h2 element
        h2.setAttribute("class", "display-6");

        // set node text
        h2.textContent = "Second Heading";
        
        // append the new node to the contentArea
        contentArea.appendChild(h2);

        h2.addEventListener("click", function(){
            h2.style.color = (h2.style.color == "blue") ? "black": "blue";
            arrowFunc();
        });

        h2.addEventListener("mouseover", MouseOver);
        h2.addEventListener("mouseout", MouseOut);
        
        // h2.addEventListener("mouseover", function(){
        //     h2.style.color = "green";
        // });

        // h2.addEventListener("mouseout", () => {
        //     h2.style.color = "black";
        // });

        // Arrow function
        let main = function (){
            console.log("Arrow function can replace word function with () and => ");
        }

        let arrowFunc = () => {
            console.log("This code write with arrow function style. funcName = () => {}")
        }


    }
    
    window.addEventListener("load",start);
})();