import axios from "axios";
import { fileFromPath } from "formdata-node/file-from-path";
import { FormData } from "formdata-node";
import fs from "fs";
import path from "path";

export async function uploadFolder({
  cookie,
  folderPath,
  uploadDir,
}: {
  cookie?: string;
  folderPath: string;
  uploadDir: string;
}) {
  if (cookie === undefined) {
    cookie = await auth();
  }
  if (cookie !== undefined) {
    const files = await fs.promises.readdir(folderPath);
    // folderPath 하위에 있는 모든 파일을 업로드 하는데, 하위 폴더까지 반복 탐색하도록
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const stat = await fs.promises.stat(filePath);
      if (stat.isDirectory()) {
        await uploadFolder({
          cookie,
          folderPath: filePath,
          uploadDir,
        });
      } else {
        await upload({ cookie, filePath, uploadDir });
      }
    }
  } else {
    throw Error("auth failed");
  }
}

async function auth() {
  const PHOTO_ACCOUNT = process.env.PHOTO_ACCOUNT;
  const PHOTO_PASSWORD = process.env.PHOTO_PASSWORD;

  // login
  const loginRes = await axios.get(
    `https://photo.moberan.com//webapi/auth.cgi`,
    {
      withCredentials: true,
      params: {
        api: "SYNO.API.Auth",
        version: "3",
        method: "login",
        account: PHOTO_ACCOUNT,
        passwd: PHOTO_PASSWORD,
        session: "FileStation",
      },
    }
  );

  if (loginRes.data.success == false) {
    throw Error(`login fail ${loginRes.data}`);
  }

  return loginRes.headers["set-cookie"]?.join("; ");
}

async function upload({
  cookie,
  filePath,
  uploadDir,
}: {
  cookie: string;
  filePath: string;
  uploadDir: string;
}) {
  const uploadPath = path.posix.join(
    uploadDir,
    filePath.replace(/\\/g, "/"),
    ".."
  );

  console.info(`upload ${filePath} to ${uploadPath}`);

  const form = new FormData();
  form.append("path", uploadPath);
  form.append("create_parents", true);
  form.append("overwrite", true);
  form.append("file", await fileFromPath(filePath));

  const uploadRes = await axios.post(
    `https://photo.moberan.com//webapi/auth.cgi`,
    form,
    {
      withCredentials: true,
      headers: {
        cookie,
      },
      params: {
        api: "SYNO.FileStation.Upload",
        version: "2",
        method: "upload",
      },
    }
  );

  if (uploadRes.data.success == false) {
    throw Error(`upload fail ${uploadRes.data}`);
  }
}
