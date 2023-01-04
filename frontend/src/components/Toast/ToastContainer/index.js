import { useState, useEffect } from 'react';
import { Container } from './styles';

import ToastMessage from '../ToastMessage';

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast(event) {
      const { type, text } = event.detail;

      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    }

    document.addEventListener('addtoast', handleAddToast);

    return () => {
      document.removeEventListener('addtoast', handleAddToast);
    };
  }, []);
  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage key={message.id} text={message.text} type={message.type} />
      ))}
    </Container>
  );
}
