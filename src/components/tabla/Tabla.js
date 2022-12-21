import Table from 'react-bootstrap/Table';

function Tabla({res, i}) {
    let {nombre} = res;
  return (
        <tr>
          <td>{i}</td>
          <td>{nombre}</td>
        </tr>
  );
}

export default Tabla;