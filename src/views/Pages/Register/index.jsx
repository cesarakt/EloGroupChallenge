import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../Components/Button';
import Input from '../../Components/Input';

import './styles.css';


export default function Register() {
    const history = useHistory();
    const [user, setUser] = useState({
        user: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState({});
    
    const valueInput = ev => setUser({
        ...user,
        [ev.target.name]: ev.target.value
    });

    function handleSubmit(ev) {
        ev.preventDefault();

        history.push('./leads');
    }

    return (
        <>
            <div className='container-register'>
                <div>
                    <header className='header-register'>
                        ELO <strong>GROUP</strong>
                    </header>
                </div>
                <form className='form-register' onSubmit={handleSubmit}>
                    <Input
                        name='user'
                        label='Usuário *'
                        type='text'
                        onChange={valueInput}
                        value={user.user}
                        error={error.user}
                    />
                    <Input
                        name='password'
                        label='Password *'
                        type='password'
                        onChange={valueInput}
                        value={user.password}
                        error={error.password}
                    />
                    <Input
                        name='confirmPassword'
                        label='Confirmação Password *'
                        type='password'
                        onChange={valueInput}
                        value={user.confirmPassword}
                    />
                    <Button name='Registrar' type='submit' />
                </form>
            </div>
        </>
    )
}