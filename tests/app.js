
const routes = {
  '': renderDashboard,
  'dashboard': renderDashboard,
  'procurements': renderProcurementList,
  'new-procurement': renderNewProcurement,
  'register': renderRegister,
  'login': renderLogin,
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

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const route = event.target.getAttribute('data-route');
      navigateTo(`/#/${route}`);
    });
  });

  renderContent(getRoute(window.location.pathname));
});