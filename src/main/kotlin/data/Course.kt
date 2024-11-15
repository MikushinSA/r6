typealias CourseId = String

data class Course(
    val name: String,
    val students: Array<Student>,
    val grades: Array<Any> = Array(students.size) { "Х" }  // Инициализация оценок, по умолчанию 0
) {
    val id: CourseId
        get() = name

    // Метод для обновления оценки студента
    fun updateCourse(action: MarkStudent): Course {
        val studentIndex = students.indexOfFirst { it.id == action.studentId }
        if (studentIndex != -1) {
            val updatedGrades = grades.copyOf()  // Создаем копию массива оценок
            updatedGrades[studentIndex] = action.grade  // Обновляем оценку для нужного студента
            return this.copy(grades = updatedGrades)  // Возвращаем обновленный курс с новыми оценками
        }
        return this  // Возвращаем курс без изменений, если студент не найден
    }
}
