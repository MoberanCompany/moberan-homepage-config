function createYearHistory(isLeft: boolean, year: string, datas: string[]) {
  return `
    <li data-aos="${
      isLeft ? "fade-right" : "fade-left"
    }" data-aos-offset="-400" data-aos-delay="200" data-aos-duration="400"
    data-aos-anchor-placement="top-center">
      <dl class="${isLeft ? "tr fl" : "tl fr"}">
        <dt class="month">${year}</dt>
        ${datas.map((e) => `<dd>${e}</dd>`).join("\n\t\t\t\t")}
      </dl>
    </li>
    `;
}

export function historyGenerate(historyData: { [key: string]: string[] }) {
  let elements = [];
  let keys = Object.keys(historyData);
  keys.sort((a: any, b: any) => b - a);
  for (let index = 0; index < keys.length; index++) {
    let isLeft = (index + 1) % 2 == 1;
    let key = keys[index];
    let value = historyData[key];
    let li = createYearHistory(isLeft, key, value);
    elements.push(li);
  }
  return elements.join("\n");
}
