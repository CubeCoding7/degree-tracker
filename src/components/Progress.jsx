function Progress({ courses }) {

    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

    const completedCredits = courses
        .filter(course => course.status === 'completed')
        .reduce((sum, course) => sum + course.credits, 0);

    const percentage = totalCredits === 0 ? 0 : Math.round((completedCredits / totalCredits) * 100);

    return (
        <div>
            <h2>Progress</h2>
            <p>
                Credits completed: {completedCredits} / {totalCredits}
            </p>
            <p>Degree completion: {percentage}%</p>
        </div>
    );
}
export default Progress;