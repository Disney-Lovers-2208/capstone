import React from "react";
import { useDispatch, useSElector } from "react-redux";
import { Container, InputGroup, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { fetchCreateBook } from "../../store/books";
import { fetchCreateMovie } from "../../store/movies";
import { fetchCreateTv } from "../../store/tvshows";
const AddProduct = () => {
  const [selectedOption, setSelectedOption] = useState("book");
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const title = evt.target.title.value;
    const description = evt.target.description.value;
    const genrePreSplit = evt.target.genre.value;
    const genre = genrePreSplit.split(",");
    const imageUrl = evt.target.image.value;

    if (selectedOption === "book") {
      const author = evt.target.author.value;
      dispatch(
        fetchCreateBook({ title, author, description, genre, imageUrl })
      );
    }
    if (selectedOption === "movie") {
      dispatch(fetchCreateMovie({ title, description, genre, imageUrl }));
    }
    if (selectedOption === "tv") {
      dispatch(fetchCreateTv({ title, description, genre, imageUrl }));
    }
  };

  return (
    <div>
      {count ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <Container className="add-product-form">
          <select
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          >
            <option value="book">Book</option>
            <option value="movie">Movie</option>
            <option value="tv">Tv Show</option>
          </select>

          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title"></label>
              <input name="title" placeholder="title" type="text" />
            </div>
            {selectedOption === "book" ? (
              <div>
                <label htmlFor="author"></label>
                <input name="author" placeholder="Author" type="text" />
              </div>
            ) : null}
            <div>
              <label htmlFor="description"></label>
              <input name="description" placeholder="description" type="text" />
            </div>
            <div>
              <label htmlFor="genre"></label>
              <input name="genre" placeholder="Genres" type="text" />
            </div>
            <div>
              <label htmlFor="image"></label>
              <input name="image" placeholder="Cover Image" type="text" />
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </div>
  );
};

export default AddProduct;
