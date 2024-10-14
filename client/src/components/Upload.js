import React, { useState } from 'react';
import { uploadVideo } from '../services/uploadService';

function Upload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await uploadVideo(file);
      setResult(response.ppeData); // This will be the streamlined PPE result
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
      {result && <div>{JSON.stringify(result)}</div>}
    </div>
  );
}

export default Upload;
//upload 
