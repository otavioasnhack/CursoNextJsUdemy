export default function metodo(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({nome: 'get'})
    } else {
        res.status(200).json({nome: 'outro metodo'})
    }
}