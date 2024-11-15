val studentList = arrayListOf(
    Student("Sheldon", "Cooper"),
    Student("Leonard", "Hofstadter"),
    Student("Howard", "Wolowitz")
)

val courseList = arrayListOf(
    Course("Математика", studentList.toTypedArray()),
    Course("Физика", studentList.toTypedArray()),
    Course("Химия", studentList.toTypedArray())
)