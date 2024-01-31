function deleteRow(row) {
    row.parentNode.parentNode.remove();
  }
  
  function updateRow(row) {
    alert("Update function is not implemented yet!");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        deleteRow(this);
      });
    });
  
    const updateButtons = document.querySelectorAll(".update");
    updateButtons.forEach((button) => {
      button.addEventListener("click", function () {
        updateRow(this);
      });
    });
});