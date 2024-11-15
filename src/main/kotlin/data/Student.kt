typealias StudentId = String

data class Student(
    val firstname: String,
    val surname: String
) {
    val id: StudentId
        get() = "$firstname $surname"
}