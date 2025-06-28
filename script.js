function openModal(name, sr, matches, jersey, performance) {
  document.getElementById('playerName').innerText = name;
  document.getElementById('strikeRate').innerText = sr;
  document.getElementById('matches').innerText = matches;
  document.getElementById('jersey').innerText = jersey;
  document.getElementById('performance').innerText = performance;
  document.getElementById('playerModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('playerModal').style.display = 'none';
}

// Close modal on outside click
window.onclick = function(event) {
  const modal = document.getElementById('playerModal');
  if (event.target === modal) {
    closeModal();
  }
}
