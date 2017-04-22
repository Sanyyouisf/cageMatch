$(document).ready(() => {

	let leftUserJSON;
	let rightUserJSON;


	let rightUserObject = $("#right-user").val();
	let rightUserURl = `https://teamtreehouse.com/${rightUserObject}.json`;

// LEFT USER FUNCTIONS
	$("#left-user-button").click(function() {
		onLeftSubmit();
	})

	const onLeftSubmit = () => {
		loadLeftUserJSON().then((results) => {
		        leftUserJSON = results;
		        console.log(leftUserJSON);
		        writeLeftUserToDom(leftUserJSON);
		    });
	}

	const loadLeftUserJSON = () => {
		let leftUserObject = $("#left-user").val();
		let leftUserURl = `https://teamtreehouse.com/${leftUserObject}.json`;
	    return new Promise((resolve, reject) => {
	        $.ajax(leftUserURl).done(function(data1) {
	            resolve(data1);
	        }).fail((error1) => {
	            reject(error1);
	            console.log("error1", error1);
	        });
	    });
	};

	const writeLeftUserToDom = (leftUserJSON) => {
	    let userString = "";
	    userString += `<div class="user-container">`;
	    userString += `<div>Fighter One:</div>`;
	    userString += `<div id="left-user-on-dom">${leftUserJSON.name}</div>`;
	    userString += `<div>Total Points:</div>`;
	    userString += `<div id="leftUserPoints">${leftUserJSON.points.total}</div>`;
	    userString += `<div class="img-cont"><img class="user-image" src="${leftUserJSON.gravatar_url}" alt="left user image"></div>`;
	    userString += `</div>`
	    $("#userContainerLeft").html(userString);
	}

// RIGHT USER FUNCTIONS

	$("#right-user-button").click(function() {
			onRightSubmit();
		})

	const onRightSubmit = () => {
		loadRightUserJSON().then((results) => {
		        rightUserJSON = results;
		        console.log(rightUserJSON);
		        writeRightUserToDom(rightUserJSON);
		    });
	}

	const loadRightUserJSON = () => {
		let rightUserObject = $("#right-user").val();
		let rightUserURl = `https://teamtreehouse.com/${rightUserObject}.json`;
	    return new Promise((resolve, reject) => {
	        $.ajax(rightUserURl).done(function(data2) {
	            resolve(data2);
	        }).fail((error2) => {
	            reject(error2);
	            console.log("error2", error2);
	        });
	    });
	};

	const writeRightUserToDom = (rightUserJSON) => {
	    let userString = "";
	    userString += `<div class="user-container">`;
	    userString += `<div>Fighter Two:</div>`;
	    userString += `<div id="right-user-on-dom">${rightUserJSON.name}</div>`;
	    userString += `<div>Total Points:</div>`;
	    userString += `<div id="rightUserPoints">${rightUserJSON.points.total}</div>`;
	    userString += `<div class="img-cont"><img class="user-image" src="${rightUserJSON.gravatar_url}" alt="right user image"></div>`;
	    userString += `</div>`
	    $("#userContainerRight").html(userString);
	}

});