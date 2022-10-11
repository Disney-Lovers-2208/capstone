import axios from "axios";

const GET_FRIENDS_STARS = "GET_FRIENDS_STARS";

const _getFriendsStars = (starRatings) => ({
  type: GET_FRIENDS_STARS,
  starRatings,
});

export const getFriendsStars = () => {
  return async (dispatch) => {
    try {
      const { data: starRatings } = await axios.get("/api/starRatings");
    } catch (error) {
      console.log(error);
    }
  };
};
