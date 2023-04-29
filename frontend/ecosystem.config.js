module.exports = {
  apps: [
    {
      name: "web",
      script: "./build/index.html",
    },
  ],
  deploy: {
    production: {
      user: "ddduuu1975",
      host: "84.201.165.117",
      ref: "origin/master",
      repo: "git@github.com:denis-ttk-1975/web-plus-pm2-deploy.git",
      path: "/home/ddduuu1975/web-plus-pm2-deploy/frontend",
      "post-deploy": "cd frontend && npm i && npm run build",
    },
  },
};
