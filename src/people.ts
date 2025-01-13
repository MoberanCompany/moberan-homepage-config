export function peopleGenerate(peopleData: any[]) {
  let divs = peopleData.map((e) => {
    let div = `
        <li class="fl" data-aos="flip-right" data-aos-offset="-400" data-aos-delay="200" data-aos-duration="600"
            data-aos-anchor-placement="top-center">
            <a href="${e.link}" target="_blank">
                <div class="staff_list">
                    <div class="staff_thumb">
                        <img src="${e.image}" style="object-fit: cover;aspect-ratio: 1/1;" alt="${e.name} 프로필 사진">
                    </div>
                    <div class="staff_txt">
                        <h4 class="staff_tit">${e.name}</h4>
                        <p class="staff_pos">${e.role}</p>
                        <p class="staff_info">${e.bio}</p>
                    </div>
                </div>
            </a>
        </li>
        `;
    return div;
  });

  return divs.join("\n");
}
