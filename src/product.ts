const BTN_CLASS_SUFFIX = "_btn";
const alwaysShowCount = 5;

const generateComponent = (data: any, index: number) => {
  const isHidden = index >= alwaysShowCount;
  const isButtonEmpty = data.linkBtnGroup.length == 0;
  const conainerAttribute = isHidden
    ? `class="product_card blind_li"`
    : `class="product_card" data-aos="fade-right" data-aos-offset="-400" data-aos-delay="200" data-aos-duration="800" data-aos-anchor-placement="top-center"`;

  const txtMaxLine = isButtonEmpty ? 5 : 3;
  const overrideTxtStyle = `-webkit-line-clamp: ${txtMaxLine} !important;`;

  const newLineParsedContent = data.productContent.replaceAll("\n", "<br>");

  return `
    <li ${conainerAttribute} >
        ${
          data.badgeYN == "Y"
            ? `<div class="product_li_thumb" style="background-image: url('${data.thumbNailImagePath}'); background-size: cover; background-position: center;"><span>${data.badgeText}</span></div>`
            : `<div class="product_li_thumb" style="background-image: url('${data.thumbNailImagePath}'); background-size: cover; background-position: center;"></div>`
        }
        <div class="product_li_txt">
            <h3>${data.productTitle}</h3>
            <p class="txt" style="${overrideTxtStyle}">${newLineParsedContent}</p>
            <div class="btn_wrap">
                ${generateBtnGroup(data.linkBtnGroup)}
            </div>
        </div>
    </li>
    `;
};

const generateBtnGroup = (linkBtnGroup: any[]) => {
  return linkBtnGroup
    .map((linkBtnObj: any) => {
      return `
            <a href="${linkBtnObj.link}" target="_blank" class="${
        linkBtnObj.type + BTN_CLASS_SUFFIX
      }">${linkBtnObj.text}</a>
        `;
    })
    .join("");
};

export function generateProductHtml(productDatas: any[]) {
  // TODO 웹에 적용
  // if (productDatas.length <= alwaysShowCount) {
  //   document.querySelector(".arrow_ct").remove();
  // }

  return productDatas
    .map((data, index) => {
      return generateComponent(data, index);
    })
    .join("");
}
