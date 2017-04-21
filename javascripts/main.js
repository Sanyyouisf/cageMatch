$(document).ready(() => {

	let leftUserJSON;
	let rightUserJSON;

	let leftUserObject = $("#left-user").val();
	let leftUserURl = `https://teamtreehouse.com/${leftUserObject}.json`;

	let rightUserObject = $("#right-user").val();
	let rightUserURl = `https://teamtreehouse.com/${rightUserObject}.json`;


	$("#left-user-button").click(function() {
		writeLeftUserToDom(leftUserJSON);
	})

	$("#right-user-button").click(function() {
		writeRightUserToDom(rightUserJSON);
	})


	const loadLeftUserJSON = () => {
	    return new Promise((resolve, reject) => {
	        $.ajax(leftUserURl).done(function(data1) {
	            resolve(data1);
	        }).fail((error1) => {
	            reject(error1);
	            console.log("error1", error1);
	        });
	    });
	};

	loadLeftUserJSON().then((results) => {
	        leftUserJSON = results;
	        console.log(leftUserJSON);
	        // writeLeftUserToDom(userJSON)
	    });

	const writeLeftUserToDom = (leftUserJSON) => {
	    let userString = "";
	    userString += `<div class="user-container">`;
	    userString += `<div>Fighter One:</div>`;
	    userString += `<div id="left-user-on-dom">${leftUserJSON.name}</div>`;
	    userString += `<div>Total Points:</div>`;
	    userString += `<div id="leftUserPoints">${leftUserJSON.points.total}</div>`;
	    userString += `<div class="img-cont"><img class="user-image" src="${leftUserJSON.gravatar_url}" alt="left user image"></div>`;
	    userString += `</div>`
	    $("#userContainerLeft").append(userString);
	}

	const writeRightUserToDom = (rightUserJSON) => {
	    let userString = "";
	    userString += `<div class="user-container">`;
	    userString += `<div>Fighter One:</div>`;
	    userString += `<div id="right-user-on-dom">${rightUserJSON.name}</div>`;
	    userString += `<div>Total Points:</div>`;
	    userString += `<div id="rightUserPoints">${rightUserJSON.points.total}</div>`;
	    userString += `<div class="img-cont"><img class="user-image" src="${rightUserJSON.gravatar_url}" alt="right user image"></div>`;
	    userString += `</div>`
	    $("#userContainerRight").append(userString);
	}

});