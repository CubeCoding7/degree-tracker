const GIST_ID = import.meta.env.VITE_GIST_ID;
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const API_URL = `https://api.github.com/gists/${GIST_ID}`;

// Load degree progress from GitHub Gist
export async function loadFromGist() {
    const res = await fetch(API_URL, {
        headers: {
            Authorization: `token ${TOKEN}`
        }
    });

    const data = await res.json();
    const file = data.files["degree-progress.json"];

    return JSON.parse(file.content);
}

// Save degree progress to GitHub Gist
export async function saveToGist(courses) {
    await fetch(API_URL, {
        method: "PATCH",
        headers: {
            Authorization: `token ${TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            files: {
                "degree-progress.json": {
                    content: JSON.stringify(courses, null, 2)
                }
            }
        })
    });
}