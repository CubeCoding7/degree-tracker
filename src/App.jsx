import { useEffect, useState } from "react";
import { loadCourses, saveCourses } from "./utils/storage";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import Progress from "./components/Progress";

function App() {

  const [courses, setCourses] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

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
    />
  </div>;
}

export default App;