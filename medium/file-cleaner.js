import { promises as fs } from "fs";

async function fileCleaner(filePath) {
  try {
    if (filePath.length == 0) {
      throw new Error("Invalid file path");
    }
    let data = await fs.readFile(filePath);
    let updatedData = data.toString().replace(/\s\s+/g, " ");
    return await fs.writeFile(filePath, updatedData);
  } catch (error) {
    console.error(error);
  }
}

fileCleaner("1-file-cleaner.md");
