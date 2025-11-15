import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: "white",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    padding: 4,
  },
  searchControlGroup: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchFormText: {
    fontSize: 14,
    color: "#333",
  },
  searchControl: {
    padding: 0,
    margin: 0,
    fontSize: 12,
    color: "#666",
  },
  searchButton: {
    width: 40,
    height: 40,
    backgroundColor: "#FF385C",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 72,
  },
  filterContainer: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 30,
    padding: 8,
  },
  filterImage: {
    flex: 1,
    width: 30,
    height: 30,
  },
  filterText: {
    fontSize: 12,
    marginTop: 4,
    color: "#333",
  },
  listingContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  paginationContainer: {
    padding: 16,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#FF385C",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});