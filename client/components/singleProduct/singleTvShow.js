import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Button, Col, Card, Row } from "react-bootstrap";
import { fetchSingleTv } from "../../store/tv";
import { Rating } from "react-simple-star-rating";
import { fetchUserTv, fetchUpdateUserTv } from "../../store/userTv";
import { fetchCreateUserTv } from "../../store/userTvShows";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ReviewForm from "./ReviewForm";
import SelectDropDown from "./SelectDropDown";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const SingleTvShow = () => {
  const auth = useSelector((state) => state.auth);
  const tv = useSelector((state) => state.tv);
  const { imageUrl, title, description, genre, starRating } = tv;
  const userTv = useSelector((state) => state.userTv);
  const posts = tv.posts || [];
  const dispatch = useDispatch();
  const { id } = useParams();
  let favorite = userTv ? userTv.favorite : null;
  let featured = userTv ? userTv.featured : null;
  let status = userTv ? userTv.status : null;

  useEffect(() => {
    dispatch(fetchUserTv({ userId: auth.id, tvId: id }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSingleTv(id));
  }, [dispatch]);

  //update status tv
  const selectOptions = ["Status", "Saved", "Watched"];
  const [selected, setSelected] = useState(selectOptions[0]);

  //update featured tvs
  const handleFeaturedClick = (evt) => {
    evt.preventDefault();
    if (userTv) {
      featured === true ? (featured = false) : (featured = true);
      dispatch(fetchUpdateUserTv({ userId: auth.id, tvkId: id, featured }));
    } else {
      featured = true;
      dispatch(fetchCreateUserTv({ userId: auth.id, tvId: id, featured }));
    }
    window.location.reload(false);
  };

  //update favorite tv
  const favoriteTv = auth.tvs.filter((tv) => tv.user_tv.favorite === true)[0];

  const handleFavoriteClick = (evt) => {
    evt.preventDefault();
    if (userTv) {
      if (favorite) {
        favorite = false;
        dispatch(fetchUpdateUserTv({ userId: auth.id, tvId: id, favorite }));
      } else {
        let text = `You already have a tv show!\nBy clicking OK you will change your favorite tv to ${title} permanently`;
        if (favoriteTv) {
          console.log(favoriteTv);
          if (confirm(text) == true) {
            text = "You pressed OK!";
            favorite = false;
            dispatch(
              fetchUpdateUserTv({
                userId: auth.id,
                tvId: favoriteTv.id,
                favorite,
              })
            );
            favorite = true;
            dispatch(
              fetchUpdateUserTv({ userId: auth.id, tvId: id, favorite })
            );
          } else {
            text = "You canceled!";
          }
        } else {
          favorite = true;
          dispatch(fetchUpdateUserTv({ userId: auth.id, tvId: id, favorite }));
        }
      }
    } else {
      if (favorite) {
        favorite = false;
        dispatch(fetchUpdateUserTv({ userId: auth.id, tvId: id, favorite }));
      } else {
        let text = `You already have a tv show!\nBy clicking OK you will change your favorite tv to ${title} permanently`;
        if (favoriteTv) {
          if (confirm(text) == true) {
            text = "You pressed OK!";
            favorite = false;
            dispatch(
              fetchUpdateUserTv({
                userId: auth.id,
                tvId: favoriteTv.id,
                favorite,
              })
            );
            favorite = true;
            dispatch(
              fetchCreateUserTv({ userId: auth.id, tvId: id, favorite })
            );
          } else {
            text = "You canceled!";
          }
        } else {
          favorite = true;
          dispatch(fetchCreateUserTv({ userId: auth.id, tvId: id, favorite }));
        }
      }
    }
    window.location.reload(false);
  };

  return (
    <div className="single-view">
      <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt="book-image" style={{ width: "15rem" }} />
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>
          <Rating
            readonly={true}
            initialValue={starRating}
            allowFraction={true}
            fillColor="#f1a545"
          />
        </p>
      </div>

      <br />

      <div className="reviews">
        <p>Reviews:</p>
        <Card
          border="info"
          style={{ width: "15rem", backgroundColor: "#FF5454" }}
        >
          {posts.map((post) => (
            <Row key={post.tvId}>
              <p>{post.content}</p>
              <p>{timeAgo.format(new Date(post.updatedAt))}</p>
            </Row>
          ))}
        </Card>
      </div>
      <br />

      <Row xs={3}>
        <Col>
          <Button variant="dark" onClick={handleFavoriteClick}>
            {favorite === true ? (
              <> Remove as Favorite </>
            ) : (
              <>
                <FaHeart />
                Make Favorite
              </>
            )}
          </Button>
          <SelectDropDown
            status={status}
            selectOptions={selectOptions}
            selected={selected}
            auth={auth}
            id={id}
          />
          <Button variant="success" onClick={handleFeaturedClick}>
            {featured === true ? (
              <>Remove from Featured </>
            ) : (
              <> Add to Featured </>
            )}
          </Button>

          <ReviewForm product={tv.productType} />
        </Col>
      </Row>
    </div>
  );
};

export default SingleTvShow;
