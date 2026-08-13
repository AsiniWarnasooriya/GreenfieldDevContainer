const parsePort = (value, fallback) => {
  const port = Number.parseInt(value, 10);

  if (Number.isInteger(port) && port > 0 && port <= 65535) {
    return port;
  }

  return fallback;
};

module.exports = Object.freeze({
  port: parsePort(process.env.PORT, 3000),
  logLevel: process.env.LOG_LEVEL || "info",
});