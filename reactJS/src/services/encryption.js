/**
 * Crypto-js AES Encryption and Decryption
 */

import Crypto from "crypto-js";

const key = Crypto.enc.Utf8.parse("y2W89L6BkRAFljhN");
const iv = Crypto.enc.Utf8.parse("dMitHORyqbeYVE0o");
const mode = Crypto.mode.CBC;

export const encode = data => {
  const encrypted = Crypto.AES.encrypt(data, key, {
    iv,
    mode
  });
  return encrypted.toString();
};

export const decode = data => {
  const stringDAta = "" + data;
  const decrypted = Crypto.AES.decrypt(stringDAta, key, {
    iv,
    mode,
    padding: Crypto.pad.Pkcs7
  });
  return decrypted.toString(Crypto.enc.Utf8);
};
