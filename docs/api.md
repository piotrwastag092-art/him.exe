# API Documentation

## Endpoints

### `POST /cuddle`
Uruchamia protokół przytulania.
Wymagane parametry: otwarte ramiona.

### `GET /compliment`
Zwraca losowy komplement.
Nie wymaga autoryzacji (działa zawsze).

### `POST /kiss`
Wysyła buziaka.
Rate limit: nie istnieje.

### `GET /status`
Zawsze zwraca:
```json
{
  "inLoveWith": "Tobą",
  "level": "critical"
}
