import kotlinx.browser.window
import react.*
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.ul
import react.dom.html.ReactHTML.li
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.h1

val CCourseList = FC<Props>("CourseList") {
    val (state, dispatch) = useReducer(markReducer, testState())

    div {
        h1 { +"Лист оценок по предметам" }
        ul {
            state.courses.forEach { course ->
                li {
                    +course.name
                    ul {
                        course.students.forEachIndexed { index, student ->
                            li {
                                div {
                                    +student.firstname
                                    +student.surname
                                    val currentGrade = course.grades[index]

                                    // Отображаем текущую оценку студента
                                    div { +"Оценка: $currentGrade" }

                                    // Кнопка для выставления оценки
                                    button {
                                        +"Выставить оценку"
                                        onClick = {
                                            // Запрашиваем оценку через prompt
                                            val grade = window.prompt("Выставить оценку ${student.firstname} ${student.surname}", "1")?.toIntOrNull()
                                            if (grade != null && grade in 1..5) {
                                                // Отправляем экшн с новой оценкой
                                                dispatch(MarkStudent(course.id, student.id, grade)) // Это теперь правильно, так как MarkStudent наследует Action
                                            } else {
                                                window.alert("Извините, но бальная система от 1 до 5")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
