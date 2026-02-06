import getProjects from './get_projects.mjs';

let projects = [];

async function displayProjects() {
    projects = await getProjects();

    renderProjects();

    $(".filter-btn").each((index, btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove(active_filter_name));
            btn.classList.add(active_filter_name);
            renderProjects(btn.dataset.filter);
        });
    });
}

const active_filter_name = 'current-filter';

const $grid = $("#projects-grid");
const $gridTitle = $("#projects-title");

function getBadgesHtml(project) {
    let badgeHtml = '<div class="mb-2">';
    if (Object.hasOwn(project, "open_source") && project.open_source === true)
        badgeHtml += '<span class="badge d-inline-block open-source-badge">Open Source</span>';

    if (Object.hasOwn(project, "coming_soon") && project.coming_soon === true)
        badgeHtml += '<span class="badge d-inline-block coming-soon-badge">Coming Soon</span>';

    if (Object.hasOwn(project, "featured") && project.featured === true)
        badgeHtml += '<span class="badge d-inline-block category-badge">Featured</span>';

    badgeHtml += `<span class="badge d-inline-block category-badge">${project.category}</span>`;
    project.tech.forEach(t => {
        badgeHtml += `<span class="badge d-inline-block tech-badge">${t}</span>`;
    });
    badgeHtml += '</div>';
    return badgeHtml;
}

function renderProjects(filter = "all") {
    $grid.empty();

    let filtered;
    switch (filter) {
        case "all":
            filtered = projects;
            $gridTitle.text("All Projects of Daniel Losso-Kiss");
            break;
        case "featured":
            filtered = projects.filter(p => p.featured);
            $gridTitle.text("Featured Projects of Daniel Losso-Kiss");
            break;
        default:
            filtered = projects.filter(p => p.category === filter);
            $gridTitle.text(filter.charAt(0).toUpperCase() + filter.slice(1) + " Projects of Daniel Losso-Kiss");
            break;
    }

    filtered.forEach(p => {
        const $projectCard = $("<div>");
        $projectCard.addClass("col");
        $projectCard.html(`
    	<a href="${p.href}" class="project-link">
          <div class="project-card"><img class="rounded img-fluid shadow w-100 object-fit-cover" src="assets/img/${p.img}" style="height: 300px;" />
              <div class="py-4">
                  ${getBadgesHtml(p)}
                  <h4 class="fw-bold" style="color: white;">${p.title}</h4>
                  <p class="text-muted">${p.desc}</p>
              </div>
          </div>
      </a>`);
        $grid.append($projectCard);
    });
}

displayProjects();