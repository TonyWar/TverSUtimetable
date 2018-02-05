import axios from 'axios'
import {getFacultiesURL, getTimetablesOfFaculty} from '../constants/urls'

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
