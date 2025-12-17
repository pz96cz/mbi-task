# How to run gRPC client

1. If you do any change in proto/user.proto you have to regenerate the typescript definitions. If so, first delete the
   content of proto folder in the mbi-client folder and run following command
   - yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto/ ../proto/**/*.proto
2. Make sure the database is running (check readme file in mbi-db).
3. Run yarn
4. Run yarn start
