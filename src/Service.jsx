import React,{useState} from  'react';
import ServiceData from './Sdata';
import Card from './Card';
import SortBy from './components/sortByButton';

const sortingData=[{
    id:1,name:"name"
},
{id:2,name:"length"}

]


const Service =()=>{
    
    const [sortBy,setSortBy]=useState('name');
    let sortedData=(a,b)=>a-b;

    const onChange=()=>{
        alert('Hello Change');
    }

  return(
    <React.Fragment>
<div className="my-5">
    <h1 className="text-center">Our Services</h1>
     <div className="container-fluid mb-5">
            <div className="row">
            <div className='col-1'></div>
            <div className="col-10 mx-auto">
            <SortBy data={sortingData} onChange={onChange}/>

            </div>

            <div className='col-1'></div>

                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            ServiceData && ServiceData.length>0 && ServiceData.sort(sortedData).map((val,index)=>{
                                return <Card
                                key={index}
                                 imgSrc={val.imgSrc}
                                 title={val.title}
                                 description={val.description}
                                 btnText={val.btnText}
                                />
                            })
                        }
                      
{/* end here */}
                    </div>
                </div>
            </div>
            
            </div> 
</div>
    </React.Fragment>
  )
}
export default Service;