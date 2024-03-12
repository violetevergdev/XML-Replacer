/** @format */

import readline from "readline";
import fs from "fs";
import path from "path";
import { fileEditor } from "./fileEditor.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введите старый номер банка:", (oldBankNumber) => {
  rl.question("Введите новый номер банка:", (newBankNumber) => {
    fs.readdir("C:/***/***/0/***/Основной/1", (err, files) => {
      if (err) {
        console.log(err);
        return;
      }
      files.forEach((file) => {
        if (file.endsWith(oldBankNumber + ".XML")) {
          const filePath = path.join("C:/***/***/0/***/Основной/1", file);

          fileEditor(filePath, oldBankNumber, newBankNumber);
        }
      });
    });

    rl.close();
  });
});
