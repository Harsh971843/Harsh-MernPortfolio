const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const aboutSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    }
});

const projectsSchema = new mongoose.Schema({
    projectname: {
        type: String,
        required: true
    },
    projectlink: {
        type: String,
        required: true
    },
    projecttool: {
        type: Array,
        required: true
    },
    projectdescription: {
        type: String,
        required: true
    }
});

module.exports = {
    Intro: mongoose.model("Intros", introSchema),
    About: mongoose.model("Abouts", aboutSchema),
    Project: mongoose.model("Projects", projectsSchema), // Changed "Project" to "Projects"
};
