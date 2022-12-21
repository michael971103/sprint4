import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {getAllProductos} from "../commons/urls"
import Tabla from "../components/tabla/Tabla";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { postNewProduct } from "../commons/urls";

let initialLocalform = {
    "cantidadStock" : 0,
    "cantidadMaxima" : 0,
    "cantidadMinima" : 0,
    "precioCosto" : 0,
    "precioVenta" : 0,
    "productId" : ""
}

const  Productos = () => {

    const [productos, setProductos] = useState([]);
    const [show, setShow] = useState(false);
    const [localform, setLocalform] = useState(initialLocalform);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get(getAllProductos)
        .then(res=>{
            setProductos(res.data)
        })
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(postNewProduct, localform)
        .then(res=>console.log(res.data))
        
        handleClose()
    }

    const handleChange = (e)  => {  
        setLocalform({ 
          ...localform,
          [e.target.name] : e.target.value  
        });
      }

    return (<>
    
        <Container mt-3>
            <Row>
                <Col>
                    <Row>
                        <h3>Productos</h3>
                        <div className="botones">
                            <button className="btn btn-danger" >Borrar</button>
                            <Button variant="success" onClick={handleShow}>
                                Crear
                            </Button>
                        </div>
                        <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Nombre del producto</th>
                                    </tr>
                                </thead>
                                <tbody>
                            {productos.map((producto, i)=>{
                                return(
                                <Tabla res={producto} i={i} key={producto.id}></Tabla>
                                )
                                }
                            )}
                            </tbody>
                        </Table>
                        <style jsx>{`
                            .botones{
                                display:flex;
                                justify-content: space-around;
                                margin-bottom: 10px;
                                margin-top: 10px;
                            }
                        `}</style>
                    </Row>
                </Col>
            </Row>
        </Container>
        

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Producto</Modal.Title>
        </Modal.Header>
            <form onSubmit={handleSubmit}>
        <Modal.Body>
                <div className="modal-inputs">
                    <div className="input-field">
                        <label htmlFor="productId">Nombre del producto</label>
                        <input type="text" required id="productId" name="productId"  onChange={handleChange} placeholder="Ingrese el nombre del producto"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="cantidadMaxima">Cantidad Máxima</label>
                        <input type="number" required id="cantidadMaxima" name="cantidadMaxima" onChange={handleChange} placeholder="Ingrese una cantidad máxima"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="cantidadMinima">Cantidad Minima</label>
                        <input type="number" required id="cantidadMinima" name="cantidadMinima" onChange={handleChange} placeholder="Ingrese una cantidad Minima"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="precioCosto">Precio Costo</label>
                        <input type="number" required id="precioCosto" name="precioCosto" onChange={handleChange} placeholder="Ingrese el costo"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="precioVenta">Precio Venta</label>
                        <input type="number" required id="precioVenta" name="precioVenta" onChange={handleChange} placeholder="Ingrese un precio de venta"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="cantidadStock">Stock</label>
                        <input type="number" required id="cantidadStock" name="cantidadStock" onChange={handleChange} placeholder="Ingrese un stock"/>
                    </div>
                </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
            </form>
        <style jsx>{`
            .modal-inputs{
                display: flex;
                flex-wrap:wrap;
            }
            .input-field{
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                width:50%;
            }
            .input-field>label{
                font-size:19px;
                margin-bottom:3px;
                margin-top:10px;
            }
            .input-field>input{
                color: #4965C6;
                width:80%;
                height:30px;
                border-radius:8px;
                border: 2px solid #4965C6;
                text-align:center;
                font-size:10px;
            }
        `}</style>
      </Modal>
    </>
        
    );
}
 
export default Productos;