import './App.css';
import './CSS/DesedaTableShow.css';
import React, { useState, useEffect } from 'react';

function DesedaTableShow() {

  const [tableproducts, setTableProducts] = useState('');

  useEffect(() => {    
    fetch('https://atlantia-dev-test.herokuapp.com/api/beer-products')
    .then(response =>  response.json())
    .then(resData => {
      setTableProducts(resData);
    })

  },[]);

  const PersistanceCalculator  = (persistence) =>{
    if (persistence > 0.30){
      return(<>
      <td className='PersistancePositive'>{persistence * 100}</td>
      </>)
    }else{
      return(<>
        <td className='PersistanceNegative'>{persistence * -100}</td>
        </>)
    }
  }

  return (
    <div className="DesedaTableShow">
      <div>
      <p  className="ComparativeAnalysis">Comparative Analysis</p>
      </div>

        {
          tableproducts ? 
          <table className='DesedaTable'>
            <thead>
              <tr className='TableTituloRow'>
                <th></th>
                <th className='TableTitulo'>Nombre</th>
                <th className='TableTitulo'>SKU</th>
                <th className='TableTitulo'>% Presencia</th>
                <th className='TableTitulo'>Av. Price</th>
                <th className='TableTitulo'>Av. Position</th>
              </tr>
            </thead>
            
            <tbody>
            {tableproducts?.map((product) => (
               <tr className='TableBodyRow' key={product.id}>
               <td><img className='ProductImage' src={product.productImage} alt="Imagen"/></td>
               <td>{product.name}</td>
               <td>{product.sku}</td>
               {PersistanceCalculator(product.persistence)}
               <td>{"$"+product?.averagePrice?.toFixed(2)}</td>
               <td>{product.averagePosition}</td>
              </tr>
          
            ))}
          </tbody>
          </table>

          :
          
          'loading...'
        }
    </div>
  );
}

export default DesedaTableShow;
