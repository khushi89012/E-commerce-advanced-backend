import axios from 'axios';
import { SortButton }  from "./sortButton"
import {useState,useEffect} from 'react';
import ProductComponent  from "./productComponent";
import "../styles/main.css";

export const Main = ()=>{
    const [data, setData] = useState([]);
    const [order, setOrder] = useState('asc');
    const [page, setPage] = useState(1);
  
    useEffect(() => {
    axios.get(`https://shopifycolllectione-commerce.herokuapp.com/product?page=${page}&size=${9}`)
      .then(res => {
        setData(res.data.products);
        // console.log(res)
      })
    }, [page])
  
    const [filterProd, setFilterProd] = useState({});
  
    const  handleSort = (parameter, value) => {
      setFilterProd({parameter, value});
    }
  
  



    return (
        <div>
            <div className="sort-button-Main">
         
          <SortButton handleSort={handleSort}/>

          <h3>page number:- {page}</h3>
        </div>


      <div className = "container-Main">
      {data.sort((a,b)=>{

        if(filterProd.parameter === 'brandname' && filterProd.value === 'asc'){
          return a.brandname.localeCompare(b.brandname);
        }
        else if(filterProd.parameter === 'brandname' && filterProd.value === 'desc'){
          return b.brandname.localeCompare(a.brandname);
        }
        else if(filterProd.parameter === "price" && filterProd.value === 'asc'){
          return a.price - b.price;
        }
        else if(filterProd.parameter === "price" && filterProd.value === 'desc'){
          return b.price - a.price;
        }

      }).map((e)=>
      <ProductComponent key={e.id} product={e}/>
      )}
      </div>
    <button  className="float-l"
     onClick={()=>{
      setPage(page+ -1);
      console.log(page)
    }}> PREV </button>
    <button 
    className="float-r"
    onClick={()=>{
      setPage(page+1);
      console.log(page)
    }}> Next </button>

            </div>
        
    )
}
