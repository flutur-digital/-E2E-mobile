export const config = {
  API_URL: 'https://easy2eat.co/api/'
  // API_URL: 'http://127.0.0.1:8000/api/'
}

export const imagePickerOptions = {
  mediaType: "photo",
  selectionLimit: 1,
  maxWidth: 512,
  maxHeight: 512,
  includeBase64: false,
  allowsEditing: true,
  aspect: [4, 3],
  quality: 1
};

export const videoPickerOptions = {
  mediaType: "video",
  selectionLimit: 1,
  includeBase64: false,
  videoQuality: "high"
};

export const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};
