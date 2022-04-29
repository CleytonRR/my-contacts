import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <Input />
      <Select>
        <option value="123">Instagram</option>
      </Select>
    </>
  );
}
