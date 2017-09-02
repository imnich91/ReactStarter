require('shelljs/global');
if (exec('kotatsu serve --progress ' + env.npm_package_kotatsu_config).code !== 0) {
  echo('Error: kotatsu serve failed');
  exit(1);
}
