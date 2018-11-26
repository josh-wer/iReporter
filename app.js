let Incidents = require('./controllers/Incidents');

const express = require('express');
let app = express();


app.get('/api/v1/red-flags', Incidents.index);

app.get('/api/v1/red-flags/:id(\\d+)', Incidents.find);

app.post('/api/v1/red-flags', Incidents.store);

app.patch('/api/v1/red-flags/:red_flag_id(\\d+)/location', Incidents.updateLocation);

app.listen(3030);
