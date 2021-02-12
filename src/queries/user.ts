export const getUserSql = () => `
SELECT *
  FROM ASSOCIADO
 WHERE UPPER(NOME) LIKE UPPER(?)
`