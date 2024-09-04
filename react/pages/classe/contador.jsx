import ContadorComp from "@/components/Contador";
import { Component } from "react";

export default class Contador extends Component {

    render() {
        return (
            <div>
                <ContadorComp valorInicial={100} passo={50}/>
            </div>
        )
    }
}