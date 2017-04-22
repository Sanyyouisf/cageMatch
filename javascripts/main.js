$(document).ready(() => {

	let leftUserJSON;
	let rightUserJSON;

	$("#fight-button").click(() => {
		if (leftUserJSON.points.total > rightUserJSON.points.total) {
			alert(leftUserJSON.name + " beat " + rightUserJSON.name + "!");
			leftUserJSON.badges.forEach((each) => {
				console.log(each.icon_url);
			})
		} else if (leftUserJSON.points.total < rightUserJSON.points.total) {
			alert(rightUserJSON.name + " beat " + leftUserJSON.name + "!");
			rightUserJSON.badges.forEach((each) => {
				console.log(each.icon_url);
			})
		} else if (leftUserJSON.points.total == rightUserJSON.points.total) {
			alert(leftUserJSON.name + " and " + rightUserJSON.name + " tied!");
		} else {
			alert("Have you defined both users?");
		}
	});

// LEFT USER FUNCTIONS

	$("#left-user-button").click(() => {
		onLeftSubmit();
	})

	const onLeftSubmit = () => {
		loadLeftUserJSON().then((results) => {
		        leftUserJSON = results;
		        writeLeftUserToDom(leftUserJSON);
		    });
	}

	const loadLeftUserJSON = () => {
		let leftUserObject = $("#left-user").val();
		let leftUserURl = `https://teamtreehouse.com/${leftUserObject}.json`;
	    return new Promise((resolve, reject) => {
	        $.ajax(leftUserURl).done((data1) => {
	            resolve(data1);
	        }).fail((error1) => {
	            reject(error1);
	            alert("Looks like that username isn't recognized.");
	            console.log("error1", error1);
	        });
	    });
	};

	const writeLeftUserToDom = (leftUserJSON) => {
	    let userString = "";
	    userString += 	`<h5>Fighter One:</h5>
	   					<div id="left-user-on-dom">${leftUserJSON.name}</div>
	   					<div>Total Points:</div>
	   					<div id="leftUserPoints">${leftUserJSON.points.total}</div>
	   					<img class="user-image" src="${leftUserJSON.gravatar_url}" alt="left user image">
	   					`
	    $("#user-container-left").html(userString);
	}

// RIGHT USER FUNCTIONS

	$("#right-user-button").click(() => {
			onRightSubmit();
		})

	const onRightSubmit = () => {
		loadRightUserJSON().then((results) => {
		        rightUserJSON = results;
		        writeRightUserToDom(rightUserJSON);
		    });
	}

	const loadRightUserJSON = () => {
		let rightUserObject = $("#right-user").val();
		let rightUserURl = `https://teamtreehouse.com/${rightUserObject}.json`;
	    return new Promise((resolve, reject) => {
	        $.ajax(rightUserURl).done((data2) => {
	            resolve(data2);
	        }).fail((error2) => {
	            reject(error2);
	            alert("Looks like that username isn't recognized.");
	            console.log("error2", error2);
	        });
	    });
	};

	const writeRightUserToDom = (rightUserJSON) => {
	    let userString = "";
	    userString += 	`<h5>Fighter Two:</h5>
	    				<div id="right-user-on-dom">${rightUserJSON.name}</div>
	    				<div>Total Points:</div>
	    				<div id="rightUserPoints">${rightUserJSON.points.total}</div>
	    				<img class="user-image" src="${rightUserJSON.gravatar_url}" alt="right user image"></div>
	    				`
	    $("#userContainerRight").html(userString);
	}

});