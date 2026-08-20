const fs = require("fs");
const path = require("path");

function generateDistHtml() {
  const outputPublic = path.join(__dirname, "..", ".output", "public");
  const distDir = path.join(__dirname, "..", "dist");

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Copy .output/public contents to dist/
  if (fs.existsSync(outputPublic)) {
    fs.cpSync(outputPublic, distDir, { recursive: true });
  }

  const assetsDir = path.join(distDir, "assets");
  let cssLink = "";
  if (fs.existsSync(assetsDir)) {
    const cssFile = fs.readdirSync(assetsDir).find((f) => f.endsWith(".css"));
    if (cssFile) {
      cssLink = `\n    <link rel="stylesheet" href="/assets/${cssFile}" />`;
    }
  }

  const indexHtmlPath = path.join(distDir, "index.html");
  const htmlContent = `<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM</title>
    <link rel="icon" href="/favicon.ico" />${cssLink}
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

  fs.writeFileSync(indexHtmlPath, htmlContent, "utf-8");
  console.log("Successfully generated dist/index.html!");
}

try {
  generateDistHtml();
  process.exit(0);
} catch (err) {
  console.error("Error generating dist html:", err);
  process.exit(1);
}
