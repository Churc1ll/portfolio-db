"use strict"

/**
 * project router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories

module.exports = createCoreRouter("api::project.project")
// module.exports = createCoreRouter("fuck::project.project")
