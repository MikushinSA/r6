import history.Action
import org.w3c.dom.HTMLSelectElement
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.select
import react.dom.html.ReactHTML.option
import react.useState
import react.useContext

external interface StudentProps : Props {
    abstract fun dispatch(markStudent: MarkStudent)

    var student: Student
    var course: Course
    var dispatch: (Action) -> Unit
}

val CStudent = FC<StudentProps> { props ->
    val (grades, setGrades) = useState(props.course.grades)

    div {
        +"${props.student.firstname} ${props.student.surname}"

        select {
            value = grades[props.course.students.indexOf(props.student)].toString()
            onChange = { event ->
                val newGrade = (event.target as HTMLSelectElement).value.toInt()
                val updatedGrades = grades.toMutableList()
                updatedGrades[props.course.students.indexOf(props.student)] = newGrade
                setGrades(updatedGrades.toTypedArray())
                props.dispatch(MarkStudent(props.course.id, props.student.id, newGrade))
            }

            for (grade in 1..5) {
                option {
                    value = grade.toString()
                    +grade.toString()
                }
            }
        }

        button {
            +"Save"
            onClick = {
                // Действие для сохранения оценки можно обработать тут
            }
        }
    }
}
