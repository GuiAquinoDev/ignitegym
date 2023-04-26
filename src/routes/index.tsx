import { Box } from 'native-base';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";

export function Routes() {

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer >
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}