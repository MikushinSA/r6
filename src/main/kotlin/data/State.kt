class State(
    val courses: Array<Course>,
    val students: Array<Student>
)

fun testState() = State(
    courseList.map { it }.toTypedArray(),
    studentList.map { it }.toTypedArray(),
)