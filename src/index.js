const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Greenfield Dev Container</title>
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

app.listen(3000, () => {
  console.log("Server running on port 3000");
});