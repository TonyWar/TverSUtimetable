import axios from 'axios'
import { getTimetablesOfFaculty } from '../constants/urls'

export function getTimetables(facultyID) {
    return axios.get(getTimetablesOfFaculty(facultyID))
        .then(res => {
            return res.data
        })
}