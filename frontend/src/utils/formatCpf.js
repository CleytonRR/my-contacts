export default function formatCpf(phoneNumber) {
  return phoneNumber
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
