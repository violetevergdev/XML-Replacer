import fs from "fs";
import iconv from "iconv-lite";
import xmldom from "xmldom";

const DOMParser = xmldom.DOMParser;
const XMLSerializer = xmldom.XMLSerializer;

export const fileEditor = (filePath, oldBankNumber, newBankNumber) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const decodedXml = iconv.decode(data, "WINDOWS-1251");

    let doc = new DOMParser().parseFromString(decodedXml, "text/xml");

    let fileName = doc.getElementsByTagName("ИмяФайла")[0];

    if (fileName.textContent.endsWith(oldBankNumber + ".XML")) {
      fileName.textContent = fileName.textContent.replace(
        oldBankNumber + ".XML",
        newBankNumber + ".XML",
      );
    }
    if (doc.getElementsByTagName("ИмяФайла")[1]) {
      doc.getElementsByTagName("ИмяФайла")[1].textContent =
        fileName.textContent;
    }

    let bankNumber = doc.getElementsByTagName("НомерБанка")[0];
    if (bankNumber.textContent.endsWith(oldBankNumber)) {
      bankNumber.textContent = newBankNumber;
    }

    let newXml = new XMLSerializer().serializeToString(doc);
    const newDecodedXml = iconv.encode(newXml, "WINDOWS-1251");
    const newFilePath = filePath.replace(oldBankNumber, newBankNumber);

    fs.writeFileSync(newFilePath, newDecodedXml);
    fs.unlinkSync(filePath);
  });
};
