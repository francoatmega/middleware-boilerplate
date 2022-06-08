const app = require('../../../app')
const supertest = require('supertest')
const requestHandler = require('../../../src/presenters/request')
const req = supertest(app)

beforeAll(async () => {
  process.env.API_SECRET = 'dd0cf380-1063-4bbb-b1bf-25daeb64826a'
})

describe('Test getOne user route', () => {
  it('should return user information when pass a userId', async () => {
    jest.spyOn(requestHandler, 'request').mockImplementation(() => {
      return {
        status: 200,
        data: {
          userName: 'Jardel Matias',
          userEmail: 'jardelmatias@live.com'
        }
      }
    })
    const res = await req.get('/middleware/api/user/:userId').set('Authorization', `Bearer ${process.env.API_SECRET}`)
    expect(res.body).toEqual({
      userName: 'Jardel Matias',
      userEmail: 'jardelmatias@live.com'
    })
  })
})
