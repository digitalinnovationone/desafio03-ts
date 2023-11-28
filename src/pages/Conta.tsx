import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { api } from "../api";
import CardInfo from "../components/CardInfo";
import { AppContext } from "../components/AppContext";

const Conta = () => {
  const { isLoggedIn, setUser, user } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data = await api;
      setUser(data);
    };

    getData();
  }, []);

  const actualData = new Date();

  if (id !== user?.id) {
    navigate("/");
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {user === undefined || user === null ? (
          <Center>
            <Spinner size="xl" color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo ${user?.name}`}
              content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}
            />
            <CardInfo mainContent="Saldo" content={`R$ ${user.balance}`} />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
