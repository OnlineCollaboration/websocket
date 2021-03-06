import { describe, expect, it } from 'vitest'
import { Connection, ConnectionState } from '@/connection'

describe('Connection', function () {
    it('basic', async () =>
        new Promise<void>(function (resolve) {
            const con = new Connection('ws://localhost:9527/ws')
            expect(con).toBeInstanceOf(Connection)
            con.addEventListener('open', () => {
                expect(con.state).not.toEqual(ConnectionState.CONNECTING)
                resolve()
            })
        }))
})
