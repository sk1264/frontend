// BASE URL OF OUR LOCAL API
const URL = "http://localhost:4000"

export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects")
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    const response = await fetch(URL + "/about")
    const about = await response.json()
    return about
}