

let leftUserJSON;
let leftUser = $("#left-user").val();

let leftUserURl = `https://teamtreehouse.com/${leftUser}.json`;

        const loadLeftUserJSON = function() {
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
            writeLeftUserToDom(leftUserJSON)
        });

        const writeLeftUserToDom = (leftUserJSON) => {
        	let leftUserString = "";
        	leftUserString += `<div class="user-container">`;
        	leftUserString += `<div>Fighter One:</div>`;
        	leftUserString += `<div id="left-user-on-dom">${leftUserJSON.name}</div>`;
        	leftUserString += `<div>Total Points:</div>`;
        	leftUserString += `<div id="leftUserPoints">${leftUserJSON.points.total}</div>`;
        	leftUserString += `<div class="img-cont"><img class="user-image" src="${leftUserJSON.gravatar_url}" alt="left user image"></div>`;
        	leftUserString += `</div>`
        	$("#userContainerLeft").append(leftUserString);
        }