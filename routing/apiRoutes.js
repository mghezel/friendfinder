// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data
// ===============================================================================

var tableData = require("../app/data/tblFriends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  
  app.post("/api/friends", function(req, res) {
    
      tableData.push(req.body);
      res.json(true);
    
  });
  
};
