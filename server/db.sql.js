import {createPool} from 'mysql2/promise'

export const pool = new createPool({
    'host': '167.250.5.28',
    'database': 'wjcrugcf_aplicacion',
    'port': 3306,
    'user':'wjcrugcf_admin',
    'password': 'B*7p@(To9gf('

})