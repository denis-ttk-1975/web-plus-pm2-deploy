require("dotenv").config({ path: ".env.deploy" });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REF = "origin/master",
  DEPLOY_REPO,
} = process.env;

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
      "pre-deploy-local": `scp ./.env.deploy ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,

      "post-deploy": "cd frontend && npm i && npm run build",
    },
  },
};
