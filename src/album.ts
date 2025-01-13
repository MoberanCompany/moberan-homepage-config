/**
 * 설명
 * 1. nas api 를 이용하여, `이미지 id` 값들을 가져온다.
 * 2. `이미지 id` 를 통해 이미지를 요청하는 url을 생성한다.
 * 3. DOM string 을 생성하여 return 한다.
 *
 *
 * 버그
 * - 왜인지는 모르겠으나, 현재 slick 과 jquery 가 resource 를 두번호출 하는 버그가 있다.
 *
 * 문제 제기
 * - https://github.com/kenwheeler/slick/issues/3822
 */

import axios from "axios";

function wrapCors(url: string) {
  return `https://cors.bbear.workers.dev/?${encodeURIComponent(url)}`;
}

function makeGalleryImage(item: any) {
  const id = item.id;
  const cacheKey = item.additional?.thumbnail?.cache_key ?? "2810_1724393394";
  const alt = item.filename ?? "album image";
  const url =
    // wrapCors(
    `https://photo.moberan.com/webapi/entry.cgi?api=SYNO.FotoTeam.Thumbnail&method=get&version=1&id=${id}&type=unit&cache_key=${cacheKey}&size=m`;
  // );
  return `<div>\n\t<img style="border-radius: 15px;" data-lazy="${url}" alt="${alt}" />\n</div>\n`;
}

export async function generateAlbum() {
  const PHOTO_ACCOUNT = process.env.PHOTO_ACCOUNT;
  const PHOTO_PASSWORD = process.env.PHOTO_PASSWORD;

  const client = axios.create({
    withCredentials: true,
  });

  // login
  const loginRes = await client.get(
    `https://photo.moberan.com//webapi/auth.cgi`,
    {
      withCredentials: true,
      params: {
        api: "SYNO.API.Auth",
        version: "3",
        method: "login",
        account: PHOTO_ACCOUNT,
        passwd: PHOTO_PASSWORD,
      },
    }
  );

  const cookie = loginRes.headers["set-cookie"]?.join("; ");

  const { data } = await axios.get(
    `https://photo.moberan.com/webapi/entry.cgi`,
    {
      withCredentials: true,
      headers: {
        cookie,
      },
      params: {
        api: "SYNO.FotoTeam.Browse.Item",
        version: "1",
        method: "list",
        offset: 0,
        limit: 500,
        additional: '["thumbnail"]',
        type: "photo",
      },
    }
  );

  const resData = data.data.list;
  return resData.map((it: any) => makeGalleryImage(it));
}
