import { Component } from "react";

export default class ContadorComp extends Component {

    state = {
        numero: this.props.valorInicial ?? 0, // ?? 0 - indica que se n for passado um valor, assumir o valor padrao de 0
        passo: this.props.passo ?? 1
    }

    inc() {
        this.setState({
            numero: this.state.numero + (this.props.passo ?? 1)
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - (this.props.passo ?? 1)

        })
    }

    render() {
        return (
            <div>
                <h1>Contador usando classe</h1>
                <h3>{this.state.numero}</h3>
                <input type="number" min={1} max={1000} value={this.state.passo} onChange={e => this.setState({ passo: +e.target.value})}/>
                <button onClick={() => this.inc()}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}