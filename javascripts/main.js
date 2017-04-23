$(document).ready(() => {

	let leftUserJSON;
	let rightUserJSON;

// PRIMARY BUTTON EVENTS

	$("#load-both-users").click(() => {
		resetAll();
		loadBothUsers();
	});

	$("#reset-button").click(() => {
		resetAll();
	});

	$("#fight-button").click(() => {
		beginTheFight();
	});

	const resetAll = () => {
		$("#user-container-right").html("");
		$("#user-container-left").html("");
	}

// FIGHT SEQUENCE

	const beginTheFight = () => {
		if (leftUserJSON.points.total > rightUserJSON.points.total) {
			alert(leftUserJSON.name + " beat " + rightUserJSON.name + "!");
			$("#user-container-right").html("");
			leftUserJSON.badges.forEach((each) => {
				$("#user-container-right").append(`<img class="winner-badge" src="${each.icon_url}" alt="winner-single-badge">`)
				.animate({
				    width: ["toggle"],
				    height: ["toggle"],
				  }, 2000, "linear", function() {
				    $(this).after(console.log("animation complete"));
				  });
			})
		} else if (leftUserJSON.points.total < rightUserJSON.points.total) {
			alert(rightUserJSON.name + " beat " + leftUserJSON.name + "!");
			$("#user-container-left").html("");
			rightUserJSON.badges.forEach((each) => {
				$("#user-container-left").append(`<img class="winner-badge" src="${each.icon_url}" alt="winner-single-badge">`)
				.animate({
				    width: ["toggle"],
				    height: ["toggle"],
				  }, 2000, "linear", function() {
				    $(this).after(console.log("animation complete"));
				  });
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
		let leftUserInput = $("#left-user").val();
		let leftUserURl = `https://teamtreehouse.com/${leftUserInput}.json`;
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
		let rightUserInput = $("#right-user").val();
		let rightUserURl = `https://teamtreehouse.com/${rightUserInput}.json`;
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