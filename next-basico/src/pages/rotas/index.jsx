import Link from "next/link"
import router, { useRouter } from "next/router"

export default function Home() {

    function navegacaoSimples(url) {
        router.push(url)
    }

    function navegacaoComParams() {
        router.push({
            pathname: '/rotas/params',
            query: {
                id: 123,
                nome: 'jose'
            }
        })
    }

    return (
        <div>
            <h1>Rotas Index/Home</h1>
            <ul>
                <Link href='/rotas/params?id=123&nome=jose'>
                    <li>Params</li>
                </Link>
                <Link href='/rotas/id/buscar'>
                    <li>Buscar</li>
                </Link>
                <Link href='/rotas/id/nome'>
                    <li>Nome</li>
                </Link>
            </ul>
            <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'flex-start'
            }}>
                <button onClick={navegacaoComParams}>Params</button>
                <button onClick={() => router.push('/rotas/id/buscar')}>Buscar</button>
                <button onClick={() => navegacaoSimples('/rotas/id/nome')}>Nome</button>
            </div>

        </div>
    )
}