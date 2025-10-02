import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  StatusBar,
  Appearance,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ArrowEdge, Popover } from "expo-ios-popover";

const { width, height } = Dimensions.get("window");

interface Destination {
  id: string;
  name: string;
  image: string;
}

const TravelHomeScreen: React.FC = () => {
  useEffect(() => {
    Appearance.setColorScheme("dark");
  }, []);

  const destinations: Destination[] = [
    {
      id: "1",
      name: "France",
      image:
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    },
    {
      id: "2",
      name: "Italy",
      image:
        "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/03/18170044/venice.jpeg",
    },
    {
      id: "3",
      name: "England",
      image:
        "https://plus.unsplash.com/premium_photo-1661962726504-fa8f464a1bb8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW5nbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "4",
      name: "Greece",
      image:
        "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZWNlfGVufDB8fDB8fHww",
    },
  ];

  const recentPlaces = [
    {
      id: "1",
      title: "Barcelona",
      subtitle: "Spain",
      arrowEdge: ArrowEdge.Leading,
    },
    { id: "2", title: "Tokyo", subtitle: "Japan", arrowEdge: ArrowEdge.Bottom },
    { id: "3", title: "Dubai", subtitle: "UAE", arrowEdge: ArrowEdge.Top },
  ];

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="always"
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Travel</Text>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="rgba(255,255,255,0.4)" />
          <TextInput
            style={styles.searchInput}
            placeholder="Where to?"
            placeholderTextColor="rgba(255,255,255,0.4)"
          />
        </View>

        {/* Recently Viewed - Horizontal Scroll */}
        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recently Viewed</Text>
          <View style={styles.recentRow}>
            {recentPlaces.map((place) => (
              <View key={place.id} style={styles.recentCard}>
                <Popover
                  id={`recent-place-${place.id}`}
                  arrowEdge={place.arrowEdge}
                >
                  <Popover.Trigger>
                    <Pressable>
                      <Text style={styles.recentTitle}>{place.title}</Text>
                      <Text style={styles.recentSubtitle}>
                        {place.subtitle}
                      </Text>
                    </Pressable>
                  </Popover.Trigger>

                  <Popover.Content
                    style={{
                      width: 200,
                      padding: 16,
                      height: 200,
                      borderRadius: 12,
                      // backgroundColor: "#1c1c1e",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      gap: 8,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        marginTop: place.title === "Tokyo" ? 22 : 0,
                      }}
                    >
                      <Text style={{ fontSize: 24 }}>
                        {place.title === "Barcelona"
                          ? "🇪🇸"
                          : place.title === "Tokyo"
                          ? "🇯🇵"
                          : place.title === "Dubai"
                          ? "🇦🇪"
                          : "🌍"}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "700",
                          color: "#fff",
                        }}
                      >
                        {place.title}
                      </Text>
                    </View>

                    <Text
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 18,
                      }}
                    >
                      {place.title === "Barcelona" &&
                        "A vibrant city known for Gaudí’s architecture, beaches, and lively culture."}
                      {place.title === "Tokyo" &&
                        "Japan’s bustling capital, blending ultramodern skyscrapers with historic temples."}
                      {place.title === "Dubai" &&
                        "Famous for luxury shopping, modern architecture, and a lively nightlife scene."}
                    </Text>
                  </Popover.Content>
                </Popover>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Links */}
        <View style={styles.quickLinks}>
          <TouchableOpacity style={styles.linkButton}>
            <Ionicons name="airplane-outline" size={18} color="#fff" />
            <Text style={styles.linkText}>Flights</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkButton}>
            <Ionicons name="bed-outline" size={18} color="#fff" />
            <Text style={styles.linkText}>Hotels</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkButton}>
            <Ionicons name="car-outline" size={18} color="#fff" />
            <Text style={styles.linkText}>Cars</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkButton}>
            <Ionicons name="restaurant-outline" size={18} color="#fff" />
            <Text style={styles.linkText}>Food</Text>
          </TouchableOpacity>
        </View>

        {/* Special Offer Card */}
        <TouchableOpacity style={styles.offerCard} activeOpacity={0.8}>
          <Popover id="free-bird-offer" arrowEdge="bottom">
            <Popover.Trigger>
              <View style={styles.offerContent}>
                <View>
                  <Text style={styles.offerLabel}>Limited Time</Text>
                  <Text style={styles.offerTitle}>Early Bird Special</Text>
                  <Text style={styles.offerDescription}>
                    Save up to 30% on select destinations
                  </Text>
                </View>
                <Ionicons name="arrow-forward" size={20} color="#000" />
              </View>
            </Popover.Trigger>
            <Popover.Content
              style={{
                width: 320,
                padding: 20,
                height: 150,
                borderRadius: 16,
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
              >
                {/* Icon (can replace with expo-symbols for SF Symbol) */}
                <Ionicons name="airplane" size={28} color="#4cd964" />
                <View>
                  <Text
                    style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}
                  >
                    Freebird Sale
                  </Text>
                  <Text
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}
                  >
                    Exclusive travel discounts
                  </Text>
                </View>
              </View>

              {/* Body Text */}
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 20,
                  color: "#e5e5e7",
                  marginTop: 16,
                }}
              >
                For a limited time, save up to{" "}
                <Text style={{ fontWeight: "700", color: "#4cd964" }}>50%</Text>{" "}
                on flights with Freebird. Book your getaway now and enjoy more
                for less.
              </Text>
            </Popover.Content>
          </Popover>
        </TouchableOpacity>

        {/* Destinations Grid */}
        <View style={styles.exploreSection}>
          <Text style={styles.sectionTitle}>Explore Destinations</Text>
          <View style={styles.destinationsGrid}>
            {destinations.map((destination) => (
              <TouchableOpacity
                key={destination.id}
                style={styles.destinationCard}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: destination.image }}
                  style={styles.destinationImage}
                />
                <View style={styles.destinationOverlay} />
                <Text style={styles.destinationName}>{destination.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bottom Tab Indicators */}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 8,
  },
  logo: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: -0.5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: "#fff",
  },
  recentSection: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 12,
  },
  recentRow: {
    flexDirection: "row",
    gap: 10,
  },
  recentCard: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  recentTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 2,
  },
  recentSubtitle: {
    fontSize: 11,
    color: "rgba(255,255,255,0.5)",
  },
  quickLinks: {
    flexDirection: "row",
    paddingHorizontal: 24,
    gap: 8,
    marginBottom: 16,
  },
  linkButton: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  linkText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "500",
  },
  offerCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 18,

    marginHorizontal: 24,
    marginBottom: 20,
  },
  offerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  offerLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(0,0,0,0.5)",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginBottom: 2,
  },
  offerDescription: {
    fontSize: 13,
    color: "rgba(0,0,0,0.7)",
  },
  exploreSection: {
    flex: 1,
    paddingHorizontal: 24,
  },
  destinationsGrid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  destinationCard: {
    width: width - 48 - 10,
    height: (height - 480) / 1,
    borderRadius: 14,
    overflow: "hidden",
    minHeight: 120,
    maxHeight: 160,
  },
  destinationImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  destinationOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  destinationName: {
    position: "absolute",
    bottom: 12,
    left: 12,
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  bottomTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.08)",
    backgroundColor: "rgba(0,0,0,0.95)",
  },
  tabItem: {
    padding: 8,
  },
});

export default TravelHomeScreen;
