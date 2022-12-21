import Table from 'react-bootstrap/Table';

const TablaInventarios = ({res}) => {
    
    const viewSpecifications = (id) => {
        console.log(id)
    }
    console.log(res)
    return (
      <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Nombre Producto</th>
            <th>Cantidad Maxima</th>
            <th>Cantidad Minima</th>
            <th>Precio costo</th>
            <th>Precio venta</th>
            <th>Cantidad stock</th>
            </tr>
        </thead>
        <tbody>
            {res.map((inventario, i)=>{
                return(
                    <tr onClick={e =>{
                        viewSpecifications(inventario.id)
                    }}> 
                        <td>{i}</td>
                        <td>Producto</td>
                        <td>{inventario.cantidadMaxima}</td>
                        <td>{inventario.cantidadMinima}</td>
                        <td>{inventario.precioCosto}</td>
                        <td>{inventario.precioVenta}</td>
                        <td>{inventario.cantidadStock}</td>
                    </tr>
                )
            })}
        </tbody>
    </Table>
    );
}
 
export default TablaInventarios;