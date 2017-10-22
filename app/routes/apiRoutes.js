// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
      res.json(friends);
    });


  // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

  app.post("/api/friends", function(req, res) {
        
      friends.push(req.body);
  
    });

}