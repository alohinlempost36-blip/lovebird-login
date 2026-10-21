document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('currentUser');
      localStorage.removeItem('isLoggedIn');
      window.location.href = 'login.html';
    });
  }
});
