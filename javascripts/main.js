

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


        //writeUserToDom function here

        const writeLeftUserToDom = (leftUserJSON) => {
        	let leftUserString = "";
        	leftUserString += `Fighter One: ${leftUserJSON.name}`;

        	$("#userContainerLeft").append(leftUserString);
        }