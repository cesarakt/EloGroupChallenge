import { useHistory } from 'react-router-dom';

import { SubmitHandler, Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Button, Field, Label, Control, Input, Help, Hero, Container, Column, Box,
} from 'rbx';

import { Logo } from '../../Components/Logo';
import { registerUser } from '../../../services/register-service';

import './styles.css';

type RegisterFormData = {
    user: string
    password: string
    passwordConfirmation: string
}

const RegisterFormSchema = yup.object().shape({
    user: yup.string().required('Nome obrigatório'),
    password: yup
        .string()
        .min(8, '8 caracteres no mínimo')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#]).{8,}$/, 'A senha deve possuir ao menos 8 caracteres, com um caracter especial, um numerico e um alfanumerico')
        .required('Senha obrigatória'),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Está diferente da senha'),
});

const Register: React.FC = () => {
    const history = useHistory();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(RegisterFormSchema),
    });

    const handleRegister: SubmitHandler<RegisterFormData> = async (value) => {
        registerUser({ user: value.user, password: value.password });
        history.push('./leads');
    };

    return (
        <Hero size="fullheight">
            <Hero.Body>
                <Container>
                    <Column.Group centered>
                        <Column size={6}>
                            <Box>
                                <Column.Group textAlign="centered">
                                    <Column>
                                        <Logo />
                                    </Column>
                                </Column.Group>

                                <form onSubmit={handleSubmit(handleRegister)}>
                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <Field>
                                                <Label>Usuário *</Label>
                                                <Control>
                                                    <Input type="text" value={value} onChange={onChange} />
                                                </Control>
                                                {errors.user && <Help color="danger">{errors.user.message}</Help>}
                                            </Field>
                                        )}
                                        name="user"
                                        defaultValue=""
                                    />

                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <Field>
                                                <Label>Password *</Label>
                                                <Control>
                                                    <Input type="password" value={value} onChange={onChange} />
                                                </Control>
                                                {errors.password && <Help color="danger">{errors.password.message}</Help>}
                                            </Field>
                                        )}
                                        name="password"
                                        defaultValue=""
                                    />

                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <Field>
                                                <Label>Confirmação Password *</Label>
                                                <Control>
                                                    <Input type="password" value={value} onChange={onChange} />
                                                </Control>
                                                {errors.passwordConfirmation && <Help color="danger">{errors.passwordConfirmation.message}</Help>}
                                            </Field>
                                        )}
                                        name="passwordConfirmation"
                                        defaultValue=""
                                    />

                                    <Button color="info" type="submit" fullwidth>
                                        Registrar
                                    </Button>
                                </form>
                            </Box>
                        </Column>
                    </Column.Group>
                </Container>
            </Hero.Body>
        </Hero>
    );
};

export default Register;
