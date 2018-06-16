/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*import url from 'C:\Users\Kim\Desktop\HardVoorHersenen\public_html\Strokedashboard tijden_anoniem_Label_ipv_value';*/

/*var fileReader = new fileReader();

function getFile(url){
    document.write(url);
    let file = url.files[0];
    fileReader.readAsText(file);    
}
function readFile(evt){
    let parsed = csvJSON(evt.target.result);
    system.out.println(parsed);
    return parsed;
}*/

function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(","); //titels van variabelen worden ondergebracht in headers. 

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }
  
  document.writeln('Vervanging van SOP');
  
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
  
}


