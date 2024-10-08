import { useRouter } from "next/router"
import Link from "next/link"

export default function Nome() {
    const router = useRouter()
    const id = router.query.id
    const nome = router.query.nome

    return (
        <div>
            <h1>rotas / {id} / {nome}</h1>
            <Link href='/rotas'>
                <button>Voltar</button>
            </Link>
        </div>
    )
}