/*
 ID sheets = 1La31fNxf-a-kEPuN5_WlihfBiFosfVnKput8wMcMB6s
 ID form50110 = 1rZ5DFxcrbJ-2zyzzfiieEnNzQw7MWdYvIljZlus5dUk
 ID web = 645441510
 VACUNACION = https://docs.google.com/forms/d/1HUXyxDPP7aFjKl7mfCNLWvQMjsUaIrXcNOsF1B8Qfxg/edit
 EXAMEN SEMIOLOGIA = https://docs.google.com/forms/d/11-CxHBLWw0erF3AWUzNBN3fX5es-ZevDQXeTAVSzFAk/edit
 SEGURIDAD DEL PACIENTE = https://docs.google.com/forms/d/1cgIb7EQ9iMFzzOV45811FBrlyO7f07hcwx4QWUIlavg/edit
 ITU 2021 = https://docs.google.com/forms/d/1vL3ARIOqVoW7ffjeAFfgNecJLsnhVuZQJL0oVuXBRg4/edit
 Examen coordinacion = https://docs.google.com/forms/d/15eAD3XTil0LPqs95oj09hPRjkxscR00zs2CeSqQcV0I/edit
 triage = https://docs.google.com/forms/d/1on4viyNSJwfcqTrOxbphXuaANZD0f_8lxBKCqOXKVYI/edit
 EXAMEN Prescripción medicamentos = https://docs.google.com/forms/d/16H9pua2EAvtwCSGHKprxmiuQxJwfE-XGLDjiz6hdXy4/edit
 EXAMEN maites = https://docs.google.com/forms/d/1ocn9Uc6Bv2MIoDAQdZWDl92pVVYbBYN7H4-AFgNEke8/edit
 EXAMEN Hipotiroidismo = https://docs.google.com/forms/d/15O7NdT7JI6wvtf3mwgkT2vcFzJ0SMWlXAXZnZFXtKLA/edit
 COVID 19 PRUEBA UTSVC = https://docs.google.com/forms/d/1duXYv3DXUhWq34USMgFQJqiGy2M8IJoTPDkqscbIJnk/edit
 EDUCARDIO = https://docs.google.com/forms/d/1nd0qMBWBNBvtZa0ZCTIiUe531_WJWy2THWMDFoF89Mo/edit
 DOLOR LUMBAR = https://docs.google.com/forms/d/10dPC7DozNVNiEOJ41iBrYxIWiS255or-Y6ehwpK8DwQ/edit
 dolor y aparato locomotor = https://docs.google.com/forms/d/1Mqmv09hhmUKO0FWedUIGS3lzF8xNC-fui73kOxm5owk/edit
 prueba = https://docs.google.com/forms/d/192jXLiV4JVvysEbUq0zdK36NlB5u_DOSyqgPq1EGLgo/edit
 bioetica = https://docs.google.com/forms/d/1_baBH29ZqfS57q-5QrT30xDw5GWFbO4iwLGBFYPDX_w/edit
 ANTICONCEPTIVOS = https://docs.google.com/forms/d/1KcOSYrMBMAg-aV7zCTl5nmYAH6GLex2yGRyfO6HHHRs/edit
 Socialización Guías COVID = https://docs.google.com/forms/d/1ylH9sK1T3PZiN_3qXDe_mnX0SVIPP_j5YCGaWIbqmTk/edit
 médicos INDUCCIÓN CORPORATIVA - SAN VICENTE CES = https://docs.google.com/forms/d/1FL_ZLdT9DbZ2-rAFTK-1NHdgI1MthnEuYS1eotu0CG0/edit
 ESTUDIANTES INDUCCIÓN CORPORATIVA = https://docs.google.com/forms/d/1x5h-vRj4MAG-ihPTbDlHKl27e3je2GR83fWn_ZOfruQ/edit
 EXAMEN DE CONOCIMIENTOS PRETEST SVC = https://docs.google.com/forms/d/1IHDaZO0BYBXNScsqNZ_m1tutxUZjq0i8BroFjMPChdQ/edit

*/
function sedes() {
    var sheets = SpreadsheetApp.openById('1WDDVfCIn5milpeJsimfjsN5DvHRsXBdUYuteJQDvy1M');
    var hoja = sheets.getSheetByName('sedes');

    var column = hoja.getRange(2,1, hoja.getLastRow(),1).getValues();
    var column2 = hoja.getRange(2,2, hoja.getLastRow(),1).getValues();


    var formAuditoriaMiPres = FormApp.openById('1zvdM-e_kDCFmZOJAkw_B9Gwhye0b1C40YL4KPteLtLI');
    
    Logger.log(column)
  
    var question50110 = FormApp.openById('18iu4LT3o5uy7r1_7zGxpe3a39pysgT-yCrjv9iqm10g').getItemById('1418725977');
    var question50114 = FormApp.openById('1z5Txzzkr8f2Yd9cDXsIL1-cSTl4wDset16gZkRt2ULA').getItemById('781518027');
    var question3000056 = FormApp.openById('1kdDbiQM2ajcveR1s8cF49U3IFLu_GbiHEd_kpwxVrhg').getItemById('1505375888');
    var question7000026 = FormApp.openById('1A3hEm9YmVGk811lGmGnIFJcjODYomK6mRfCb7NJyWgo').getItemById('1324820264');
    var questionIndicadores = FormApp.openById('14ogDgU3ajrD4nemuqRPUT9J2LvkLiiPi0V8pPMyU49A').getItemById('942067313');
    var questionAuditoriaMiPres = FormApp.openById('1zvdM-e_kDCFmZOJAkw_B9Gwhye0b1C40YL4KPteLtLI').getItemById('644098221');
    var vacunacion = FormApp.openById('1HUXyxDPP7aFjKl7mfCNLWvQMjsUaIrXcNOsF1B8Qfxg').getItemById('1883206733');
    var semiologia = FormApp.openById('11-CxHBLWw0erF3AWUzNBN3fX5es-ZevDQXeTAVSzFAk').getItemById('1883206733');
    var seguridad = FormApp.openById('1cgIb7EQ9iMFzzOV45811FBrlyO7f07hcwx4QWUIlavg').getItemById('1385342555');
    var itu = FormApp.openById('1vL3ARIOqVoW7ffjeAFfgNecJLsnhVuZQJL0oVuXBRg4').getItemById('1883206733');
    var examenCor = FormApp.openById('15eAD3XTil0LPqs95oj09hPRjkxscR00zs2CeSqQcV0I').getItemById('1883206733');
    var x = FormApp.openById('1HUXyxDPP7aFjKl7mfCNLWvQMjsUaIrXcNOsF1B8Qfxg');
  
    var cursoTriage = FormApp.openById('1on4viyNSJwfcqTrOxbphXuaANZD0f_8lxBKCqOXKVYI').getItemById('1385342555');
    var examenPrescripcionMedica = FormApp.openById('16H9pua2EAvtwCSGHKprxmiuQxJwfE-XGLDjiz6hdXy4').getItemById('1748726299');
    var examenMaites = FormApp.openById('1ocn9Uc6Bv2MIoDAQdZWDl92pVVYbBYN7H4-AFgNEke8').getItemById('1419701159');
    var examenHipotiroidismo = FormApp.openById('15O7NdT7JI6wvtf3mwgkT2vcFzJ0SMWlXAXZnZFXtKLA').getItemById('1883206733');
    var covidPrueba = FormApp.openById('1duXYv3DXUhWq34USMgFQJqiGy2M8IJoTPDkqscbIJnk').getItemById('1385342555');
    var eduCardio = FormApp.openById('1nd0qMBWBNBvtZa0ZCTIiUe531_WJWy2THWMDFoF89Mo').getItemById('1883206733');
    var dolorLumbar = FormApp.openById('10dPC7DozNVNiEOJ41iBrYxIWiS255or-Y6ehwpK8DwQ').getItemById('1883206733');
    var dolorYaparato = FormApp.openById('1Mqmv09hhmUKO0FWedUIGS3lzF8xNC-fui73kOxm5owk').getItemById('1883206733');
    var prueba = FormApp.openById('192jXLiV4JVvysEbUq0zdK36NlB5u_DOSyqgPq1EGLgo').getItemById('1385342555');
    var bioetica = FormApp.openById('1_baBH29ZqfS57q-5QrT30xDw5GWFbO4iwLGBFYPDX_w').getItemById('1883206733');
    var anticonceptivos = FormApp.openById('1KcOSYrMBMAg-aV7zCTl5nmYAH6GLex2yGRyfO6HHHRs').getItemById('1883206733');
    var socializacionGuiasCovid = FormApp.openById('1ylH9sK1T3PZiN_3qXDe_mnX0SVIPP_j5YCGaWIbqmTk').getItemById('1385342555');
    var induccionCorporativa = FormApp.openById('1FL_ZLdT9DbZ2-rAFTK-1NHdgI1MthnEuYS1eotu0CG0').getItemById('1385342555');
    var induccionEstudiante = FormApp.openById('1x5h-vRj4MAG-ihPTbDlHKl27e3je2GR83fWn_ZOfruQ').getItemById('1385342555');
    var examenPretest = FormApp.openById('1IHDaZO0BYBXNScsqNZ_m1tutxUZjq0i8BroFjMPChdQ').getItemById('1946497425');
    var examenPostest = FormApp.openById('1cQ10eSKf5kuvCKcjBr7zub_0jqjQiy1HmkeJhBzGBPA').getItemById('1946497425')
    var examenPretestHolaDr = FormApp.openById('1gvXl1bmeHlxEU5x3adBBEiORiiiPciPCVnQMq476pqI').getItemById('1946497425')
    var obtener = x.getItems();
  
    sedes = []
    sedesIndi = []
    column.forEach(function(item) {
      if (item[0]) {
        sedes.push(item[0])
      }
    })

    column2.forEach(function(item) {
      if (item[0]) {
        sedesIndi.push(item[0])
      }
    })
    obtener.forEach(function(pregunta){
      Logger.log(pregunta.getTitle())
      Logger.log(pregunta.getId().toString())
    })
    question50110.asListItem().setChoiceValues(sedes)
    question50114.asListItem().setChoiceValues(sedes)
    question3000056.asListItem().setChoiceValues(sedes)
    question7000026.asListItem().setChoiceValues(sedes)

    questionIndicadores.asListItem().setChoiceValues(sedesIndi)
    questionAuditoriaMiPres.asListItem().setChoiceValues(sedesIndi)
    vacunacion.asListItem().setChoiceValues(sedesIndi)
    semiologia.asListItem().setChoiceValues(sedesIndi)
    seguridad.asListItem().setChoiceValues(sedesIndi)
    itu.asListItem().setChoiceValues(sedesIndi)
    examenCor.asListItem().setChoiceValues(sedesIndi)
    cursoTriage.asListItem().setChoiceValues(sedesIndi)
    examenPrescripcionMedica.asListItem().setChoiceValues(sedesIndi)
    examenMaites.asListItem().setChoiceValues(sedesIndi)
    examenHipotiroidismo.asListItem().setChoiceValues(sedesIndi)
    covidPrueba.asListItem().setChoiceValues(sedesIndi)
    eduCardio.asListItem().setChoiceValues(sedesIndi)
    dolorLumbar.asListItem().setChoiceValues(sedesIndi)
    dolorYaparato.asListItem().setChoiceValues(sedesIndi)
    prueba.asListItem().setChoiceValues(sedesIndi)
    bioetica.asListItem().setChoiceValues(sedesIndi)
    anticonceptivos.asListItem().setChoiceValues(sedesIndi)
    socializacionGuiasCovid.asListItem().setChoiceValues(sedesIndi)
    induccionCorporativa.asListItem().setChoiceValues(sedesIndi)
    induccionEstudiante.asListItem().setChoiceValues(sedesIndi)
    examenPretest.asListItem().setChoiceValues(sedesIndi)
    examenPostest.asListItem().setChoiceValues(sedesIndi)
    examenPretestHolaDr.asListItem().setChoiceValues(sedesIndi)
  }
 