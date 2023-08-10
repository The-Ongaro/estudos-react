
import './index.scss';
import {useState} from 'react';
import Cabecalho from '../../components/cabecalho';

export default function Juros() {
    const [total, setTotal] = useState('');
    const [juros, setJuros] = useState('');
    const [parcela, setParcela] = useState('');
    const [valorT, setValorT] = useState('');
    const [valorP, setValorP] = useState('');

    function Calcular() {
        let x = total * (1 + juros/100) ** parcela;

        let y = x/parcela;

        setValorT(new Intl.NumberFormat('pt-BR' , {style: 'currency', currency: 'BRL'}).format(x.toFixed(2)));
        setValorP(new Intl.NumberFormat('pt-BR', {style: 'currency' , currency: 'BRL'}).format(y.toFixed(2)));
    }


    return(
        <div className='juros-inicio'>

            <Cabecalho />

            <div id='titulo'>
                <h2>Simulador de Compra de Veículo</h2>
            </div>

            <div className='centro'>
                
                <div className='left'>
                    <img className='img' src='./assets/images/carro 2.png' alt=''/>
                </div>

                <div className='right'>

                    <div className='calculos'>
                        <div className='valor'>
                            <h3>Valor Total</h3>
                            <input type='number' value={total} onChange={e => setTotal(e.target.value)}/>
                        </div>

                        <div className='meio'>
                            <div className='parcela'>
                                <h3>Parcelas</h3>
                                <input type='number' value={parcela} onChange={e => setParcela(e.target.value)} />
                            </div>

                            <div className='jurosM'>
                                <h3>Juros Mensal (%)</h3>
                                <input type='number' value={juros} onChange={e => setJuros(e.target.value)}/>
                            </div>
                        </div>

                        <button onClick={Calcular}>Calcular</button>

                        <div className='total'>
                            <h3>Parcela: {valorP}</h3>
                            <h3>Valor Total: {valorT}</h3>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>

    )
}