export function Comp1() {
    return <h2>Comp1</h2>
}

export const Comp2 = function() {
    return <h2>Comp2</h2>
}

export default function Comp3() {
    return (
        <div>
            <h2>Comp #03</h2>
        </div>
    )
}

const Comp4 = () => <h2>Comp #04</h2>

const Comp5 = props => <h2>Comp #05 - {props.msg}</h2>

export {
    Comp4, Comp5
}
