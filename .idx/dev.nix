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
        npm-install = "npm ci --no-audit --prefer-offline --no-progress --timing";
      };
      onStart= {
        run-server = "npm run dev";
      };
    };
  };
}