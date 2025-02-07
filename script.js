document.getElementById('calculate').addEventListener('click', function () {
    const amount = parseFloat(document.getElementById('amount').value);
    const percentage = parseFloat(document.getElementById('percentage').value);
  
    if (!amount || !percentage) {
      document.getElementById('result-text').textContent = 'Please enter valid values.';
      return;
    }
  
    const fee = (amount * percentage) / 100;
    const total = amount + fee;
  
    document.getElementById('result-text').textContent = `Fee: ${fee.toFixed(2)} EGP, Total: ${total.toFixed(2)} EGP`;
  });
  