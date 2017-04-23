$(document).ready(() => {

	let leftUserJSON;
	let rightUserJSON;

// PRIMARY BUTTON EVENTS

	$("#load-both-users").click(() => {
		loadBothUsers();
	});

	$("#reset-button").click(() => {
		$("#user-container-right").html("");
		$("#user-container-left").html("");
	});

	$("#fight-button").click(() => {
		beginTheFight();
	});

// FIGHT SEQUENCE

	const beginTheFight = () => {
		if (leftUserJSON.points.total > rightUserJSON.points.total) {
			alert(leftUserJSON.name + " beat " + rightUserJSON.name + "!");
			$("#user-container-right").html("");
			leftUserJSON.badges.forEach((each) => {
				$("#user-container-right").append(`<img class="winner-badge" src="${each.icon_url}" alt="winner-single-badge">`)
				.animate({							// Animation will likely get its own section
				    width: [ "toggle", "swing" ],
				    height: [ "toggle", "swing" ],
				    opacity: "toggle",
				  }, 5000, "linear", function() {
				    $( this ).after(console.log("animation complete"));
				  });
			})
		} else if (leftUserJSON.points.total < rightUserJSON.points.total) {
			alert(rightUserJSON.name + " beat " + leftUserJSON.name + "!");
			$("#user-container-left").html("");
			rightUserJSON.badges.forEach((each) => {
				$("#user-container-left").append(`<img class="winner-badge" src="${each.icon_url}" alt="winner-single-badge">`);
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
	});

	const onLeftSubmit = () => {
		loadLeftUserJSON().then((results) => {
		        leftUserJSON = results;
		        writeLeftUserToDom(leftUserJSON);
		    });
	};

	const loadLeftUserJSON = () => {
		let leftUserObject = $("#left-user").val();
		console.log(leftUserObject);
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
	    userString += 	`<div class="user-for-stying">
	    				<h2>Fighter One:</h2>
	   					<h3 id="left-user-on-dom">${leftUserJSON.name}</h3>
	   					<h3>Total Points:</h3>
	   					<h3 id="leftUserPoints">${leftUserJSON.points.total}</h3>
	   					<img class="user-image" src="${leftUserJSON.gravatar_url}" alt="left user image">
	   					</div>
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
	    userString += 	`<div class="user-for-stying">
	    				<h2>Fighter Two:</h2>
	    				<h3 id="right-user-on-dom">${rightUserJSON.name}</h3>
	    				<h2>Total Points:</h2>
	    				<h3 id="rightUserPoints">${rightUserJSON.points.total}</h3>
	    				<img class="user-image" src="${rightUserJSON.gravatar_url}" alt="right user image">
	    				</div>
	    				`
	    $("#user-container-right").html(userString);
	}

	const loadBothUsers = () => {
		Promise.all([loadLeftUserJSON(), loadRightUserJSON()])
			.then(function(results){
				leftUserJSON = results[0];
				rightUserJSON = results[1];
				writeLeftUserToDom(results[0]);
				writeRightUserToDom(results[1]);
			});
	}

});