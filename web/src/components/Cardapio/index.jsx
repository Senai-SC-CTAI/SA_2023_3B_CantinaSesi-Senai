import  './styles.css'

export default function Cardapio() {

    return(
        <>
            <div className="listaDias">
                <div className="dia">
                <input type="checkbox" />
                <p>Cardápio de Segunda</p>
                </div>
                <div className="dia">
                <input type="checkbox" />
                <p>Cardápio de Terça</p>
                </div>
                <div className="dia">
                <input type="checkbox" />
                <p>Cardápio de Quarta</p>
                </div>
                <div className="dia">
                <input type="checkbox" />
                <p>Cardápio de Quinta</p>
                </div>
                <div className="dia">
                <input type="checkbox" />
                <p>Cardápio de Sexta</p>
                </div>
            </div>
        </>
    )
}