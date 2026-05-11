import "./global.css";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import FeatureIntroScreen from "./screens/FeatureIntroScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeSuggestScreen from "./screens/HomeSuggestScreen";
import DietModeScreen from "./screens/DietModeScreen";
import CookingGoalScreen from "./screens/CookingGoalScreen";
import FoodCategoryScreen from "./screens/FoodCategoryScreen";
import TrendingScreen from "./screens/TrendingScreen";
import SearchScreen from "./screens/SearchScreen";
import VoiceScreen from "./screens/VoiceScreen";
import AISuggestionScreen from "./screens/AISuggestionScreen";
import IngredientInputScreen from "./screens/IngredientInputScreen";
import FilterScreen from "./screens/FilterScreen";
import CameraScanScreen from "./screens/CameraScanScreen";
import ScanResultScreen from "./screens/ScanResultScreen";
import RecipeGeneratingScreen from "./screens/RecipeGeneratingScreen";
import AISuggestListScreen from "./screens/AISuggestListScreen";
import ScanEmptyScreen from "./screens/ScanEmptyScreen";
import ChefmateIntroScreen from "./screens/ChefmateIntroScreen";
import PlannerModeScreen from "./screens/PlannerModeScreen";
import PlannerSummaryScreen from "./screens/PlannerSummaryScreen";
import WeeklyPlannerScreen from "./screens/WeeklyPlannerScreen";
import MealPlanCalendarScreen from "./screens/MealPlanCalendarScreen";
import AddMealScreen from "./screens/AddMealScreen";
import WeeklyAppliedScreen from "./screens/WeeklyAppliedScreen";
import AIPlanningScreen from "./screens/AIPlanningScreen";
import AIReadyMainScreen from "./screens/AIReadyMainScreen";
import FamilySetupEmptyScreen from "./screens/FamilySetupEmptyScreen";
import AddFamilyMemberScreen from "./screens/AddFamilyMemberScreen";
import FamilySetupAddedScreen from "./screens/FamilySetupAddedScreen";
import FamilyNutritionDetailScreen from "./screens/FamilyNutritionDetailScreen";
import FamilyWeeklyPlanScreen from "./screens/FamilyWeeklyPlanScreen";
import WeeklyMenuScreen from "./screens/WeeklyMenuScreen";
import RecipeOverviewScreen from "./screens/RecipeOverviewScreen";
import IngredientsListScreen from "./screens/IngredientsListScreen";
import NutritionValueScreen from "./screens/NutritionValueScreen";
import ReviewsScreen from "./screens/ReviewsScreen";
import ShareRecipeScreen from "./screens/ShareRecipeScreen";
import SavedRecipesScreen from "./screens/SavedRecipesScreen";

type TabKey = "DISCOVER" | "SCAN" | "PLANNER" | "ORDERS" | "PROFILE";

