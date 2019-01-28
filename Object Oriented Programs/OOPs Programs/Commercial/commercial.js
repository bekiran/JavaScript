var utility=require('../../Utility/utility');
var filestream = require('fs');
var con = filestream.readFileSync('company.json','utf8');
var con1 = filestream.readFileSync('customer.json','utf8');
var con2 = filestream.readFileSync('transaction.json','utf8');

var data = JSON.parse(con);
var data1 = JSON.parse(con1);
var data2 = JSON.parse(con2);

utility.commercial(data,data1,data2)
