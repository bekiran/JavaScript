/******************************************************************************
 *  Execution       :   1. default node          : cmd> node clinic.js
 *                      2. if nodemon installed  : cmd> nodemon clinic.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To manage Clinique details such as List of Doctors and Patients.
 *
 *  @description    : This programme is used to manage a list of Doctors associated with the Clinique.
 *                    This also manages the list of patients who use the clinique. It manages Doctors by Name,
 *                    Id, Specialization and Availability (AM,  PM or both). It manages Patients by Name, ID,
 *                    Mobile Number and Age. The Program allows users to search Doctor by name, id, Specialization
 *                    or Availability. Also the programs allows users to search patient by name, mobile number or id.
 *
 *  @file           : clinic.js
 *  @overview       : To search list of doctors and patients.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 24-jan-2019
 *
 ******************************************************************************/
try {
var filestream = require("fs");
var utility = require("../../Utility/utility");
var content = filestream.readFileSync("clinic.json","utf8");
var data = JSON.parse(content);  //for converting object form

function clinic() {
  utility.clinicManagement(data,filestream);
}
clinic();
} catch (error) {
  console.log("Error occured")
}

