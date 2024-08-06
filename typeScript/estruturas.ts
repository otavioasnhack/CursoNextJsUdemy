interface Humano {
    nome: string,
    idade?: number, // O sinal de ?, indica que o atributo é opcional
    [prop: string]: any // O [] com a sintaxe prop:string indica que pode ser adicionado qualquer nome(dinamico) para o atributo e com a tipagem 'any', podendo ser qlq valor ou tipo
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    //console.log('Olá' + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Otávio'
}

const pessoa = {
    nome: 'Otávio',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Olá meu nome é' + this.nome + '' + sobrenome);
    }
}

//saudarComOla({ nome: 'Dadinho', idade: 27, altura: 1.75 })

//Usando classes

class Cliente implements Humano {
    nome: string = ''
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é' + this.nome + '' + sobrenome);
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Otávio'
meuCliente.saudar('Nepomuceno')

// Interface com função

interface funcaoCalculo {
    ( a:number, b:number): number
}

let potencia: funcaoCalculo

potencia = function (base:number, exp:number ):number {
    return Math.pow(2, 3)
}