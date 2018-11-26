let Incidents = require('./controllers/Incidents');

const express = require('express');
let app = express();


app.get('/api/v1/red-flags/:id(\\d+)', Incidents.find);

app.listen(3030);
