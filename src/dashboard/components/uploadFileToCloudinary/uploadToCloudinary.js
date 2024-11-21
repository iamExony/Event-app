import imageCompression from 'browser-image-compression';

export const uploadFileOnCloudinary = async (file) => {
  const URL = import.meta.env.VITE_REACT_APP_CLOUDINARY_URL || '';
  const uploadPreset = import.meta.env.VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET || 'event-testing';
  
  if (!file) return;

  try {
    // Compress the image before uploading
    const compressedFile = await imageCompression(file, {
      maxSizeMB: 1,          // Maximum file size in MB
      maxWidthOrHeight: 800, // Maximum width or height in pixels
      useWebWorker: true,    // Use Web Workers for the conversion
      fileType: 'image/webp' // Output file type (you can choose this or leave it as the original file type)
    });

    // Create FormData and append the compressed file
    const data = new FormData();
    data.append('file', compressedFile);
    data.append('upload_preset', uploadPreset);

    // Upload the compressed file to Cloudinary
    const response = await fetch(URL, {
      method: 'POST',
      body: data,
    }).then(r => r.json());

    return { success: true, dataReturned: response };
  } catch (error) {
    return { success: false, error: error };
  }
};
