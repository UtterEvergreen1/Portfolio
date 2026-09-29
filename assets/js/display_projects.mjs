import getProjects from './get_projects.mjs';

let projects = [];
const active_filter_name = 'current-filter';

const $grid = $("#projects-grid");
const $gridTitle = $("#projects-title");

const $roadmapCards = $("#roadmap-cards");
const $roadmapTitle = $("#roadmap-title");
const $roadmapSection = $("#roadmap-section");

async function displayProjects() {
    projects = await getProjects();

    renderProjects();
    renderRoadmap();

    $(".filter-btn").each((index, btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove(active_filter_name));
            btn.classList.add(active_filter_name);
            renderProjects(btn.dataset.filter);
            renderRoadmap(btn.dataset.filter);
        });
    });
}


function getBadgesHtml(project) {
    let badgeHtml = '<div class="mb-2">';
    if (Object.hasOwn(project, "open_source") && project.open_source === true)
        badgeHtml += '<span class="badge d-inline-block open-source-badge">Open Source</span>';

    if (Object.hasOwn(project, "coming_soon") && project.coming_soon === true)
        badgeHtml += '<span class="badge d-inline-block coming-soon-badge">Coming Soon</span>';

    if (Object.hasOwn(project, "featured") && project.featured === true)
        badgeHtml += '<span class="badge d-inline-block tech-badge">Featured</span>';

    (project.tech || []).forEach(tech => {
        badgeHtml += '<span class="badge d-inline-block tech-badge">' + tech + '</span>';
    });
    (project.categories || []).forEach(category => {
        badgeHtml += `<span class="badge d-inline-block category-badge">${category}</span>`;
    });
    badgeHtml += '</div>';
    return badgeHtml;
}

function renderProjects(filter = "all") {
    $grid.empty();

    let filtered = (projects || []).filter(p => !p.coming_soon);
    switch (filter) {
        case "all":
            $gridTitle.text("All Projects of Daniel Losso-Kiss");
            break;
        case "featured":
            filtered = filtered.filter(p => p.featured);
            $gridTitle.text("Featured Projects of Daniel Losso-Kiss");
            break;
        default:
            filtered = filtered.filter(p => p.tech.includes(filter));
            $gridTitle.text(filter.charAt(0).toUpperCase() + filter.slice(1) + " Projects of Daniel Losso-Kiss");
            break;
    }

    if (filtered.length === 0) {
        $grid.html('<p class="text-center col-12">No projects in this category yet.</p>');
        return;
    }

    filtered.forEach(p => {
        const $projectCard = $("<div>");
        $projectCard.addClass("col");
        $projectCard.html(`
    	<a href="${p.href}" class="project-link">
          <div class="project-card"><img class="rounded img-fluid shadow w-100 object-fit-cover" src="assets/img/${p.img}" alt="${p.title} screenshot" style="height: 300px;" />
              <div class="py-4">
                  ${getBadgesHtml(p)}
                  <h2 class="fw-bold" style="color: white;">${p.title}</h2>
                  <p class="text-muted">${p.desc}</p>
              </div>
          </div>
      </a>`);
        $grid.append($projectCard);
    });
}

function renderRoadmap(filter = "all") {
    let coming = (projects || []).filter(p => p.coming_soon === true);

    switch (filter) {
        case "all":
            break;
        case "featured":
            coming = coming.filter(p => p.featured);
            break;
        default:
            coming = coming.filter(p => p.tech.includes(filter));
            break;
    }

    if (coming.length === 0) {
        $roadmapSection.hide();
        return;
    } else {
        $roadmapSection.show();
    }

    $roadmapTitle.text(`${coming.length} Upcoming Project${coming.length === 1 ? "" : "s"}`);
    $roadmapCards.empty();

    coming.forEach(p => {
        const $card = $("<div class='col'>");

        $card.html(`
            <a href="${p.href}" class="project-link">
                <div class="roadmap-card">
                    <img class="rounded img-fluid shadow w-100 object-fit-cover" src="assets/img/${p.img}" alt="${p.title} preview" style="height: 300px;" />
                    <div class="py-3">
                        ${getBadgesHtml(p)}
                        <h3 class="fw-bold" style="color: white;">${p.title}</h3>
                        <p class="info-text">${p.desc}</p>
                    </div>
                </div>
            </a>
        `);
        $roadmapCards.append($card);
    });
}

displayProjects();