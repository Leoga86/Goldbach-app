import React, { useState } from 'react';

function App() {
  const [limit, setLimit] = useState(100);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const checkGoldbach = () => {
    setLoading(true);
    setTimeout(() => {
      for (let par = 4; par <= limit; par += 2) {
        let found = false;
        for (let p = 2; p < par; p++) {
          if (isPrime(p) && isPrime(par - p)) {
            found = true;
            break;
          }
        }
        if (!found) {
          setResult(`❌ El número ${par} NO cumple con la conjetura.`);
          setLoading(false);
          return;
        }
      }
      setResult(`✅ Todos los números pares hasta ${limit} cumplen con la conjetura de Goldbach.`);
      setLoading(false);
    }, 100);
  };

  return (
    <div style={{maxWidth: 400, margin: 'auto', padding: 20, fontFamily: 'Arial'}}>
      <h2>El Gran Misterio de Goldbach</h2>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        placeholder="Ingresá un número par"
        style={{width: '100%', padding: 8, marginBottom: 10, fontSize: 16}}
      />
      <button onClick={checkGoldbach} disabled={loading} style={{width: '100%', padding: 10, fontSize: 16}}>
        {loading ? 'Verificando...' : 'Verificar'}
      </button>
      <div style={{marginTop: 20, fontSize: 14}}>{result}</div>
    </div>
  );
}

export default App;
