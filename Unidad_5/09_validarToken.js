const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token,
        'tu_secreto', (err, user) =>{
            if(err) return res.sendStatus(403);
            req.user = user;
            next();
        }        
    )
}