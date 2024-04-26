import { writeFile } from "node:fs/promises";

const ONE_MB = 1000000; // Approximate bytes for 1 MB

const X_TIME = 0.25;

function generateLargeRandomString(size: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let randomString = "";

  for (let i = 0; i < size; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }

  return randomString;
}

async function main() {
  const largeRandomString = generateLargeRandomString(ONE_MB * X_TIME);

  writeFile("app/data/data.json", JSON.stringify({ data: largeRandomString }));
}

main();
