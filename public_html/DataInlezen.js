var json;

var mrs1 = 0;
var mrs2 = 0;
var mrs3 = 0;
var mrs4 = 0;
var mrs5 = 0;
var mrs6 = 0;

function readFile(){                                        //NAMEN AANPASSEN
    /* set up XMLHttpRequest */
    var url = "Strokedashboard tijden_anoniem.xlsx";
    /* set up async GET request */
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";

    req.onload = function(e) 
    {
        var data = new Uint8Array(req.response);
        var workbook = XLSX.read(data, {type:"array"});
        
        /* DO SOMETHING WITH workbook HERE */
        var first_sheet_name = workbook.SheetNames[0];
        
        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name];
        
        json = XLSX.utils.sheet_to_json(worksheet,{raw: true});
        console.log(json); //helearray in console tonen
        bereken(); //AANGEPAST 22-6
        toonWaardes(); //AANGEPAST 22-6
        tekenGrafieken(); //AANGEPAST 22-6
    };
    req.send();
} 

function bereken(){
    ivtPatiënt(); //AANGEPAST 22-6
    iatPatiënt(); //AANGEPAST 22-6
    ivtEniatPatiënt(); //AANGEPAST 22-6
    bepaalFunctioneleUitkomst(); //AANGEPAST 22-6
}

function tekenGrafieken(){
    tekenGrafiekAantalPat();
    tekenGrafiekFunctUitkomst();
}

function toonWaardes(){
    document.getElementById("ivtPatAMC").innerHTML = ivtPatiënt();
    document.getElementById("iatPat").innerHTML = iatPatiënt();
    document.getElementById("ivtIatPat").innerHTML = ivtEniatPatiënt();
}

//WAARDES UITREKENEN
//Berekent en geeft aantal patiënten dat IVT heeft gekregen in het Amsterdam UMC locatie AMC in het huidige jaar.
function ivtPatiënt(){
    var tijd_datum = new Date();
    var huidige_jaar = 2017; //tijd_datum.getFullYear(); 
    
    var x = 0;
    
    for(var i = 0; i<json.length; i++){
        if(json[i].Centre_Name === 1 
                && json[i].P_Yearspresentation === huidige_jaar 
                && json[i].Reperfusion_therapy_IVT ===1)
        {
            x = x + json[i].Reperfusion_therapy_IVT;
        }
    }
    return x 
}

//Berekent en geeft aantal patiënten dat IAT heeft gekregen in het huidige jaar, allemaal in AMC.
function iatPatiënt(){
    var tijd_datum = new Date();
    var huidige_jaar = 2017; //tijd_datum.getFullYear();  //AANPASSEN, NU VARIABEL NUMMER
    
    var x = 0;
    
    for(var i = 0; i<json.length; i++){
        if(json[i].P_Yearspresentation === huidige_jaar 
                && json[i].Reperfusion_therapy_IAT_AMC === 1)
        {
            x = x + json[i].Reperfusion_therapy_IAT_AMC;
        }
    }
    return x;
}

//Berekent en geeft aantal patiënten dat zowel IVT als IAT heeft gekregen in het huidige jaar, van alle beschikbare centra samen.
function ivtEniatPatiënt(){
    var tijd_datum = new Date();
    var huidige_jaar = 2017; //tijd_datum.getFullYear();  //AANPASSEN, NU VARIABEL NUMMER
    
    var x = 0;
    
    for(var i = 0; i<json.length; i++){
        if(json[i].P_Yearspresentation === huidige_jaar 
                && json[i].Reperfusion_therapy_IVT ===1
                && json[i].Reperfusion_therapy_IAT_AMC === 1)
        {
            x = x + json[i].Reperfusion_therapy_IAT_AMC;
        }
    }
    return x;
}

function bepaalFunctioneleUitkomst(){
    for (var i = 0; i<json.length;i++){
        if(json[i].mRS_90days === 1){mrs1++;}
        if(json[i].mRS_90days === 2){mrs2++;}
        if(json[i].mRS_90days === 3){mrs3++;}
        if(json[i].mRS_90days === 4){mrs4++;}
        if(json[i].mRS_90days === 5){mrs5++;}
        if(json[i].mRS_90days === 6){mrs6++;}
    }
}

// GRAFIEKEN TEKENEN
function tekenGrafiekAantalPat(){
    let grafiekPatAantal = document.getElementById('grafiekAantalPat').getContext('2d');

    //Grafiek die aantal patienten weergeeft 
    let nPatientGrafiek = new Chart(grafiekPatAantal, {
        type:'bar', 
        data:{
            labels:['AHHA', 'IVT', 'IAT', 'IVT + IAT'],
                datasets:[{
                label:'Aantal patiënten', 
                data:[90, ivtPatiënt(), iatPatiënt(), ivtEniatPatiënt()],
                backgroundColor:['#ffccb3', '#ff9966', '#ff7733', '#b33c00', '#802b00'],
                borderWidth:2,
                borderColor:'#e6e6e6',
                hoverBorderWidth:4,
                hoverBorderColor:'#b3b3b3'
            }]
        },
        options: {
            title:{
                display:true,
                text:'Totaal aantal patiënten',
                fontSize:25
            },
            scales: {                   //AANGEPAST 22-6
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }        
    });
}

function tekenGrafiekFunctUitkomst(){
    //Grafiek die de functionele uitkomsten laat zien    
    let grafiekUitkomstFunct = document.getElementById('grafiekFunctUitkomst').getContext('2d');
    
    let functioneleUitkomstGrafiek = new Chart(grafiekUitkomstFunct, {
        type:'pie', // verschillende grafieken: bar, horizontalBar, pie, line, doughnut, radar, polorArea
        data:{
            labels:['mRS0', 'mRS1', 'mRS2', 'mRS3', 'mRS4', 'mRS5', 'mRS6'],
            datasets:[{
                data:[5.8, 2.2, mrs2, mrs3, mrs4, mrs5, mrs6],
                backgroundColor:['#56d2e2', '#5ae8ce', '#60f26d', '#aaff60', '#f2cc5c', '#f48e5f', '#f76262'], //AANGEPAST 22-6
                borderWidth:2,
                borderColor:'#ffffff',
                hoverBorderWidth:4,
                hoverBorderColor:'#b3b3b3'
            }]
        },    
        options: {
            title:{
                display:true,
                text:'Functionele uitkomst',
                fontSize:25,
            },
            legend: {
                    position:'top'
            }
        } 
    });
}

