
  function showToast() {
    const toast = document.getElementById('toast');
    toast.className = 'toast';
    alert("hi");
    setTimeout(() => { toast.className = toast.className.replace('toast.show', ''); }, 2500);
  }

