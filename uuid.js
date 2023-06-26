const crypto = require("crypto");

function generateUUID() {
  const bytes = crypto.randomBytes(16);
  bytes[6] = (bytes[6] & 0x0f) | 0x40; // Version 4
  bytes[8] = (bytes[8] & 0x3f) | 0x80; // Variant 1

  const hex = bytes.toString("hex");
  return `${hex.substr(0, 8)}-${hex.substr(8, 4)}-${hex.substr(
    12,
    4
  )}-${hex.substr(16, 4)}-${hex.substr(20)}`;
}

// Example usage:

module.exports = generateUUID;
