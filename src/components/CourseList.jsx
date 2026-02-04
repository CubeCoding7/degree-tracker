import CourseItem from "./CourseItem";

function CourseList({ courses, onStatusChange }) {

    if (courses.length === 0) {
        return <p>No courses added yet.</p>;
    }

    return (
        <div>
            {courses.map(course => (
                <CourseItem
                    key={course.id}
                    course={course}
                    onStatusChange={onStatusChange}
                />
            ))}
        </div>);
}

export default CourseList;
