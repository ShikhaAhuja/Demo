(function (homeController) {
    var data = require("../data");

    homeController.init = function (app) {

        app.get("/", function (req, res) {

            data.getNoteCategories(function (err, results) {

                res.render("index", { title: "Express + Vash" , error : err , categories : results});

            });

            //res.send("<html><body><h1>Express</h1></body></html>");
            //res.render("jade/index", { title : "Express + Jade" });
            
        });

    };
})(module.exports);