import { FIRST_LOAD_PAGE_SUCCESS, CHANGE_FIELD_VALUE, UPDATE_FIELD_VALUE, LEVEL_UPDATED, SEMESTER_UPDATED, FACULTY_UPDATED } from '../constants/action-types'

const initialState = {
    faculty: '-1',
    semester: '-1',
    level: '-1',
    course: '-1'
}

export default function formFields(state = initialState, action) {
    switch (action.type) {
        case FIRST_LOAD_PAGE_SUCCESS:
            const facultyIDforChecking = localStorage.facultyID || '5a2c622731531ab838dccde4'
            if (facultyIDforChecking !== localStorage.facultyID) {
                localStorage.facultyID = facultyIDforChecking
            }

            for (let i = 0; i <= action.payload.faculties.length; i++) {
                if (action.payload.faculties[i]._id === facultyIDforChecking) {
                    return {
                        ...state,
                        faculty: i + '',
                        semester: '0',
                        level: '0',
                        course: '0'
                    }
                }
            }
            return state
        case CHANGE_FIELD_VALUE:
            return {
                ...state,
                [action.field]: action.value
            }
        case UPDATE_FIELD_VALUE:
            return {
                ...state,
                [action.field]: action.value
            }
        case LEVEL_UPDATED:
            return {
                ...state,
                course: action.payload.courses[0] ? (action.payload.courses[0] + '') : '-1'
            }
        case SEMESTER_UPDATED:
            return {
                ...state,
                course: action.payload.courses.length > 0 ? (action.payload.courses[0] + '') : '-1',
                level: action.payload.levels.length > 0 ? action.payload.levels[0] : '-1'
            }
        case FACULTY_UPDATED:
            return {
                ...state,
                course: '-1',
                level: '-1',
                semester: action.payload.length > 0 ? '0' : '-1'
            }
        default:
            return state
    }
}
