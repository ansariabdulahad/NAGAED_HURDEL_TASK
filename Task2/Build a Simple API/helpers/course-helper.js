import { writeFile } from 'fs/promises';

export const updateCourseDataFile = async (data) => {
    await writeFile(
        new URL('../config/courseData.json', import.meta.url),
        JSON.stringify(data, null, 2)
    );
}