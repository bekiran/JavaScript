var utility=require('../../Utility/utility');
var ut
var file=require('fs');

function inventoryManage() {
    try {
        var filedata = file.readFileSync('inventoryManage.json','utf8');
        var object =JSON.parse(filedata);
    } catch (err) {
        console.log("error found!!!");
    }
    utility.inventoryManage(object,file);//call inventoryMangage method
}
inventoryManage();