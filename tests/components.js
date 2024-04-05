function renderDashboard(container) {
    const dashboard = `
      <div>
        <h1>Welcome to the Procurement Management System</h1>
        <!-- Add dashboard components -->
      </div>
    `;
    container.innerHTML = dashboard;
  }
  
  function renderProcurementList(container) {
    const procurementList = `
      <div>
        <h1>Procurement List</h1>
        <!-- Add procurement list components -->
      </div>
    `;
    container.innerHTML = procurementList;
  }
  
  function renderNewProcurement(container) {
    const newProcurement = `
      <div>
        <h1>New Procurement</h1>
        <!-- Add new procurement form components -->
      </div>
    `;
    container.innerHTML = newProcurement;
  }