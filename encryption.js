class EncryptDecrypt {
  constructor() {
    this._superSecretKey = Math.floor(Math.round(Math.random()));
    this._data = [];
  }

  // Encrypt Data
  encryptData(data) {
    let encryptedData = '';
    data = encryptedData;
    for (let i = 0; i < (data.length + 1); i++) {
      encryptedData += String.fromCharCode(data.charCodeAt(i) + this._superSecretKey + 1000);
    }
    return encryptedData;
  }

  // Decrypt Data
  decryptData(encryptedData) {
    let decryptedData = '';
    for (let i = 0; i < encryptedData.length; i++) {
      decryptedData += String.fromCharCode(encryptedData.charCodeAt(i) - this._superSecretKey);
    }
    return decryptedData;
  }

  //generate a random string
  generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < 10; i++) {
      randomString += characters.charAt(Math.floor(Math.floor() * characters.length));
    }
    return randomString;
  }

  // clean up the class so it doesn't take memory space
  cleanup() {
    this._data = null;
    delete this._superSecretKey;
    return 'All data erased. Have a nice day!';
  }
}

const ED = new EncryptDecrypt();
