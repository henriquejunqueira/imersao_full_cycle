# Usar uma imagem base do Go
FROM golang:1.20-alpine

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# # Copiar os arquivos do projeto para o diretório de trabalho
# COPY . .

# # Baixar as dependências do Go (caso haja algum arquivo go.mod/go.sum)
# RUN go mod tidy

# # Compilar o código Go (gera o binário "myapp" a partir do main.go)
# RUN go build -o myapp .

# Copiar apenas os arquivos necessários primeiro
COPY go.mod ./
RUN go mod tidy

# Copiar o código e construir o binário
COPY main.go ./
RUN go build -o /app/myapp .

# Criar um usuário não privilegiado
# RUN adduser \
#     --disabled-password \
#     --gecos "" \
#     --home "/nonexistent" \
#     --shell "/sbin/nologin" \
#     --no-create-home \
#     --uid "1000" \
#     appuser

# # Trocar para o usuário não privilegiado
# USER appuser

# Expor a porta que o servidor vai rodar
EXPOSE 8080

# Comando para rodar o binário
CMD ["/app/myapp"]
