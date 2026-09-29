async function getProjects() {
    // Always resolve to an array so display_projects never crashes on a failed fetch.
    return await fetch("/assets/js/projects.json")
        .then(response => response.json())
        .catch(() => []);
}

export default getProjects