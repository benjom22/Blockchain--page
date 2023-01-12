/*var web3;

async function Connect(){
    await window.web3.currentProvider.enable();
    web3=new web3(window.web3.currentProvider);
}*/



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



/*const ethereumButton = document.querySelector('.enableEthereumButton');
        ethereumButton.addEventListener('click', () => {
          //Will Start the metamask extension
          ethereum.request({ method: 'eth_requestAccounts' });
        });*/

       