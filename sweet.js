document.getElementById('sweet-button').addEventListener('click', function() {
Swal.fire({
  title: 'Congrats',
  text: ' You clicked the button!',
  icon: 'success',
  confirmButtonText: 'Cool',
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  cancelButtonText: 'Cancel',
  showCancelButton: true,
});
}); // Outputs: 5