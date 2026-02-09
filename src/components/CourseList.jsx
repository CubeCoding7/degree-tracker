import CourseItem from "./CourseItem";
import styles from "./CourseList.module.css";

function CourseList({ courses, onStatusChange, handleDelete }) {
    const years = [...new Set(courses.map(c => c.year))].sort();

    return (
        <div >
            {years.map(year => {
                const coursesForYear = courses.filter(c => c.year === year);
                const totalCreditsYearly = coursesForYear.reduce(
                    (sum, course) => sum + course.credits,
                    0
                );
                const terms = [...new Set(coursesForYear.map(c => c.term))];

                return (
                    <div key={year} className={styles.yearSection}>
                        <h2>{year} ({totalCreditsYearly} credits)</h2>
                        <div className={styles.gridContainer}>
                            {terms.map(term => {
                                const coursesForTerm = coursesForYear.filter(
                                    c => c.term === term
                                );
                                const totalCredits = coursesForTerm.reduce(
                                    (sum, course) => sum + course.credits,
                                    0
                                );

                                return (
                                    <div key={term}>
                                        <h3>
                                            {term} ({totalCredits} credits)
                                        </h3>
                                        <div className={styles.classSection}>
                                            {coursesForTerm.map(course => (
                                                <div className={`course-item ${course.status}`}>
                                                    <CourseItem
                                                        key={course.id}
                                                        course={course}
                                                        onStatusChange={onStatusChange}
                                                        handleDelete={handleDelete}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CourseList;
