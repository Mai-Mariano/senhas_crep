const express  = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json())


const JWT = SECRET= 'rgjpwrejtpwerjtpegr'

const users =  [
    {email:'email1@email.com', password:'senha1',cpf:'xxx.xxx.xxx-xx'},
    {email:'email2@email.com', password:'senha2',cpf:'yxx.xxx.xxx-xx'},
    {email:'email3@email.com', password:'senha3',cpf:'zxx.xxx.xxx-xx'},

]
console.log(req.body)
app.post('/login', (req, res) => {
    const {email, password} = req.body

    const user = users.find(e => e.email == e && e.password == password)

    if (!user) {
        res.status(404).json({msg:'not-found'})
    }

    const jwtObject = {
        id: user.id,
        email: user.email,
        password: user.password
    }
    const token = jwt.sign(jwrObject, JWT_SECRET)
    res.json({token})
})

app.get('/cpf',(req,res) =>{

    const token = req.header.authorization

    if(!token){
        res.status(401).json({message:'token not found'})
    }
    token = token.split('')[1]

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if(err)res.status(403).json({message:'token not valid or expired'})

        const userSelected = users.find(e => e.id == req.query.id)

        const conditionOfId = userSelected.id == userJwtToken.id
        const conditionOfUser = userSelected.email == userJwtToken.email
        const conditionPassword = userSelected.password == userJwtToken.password

        const generalCondtion = conditionOfId &&
                                conditionOfUser &&
                                conditionPassword
        if (!generalCondtion)res.status(403).json({message:'not valid'})
        
        res.json({cpf:userSelected.cpf})
    })

    let response = users.find(e => e.id == req.query.id)

    res.json(response)
})

app.listen(3000,() => console.log ('server is up on 3000'))