
function app(req, res) {

  const records = pjs.query("select * from requests where id = ?", req.params.id);

  if(records.length > 0 ) res.send({found: true, record: records[0]});
  else res.sen({found: false});




}

exports.default = app;


