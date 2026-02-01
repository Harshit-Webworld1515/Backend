const figlet = require('figlet');

figlet("Harshit", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
//   _   _                _     _ _
//  | | | | __ _ _ __ ___| |__ (_) |_
//  | |_| |/ _` | '__/ __| '_ \| | __|
//  |  _  | (_| | |  \__ \ | | | | |_
//  |_| |_|\__,_|_|  |___/_| |_|_|\__|