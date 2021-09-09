# Making API contracts useful

# 🤝

---

![balazs](./img.jpg)

# Balázs Édes

## Budapest

---

# back to API contracts...

---

![bear 1](./bears1.png)

---

<!-- fragments-start -->

<!-- block-start: red -->

- Hey man, we're done with the backend. Check out: `http://bookshelf.com/books`

<!-- block-end -->

<!-- block-start: blue -->

- Hmmm... I get no response, any idea why?

<!-- block-end -->

<!-- block-start: red -->

- Do you hit it with the `GET` method

<!-- block-end -->

<!-- block-start: blue -->

- Yes

<!-- block-end -->

<!-- block-start: red -->

- Ah, I forgot to tell you we expect a custom header `X-Book-Store: ...`

<!-- block-end -->

<!-- block-start: blue -->

- Now I get data back, but I get like a million records, is there a way to paginate this?

<!-- block-end -->

<!-- block-start: red -->

- Of course, use the `offset` and `limit` query params

<!-- block-end -->

...

<!-- fragments-end -->

---

![bear2](./bears2.png)

---

# a few weeks later...

---

<!-- fragments-start -->

<!-- block-start: blue -->

- Hey man, I'm hitting the `POST /books` endpoint, but I get a 500

<!-- block-end -->

<!-- block-start: red -->

- Hmmm... can you send me the payload

<!-- block-end -->

<!-- block-start: blue -->

- Sure `{ ... }`

<!-- block-end -->

<!-- block-start: red -->

- Ah yes we added the `foo` field that you have to send.

<!-- block-end -->

<!-- block-start: blue -->

- Now I get a response, but the `bar` field is missing.

<!-- block-end -->

<!-- block-start: red -->

- Yes, about that, we removed that, you have to request that separately.

<!-- block-end -->

...

<!-- fragments-end -->

---

![bear3](./bears2.png)

---

# the problem

## no formal contract

---

# the solution

- OpenAPI (HTTP)
- AsyncAPI (2 way communication)
- GraphQL (Hybrid)
- ...

---

## api-definition.json

```json
{
  "openapi": "3.0.0",
  "paths": {
    "/users": {
      "get": {
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": { "type": "string" }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

---

# why are we not using them?

- No incentive to maintain them on their own
- Low quality code generators

---

# code generator quality

- Hard to run
- Questionable output
- No or little customization

---

# shameless plug

## https://github.com/bali182/oats
