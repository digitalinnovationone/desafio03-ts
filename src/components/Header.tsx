import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'
import { IUser } from '../services/interfaces/user.interface'

export const Header  = () => {
  const { isLoggedIn, setIsLoggedIn, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false, user: {} as IUser});
    setIsLoggedIn(false);
    setUser({} as IUser);
    navigate('/');
  }

  return(
    <Flex backgroundColor='orange' padding='5px'>
      <Box>
        <Center>
          <Text fontSize='3xl'>Dio Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>
    
  )
}
