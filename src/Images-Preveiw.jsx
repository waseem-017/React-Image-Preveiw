import React, { useState } from "react";

export const ImagesPreveiw = () => {
  const [imgfile, uploadimg] = useState([]);
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg((imgfile) => [
        ...imgfile,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };
  console.log("Image FIles", imgfile[0]);
  return (
    <div className="App">
      <div>
        <center>
          <h2>Upload</h2>
          <input type="file" onChange={imgFilehandler} />
          <hr />
          <h2>Preview</h2>
          {imgfile.map((elem) => {
            return (
              <>
                <span key={elem}>
                  <img src={elem} height="200" width="200" alt="med1" />
                </span>
              </>
            );
          })}
        </center>
      </div>
    </div>
  );
};
