const RestAPIurl = 'http://81.177.142.218:1337'
const faculties = '/faculties'
const timetables = '/timetables'
export const getFacultiesURL = RestAPIurl + faculties
export const getTimetablesOfFaculty = faculty => RestAPIurl + timetables + '/' + faculty