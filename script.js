document.getElementById('searchInput').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#tableBody tr');
  
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(filter));
      row.style.display = match ? '' : 'none';
    });
  });
  