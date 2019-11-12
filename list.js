
function list() {

  pjs.defineDisplay("display","list.json");

  while (true){
  const records = pjs.query("select * from requests");

  display.grid.replaceRecords(records);

  display.list.execute();

  display.grid.readChanged();

  if (!pjs.endOfData()){
    pjs.query("update requests set ? where id = ?", [{ complete }, id]);
  }

  }
}

exports.default = list;