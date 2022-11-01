#/bin/bash
set -eu
echo "Thanks for using my app 👻"

rm -r app/views
rm -r tailwind.config.js
npm install
npm install sass
npm run start