import { readFile, writeFile } from "node:fs/promises";
import { createId } from "@paralleldrive/cuid2";

const DUPLICATE_X_TIMES = 10000;

async function readTemplateFile(filePath: string): Promise<string> {
  try {
    return await readFile(filePath, { encoding: "utf-8" });
  } catch (error) {
    console.error("Failed to read file:", error);
  }

  return "";
}

async function main() {
  const templateContent = await readTemplateFile("app/routes/template.tsx");

  for (let i = 0; i < DUPLICATE_X_TIMES; i++) {
    const id = createId();
    const newFilePath = `app/routes/${id}.tsx`;
    writeFile(newFilePath, templateContent);
  }
}

main();