type RootStackParamList = {
  Splash: undefined;
  FeatureIntro: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  DietMode: undefined;
  CookingGoal: undefined;
  FoodCategory: undefined;
  Trending: undefined;
  Search: undefined;
  Voice: undefined;
  AISuggestion: undefined;
  IngredientInput: undefined;
  Filter: undefined;
  CameraScan: undefined;
  ScanResult: undefined;
  RecipeGenerating: undefined;
  AISuggestList: undefined;
  ScanEmpty: undefined;
  Intro: undefined;
  Mode: undefined;
  Summary: undefined;
  Calendar: undefined;
  Weekly: undefined;
  AddMeal: undefined;
  WeeklyApplied: undefined;
  AIPlanning: undefined;
  AIReadyMain: undefined;
  FamilySetupEmpty: undefined;
  AddFamilyMember: undefined;
  FamilySetupAdded: undefined;
  FamilyNutritionDetail: undefined;
  FamilyWeeklyPlan: undefined;
  WeeklyMenu: undefined;
  RecipeOverview: undefined;
  IngredientsList: undefined;
  NutritionValue: undefined;
  Reviews: undefined;
  ShareRecipe: undefined;
  SavedRecipes: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("PLANNER");
  const [selectedModeId, setSelectedModeId] = useState<string>("manual");

  const handleTabPress = (tab: string) => {
    const nextTab = tab as TabKey;
    setActiveTab(nextTab);
    if (nextTab !== "PLANNER") Alert.alert("Thông báo", `Tab ${nextTab} sẽ được mở ở bước tiếp theo.`);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash">{({ navigation }) => <SplashScreen onDone={() => navigation.replace("FeatureIntro")} />}</Stack.Screen>
        <Stack.Screen name="FeatureIntro">{({ navigation }) => <FeatureIntroScreen onContinue={() => navigation.navigate("Login")} onSkip={() => navigation.navigate("Login")} />}</Stack.Screen>
        <Stack.Screen name="Login">{({ navigation }) => <LoginScreen onLogin={() => navigation.replace("Home")} onSignup={() => navigation.navigate("Register")} />}</Stack.Screen>
        <Stack.Screen name="Register">{({ navigation }) => <RegisterScreen onRegister={() => navigation.replace("Home")} onLogin={() => navigation.navigate("Login")} />}</Stack.Screen>

        <Stack.Screen name="Home">{({ navigation }) => <HomeSuggestScreen activeTab={activeTab} onTabPress={handleTabPress} onOpenDiet={() => navigation.navigate("DietMode")} onOpenGoal={() => navigation.navigate("CookingGoal")} onOpenCategory={() => navigation.navigate("FoodCategory")} onOpenTrending={() => navigation.navigate("Trending")} onOpenSearch={() => navigation.navigate("IngredientInput")} onOpenVoice={() => navigation.navigate("Voice")} onOpenAI={() => navigation.navigate("AISuggestion")} />}</Stack.Screen>
        <Stack.Screen name="DietMode">{({ navigation }) => <DietModeScreen activeTab={activeTab} onTabPress={handleTabPress} onContinue={() => navigation.navigate("CookingGoal")} />}</Stack.Screen>
        <Stack.Screen name="CookingGoal">{({ navigation }) => <CookingGoalScreen onContinue={() => navigation.navigate("Mode")} />}</Stack.Screen>
        <Stack.Screen name="FoodCategory">{({ navigation }) => <FoodCategoryScreen onOpenTrending={() => navigation.navigate("Trending")} />}</Stack.Screen>
        <Stack.Screen name="Trending" component={TrendingScreen} />
        <Stack.Screen name="Search">{({ navigation }) => <SearchScreen onOpenVoice={() => navigation.navigate("Voice")} />}</Stack.Screen>
        <Stack.Screen name="Voice">{({ navigation }) => <VoiceScreen onClose={() => navigation.goBack()} />}</Stack.Screen>
        <Stack.Screen name="AISuggestion" component={AISuggestionScreen} />
        <Stack.Screen name="RecipeOverview">{({ navigation }) => <RecipeOverviewScreen onOpenIngredients={() => navigation.navigate("IngredientsList")} onOpenNutrition={() => navigation.navigate("NutritionValue")} onOpenReviews={() => navigation.navigate("Reviews")} onOpenShare={() => navigation.navigate("ShareRecipe")} onOpenSaved={() => navigation.navigate("SavedRecipes")} />}</Stack.Screen>
        <Stack.Screen name="IngredientsList" component={IngredientsListScreen} />
        <Stack.Screen name="NutritionValue" component={NutritionValueScreen} />
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
        <Stack.Screen name="ShareRecipe" component={ShareRecipeScreen} />
        <Stack.Screen name="SavedRecipes" component={SavedRecipesScreen} />
        <Stack.Screen name="IngredientInput">{({ navigation }) => <IngredientInputScreen onContinue={() => navigation.navigate("AISuggestList")} onOpenFilter={() => navigation.navigate("Filter")} onOpenCamera={() => navigation.navigate("CameraScan")} />}</Stack.Screen>
        <Stack.Screen name="Filter">{({ navigation }) => <FilterScreen onApply={() => navigation.goBack()} />}</Stack.Screen>
        <Stack.Screen name="CameraScan">{({ navigation }) => <CameraScanScreen onDetected={() => navigation.navigate("ScanResult")} onFail={() => navigation.navigate("ScanEmpty")} />}</Stack.Screen>
        <Stack.Screen name="ScanResult">{({ navigation }) => <ScanResultScreen onCreateRecipe={() => navigation.navigate("RecipeGenerating")} />}</Stack.Screen>
        <Stack.Screen name="RecipeGenerating">{({ navigation }) => <RecipeGeneratingScreen onDone={() => navigation.replace("AISuggestList")} />}</Stack.Screen>
        <Stack.Screen name="AISuggestList">{({ navigation }) => <AISuggestListScreen />}</Stack.Screen>
        <Stack.Screen name="ScanEmpty">{({ navigation }) => <ScanEmptyScreen activeTab={activeTab} onTabPress={handleTabPress} onRetry={() => navigation.navigate("CameraScan")} onManual={() => navigation.navigate("IngredientInput")} />}</Stack.Screen>

        <Stack.Screen name="Intro">{({ navigation }) => <ChefmateIntroScreen activeTab={activeTab} onTabPress={handleTabPress} onNext={() => navigation.navigate("Mode")} />}</Stack.Screen>
        <Stack.Screen name="Mode">{({ navigation }) => <PlannerModeScreen activeTab={activeTab} onTabPress={handleTabPress} onContinue={(modeId) => { setSelectedModeId(modeId); if (modeId === "auto") return navigation.navigate("AIPlanning"); if (modeId === "family") return navigation.navigate("FamilySetupEmpty"); navigation.navigate("Summary"); }} />}</Stack.Screen>
        <Stack.Screen name="AIPlanning">{({ navigation }) => <AIPlanningScreen onContinue={() => navigation.navigate("AIReadyMain")} />}</Stack.Screen>
        <Stack.Screen name="AIReadyMain">{({ navigation }) => <AIReadyMainScreen onApply={() => navigation.navigate("WeeklyApplied")} />}</Stack.Screen>
        <Stack.Screen name="Summary">{({ navigation }) => <PlannerSummaryScreen activeTab={activeTab} selectedModeId={selectedModeId} onTabPress={handleTabPress} onBack={() => navigation.goBack()} onFinish={() => navigation.navigate("Calendar")} />}</Stack.Screen>
        <Stack.Screen name="Calendar">{({ navigation }) => <MealPlanCalendarScreen activeTab={activeTab} onTabPress={handleTabPress} onOpenWeekly={() => navigation.navigate("Weekly")} />}</Stack.Screen>
        <Stack.Screen name="Weekly">{({ navigation }) => <WeeklyPlannerScreen activeTab={activeTab} onTabPress={handleTabPress} onOpenAddMeal={() => navigation.navigate("AddMeal")} />}</Stack.Screen>
        <Stack.Screen name="AddMeal">{({ navigation }) => <AddMealScreen activeTab={activeTab} onTabPress={handleTabPress} onApplyToDay={() => navigation.navigate("WeeklyApplied")} />}</Stack.Screen>
        <Stack.Screen name="WeeklyApplied">{({ navigation }) => <WeeklyAppliedScreen activeTab={activeTab} onTabPress={handleTabPress} onOpenAddMeal={() => navigation.navigate("AddMeal")} />}</Stack.Screen>

        <Stack.Screen name="FamilySetupEmpty">{({ navigation }) => <FamilySetupEmptyScreen activeTab={activeTab} onTabPress={handleTabPress} onAddMember={() => navigation.navigate("AddFamilyMember")} />}</Stack.Screen>
        <Stack.Screen name="AddFamilyMember">{({ navigation }) => <AddFamilyMemberScreen onSave={() => navigation.navigate("FamilySetupAdded")} />}</Stack.Screen>
        <Stack.Screen name="FamilySetupAdded">{({ navigation }) => <FamilySetupAddedScreen onAddMember={() => navigation.navigate("AddFamilyMember")} onContinue={() => navigation.navigate("FamilyNutritionDetail")} />}</Stack.Screen>
        <Stack.Screen name="FamilyNutritionDetail">{({ navigation }) => <FamilyNutritionDetailScreen onFinish={() => navigation.navigate("FamilyWeeklyPlan")} />}</Stack.Screen>
        <Stack.Screen name="FamilyWeeklyPlan">{({ navigation }) => <FamilyWeeklyPlanScreen activeTab={activeTab} onTabPress={handleTabPress} onOpenMenu={() => navigation.navigate("WeeklyMenu")} />}</Stack.Screen>
        <Stack.Screen name="WeeklyMenu" component={WeeklyMenuScreen} />
      </Stack.Navigator>

      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
