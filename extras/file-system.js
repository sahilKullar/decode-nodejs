const fs = require("fs").promises;

const getStats = async (path) => {
  try {
    // Pass in the file path
    const stats = await fs.stat(path);
    console.log(stats);
    console.log(`isFile: ${stats.isFile()}`);
    console.log(`isDirectory: ${stats.isDirectory()}`);
  } catch (error) {
    console.error(error);
  }
};

const readFile = async (path) => {
  try {
    const contents = await fs.readFile(path, "utf8");
    console.log(contents);
  } catch (error) {
    console.error(error);
  }
};

const writeFile = async (path, data) => {
  try {
    await fs.writeFile(path, data);
  } catch (error) {
    console.error(error);
  }
};

const appendFile = async (path, data) => {
  try {
    await fs.appendFile(path, data);
  } catch (error) {
    console.error(error);
  }
};

// getStats("./test.txt");
readFile("./test.txt");
writeFile("./test.txt", "hello");
appendFile("./test.txt", "appending another hello world");
