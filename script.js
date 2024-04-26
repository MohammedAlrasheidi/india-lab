document.addEventListener('DOMContentLoaded', function() {
  // Function to load data from data.json
  function loadData() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Populate form with data
        populateForm(data);
      })
      .catch(error => {
        console.error('Error loading data:', error);
      });
  }

  // Event listener for the load data button
  let loadDataButton = document.getElementById('load-data-button');
  if (loadDataButton) {
    loadDataButton.addEventListener('click', function() {
      loadData();
    });
  } else {
    console.error("Load data button not found in the DOM.");
  }

  // Function to populate form with data
  function populateForm(data) {
    const userData = {
      firstName: 'MO',
      lastName: 'ALrashidi',
      dateOfBirth: 'mm/dd/yyyy',
      phoneNumber: '123456789',
      lNumber: 'L00234567',
      username: 'Mo2000',
      password: '123456'
    };
    
    document.getElementById('fname').value = userData.firstName;
    document.getElementById('lname').value = userData.lastName;
    document.getElementById('date').value = userData.dateOfBirth;
    document.getElementById('pnum').value = userData.phoneNumber;
    document.getElementById('lnum').value = userData.lNumber;
    document.getElementById('usern').value = userData.username;
    document.getElementById('pass').value = userData.password;
  }

  // Add event listener to show/hide other destination input
  let selectEl = document.getElementById('dest');
  let txtCustom = document.getElementById('other-destination');
  if (selectEl && txtCustom) {
    selectEl.addEventListener('change', function(e) {
      txtCustom.style.display = e.target.value === 'Other' ? 'block' : 'none';
    });
  } else {
    console.error("One or more elements not found in the DOM.");
  }
});
