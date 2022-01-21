import React from "react";
import "./../CreateAddChapter/Chapter.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Chapter () {
    return (
        <>
        <div className="chapter-bg"   style={{position: "relative", top: "90px"}}>
        <div className="chapter-add-div">
        <h2 style={{textAlign: "center", color: "#640000"}}>    Novel Chapter Title </h2>
        <CKEditor
          editor={ClassicEditor}
          data="<p>    </p>"
          onReady={(editor) => {
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>

      <div className="chapter-button-div">
          <button className="publish-btn"> Publish  </button>
      </div>
      
        </div>
        </>
    );
  }
export default Chapter;

