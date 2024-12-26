# Sprint 8

Решение задания восьмого спринта.

## Запуск
Сборка и запуск проекта
```
$ docker compose up -d
```

Запуск может занять некоторое время. К тестированию можно приступать, когда запустятся все контейнеры. В терминале это должно выглядеть примерно так:
```
 ✔ Network ya-sprint-08_default           Created  0.1s 
 ✔ Container ya-sprint-08-frontend-1      Started  2.6s 
 ✔ Container ya-sprint-08-keycloak_db-1   Started  2.6s 
 ✔ Container ya-sprint-08-keycloak-1      Healthy  45.2s 
 ✔ Container ya-sprint-08-backend-1       Started  45.2s
```
## Основные ссылки
| Application | Link | Comment |
|-|-|-|
| Keycloak Server | http://localhost:8080 | |
| Frontend App | http://localhost:3000 | |
| Backend App (сервис отчетов) | http://localhost:8000 | Имеет только один endpoint **/reports**, который доступен только авторизованным пользователям |