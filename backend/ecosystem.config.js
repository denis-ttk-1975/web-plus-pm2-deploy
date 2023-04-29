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
      name: "backend",
      script: "./dist/app.js",
    },
  ],
  deploy: {
    production: {
      user: "ddduuu1975",
      host: "84.201.165.117",
      ref: "origin/master",
      repo: "git@github.com:denis-ttk-1975/web-plus-pm2-deploy.git",
      path: "/home/ddduuu1975/web-plus-pm2-deploy/backend",
      "pre-deploy-local": `scp ./.env.deploy ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      "post-deploy":
        "touch METKA.FILE && cd backend && touch METKA1.FILE1 && npm i && npm run build && pm2 startOrRestart ecosystem.config.js",
    },
  },
};
