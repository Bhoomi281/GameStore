import React from 'react';
import list from '../List';
import Store from './Store';


const Game = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Store item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Game