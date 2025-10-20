let image     = document.getElementById("person-img")
let name      = document.getElementById("person-name")
let prevButton = document.getElementById("prev-btn")
let nxtButton  = document.getElementById("next-btn")
let descButton = document.getElementById("desc-btn")    
let descripTion= document.getElementById("member-desc")



const AllMembers = [
    {
        name: "Nir the Nit(Commander)",
        img: "nit.jpg",
        desc:`So, this guy is the commander of Gyatt Society. Yeah, you read it right, this gol alu is the commander, it’s no joke. Whenever you make any joke about his weight, he’ll be like, “Bro, I have lost 1 kg of my weight, my BMI is 24,” like bro doesn’t have 20 kgs of weight in each of his cheeks. And this gol alu is so rich that he pays the full fees of his private tuition but spends the entire batch time playing games in Gamers Arena. And how can we forget about his biggest pride, Reeldior (bro thinks of himself as very tough by watching reels the day before the exam).`



    },
    {
       
        name: "Ahnaf the Ahanap(VP)",
        img: "Ahnaf.jpg",
        desc: ` Ah.. yes.. this pervy guy here is the vice president of Gyatt Society and one of the founding members. Didn't want to talk about him but yeah had no other choice. Anyways this guy was named Ahanap by and societily we know him as ahanap. A wannabe cool guy, who thinks he has da rizz. No wonder his thoughts got him a Joke D'or on 2025. People still talk about how he fell on the ground while the "Dor lagse" run.. LMAO.`

    },
    {
        
        name: "Pranto The Lil Sheikh",
        img: "pranto.png",
        desc: `So, this is the Sheikh of our society. If you see his pfp, it might not look like it but he is. But I need to warn you about one thing, NEVER MESS WITH HIM because he will literally print you. Though there are many rumors about him being a vondo sheikh, giringibaj, etc., there are also many good traits of him like he is a calculator, printer, and of course, the topper of the society.`
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
       
        name: "Minhaj The Kalua",
        img: "minhaj.png",
        desc:`Here is the footballer guy of our society. Yeah, the biggest fan of Ronaldo after Speed.
Like bro, if you just say the word “football” in front of him, he will instantly forget about everything else going on in the world. And this tall nigga’s legendary pic “Ass ta shei to” is also the pfp of our IG group. He is also a Reeldior superstar, I mean a reel addict who will spam random memes in the middle of a serious convo.`
    },
    {
       
        name: "Mahdi The Dihh",
        img: "mahdi.png",
        desc:`Mahdihh. The dihh in his name stands for his small black cute dick. He's a tsundere guy who thinks he's a nonchalant shit.`
    },
    {
        name: "Tasin The Sauce",
        img: "tasin.png",
        desc:`The mascot of Gyatt Society. He has GYATTT!!! Though it reeks bad, ewww. He was once a innocent and good guy who used to have periods on a regular basis. But now he tryna play cool. ;-; But anyways GYATTTT!!!`
    },
    {
       name: "The Vodka Abid",
        img: "vodka.jpg",    
        desc:`Everyone, here we present to you the selev of Ms. Jhora — sorry, I mean bf of Ms. Jhora, the Vodka Abid. You might be wondering why we are calling him Vodka, though he is not that fat, he is Vodka, he just is.
              And when we are talking about this jhoraitta, I mean jhograitta guy,  how can we forget about his biggest trait: “Challuness.”
              Yeah, he no doubt is the challuest guy in the society.`

    }, 
       
    {
        name: "Said The Backshot",
        img: "said.png",    
        desc:`Ah, ladies and gentlemen, gather around, for today I present to you the product of Ahanap and Suiii, the one and only Said. A little naughty, little good, below average guy who likes to take it in the back. We still remember that moment at metro station when he almost got slapped by an aunty, LOL(be more careful son.) But bro is kinda cute tho. Literally a bbg.`
    },
    {
         name: "Araf The Crafty", 
        img: "araf.png",
        desc:`Araf Sensei is one of the ogest and loyal member of Gyatt Society. Have always been useful in the society. Gyatt Society is proud of you.`
    },  
    {
        name: "Fatin the fat",
        img: "fatin.jpg",
        desc:`The mental patients from Pabna and fatin has same traits but only difference is that fatin is in the Gyatt Society.
         Bro's a wannabe cool guy who is head over heels for a gurl who has a bf.
         He used to be bullied by everyone so our great commander took him under his wings and let him live a happy life.
          So that's pretty much about fatin`
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
        desc:`Yeah, the Lomba Abid aka the gyani wannabe guy. Bro will be saying, “Man, nowadays I am studying 24/7,” and the very next minute you’ll see him texting the 69th girl in his inbox. He is also known for his rivalry against the Challu. Though he was once a member of the society, he bijoyed us in the great battle against the L Society. But after that, he still hangs out with us, so he is a side character.`



    },
    {
       
        name: "Raiyan the Shingara",
        img: "raiyan.jpeg",
        desc: `Here comes the shingara guy. Oops, I mean Raiyan. Yeah, the inventor of the legendary INIK! PINIKKKKKK! Also the most confident liar one. Oh, how can we forget that he is also the fake don of the society. Now, you might be wondering why I called him shingara at first yeah, because whenever we are talking about Mahbub Sir, who is famous for his cruelty, he’ll be like, “Bro, just shout shingara in front of him, he’ll be scared to death.”
Bro says all this nonsense without any logic. Though he is not an official member of the society, he hangs out with us sometimes, so he is a side character.`

    },
    {
        
        name: "The Helicopter",
        img: "helec.jpeg",
        desc: `The Helicopter which is the Bell-407 patrols everyday and keeps track of Gyatt Society's future plans and more.`
    },
    {
       
        name: "Devashish the Don",
        img: "devasish.jpeg",
        desc:`One of the main antagonists of Gyatt Society. He is accused of being the pilot of The Helicopter which patrols everyday and keeps track of Gyatt Society. Executives consider Devashish as one of the greatest threats to Gyatt Society.`},
    {
       
        name: "The Diddy Dehan",
        img: "dehan.png",
        desc:`Looks like its the diddys turn . You may think that we call him diddy just for fun but unfortunately you are wrong its related to a real life incident lets talk about it in the end.
Now lets take a look at some facts about this creature like he is a top gambler who got his another nickname notcoin because he lost all his income from the notcoin airdrop by doing gambling .
So , lets comeback to from where he got his diddy name so one day KNOCK!!! KNOCK!!! whos there? Its FBIIIIIII!!!!! .`
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
