var express = require('express');
var geoDB = require('../services/nonPersistentStorage');
var router = express.Router();

/* GET home page. */
router.get('/geojson', function(req, res, next) {
  res.status(200).json(geoDB.getGeoJSONs());
});

router.post('/geojson', function(req, res, next) {
  // FIXME: Perlu cek ada req.body.geoJSON atau tidak
  geoDB.addGeoJson(req.body.geoJSON)
  res.status(200).json({message: "Sukses"});
});

//FIXME: Harusnya DELETE, tapi pakai get karena gampang dipake di browser
router.get('/geojson/delete/:id', function(req, res, next) {
  // FIXME: misal gaada object dengan index id => 404
  geoDB.deleteGeoJSONs(req.params.id)
  res.status(200).json({message: "Delete Sukses"});
});


module.exports = router;
