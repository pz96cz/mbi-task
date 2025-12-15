# mbi-task
MBI hiring task

#How to generate types from proto definitions
yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto/ ../proto/**/*.proto
