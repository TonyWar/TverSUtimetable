const RestAPIurl = 'http://81.177.142.218:1337'
const faculties = '/faculties'
const timetables = '/timetables'
const timetable = '/timetable'

export const getFacultiesURL = RestAPIurl + faculties
export const getTimetablesOfFaculty = faculty => RestAPIurl + timetables + '/' + faculty
export const getTimetableURL = (year, semester, facultyID, level, cource) => RestAPIurl + timetable + '/' + year + '/' + semester + '/' + facultyID + (level ? ('/' + level + (cource ? ('/' + cource) : '')) : '')