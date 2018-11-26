let incidents = [
  {
    id: 1,
    createdOn: new Date('2018'),
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '4.46154,12.65985184', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    Images: ['', ''],
    Videos: ['', ''],
    comment: ''
  }
];
module.exports = incidents;
