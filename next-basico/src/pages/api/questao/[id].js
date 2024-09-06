export default function questao(req, res) {
    if (req.method === 'GET') {
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado: 'Qual sua cor preferida?',
            respostas: [
               'Branca', 'Amarela', 'Verde', 'Azul' 
            ]
        })
    } else {
        req.status(405).send()
    }
}