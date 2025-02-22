export default async function signup(req, res) {

    try { 

        const {email , password , name} = req.body;

        if(! email || !password || !name ){
            throw new Error("All fields are requires");
        }

        const userA
        
    } catch (error) {
        
    }
}



export default async function login(req, res) {

    try {
        
    } catch (error) {
        
    }
}


export default async function logout(req, res) {

    try {
        
    } catch (error) {
        
    }
}
