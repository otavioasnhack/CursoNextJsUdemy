// string
let nome: string = 'Otávio'
//nome = 27

//numbers
let idade: number = 27
//idade = 'Otávio'

//boolean
let possuiHobbies: boolean = true

//tipos explicitos
let minhaIdade
minhaIdade = '27'
minhaIdade = true

//array
let hobbies: any[] = ['academia', 'trabalhar', 'futebol', 'programação']

//tuplas
let endereco: [string, number] = ['Rua Ovidio de Abreu', 480]

//enums

enum Cor {
    Cinza, // 0
    Azul,  // 1
    Verde  // 2
}

let minhaCor: Cor = Cor.Azul
//console.log(minhaCor);

//any
let carro: any = 'BMW'
carro = { marca : 'BMW', ano : 2019 }