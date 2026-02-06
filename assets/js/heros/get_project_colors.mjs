import getProjects from "../get_projects.mjs";

export default async function getProjectColors(projectName) {
    const projects = await getProjects("/assets/js/projects.json");
    const project = projects.find(p => p.title === projectName);
    if (!project) {
        console.warn(`Project "${projectName}" not found.`);
        return null;
    }

    if (!Object.hasOwn(project, "color") || !project.color) {
        console.warn(`Project "${projectName}" has no colors defined.`);
        return null;
    }

    return project.color;
}

