import axios from 'axios'

let PubgApi = axios.create({
    method: 'get',
    headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3NTJmYjc1MC02ZmM4LTAxM2EtMzdkMy0zNTFkN2YzMmZmZDIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjQ0ODQ1NTM5LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImF3b3RleCJ9.NlgAZyg1WrTnkL6Nrx8Q6M86Z2hMu5yetDUVstQ3WJg",
        "Accept": "application/vnd.api+json",
    }
})

export default PubgApi;