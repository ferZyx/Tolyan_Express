import {Router} from "express"
import {authRouter} from "./routers/authRouter.js";
import {logsRouter} from "./routers/logsRouter.js";
import {scheduleRouter} from "./routers/scheduleRouter.js";
import {errorRouter} from "./routers/errorRouter.js";
import {teacherRouter} from "./routers/teacherRouter.js";
import {teacherScheduleRouter} from "./routers/teacherScheduleRouter.js";
import {groupRouter} from "./routers/groupRouter.js";
import {usersRouter} from "./routers/usersRouter.js";
import {converterRouter} from "./routers/converterRouter.js";
import {browserRouter} from "./routers/browserRouter.js";

const router = new Router()

router.use("/auth", authRouter)
router.use("/logs", logsRouter)
router.use("/schedule", scheduleRouter)
router.use("/error", errorRouter)
router.use("/teacher", teacherRouter)
router.use("/teacherSchedule", teacherScheduleRouter)
router.use("/groups", groupRouter)
router.use("/users", usersRouter)
router.use("/converter", converterRouter)
router.use("/browser", browserRouter)

export default router