## USER
### REGISTER
```
POST /users/register
Host: localhost:5555
Content-Type: application/json
Content-Length: 117

{
    "email": "email@email.com",
    "username": "username",
    "password": "password",
}
```

### LOGIN
```
POST /users/login
Host: localhost:5555
Content-Type: application/json
Content-Length: 76

{
    "username": "username",
    "password": "password"
}
```

## BOARD
### ALL
```
GET /boards
Host: localhost:5555
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODMxMWI3OGM1MzUyNjRiMTdjZjdjYiIsImVtYWlsIjoiS2V5c2hhd245QHlhaG9vLmNvbSIsInVzZXJuYW1lIjoiaGFsIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNjcyMTI2NDYzLCJpYXQiOjE2Njk1MzQ0NjN9.mEFym8Iu6rlytMmaICREUT2TZlriT3LAFxHKSr71U34
```
### ADMIN
```
GET /boards/admin/
Host: localhost:5555
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODMxMWI3OGM1MzUyNjRiMTdjZjdjYiIsImVtYWlsIjoiS2V5c2hhd245QHlhaG9vLmNvbSIsInVzZXJuYW1lIjoiaGFsIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNjcyMTI2NDYzLCJpYXQiOjE2Njk1MzQ0NjN9.mEFym8Iu6rlytMmaICREUT2TZlriT3LAFxHKSr71U34
```
### USER
```
GET /boards/user
Host: localhost:5555
```

## PARTNER
### GET
```
GET /partner
Host: localhost:5555
```
### GET BY ID
```
GET /partners/:id
Host: localhost:5555
```
### CREATE
```
POST /partners/add-partner
Host: localhost:5555
x-app-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZTA0OWZmY2FjZmRhNGQ2MjE5ZDQ3YjQwYjIxNDIyYmFhODFlNTQ5ZjllM2IwOWIzNTMwNTBkMmRlMzZiZjExYjVlYzlkNmYxMWMwYTgwNzEyZTM2NDRlMzE4NzQ5MDg0MzIwNWNjMTk5NGVkZjhlZDYxOWQxNjc0NmI4ZTJlZDZlMDBjYjNiNjYzNTlkYWNjNTk3ZGM2MDBjZjA3ZTg4YzBiMGI3MmJiZjg5NWFkZWQ0MDY5NTQ2MTgzMzJmZWEzIiwiaWF0IjoxNjY5NzkzOTg1LCJleHAiOjE2Njk4ODAzODV9._CZbsdz7iEvOmJnmtITy1IDbXXl-DCsmTrWBc_Q0gDk
Content-Type: application/json
Content-Length: 239

{
    "nama": "nama",
    "rate": "rate",
    "overview": "overview",
    "pengalaman": "pengalaman",
    "pendidikan1": "pendidikan1",
    "pendidikan2": "pendidikan2",
    "contact": "contact",
    "img": "img"
}
```
### UPDATE
```
PUT /partners/edit-partner/:id
Host: localhost:5555
x-app-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZTA0OWZmY2FjZmRhNGQ2MjE5ZDQ3YjQwYjIxNDIyYmFhODFlNTQ5ZjllM2IwOWIzNTMwNTBkMmRlMzZiZjExYjVlYzlkNmYxMWMwYTgwNzEyZTM2NDRlMzE4NzQ5MDg0MzIwNWNjMTk5NGVkZjhlZDYxOWQxNjc0NmI4ZTJlZDZlMDBjYjNiNjYzNTlkYWNjNTk3ZGM2MDBjZjA3ZTg4YzBiMGI3MmJiZjg5NWFkZWQ0MDY5NTQ2MTgzMzJmZWEzIiwiaWF0IjoxNjY5NzkzOTg1LCJleHAiOjE2Njk4ODAzODV9._CZbsdz7iEvOmJnmtITy1IDbXXl-DCsmTrWBc_Q0gDk
Content-Type: application/json
Content-Length: 278

{
    "nama": "nama",
    "rate": "rate",
    "overview": "overview",
    "pengalaman": "pengalaman",
    "pendidikan1": "pendidikan1",
    "pendidikan2": "pendidikan2",
    "contact": "contact",
    "img": "img"
}
```
### DELETE
```
DELETE /partners/:id
Host: localhost:5555
```

## BLOG 

### GET
```
GET /blog
Host: localhost:5555
```
### GET BY ID
```
GET /blog/:id
Host: localhost:5555
```
### CREATE
```
POST /blog/add-blog
Host: localhost:5555
Content-Type: application/json
Content-Length: 278
{
    "img": "https://imgonline.netlify.app/img/page7.png",
    "link": "https://ditsmp.kemdikbud.go.id/mengatasi-perundungan-di-sekolah-dengan-program-roots/"
}
```
