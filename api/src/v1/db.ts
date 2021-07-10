import mysql from 'mysql2/promise';
import { Setting } from '../setting';

type Setting = {
  host: string;
  user: string;
  password: string;
  database: string;
};

export type Threshold = {
  moisture: number;
  temperature_high: number;
  temperature_low: number;
  humidity_high: number;
  humidity_low: number;
  air_pressure: number;
};

const dbSetting: Setting = {
  host: Setting.MYSQL_HOST,
  user: Setting.MYSQL_USER,
  password: Setting.MYSQL_PASSWORD,
  database: Setting.MYSQL_HOST_DATABASE,
};

/**
 * 土壌の水分量を取得
 * @async
 * @returns rows
 */
export const getMoisture = async () => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = 'select * from soil_moistures';
  const [rows, fields] = await conn.query(sql);
  return rows;
};

/**
 * 閾値の更新
 * @async
 * @returns rows
 */

export const editThreshold = async (threshold: Threshold) => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = `UPDATE configs SET 
                moisture = ${threshold.moisture},
                temperature_high = ${threshold.temperature_high},
                temperature_low = ${threshold.temperature_low},
                humidity_high = ${threshold.humidity_high},
                humidity_low = ${threshold.humidity_low},
                air_pressure = ${threshold.air_pressure}
                WHERE id = 1
              `;
  const [rows, fields] = await conn.query(sql);
  return rows;
};

export const getThreshold = async () => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = 'select * from configs';
  const [rows, fields] = await conn.query(sql);
  return rows;
};
