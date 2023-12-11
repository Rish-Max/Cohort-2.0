import { promises as fs } from "fs";

async function writeToFile(content, fileName) {
  try {
    if (fileName == null) {
      throw new Error("Please provide a filename");
    }
    const file = await fs.writeFile(fileName, content);
    console.log(`File created`);
    return file;
  } catch (error) {
    console.error(error);
  }
}

writeToFile("content", "File_name.md");
