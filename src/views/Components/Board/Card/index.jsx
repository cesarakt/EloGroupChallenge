import './styles.css';

export default function Card({content}){
    const showContent = <span>{content}</span>
    return(
        <div className='card-area'>
            {showContent}
        </div>
    )
}