// Preset values
const FROGS = 3;

//1.1 - Set up the track

for(let count=1; count<=FROGS; count++){
let lane = document.createElement("li");
lane.id = `lane-${count}`

let span = document.createElement("span");
span.innerText =`${count}` 
lane.appendChild(span);
document.getElementById("track").appendChild(lane)
}


//1.2 - Call in the frogs!

let racers = []; 
console.log(racers)

for(let frog=0; frog<FROGS; frog++){
    racers.push(frogstable[frog])
}




//1.3 - Line 'em up!

// const frog1 = document.createElement("span");
// frog1.id = "frog.1"
// const frogLane1 = document.getElementById("lane.1");
// frogLane1.appendChild(frog1);
// frog1.innerText= frogstable[0].name + frogstable[0] .number;

// document.getElementById("frog.1").style.backgroundColor="blue";


racers.forEach((element, index)=>{
 const frogLane = document.getElementById(`lane-${index+1}`)
 const frog= document.createElement("span");
frog.innerText =`${element.number}`;
frogLane.appendChild(frog);
frog.style.backgroundColor=element.color;

//1.4
frog.classList.add("frog");
const frogName = document.createElement("span");
frogName.innerHTML = element.name;
frogLane.appendChild(frogName);
frogName.classList.add("frog-name")

//1.5 - Track progress
racers[index].progress = 0
racers[index].lane=`lane-${index+1}`


});



// 1.4 - Add Styling
let linkCss = document.createElement("link");
linkCss.innerHTML = '<link rel="stylesheet" href="./assets/styles.css" />' ;
document.querySelector("head").appendChild(linkCss);



//Exercise 1.6 - Make 'em hop!

racers.forEach(racingFrog);

function racingFrog(racer) {
    const trackWidth = track.offsetWidth; 
console.log(racer)
    const hop = setInterval(function () {

        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
          
        racer.progress += hopLength
        
        
        
        
        // console.log(`${racer.name} is at ${racer.progress}`)
        
        if(racer.progress >= 100){
            racer.progress = 100
            clearInterval(hop);
            console.log(`${racer.name} has reached the end! `)
            
        }
        
        document.querySelector(`#${racer.lane} .frog`).style.left= `${racer.progress}%`
    }, 1000);





   
       

  }





















