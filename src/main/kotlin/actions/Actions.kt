interface Action

data class MarkStudent(
    val courseId: CourseId,
    val studentId: StudentId,
    val grade: Int
) : Action