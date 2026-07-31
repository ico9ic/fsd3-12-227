import { writeFile} from "fs/promises";

await writeFile("hello.txt", "JS is Easy");

await appendFile("hello.txt", "\nJS is much easy than others");