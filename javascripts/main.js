console.log("main js works");

let leftUserJSON;

        const loadLeftUserJSON = function() {
            return new Promise((resolve, reject) => {
                $.ajax("https://teamtreehouse.com/geoffwebb.json").done(function(data1) {
                    resolve(data1);										// was resolve(data1.products);
                }).fail((error1) => {
                    reject(error1);
                    console.log("error1", error1);
                });
            });
        };

        loadLeftUserJSON().then((results) => {
            leftUserJSON = results;
            console.log(leftUserJSON);
        });


        //writeUserToDom function here