import { Router } from "express";
import $axios from "../axiosConfig.js";

const router = Router();

router.get("/getComicsBy", async (req = Request, resp = Response) => {
  if (!req.params.type) {
    return resp.status(403).json({
      status_code: 403,
      error: "Bad Request",
      message: "Hace falta el parametro (type).",
    });
  }
  try {
    const { data } = await $axios.get("/characters");
    return resp.status(200).json({
      ...data,
    });
  } catch (error) {
    throw error;
  }
});

export default router;
