var todosRoutes = require('server/todos/routes');
var sdnwnocsRoutes = require('server/sdnwnocs/routes');
var wtdsRoutes = require('server/wtds/routes')
module.exports = function routes(app) {
	app.use('/todos', todosRoutes);
	app.use('/sdnwnocs', sdnwnocsRoutes);
	app.use('/wtds', wtdsRoutes);
}

