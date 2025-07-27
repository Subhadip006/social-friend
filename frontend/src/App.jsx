import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router';

function App() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    fetch('http://localhost:8090/api/collections/users/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password, passwordConfirm: confirmPassword }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Login response:', data);
        if (data.error) {
          console.error('Error:', data.error);
          alert(data.error);
        } else {
          alert("Login successful");
          navigate("/home");
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        console.error('Error:', error);
      });

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-y-2 min-h-screen w-full'>
        <h1 className='text-3xl font-bold'>Please Login</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 border-gray-300 p-2 rounded'
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-2 border-gray-300 p-2 rounded'
          />

          <input
            type="password"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='border-2 border-gray-300 p-2 rounded'
          />
          <button
            type="submit" className='bg-black text-white p-4'
          >
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default App
