if (typeof window.ethereum !== 'undefined') {
  // MetaMask is installed
  window.ethereum.enable().then(function (accounts) {
    // User has granted permission to their accounts
    // Use the accounts variable to access the user's accounts
    console.log(accounts)
  });
} else {
  // MetaMask is not installed
  console.log('Please install MetaMask to use this feature.')
}


// Function to submit a donation
  function submitDonation() {
    // Get the donation amount from the input field
    var donationAmount = document.getElementById("donation-amount").value;
    // Send the donation to the smart contract
    // ...

    // Add the donation to the table of past donations
    //var table = document.getElementById("past-donations");
    if(donationAmount>0){
      var table = document.getElementById("past-donations");
      var row = table.insertRow();
      var donorCell = row.insertCell(0);
      var amountCell = row.insertCell(1);
      donorCell.innerHTML = "You";
      amountCell.innerHTML = "$" + donationAmount;
    }
    else{
      console.log('Must be greater than 0');
    }
    /*var row = table.insertRow();
    var donorCell = row.insertCell(0);
    var amountCell = row.insertCell(1);
    donorCell.innerHTML = "You";
    amountCell.innerHTML = "$" + donationAmount;*/
    // Update the current balance
    var balance = 0;
    var FinalBalance = document.getElementById('current-balance');
    if (donationAmount > 0) {
      console.log("Transaction was successful!");
      // Update the balance
      var updBalance = document.getElementById('current-balance');
      updBalance.textContent = balance + donationAmount;
    } else {
      console.log("Failed!")
    }

}
// Function to get the current balance from the smart contract
// ...

