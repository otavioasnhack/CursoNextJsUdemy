import TesteComp from "@/components/Teste";

export default function teste() {
 return (
    <>
        <TesteComp 
            principal = 'principal1'
            secundario = 'secundario1'
            pequeno = {false}
        />

<TesteComp 
            principal = 'principal1'
            secundario = 'secundario1'
            pequeno = {true}
        />
    </>
 )   
}