const config = require("./config");

const priorities = {
  debug: 10,
  info: 20,
  error: 30,
};

const threshold = priorities[config.logLevel] || priorities.info;

const write = (level, message, context = {}) => {
  if (priorities[level] < threshold) {
    return;
  }

  const entry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...context,
  };

  const output = JSON.stringify(entry);

  if (level === "error") {
    console.error(output);
  } else {
    console.log(output);
  }
};

module.exports = {
  debug: (message, context) => write("debug", message, context),
  info: (message, context) => write("info", message, context),
  error: (message, context) => write("error", message, context),
};