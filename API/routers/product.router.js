const BaseRouter = require('./base.router');
const services = require('../services');

class AuthRouter extends BaseRouter{
    constructor(){
        super();
        this.add_routes();
    }
    add_routes = () => {

        this.router.post('/edit',async (req,res)=>{
            //const response = await this.ct.edit(req,res);
            
            //res.status(response.status||200).json(response.data);
            res.status(200).json({"message":"ok on edit"});
        } );        
    }
}
module.exports = AuthRouter;