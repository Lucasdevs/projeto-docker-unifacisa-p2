# Projeto – Microsserviços com Docker + Kubernetes

Este projeto contém 2 microsserviços Node.js executando em um cluster Kubernetes.

## ✔ Tecnologias usadas
- Node.js + Express
- Docker
- Kubernetes (Deployments + Services)
- Docker Hub

---

## 🚀 Como rodar localmente

### Microservice A

cd microservice-a
docker build -t microservice-a .
docker run -p 3000:3000 microservice-a

### Microservice B

cd microservice-b
docker build -t microservice-b .
docker run -p 4000:4000 microservice-b


---

## 📦 Publicar no Docker Hub

docker tag microservice-a SEU_DOCKERHUB/microservice-a
docker push SEU_DOCKERHUB/microservice-a

docker tag microservice-a SEU_DOCKERHUB/microservice-b
docker push SEU_DOCKERHUB/microservice-b

---

## ☸ Deploy no Kubernetes

kubectl apply -f k8s/deployment-a.yaml
kubectl apply -f k8s/service-a.yaml
kubectl apply -f k8s/deployment-b.yaml
kubectl apply -f k8s/service-b.yaml