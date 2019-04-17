//  =============  ABOUT  ============= 
//  Parses page for filter options. If matches filters, add. Else, reject. Runs every 2 seconds.
//  Created by Benjamin Spak - https://benjaminspak.com


//  =============  USEAGE  ============= 
//  Load page https://www.okcupid.com/doubletake
// Change genderCat == "XXXX" to a category you would like to exclude.
//  Post script in console (F12) and press enter.

const genderID = {
	gender: [
		{title: "Woman", category: "traditional"},
		{title: "Man", category: "sameSex"},
		{title: "Cis Man", category: "traditional"},
		{title: "Cis Woman", category: "traditional"},
		{title: "Demisexual", category: "traditional"},
		{title: "Straight", category: "traditional"},
		{title: "Sapiosexual", category: "traditional"},
		{title: "Gay", category: "sameSex"},
		{title: "Lesbian", category: "sameSex"},
		{title: "Asexual", category: "noSex"},
		{title: "Agender", category: "noSex"},
		{title: "Androgynous", category: "fluid"},
		{title: "Bigender", category: "fluid"},
		{title: "Bisexual", category: "fluid"},
		{title: "Genderfluid", category: "fluid"},
		{title: "Genderqueer", category: "fluid"},
		{title: "Gender Nonconforming", category: "fluid"},
		{title: "Queer", category: "fluid"},
		{title: "Intersex", category: "fluid"},
		{title: "Non-binary", category: "fluid"},
		{title: "Pangender", category: "fluid"},
		{title: "Pansexual", category: "fluid"},
		{title: "Heteroflexible", category: "fluid"},
		{title: "Two Spirit", category: "fluid"},	
		{title: "Heteroflexible", category: "fluid"},	
		{title: "Questioning", category: "fluid"},
		{title: "Hijra", category: "trans"},
		{title: "Transfeminine", category: "trans"},
		{title: "Transgender", category: "trans"},
		{title: "Transmasculine", category: "trans"},
		{title: "Transsexual", category: "trans"},
		{title: "Trans Man", category: "trans"},
		{title: "Trans Woman", category: "trans"},
	]
}


//  =============  LOGIC  =============

clickButton = (outcome) => {
    if(outcome == false) {
			console.log("User Rejected")
			setTimeout(rejectUser,1000);
    }    
    else if(outcome == true) {
			console.log("User Liked")
			setTimeout(likeUser, 1000);
		}
} // End clickButton

rejectUser = () => {
	jQuery(".cardactions-action--reject").click();
}

likeUser = () => {
	jQuery(".cardactions-action--like").click();
}

parseGenderArr = () => {
	let selectGender = jQuery(".matchprofile-details-section--basics").find(".matchprofile-details-text");
	let genderString = selectGender.text();
	return genderString.split(',');
}


//  Look up category
getGenderCat = (arrItem) => {
	genderID.gender.forEach((item) => {
		if(`${item.title}` == arrItem) {
			return `${item.category}`
		}
	})
}


//  =============  FILTERABLE OPTIONS  =============


// Change item == "XXXX" to a category you would like to exclude.
checkGenCat = (item) => {
	if(item == "noSex" || item == "trans" || item == "sameSex" || item == "fluid") {
		return true
	} //  No else needed - only checking for cat prescience.
}


//  Init Function
filterGender = () => {
	let genderArray = parseGenderArr()
	let arrayLength = genderArray.length
	let counter = 0
	
	genderArray.forEach((item) => {
		counter++
		let genderCat = getGenderCat(item)
		let exlusion = checkGenCat(genderCat)
		if (exlusion == true) {
			clickButton(false)
		}
		else if (counter == arrayLength) {
			clickButton(true)
		}
	}) //  End forEach
} //  End filterGender

const clickInterval = setInterval(filterGender, 1500);