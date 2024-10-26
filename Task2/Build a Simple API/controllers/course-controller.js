import courseData from '../config/courseData.json' assert {type: "json"};
import { updateCourseDataFile } from '../helpers/course-helper.js';

// create a new course
export const addNewCourse = async (req, res) => {
    try {
        const { title, description, duration } = req.body;

        if (!title || !description || !duration) return res.status(400).json({
            success: false,
            message: "All fields (title, description and duration) are required!"
        });

        // add the new course
        courseData.push({ id: (courseData.length + 1), title, description, duration });

        // add new course data to file
        await updateCourseDataFile(courseData);

        res.status(201).json({
            success: true,
            message: "Course added successfully!",
            newlyAddedCourseData: courseData[courseData.length - 1]
        });

    } catch (error) {
        console.error("Error creating new course :: ", error);
        res.status(500).json({
            success: false,
            message: "Error creating new course",
            error: error.message
        });
    }
}

// get all courses
export const getAllCourse = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "All courses list",
            allCoursesList: courseData
        });
    } catch (error) {
        console.error("Error getting all courses :: ", error);
        res.status(500).json({
            success: false,
            message: "Error getting all courses",
            error: error.message
        });
    }
}

// update course by course id
export const updateCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, duration } = req.body;

        const course = courseData.find((course) => course.id === parseInt(id));

        if (!course) {
            return res.status(404).json({
                success: false,
                message: `Course with ID ${id} not found`,
            });
        }

        if (title) course.title = title;
        if (description) course.description = description;
        if (duration) course.duration = duration;

        // Persist updated data
        await updateCourseDataFile(courseData);

        res.status(200).json({
            success: true,
            message: "Course data updated successfully!",
            updatedCourse: course
        });

    } catch (error) {
        console.error("Error updating a course :: ", error);
        res.status(500).json({
            success: false,
            message: "Error updating a course",
            error: error.message
        });
    }
}

// delete course by course id
export const deleteCourseById = async (req, res) => {
    try {
        const { id } = req.params;

        const findCurrentCourseIndex = courseData.findIndex((course) => course.id === parseInt(id));

        if (findCurrentCourseIndex === -1) return res.status(404).json({
            success: false,
            message: "Course not found"
        });

        courseData.splice(findCurrentCourseIndex, 1);
        // Persist the remaining data
        await updateCourseDataFile(courseData);

        res.status(200).json({
            success: true,
            message: "Course data deleted successfully",
            latestCourses: courseData
        });

    } catch (error) {
        console.error("Error deleting a course :: ", error);
        res.status(500).json({
            success: false,
            message: "Error deleting a course",
            error: error.message
        });
    }
}