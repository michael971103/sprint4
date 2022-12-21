import { useEffect, useState } from "react";
import axios from "axios";
import { getAllInventarios } from "../commons/urls";
import TablaInventarios from "../components/TablaInventarios";


const Inventarios = () => {

    const [inventarios, setInventarios] = useState();

      useEffect(() => {
        axios.get(getAllInventarios)
     .then(res=> setInventarios(res.data))
      }, []);
    
      if(inventarios){
        return(
            <TablaInventarios res={inventarios} />
        )
      }
}
export default Inventarios;