document.getElementById('idServiceType').addEventListener('change', function() {
    var webFields = document.getElementById('webFields');
    
    switch (this.value) {
        case 'web':
            webFields.classList.remove('hiddenElement');
            break;
        case 'data':
            webFields.classList.add('hiddenElement');
            break;
        case 'doc':
            webFields.classList.add('hiddenElement');
            break;
        case 'test':
            webFields.classList.add('hiddenElement');
            break;
    }
});