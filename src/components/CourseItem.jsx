import { useState, useRef, useEffect } from "react";
import styles from "./CourseItem.module.css";

function CourseItem({ course, onStatusChange, handleDelete }) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div
            className={`${styles.courseItem} ${styles[course.status]}`}
        >
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

            <strong>{course.id}</strong> – {course.name} (
            {course.credits} credits)

            <div ref={menuRef} className={styles.menuWrapper}>
                <button
                    onClick={() => setOpen(prev => !prev)}
                    className={styles.menuButton}
                >
                    ⋮
                </button>

                {open && (
                    <div className={styles.menu}>
                        <button
                            onClick={() => {
                                handleDelete(course.id);
                                setOpen(false);
                            }}
                            className={styles.menuItem}
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CourseItem;