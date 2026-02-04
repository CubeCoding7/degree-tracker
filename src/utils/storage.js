const STORAGE_KEY = 'degree-tracker-courses';

export function loadCourses() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveCourses(courses) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
}