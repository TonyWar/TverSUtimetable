import { FIRST_LOAD_PAGE_SUCCESS, CHANGE_FIELD_VALUE, FACULTY_CHANGED } from '../constants/action-types'

const initialState = {
    faculty: '-1',
    semester: '-1',
    level: '-1',
    course: '-1'
}

export default function formFields(state = initialState, action) {
    switch (action.type) {
        // case INIT_SEMESTERS_LIST_SUCCESS:
        //     return {
        //         ...state,
        //         semester: '0'
        //     }
        case FACULTY_CHANGED:
            return {
                ...state,
                semester: '0',
                level: '1',
                course: '-1'
            }
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
        // case INIT_LEVEL:
        //     return {
        //         ...state,
        //         level: '1'
        //     }
        case CHANGE_FIELD_VALUE:
            return {
                ...state,
                [action.field]: action.value
            }
        default:
            return state
    }
}
