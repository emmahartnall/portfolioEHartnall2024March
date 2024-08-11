document.getElementById('idServiceType').addEventListener('change', function() {
    
    switch (this.value) {
        case 'test':
            testFields.classList.remove('hiddenElement');
            businessFields.classList.add('hiddenElement');
            dataFields.classList.add('hiddenElement');
            databaseFields.classList.add('hiddenElement');
            modelFields.classList.add('hiddenElement');
            sysAnaFields.classList.add('hiddenElement');
            docFields.classList.add('hiddenElement');
            webSiteCreationFields.classList.add('hiddenElement');
            break;
        case 'business':
            testFields.classList.add('hiddenElement');
            businessFields.classList.remove('hiddenElement');
            dataFields.classList.add('hiddenElement');
            databaseFields.classList.add('hiddenElement');
            modelFields.classList.add('hiddenElement');
            sysAnaFields.classList.add('hiddenElement');
            docFields.classList.add('hiddenElement');
            webSiteCreationFields.classList.add('hiddenElement');
            break;
        case 'data':
            testFields.classList.add('hiddenElement');
            businessFields.classList.add('hiddenElement');
            dataFields.classList.remove('hiddenElement');
            databaseFields.classList.add('hiddenElement');
            modelFields.classList.add('hiddenElement');
            sysAnaFields.classList.add('hiddenElement');
            docFields.classList.add('hiddenElement')
            webSiteCreationFields.classList.add('hiddenElement');
            break;
        case 'database':
            testFields.classList.add('hiddenElement');
            businessFields.classList.add('hiddenElement');
            dataFields.classList.add('hiddenElement');
            databaseFields.classList.remove('hiddenElement');
            modelFields.classList.add('hiddenElement');
            sysAnaFields.classList.add('hiddenElement');
            docFields.classList.add('hiddenElement');
            webSiteCreationFields.classList.add('hiddenElement');
            break;
        case 'model':
            testFields.classList.add('hiddenElement');
            businessFields.classList.add('hiddenElement');
            dataFields.classList.add('hiddenElement');
            databaseFields.classList.add('hiddenElement');
            modelFields.classList.remove('hiddenElement');
            sysAnaFields.classList.add('hiddenElement');
            docFields.classList.add('hiddenElement');
            webSiteCreationFields.classList.add('hiddenElement');
            break;
        case 'sysAna':
            testFields.classList.add('hiddenElement');
            businessFields.classList.add('hiddenElement');
            dataFields.classList.add('hiddenElement');
            databaseFields.classList.add('hiddenElement');
            modelFields.classList.add('hiddenElement');
            sysAnaFields.classList.remove('hiddenElement');
            docFields.classList.add('hiddenElement');
            webSiteCreationFields.classList.add('hiddenElement');
            break;
        case 'doc':
            testFields.classList.add('hiddenElement');
            businessFields.classList.add('hiddenElement');
            dataFields.classList.add('hiddenElement');
            databaseFields.classList.add('hiddenElement');
            modelFields.classList.add('hiddenElement');
            sysAnaFields.classList.add('hiddenElement');
            docFields.classList.remove('hiddenElement');
            webSiteCreationFields.classList.add('hiddenElement');
            break;
        case 'web':
            testFields.classList.add('hiddenElement');
            businessFields.classList.add('hiddenElement');
            dataFields.classList.add('hiddenElement');
            databaseFields.classList.add('hiddenElement');
            modelFields.classList.add('hiddenElement');
            sysAnaFields.classList.add('hiddenElement');
            docFields.classList.add('hiddenElement');
            webSiteCreationFields.classList.remove('hiddenElement');
            break;
    }
});