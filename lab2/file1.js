import { writeFile, appendFile, readFile } from "fs/promises";

// await writeFile("hello.txt", "JS is Easy");

// await appendFile("hello.txt", "\nJS is much easy than others");

await appendFile("hello.txt", "\n🤭");

const content = await readFile("hello.txt", "utf-8");
console.log(content);
