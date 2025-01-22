import React from 'react';
import {Text} from 'react-native';

type Props = {
  name: string;
};

export function WithGreeting<T extends Props>(
  WrappedComponent: React.ComponentType<T>,
) {
  const ComponentWithExtraInfo = (props: T) => {
    return (
      <>
        <Text>Hi {props.name}</Text>
        <WrappedComponent {...props} />
      </>
    );
  };
  return ComponentWithExtraInfo;
}
