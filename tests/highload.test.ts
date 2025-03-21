import axios from 'axios'

async function main() {
  const result = {
    success: 0,
    errors: 0
  }

  const requests = new Array(10000).fill(0).map(async () => {
    try {
      await axios.patch('http://0.0.0.0:4000/api/v1/users/balance', { userId: 1, amount: -2 })
      result.success++
    } catch {
      result.errors++
    }
  })

  await Promise.all(requests)

  console.log(result)
}

main()
