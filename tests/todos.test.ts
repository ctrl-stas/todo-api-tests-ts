import { expect, test, describe } from "vitest"
import axios from "axios"

const BASE_URL = "https://jsonplaceholder.typicode.com/todos"

describe("TODOS CRUD", () => {

  test("CREATE todo (POST)", async () => {
    const body = { title: "test todo", completed: false, userId: 1 }
    const res = await axios.post(BASE_URL, body)
    expect(res.status).toBe(201)
    expect(res.data).toHaveProperty("id")
  })

  test("READ todo (GET)", async () => {
    const res = await axios.get(`${BASE_URL}/1`)
    expect(res.status).toBe(200)
    expect(res.data).toHaveProperty("id", 1)
  })

  test("UPDATE todo (PUT)", async () => {
    const body = { id: 1, title: "updated", completed: true, userId: 1 }
    const res = await axios.put(`${BASE_URL}/1`, body)
    expect(res.status).toBe(200)
    expect(res.data.title).toBe("updated")
  })

  test("DELETE todo (DELETE)", async () => {
    const res = await axios.delete(`${BASE_URL}/1`)
    expect([200, 204]).toContain(res.status)
  })

})
