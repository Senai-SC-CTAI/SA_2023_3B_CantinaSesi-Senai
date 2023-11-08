
export function Modal() {
    return (
        <>
            <div className="modal">
                <button onClick={closeModal} className='closeBtn'>
                    <CloseIcon />
                </button>
                <p className='title'>Adicionar comida</p>
                <form
                // onSubmit={handleSubmit} 
                >
                    <div className="formModal">

                        <div className="label">
                            <p>Nome</p>
                            <input
                                className='input'
                                type="text"
                                placeholder='Nome'
                            />
                        </div>
                        <div className="label">

                            <p>Preço</p>
                            <input
                                className='inputPreco'
                                type="number"
                                placeholder='Preço'
                            />
                        </div>
                    </div>
                    <div className="label">
                        <p>Categoria</p>
                        <select className="Categoria">
                            <option value="Comida">Comida</option>
                            <option value="Bebida">Bebida</option>
                        </select>
                        <button
                            type="submit"
                        >
                            salvar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}