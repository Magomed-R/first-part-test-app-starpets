# WEB APP

## Описание

Тестовый проект (первая часть) в компанию STARPETS. [ТЗ](https://docs.google.com/document/d/17Ao_opzaQ-mjYdUYeCcfBU6BU6NK4TTe)

## Запуск

Перед запуском создайте файл `.env` и настройте его как вам удобно (можно просто скопировать `.env.example`)

Запуск максимально простой. Есть 2 способа 

### Через docker (рекомендуется)

Если у вас Linux или MacOS, то просто выполните команду `make` в терминале. 

Если Windows - `docker compose up -d`

## Тестирование

Для нагрузочного тестирования я приготовил небольшой скрипт, который одновременно отправляет 10 000 запросов. 

Для запуска введите команду `npm run test`