// tendering.js
document.getElementById('tenderSubmissionForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const tenderData = Object.fromEntries(formData.entries());
  
    fetch('/api/submit-bid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tenderData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Bid submitted successfully') {
          alert('Bid submitted successfully');
          event.target.reset();
        } else {
          alert('Bid submission failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  
  document.getElementById('opportunityPostingForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const opportunityData = Object.fromEntries(formData.entries());
  
    fetch('/api/post-opportunity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(opportunityData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Opportunity posted successfully') {
          alert('Opportunity posted successfully');
          event.target.reset();
        } else {
          alert('Opportunity posting failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });