#MVC with expressJS by Ghost

Ceci est un template de MVC realise avec nodejs supportant un service worker

Install all dependencies with : 
```shell
    npm install
```
To run the project you need to to install global sass : 
```shell
    npm install -g sass
```

Generate SSL with : 
```shell
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```