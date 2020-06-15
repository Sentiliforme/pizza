## Get all categories
GET `/category`

### Query params
```
?
includeProducts: boolean
```
---
## Create category
POST `/category`

---

## Get single category
GET `/category/:categoryId`

---
## Get all products
GET `/product`

---
## Create product
POST `/product`
### Body
Category products

---
## Add product to category
PUT `/category/:categoryId/product/:productId`


## Edit product
PUT `/product/:productId`
### Body
```
  {
    name?: number
    product_ingredients?: 
  }
```