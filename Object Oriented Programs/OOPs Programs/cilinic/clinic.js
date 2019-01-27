
var filestream=require('fs');
var utility=require('../../Utility/utility');
var content=filestream.readFileSync('clinic.json');
var data=JSON.parse(content);

function clinic()
{
  utility.clinicManagement(data);
}
clinic();