# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  env = {};
  idx = {
    # https://open-vsx.org/ "publisher.id"
    extensions = [
      "rangav.vscode-thunder-client"
      "k--kato.intellij-idea-keybindings"
      "christian-kohler.npm-intellisense"
      "dbaeumer.vscode-eslint"
      "MariachiBear.vsc-ep-essentials"
    ];
    workspace = {
      onCreate = {
        npm-bot-install = "cd bot && npm ci --no-audit --prefer-offline --no-progress --timing";
        npm-frontend-install = "cd frontend && npm ci --no-audit --prefer-offline --no-progress --timing";
        npm-backend-install = "cd backend && npm ci --no-audit --prefer-offline --no-progress --timing";
      };
      onStart= {
        bot-run = "cd bot && npm ci && npm run dev";
        npm-frontend-run = "cd frontend && npm ci && npm run dev";
        npm-backend-run = "cd backend && npm ci && npm run dev";
      };
    };
  };
}