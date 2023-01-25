import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const Load: React.FC = () => <ActivityIndicatorBaseStyles />;

const ActivityIndicatorBaseStyles = styled(ActivityIndicator).attrs(({ theme }) => ({
  size: 'small',
  color: theme.colors.main
}))`
  flex: 1;
`;