function fromByteToHex(byte: number): string {
  return byte.toString(16).padStart(2, '0');
}

export default fromByteToHex;
