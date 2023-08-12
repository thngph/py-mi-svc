cd ../../rabbit/manifests
kubectl delete -f ./
cd auth/manifests
kubectl delete -f ./
cd ../../gateway/manifests
kubectl delete -f ./
cd ../../converter/manifests
kubectl delete -f ./
cd ../../notification/manifests
kubectl delete -f ./
cd ../..