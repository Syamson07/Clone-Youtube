document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  
  // Toggle sidebar on menu button click
  menuBtn.addEventListener('click', function() {
    sidebar.classList.toggle('open');
  });
  
  // Close sidebar when clicking outside
  document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
      sidebar.classList.remove('open');
    }
  });
  
  // Active category item
  const categoryItems = document.querySelectorAll('.category-item');
  categoryItems.forEach(item => {
    item.addEventListener('click', function() {
      categoryItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Active sidebar item
  const sidebarItems = document.querySelectorAll('.sidebar li');
  sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
      sidebarItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Simulate loading more videos when scrolling to bottom
  window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
      // In a real app, you would fetch more videos here
      console.log('Load more videos...');
    }
  });
});