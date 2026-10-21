document.addEventListener('DOMContentLoaded', () => {
  const postInput = document.getElementById('postInput');
  const postBtn = document.getElementById('postBtn');
  const postsFeed = document.getElementById('postsFeed');
  const logoutBtn = document.getElementById('logoutBtn');

  // আগের পোস্টসমূহ লোড
  let posts = JSON.parse(localStorage.getItem('appPosts')) || [];
  renderPosts();

  // নতুন পোস্ট যোগ করা
  if (postBtn) {
    postBtn.addEventListener('click', () => {
      const text = postInput.value.trim();
      if (text === '') {
        alert('অনুগ্রহ করে কিছু লিখুন!');
        return;
      }

      const newPost = {
        author: 'পারভেজ মিয়া',
        time: 'সাম্প্রতিক',
        content: text
      };

      posts.unshift(newPost);
      localStorage.setItem('appPosts', JSON.stringify(posts));
      postInput.value = '';
      renderPosts();
    });
  }

  // পোস্ট প্রদর্শন ফাংশন
  function renderPosts() {
    if (!postsFeed) return;
    postsFeed.innerHTML = '';
    
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('single-post');
      postElement.innerHTML = `
        <div class="post-author">${post.author}</div>
        <div class="post-time">${post.time}</div>
        <div class="post-content">${post.content}</div>
      `;
      postsFeed.appendChild(postElement);
    });
  }

  // ID দিয়ে লগআউট
  if (logoutBtn) {
    logoutBtn.addEventListener('click', performLogout);
  }
});

// সরাসরি HTML onclick হ্যান্ডলারের জন্য গ্লোবাল লগআউট ফাংশন
function performLogout() {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('user');
  window.location.href = 'login.html';
}

// যদি HTML-এ onclick="handleLogout()" দেওয়া থাকে
window.handleLogout = performLogout;
window.logout = performLogout;
