import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    if (!form.username || !form.password) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    if (form.username === 'Admin' && form.password === 'FeT4511') {
      navigate('/admin');
    } else {
      setError('Credenciales incorrectas. Inténtelo de nuevo.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <main>
      <div className="container bg-black border border-black max-w-[400px] mx-auto my-4 rounded-xl p-4">
        <h1 className="text-2xl font-extrabold font-serif p-2 text-center text-white">
          Autenticación de Usuarios
        </h1>
        <p className="border border-black p-2 text-justify rounded-lg bg-white">
          Ingrese usuario y contraseña para su validación y pueda tener acceso a hacer modificaciones
        </p>
        <form
          onSubmit={handleLogin}
          className="flex flex-col my-4 p-2 bg-slate-600 border border-black rounded-lg"
        >
          {error && <p className="text-red-500 text-center">{error}</p>}
          <label htmlFor="username" className="flex flex-col gap-2 p-4 text-white font-bold">
            <span>Usuario:</span>
            <input
              id="username"
              className="border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black"
              type="text"
              placeholder="Ejem. Carlos01"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password" className="flex flex-col gap-2 p-4 text-white font-bold">
            <span>Contraseña:</span>
            <input
              id="password"
              className="border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black"
              type="password"
              placeholder="***********"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </label>
          <input
            className="my-4 mx-auto px-4 py-2 bg-violet-500 hover:bg-red-300 rounded-lg font-bold"
            type="submit"
            value="Acceder"
          />
        </form>
      </div>
    </main>
  );
};

export default Login;