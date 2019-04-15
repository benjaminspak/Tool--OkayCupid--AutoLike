//  =============  ABOUT  ============= 
//  Parses page for filter options. If matches filters, add. Else, reject. Runs every 2 seconds.


//  =============  USEAGE  ============= 
//  Load page https://www.okcupid.com/doubletake
//  Post script in console (F12) and press enter.


//  =============  FILTERABLE OPTIONS  =============

const genderID = {
	gender: [
		{title: "Woman", category: "traditional"},
		{title: "Man", category: "traditional"},
		{title: "Cis Man", category: "traditional"},
		{title: "Cis Woman", category: "traditional"},
		{title: "Agender", category: "noSex"},
		{title: "Androgynous", category: "fluid"},
		{title: "Bigender", category: "fluid"},
		{title: "Genderfluid", category: "fluid"},
		{title: "Genderqueer", category: "fluid"},
		{title: "Gender Nonconforming", category: "fluid"},
		{title: "Queer", category: "fluid"},
		{title: "Intersex", category: "fluid"},
		{title: "Non-binary", category: "fluid"},
		{title: "Pangender", category: "fluid"},
		{title: "Two Spirit", category: "fluid"},	
		{title: "Hijra", category: "trans"},
		{title: "Transfeminine", category: "trans"},
		{title: "Transgender", category: "trans"},
		{title: "Transmasculine", category: "trans"},
		{title: "Transsexual", category: "trans"},
		{title: "Trans Man", category: "trans"},
		{title: "Trans Woman", category: "trans"},
	]
}

//  let genderKeys = Object.keys(genderID);
//  let genderValues = Object.values(genderID);

//  =============  LOGIC  =============

// Comare each genderID title to genderFound
// When match found, get the matching category
// Return the value

let selectGender = jQuery(".matchprofile-details-section--basics").find(".matchprofile-details-text");
let genderString = selectGender.text();
let genderArray = genderString.split(',');
let genderFound = genderArray[0];

getGenderVal = (gender) => {
	genderID.gender.forEach((item) => {
		console.log(item.title)
	//	var	itemTitle = item.title
	//	if(itemTitle == gender) {
	//		console.log(itemTitle)
	//	}
	}) //  End forEach
} //  End getGenderVal

getGenderVal(genderFound)


clickButton = (outcome) => {
    if(outcome == true) {
			console.log("Liked")
      jQuery(".cardactions-action--like").click();
    }    
    else {
			console.log("Skipped")
			jQuery(".cardactions-action--reject").click();
		}
} // End clickButton

filterGender = () => {
		parseText()
		if(genderCat == "noSex" || genderCat == "trans") {
			clickButton(false)
		}
		else {
			clickButton(true)
		}
} //  End filterGender

const clickInterval = setInterval(filterGender, 2000);