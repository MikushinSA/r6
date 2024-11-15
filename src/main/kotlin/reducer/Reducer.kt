typealias Reducer<S, A> = (S, A) -> S

val markReducer: Reducer<State, Action> = { state, action ->
    when (action) {
        is MarkStudent -> {
            // Обрабатываем MarkStudent, ибо это наследует Action
            State(
                courses = state.courses.map { course ->
                    if (course.id == action.courseId) {

                        course.updateCourse(action)
                    } else {
                        course
                    }
                }.toTypedArray(),
                students = state.students
            )
        }
        else -> state
    }
}
