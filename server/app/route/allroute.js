import {Router} from "express";
import { deletecontroller, getcontroller, postcontroller, updatecontroller } from "../controler/allcontroler.js";
export const allroute=Router();

allroute.post("/post",postcontroller)
allroute.get("/get",getcontroller)
allroute.delete("/del/:id",deletecontroller)
allroute.put("/u/:id",updatecontroller)
