import { useState } from "react";

function CourseForm({ onAddCourse }) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [credits, setCredits] = useState("");
    const [year, setYear] = useState("");
    const [term, setTerm] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        onAddCourse({
            id,
            name,
            credits: Number(credits),
            status: "not-taken",
            year,
            term

        });

        setId("");
        setName("");
        setCredits("");
        setYear("");
        setTerm("");
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
                required
            />

            <input
                type="number"
                min={2020}
                max={2030}
                value={year}
                onChange={e => setYear(e.target.value)}
                required
            />
            <select value={term} onChange={e => setTerm(e.target.value)} required>
                <option value="">-- Please choose an option --</option>
                <option value="Fall">Fall</option>
                <option value="Summer">Summer</option>
                <option value="Spring">Spring</option>
            </select>

            <button>Add Course</button>
        </form>
    );
}

export default CourseForm;