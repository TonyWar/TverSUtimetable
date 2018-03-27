export const findCurrentFaculty = (facultyURL, faculties) => {
    for (let i = 0; i < faculties.length; i++) {
        const faculty = faculties[i]
        if (faculty.abbr === facultyURL) {
            // для данного факультета запускаем action
            return faculty
        }
    }
    return null
}
