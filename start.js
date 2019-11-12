
function start() {

  const user = pjs.getUser();
  if (user && user != null && pjs.query("SELECT user FROM admins where user = ?", user).length >0 ){
    pjs.call("menu.js");
  }
  else {
    pjs.call("form.js");
  }

}

exports.default = start;