import { useEffect, useState } from "react";
import { loadCourses, saveCourses } from "./utils/storage";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import Progress from "./components/Progress";

import { loadFromGist, saveToGist } from "./utils/gistSync";

function App() {

  const [courses, setCourses] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  async function syncFromGist() {
    const data = await loadFromGist();
    setCourses(data);
  }

  async function syncToGist() {
    await saveToGist(courses);
    alert("Synced to GitHub Gist ✅");
  }

  useEffect(() => {
    const savedCourses = loadCourses();
    setCourses(savedCourses);
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      saveCourses(courses);
    }
  }, [courses, hasLoaded]);

  function handleAddCourse(course) {
    setCourses(prev => [...prev, course]);
  }

  function handleRemoveCourse(id) {
    console.log(id);
    console.log("tser")
    setCourses(prev =>
      prev.filter(course =>
        course.id !== id
      )
    );
  }

  function handleStatusChange(id, newStatus) {
    setCourses(prev =>
      prev.map(course =>
        course.id === id ? { ...course, status: newStatus } : course
      )
    );
  }

  return <div>
    <h1>Degree Tracker</h1>

    <Progress courses={courses} />

    <CourseForm onAddCourse={handleAddCourse} />

    <CourseList
      courses={courses}
      onStatusChange={handleStatusChange}
      handleDelete={handleRemoveCourse}
    />

    <button onClick={syncFromGist}>
      Load from GitHub
    </button>

    <button onClick={syncToGist}>
      Save to GitHub
    </button>
  </div>;
}

export default App;