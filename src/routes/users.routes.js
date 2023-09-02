const {Router} = require('express');
const usersRoutes = Router();

const UsersController = require('../controllers/UsersController');
const usersController = new UsersController();

function myMiddleware(req, res, next) {
    const { isAdmin } = req.body;

    if (!isAdmin) 
        return res.status(401).json({ message: "Usuário não autorizado!" });
    
    next();
    
}

usersRoutes.post('/', myMiddleware, usersController.create);
usersRoutes.delete('/', myMiddleware, usersController.delete);
usersRoutes.put('/:id', myMiddleware, usersController.update);

module.exports = usersRoutes;