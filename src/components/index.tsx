import React from 'react';
import {
  Box,
  Center,
  IconButton,
  Button,
  Text,
  SimpleGrid,
  Flex,
  Wrap
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
const { useReducer } = React;

interface State {
  count: number;
}

type Action =
  | { type: 'increase' }
  | { type: 'decrease' }
  | { type: 'reset' };

const initState = { count: 0 };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increase':
      return { count: state.count + 1 };
    case 'decrease':
      return { count: state.count - 1 };
      case 'reset':
        return initState;  
    default:
      throw new Error();
  }
}

function Counter(): JSX.Element {
  const maxVal: number = 100;
  const minVal: number = 0;
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className='main-page'>
      <SimpleGrid columns={1} spacing={{ base: 12, md: 16, lg: 20 }}>
        <Box height={{ base: '100px', md: '120px' }}>
          <Center>
            <Text 
              fontSize={{ base: '42px', md: '60px', lg: '64px' }}
              bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text'
              fontWeight='extrabold'
            >
              Simple Counter
            </Text>
          </Center>
        </Box>
        <Wrap align='center' justify='center'>
          <Flex>
            <IconButton
              className='icon-button'
              isDisabled={state.count >= maxVal}
              aria-label= 'add-btn'
              size='lg'
              fontSize={{ base: '16px', md: '24px', lg: '32px' }}
              w={{  md: '60px', lg: '72px' }}
              h={{  md: '60px', lg: '72px' }}
              icon={<AddIcon />}
              onClick={() => dispatch({ type: 'increase' })}
            />
            <Center>
              <Text
                className='custom-text'
                w={{  base: '150px', lg: '200px' }}
                fontSize={{ base: '32px', md: '36px', lg: '48px' }}
                fontWeight='semibold'
                color='gray.500'
              >
                {state.count}
              </Text>
            </Center>
            <IconButton
              className='icon-button'
              isDisabled={state.count <= minVal}
              aria-label= 'minus-btn'
              size='lg'
              fontSize={{ md: '24px', lg: '32px' }}
              w={{  md: '60px', lg: '72px' }}
              h={{  md: '60px', lg: '72px' }}
              icon={<MinusIcon />}
              onClick={() => dispatch({ type: 'decrease' })}
            />
          </Flex>
        </Wrap>
        <Center>
          <Button
            colorScheme='blue'
            w={{ base: '246px', md: '270px', lg: '344px' }}
            height={{  base: '48px', md: '55px', lg: '70px' }}
            fontSize={{ base: '24px', md: '32px', lg: '35px' }}
            onClick={() => dispatch({ type: 'reset' })}
          >
            Reset
          </Button>
        </Center>
      </SimpleGrid>
    </div>
  );
}
export default Counter;
