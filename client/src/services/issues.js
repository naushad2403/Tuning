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

  export const likeIssues = async (body) => {
    try {
      const response = await axios.post(`${END_POINTS.likeIssues}`, body);
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

  export const dislikeIssues = async (body) => {
    try {
      const response = await axios.post(`${END_POINTS.dislikeIssues}`, body);
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

  export const updateIssues = async (body) => {
    try {
      const response = await axios.post(`${END_POINTS.updateIssues}`, body);
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
  
  
  export const deleteIssues = async (body) => {
    try {
      const response = await axios.post(`${END_POINTS.deleteIssues}`, body);
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

  export const addReason = async (body) => {
    try {
      const response = await axios.post(`${END_POINTS.addReason}`, body);
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

  export const likeReason = async (body) => {
    try {
      const response = await axios.post(`${END_POINTS.likeReason}`, body);
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

  export const dislikeReason = async (body) => {
    try {
      const response = await axios.post(`${END_POINTS.dislikeReason}`, body);
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

  export const deleteReason = async (body) => {
    try {
      const response = await axios.post(`${END_POINTS.deleteReason}`, body);
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