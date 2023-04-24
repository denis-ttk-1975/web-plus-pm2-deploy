module.exports = {
  apps: [
    {
      name: "api",
      script: "./dist/app.js",
    },
  ],
  deploy: {
    production: {
      user: "ddduuu1975",
      host: "84.201.165.117",
      ref: "origin/master",
      repo: "git@github.com:denis-ttk-1975/web-plus-pm2-deploy.git",
      path: "/home/ddduuu1975/web-plus-pm2-deploy",
      "post-deploy":
        "cd /home/ddduuu1975/web-plus-pm2-deploy/backend/ && npm i && npm run build",
    },
  },
};
