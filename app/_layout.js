import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Нүүр",
        headerStyle: {
          // backgroundColor: 'gray',
        },
        // headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="movies"
        options={{
          title: "Киноны жагсаалт",
        }}
      />
      <Stack.Screen
        name="tic-tac"
        options={{
          title: "Тик так тоглоом",
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
