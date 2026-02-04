import { useEffect, useState } from "react";
import { loadCourses, saveCourses } from "./utils/storage";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

function App() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(courses);
  }, []);

  useEffect(() => {
    saveCourses(courses);
  }, [courses]);

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

    <CourseForm onAddCourse={handleAddCourse} />

    <CourseList
      courses={courses}
      onStatusChange={handleStatusChange}
    />
  </div>;
}

export default App;