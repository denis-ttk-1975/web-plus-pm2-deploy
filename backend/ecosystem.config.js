module.exports = {
  apps: [
    {
      name: "backend",
      script: "./dist/app.js",
    },
  ],
  deploy: {
    production: {
      user: "ddduuu1975",
      host: "84.201.165.117",
      ref: "origin/master",
      repo: "https://github.com/denis-ttk-1975/web-plus-pm2-deploy",
      path: "/home/ddduuu1975/web-plus-pm2-deploy",
      "post-deploy":
        "cd backend && npm i && npm run build && pm2 startOrRestart ecosystem.config.js --env production",
    },
  },
};
