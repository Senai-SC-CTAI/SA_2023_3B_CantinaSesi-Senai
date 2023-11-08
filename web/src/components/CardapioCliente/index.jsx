import './styles.css'
import { useState } from 'react';

const Foods = [
    {
        nome: "bolo de pote",
        preco: "8,00"
    },
    {
        nome: "bolo de pote",
        preco: "8,00"
    },
    {
        nome: "Pão francês com carne gratinada",
        preco: "10,00"
    },
    {
        nome: "bolo de pote",
        preco: "8,00"
    },
    {
        nome: "Pão francês com carne gratinada",
        preco: "10,00"
    }, 
    {
        nome: "Pão francês com carne gratinada",
        preco: "10,00"
    },
    {
        nome: "Pão francês com carne gratinada",
        preco: "10,00"
    },
    {
        nome: "Pão francês com carne gratinada",
        preco: "10,00"
    },
    {
        nome: "Pão francês com carne gratinada",
        preco: "10,00"
    },
]

export function CardapioCliente() {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (event) => {
        const newDate = new Date(event.target.value);
        setSelectedDate(newDate);
    }

    const formattedDate = selectedDate.toLocaleDateString('pt-BR', { 
        weekday: 'long' 
        // year: 'numeric', 
        // month: 'long', 
        // day: 'numeric' 
    });
    
    return (
        <>
            <div className="cardapio">
                <h1 className="title">Cardápio de {formattedDate}</h1>
                <input type="date" className='date' onChange={handleDateChange}/>
                {/* <span>07/07/2023</span> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Foods.map((food, index) => (
                            <tr key={index}>
                                <td>{food.nome}</td>
                                <td>R${food.preco}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}