// -----------This is a DOM drill which creates black squares that float right and display the id ----------

// ╔═══╗░╔╗╔═══╦═══╦╗░░╔╦═══╗
// ║╔═╗║░║║║╔═╗║╔═╗║╚╗╔╝║╔═╗║
// ║╚═╝║░║║║╚═╝║║░║╠╗║║╔╣║░║║
// ║╔══╬╗║║║╔══╣╚═╝║║╚╝║║║░║║
// ║║░░║╚╝║║║░░║╔═╗║╚╗╔╝║╚═╝║
// ╚╝░░╚══╝╚╝░░╚╝░╚╝░╚╝░╚═══╝



// This is a 'content loader' which reads the page before any script executes
document.addEventListener('DOMContentLoaded', function () {

    // setInterval(function (){
    //     let r = Math.floor(Math.random() * 256);
    //     let g = Math.floor(Math.random() * 256);
    //     let b = Math.floor(Math.random() * 256);
    //     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    // }, 100);
    // This creates a button
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);

    //This creats manin container where all div will be nested
    let id = 0;
    let mainContainer = document.createElement('div');
    mainContainer.className = ('myContainer');
    document.body.appendChild(mainContainer);

    // click funtion to display a black square
    button.addEventListener('click', function () {

        // This is where the black square is created with unique id which increments by one with each click
        let div = document.createElement('div');
        div.className = ('square');
        div.id = ++id;
        mainContainer.appendChild(div);
        let idText = document.createTextNode(id);

        //Displays the id number of the square
        div.addEventListener('mouseover', function () {
            div.appendChild(idText);

        });
        //Hides the id number of the squqare
        div.addEventListener('mouseout', function () {
            div.removeChild(idText);
        });

        //Gives a random color to the square
        div.addEventListener('click', function () {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        });
        //Removes one square depending if 'id' is odd or even
        div.addEventListener('dblclick', function () {
            if (div.id % 2 === 0){
                if (div.nextSibling===null) {
                    alert('You Can\t do that')
                } else {
                    mainContainer.removeChild(div.nextSibling)
                }
            } else { 
                if (div.previousSibling === null) {
                    alert('You Can\'t do that')
                } else {
                    mainContainer.removeChild(div.previousSibling)    
                }
            } 
        });
    });
});