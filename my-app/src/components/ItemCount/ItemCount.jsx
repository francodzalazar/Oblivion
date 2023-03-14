import { useState } from "react";

const ItemCount = () => {
    const [numero, setNumero] = useState(0);
    function sumar() {
        if (numero < 10) {
            setNumero(numero + 1);
        }
    }
    const restar = () => numero <= 0 ? null : setNumero(numero - 1);
    return (
        <>
            <p>{numero}</p>
            <button className="btn btn-dark" onClick={() => sumar()}>+</button>
            <button className="btn btn-dark" onClick={() => restar()}>-</button>
        </>
    );
};

export default ItemCount;