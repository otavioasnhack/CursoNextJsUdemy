export default function dados(req, res) {
    res.status(200).json({
        params: req.body
    })
}

// [], um par de colchetes  se refere a um componente dinamico.
// [...componente], os 3 pontos indica que pode receber mais de um parametro.
// [[]], duplo colchetes indica que os parametros são opcionais.