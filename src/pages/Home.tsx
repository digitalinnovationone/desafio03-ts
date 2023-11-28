import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setIsLoggedIn, setUser, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  isLoggedIn && navigate("/conta/1");

  const validateUser = async (email: string, password: string) => {
    const user = await login(email, password);

    if (!user) {
      return alert("Email ou senha inválidos");
    }

    setIsLoggedIn(true);

    setUser(user);
    changeLocalStorage({ login: true, user });
    navigate("/conta/1");
  };

  return (
    <Box padding="25px">
      <Card>
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Center>
          <DButton onClick={() => validateUser(email, password)} />
        </Center>
      </Card>
    </Box>
  );
};

export default Home;
