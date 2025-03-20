const wPictures = [
    "/8/8f/Stormterror_Icon.png",
    "/a/a4/Andrius_Icon.png",
    "/d/d9/Childe_P3_Icon.png",
    "/3/35/Azhdaha_Icon.png",
    "/8/8f/La_Signora_Icon.png",
    "/1/1d/Magatsu_Mitake_Narukami_no_Mikoto_Icon.png",
    "/6/6a/Everlasting_Lord_of_Arcane_Wisdom_Icon.png",
    "/e/e2/Guardian_of_Apep%27s_Oasis_Icon.png",
    "/4/47/All-Devouring_Narwhal_Icon.png",
    "/a/af/The_Knave_Icon.png",
    "/7/7e/Lord_of_Eroded_Primal_Fire_Icon.png"
];

const wNames = [
    "Stormterror Dvalin",
    "Andrius",
    "Childe",
    "Azdaha",
    "La Signora",
    "Magatsu Mitake Narukami no Mikoto",
    "Everlasting Lord of Arcane Wisdom",
    "Guardian of Apep's Oasis",
    "All-Devouring Narwhal",
    "The Knave",
    "Lord of Eroded Primal Fire"
];

const dPictures = [
    "/b/bf/Item_Dvalin%27s_Plume.png",
    "/a/a8/Item_Dvalin%27s_Claw.png",
    "/0/07/Item_Dvalin%27s_Sigh.png",
    "/6/66/Item_Tail_of_Boreas.png",
    "/d/d6/Item_Ring_of_Boreas.png",
    "/8/81/Item_Spirit_Locket_of_Boreas.png",
    "/1/1c/Item_Tusk_of_Monoceros_Caeli.png",
    "/4/48/Item_Shard_of_a_Foul_Legacy.png",
    "/5/5d/Item_Shadow_of_the_Warrior.png",
    "/0/02/Item_Dragon_Lord%27s_Crown.png",
    "/b/b1/Item_Bloodjade_Branch.png",
    "/e/e1/Item_Gilded_Scale.png",
    "/4/44/Item_Molten_Moment.png",
    "/1/16/Item_Hellfire_Butterfly.png",
    "/2/29/Item_Ashen_Heart.png",
    "/f/f2/Item_Mudra_of_the_Malefic_General.png",
    "/e/ef/Item_Tears_of_the_Calamitous_God.png",
    "/c/c9/Item_The_Meaning_of_Aeons.png",
    "/f/f2/Item_Puppet_Strings.png",
    "/e/ee/Item_Mirror_of_Mushin.png",
    "/a/a2/Item_Daka%27s_Bell.png",
    "/f/f8/Item_Worldspan_Fern.png",
    "/e/e7/Item_Primordial_Greenbloom.png",
    "/2/26/Item_Everamber.png",
    "/c/c2/Item_Lightless_Silk_String.png",
    "/c/c3/Item_Lightless_Eye_of_the_Maelstrom.png",
    "/a/ae/Item_Lightless_Mass.png",
    "/e/e4/Item_Fading_Candle.png",
    "/4/46/Item_Silken_Feather.png",
    "/4/43/Item_Denial_and_Judgment.png",
    "/3/3d/Item_Eroded_Horn.png",
    "/4/4d/Item_Eroded_Sunfire.png",
    "/e/e4/Item_Eroded_Scale-Feather.png"
];

const dNames = [
    "Dvalin's Plume",
    "Dvalin's Claw",
    "Dvalin's Sigh",
    "Tail of Boreas",
    "Ring of Boreas",
    "Spirit Locket of Boreas",
    "Tusk of Monoceros Caeli",
    "Shard of a Foul Legacy",
    "Shadow of the Warrior",
    "Dragon Lord's Crown",
    "Bloodjade Branch",
    "Gilded Scale",
    "Molten Moment",
    "Hellfire Butterfly",
    "Ashen Heart",
    "Mudra of the Malefic General",
    "Tears of the Calamitous God",
    "The Meaning of Aeons",
    "Puppet Strings",
    "Mirror of Mushin",
    "Daka's Bell",
    "Worldspan Fern",
    "Primordial Greenbloom",
    "Everamber",
    "Lightless Silk String",
    "Lightless Eye of the Maelstrom",
    "Lightless Mass",
    "Fading Candle",
    "Silken Feather",
    "Denial and Judgment",
    "Eroded Horn",
    "Eroded Sunfire",
    "Eroded Scale-Feather"
];

function createWeeklyTable(){
    for(var i = 0; i < wNames.length; i++){
        for(var j = 0; j < 3; j++){
            var newWeekly = makeMeARow();
            if( j == 0){
                var cellL = document.createElement("td");
                cellL.setAttribute("rowspan", "3");
                cellL.appendChild(makeMeADiv(i, "Boss"));
                newWeekly.appendChild(cellL);
            }
            cell = document.createElement("td");
            cell.appendChild(makeMeADiv(i, "Drop", j));
            newWeekly.appendChild(cell);

            cell = document.createElement("td");
            newWeekly.appendChild(cell);

            document.getElementById("weekly").getElementsByTagName("tbody")[0].appendChild(newWeekly);
        }
    }
}

function makeMeARow(){
    var newWeekly = document.createElement("tr");
    newWeekly.setAttribute("class", "weeklyr2");
    return newWeekly;
}

function makeMeADiv(iterator, type, row = 0){
    const staticLink = "https://static.wikia.nocookie.net/gensin-impact/images";
    var typicalDiv = document.createElement("div");
    typicalDiv.setAttribute("class", "weeklyr3");
    var newImage = document.createElement("img");
    if(type == "Boss"){
        newImage.setAttribute("src", staticLink + wPictures[iterator]);
        typicalDiv.appendChild(newImage);
        typicalDiv.innerHTML += wNames[iterator];
    }
    else if(type == "Drop"){
        newImage.setAttribute("src", staticLink + dPictures[(iterator * 3) + row]);
        typicalDiv.appendChild(newImage);
        typicalDiv.innerHTML += dNames[(iterator * 3) + row];
    }
    return typicalDiv;
}