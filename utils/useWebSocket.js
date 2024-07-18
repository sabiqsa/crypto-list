import { useEffect, useReducer } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const initialState = {
  bitcoin: null,
  ethereum: null,
  solana: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'bitcoin':
      return {
        ...state,
        bitcoin: payload,
      };
    case 'ethereum':
      return {
        ...state,
        ethereum: payload,
      };
    case 'solana':
      return {
        ...state,
        solana: payload,
      };
    default:
      return state;
  }
};

const useWebSocketHook = () => {
  const [currencies, dispatch] = useReducer(reducer, initialState);
  const { readyState, sendJsonMessage, lastJsonMessage } = useWebSocket(
    'wss://ws.coincap.io/prices?assets=bitcoin,ethereum,solana',
  );

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      sendJsonMessage({
        type: 'subscribe',
      });
    }
  }, [readyState]);

  useEffect(() => {
    if (lastJsonMessage) {
      const keys = Object.keys(lastJsonMessage);
      const type = keys[0];
      const payload = lastJsonMessage[type];

      dispatch({ type, payload });
    }
  }, [lastJsonMessage]);

  return currencies;
};

export default useWebSocketHook;
