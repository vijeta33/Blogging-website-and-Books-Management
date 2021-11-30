const jwt=require("jsonwebtoken")

const mid1= async function(req, res, next)
{
    let token=req.headers['x-api-key']
    
    if(!token)
    {
        return res.send({ status: false, Message: 'No token found' })
    }else
    {
        let decodedtoken = jwt.verify(token, 'Group4')
        //  console.log(decodedtoken)
        if(decodedtoken)
        {
            req.decodedtoken=decodedtoken
            next()
        }else{
            res.status(404).send({Message:"Not valid Token"})
        }
    }
}

module.exports.mid1=mid1