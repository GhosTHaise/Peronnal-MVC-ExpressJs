<h2>MVC with expressJS by <span>Ghost 👻<span></h2>

Ceci est un template de MVC realise avec nodejs supportant un service worker

> Install all dependencies with : 
```shell
    ./Initialization.sh
```
Or if you will use this for only build api , run : 
```shell
    ./InitializationOnlyApi.sh
```

> To work with HTTPS
Generate SSL with : 
```shell
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```
or genarate it manually with : 
#The above commands will generate a private key and request a simple passphrase for the key
#Step 1: Generate a CA certificate
```shell
openssl genrsa -out CA.key -des3 2048
```
```shell
openssl req -x509 -sha256 -new -nodes -days 3650 -key CA.key -out CA.pem
```
#Step 2: Generating a certificate
```shell
mkdir localhost
cd localhost
touch localhost.ext
```
You need to write these informations into the Signed SSl certificate ,be contained in this localhost.ext
```
authorityKeyIdentifier = keyid,issuer
basicConstraints = CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost
IP.1 = 127.0.0.1
```
Generate a CSR(Certificate Signing Request)
```shell
openssl genrsa -out localhost.key -des3 2048
```
```shell
openssl req -new -key localhost.key -out localhost.csr
```
Request CA(Certificate Authority) to sign the certificate
```shell
openssl x509 -req -in localhost.csr -CA ../CA.pem -CAkey ../CA.key -CAcreateserial -days 3650 -sha256 -extfile localhost.ext -out localhost.crt
```
The server will need the localhost.crt certificate file, and the decrypted key since our localhost.key is in encrypted form.

We will need to decrypt the localhost.key and store that file too as below:
```shell
openssl rsa -in localhost.key -out localhost.decrypted.key
```
For more details ,visit this url : https://www.section.io/engineering-education/how-to-get-ssl-https-for-localhost/