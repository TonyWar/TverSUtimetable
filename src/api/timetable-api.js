import axios from 'axios'
import {getFacultiesURL} from '../constants/urls'

export function getFaculties() {
    return axios.get(getFacultiesURL)
        .then(res => {
            return res.data
        })
}
