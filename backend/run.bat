cd ../../rabbit/manifests
kubectl delete -f ./
kubectl apply -f ./
cd auth/manifests
kubectl delete -f ./
kubectl apply -f ./
cd ../../gateway/manifests
kubectl delete -f ./
kubectl apply -f ./
cd ../../converter/manifests
kubectl delete -f ./
kubectl apply -f ./
cd ../../notification/manifests
kubectl delete -f ./
kubectl apply -f ./
kubectl scale deployment --replicas 1 converter gateway auth notification
cd ../..