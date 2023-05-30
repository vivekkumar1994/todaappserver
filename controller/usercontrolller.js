import User from "../model/user.js";

export const userSignUp = async (req, res) => {
  
    try{
        const { name, email, password } = req.body;
      
    
        const user = await User.create({
          name,
          email,
          password,
       
        });
        res.send(user)

    }
    catch(error){
        res.send(error.message)

    }
  
      
    
}

export const userSignIn = async (request, response) => {
    try {
        const name = request.body.name;
        const password = request.body.password;
        let user = await User.findOne({ name:name });
        if(user) {
            return response.status(200).json({data: user});
        } 

     


    } catch (error) {
        response.json('Error: ', error.message);        
    }
}