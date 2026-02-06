function getHero(title, desc, img_src, img_caption, index, p1, i1, p2, i2, p3, i3) {
    return `
    <div class="d-flex flex-column flex-md-row">
        <div class="col-12 col-md-7 d-flex flex-column order-last ${(index % 2 === 0) ? "order-md-first img-desc" : "align-items-end img-desc-right"}" data-aos="${(index % 2 === 0) ? "fade-right" : "fade-left"}">
            <figure class="figure d-flex flex-column align-items-start ${(index % 2 === 0) ? "" : "align-items-md-end"}">
                <img class="img-fluid figure-img border rounded border-3" src="/assets/img/${img_src}"  alt="${img_src}" />
                <figcaption class="figure-caption text-start d-flex justify-content-start info-text">${img_caption}</figcaption>
            </figure>
        </div>
        <div>
            <h3>${title}</h3>
            <p>${desc}</p>
            <ul>
                <li>${i1}${p1}</li>
                <li>${i2}${p2}</li>
                <li>${i3}${p3}</li>
            </ul>
            <a href="#">Learn More
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
                </svg>
            </a>
        </div>
    </div>
    <hr class="my-5" />
    `;
}

function getHeros(heros_data) {
    return `
    <div class="container-fluid">
        <div class="col" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            ${heros_data.map((hero, i) => {
                return getHero(hero.title, hero.desc, hero. img_src, hero.img_caption,
                    i, hero.p1, hero.i1, hero.p2, hero.i2, hero.p3, hero.i3);
                }).join('\n')
            }
        </div>
    </div>
    `;
}

function displayHeros(heros_data, color) {
    const $heros = $("#heros");
    $heros.html(getHeros(heros_data));
    $heros.css('--project-icons-color', color);
}

async function loadIcon(icon_name, icon_path) {
    // If the icon_name is already an SVG or HTML element, return it directly
    if (icon_name.startsWith("<i") || icon_name.startsWith("<svg")) {
        return icon_name;
    }

    const iconPath = icon_name.includes('/') ? `/assets/img/icons/${icon_name}.svg` :
                                                           `/assets/img/icons/${icon_path}/${icon_name}.svg`;

    return fetch(iconPath)
    .then(response => response.text())
    .then(data => data)
    .catch(error => console.error('Error fetching icon:', error));
}

export default async function loadHeros(file_name, path, color) {
    $("#wait-txt").text("Please wait, loading...");
    const dataUrl = new URL(`${path}/${file_name}`, import.meta.url);
    fetch(dataUrl)
    .then(response => response.json()) // Parse the JSON response
    .then(async data => {
        for (let i = 0; i < data.length; i++) {
            data[i].i1 = await loadIcon(data[i].i1, path);
            data[i].i2 = await loadIcon(data[i].i2, path);
            data[i].i3 = await loadIcon(data[i].i3, path);
        }

        displayHeros(data, color);
    }) // Work with the resulting JavaScript object
    .catch(error => console.error('Error fetching JSON:', error));
}