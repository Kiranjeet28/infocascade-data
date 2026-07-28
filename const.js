const path = require("path");

// Root of the current project (where const.js is located)
const PROJECT_ROOT = __dirname;

module.exports = {
    PROJECT_ROOT,

    // data/web
    OUTPUT_PATH: path.join(PROJECT_ROOT, "web"),

    // data/web/group
    GROUP_LIST_PATH: path.join(PROJECT_ROOT, "web", "group"),

    // data/public
    TIMETABLE_PATH: path.join(PROJECT_ROOT, "public"),
};