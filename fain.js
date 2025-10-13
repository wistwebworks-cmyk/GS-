let image     = document.getElementById("person-img")
let name      = document.getElementById("person-name")
let prevButton = document.getElementById("prev-btn")
let nxtButton  = document.getElementById("next-btn")
let descButton = document.getElementById("desc-btn")    
let descripTion= document.getElementById("member-desc")



const AllMembers = [
    {
        name: "Nit The golalu",
        img: "nit.png",
        desc:``



    },
    {
       
        name: "Ahnaf the JoyBoy(VP)",
        img: "Ahnaf.jpg",
        desc: ` Ah.. yes.. this pervy guy here is the vice president of Gyatt Society and one of the founding members. Didn't want to talk about him but yeah had no other choice. Anyways this guy was named Ahanap by and societily we know him as ahanap. A wannabe cool guy, who thinks he has da rizz. No wonder his thoughts got him a Joke D'or on 2025. People still talk about how he fell on the ground while the "Dor lagse" run.. LMAO.`

    },
    {
        
        name: "Pranto The Lil Sheikh",
        img: "pranto.png",
        desc: `klk lehum`
    },
    {
       
        name: "Jimmy the Alien",
        img: "jimmy.png",
        desc:`OMG, it's time for jimmy?? Oh man. Lean in and lend me your ears, this guy dangerous. 
                Words about him shouldn't go outside.   
                Jim also known as jimmy is a guy who formerly used to take backshot from Gyatt Society's one of the main antagonist Devashish.
                 Though, he replaced Devashish with Reza as devashish couldn't keep up.
                  He's also the guy who gets bullied the most in the group and so.. he throws some elixir (for him) called pussy juice.
                   And his "ThuThu" killer technique is still feared by many.
                   Well, they say everyone has a weakness for him it's Chemistry. 
                Never take the name of chemistry in front of him, otherwise you would be covered in dung. Eww`},
    {
       
        name: "Minhaj The Great",
        img: "minhaj.png",
        desc:``
    },
    {
       
        name: "Mahdi The Legend",
        img: "mahdi.png",
        desc:``
    },
    {
        name: "Tasin The Boss",
        img: "tasin.png",
        desc:``
    },
    {
       name: "The Vodka Abid",
        img: "vodka.jpg",    
        desc:``

    }, 
       
    {
        name: "Said The Said",
        img: "said.png",    
        desc:``
    },
    {
         name: "Araf The Coder", 
        img: "araf.png",
        desc:``
    },  
    {
        name: "Fatin the fat",
        img: "fatin.jpg",
        desc:``
    }
        
               
]
    let index = 0;
    function loadmember(i){

    const member = AllMembers[i];
    image.src = member.img;
    name.innerText = member.name;
    
     descripTion.innerText = member.desc;
    descripTion.style.display = "none"; // Hide by default using JS
    }


    nxtButton.onclick = () => {
  index = (index + 1) % AllMembers.length;
  loadmember(index);
};
prevButton.onclick = () => {
  index = (index - 1) % AllMembers.length;
loadmember(index);
};
descButton.onclick = () => {
   if (descripTion.style.display === "none") {
        descripTion.style.display = "block";
    } else {
        descripTion.style.display = "none";
    }
};

loadmember(index);

// side chracters

let sideimage     = document.getElementById("Sideperson-img")
let sidename      = document.getElementById("Sideperson-name")
let sideprevButton = document.getElementById("Sideprev-btn")
let sidenxtButton  = document.getElementById("Sidenext-btn")
let sidedescButton = document.getElementById("Sidedesc-btn")    
let sidedescripTion= document.getElementById("Sidemember-desc")



const AllSideMembers = [
    {
        name: "The Lomba Abid",
        img: "lomba.png",
        desc:``



    },
    {
       
        name: "Raiyan the Shingara",
        img: "raiyan.jpeg",
        desc: ` `

    },
    {
        
        name: "The Helecopter",
        img: "helec.jpeg",
        desc: ``
    },
    {
       
        name: "Devasish the Don",
        img: "devasish.jpeg",
        desc:``},
    {
       
        name: "The Diddy Dehan",
        img: "dehan.png",
        desc:``
    },
   
        
               
]
    let sideindex = 0;
    function loadSidemember(i){

    const sidemember = AllSideMembers[i];
    sideimage.src = sidemember.img;
    sidename.innerText = sidemember.name;
    
     sidedescripTion.innerText = sidemember.desc;
    sidedescripTion.style.display = "none"; // Hide by default using JS
    }


    sidenxtButton.onclick = () => {
  sideindex = (sideindex + 1) % AllSideMembers.length;
  loadSidemember(sideindex);
};
sideprevButton.onclick = () => {
  sideindex = (sideindex - 1) % AllSideMembers.length;
loadSidemember(sideindex);
};
sidedescButton.onclick = () => {
   if (sidedescripTion.style.display === "none") {
        sidedescripTion.style.display = "block";
    } else {
        sidedescripTion.style.display = "none";
    }
};

loadSidemember(sideindex);
