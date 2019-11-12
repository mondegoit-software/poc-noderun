
function app(req, res) {

  const records = pjs.query("select * from requests");

  res.send(records);

}

exports.default = app;