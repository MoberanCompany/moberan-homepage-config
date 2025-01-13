import fs from "fs";
import path from "path";
import { generateMetaHtml } from "./meta";
import { historyGenerate } from "./history";
import { generateCompanyInformationHtml } from "./introduction";
import { peopleGenerate } from "./people";
import { generateProductHtml } from "./product";
import { generatePiechart } from "./piechart";
import { generateAlbum } from "./album";
import { uploadFolder } from "./uploader";

// const PHOTO_ACCOUNT = process.env.PHOTO_ACCOUNT;
// console.info(`synology account: ${PHHTO_ACCOUNT}`);

console.info("prepare directory");

try {
  fs.rmSync("public/html", { recursive: true });
} catch (e) {
  // ignore
}

fs.mkdirSync("public/html", { recursive: true });

async function main() {
  const meta = fs.readFileSync(
    path.join(__dirname, "../data/meta.json"),
    "utf-8"
  );
  fs.writeFileSync(
    "public/html/meta.html",
    generateMetaHtml(JSON.parse(meta)),
    {
      encoding: "utf-8",
    }
  );

  const history = fs.readFileSync(
    path.join(__dirname, "../data/history.json"),
    "utf-8"
  );

  const historyHtml = historyGenerate(JSON.parse(history));
  fs.writeFileSync("public/html/history.html", historyHtml, {
    encoding: "utf-8",
  });

  const introduction = fs.readFileSync(
    path.join(__dirname, "../data/introduction.json"),
    "utf-8"
  );

  const introductionHtml = generateCompanyInformationHtml(
    JSON.parse(introduction)
  );
  fs.writeFileSync("public/html/introduction.html", introductionHtml, {
    encoding: "utf-8",
  });

  const people = fs.readFileSync(
    path.join(__dirname, "../data/people.json"),
    "utf-8"
  );

  const peopleHtml = peopleGenerate(JSON.parse(people));
  fs.writeFileSync("public/html/people.html", peopleHtml, {
    encoding: "utf-8",
  });

  const product = fs.readFileSync(
    path.join(__dirname, "../data/product.json"),
    "utf-8"
  );

  const productHtml = generateProductHtml(JSON.parse(product));
  fs.writeFileSync("public/html/product.html", productHtml, {
    encoding: "utf-8",
  });

  const piechartHtml = generatePiechart();
  fs.writeFileSync("public/html/piechart.html", piechartHtml, {
    encoding: "utf-8",
  });

  const albumHtml = await generateAlbum();
  fs.writeFileSync("public/html/album.html", albumHtml.join(""), {
    encoding: "utf-8",
  });

  console.info("complete html generation");

  await uploadFolder({
    folderPath: "public",
    uploadDir: "/Tomcat/ROOT",
  });

  console.info("upload success");
}

main();
