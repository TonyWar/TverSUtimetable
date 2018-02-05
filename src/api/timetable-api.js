import axios from 'axios'
import {getFacultiesURL, getTimetablesOfFaculty, getTimetableURL} from '../constants/urls'

export function getFaculties() {
    return axios.get(getFacultiesURL)
        .then(res => {
            return res.data
        })
}

export function getTimetables(facultyID) {
    return axios.get(getTimetablesOfFaculty(facultyID))
        .then(res => {
            return res.data
        })
}

export function getTimetable(year, semester, facultyID, level, cource) {
    return axios.get(getTimetableURL(year, semester, facultyID, level, cource))
        .then(res => {
            return res.data
        })
}
