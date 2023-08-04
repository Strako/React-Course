import { TbPageBreak } from 'react-icons/tb'
import './NotFound.css'

const Notfound = () => {
    return (
        <div className="container-404">
            <h1>Ups!</h1>
            <div className="icon-404"> <TbPageBreak size={200} /> </div>
            <h2 className="container-text">La pagina que buscabas no existe :c</h2>
        </div>

    );
}
export default Notfound;