import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer ")) {
    token = token.split(" ")[1];
  } else {
    token = req.cookies?.accessToken;
  }

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "You're not authorized (No token)" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid token" });
    }

    req.user = user;
    next();
  });
};


export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (
      !req.params.id ||
      req.user.id === req.params.id ||
      req.user.role === "admin"
    ) {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You're not authenticated" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You're not authorize (Admin only)" });
    }
  });
};
