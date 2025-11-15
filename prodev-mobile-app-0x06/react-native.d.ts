// Fix for React 19 + React Native JSX compatibility
declare global {
  namespace JSX {
    interface IntrinsicElements {
      View: any;
      Text: any;
      Image: any;
      ScrollView: any;
      FlatList: any;
      SectionList: any;
      Pressable: any;
      Button: any;
      Switch: any;
      Picker: any;
      TextInput: any;
      ActivityIndicator: any;
      ProgressBar: any;
      Modal: any;
    }
  }
}

export {};
