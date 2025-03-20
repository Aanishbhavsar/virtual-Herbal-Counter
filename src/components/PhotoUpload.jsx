import React, { useState } from "react";
import "./PhotoUpload.css";

const PhotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select an image!");
      return;
    }

    console.log("Uploaded Image:", selectedFile);
    console.log("Description:", description);
    alert("Photo and text uploaded successfully!");

    // Reset the form
    setSelectedFile(null);
    setPreviewURL(null);
    setDescription("");
  };

  return (
    <div className="upload-container">
      <h2>Upload Your Herbal Garden Photo 🌿</h2>

      <form onSubmit={handleSubmit} className="upload-form">
        {/* Image Upload */}
        <input type="file" accept="image/*" onChange={handleFileChange} />
        
        {/* Image Preview */}
        {previewURL && <img src={previewURL} alt="Preview" className="preview-image" />}

        {/* Text Input */}
        <textarea
          placeholder="Describe your plant..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        {/* Submit Button */}
        <button type="submit" className="upload-button">Upload</button>
      </form>
    </div>
  );
};

export default PhotoUpload;
