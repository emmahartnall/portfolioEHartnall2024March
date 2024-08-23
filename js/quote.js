document.getElementById('idServiceType').addEventListener('change', function() {
    document.getElementById('result').innerHTML = ""

   hideAllFieids();
    
    switch (this.value) {
        case 'business':
            businessFields.classList.remove('hiddenElement');
            break;
        case 'data_cleansing':
            dataCleansingFields.classList.remove('hiddenElement');
            break;
        case 'data_analysis':
            dataAnalysisFields.classList.remove('hiddenElement');
            break;
        case 'data_models':
            dataModelFields.classList.remove('hiddenElement');
            break;
        case 'database':
            databaseFields.classList.remove('hiddenElement');
            break;
        case 'model':
            modelFields.classList.remove('hiddenElement');
            break;
        case 'sysAna':
            sysAnaFields.classList.remove('hiddenElement');
            break;
        case 'doc':
            docFields.classList.remove('hiddenElement');
            break;
        case 'test_auto':
            testAutoFields.classList.remove('hiddenElement');
            break;
        case 'test_Reg':
            testRegFields.classList.remove('hiddenElement');
            break;
        case 'test-manual':
            testManualFields.classList.remove('hiddenElement');
            break;
        case 'web':
            webSiteCreationFields.classList.remove('hiddenElement');
            break;
    }
});

function hideAllFieids(){

    businessFields.classList.add('hiddenElement');
    dataCleansingFields.classList.add('hiddenElement');
    dataAnalysisFields.classList.add('hiddenElement');
    dataModelFields.classList.add('hiddenElement');
    databaseFields.classList.add('hiddenElement');
    modelFields.classList.add('hiddenElement');
    sysAnaFields.classList.add('hiddenElement');
    docFields.classList.add('hiddenElement');
    testAutoFields.classList.add('hiddenElement');
    testRegFields.classList.add('hiddenElement');
    testManualFields.classList.add('hiddenElement');
    webSiteCreationFields.classList.add('hiddenElement');
  
}

function calcPriceEstimate(){
    var serviceName = document.getElementById('idServiceType').value;
    var resultOfCalculation = 0;
    var resultToBeDisplayed = "Call for price estimate";

    switch (serviceName) {
        case 'business':
            const nScreens = document.getElementById('idscreens').value;
            const nRules = document.getElementById('idrules').value;
            const nStories = document.getElementById('idstories').value;
            const nMeetings = document.getElementById('idmeetings').value;
            const nDD = document.getElementById('idDDs').value;
            const nPhoneCalls = document.getElementById('idphonecalls').value;
           
            resultOfCalculation = (nScreens * 400) + (nRules * 50) + (nStories * 50) + (nMeetings * 200) + (nDD * 100) + (nPhoneCalls * 50);
            break;
        case 'data_cleansing':
            
            break;
        case 'data_analysis':
            
            break;
        case 'data_models':
           
            break;
        case 'database':
           
            break;
        case 'model':
           
            break;
        case 'sysAna':
            
            break;
        case 'doc':
          
            break;
        case 'test_auto':
           
            break;
        case 'test_Reg':
           
            break;
        case 'test-manual':
           
            break;
        case 'web':
           
            break;
    }
    resultToBeDisplayed = resultOfCalculation > 0 ? "Estimated price: $" + resultOfCalculation : resultToBeDisplayed;
    document.getElementById('result').innerHTML = resultToBeDisplayed;;
}