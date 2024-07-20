<script>
function showToast() {
  const toast = document.getElementById('toast');
  toast.className = 'toast show';
  setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 2500);
}
</script>