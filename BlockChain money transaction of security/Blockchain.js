const blockchain = [];
const form = document.getElementById('transactionForm');
const blockchainDiv = document.getElementById('blockchain');
const validateBtn = document.getElementById('validateBtn');
const validationResult = document.getElementById('validationResult');
const searchInput = document.getElementById('searchInput');
const clearBlockchainBtn = document.getElementById('clearBlockchain');
const alertsDiv = document.getElementById('alerts');
const toggleModeBtn = document.getElementById('toggleMode');

// Hash function using crypto.subtle
function sha256(message) {
  return crypto.subtle.digest('SHA-256', new TextEncoder().encode(message))
    .then(hashBuffer => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    });
}

// Handle transaction form
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const sender = document.getElementById('sender').value;
  const receiver = document.getElementById('receiver').value;
  const amount = document.getElementById('amount').value;
  const timestamp = new Date().toLocaleString();

  const previousHash = blockchain.length > 0 ? blockchain[blockchain.length - 1].hash : '0000';
  const data = `${sender}-${receiver}-${amount}-${timestamp}-${previousHash}`;
  const hash = await sha256(data);

  const block = {
    index: blockchain.length + 1,
    sender,
    receiver,
    amount,
    timestamp,
    previousHash,
    hash
  };

  blockchain.push(block);
  displayBlock(block);
  updateTransactionHistory();
  showAlert('Transaction Added Successfully!', 'success');
  form.reset();
});

// Display block in blockchain
function displayBlock(block) {
  const div = document.createElement('div');
  div.className = 'block';
  div.innerHTML = `
    <pre>
Block #: ${block.index}
Timestamp: ${block.timestamp}
From: ${block.sender}
To: ${block.receiver}
Amount: ₹${block.amount}
Prev Hash: ${block.previousHash}
Hash: ${block.hash}
    </pre>
  `;

  const copyButton = document.createElement('button');
  copyButton.className = 'copy-btn';
  copyButton.textContent = 'Copy Hash';
  copyButton.onclick = () => copyToClipboard(block.hash);

  div.appendChild(copyButton);
  blockchainDiv.appendChild(div);
}

// Update transaction table
function updateTransactionHistory() {
  const tableBody = document.querySelector('#transactionTable tbody');
  tableBody.innerHTML = '';

  blockchain.forEach(block => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${block.index}</td>
      <td>${block.sender}</td>
      <td>${block.receiver}</td>
      <td>₹${block.amount}</td>
      <td>${block.timestamp}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Search functionality for transactions
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const rows = document.querySelectorAll('#transactionTable tbody tr');

  rows.forEach(row => {
    const sender = row.cells[1].textContent.toLowerCase();
    const receiver = row.cells[2].textContent.toLowerCase();

    if (sender.includes(query) || receiver.includes(query)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

// Clear blockchain
clearBlockchainBtn.addEventListener('click', () => {
  blockchain.length = 0;
  blockchainDiv.innerHTML = '';
  updateTransactionHistory();
  showAlert('Blockchain Cleared!', 'error');
});

// Blockchain Validation
validateBtn.addEventListener('click', async () => {
  let valid = true;

  for (let i = 1; i < blockchain.length; i++) {
    const prevBlock = blockchain[i - 1];
    const currBlock = blockchain[i];

    const data = `${currBlock.sender}-${currBlock.receiver}-${currBlock.amount}-${currBlock.timestamp}-${currBlock.previousHash}`;
    const recalculatedHash = await sha256(data);

    if (currBlock.previousHash !== prevBlock.hash || currBlock.hash !== recalculatedHash) {
      valid = false;
      break;
    }
  }

  validationResult.textContent = valid
    ? "✅ Blockchain is VALID and SECURE."
    : "❌ Blockchain has been TAMPERED with!";
  validationResult.style.color = valid ? "lightgreen" : "red";
});

// Light/Dark Mode Toggle
toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('mode', currentMode);
});

// Check localStorage for previous theme
window.addEventListener('load', () => {
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.add('light-mode');
  }
});

// Show alert
function showAlert(message, type) {
  const alert = document.createElement('div');
  alert.className = `alert ${type}`;
  alert.textContent = message;
  alertsDiv.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 3000);
}

// Copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showAlert('Hash Copied!', 'success');
  }).catch(() => {
    showAlert('Failed to copy hash.', 'error');
  });
}
