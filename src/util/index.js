import { readdir } from "fs/promises"

export const folders = async (folder) =>
  (await readdir(folder, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map(({ name }) => name)

export const files = async (folder) =>
  (await readdir(folder, { withFileTypes: true })).map(({ name }) => name)
