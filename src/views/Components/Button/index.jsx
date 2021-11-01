import './styles.css';

export default function Button({name, ...props}){
    return (
        <div>
            <button {...props}>{name}</button>
        </div>
    )
}