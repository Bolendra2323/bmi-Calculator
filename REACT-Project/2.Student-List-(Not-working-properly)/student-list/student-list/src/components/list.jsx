import React from 'react';

const List=({players})=>{

    return(
        <>
        {players.map((cricket)=>{
            const{id,name,designation,url}=cricket;
            return(
                <>
                <div key={id} className='cricket'>
                    <img src={url}  alt={url}/>
                    <div>
                        <h4>{name}</h4>
                        <p>{designation}</p>
                    </div>
                </div>
                </>
            )
        })}
        </>
    )
}

export default List