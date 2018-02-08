var path = require("path");
var friends = require("../data/friends");

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        console.log("Currently Reading API");
        res.json(friends);
    });

    app.post("/api/new", function(req, res) {
        var friend = req.body;
        var score = friend.scores;
        var total = 0;
        var match = 1000;
        var index = -1;

        for(var i = 0; i < friends.length; i++){
            total = 0;

            for(var p = 0; p < score.length; p++){
                var diff = Math.abs(score[p] - friends[i].scores[p]);
                total += diff;
            }
            if(total < match){
                match = total;
                index = i;
            }
        }
        console.log('Best Match:', friends[index]);
        friends.push(friend);
        res.json(friends[index]);
    });
};