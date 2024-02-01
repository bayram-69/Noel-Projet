const express = require("express");

const router = express.Router();

const categoryRouters = require("./routers/CategoryRouters");
const manufacturerRouters = require("./routers/ManufacturerRouters");
const productRouters = require("./routers/ProductRouters");
const authRouter = require("./routers/AuthRouters");
const userRouter = require("./routers/UserRouters");
const contactRouters = require("./routers/ContactRouters");
const roleRouters = require("./routers/RoleRouters");

router.use("/category", categoryRouters);
router.use("/manufacturer", manufacturerRouters);
router.use("/product", productRouters);
router.use("/login", authRouter);
router.use("/user", userRouter);
router.use("/contact", contactRouters);
router.use("/role", roleRouters);

module.exports = router;
