import React, { useState } from 'react';
import styled from 'styled-components';
import picture1 from './Picture1.png';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  box-shadow: 0 0 10px rgba(197, 19, 19, 0.1);
  @media (min-width: 768px) {
    flex-direction: row; 
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  width: 380px;
`;

const FormContainer = styled.div`
  flex: 1;
  background-color: #fff;
  @media (min-width: 768px) {
    width: auto; 
  }
`;

const Form = styled.form`
  width: 500px;
  background-color: #ffffff;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(197, 19, 19, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 98%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #9b9cac;
  border-radius: 5px;
`;

const PasswordInput = styled.div`
  position: relative;
`;

const PasswordToggleIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const RememberMe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: rgb(247, 142, 39);
  cursor: pointer;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Agree to Terms:', agreeToTerms);
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={picture1} alt="Your Image" />
      </ImageContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <h1 style={{ textAlign: 'center' }}>Login</h1>
            <Label htmlFor="username" id="1">
              Login ID
            </Label>
            <Input
              type="text"
              id="username"
              placeholder="Enter Login Id"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password" id="2">
              Password
            </Label>
            <PasswordInput>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <PasswordToggleIcon onClick={togglePasswordVisibility}>
                {showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
              </PasswordToggleIcon>
            </PasswordInput>
          </FormGroup>
          <FormGroup>
            <RememberMe>
              <Label htmlFor="rememberMe" id="3">
                <input type="checkbox" id="rememberMe" />
                Remember Me
              </Label>
              <Link style={{ color: 'rgb(247, 142, 39)' }}>Change Password</Link>
            </RememberMe>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="agreeToTerms" id="4">
              <input type="checkbox" id="agreeToTerms" />
              Agree to
              <Link style={{ color: 'rgb(247, 142, 39)' }}> Terms & Conditions</Link>
            </Label>
          </FormGroup>
          <Button type="submit">Login</Button>
          <div className="register-link" style={{ textAlign: 'center', fontSize: '15px', padding: '20px' }}>
            Do you have an account? <Link href="#">Register here</Link>
          </div>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default App;
