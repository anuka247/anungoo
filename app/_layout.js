import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: "instagram",
        headerStyle: {},
        headerShown: false,
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
        name="comment"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="edit"
        options={{
          // Set the presentation mode to edit for our edit route.
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
