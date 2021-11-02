import List from './List';

import './styles.css';

export default function Table(){
    return(
        <div className='board'>
            <List position={0}/>
            <List position={1}/>
            <List position={2}/>
        </div>
    )
}