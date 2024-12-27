import { Router } from "express";
import $axios from "../axiosConfig.js";

const router = Router();

router.get("/getComics", async (req = Request, resp = Response) => {
  try {
    const { data } = await $axios.get(`/issues`);
    return resp.status(200).json({
      ...data,
    });
  } catch (error) {
    throw error;
  }
});

router.get("/getComicById", async (req = Request, resp = Response) => {
  try {
    if (!req.query.id) {
      return resp.status(403).json({
        status_code: 403,
        error: "Bad Request",
        message: "Hace falta el parametro (id).",
      });
    }
    const { data } = await $axios.get(`/issues?&filter=id:${req.query.id}`);
    return resp.status(200).json({
      ...data,
      results: data.results[0],
    });
  } catch (error) {
    throw error;
  }
});

export default router;
