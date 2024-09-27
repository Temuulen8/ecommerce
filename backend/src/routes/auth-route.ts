import { Router } from "express";
import { currentUser, login, signup } from "../controllers/auth-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/current-user").post(authentication, currentUser);
router.route("/forget-password").post();
router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;
