const express = require("express");
const config = require("./config");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Greenfield Dev Container</title>
        <style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 24px;
    background-color: #f4f7fb;
    color: #1f2937;
    font-family: Arial, sans-serif;
  }

  main {
    max-width: 800px;
    margin: 40px auto;
    padding: 32px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  h1,
  h2 {
    color: #174ea6;
  }

  .about {
    margin-top: 32px;
    padding: 24px;
    background-color: #eef4ff;
    border-left: 5px solid #174ea6;
    border-radius: 6px;
  }

  p {
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    body {
      padding: 12px;
    }

    main {
      margin: 16px auto;
      padding: 20px;
    }

    .about {
      padding: 16px;
    }
  }
</style>
      </head>

      <body>
        <main>
          <h1>Greenfield Dev Container</h1>
          <p>Hello from Greenfield Dev Container!</p>

          <section class="about">
            <h2>About</h2>
            <p>
              Greenfield Dev Container provides a consistent, container-based
              development environment for building and running Node.js projects.
            </p>
          </section>
        </main>
      </body>
    </html>
  `);
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});