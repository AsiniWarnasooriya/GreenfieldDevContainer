FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bookworm

WORKDIR /workspace

COPY package*.json ./

RUN npm install

COPY . .

CMD ["bash"]