$(document).ready(() => {

	let leftUserJSON;
	let rightUserJSON;
	

	$("#load-both-users").click(() => {
		// console.log($("#user-container-left"));
		// if ($("#user-container-left").val() !== "" && $("#user-container-right").val() !== "") {
		// 	console.log("both have something in them");
		// 	// beginTheFight();
		// } else if ($("#user-container-left").val() === "" || $("#user-container-right").val() === "") {
		// 	console.log("left: ", $("#user-container-left").val())
		// 	console.log("right: ", $("#user-container-right").val())
		// 	alert("Have you entered both users?");
		// } else {
		// 	loadBothUsers();
		// }
		loadBothUsers();
	});

	$("#fight-button").click(() => {
		beginTheFight();
	});

	const beginTheFight = () => {
		let winnerBadgeArray = [];
		if (leftUserJSON.points.total > rightUserJSON.points.total) {
			alert(leftUserJSON.name + " beat " + rightUserJSON.name + "!");
			leftUserJSON.badges.forEach((each) => {
				winnerBadgeArray.push(each.icon_url);
				$("#winner-badges").append(`<img class="winner-badge" src="${each.icon_url}" alt="winner-single-badge">`);
			})
				console.log(winnerBadgeArray);
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
	};

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
	            alert("Looks like User A isn't recognized.");
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
	            alert("Looks like User B isn't recognized.");
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

	const loadBothUsers = () => {
		console.log("hitting loadBothUsers function");
		Promise.all([loadLeftUserJSON(), loadRightUserJSON()])	// SYNTAX FOR PROMISE ALL
			.then(function(results){
				console.log("results", results);
				leftUserJSON = results[0];
				rightUserJSON = results[1];
				writeLeftUserToDom(results[0]);
				writeRightUserToDom(results[1]);
			});
	}

});