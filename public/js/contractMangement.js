// contractManagement.js
document.getElementById('contractCreationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const contractData = Object.fromEntries(formData.entries());
  
    fetch('/api/create-contract', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contractData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Contract created successfully') {
          alert('Contract created successfully');
          event.target.reset();
        } else {
          alert('Contract creation failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  
  document.getElementById('contractTrackingForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const contractId = formData.get('contractId');
  
    fetch(`/api/track-contract/${contractId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Contract tracking successful') {
          // Display the contract tracking information
          const contractInfo = data.contract;
          // Update the HTML elements with the contract information
          document.getElementById('contractStatus').textContent = contractInfo.status;
          document.getElementById('contractMilestones').textContent = contractInfo.milestones;
          // Add more fields as needed
        } else {
          alert('Contract tracking failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });