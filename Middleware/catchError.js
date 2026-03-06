export default function catchError(Func){
    return(req,res) => {
        Func(req,res).catch((err) => {
            res.status(500).json({message: err})
        })
    }
}
