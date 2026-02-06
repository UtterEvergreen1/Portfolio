async function getProjects() {
    return await fetch("/assets/js/projects.json")
        .then(response => response.json()) // Parse the JSON response
        .then(data => data)
        .catch(error => console.error('Error fetching JSON:', error));
}

export default getProjects