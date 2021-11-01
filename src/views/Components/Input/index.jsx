import './styles.css';

export default function Input({ label, error, ...props }) {
    const showLabel = label && <span>{label}</span>;
    const showError = error && <span className='validation-error'>{error}</span>
    return (
        <div className='container-input'>
            {showLabel}
            <input {...props}/>
            {showError}
        </div>
    )
}