import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CustomNavBar from "./Additions/CustomNavBar";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { firebase } from "../config";

const UserProfileScreen = ({ route, navigation }) => {
  const [userProfile, setUserProfile] = useState({
    email: "john.doe@example.com",
  });

  console.log("route params  : ", route.params);
  const [reservationHistory, setReservationHistory] = useState([]);
  const [showReservationHistory, setShowReservationHistory] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  const { reservationData } = route.params;
  useEffect(() => {
    // Fetch user data and reservation history
    fetchUserData();
    retrieveReservationHistory();

    // Check if reservationData is passed as a parameter and update state
    if (route.params && route.params.reservationData) {
      const newReservation = route.params.reservationData;
      // Add newReservation to your reservationHistory state or update it in your storage.
      setReservationHistory((prevHistory) => [...prevHistory, newReservation]);
    }
  }, [route.params]);

  const fetchUserData = () => {
    const userData = firebase.auth().currentUser;
    if (userData) {
      setUserProfile({
        name: userData.name,
        surname: userData.surname,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
      });
    }
  };

  const retrieveReservationHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("reservationData");
      console.log("history Data : ", history)
      if (history !== null) {
        const parsedHistory = JSON.parse(history);
        setReservationHistory(parsedHistory);
      }
    } catch (error) {
      console.error("Error retrieving reservation history: ", error);
    }
  };

  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Navigate to the login screen or another desired screen after logout
        navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  const toggleReservationHistory = () => {
    setShowReservationHistory(!showReservationHistory);
  };

  const handleReservationSelect = (reservation) => {
    setSelectedReservation(reservation);
  };

  const clearSelectedReservation = () => {
    setSelectedReservation(null);
  };

  return (
    <View style={styles.container}>
      <CustomNavBar
        navigation={navigation}
        title="Dine"
        showBackButton={false}
      />
      <Text style={styles.heading}>User Profile</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text>{userProfile.email}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={toggleReservationHistory}
      >
        <Text style={styles.buttonText}>
          {showReservationHistory
            ? "Hide Reservation History"
            : "Show Reservation History"}
        </Text>
      </TouchableOpacity>
      {showReservationHistory ? (
        <View>
          <Text style={styles.reservationHistoryHeading}>
            Reservation History
          </Text>
 
              <TouchableOpacity onPress={() => handleReservationSelect(item)}>
                <View style={styles.reservationItem}>
                <Text>Name : {reservationData.name}</Text>
                  <Text>{reservationData.restaurant.name}</Text>
                  <Text>Date: {reservationData.date.toDateString()}</Text>
                  <Text>Time: {reservationData.time.toLocaleTimeString()}</Text>
                </View>
              </TouchableOpacity>
     
        </View>
      ) : null}
      {selectedReservation && (
        <View>
          <Text style={styles.reservationDetailsHeading}>
            Reservation Details
          </Text>
          <Text>Restaurant: {reservationData.name}</Text>
          <Text>Date: {reservationData.date.toDateString()}</Text>
          <Text>Time: {reservationData.time.toLocaleTimeString()}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={clearSelectedReservation}
          >
            <Text style={styles.buttonText}>Back to History</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  profileInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
  },
  reservationHistoryHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
  },
  reservationItem: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    color: "red",
    marginBottom: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  reservationDetailsHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
  },
});

export default UserProfileScreen;
