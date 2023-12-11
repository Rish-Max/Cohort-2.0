import { promises as fs } from "fs";

async function readFile(path) {
  try {
    if (path == null) {
      throw new Error("Please provide path name");
    }
    let data = await fs.readFile(path);
    console.log(data.toString());
  } catch (error) {
    console.error(error);
  }
}

readFile("file_name.md");
