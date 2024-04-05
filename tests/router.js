/* router.js */
const routes = {
    '': renderDashboard,
    'dashboard': renderDashboard,
    'procurements': renderProcurementList,
    'new-procurement': renderNewProcurement,
  };
  
  function renderContent(route) {
    const renderer = routes[route] || renderNotFound;
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = '';
    renderer(appContainer);
  }
  
  function navigateTo(url) {
    history.pushState(null, null, url);
    renderContent(getRoute(url));
  }
  
  function getRoute(url) {
    const [, route = ''] = url.split('/#/');
    return route;
  }
  
  window.addEventListener('popstate', () => {
    renderContent(getRoute(window.location.pathname));
  });
  