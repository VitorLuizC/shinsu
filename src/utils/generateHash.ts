import fromByteToHex from './fromByteToHex';

function generateHash(size = 8): string {
  const values = new Uint8Array(size / 2);

  // Fill in values array with really random numbers.
  window.crypto.getRandomValues(values);

  return Array.from(values, fromByteToHex).join('');
}

export default generateHash;
