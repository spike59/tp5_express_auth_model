const BaseController = require('./base.controller');
const services = require('../services');

class AuthController extends BaseController{
    constructor(){
        super();
        this.service = new services[this.table];
    }
    async register(req,res){
        // let usersService = new  services["app_user"]();
        // console.log("register user ",req.body);
        // const user = await usersService.getOneUserByMail(req.body.email);
        // console.log("user ",user);
        // if (!user){
        //     const payload = {mail: req.body.email, role: "User", password: req.body.password};
        //     const token = jwt.sign(payload, secret, { expiresIn: '1d' });
        //     //SEND MAIL
        //     const strToken = encodeURIComponent(token);
        //     const url = "http://localhost:3000/account/validation?t=" + strToken;
        //     const html = 
        //     `
        //     <b>Confirmez votre inscription : </b>
        //     <a href="${url}" target="_blank">Confirmer</a>
            
        //     `;
        //     let mailerService = new MailerService();
        //     const mailed = await mailerService.sendMail({to: req.body.email, subject:"Confirmer votre inscription", html});
        //     console.log("mailed",mailed);
        //     if (mailed)
        //     {
        //         console.log("mailed");
        //         return res.status(200).json({ message: 'creation de compte en attente',token:strToken });
        //     }
            
        // }
        //return res.status(404).json({ message: 'utilisateur existant' });
        
        return res.status(200).json({ message: 'on est bon' });
    }
}
module.exports  = AuthController;