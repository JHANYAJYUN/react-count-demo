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
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <SimpleGrid columns={1} spacing={10}>
        <Box height="100px">
          <Center>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="5xl"
              fontWeight="extrabold"
            >
              Simple Counter
            </Text>
          </Center>
        </Box>
        <Wrap align="center" justify="center">
          <Flex>
            <IconButton
              aria-label= ''
              size="lg"
              icon={<AddIcon />}
              onClick={() => dispatch({ type: 'increase' })}
            />
            <Center>
              <Text
                className="custom-input"
                w="200px"
                fontSize="2rem"
                fontWeight="semibold"
                color="gray.500"
                isTruncated
              >
                {state.count}
              </Text>
            </Center>
            <IconButton
              aria-label= ''
              size="lg"
              icon={<MinusIcon />}
              onClick={() => dispatch({ type: 'decrease' })}
            />
          </Flex>
        </Wrap>
        <Center>
          <Button
            colorScheme="blue"
            w="200px"
            size="lg"
            fontSize="1.5rem"
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
