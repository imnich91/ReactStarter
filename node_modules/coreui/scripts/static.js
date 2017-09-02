require('shelljs/global');
if (exec('kotatsu build client -o cards/public/build --minify ' + env.npm_package_kotatsu_config).code !== 0) {
  echo('Error: kotatsu build failed');
  exit(1);
}
