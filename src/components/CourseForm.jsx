import { useState } from "react";

function CourseForm({ onAddCourse }) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [credits, setCredits] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        onAddCourse({
            id,
            name,
            credits: Number(credits),
            status: "not-taken"
        });

        setId("");
        setName("");
        setCredits("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Course Code"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />

            <input
                placeholder="Course Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />

            <input
                type="number"
                min="1"
                max="5"
                value={credits}
                onChange={e => setCredits(e.target.value)}
            />

            <button>Add Course</button>
        </form>
    );
}

export default CourseForm;