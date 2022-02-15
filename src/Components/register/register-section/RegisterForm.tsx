import { Link } from "react-router-dom";
import styled from "styled-components";
export default function RegisterForm() {
  return (
    <Card>
      <Form>
        {/* onSubmit={} */}
        <TextDiv>
          <Text>Gå med </Text>
          <p>Det går snabbt och smidigt.</p>
        </TextDiv>

        <UserInput
          type="text"
          placeholder="Förnamn"
          // value={email}
          // onChange={event }
          required
        />
        <UserInput
          type="text"
          placeholder="Efternamn"
          // value={email}
          // onChange={event }
          required
        />
        <UserInput
          type="text"
          placeholder="e-post"
          // value={email}
          // onChange={event }
          required
        />

        <UserInput
          type="password"
          placeholder="Lösenord"
          // value={password}
          // onChange={event }
          required
        />

        <Button type="submit">Gå med</Button>

        <RegisterLink to="/login">Redan medlem? ..... Logga in</RegisterLink>
      </Form>
    </Card>
  );
}
export const Card = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RegisterLink = styled(Link)`
  margin: 1rem;
  text-decoration: none;
  color: black;
  font-size: 20px;
  &:hover {
    background: lightgray;
  }
`;

export const Form = styled.form`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 700px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
  background-color: #fff;
  border-radius: 8px;
  padding: 50px 50px;
  box-shadow: 1px 0px 10px 1px lightgray;
`;

export const TextDiv = styled.span`
  padding-bottom: 16px;
`;

export const Text = styled.span`
  color: #444;
  font-size: 34px;
  padding-bottom: 16px;
`;

export const UserInput = styled.input`
  height: 40px;
  padding: 0 15px;
  border: 2px solid #eee;
  border-radius: 4px;
  margin-bottom: 10px;
  color: #444;
  font-size: 16px;
  &:focus {
    border-color: #ddd;
  }
  &:hover {
    border-color: #ddd;
  }
`;

export const Button = styled.button`
  height: 40px;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  color: #fff;
  background-color: #00a878;
  margin-top: 5px;
  margin-bottom: 16px;
  cursor: pointer;
`;
