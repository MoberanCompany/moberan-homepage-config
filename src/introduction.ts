function generateInformation({
  url,
  text,
  textSize,
  textUnitYN,
  textUnit,
  textUnitSize,
  subTextYN,
  subText,
  subTextSize,
  asset,
}: {
  url: string;
  text: string;
  textSize: string;
  textUnitYN: string;
  textUnit: string;
  textUnitSize: string;
  subTextYN: string;
  subText: string;
  subTextSize: string;
  asset: string;
}) {
  if (url != null) {
    return `
            <li>
                <div style="display: flex; justify-content: center; align-items: center; height: 73px;">
                    <img src="${getRawAssetPath(asset)}">
                </div>
                <img src="${url}">
            </li>
        `;
  } else {
    text = encodeURIComponent(text);
    textUnit = encodeURIComponent(textUnit);
    subText = encodeURIComponent(subText);

    return `
            <li>
                <div style="display: flex; justify-content: center; align-items: center; height: 73px;">
                    <img src="${getRawAssetPath(asset)}">
                </div>
                <img src="https://mwidget.moberan.com/api/svg/text/info?text=${text}&textSize=${textSize}&textUnitYN=${textUnitYN}&textUnit=${textUnit}&textUnitSize=${textUnitSize}&subTextYN=${subTextYN}&subText=${subText}&subTextSize=${subTextSize}">
            </li>
        `;
  }
}

function getRawAssetPath(assetName: string) {
  return `/public/introduction/info_ico/${assetName}?raw=true`;
}

export function generateCompanyInformationHtml(datas: any[]) {
  const datasArr: string[] = [];

  datas.map((data: any) => {
    datasArr.push(generateInformation(data));
  });

  return datasArr.join("\n");
}

export function generatePieHtml() {
  return `
    <img src="https://mwidget.moberan.com/api/widget/b8b329bf-42a3-4ca2-9783-7a8a65f87707" width="100%" height="100%">
  `;
}
