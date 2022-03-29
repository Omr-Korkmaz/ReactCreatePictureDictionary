import React, { useState } from "react";
import './CreateWord.css';

const CreateWord = ({ addword }) => {
  const [word, setword] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );

  const submit = (event) => {
    event.preventDefault();
    if (!word) {
      alert("Please enter Title of the Photo");
    } else {
      addword(word, content, image);
      setword("");
      setContent("");
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      );
    }
  };

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // const { profileImg} = this.state
  return (
    <section>
      <article className="word-create">
        <form className="word-create__form">
          <div className="photo-container">
            <div className="img-holder">
              <img
                src={image}
                alt=""
                id="img"
                className="img"
                width={200}
                height={200}
              />
            </div>
            <input
              className="photo--choose"
              type="file"
              accept="image/*"
              name="image-upload"
              id="input"
              onChange={imageHandler}
            />
          </div>
          <h2 className="word-create__header">
            {" "}
            Save your Favourite Words with Picture{" "}
          </h2>
          <input
            className="word-create__title"
            name="title"
            placeholder="Title"
            value={word}
            onChange={(e) => {
              setword(e.target.value);
            }}
          />
          <textarea
            rows={2}
            className="word-create__note"
            name="content"
            placeholder="use it in sentence..."
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button
            className="word-create__button"
            onClick={submit}
          >
            Add
          </button>
        </form>
      </article>
    </section>
  );
};
export default CreateWord;
