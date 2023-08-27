import axios from "axios";
import { END_POINTS } from "./domain";
export const createIssues = async (body) => {
    try {
      const response = await axios.post(`${END_POINTS.createIssues}`, body);
      if (response?.data) {
        return {
          data: response.data,
          error: false,
        };
      }
    } catch (e) {
      return {
        error: true,
        data: e,
      };
    }
  };
  