
function tekenGrafiekAantalPat(){
    let grafiekPatAantal = document.getElementById('grafiekAantalPat').getContext('2d');

    //Grafiek die aantal patienten weergeeft 
    let nPatientGrafiek = new Chart(grafiekPatAantal, {
        type:'bar', 
        data:{
            labels:['AHHA', 'IVT', 'IAT', 'IVT + IAT'],
                datasets:[{
                label:'Patiënten',
                data:[826, 230, 401, 631],
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
            }
        }
    });
}

function tekenGrafiekDtG(){
    let horBarGrafiek1 = document.getElementById('grafiekDtG').getContext('2d');

    //Grafiek die aantal patienten weergeeft 
    let doorToGroinGrafiek = new Chart(horBarGrafiek1, {
        type:'horizontalBar',
        data:{
            labels:['Tijd in minuten'],
                datasets:[{
                    label: 'Tijd in minuten',
                    data:[127],
                    backgroundColor:'#d13638', 
                    borderWidth:2,
                    borderColor:'#e6e6e6',
                    hoverBorderWidth:4,
                    hoverBorderColor:'#b3b3b3'
                }]
        },
    options: {
        title:{
            display:true,
            text:'Door-to-Groin',
            fontSize:25
        }
    }
    });
}

function tekenGrafiekHerkomst(){
    //Grafiek die de herkomst van de patiënten laat zien    
    let pieGrafiekHerkomst = document.getElementById('grafiekHerkomst').getContext('2d');

    //Grafiek die aantal patienten weergeeft 
    let herkomstPatientGrafiek = new Chart(pieGrafiekHerkomst, {
        type:'pie', // verschillende grafieken: bar, horizontalBar, pie, line, doughnut, radar, polorArea
        data:{
            labels:['AMC', 'Slotervaart', 'OLVG Oost', 'VUmc', 'RKZ', 'WFG', 'MCA', 'Waterland', 'Kennemer Gasthuis / Spaarne Haarlem', 'Ter Gooi', 'OLVG West', 'Spaarne Gasthuis Hoofddrop', 'Gemini', 'Flevoziekenhuis', 'Boven Ij'],
            datasets:[{
                data:[42, 6, 8, 2, 14, 23, 12, 4, 10, 16, 9, 12, 20, 3, 7, 13],
                backgroundColor:['#f76262', '#f48e5f', '#f2cc5c', '#aaff60', '#60f26d', '#5defa4', '#5ae8ce', '#56d2e2', '#5bb1ef', '#577df2', '#8757ed', '#b461e8', '#e561e8', '#e85fc5', '#ef5f94', '#ed3847'],
                borderWidth:2,
                borderColor:'#ffffff',
                hoverBorderWidth:4,
                hoverBorderColor:'#b3b3b3'
            }]
        },    
        options: {
            title:{
                display:true,
                text:'Herkomst patiënten',
                fontSize:25,
            },
            legend: {
                    position:'top'
            }
        }   
    });
}

function tekenGrafiekMothershipWF(){
    let grafiekWFMothership = document.getElementById('grafiekMothershipWF').getContext('2d');

    //Grafiek die aantal patienten weergeeft 
    let workflowMothershipGrafiek = new Chart(grafiekWFMothership, {
        type:'horizontalBar', 
        data:{
            labels:['Door to CT', 'CT to CTA', 'CTA to angio', 'Angio to groin', 'Totaal door to groin' ],
                datasets:[{
                label:'Tijd in minuten',
                data:[9, 15, 40.5, 20, 95],
                backgroundColor:['#fffae6','#fff0b3', '#ffe680', '#ffdb4d', '#ffd11a'],
                borderWidth:2,
                borderColor: 'white',
                hoverBorderWidth:4,
                hoverBorderColor:'#666666'
            }]
        },
    options: {
        title:{
            display:true,
            text:'Workflow in Mothership',
            fontSize:25
        }
    }
    });
}

function tekenGrafiekWorkflowDnS(){
    let grafiekDnSWorkflow = document.getElementById('grafiekWorkflowDnS').getContext('2d');

    //Grafiek die aantal patienten weergeeft 
    let workflowDripNShipGrafiek = new Chart(grafiekDnSWorkflow, {
        type:'horizontalBar', 
        data:{
            labels:['Door to CT', 'CT to CTA', 'CTA to angio', 'Angio to groin', 'Totaal door to groin' ],
                datasets:[{
                label:'Tijd in minuten',
                data:[9, 15, 40.5, 20, 95],
                backgroundColor:['#ccebff', '#80ccff', '#33adff', '#008ae6', '#005c99'],
                borderWidth:2,
                borderColor: 'white',
                hoverBorderWidth:4,
                hoverBorderColor:'#666666'
            }]
        },
        options: {
            title:{
                display:true,
                text:'Workflow in drip n ship',
                fontSize:25
            }
        }
    });
}

function tekenGrafiekReperfusie(){
    let grafiekReperfusie = document.getElementById('grafiekReperfusie').getContext('2d');

    //Grafiek die aantal patienten weergeeft 
    let reperfusieGrafiek = new Chart(grafiekReperfusie, {
        type:'horizontalBar', 
        data:{
            labels:[''],
                datasets:[{
                    label:'TICI0',
                    data:[9],
                    backgroundColor:['#e6ffe6','#b3ffb3', '#66ff66', '#00cc00', '#006600'],
                    borderWidth:2,
                    borderColor: 'white',
                    hoverBorderWidth:4,
                    hoverBorderColor:'#666666'
                },
                {
                    label:'TICI1',
                    data:[3],
                    backgroundColor:['#b3ffb3'],
                    borderWidth:2,
                    borderColor: 'white',
                    hoverBorderWidth:4,
                    hoverBorderColor:'#666666'
                },
                {
                    label:'TICI2a',
                    data:[5],
                    backgroundColor:['#66ff66'],
                    borderWidth:2,
                    borderColor: 'white',
                    hoverBorderWidth:4,
                    hoverBorderColor:'#666666'
                },
                {
                    label:'TICI2b',
                    data:[2],
                    backgroundColor:['#00cc00'],
                    borderWidth:2,
                    borderColor: 'white',
                    hoverBorderWidth:4,
                    hoverBorderColor:'#666666'
                },
                {
                    label:'TICI2c',
                    data:[9],
                    backgroundColor:['#006600'],
                    borderWidth:2,
                    borderColor: 'white',
                    hoverBorderWidth:4,
                    hoverBorderColor:'#666666'
                },
                {
                    label:'TICI3',
                    data:[2],
                    backgroundColor:['#003300'],
                    borderWidth:2,
                    borderColor: 'white',
                    hoverBorderWidth:4,
                    hoverBorderColor:'#666666'
                }]
        },
        options: {
            title:{
                display:true,
                text:'Reperfusie resultaten',
                fontSize:25
            },
            scales:{
                xAxes:[{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
}

function tekenGrafiekDtN(){
    let dtNGrafiek = document.getElementById('grafiekDtN').getContext('2d');
    
    let doorToNeedleGrafiek = new Chart(dtNGrafiek, {
        type:'horizontalBar',
        data:{
            labels:['Tijd in minuten'],
            datasets:[{
                label: 'Tijd in minuten',
                data:[127],
                backgroundColor:'#d13638', 
                borderWidth:2,
                borderColor:'#e6e6e6',
                hoverBorderWidth:4,
                hoverBorderColor:'#b3b3b3'
            }]
        },
        options: {
            title:{
                display:true,
                text:'Door-to-Needle',
                fontSize:25
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
                data:[5.8, 12.2, 20.1, 11.1, 14.3, 10.6, 25.9],
                backgroundColor:['#f76262', '#f48e5f', '#f2cc5c', '#aaff60', '#60f26d', '#5ae8ce', '#56d2e2'],
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
 
