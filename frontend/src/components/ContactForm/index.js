import { Form } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

export default function ContactForm() {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>
    </Form>
  );
}
