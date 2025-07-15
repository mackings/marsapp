
import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
import styled, { keyframes } from 'styled-components';
root.render(<App />);




const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  user-select: none;
  animation: ${fadeIn} 1s ease forwards;
`;

const QuoteText = styled.p`
  font-size: 1.8rem;
  font-style: italic;
  max-width: 600px;
  margin: 0 0 2rem 0;
  min-height: 100px;
  animation: ${fadeIn} 1.5s ease forwards;
`;

const Button = styled.button`
  background: #fff;
  color: #764ba2;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 8px 15px rgba(118, 75, 162, 0.3);
  transition: background-color 0.3s ease, transform 0.2s ease;
  user-select: none;

  &:hover {
    background-color: #f0e6ff;
    transform: translateY(-3px);
  }
  
  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    box-shadow: none;
  }
`;



export default function App() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/quote');
      const data = await res.json();
      setQuote(data.quote);
    } catch (error) {
      setQuote('Oops, something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Container>
      <Title>🌟 Motivation App 🌟</Title>
      <QuoteText>{loading ? 'Loading...' : quote}</QuoteText>
      <Button onClick={fetchQuote} disabled={loading}>
        {loading ? 'Loading...' : 'Get New Quote'}
      </Button>
    </Container>
  );
}

//export default App;
