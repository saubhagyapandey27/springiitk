function searchStudents() {
    var selectedBatch = document.getElementById("batch").value;
    var selectedDepartment = document.getElementById("department").value;

    // Add logic here to handle the selected values (e.g., display results or redirect).
    console.log("Batch:", selectedBatch);
    console.log("Department:", selectedDepartment);
  }

  function makeEditable(boxId) {
    var box = document.getElementById(boxId);
    var textarea = document.getElementById('text-input-' + boxId);

    box.style.display = 'none';
    textarea.style.display = 'block';
    textarea.focus();

    // Add a click event listener to the document
    document.addEventListener('click', function onClickOutside(event) {
      if (!box.contains(event.target) && !textarea.contains(event.target)) {
        // If the click is outside both the box and textarea, make it non-editable
        makeNonEditable(boxId);
        // Remove the click event listener from the document
        document.removeEventListener('click', onClickOutside);
      }
    });
  }

  function makeNonEditable(boxId) {
    var box = document.getElementById(boxId);
    var textarea = document.getElementById('text-input-' + boxId);

    if (textarea.value === '') {
      // If the textarea is empty, show the original box content
      box.style.display = 'block';
      textarea.style.display = 'none';
    }
  }
  
