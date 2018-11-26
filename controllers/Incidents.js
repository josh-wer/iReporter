const Incidents = {
  find(req, res){
    const redFlagId =req.params.id;
    const incidents = require('../incidents');

    console.log(res.headers);
    for(let incident of incidents ){
      if (incident.id  == redFlagId){
        res.send(incident);
       return;
      }
      // res.write(incident.id);
    }
      res.send('not found');
  }
};


module.exports = Incidents;