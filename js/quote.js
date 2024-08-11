document.getElementById('idServiceType').addEventListener('change', function() {
    
    switch (this.value) {
        case 'web':
            webSiteCreationFields.classList.remove('hiddenElement');
            dataCleaningFields.classList.add('hiddenElement');
            break;
        case 'data':
            dataCleaningFields.classList.remove('hiddenElement');
            webSiteCreationFields.classList.add('hiddenElement');
            break;
        case 'doc':
            webSiteCreationFields.classList.add('hiddenElement');
            dataCleaningFields.classList.add('hiddenElement');
            break;
        case 'test':
            webSiteCreationFields.classList.add('hiddenElement');
            dataCleaningFields.classList.add('hiddenElement');
            break;
    }
});