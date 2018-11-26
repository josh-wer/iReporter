const incidents = require('../incidents');

const Incidents = {
  index(req, res) {
    res.send({
      status: req.statusCode || 200,
      data: incidents
    });
  },

  find(req, res) {
    const redFlagId = req.params.id;
    let sendIncident = null;
    for (let incident of incidents) {
      if (incident.id == redFlagId) {
        sendIncident = incident;
        break;
      }
      // res.write(incident.id);
    }

    res.send({
      status: req.statusCode || 200,
      data: (sendIncident) ? [sendIncident] : []
    });
  },

  store(req, res) {

    res.send({
      status: req.statusCode || 200,
      data: [{
        id: 3,
        message: 'Created red-flag record'
      }]
    });
  },

  updateLocation(req, res) {
    const redFlagId = req.params.red_flag_id;

    res.send({
      status: req.statusCode || 200,
      data: [{
        id: redFlagId,
        message: 'Updated red-flag record\'s location'
      }]
    });
  }
};

module.exports = Incidents;
