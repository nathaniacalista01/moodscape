import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForumScreen from "../screens/ForumScreen";
import AddPost from "../screens/AddJournal";
import HomeScreen from "../screens/HomeScreen";
import AddJournal from "../screens/AddJournal";

const JournalStack = createNativeStackNavigator();

const JournalStackNavigator = () => {
  return (
    <JournalStack.Navigator screenOptions={{ headerShown: false }}>
      <JournalStack.Screen name="HomeScreen" component={HomeScreen} />
      <JournalStack.Screen name="AddJournal" component={AddJournal} />
    </JournalStack.Navigator>
  );
};

export default JournalStackNavigator;
