import { mkdir, rm } from "fs/promises";

await mkdir("uploads/resume", { recursive: true });
await mkdir("/upload/images");

await rm("uploads", { recursive: true });
