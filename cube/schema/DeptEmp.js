cube(`DeptEmp`, {
  sql: `SELECT * FROM employees.dept_emp`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    Departments: {
      relationship: `hasMany`,
      sql: `${DeptEmp}.dept_no = ${Departments}.dept_no`,
    },
  },

  measures: {},

  dimensions: {
    id: {
      sql: `${CUBE}.emp_no || '-' || ${CUBE}.dept_no || '-' || ${CUBE}.from_date`,
      type: `string`,
      primaryKey: true,
    },
    fromDate: {
      sql: `from_date`,
      type: `time`,
    },
    toDate: {
      sql: `to_date`,
      type: `time`,
    },
  },

  dataSource: `default`,
});
