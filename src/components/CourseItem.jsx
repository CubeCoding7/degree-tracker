function CourseItem({ course, onStatusChange }) {
    return (
        <div>
            <strong>{course.id}</strong> - {course.name} ({course.credits} credits)

            <select
                value={course.status}
                onChange={e =>
                    onStatusChange(course.id, e.target.value)
                }
            >
                <option value="not-taken">Not Taken</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    )
}

export default CourseItem;