import axios from "axios";

export default axios.create({
  baseURL: "https://api.twitter.com/2.0/search?q=nasa&result_type=popular",
});
