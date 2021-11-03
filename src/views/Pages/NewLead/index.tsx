import { useState } from 'react';
import { useHistory } from 'react-router';

import { SubmitHandler, Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Field,
  Label,
  Control,
  Input,
  Help,
  Hero,
  Container,
  Column,
  Box
} from 'rbx';

import Table from '../../Components/Table';
import { Logo } from '../../Components/Logo';

import { createLead } from '../../../services/lead-service';

import './styles.css';

type NewLeadFormData = {
  name: string;
  phone: string;
  email: string;
};

const NewLeadFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  phone: yup
    .string()
    .max(20, '20 caracteres no máximo')
    .required('Telefone obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório')
});

const NewLead: React.FC = () => {
  const history = useHistory();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(NewLeadFormSchema),
  });

  const [opportunities, setOpportunities] = useState<string[]>([]);

  function addOpportunity(name: string) {
    setOpportunities((prev: string[]) => {
      const isTrue = prev.includes(name);
      return isTrue ? prev : [...prev, name];
    });

  }

  function removeOpportunity(name: string) {
    setOpportunities((prev) => prev.filter((opp) => opp !== name));
  }

  function handleRowClick(data: string[], { target }: any) {

    if (target instanceof HTMLInputElement) {
      const opportunity = data[1];

      target.checked
        ? addOpportunity(opportunity)
        : removeOpportunity(opportunity);
    }
  }

  function handleCheckOpportunities(ev: any) {
    console.log(ev)
    ev.target.checked
      ? setOpportunities(['RPA', 'Produto Digital', 'Analytics', 'BPM'])
      : setOpportunities([]);
  }

  const handleNewLead: SubmitHandler<NewLeadFormData> = async (value) => {
    createLead({
      name: value.name,
      phone: value.phone,
      email: value.email,
      oportunidades: opportunities,
      position: 0
    });
    alert('Lead Cadatrado com Sucesso!');
    history.push('/leads');
  };

  return (
    <Hero size="fullheight">
      <Hero.Body>
        <Container>
          <Column.Group centered>
            <Column size={6}>
              <Box>

                <div className="header-area">
                  <Logo />
                  <h1 className='title'>Novo Lead</h1>
                </div>

                <div>
                  <form
                    className="new-lead-form"
                    onSubmit={handleSubmit(handleNewLead)}
                  >
                    <div className="input-area">
                      <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <Field>
                            <Label>Nome *</Label>
                            <Control>
                              <Input type="text" value={value} onChange={onChange} />
                            </Control>
                            {errors.name && (
                              <Help color="danger">{errors.name.message}</Help>
                            )}
                          </Field>
                        )}
                        name="name"
                        defaultValue=""
                      />

                      <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <Field>
                            <Label>Telefone *</Label>
                            <Control>
                              <Input type="tel" value={value} onChange={onChange} />
                            </Control>
                            {errors.phone && (
                              <Help color="danger">{errors.phone.message}</Help>
                            )}
                          </Field>
                        )}
                        name="phone"
                        defaultValue=""
                      />

                      <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <Field>
                            <Label>E-mail *</Label>
                            <Control>
                              <Input type="email" value={value} onChange={onChange} />
                            </Control>
                            {errors.email && (
                              <Help color="danger">{errors.email.message}</Help>
                            )}
                          </Field>
                        )}
                        name="email"
                        defaultValue=""
                      />
                    </div>

                    <div className="opportunity-area">
                      <Table
                        label="Oportunidades *"
                        columns={[
                          <input
                            className="checkbox"
                            type="checkbox"
                            onClick={handleCheckOpportunities}
                          />,
                          '',
                        ]}
                        rows={[
                          [
                            <input
                              name="opp-rpa"
                              className="checkbox"
                              type="checkbox"
                              checked={opportunities.includes('RPA')}
                              readOnly
                            />,
                            'RPA',
                          ],
                          [
                            <input
                              name="opp-produto-digital"
                              className="checkbox"
                              type="checkbox"
                              checked={opportunities.includes('Produto Digital')}
                              readOnly
                            />,
                            'Produto Digital',
                          ],
                          [
                            <input
                              name="opp-analytics"
                              className="checkbox"
                              type="checkbox"
                              checked={opportunities.includes('Analytics')}
                              readOnly
                            />,
                            'Analytics',
                          ],
                          [
                            <input
                              name="opp-bpm"
                              className="checkbox"
                              type="checkbox"
                              checked={opportunities.includes('BPM')}
                              readOnly
                            />,
                            'BPM',
                          ],
                        ]}
                        onRowClick={handleRowClick}
                      />
                      <Button type="submit" color="info" fullwidth>
                        Salvar
                      </Button>
                    </div>
                  </form>
                </div>
              </Box>
            </Column>
          </Column.Group>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

export default NewLead;
