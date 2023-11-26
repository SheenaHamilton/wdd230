const linksURL = "data/members.json";
const memberSpotlight = document.querySelector("#spotlight-list")

async function getMembers() {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json(); 
        spotlightMembers(data.chambermembers);
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function spotlightMembers (chambermembers) {

    let randomIndex = [];
    const spotlightlevels = ['Gold','Silver']

    //get 3 random indexes that are in the gold/silver levels and do not repeat indexes.
    while (randomIndex.length < 3 ) {
        let random = getRandomInt(chambermembers.length);
        if (spotlightlevels.includes(chambermembers[random].membershiplevel) && (!randomIndex.includes(random)))  {
            randomIndex.push(random);
        }
    }

    randomIndex.forEach((randIndex) => {

        let member = chambermembers[randIndex];

        //Create a div for each member block
        let memberInfo = document.createElement("div");
        memberInfo.setAttribute("class", "card line-style member-info");

        //Member Name
        let name = document.createElement("h4");
        name.textContent = member.name;

        //Address
        let address = document.createElement("address");
        address.textContent = member.address;

        //Website
        let website = document.createElement("a");
        website.setAttribute("class", "website");
        website.setAttribute("href","#");
        website.textContent = member.websiteurl;

        //Logo
        let memberLogo = document.createElement("img");
        memberLogo.setAttribute("class","logo-img");
        memberLogo.setAttribute("src",member.imagelogo);
        memberLogo.setAttribute("alt", `Business Logo for ${member.name}`);
        memberLogo.setAttribute("height", 100);
        memberLogo.setAttribute("width", 100);
        memberLogo.setAttribute("loading", "lazy");

        //Membership level img
        let memberLevel = document.createElement("img");
        memberLevel.setAttribute("class", "membership");
        memberLevel.setAttribute("alt", `${member.membershiplevel} badge`);
        memberLevel.setAttribute("height", 100);
        memberLevel.setAttribute("width", 100);
        memberLevel.setAttribute("loading", "lazy");

        let membershipimg = "";
        switch(member.membershiplevel){
            case "Gold": 
                membershipimg = "images/member-gold.svg";
                break;
            case "Silver": 
                membershipimg = "images/member-silver.svg";
                break;
            case "Bronze": 
                membershipimg = "images/member-bronze.svg";
                break;
            case "NonProfit": 
                membershipimg = "images/member-nonprofit.svg";
                break;
        }
        memberLevel.setAttribute("src", membershipimg);

        //Create area for the phone number information
        let phoneNumbers = document.createElement("div");
        phoneNumbers.setAttribute("class", "phonenumbers");

        member.phone.forEach((phone) => {
            //Create the phone number info and append it to the phone div
            let memberPhone = document.createElement("a");
            memberPhone.setAttribute("href","#");
            memberPhone.textContent = `${phone.type}: ${phone.phonenumber}`;
            phoneNumbers.appendChild(memberPhone);
        });


        //Append the elements in the appropriate order
        memberInfo.appendChild(memberLogo);
        memberInfo.appendChild(name);
        memberInfo.appendChild(address);
        memberInfo.appendChild(phoneNumbers);
        memberInfo.appendChild(website);
        memberInfo.appendChild(memberLevel);


        //Append the new directory listing to the directory
        memberSpotlight.appendChild(memberInfo);

    });
}

getMembers();